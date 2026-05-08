import Link from 'next/link'
import type { CityData } from '@/lib/cityData'

const RESIDENTIAL_SERVICES = [
  { href: '/residential/hvac-service-tampa', title: 'AC & HVAC Repair', desc: 'Same-day repair on all brands' },
  { href: '/residential/hvac-installation-tampa-fl', title: 'AC Installation', desc: 'Energy-efficient new installs' },
  { href: '/residential/ac-maintenance-tampa', title: 'AC Maintenance', desc: 'Twice-yearly tune-up plans' },
  { href: '/residential/heat-pump-tampa', title: 'Heat Pump', desc: 'Variable-speed systems' },
  { href: '/residential/ductless-mini-split-tampa', title: 'Ductless Mini-Split', desc: 'Single or multi-zone' },
  { href: '/residential/air-duct-repair-tampa', title: 'Duct Repair', desc: 'Sealing & replacement' },
  { href: '/residential/exhaust-fan-repair-tampa', title: 'Exhaust Fan', desc: 'Bathroom & kitchen fans' },
  { href: '/residential/water-heater-repair-tampa', title: 'Water Heater', desc: 'Tank & tankless service' },
]

export default function ServiceAreaTemplate({ city }: { city: CityData }) {
  const url = `https://northeastheatingcooling.com/service-areas/${city.slug}`

  const localBusinessSchema = {
    '@context': 'https://schema.org',
    '@type': 'HVACBusiness',
    '@id': url,
    name: 'North East Heating And Cooling',
    description: `Professional HVAC repair, AC installation, and maintenance services in ${city.display}, FL`,
    telephone: '+1-813-291-6146',
    url,
    areaServed: {
      '@type': 'City',
      name: city.display,
      containedInPlace: { '@type': 'AdministrativeArea', name: city.county },
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: city.lat,
      longitude: city.lng,
    },
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Tampa',
      addressRegion: 'FL',
      addressCountry: 'US',
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '5.0',
      reviewCount: '35',
    },
  }

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://northeastheatingcooling.com' },
      { '@type': 'ListItem', position: 2, name: 'Service Areas', item: 'https://northeastheatingcooling.com/service-areas' },
      { '@type': 'ListItem', position: 3, name: `${city.display}, FL` },
    ],
  }

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: city.faqs.map((f) => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a },
    })),
  }

  return (
    <main className="font-sans">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      {/* Hero */}
      <section className="relative bg-[#0f1620] text-white py-20 px-4 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={`https://images.pexels.com/photos/${city.heroPhotoId}/pexels-photo-${city.heroPhotoId}.jpeg?auto=compress&cs=tinysrgb&w=1600`}
            alt={`HVAC service in ${city.display} Florida — North East Heating And Cooling`}
            className="w-full h-full object-cover object-center opacity-40"
            loading="eager"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0f1620]/80 via-[#0f1620]/60 to-[#0f1620]/40" />
        </div>
        <div className="relative z-10 max-w-5xl mx-auto">
          <p className="text-orange-300 font-semibold text-sm uppercase tracking-widest mb-3">
            {city.county} — Trusted HVAC Company
          </p>
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-5">
            HVAC Services in {city.display}, FL
          </h1>
          <p className="text-blue-100 text-lg md:text-xl max-w-3xl mb-8 leading-relaxed">
            {city.heroSubhead}
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
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
              Request a Free Quote
            </Link>
          </div>
        </div>
      </section>

      {/* Trust bar */}
      <section className="bg-[#0f1620] text-white py-4 px-4">
        <div className="max-w-5xl mx-auto flex flex-wrap justify-center md:justify-between gap-x-8 gap-y-2 text-sm font-semibold text-blue-200">
          <span>✓ Licensed &amp; Insured</span>
          <span>✓ Same-Day Service</span>
          <span>✓ 35+ 5★ Reviews</span>
          <span>✓ Lifetime Workmanship Warranty</span>
          <span>✓ Free Estimates</span>
        </div>
      </section>

      {/* Intro */}
      <section className="bg-white py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-extrabold text-gray-900 mb-5">
            HVAC Service for {city.display} Homeowners and Businesses
          </h2>
          {city.introParagraphs.map((p, i) => (
            <p key={i} className="text-gray-700 leading-relaxed mb-4 text-lg" dangerouslySetInnerHTML={{ __html: p }} />
          ))}
        </div>
      </section>

      {/* Services grid */}
      <section className="bg-gray-50 py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-extrabold text-gray-900 mb-3">Services We Offer in {city.display}</h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Full-service residential and commercial HVAC for {city.display} homes and businesses.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {RESIDENTIAL_SERVICES.map((s) => (
              <Link
                key={s.href}
                href={s.href}
                className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm hover:shadow-md hover:border-orange-200 transition-all group"
              >
                <h3 className="text-lg font-bold text-gray-900 mb-1 group-hover:text-orange-700 transition-colors">{s.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{s.desc}</p>
                <span className="text-orange-600 text-sm font-semibold mt-3 inline-block">Learn more →</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Why choose us */}
      <section className="bg-white py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-extrabold text-gray-900 mb-8 text-center">
            Why {city.display} Chooses North East Heating And Cooling
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-gray-50 rounded-2xl p-6 border border-gray-100">
              <div className="text-3xl mb-3">⚡</div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Fast Response</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Most {city.display} service calls scheduled same-day or next-day. Emergency dispatch in 1–2 hours.
              </p>
            </div>
            <div className="bg-gray-50 rounded-2xl p-6 border border-gray-100">
              <div className="text-3xl mb-3">💰</div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Honest Pricing</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Written estimates before any work starts. No surprise charges, no high-pressure upsells.
              </p>
            </div>
            <div className="bg-gray-50 rounded-2xl p-6 border border-gray-100">
              <div className="text-3xl mb-3">🛡️</div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Lifetime Workmanship Warranty</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Every install is backed by our lifetime workmanship warranty — for as long as you own the home.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="bg-gray-50 py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-extrabold text-gray-900 mb-10 text-center">
            HVAC FAQs for {city.display} Homeowners
          </h2>
          <div className="space-y-4">
            {city.faqs.map((faq) => (
              <details key={faq.q} className="bg-white rounded-xl p-6 border border-gray-100 group shadow-sm">
                <summary className="font-bold text-gray-900 cursor-pointer text-lg flex items-start justify-between gap-4 list-none">
                  <span>{faq.q}</span>
                  <span className="shrink-0 text-orange-600 group-open:rotate-45 transition-transform text-2xl leading-none">+</span>
                </summary>
                <p className="text-gray-700 leading-relaxed mt-4">{faq.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-orange-50 border-y border-orange-100 py-12 px-4">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-1">Need HVAC Service in {city.display}?</h2>
            <p className="text-gray-600">
              Same-day appointments available. Free quotes on installations.{' '}
              <Link href="/contact" className="text-orange-700 font-semibold hover:underline">
                Request online →
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
    </main>
  )
}
