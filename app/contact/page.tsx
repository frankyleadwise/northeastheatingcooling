'use client'

import { useState } from 'react'
import type { FormEvent } from 'react'

// ─── SVG Icons ───────────────────────────────────────────────────────────────
const PhoneIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7" aria-hidden="true">
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.4 2 2 0 0 1 3.6 1.22h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L7.91 8.8a16 16 0 0 0 6.29 6.29l.95-.95a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
  </svg>
)

const MailIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7" aria-hidden="true">
    <rect width="20" height="16" x="2" y="4" rx="2" />
    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
  </svg>
)

const ClockIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7" aria-hidden="true">
    <circle cx="12" cy="12" r="10" />
    <polyline points="12 6 12 12 16 14" />
  </svg>
)

const AlertIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6 shrink-0" aria-hidden="true">
    <path d="M10.29 3.86 1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" />
    <line x1="12" x2="12" y1="9" y2="13" />
    <line x1="12" x2="12.01" y1="17" y2="17" />
  </svg>
)

const MapPinIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 text-blue-500 shrink-0 mt-0.5" aria-hidden="true">
    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
    <circle cx="12" cy="10" r="3" />
  </svg>
)

const CheckIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 text-green-600 shrink-0" aria-hidden="true">
    <path d="M20 6 9 17l-5-5" />
  </svg>
)

// ─── Data ────────────────────────────────────────────────────────────────────
const serviceAreas = [
  'Tampa, FL',
  'Brandon, FL',
  'Riverview, FL',
  'Wesley Chapel, FL',
  'Clearwater, FL',
  'St. Petersburg, FL',
  'Largo, FL',
  'Palm Harbor, FL',
  'Pinellas Park, FL',
  'Carrollwood, FL',
  'Lutz, FL',
  'Land O Lakes, FL',
  'Odessa, FL',
  'New Port Richey, FL',
  'Apollo Beach, FL',
  'Sun City Center, FL',
  'Ruskin, FL',
  'Gibsonton, FL',
  'Valrico, FL',
  'Plant City, FL',
]

const serviceTypes = [
  'AC Repair',
  'AC Installation',
  'Heating Repair',
  'Air Duct Repair',
  'Exhaust Fan Repair',
  'Water Heater Repair',
  'Commercial HVAC',
  'Other',
]

// ─── Page ────────────────────────────────────────────────────────────────────
export default function ContactPage() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    phone: '',
    email: '',
    serviceType: '',
    contactMethod: 'Phone',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)
  const [submitting, setSubmitting] = useState(false)

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setSubmitting(true)
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          first_name: formData.firstName,
          last_name: formData.lastName,
          phone: formData.phone,
          email: formData.email,
          service_type: formData.serviceType,
          contact_method: formData.contactMethod,
          message: formData.message,
        }),
      })
      if (!res.ok) throw new Error('Failed')
      setSubmitted(true)
    } catch {
      alert('Something went wrong. Please try again or call us at (813) 291-6146.')
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <>
      {/* ── Hero ──────────────────────────────────────────────────────────── */}
      <section className="hero-gradient text-white section-padding">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-blue-200 font-semibold text-sm uppercase tracking-widest mb-3">
            We&apos;re Here to Help
          </p>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight mb-5">
            Contact North East Heating &amp; Cooling
          </h1>
          <p className="text-blue-100 text-lg sm:text-xl max-w-3xl mx-auto leading-relaxed">
            Reach out for fast, friendly service. Whether it&apos;s a repair, installation, or just a question — we&apos;re ready to help.
          </p>
        </div>
      </section>

      {/* ── Emergency Callout ─────────────────────────────────────────────── */}
      <section className="bg-red-600 text-white py-5 px-4">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3 text-center sm:text-left">
            <AlertIcon />
            <div>
              <p className="font-extrabold text-lg leading-tight">HVAC Emergency? We&apos;re Available 24/7</p>
              <p className="text-red-100 text-sm">AC down in the Tampa heat? Don&apos;t wait — call us now for immediate response.</p>
            </div>
          </div>
          <a href="tel:8132916146" className="inline-flex items-center gap-2 px-6 py-3 bg-white text-red-600 font-extrabold rounded-xl text-base hover:bg-red-50 transition-colors whitespace-nowrap shadow-md">
            <PhoneIcon />
            (813) 291-6146
          </a>
        </div>
      </section>

      {/* ── Contact Info Cards ────────────────────────────────────────────── */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-blue-600 font-semibold text-sm uppercase tracking-widest mb-2">Get in Touch</p>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900">Contact Information</h2>
          </div>

          {/* Info cards row */}
          <div className="grid sm:grid-cols-3 gap-6 mb-16">
            {/* Phone */}
            <a href="tel:8132916146" className="group flex flex-col items-center text-center p-8 rounded-2xl border-2 border-blue-100 bg-blue-50 hover:border-blue-500 hover:bg-red-600 hover:text-white transition-all shadow-sm">
              <div className="w-16 h-16 flex items-center justify-center rounded-2xl bg-red-600 group-hover:bg-white text-white group-hover:text-blue-600 mb-4 transition-colors"><PhoneIcon /></div>
              <p className="text-xs font-bold uppercase tracking-widest text-blue-500 group-hover:text-blue-100 mb-1 transition-colors">Call Us</p>
              <p className="text-xl font-extrabold text-gray-900 group-hover:text-white transition-colors">(813) 291-6146</p>
              <p className="text-sm text-gray-500 group-hover:text-blue-100 mt-1 transition-colors">24/7 Emergency Line</p>
            </a>

            {/* Email */}
            <a href="mailto:office@northeastheatingcooling.com" className="group flex flex-col items-center text-center p-8 rounded-2xl border-2 border-blue-100 bg-blue-50 hover:border-blue-500 hover:bg-red-600 hover:text-white transition-all shadow-sm">
              <div className="w-16 h-16 flex items-center justify-center rounded-2xl bg-red-600 group-hover:bg-white text-white group-hover:text-blue-600 mb-4 transition-colors"><MailIcon /></div>
              <p className="text-xs font-bold uppercase tracking-widest text-blue-500 group-hover:text-blue-100 mb-1 transition-colors">Email Us</p>
              <p className="text-base font-extrabold text-gray-900 group-hover:text-white transition-colors break-all">office@northeastheatingcooling.com</p>
              <p className="text-sm text-gray-500 group-hover:text-blue-100 mt-1 transition-colors">We reply within 1 business day</p>
            </a>

            {/* Hours */}
            <div className="flex flex-col items-center text-center p-8 rounded-2xl border-2 border-blue-100 bg-blue-50 shadow-sm">
              <div className="w-16 h-16 flex items-center justify-center rounded-2xl bg-red-600 text-white mb-4"><ClockIcon /></div>
              <p className="text-xs font-bold uppercase tracking-widest text-blue-500 mb-1">Business Hours</p>
              <div className="space-y-1 text-sm text-gray-700">
                <p className="font-semibold text-gray-900">Mon – Fri: 7:00 AM – 7:00 PM</p>
                <p className="font-semibold text-gray-900">Saturday: 8:00 AM – 5:00 PM</p>
                <p className="font-bold text-red-600">Emergency: 24 / 7 Available</p>
              </div>
            </div>
          </div>

          {/* ── Contact Form + Map ────────────────────────────────────────── */}
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Form */}
            <div className="bg-gray-50 rounded-2xl p-8 border border-gray-200">
              <h2 className="text-2xl font-extrabold text-gray-900 mb-2">Send Us a Message</h2>
              <p className="text-gray-500 text-sm mb-6">Fill out the form and we&apos;ll get back to you shortly.</p>

              {submitted ? (
                <div className="flex flex-col items-center justify-center text-center py-12 gap-4">
                  <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center">
                    <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-extrabold text-gray-900">Message Received!</h3>
                  <p className="text-gray-500 max-w-xs">Thank you for reaching out. A member of our team will contact you within 1 business day.</p>
                  <p className="text-sm text-gray-400">
                    For immediate help, call{' '}
                    <a href="tel:8132916146" className="text-blue-600 font-semibold">(813) 291-6146</a>
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate className="space-y-5">
                  {/* First Name + Last Name row */}
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="firstName" className="block text-sm font-semibold text-gray-700 mb-1.5">
                        First Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        id="firstName"
                        name="firstName"
                        type="text"
                        required
                        value={formData.firstName}
                        onChange={handleChange}
                        placeholder="John"
                        className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-gray-900 placeholder-gray-400 text-sm bg-white"
                      />
                    </div>
                    <div>
                      <label htmlFor="lastName" className="block text-sm font-semibold text-gray-700 mb-1.5">
                        Last Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        id="lastName"
                        name="lastName"
                        type="text"
                        required
                        value={formData.lastName}
                        onChange={handleChange}
                        placeholder="Smith"
                        className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-gray-900 placeholder-gray-400 text-sm bg-white"
                      />
                    </div>
                  </div>

                  {/* Phone + Email row */}
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-1.5">
                        Phone <span className="text-red-500">*</span>
                      </label>
                      <input
                        id="phone"
                        name="phone"
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="(813) 555-0100"
                        className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-gray-900 placeholder-gray-400 text-sm bg-white"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-1.5">
                        Email <span className="text-red-500">*</span>
                      </label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="john@email.com"
                        className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-gray-900 placeholder-gray-400 text-sm bg-white"
                      />
                    </div>
                  </div>

                  {/* Service Type */}
                  <div>
                    <label htmlFor="serviceType" className="block text-sm font-semibold text-gray-700 mb-1.5">
                      Service Type
                    </label>
                    <select
                      id="serviceType"
                      name="serviceType"
                      value={formData.serviceType}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-gray-900 text-sm bg-white"
                    >
                      <option value="">Select a service…</option>
                      {serviceTypes.map((s) => (
                        <option key={s} value={s}>{s}</option>
                      ))}
                    </select>
                  </div>

                  {/* Preferred Contact Method */}
                  <div>
                    <p className="block text-sm font-semibold text-gray-700 mb-2">Preferred Contact Method</p>
                    <div className="flex gap-4">
                      {['Phone', 'Email'].map((method) => (
                        <label key={method} className="flex items-center gap-2 cursor-pointer">
                          <input
                            type="radio"
                            name="contactMethod"
                            value={method}
                            checked={formData.contactMethod === method}
                            onChange={handleChange}
                            className="w-4 h-4 text-blue-600 border-gray-300 focus:ring-blue-500"
                          />
                          <span className="text-sm text-gray-700">{method}</span>
                        </label>
                      ))}
                    </div>
                  </div>

                  {/* Message */}
                  <div>
                    <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-1.5">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Describe your HVAC issue or what you need…"
                      className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-gray-900 placeholder-gray-400 text-sm bg-white resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={submitting}
                    className="w-full py-3.5 px-6 bg-red-600 hover:bg-red-700 disabled:bg-blue-400 text-white font-extrabold rounded-xl transition-colors shadow-sm text-base"
                  >
                    {submitting ? 'Sending…' : 'Send Message'}
                  </button>
                  <p className="text-xs text-gray-400 text-center">
                    Your information is never shared or sold. We only use it to contact you about your request.
                  </p>
                </form>
              )}
            </div>

            {/* Map + Service Areas */}
            <div className="flex flex-col gap-8">
              {/* Google Maps embed */}
              <div className="rounded-2xl overflow-hidden border border-gray-200 shadow-sm">
                <div className="bg-blue-50 px-5 py-3 border-b border-gray-200 flex items-center justify-between">
                  <div>
                    <p className="font-bold text-gray-800 text-sm">North East Heating And Cooling</p>
                    <p className="text-gray-500 text-xs">12831 Buffalo Run Dr, Gibsonton, FL 33534</p>
                  </div>
                  <a
                    href="https://www.google.com/maps/place/North+East+Heating+And+Cooling/@27.8027777,-82.3512035,17z/data=!4m6!3m5!1s0x2003b66f381708c5:0xb21d6d85ffd57b3c!8m2!3d27.8027777!4d-82.3512035!16s%2Fg%2F11ldsk9rrj"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-semibold text-blue-700 hover:text-blue-900 underline whitespace-nowrap"
                  >
                    Open in Maps ↗
                  </a>
                </div>
                <iframe
                  title="North East Heating And Cooling location map"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3529.12!2d-82.3512035!3d27.8027777!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2003b66f381708c5%3A0xb21d6d85ffd57b3c!2sNorth%20East%20Heating%20And%20Cooling!5e0!3m2!1sen!2sus!4v1710000000000!5m2!1sen!2sus"
                  width="100%"
                  height="280"
                  style={{ border: 0, display: 'block' }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>

              {/* Service Areas */}
              <div className="bg-gray-50 rounded-2xl p-6 border border-gray-200">
                <h3 className="font-extrabold text-gray-900 text-lg mb-4">Areas We Serve</h3>
                <ul className="grid grid-cols-2 gap-x-4 gap-y-2">
                  {serviceAreas.map((city) => (
                    <li key={city} className="flex items-center gap-2">
                      <CheckIcon />
                      <span className="text-sm text-gray-600">{city}</span>
                    </li>
                  ))}
                </ul>
                <p className="text-xs text-gray-400 mt-4">
                  Don&apos;t see your city?{' '}
                  <a href="tel:8132916146" className="text-blue-600 font-semibold hover:underline">Call us</a>{' '}
                  — we may still be able to help.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
