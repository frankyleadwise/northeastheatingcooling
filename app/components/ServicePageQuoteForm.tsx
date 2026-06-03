'use client'

import { useState, useRef, useEffect } from 'react'

type Props = {
  /** Heading shown above the form, e.g. "Request Water Heater Service" */
  heading: string
  /** Pre-filled service value sent to GHL */
  defaultService: string
  /** Placeholder text in the message field */
  messagePlaceholder?: string
}

/**
 * Service-page quote form. Used on individual service landing pages
 * (water heater, AC repair, etc) where we want the same lead capture
 * as the homepage but with page-specific pre-fills.
 *
 * Includes the same 4-layer spam protection as the main QuoteForm:
 *   1. Honeypot field (hidden)
 *   2. Timing token (form_started_at)
 *   3. Server-side validation (handled in /api/contact)
 *   4. Server-side rate limiting (handled in /api/contact)
 */
export default function ServicePageQuoteForm({
  heading,
  defaultService,
  messagePlaceholder = 'Briefly describe what you need help with...',
}: Props) {
  const [submitted, setSubmitted] = useState(false)
  const [submitting, setSubmitting] = useState(false)
  const [error, setError] = useState(false)

  const formStartedAtRef = useRef<number>(Date.now())
  useEffect(() => {
    formStartedAtRef.current = Date.now()
  }, [])

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setSubmitting(true)
    setError(false)
    const form = e.currentTarget
    const data = new FormData(form)

    // Split single name field into first/last for GHL.
    const fullName = ((data.get('name') as string) || '').trim()
    const nameParts = fullName.split(/\s+/)
    const firstName = nameParts[0] || ''
    const lastName = nameParts.slice(1).join(' ') || nameParts[0] || ''

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          first_name: firstName,
          last_name: lastName,
          phone: data.get('phone') as string,
          email: data.get('email') as string,
          service_type: defaultService,
          contact_method: '',
          message: (data.get('message') as string) || '',
          company_url: data.get('company_url') as string,
          form_started_at: formStartedAtRef.current,
        }),
      })
      if (!res.ok) throw new Error('Failed')
      setSubmitted(true)
    } catch {
      setError(true)
    } finally {
      setSubmitting(false)
    }
  }

  if (submitted) {
    return (
      <div className="bg-white rounded-2xl p-7 text-gray-900 shadow-xl">
        <div className="flex flex-col items-center justify-center text-center py-8 gap-4">
          <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center">
            <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h3 className="text-xl font-extrabold text-gray-900">We Got Your Request!</h3>
          <p className="text-gray-600 max-w-xs text-sm">
            A member of our team will reach out shortly. For immediate help, call{' '}
            <a href="tel:8132916146" className="text-[#C8330A] font-bold underline">
              (813) 291-6146
            </a>
          </p>
        </div>
      </div>
    )
  }

  return (
    <form
      className="bg-white rounded-2xl p-7 text-gray-900 shadow-xl"
      onSubmit={handleSubmit}
    >
      <h3 className="text-xl font-bold text-gray-800 mb-5">{heading}</h3>

      {/* Honeypot — hidden from real users, bots fill it */}
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          left: '-9999px',
          top: 'auto',
          width: '1px',
          height: '1px',
          overflow: 'hidden',
        }}
      >
        <label htmlFor={`${defaultService}-company_url`}>
          Don&apos;t fill this in if you&apos;re human:
        </label>
        <input
          type="text"
          id={`${defaultService}-company_url`}
          name="company_url"
          tabIndex={-1}
          autoComplete="off"
          defaultValue=""
        />
      </div>

      <div className="space-y-4">
        <div>
          <label htmlFor={`${defaultService}-name`} className="block text-sm font-semibold text-gray-700 mb-1">
            Your Name
          </label>
          <input
            id={`${defaultService}-name`}
            type="text"
            name="name"
            placeholder="John Smith"
            required
            autoComplete="name"
            className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-[#C8330A] focus:ring-2 focus:ring-[#C8330A]/15"
          />
        </div>
        <div>
          <label htmlFor={`${defaultService}-phone`} className="block text-sm font-semibold text-gray-700 mb-1">
            Phone Number
          </label>
          <input
            id={`${defaultService}-phone`}
            type="tel"
            name="phone"
            placeholder="(813) 555-1234"
            required
            autoComplete="tel"
            className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-[#C8330A] focus:ring-2 focus:ring-[#C8330A]/15"
          />
        </div>
        <div>
          <label htmlFor={`${defaultService}-email`} className="block text-sm font-semibold text-gray-700 mb-1">
            Email Address
          </label>
          <input
            id={`${defaultService}-email`}
            type="email"
            name="email"
            placeholder="john@example.com"
            required
            autoComplete="email"
            className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-[#C8330A] focus:ring-2 focus:ring-[#C8330A]/15"
          />
        </div>
        <div>
          <label htmlFor={`${defaultService}-message`} className="block text-sm font-semibold text-gray-700 mb-1">
            Describe Your Issue
          </label>
          <textarea
            id={`${defaultService}-message`}
            name="message"
            placeholder={messagePlaceholder}
            rows={4}
            className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-[#C8330A] focus:ring-2 focus:ring-[#C8330A]/15 resize-none"
          />
        </div>
        {error && (
          <p className="text-[#C8330A] text-sm text-center">
            Something went wrong. Please try again or{' '}
            <a href="tel:8132916146" className="underline font-semibold">call us directly</a>.
          </p>
        )}
        <button
          type="submit"
          disabled={submitting}
          className="w-full bg-[#b02c08] hover:bg-[#0f1620] active:bg-[#0f1620] text-white font-bold py-3.5 rounded-lg transition-colors text-base disabled:opacity-60"
        >
          {submitting ? 'Sending...' : 'Submit Request'}
        </button>
        <p className="text-xs text-gray-500 text-center">
          For urgent situations, call{' '}
          <a href="tel:8132916146" className="text-[#C8330A] font-semibold">(813) 291-6146</a>{' '}
          directly for fastest response.
        </p>
      </div>
    </form>
  )
}
