import React from 'react'
import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'HVAC Services Tampa Bay, FL | North East Heating & Cooling',
  description:
    'Complete HVAC services for Tampa Bay homes and businesses. AC repair, installation, heating, air ducts, water heaters & commercial HVAC. Licensed & certified. Call (813) 291-6146.',
}

// ─── SVG Icons ────────────────────────────────────────────────────────────────

const PhoneIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="w-5 h-5"
    aria-hidden="true"
  >
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.4 2 2 0 0 1 3.6 1.22h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L7.91 8.8a16 16 0 0 0 6.29 6.29l.95-.95a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
  </svg>
)

const ArrowRightIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="w-4 h-4"
    aria-hidden="true"
  >
    <path d="M5 12h14M12 5l7 7-7 7" />
  </svg>
)

const CheckIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="w-5 h-5 text-blue-600 shrink-0"
    aria-hidden="true"
  >
    <path d="M20 6 9 17l-5-5" />
  </svg>
)

// AC icon
const AcIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="w-7 h-7"
    aria-hidden="true"
  >
    <rect x="2" y="6" width="20" height="8" rx="2" />
    <path d="M7 18h10M6 22h12M12 14v4" />
  </svg>
)

// Wrench/repair icon
const WrenchIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="w-7 h-7"
    aria-hidden="true"
  >
    <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
  </svg>
)

// Wind/duct icon
const WindIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="w-7 h-7"
    aria-hidden="true"
  >
    <path d="M17.7 7.7a2.5 2.5 0 1 1 1.8 4.3H2" />
    <path d="M9.6 4.6A2 2 0 1 1 11 8H2" />
    <path d="M12.6 19.4A2 2 0 1 0 14 16H2" />
  </svg>
)

// Fan icon
const FanIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="w-7 h-7"
    aria-hidden="true"
  >
    <path d="M10.827 16.379a6.082 6.082 0 0 1-8.618-7.002l5.412 1.45a6.082 6.082 0 0 1 7.002-8.618l-1.45 5.412a6.082 6.082 0 0 1 8.618 7.002l-5.412-1.45a6.082 6.082 0 0 1-7.002 8.618l1.45-5.412z" />
    <circle cx="12" cy="12" r="1.5" fill="currentColor" />
  </svg>
)

// Droplet/water heater icon
const DropletIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="w-7 h-7"
    aria-hidden="true"
  >
    <path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z" />
  </svg>
)

// Building/commercial icon
const BuildingIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="w-7 h-7"
    aria-hidden="true"
  >
    <rect x="4" y="2" width="16" height="20" rx="2" />
    <path d="M9 22v-4h6v4M8 6h.01M12 6h.01M16 6h.01M8 10h.01M12 10h.01M16 10h.01M8 14h.01M12 14h.01M16 14h.01" />
  </svg>
)

// Flame/heating icon
const FlameIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="w-7 h-7"
    aria-hidden="true"
  >
    <path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z" />
  </svg>
)

// Shield/guarantee icon
const ShieldIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="w-6 h-6 text-blue-600 shrink-0"
    aria-hidden="true"
  >
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
  </svg>
)

// ─── Data ─────────────────────────────────────────────────────────────────────

const residentialServices = [
  {
    Icon: WrenchIcon,
    title: 'AC Repair',
    slug: '/residential/hvac-service-tampa',
    description:
      'Fast, accurate air conditioning repairs for Tampa Bay homes. Our NATE-certified techs diagnose and fix any AC brand or model — same day available.',
  },
  {
    Icon: AcIcon,
    title: 'AC Installation',
    slug: '/residential/hvac-installation-tampa-fl',
    description:
      'Energy-efficient AC system installations sized perfectly for your home. We work with all major brands and handle everything from removal to startup.',
  },
  {
    Icon: FlameIcon,
    title: 'Heating Repair',
    slug: '/residential/hvac-service-tampa',
    description:
      'Furnace and heat pump repair to keep your home comfortable during Tampa Bay\'s cooler months. Honest diagnostics, reliable fixes.',
  },
  {
    Icon: WindIcon,
    title: 'Air Duct Repair',
    slug: '/residential/air-duct-repair-tampa',
    description:
      'Leaky or damaged ducts can raise your energy bills by 30% or more. We inspect, seal, and repair ductwork throughout your home for maximum efficiency.',
  },
  {
    Icon: FanIcon,
    title: 'Exhaust Fan Repair',
    slug: '/residential/exhaust-fan-repair-tampa',
    description:
      'Bathroom and kitchen exhaust fans are essential for moisture control and indoor air quality. We repair and replace all models quickly and affordably.',
  },
  {
    Icon: DropletIcon,
    title: 'Water Heater Repair',
    slug: '/residential/water-heater-repair-tampa',
    description:
      'From traditional tank water heaters to tankless systems, we repair and replace units to restore your hot water fast. All brands serviced.',
  },
]

const commercialServices = [
  {
    Icon: BuildingIcon,
    title: 'Commercial HVAC Service',
    slug: '/commercial/hvac-service-tampa',
    description:
      'Rooftop units, split systems, and commercial air handlers serviced and repaired to minimize downtime for your Tampa Bay business.',
  },
  {
    Icon: AcIcon,
    title: 'Commercial AC Installation',
    slug: '/commercial/hvac-installation-tampa-fl',
    description:
      'Full commercial HVAC system design, supply, and installation. We work with offices, retail, restaurants, warehouses, and more.',
  },
  {
    Icon: WindIcon,
    title: 'Commercial Air Duct Services',
    slug: '/commercial/air-duct-repair-tampa',
    description:
      'Commercial ductwork inspection, sealing, and repair to improve air quality and reduce energy waste across your entire facility.',
  },
  {
    Icon: DropletIcon,
    title: 'Commercial Water Heater',
    slug: '/commercial/water-heater-repair-tampa',
    description:
      'High-capacity commercial water heater installation and repair. We keep the hot water flowing for your employees and customers.',
  },
]

const benefits = [
  {
    title: 'NATE-Certified Technicians',
    description:
      'Every technician holds NATE certification — the gold standard in HVAC expertise.',
  },
  {
    title: 'Upfront, Flat-Rate Pricing',
    description:
      'You\'ll know the full cost before we start. No hidden fees, no hourly surprises.',
  },
  {
    title: 'Same-Day Service Available',
    description:
      'Most repairs can be scheduled for the same day you call. We respect your time.',
  },
  {
    title: '24/7 Emergency Response',
    description:
      'HVAC emergencies don\'t keep business hours — and neither do we.',
  },
  {
    title: 'Satisfaction Guarantee',
    description:
      'All work is backed by our satisfaction guarantee. If something isn\'t right, we\'ll fix it.',
  },
  {
    title: 'Licensed & Fully Insured',
    description:
      'Florida-licensed HVAC contractor, fully insured for your protection on every job.',
  },
]

// ─── Sub-components ────────────────────────────────────────────────────────────

function ServiceCard({
  Icon,
  title,
  slug,
  description,
}: {
  Icon: () => React.ReactElement
  title: string
  slug: string
  description: string
}) {
  return (
    <div className="group bg-white rounded-2xl p-6 border border-gray-100 shadow-sm hover:shadow-md hover:border-blue-200 transition-all flex flex-col">
      <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-blue-50 text-blue-600 group-hover:bg-red-600 group-hover:text-white transition-colors mb-4 shrink-0">
        <Icon />
      </div>
      <h3 className="font-extrabold text-gray-900 text-lg mb-2">{title}</h3>
      <p className="text-gray-500 text-sm leading-relaxed flex-1">{description}</p>
      <Link
        href={slug}
        className="mt-5 inline-flex items-center gap-1.5 text-blue-600 hover:text-blue-800 font-semibold text-sm transition-colors"
      >
        Learn More <ArrowRightIcon />
      </Link>
    </div>
  )
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function ServicesPage() {
  return (
    <>
      {/* ── Hero ──────────────────────────────────────────────────────────── */}
      <section className="hero-gradient text-white section-padding relative overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.pexels.com/photos/5813746/pexels-photo-5813746.jpeg?auto=compress&cs=tinysrgb&w=1600"
            alt="Happy family enjoying comfortable air conditioned home in Tampa Bay"
            className="w-full h-full object-cover object-center opacity-40"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0f1620]/80 via-[#0f1620]/60 to-[#0f1620]/40" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-blue-200 font-semibold text-sm uppercase tracking-widest mb-3">
            Tampa Bay&apos;s Full-Service HVAC Company
          </p>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight mb-5 max-w-4xl mx-auto">
            Complete HVAC Services for Tampa Bay Homes &amp; Businesses
          </h1>
          <p className="text-blue-100 text-lg sm:text-xl max-w-3xl mx-auto leading-relaxed mb-8">
            From emergency AC repairs to full system replacements — residential
            and commercial — North East Heating &amp; Cooling handles it all.
            Licensed, certified, and trusted by 5,000+ Tampa Bay customers.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href="tel:8132916146"
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-white text-blue-700 font-extrabold rounded-xl hover:bg-blue-50 transition-colors shadow-sm text-base"
            >
              <PhoneIcon />
              (813) 291-6146
            </a>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-7 py-3.5 border-2 border-white text-white font-bold rounded-xl hover:bg-white/10 transition-colors text-base"
            >
              Get a Free Quote
            </Link>
          </div>
        </div>
      </section>

      {/* ── Residential Services ──────────────────────────────────────────── */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-blue-600 font-semibold text-sm uppercase tracking-widest mb-2">
              Residential HVAC
            </p>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 leading-tight">
              Home HVAC Services
            </h2>
            <p className="text-gray-500 mt-3 max-w-2xl mx-auto">
              Keeping Tampa Bay families comfortable year-round with expert
              residential HVAC repair, installation, and maintenance.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {residentialServices.map((service) => (
              <ServiceCard key={service.title} {...service} />
            ))}
          </div>

          <div className="mt-10 text-center">
            <Link
              href="/residential"
              className="inline-flex items-center gap-2 px-6 py-3 bg-red-600 hover:bg-red-700 text-white font-bold rounded-xl transition-colors text-sm"
            >
              View All Residential Services <ArrowRightIcon />
            </Link>
          </div>
        </div>
      </section>

      {/* ── Commercial Services ───────────────────────────────────────────── */}
      <section className="section-padding bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-blue-600 font-semibold text-sm uppercase tracking-widest mb-2">
              Commercial HVAC
            </p>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 leading-tight">
              Business &amp; Commercial Services
            </h2>
            <p className="text-gray-500 mt-3 max-w-2xl mx-auto">
              Minimize downtime and keep your employees and customers
              comfortable with dependable commercial HVAC service throughout
              the Tampa Bay area.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {commercialServices.map((service) => (
              <ServiceCard key={service.title} {...service} />
            ))}
          </div>

          <div className="mt-10 text-center">
            <Link
              href="/commercial"
              className="inline-flex items-center gap-2 px-6 py-3 bg-red-600 hover:bg-red-700 text-white font-bold rounded-xl transition-colors text-sm"
            >
              View All Commercial Services <ArrowRightIcon />
            </Link>
          </div>
        </div>
      </section>

      {/* ── Why Choose North East ─────────────────────────────────────────── */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-blue-600 font-semibold text-sm uppercase tracking-widest mb-2">
              The North East Advantage
            </p>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 leading-tight">
              Why Choose North East Heating &amp; Cooling?
            </h2>
            <p className="text-gray-500 mt-3 max-w-2xl mx-auto">
              Tampa Bay has plenty of HVAC companies. Here&apos;s why over 5,000
              local customers keep choosing us.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {benefits.map(({ title, description }) => (
              <div
                key={title}
                className="flex gap-4 p-5 rounded-2xl border border-gray-100 shadow-sm bg-white hover:border-blue-100 transition-colors"
              >
                <ShieldIcon />
                <div>
                  <h3 className="font-bold text-gray-900 text-sm mb-1">
                    {title}
                  </h3>
                  <p className="text-gray-500 text-sm leading-relaxed">
                    {description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ───────────────────────────────────────────────────────────── */}
      <section className="section-padding bg-red-700 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-extrabold mb-4 leading-tight">
            Ready to Schedule Your HVAC Service?
          </h2>
          <p className="text-blue-100 text-lg mb-8 max-w-2xl mx-auto">
            Call now or request a free quote online. Our team is ready to help
            Tampa Bay homes and businesses stay comfortable.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:8132916146"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-blue-700 font-extrabold rounded-xl hover:bg-blue-50 transition-colors shadow-md text-lg"
            >
              <PhoneIcon />
              (813) 291-6146
            </a>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-white font-bold rounded-xl hover:bg-white/10 transition-colors text-lg"
            >
              Request a Free Quote
            </Link>
          </div>
          <p className="text-blue-200 text-sm mt-5">
            Mon–Fri 7am–7pm &bull; Sat 8am–5pm &bull; 24/7 Emergency Available
          </p>
        </div>
      </section>
    </>
  )
}
