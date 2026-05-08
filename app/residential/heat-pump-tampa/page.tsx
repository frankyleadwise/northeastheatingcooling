import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Heat Pump Installation & Repair Tampa, FL | North East Heating And Cooling',
  description:
    'Heat pump installation, replacement, and repair in Tampa, FL. Variable-speed systems built for Florida humidity. Licensed, insured, lifetime workmanship warranty. Call (813) 291-6146.',
  keywords: [
    'heat pump tampa',
    'heat pump installation tampa',
    'heat pump repair',
    'heat pump replacement tampa',
    'heat pump tampa fl',
    'heat pump contractor tampa',
    'variable speed heat pump tampa',
    'heat pump florida',
    'heat pump vs ac florida',
    'best heat pump for florida',
  ],
  alternates: { canonical: '/residential/heat-pump-tampa' },
  openGraph: {
    title: 'Heat Pump Installation & Repair Tampa, FL | North East Heating And Cooling',
    description:
      'Heat pump installation, replacement, and repair in Tampa, FL. Variable-speed systems built for Florida humidity.',
    url: '/residential/heat-pump-tampa',
    siteName: 'North East Heating And Cooling',
    locale: 'en_US',
    type: 'website',
  },
}

const schemaData = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Heat Pump Installation & Repair',
  serviceType: 'Heat Pump Installation',
  description:
    'Professional heat pump installation, replacement, and repair services in Tampa, FL and the Tampa Bay area. Variable-speed systems optimized for Florida climate.',
  provider: {
    '@type': 'HVACBusiness',
    name: 'North East Heating And Cooling',
    telephone: '+1-813-291-6146',
    url: 'https://northeastheatingcooling.com',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Tampa',
      addressRegion: 'FL',
      addressCountry: 'US',
    },
  },
  areaServed: {
    '@type': 'GeoCircle',
    geoMidpoint: {
      '@type': 'GeoCoordinates',
      latitude: 27.9506,
      longitude: -82.4572,
    },
    geoRadius: '50000',
  },
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Heat Pump Services',
    itemListElement: [
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Heat Pump Installation' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Heat Pump Replacement' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Heat Pump Repair' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Variable-Speed Heat Pump Upgrade' } },
    ],
  },
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://northeastheatingcooling.com' },
    { '@type': 'ListItem', position: 2, name: 'Residential Services', item: 'https://northeastheatingcooling.com/residential' },
    { '@type': 'ListItem', position: 3, name: 'Heat Pump Services Tampa' },
  ],
}

const benefits = [
  {
    title: 'One System, Year-Round Comfort',
    desc: "A heat pump cools you in summer and heats you in winter — no separate furnace needed. For most Tampa Bay homes, this is the simpler and cheaper-to-maintain choice over a split system with a gas furnace.",
  },
  {
    title: 'Built for Florida Climate',
    desc: "Heat pumps are most efficient when outdoor temps stay above 30°F — which is essentially every winter day in Tampa Bay. They run circles around traditional furnaces in our climate.",
  },
  {
    title: 'Lower Energy Bills',
    desc: "Modern variable-speed heat pumps are 30–50% more efficient than 10-year-old single-stage units. Most Tampa homeowners see $40–$80 in monthly summer savings after upgrading.",
  },
  {
    title: 'Better Humidity Control',
    desc: "Variable-speed heat pumps run longer at lower output, which pulls more moisture out of the air. In a Tampa summer, that means less sticky-feeling air at the same thermostat setting.",
  },
  {
    title: 'Federal Tax Credits Available',
    desc: "Qualifying high-efficiency heat pumps are eligible for up to $2,000 in federal tax credits under the Inflation Reduction Act, plus possible utility rebates. We help you identify which models qualify.",
  },
  {
    title: 'Quieter Operation',
    desc: "Variable-speed compressors run at lower RPMs most of the time, which means significantly quieter outdoor units. You can hold a normal conversation standing next to a properly installed modern heat pump.",
  },
]

const services = [
  {
    title: 'New Heat Pump Installation',
    description:
      "Whether you're upgrading from a traditional split system or installing in new construction, our team handles the full installation — load calculation, ductwork verification, electrical, refrigerant lines, and commissioning. Every install includes a Manual J load calculation so the system is properly sized for your home, not oversold to you.",
    bullets: [
      'Manual J load calculation (right-sizing matters)',
      'Variable-speed inverter systems available',
      'Permitting and Tampa code compliance',
      'Complete refrigerant line installation',
      'Smart thermostat included on most installs',
      'Lifetime workmanship warranty',
    ],
  },
  {
    title: 'Heat Pump Replacement',
    description:
      "If your existing heat pump is over 12 years old, recurring repairs and rising energy bills usually mean replacement is the smarter financial play. We'll quote both the repair cost and the replacement cost so you can decide with full information — no pressure tactics. Most replacements are completed in a single day.",
    bullets: [
      'Same-day or next-day replacement scheduling',
      'Honest repair-vs-replace comparison',
      'All major brands: Carrier, Trane, Lennox, Goodman, Rheem',
      'Old equipment haul-away included',
      'Financing options on approved credit',
      '10-year manufacturer warranty + our lifetime workmanship',
    ],
  },
  {
    title: 'Heat Pump Repair',
    description:
      "Heat pumps can develop unique issues — reversing valve failures, defrost cycle problems, refrigerant charge issues — that not every HVAC tech handles well. Our technicians are factory-trained on heat pump-specific diagnostics and carry the parts most likely to fail.",
    bullets: [
      'Reversing valve diagnostics and replacement',
      'Defrost board and sensor repair',
      'Auxiliary heat strip troubleshooting',
      'Refrigerant leak detection and repair',
      'Fan motor and capacitor replacement',
      'Same-day repair on most service calls',
    ],
  },
  {
    title: 'Heat Pump Maintenance',
    description:
      "A heat pump runs in two modes (cooling and heating), so it needs twice the maintenance attention of a cooling-only AC. Our heat pump tune-ups include reversing valve testing, defrost cycle verification, and heating-mode performance checks that standard AC tune-ups skip.",
    bullets: [
      'Twice-yearly tune-ups (spring and fall)',
      'Reversing valve and defrost cycle test',
      'Auxiliary heat strip operation check',
      'Refrigerant pressure and superheat verification',
      'Coil cleaning (both indoor and outdoor)',
      'Maintenance plan members get priority service',
    ],
  },
]

const faqs = [
  {
    q: 'Is a heat pump better than AC for Tampa homes?',
    a: "For most Tampa Bay homes, yes. Heat pumps are at peak efficiency when outdoor temperatures stay above 30°F — essentially every winter day in Tampa. They handle both cooling and heating from one system, which means less equipment to maintain and one fewer thing that can break. The exception is homes with existing natural gas service and a gas furnace already in place — there, a traditional split system can still make sense.",
  },
  {
    q: 'How much does heat pump installation cost in Tampa?',
    a: "Heat pump installation in Tampa Bay typically runs $5,500–$12,000 fully installed, depending on system size (2.5–5 ton), efficiency rating (14–20 SEER2), and whether ductwork modifications are needed. Variable-speed inverter systems sit at the higher end but pay back through lower energy bills and longer equipment life. We provide free, written estimates with no pressure tactics — and we always quote a repair option side-by-side if you're replacing an existing unit.",
  },
  {
    q: 'How long do heat pumps last in Florida?',
    a: "In Florida's climate, expect a heat pump to last 12–15 years on average — slightly less than the 15–20 year national figure because our systems run year-round. Variable-speed inverter heat pumps tend to last longer (often 15+ years) because they cycle less frequently and run at lower stress most of the time. Twice-yearly maintenance can push any heat pump to the upper end of its expected lifespan.",
  },
  {
    q: 'What size heat pump do I need for my Tampa home?',
    a: "The honest answer is: it depends on your home's specific characteristics, not just square footage. We perform a Manual J load calculation that factors in insulation, window orientation, ceiling heights, ductwork condition, and shading. As a rough rule, Tampa homes need about 1 ton of cooling per 500–600 square feet, but the actual number can vary by 20–30% based on construction. Oversizing causes humidity problems; undersizing causes constant runtime and high bills. Right-sizing matters.",
  },
  {
    q: 'Do heat pumps qualify for federal tax credits?',
    a: "Yes — qualifying high-efficiency heat pumps (typically those rated SEER2 16+ and HSPF2 9+ for our region) are eligible for up to $2,000 in federal tax credits under the Inflation Reduction Act, claimed on your federal tax return for the year of installation. We'll identify which of the systems we install qualify and provide the documentation you need at tax time. Florida utility companies sometimes offer additional rebates on top of the federal credit.",
  },
  {
    q: 'How long does heat pump installation take?',
    a: "A standard residential heat pump replacement is usually completed in 6–8 hours — start in the morning, finished by mid-afternoon. New installations in homes without existing AC or with significant ductwork changes can take 1–2 days. We schedule first-call appointments so the bulk of the work happens when temperatures are most comfortable for the install crew, and we always have the system back online before we leave.",
  },
  {
    q: 'What brands of heat pumps do you install?',
    a: "We install all major brands — Carrier, Trane, Lennox, Goodman, Rheem, Bryant, American Standard, and York — and our recommendations depend on your specific situation rather than any brand loyalty. For most Tampa homeowners, mid-range Carrier or Trane systems hit the sweet spot of reliability and price. For homeowners prioritizing maximum efficiency or quiet operation, we lean toward variable-speed Carrier Infinity or Trane XV20i. We service every brand, including ones we didn't install.",
  },
]

export default function HeatPumpTampaPage() {
  return (
    <main className="font-sans">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      {/* Hero */}
      <section className="relative bg-[#0f1620] text-white py-20 px-4 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.pexels.com/photos/8961065/pexels-photo-8961065.jpeg?auto=compress&cs=tinysrgb&w=1600"
            alt="Modern heat pump installation outside Tampa Bay home"
            className="w-full h-full object-cover object-center opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0f1620]/80 via-[#0f1620]/60 to-[#0f1620]/40" />
        </div>
        <div className="relative z-10 max-w-5xl mx-auto">
          <p className="text-orange-300 font-semibold text-sm uppercase tracking-widest mb-3">
            Tampa Bay, FL — Heat Pump Specialists
          </p>
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-5">
            Heat Pump Installation &amp; Repair in Tampa, FL
          </h1>
          <p className="text-blue-100 text-lg md:text-xl max-w-3xl mb-8 leading-relaxed">
            One system that handles cooling and heating year-round — built for Florida&apos;s climate. Variable-speed
            systems, federal tax credits, and a lifetime workmanship warranty. Trusted by 35+ Tampa Bay families
            who rated us 5 stars on Google.
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
              Get a Free Quote
            </Link>
          </div>
        </div>
      </section>

      {/* Trust bar */}
      <section className="bg-[#0f1620] text-white py-4 px-4">
        <div className="max-w-5xl mx-auto flex flex-wrap justify-center md:justify-between gap-x-8 gap-y-2 text-sm font-semibold text-blue-200">
          <span>✓ Licensed &amp; Insured</span>
          <span>✓ Manual J Load Calculation</span>
          <span>✓ Lifetime Workmanship Warranty</span>
          <span>✓ Federal Tax Credit Eligible</span>
          <span>✓ Financing Available</span>
        </div>
      </section>

      {/* Why heat pumps for FL */}
      <section className="bg-white py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-5">
            Why Heat Pumps Make Sense in Tampa Bay
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
            <div className="space-y-4 text-gray-600 text-lg leading-relaxed">
              <p>
                Heat pumps work by moving heat instead of generating it — pulling heat <em>out</em> of your home
                in summer and pulling heat <em>into</em> your home in winter. This makes them dramatically more
                efficient than traditional electric resistance heating, especially in a climate like Tampa where
                winter temperatures rarely drop below freezing.
              </p>
              <p>
                For most Tampa Bay homes <strong>without existing natural gas service</strong>, a heat pump is
                the obvious choice. You get cooling and heating from a single piece of equipment, lower utility
                bills, longer equipment life, and access to federal tax credits that make the upgrade more
                affordable than most homeowners realize.
              </p>
              <p>
                Modern variable-speed heat pumps go even further — they run at lower output most of the time,
                which means quieter operation, better humidity control, and longer equipment life. The
                technology has come a long way in the last 5&ndash;7 years.
              </p>
            </div>
            <div className="bg-orange-50 rounded-2xl p-7 border border-orange-100">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Heat Pump vs. AC + Furnace</h3>
              <div className="space-y-3 text-sm">
                <div className="bg-white rounded-lg p-4 border border-gray-100">
                  <p className="font-bold text-gray-900 mb-1">Heat Pump (Most Tampa Homes)</p>
                  <p className="text-gray-600">One system. Lower install cost. No gas line needed. Federal tax credits available.</p>
                </div>
                <div className="bg-white rounded-lg p-4 border border-gray-100">
                  <p className="font-bold text-gray-900 mb-1">AC + Gas Furnace (If You Have Gas)</p>
                  <p className="text-gray-600">Two systems. Higher install cost. Faster heat in cold snaps. Makes sense if your home is already gas-heated.</p>
                </div>
                <div className="bg-white rounded-lg p-4 border border-gray-100">
                  <p className="font-bold text-gray-900 mb-1">AC + Electric Strip Heat</p>
                  <p className="text-gray-600">Outdated for new installs. Strip heat is 2&ndash;3x more expensive to run than a heat pump.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits grid */}
      <section className="bg-gray-50 py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-3">Heat Pump Advantages in Florida</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {benefits.map((b) => (
              <div key={b.title} className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
                <h3 className="text-lg font-bold text-gray-900 mb-2">{b.title}</h3>
                <p className="text-gray-600 leading-relaxed text-sm">{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services list */}
      <section className="bg-white py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-3">Our Heat Pump Services</h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              From new installs to emergency repairs — we handle every aspect of heat pump service in Tampa Bay.
            </p>
          </div>
          <div className="space-y-8">
            {services.map((service) => (
              <div
                key={service.title}
                className="bg-gray-50 rounded-2xl p-8 shadow-sm border border-gray-100"
              >
                <h3 className="text-2xl font-bold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-600 leading-relaxed mb-5">{service.description}</p>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {service.bullets.map((b) => (
                    <li key={b} className="flex items-center gap-2 text-sm text-gray-700">
                      <span className="w-1.5 h-1.5 rounded-full bg-orange-500 shrink-0" />
                      {b}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="bg-gray-50 py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-10 text-center">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {faqs.map((faq) => (
              <details
                key={faq.q}
                className="bg-white rounded-xl p-6 border border-gray-100 group shadow-sm"
              >
                <summary className="font-bold text-gray-900 cursor-pointer text-lg flex items-start justify-between gap-4 list-none">
                  <span>{faq.q}</span>
                  <span className="shrink-0 text-orange-600 group-open:rotate-45 transition-transform text-2xl leading-none">
                    +
                  </span>
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
            <h2 className="text-2xl font-bold text-gray-900 mb-1">Ready for a Free Heat Pump Quote?</h2>
            <p className="text-gray-600">
              We&apos;ll do a Manual J load calc, walk you through your options, and quote both repair and replacement honestly.{' '}
              <Link href="/blog/heat-pump-vs-ac-florida" className="text-orange-700 font-semibold hover:underline">
                Read our heat pump vs. AC guide →
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

      {/* FAQ Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            mainEntity: faqs.map((f) => ({
              '@type': 'Question',
              name: f.q,
              acceptedAnswer: { '@type': 'Answer', text: f.a },
            })),
          }),
        }}
      />
    </main>
  )
}
