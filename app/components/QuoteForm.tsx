'use client'

import { useState, useRef, useEffect } from 'react'

const serviceTypes = [
  { value: 'ac-repair', label: 'AC Repair' },
  { value: 'ac-installation', label: 'AC Installation' },
  { value: 'heating-repair', label: 'Heating Repair' },
  { value: 'air-duct-repair', label: 'Air Duct Repair' },
  { value: 'exhaust-fan', label: 'Exhaust Fan Repair' },
  { value: 'water-heater', label: 'Water Heater' },
  { value: 'commercial', label: 'Commercial HVAC' },
  { value: 'other', label: 'Other' },
]

export default function QuoteForm() {
  const [submitted, setSubmitted] = useState(false)
  const [submitting, setSubmitting] = useState(false)
  const [error, setError] = useState(false)
  const [smsConsent, setSmsConsent] = useState(false)

  // Timing token: stamps when the form first renders. Server rejects
  // submissions that come back in <3s (bot) or >2h (stale).
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
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          first_name: data.get('firstName') as string,
          last_name: data.get('lastName') as string,
          phone: data.get('phone') as string,
          email: data.get('email') as string,
          service_type: data.get('service') as string,
          contact_method: '',
          message: '',
          // Honeypot — hidden field. If a bot fills it, server silently rejects.
          company_url: data.get('company_url') as string,
          // Timing token — server rejects submissions that arrive too fast.
          form_started_at: formStartedAtRef.current,
          // SMS opt-in consent (express written consent for A2P 10DLC)
          sms_consent: smsConsent,
          sms_consent_timestamp: smsConsent ? new Date().toISOString() : '',
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
      <div className="flex flex-col items-center justify-center text-center py-10 gap-4">
        <div className="w-16 h-16 rounded-full bg-green-500/20 flex items-center justify-center">
          <svg className="w-8 h-8 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="text-xl font-extrabold text-white">We Got Your Request!</h3>
        <p className="text-slate-300 max-w-xs text-sm">
          A member of our team will reach out shortly. For immediate help, call{' '}
          <a href="tel:8132916146" className="text-white font-bold underline">
            (813) 291-6146
          </a>
        </p>
      </div>
    )
  }

  return (
    <form className="space-y-4" onSubmit={handleSubmit}>
      {/*
        Honeypot field: hidden from real users via CSS, ignored by tab order
        and screen readers. Bots that auto-fill every field will fill this in,
        and the server will silently reject the submission.
      */}
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
        <label htmlFor="company_url">Don&apos;t fill this in if you&apos;re human:</label>
        <input
          type="text"
          id="company_url"
          name="company_url"
          tabIndex={-1}
          autoComplete="off"
          defaultValue=""
        />
      </div>

      {/* First Name + Last Name row */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <input
          type="text"
          name="firstName"
          placeholder="First Name"
          required
          autoComplete="given-name"
          className="w-full bg-white/20 border border-white/30 text-white placeholder-slate-400 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-white/50"
        />
        <input
          type="text"
          name="lastName"
          placeholder="Last Name"
          required
          autoComplete="family-name"
          className="w-full bg-white/20 border border-white/30 text-white placeholder-slate-400 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-white/50"
        />
      </div>
      {/* Phone + Email row */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <input
          type="tel"
          name="phone"
          placeholder="Phone Number"
          required
          autoComplete="tel"
          className="w-full bg-white/20 border border-white/30 text-white placeholder-slate-400 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-white/50"
        />
        <input
          type="email"
          name="email"
          placeholder="Email Address"
          required
          autoComplete="email"
          className="w-full bg-white/20 border border-white/30 text-white placeholder-slate-400 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-white/50"
        />
      </div>
      <select
        name="service"
        required
        className="w-full bg-white/20 border border-white/30 text-white rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-white/50"
      >
        <option value="" className="text-gray-900">Select Service</option>
        {serviceTypes.map((s) => (
          <option key={s.value} value={s.label} className="text-gray-900">
            {s.label}
          </option>
        ))}
      </select>

      {/* SMS consent — unchecked by default, optional (consent is NOT a condition of service per A2P rules) */}
      <label className="flex items-start gap-3 text-left cursor-pointer">
        <input
          type="checkbox"
          name="sms_consent"
          checked={smsConsent}
          onChange={(e) => setSmsConsent(e.target.checked)}
          className="mt-0.5 h-4 w-4 shrink-0 rounded border-white/40 bg-white/20 accent-[#C8330A]"
        />
        <span className="text-[0.72rem] leading-snug text-slate-300">
          I agree to receive text messages from North East Heating &amp; Cooling about my request,
          appointment updates, and service follow-ups. Msg &amp; data rates may apply, frequency
          varies. Reply STOP to opt out or HELP for help. Consent is not a condition of purchase. See our{' '}
          <a href="/privacy-policy" className="underline text-white hover:text-[#F0A06A]">Privacy Policy</a>.
        </span>
      </label>

      {error && (
        <p className="text-red-300 text-sm text-center">
          Something went wrong. Please try again or{' '}
          <a href="tel:8132916146" className="underline">call us directly</a>.
        </p>
      )}
      <button
        type="submit"
        disabled={submitting}
        className="w-full bg-white text-[#0f1620] font-bold text-lg py-4 rounded-lg hover:bg-[#C8330A]/5 transition-colors shadow-lg disabled:opacity-60"
      >
        {submitting ? 'Sending...' : 'Get My Free Quote →'}
      </button>
    </form>
  )
}
