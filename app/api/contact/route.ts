import { NextResponse } from 'next/server'

const GHL_WEBHOOK_URL =
  'https://services.leadconnectorhq.com/hooks/nvoJtQFq4ilLfNgVboFy/webhook-trigger/du7xRBvZDTnonwd8CwoC'

export async function POST(request: Request) {
  try {
    const body = await request.json()

    const fullName = (body.full_name || '').trim()
    const nameParts = fullName.split(' ')
    const first_name = nameParts[0] || ''
    const last_name = nameParts.slice(1).join(' ') || ''

    const payload = {
      first_name,
      last_name,
      full_name: fullName,
      phone: (body.phone || '').replace(/\D/g, ''),
      email: body.email || '',
      service_type: body.service_type || '',
      contact_method: body.contact_method || '',
      message: body.message || '',
    }

    const ghlResponse = await fetch(GHL_WEBHOOK_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    })

    if (!ghlResponse.ok) {
      console.error('GHL webhook error:', await ghlResponse.text())
      return NextResponse.json({ success: false, error: 'Upstream error' }, { status: 502 })
    }

    return NextResponse.json({ success: true })
  } catch (err) {
    console.error('Contact API error:', err)
    return NextResponse.json({ success: false, error: 'Server error' }, { status: 500 })
  }
}
