import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Residential HVAC Services in Tampa Bay, FL | North East Heating & Cooling',
  description:
    'Complete residential HVAC services in Tampa Bay, FL. AC repair, HVAC installation, air duct repair, exhaust fan repair & water heater services. Call (813) 291-6146.',
  keywords: [
    'residential HVAC Tampa Bay',
    'home AC repair Tampa',
    'HVAC installation Tampa FL',
    'air duct repair Tampa',
    'water heater repair Tampa',
    'exhaust fan repair Tampa',
    'North East Heating Cooling',
  ],
  openGraph: {
    title: 'Residential HVAC Services in Tampa Bay, FL | North East Heating & Cooling',
    description:
      'Complete residential HVAC services in Tampa Bay, FL. AC repair, HVAC installation, air duct repair, exhaust fan repair & water heater services.',
    url: 'https://northeastheatingcooling.com/residential',
    siteName: 'North East Heating & Cooling',
    locale: 'en_US',
    type: 'website',
  },
}

const services = [
  {
    title: 'HVAC Repair Services',
    href: '/residential/hvac-service-tampa',
    icon: '🔧',
    description:
      'Fast, reliable AC and heating repair for Tampa Bay homeowners. Our certified technicians diagnose and fix all HVAC brands. Emergency 24/7 service available.',
    highlights: ['AC repair & diagnostics', 'Heating system repair', '24/7 emergency service', 'System tune-ups'],
  },
  {
    title: 'HVAC Installation & Replacement',
    href: '/residential/hvac-installation-tampa-fl',
    icon: '🏠',
    description:
      'New AC installation and complete HVAC system replacement. We help you select the right energy-efficient system for your Tampa Bay home and budget.',
    highlights: ['New AC system installation', 'Full system replacement', 'Energy-efficient upgrades', 'Free installation estimates'],
  },
  {
    title: 'Air Duct Repair & Replacement',
    href: '/residential/air-duct-repair-tampa',
    icon: '💨',
    description:
      'Leaky or damaged ducts waste energy and reduce comfort. We seal, repair, and replace ductwork to restore proper airflow and improve indoor air quality.',
    highlights: ['Duct leak detection', 'Duct sealing & repair', 'Full duct replacement', 'Airflow balancing'],
  },
  {
    title: 'Exhaust Fan Repair',
    href: '/residential/exhaust-fan-repair-tampa',
    icon: '🌀',
    description:
      'Kitchen and bathroom exhaust fans are essential for Tampa Bay humidity control. We repair and replace motors, blades, and complete fan units.',
    highlights: ['Bathroom fan repair', 'Kitchen exhaust repair', 'Motor replacement', 'New fan installation'],
  },
  {
    title: 'Water Heater Repair & Replacement',
    href: '/residential/water-heater-repair-tampa',
    icon: '🚿',
    description:
      'Tank and tankless water heater repair, maintenance, and replacement. Keep hot water flowing efficiently in your Tampa Bay home year-round.',
    highlights: ['Water heater diagnostics', 'Tank & tankless repair', 'System replacement', 'Energy-efficient upgrades'],
  },
]

const reasons = [
  {
    title: 'Licensed & Insured',
    description: 'Fully licensed HVAC contractor serving Tampa Bay with proper insurance for your peace of mind.',
  },
  {
    title: 'Same-Day Service',
    description: "When your AC goes down in Florida's heat, you can't wait. We offer same-day and emergency service.",
  },
  {
    title: 'Upfront Pricing',
    description: 'No surprise bills. We provide clear, upfront estimates before any work begins.',
  },
  {
    title: 'All Major Brands',
    description: 'We service and install Carrier, Trane, Lennox, Rheem, York, Goodman, and all major HVAC brands.',
  },
  {
    title: 'Energy Efficiency Focus',
    description: "Florida homeowners deserve lower utility bills. We recommend and install Florida's most efficient HVAC systems.",
  },
  {
    title: 'Local Tampa Bay Experts',
    description: "We understand Tampa Bay's unique climate challenges — high humidity, salt air, and year-round cooling demands.",
  },
]

export default function ResidentialPage() {
  return (
    <main className="font-sans">
      {/* Hero Banner */}
      <section className="relative bg-[#0f1620] text-white py-20 px-4 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.pexels.com/photos/3875141/pexels-photo-3875141.jpeg?auto=compress&cs=tinysrgb&w=1600"
            alt="HVAC technician servicing residential air conditioning system in Tampa Bay FL"
            className="w-full h-full object-cover object-center opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0f1620]/80 via-[#0f1620]/60 to-[#0f1620]/40" />
        </div>
        <div className="relative z-10 max-w-5xl mx-auto text-center">
          <p className="text-blue-200 font-semibold text-sm uppercase tracking-widest mb-3">
            Tampa Bay, FL — Residential Services
          </p>
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-5">
            Residential HVAC Services in Tampa Bay, FL
          </h1>
          <p className="text-blue-100 text-lg md:text-xl max-w-3xl mx-auto mb-8">
            North East Heating &amp; Cooling delivers expert residential HVAC solutions across Tampa Bay. From emergency
            AC repair to complete system installations, our certified technicians keep your home comfortable 365 days a
            year — even during Florida&#39;s most brutal summers.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:8132916146"
              className="inline-flex items-center justify-center px-8 py-3.5 bg-white text-blue-800 font-bold text-lg rounded-lg hover:bg-blue-50 transition-colors shadow-lg"
            >
              Call (813) 291-6146
            </a>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-3.5 bg-red-600 text-white font-bold text-lg rounded-lg border-2 border-red-400 hover:bg-red-700 transition-colors"
            >
              Get a Free Estimate
            </Link>
          </div>
        </div>
      </section>

      {/* Intro Section */}
      <section className="bg-white py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="max-w-3xl">
            <h2 className="text-3xl font-bold text-gray-900 mb-5">
              Complete Home Comfort Solutions for Tampa Bay Homeowners
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-4">
              Living in Tampa Bay means relying on your HVAC system more than almost anywhere else in the country. With
              average summer temperatures above 90°F, humidity regularly topping 80%, and a cooling season that stretches
              nearly 10 months of the year, a properly functioning HVAC system isn&#39;t a luxury — it&#39;s a necessity.
            </p>
            <p className="text-gray-600 text-lg leading-relaxed mb-4">
              North East Heating &amp; Cooling specializes in residential HVAC services tailored specifically to Tampa
              Bay&#39;s climate. We understand how the subtropical heat, coastal humidity, and occasional cold snaps affect
              your home&#39;s comfort systems, and we have the expertise to keep everything running at peak performance.
            </p>
            <p className="text-gray-600 text-lg leading-relaxed">
              Whether you need urgent AC repair, a full system replacement, ductwork restoration, or water heater service,
              our local team is ready to help. Browse our residential services below, or call us now for same-day
              assistance.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="bg-gray-50 py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-3">Our Residential HVAC Services</h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              From quick repairs to complete system overhauls, we offer everything Tampa Bay homeowners need to stay
              comfortable all year long.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <Link
                key={service.href}
                href={service.href}
                className="group bg-white rounded-2xl p-7 shadow-sm border border-gray-100 hover:shadow-lg hover:border-blue-200 transition-all duration-200"
              >
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 group-hover:text-blue-700 mb-3 transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-5">{service.description}</p>
                <ul className="space-y-1.5">
                  {service.highlights.map((item) => (
                    <li key={item} className="flex items-center gap-2 text-sm text-gray-700">
                      <span className="w-1.5 h-1.5 rounded-full bg-red-600 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
                <span className="inline-block mt-5 text-blue-600 font-semibold text-sm group-hover:text-blue-800 transition-colors">
                  Learn more →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-white py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-3">
              Why Tampa Bay Homeowners Choose North East Heating &amp; Cooling
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              We&#39;ve built our reputation on honest, reliable service and technical expertise that handles Florida&#39;s unique
              HVAC demands.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {reasons.map((reason) => (
              <div key={reason.title} className="flex gap-4">
                <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center shrink-0 mt-0.5">
                  <span className="w-3 h-3 rounded-full bg-red-600 block" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-1">{reason.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{reason.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Area Banner */}
      <section className="bg-blue-50 border-y border-blue-100 py-12 px-4">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Serving the Entire Tampa Bay Area</h2>
            <p className="text-gray-600">
              We provide residential HVAC services throughout Tampa, Brandon, Riverview, Wesley Chapel, Clearwater, St.
              Petersburg, and the surrounding communities.{' '}
              <Link href="/service-areas" className="text-blue-600 font-semibold hover:underline">
                View all service areas →
              </Link>
            </p>
          </div>
          <a
            href="tel:8132916146"
            className="shrink-0 inline-flex items-center justify-center px-7 py-3 bg-red-700 text-white font-bold rounded-lg hover:bg-[#0f1620] transition-colors text-lg whitespace-nowrap"
          >
            Call Now: (813) 291-6146
          </a>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-[#0f1620] py-16 px-4 text-white">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-3xl font-bold mb-4">Ready to Schedule Service?</h2>
              <p className="text-blue-100 text-lg mb-6">
                Our Tampa Bay HVAC team is standing by. Call for same-day service or fill out the form and we&#39;ll get back
                to you within the hour during business hours.
              </p>
              <div className="space-y-3">
                <a href="tel:8132916146" className="flex items-center gap-3 text-white text-xl font-bold hover:text-blue-200 transition-colors">
                  <span className="bg-red-600 rounded-full w-10 h-10 flex items-center justify-center text-sm">📞</span>
                  (813) 291-6146
                </a>
                <a href="mailto:office@northeastheatingcooling.com" className="flex items-center gap-3 text-blue-200 hover:text-white transition-colors">
                  <span className="bg-red-600 rounded-full w-10 h-10 flex items-center justify-center text-sm">✉️</span>
                  office@northeastheatingcooling.com
                </a>
              </div>
            </div>
            <form className="bg-white rounded-2xl p-7 text-gray-900 shadow-xl">
              <h3 className="text-xl font-bold text-gray-800 mb-5">Request a Free Quote</h3>
              <div className="space-y-4">
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                />
                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone Number"
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Email Address"
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                />
                <textarea
                  name="message"
                  placeholder="Describe your HVAC issue or service needed..."
                  rows={4}
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100 resize-none"
                />
                <button
                  type="submit"
                  className="w-full bg-red-700 hover:bg-[#0f1620] text-white font-bold py-3 rounded-lg transition-colors text-base"
                >
                  Submit Request
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </main>
  )
}
