import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Commercial HVAC Services Tampa Bay, FL | North East Heating & Cooling',
  description:
    'Full-service commercial HVAC in Tampa Bay, FL. Installation, repair, maintenance, duct work, exhaust fans, and water heaters for offices, restaurants, retail, and more. Call (813) 291-6146.',
  keywords: [
    'commercial HVAC Tampa',
    'commercial HVAC Tampa Bay',
    'commercial air conditioning Tampa',
    'commercial heating Tampa',
    'commercial HVAC services Florida',
    'HVAC contractor Tampa Bay',
  ],
  openGraph: {
    title: 'Commercial HVAC Services Tampa Bay, FL | North East Heating & Cooling',
    description:
      'Full-service commercial HVAC in Tampa Bay, FL. Installation, repair, maintenance, duct work, exhaust fans, and water heaters. Call (813) 291-6146.',
    type: 'website',
    locale: 'en_US',
  },
}

const services = [
  {
    href: '/commercial/hvac-installation-tampa-fl',
    title: 'Commercial HVAC Installation & Replacement',
    description:
      'New rooftop units, split systems, VRF/VRV systems, and chilled water systems installed with minimal disruption to your Tampa Bay business operations.',
    icon: '🏗️',
  },
  {
    href: '/commercial/hvac-service-tampa',
    title: 'Commercial HVAC Service & Repair',
    description:
      'Preventive maintenance plans and emergency repair services that keep your commercial HVAC system running at peak efficiency year-round in Florida\'s demanding climate.',
    icon: '🔧',
  },
  {
    href: '/commercial/air-duct-repair-tampa',
    title: 'Commercial Air Duct Repair & Replacement',
    description:
      'Leak detection, duct sealing, and full duct replacement for commercial buildings throughout Tampa Bay. Improve IAQ and reduce energy waste.',
    icon: '💨',
  },
  {
    href: '/commercial/exhaust-fan-repair-tampa',
    title: 'Commercial Exhaust Fan Repair',
    description:
      'Expert repair and replacement of commercial kitchen exhaust fans, industrial ventilation systems, and rooftop exhaust units for Tampa Bay businesses.',
    icon: '🌀',
  },
  {
    href: '/commercial/water-heater-repair-tampa',
    title: 'Commercial Water Heater Repair & Replacement',
    description:
      'Tank and tankless commercial water heater diagnostics, repair, and replacement for restaurants, hotels, offices, and multi-unit properties in Tampa Bay.',
    icon: '🔥',
  },
]

const industries = [
  { name: 'Office Buildings', detail: 'Multi-tenant and single-tenant office spaces require precise climate control for employee comfort and productivity.' },
  { name: 'Restaurants & Food Service', detail: 'Kitchen exhaust, make-up air, and dining room comfort are critical in Tampa Bay\'s heat. We keep your operation running.' },
  { name: 'Retail Stores', detail: 'Consistent temperatures protect merchandise and keep shoppers comfortable — essential for Tampa\'s hot, humid summers.' },
  { name: 'Warehouses & Distribution', detail: 'Large-space cooling and ventilation solutions designed for high ceilings, heavy equipment loads, and Florida heat.' },
  { name: 'Medical & Dental Facilities', detail: 'Precise temperature and humidity control with advanced filtration to meet healthcare air quality standards.' },
  { name: 'Hotels & Hospitality', detail: 'Guest comfort demands 24/7 reliability. We service everything from PTACs to central chilled water systems.' },
  { name: 'Schools & Churches', detail: 'Budget-conscious maintenance plans and energy-efficient upgrades for educational and religious facilities across Tampa Bay.' },
  { name: 'Industrial Facilities', detail: 'Process cooling, ventilation, and exhaust systems engineered for Tampa Bay\'s industrial sector.' },
]

export default function CommercialPage() {
  return (
    <main className="font-sans text-gray-800">

      {/* Hero Section */}
      <section className="bg-[#0f1620] text-white py-20 px-4">
        <div className="max-w-5xl mx-auto text-center">
          <p className="text-blue-300 text-sm font-semibold uppercase tracking-widest mb-3">
            Tampa Bay&apos;s Commercial HVAC Specialists
          </p>
          <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
            Commercial HVAC Services in Tampa Bay, FL
          </h1>
          <p className="text-blue-100 text-lg md:text-xl max-w-3xl mx-auto mb-8">
            North East Heating &amp; Cooling delivers reliable, code-compliant commercial HVAC solutions for
            businesses of every size across Tampa Bay. From a single rooftop unit to a full multi-building
            mechanical system, our licensed technicians handle it all — on schedule and within budget.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:8132916146"
              className="inline-block bg-orange-500 hover:bg-orange-600 text-white font-bold py-4 px-8 rounded-lg text-lg transition-colors"
            >
              Call (813) 291-6146
            </a>
            <a
              href="#contact"
              className="inline-block bg-white hover:bg-blue-50 text-blue-900 font-bold py-4 px-8 rounded-lg text-lg transition-colors"
            >
              Request a Free Estimate
            </a>
          </div>
        </div>
      </section>

      {/* Trust Badges */}
      <section className="bg-[#0f1620] text-white py-6 px-4">
        <div className="max-w-5xl mx-auto flex flex-wrap justify-center gap-8 text-center text-sm font-medium">
          <div className="flex items-center gap-2">
            <span className="text-orange-400 text-xl">✓</span> Licensed &amp; Insured in Florida
          </div>
          <div className="flex items-center gap-2">
            <span className="text-orange-400 text-xl">✓</span> 24/7 Emergency Service
          </div>
          <div className="flex items-center gap-2">
            <span className="text-orange-400 text-xl">✓</span> Free Commercial Estimates
          </div>
          <div className="flex items-center gap-2">
            <span className="text-orange-400 text-xl">✓</span> All Major Brands Serviced
          </div>
          <div className="flex items-center gap-2">
            <span className="text-orange-400 text-xl">✓</span> Serving All of Tampa Bay
          </div>
        </div>
      </section>

      {/* Why Commercial HVAC Is Different in Tampa Bay */}
      <section className="bg-white py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-4 text-center">
            Commercial HVAC in Tampa Bay Demands More
          </h2>
          <p className="text-gray-600 text-center max-w-3xl mx-auto mb-10 text-lg">
            Florida&apos;s subtropical climate is one of the most demanding environments for HVAC equipment in the
            country. With temperatures regularly exceeding 90°F from April through October, humidity levels that
            routinely push past 80%, and summer storm season that can knock out power and damage equipment,
            Tampa Bay commercial businesses need HVAC systems and service providers they can count on.
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-blue-50 rounded-xl p-6">
              <h3 className="text-lg font-bold text-blue-900 mb-2">Extreme Heat &amp; Humidity</h3>
              <p className="text-gray-600 text-sm">
                Tampa Bay averages over 250 sunny days per year. Commercial cooling systems run nearly
                year-round, meaning components wear faster and demand higher-quality service to maintain
                efficiency and reliability.
              </p>
            </div>
            <div className="bg-blue-50 rounded-xl p-6">
              <h3 className="text-lg font-bold text-blue-900 mb-2">Mold &amp; Indoor Air Quality</h3>
              <p className="text-gray-600 text-sm">
                High humidity creates ideal conditions for mold growth in ductwork and coils. Proper
                commercial maintenance isn&apos;t just about comfort — it&apos;s a health and liability issue
                for Florida businesses.
              </p>
            </div>
            <div className="bg-blue-50 rounded-xl p-6">
              <h3 className="text-lg font-bold text-blue-900 mb-2">Florida Code Compliance</h3>
              <p className="text-gray-600 text-sm">
                Commercial HVAC work in Florida must meet strict building codes, energy efficiency
                standards, and environmental regulations. Our technicians stay current with all state and
                local requirements.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="bg-gray-50 py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-3 text-center">
            Our Commercial HVAC Services
          </h2>
          <p className="text-gray-600 text-center max-w-2xl mx-auto mb-10">
            We offer a complete range of commercial mechanical services to keep your Tampa Bay business
            comfortable, efficient, and compliant.
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            {services.map((service) => (
              <Link
                key={service.href}
                href={service.href}
                className="bg-white rounded-xl p-6 border border-gray-200 hover:border-red-400 hover:shadow-md transition-all group"
              >
                <div className="flex items-start gap-4">
                  <span className="text-3xl">{service.icon}</span>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 group-hover:text-blue-700 mb-2">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed">{service.description}</p>
                    <span className="inline-block mt-3 text-blue-600 font-semibold text-sm group-hover:underline">
                      Learn More →
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Industries Served */}
      <section className="bg-white py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-3 text-center">
            Industries We Serve Across Tampa Bay
          </h2>
          <p className="text-gray-600 text-center max-w-2xl mx-auto mb-10">
            Our commercial HVAC technicians have experience across virtually every commercial sector in
            Tampa, St. Petersburg, Clearwater, Brandon, and throughout Hillsborough and Pinellas counties.
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            {industries.map((industry) => (
              <div key={industry.name} className="flex gap-4 items-start">
                <div className="mt-1 flex-shrink-0 w-6 h-6 bg-orange-500 rounded-full flex items-center justify-center">
                  <span className="text-white text-xs font-bold">✓</span>
                </div>
                <div>
                  <h3 className="font-bold text-gray-900">{industry.name}</h3>
                  <p className="text-gray-600 text-sm mt-1">{industry.detail}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-[#0f1620] text-white py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold mb-10 text-center">
            Why Tampa Bay Businesses Choose North East Heating &amp; Cooling
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-5xl font-black text-orange-400 mb-2">24/7</div>
              <h3 className="text-lg font-bold mb-2">Emergency Response</h3>
              <p className="text-blue-200 text-sm">
                A failed AC in Tampa summer heat isn&apos;t just uncomfortable — it can drive away
                customers and shut down operations. We respond fast, any time of day or night.
              </p>
            </div>
            <div className="text-center">
              <div className="text-5xl font-black text-orange-400 mb-2">100%</div>
              <h3 className="text-lg font-bold mb-2">Licensed &amp; Insured</h3>
              <p className="text-blue-200 text-sm">
                All work is performed by Florida-licensed technicians and backed by full liability
                insurance and workmanship guarantees. No surprises, no shortcuts.
              </p>
            </div>
            <div className="text-center">
              <div className="text-5xl font-black text-orange-400 mb-2">Free</div>
              <h3 className="text-lg font-bold mb-2">Commercial Estimates</h3>
              <p className="text-blue-200 text-sm">
                We provide detailed written estimates for all commercial installation and replacement
                projects — so you know exactly what you&apos;re getting before any work begins.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Service Area */}
      <section className="bg-gray-50 py-12 px-4">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Serving All of Tampa Bay
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto mb-6">
            North East Heating &amp; Cooling provides commercial HVAC services throughout the Tampa Bay
            region, including Tampa, St. Petersburg, Clearwater, Brandon, Riverview, Wesley Chapel,
            Lutz, Land O&apos; Lakes, Plant City, and surrounding communities in Hillsborough and
            Pinellas counties.
          </p>
          <Link
            href="/service-areas"
            className="inline-block text-blue-700 font-semibold hover:underline"
          >
            View All Service Areas →
          </Link>
        </div>
      </section>

      {/* CTA / Contact Section */}
      <section id="contact" className="bg-white py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-3 text-center">
            Get a Free Commercial HVAC Estimate
          </h2>
          <p className="text-gray-600 text-center mb-10">
            Ready to discuss your commercial HVAC needs? Call us or fill out the form below and a
            member of our team will be in touch within one business day.
          </p>
          <div className="grid md:grid-cols-2 gap-10">
            {/* Contact Info */}
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-bold text-gray-900 mb-4">Contact Us Directly</h3>
                <a
                  href="tel:8132916146"
                  className="flex items-center gap-3 text-blue-700 hover:text-blue-900 font-semibold text-xl mb-3"
                >
                  <span className="text-2xl">📞</span> (813) 291-6146
                </a>
                <a
                  href="mailto:office@northeastheatingcooling.com"
                  className="flex items-center gap-3 text-blue-700 hover:text-blue-900 font-medium"
                >
                  <span className="text-xl">✉️</span> office@northeastheatingcooling.com
                </a>
              </div>
              <div>
                <h3 className="font-bold text-gray-900 mb-2">Hours</h3>
                <ul className="text-gray-600 text-sm space-y-1">
                  <li>Monday – Friday: 7:00 AM – 6:00 PM</li>
                  <li>Saturday: 8:00 AM – 4:00 PM</li>
                  <li>24/7 Emergency Service Available</li>
                </ul>
              </div>
              <div>
                <h3 className="font-bold text-gray-900 mb-2">Also See</h3>
                <ul className="text-sm space-y-1">
                  <li>
                    <Link href="/residential" className="text-blue-600 hover:underline">
                      Residential HVAC Services →
                    </Link>
                  </li>
                  <li>
                    <Link href="/service-areas" className="text-blue-600 hover:underline">
                      Our Service Area →
                    </Link>
                  </li>
                </ul>
              </div>
            </div>

            {/* Contact Form */}
            <form className="bg-gray-50 rounded-xl p-6 space-y-4 border border-gray-200">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Business Name
                </label>
                <input
                  type="text"
                  name="business"
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Acme Corporation"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Your Name
                </label>
                <input
                  type="text"
                  name="name"
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="John Smith"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Phone Number
                </label>
                <input
                  type="tel"
                  name="phone"
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="(813) 555-0100"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="you@example.com"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Service Needed
                </label>
                <select
                  name="service"
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="">Select a service...</option>
                  <option>Commercial HVAC Installation</option>
                  <option>Commercial HVAC Repair / Service</option>
                  <option>Air Duct Repair / Replacement</option>
                  <option>Exhaust Fan Repair</option>
                  <option>Commercial Water Heater</option>
                  <option>Maintenance Plan</option>
                  <option>Other / Not Sure</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Message
                </label>
                <textarea
                  name="message"
                  rows={3}
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Tell us about your commercial HVAC needs..."
                />
              </div>
              <button
                type="submit"
                className="w-full bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-6 rounded-lg transition-colors"
              >
                Send My Request
              </button>
            </form>
          </div>
        </div>
      </section>
    </main>
  )
}
