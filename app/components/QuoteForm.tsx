'use client'

import { useState } from 'react'

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
          full_name: data.get('name') as string,
          phone: data.get('phone') as string,
          email: data.get('email') as string,
          service_type: data.get('service') as string,
          contact_method: '',
          message: '',
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
        <p className="text-blue-200 max-w-xs text-sm">
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
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          required
          className="w-full bg-white/20 border border-white/30 text-white placeholder-blue-200 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-white/50"
        />
        <input
          type="tel"
          name="phone"
          placeholder="Phone Number"
          required
          className="w-full bg-white/20 border border-white/30 text-white placeholder-blue-200 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-white/50"
        />
      </div>
      <input
        type="email"
        name="email"
        placeholder="Email Address"
        className="w-full bg-white/20 border border-white/30 text-white placeholder-blue-200 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-white/50"
      />
      <select
        name="service"
        className="w-full bg-white/20 border border-white/30 text-white rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-white/50"
      >
        <option value="" className="text-gray-900">Select Service</option>
        {serviceTypes.map((s) => (
          <option key={s.value} value={s.label} className="text-gray-900">
            {s.label}
          </option>
        ))}
      </select>

      {error && (
        <p className="text-red-300 text-sm text-center">
          Something went wrong. Please try again or{' '}
          <a href="tel:8132916146" className="underline">call us directly</a>.
        </p>
      )}

      <button
        type="submit"
        disabled={submitting}
        className="w-full bg-white text-blue-900 font-bold text-lg py-4 rounded-lg hover:bg-blue-50 transition-colors shadow-lg disabled:opacity-60"
      >
        {submitting ? 'Sending…' : 'Get My Free Quote →'}
      </button>
    </form>
  )
}