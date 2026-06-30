import { NextResponse } from 'next/server'
import {
  validatePhone,
  validateEmail,
  validateName,
  validateTiming,
  validateOrigin,
  checkRateLimit,
} from '@/lib/spam-protection'

const GHL_WEBHOOK_URL =
  'https://services.leadconnectorhq.com/hooks/nvoJtQFq4ilLfNgVboFy/webhook-trigger/41ecc1fa-2251-404c-b691-3d15ee21d774'

/**
 * Silently rejects a request as if it succeeded.
 *
 * Why we return 200 OK instead of 4xx for spam:
 *   Bots probe for response codes to learn what works. If we return 400/403/429,
 *   they iterate payloads until something gets through. If we return 200,
 *   they think the submission worked and move on. This is the standard
 *   anti-spam pattern.
 *
 * The reason is logged server-side for our own visibility (Vercel logs).
 */
function silentReject(reason: string, payloadSummary?: object) {
  console.warn('[contact-spam-blocked]', reason, payloadSummary ?? '')
  return NextResponse.json({ success: true })
}

function getClientIp(request: Request): string {
  // Vercel populates these headers
  const forwarded = request.headers.get('x-forwarded-for')
  if (forwarded) return forwarded.split(',')[0]!.trim()
  const real = request.headers.get('x-real-ip')
  if (real) return real
  return 'unknown'
}

export async function POST(request: Request) {
  try {
    // ── Layer 0: Origin check (block direct API calls from curl/Postman/scripts)
    const origin = request.headers.get('origin')
    const originError = validateOrigin(origin)
    if (originError) {
      return silentReject(originError)
    }

    const body = await request.json()

    // ── Layer 1: Honeypot (hidden field humans never fill)
    if (body.company_url) {
      return silentReject('honeypot triggered')
    }

    // ── Layer 4: Rate limit (early to short-circuit volume attacks)
    const ip = getClientIp(request)
    const rateCheck = checkRateLimit(ip)
    if (!rateCheck.allowed) {
      return silentReject(`rate limit exceeded (${rateCheck.count} from ${ip})`)
    }

    // ── Layer 2: Timing check (form must take >= 3s to submit)
    const timingError = validateTiming(body.form_started_at)
    if (timingError) {
      return silentReject(timingError, { ip })
    }

    // ── Layer 3: Field validation
    const first_name = (body.first_name || '').trim()
    const last_name = (body.last_name || '').trim()
    const phone = (body.phone || '').trim()
    const email = (body.email || '').trim()

    const firstNameError = validateName(first_name)
    if (firstNameError) {
      return silentReject(`first_name: ${firstNameError}`, { first_name, ip })
    }

    const lastNameError = validateName(last_name)
    if (lastNameError) {
      return silentReject(`last_name: ${lastNameError}`, { last_name, ip })
    }

    const phoneError = validatePhone(phone)
    if (phoneError) {
      return silentReject(`phone: ${phoneError}`, { phone, ip })
    }

    const emailError = validateEmail(email)
    if (emailError) {
      return silentReject(`email: ${emailError}`, { email, ip })
    }

    // ── All checks passed — forward to GHL
    const payload = {
      first_name,
      last_name,
      phone: phone.replace(/\D/g, ''),
      email,
      service_type: body.service_type || '',
      contact_method: body.contact_method || '',
      message: body.message || '',
      // SMS opt-in consent record (retained for A2P 10DLC compliance)
      sms_consent: body.sms_consent === true || body.sms_consent === 'true',
      sms_consent_timestamp: body.sms_consent_timestamp || '',
    }

    const ghlResponse = await fetch(GHL_WEBHOOK_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    })

    if (!ghlResponse.ok) {
      const errorText = await ghlResponse.text()
      console.error('GHL webhook error:', ghlResponse.status, errorText)
      return NextResponse.json(
        { error: 'Failed to submit to CRM' },
        { status: 502 }
      )
    }

    console.log('[contact-success]', { first_name, last_name, ip })
    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Contact API error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}
