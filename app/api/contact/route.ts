import { NextResponse } from 'next/server'
import {
  validatePhone,
  validateEmail,
  validateName,
  validateTiming,
  validateOrigin,
  checkRateLimit,
} from '@/lib/spam-protection'

// Leads flow into the LeadWise Connect CRM (creates the lead, notifies the owner, fires recall).
// The token identifies the North East Heating And Cooling workspace.
const LEADWISE_WEBHOOK_URL =
  process.env.LEADWISE_WEBHOOK_URL ||
  'https://engine.leadwiseconnect.com/api/leads/u75LmgKZpuRkCZRytMr2hfvf'

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

    // ── All checks passed — forward to LeadWise Connect
    // LeadWise expects a single `name` field and camelCase smsConsent; the service type and any
    // preferred contact method are folded into the message so nothing is lost.
    const fullName = `${first_name} ${last_name}`.trim()
    const details = [
      body.service_type ? `Service: ${body.service_type}` : '',
      body.contact_method ? `Preferred contact: ${body.contact_method}` : '',
      body.message ? String(body.message) : '',
    ]
      .filter(Boolean)
      .join('\n')

    const payload = {
      name: fullName,
      email,
      phone: phone.replace(/\D/g, ''),
      message: details,
      source: 'website',
      smsConsent: body.sms_consent === true || body.sms_consent === 'true',
      sms_consent_timestamp: body.sms_consent_timestamp || '',
    }

    const leadwiseResponse = await fetch(LEADWISE_WEBHOOK_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    })

    if (!leadwiseResponse.ok) {
      const errorText = await leadwiseResponse.text()
      console.error('LeadWise webhook error:', leadwiseResponse.status, errorText)
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
