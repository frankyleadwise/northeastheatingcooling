import { NextResponse } from 'next/server'

const GHL_WEBHOOK_URL =
      'https://services.leadconnectorhq.com/hooks/nvoJtQFq4ilLfNgVboFy/webhook-trigger/41ecc1fa-2251-404c-b691-3d15ee21d774'

export async function POST(request: Request) {
      try {
              const body = await request.json()

        const first_name = (body.first_name || '').trim()
              const last_name = (body.last_name || '').trim()

        const payload = {
                  first_name,
                  last_name,
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
                  const errorText = await ghlResponse.text()
                  console.error('GHL webhook error:', ghlResponse.status, errorText)
                  return NextResponse.json(
                      { error: 'Failed to submit to CRM' },
                      { status: 502 }
                            )
        }

        return NextResponse.json({ success: true })
      } catch (error) {
              console.error('Contact API error:', error)
              return NextResponse.json(
                  { error: 'Internal server error' },
                  { status: 500 }
                      )
      }
}
