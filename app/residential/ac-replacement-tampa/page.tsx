import type { Metadata } from 'next'
import Link from 'next/link'
import FinancingCTA from '@/components/FinancingCTA'

export const metadata: Metadata = {
  title: 'AC Replacement Tampa, FL | Replace Your AC Unit',
  description:
    'AC replacement in Tampa, FL. Replace your old AC unit with an energy-efficient system designed for Florida\'s climate. Free quotes, written estimates. Call (813) 291-6146.',
  keywords: [
    'ac replacement tampa',
    'replace ac unit tampa',
    'replace air conditioner tampa',
    'air conditioning replacement tampa',
    'ac unit replacement tampa fl',
    'new ac unit tampa',
    'ac unit replacement cost tampa',
    'replace central air conditioner tampa',
    'hvac replacement tampa',
    'when to replace ac unit',
  ],
  alternates: { canonical: '/residential/ac-replacement-tampa' },
  openGraph: {
    title: 'AC Replacement Tampa, FL | Replace Your AC Unit | North East Heating And Cooling',
    description:
      'AC replacement in Tampa, FL. Replace your old AC unit with an energy-efficient system designed for Florida\'s climate. Free quotes, written estimates.',
    url: '/residential/ac-replacement-tampa',
    siteName: 'North East Heating And Cooling',
    locale: 'en_US',
    type: 'website',
  },
}

const schemaData = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'AC Replacement',
  serviceType: 'Air Conditioner Replacement',
  description:
    'Professional AC replacement in Tampa, FL. Full system replacement of failing or inefficient air conditioners with new energy-efficient equipment sized for Florida\'s climate.',
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
    name: 'AC Replacement Services',
    itemListElement: [
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Central AC Replacement' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Heat Pump Replacement' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Complete HVAC System Replacement' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Old AC Unit Removal & Disposal' } },
    ],
  },
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://northeastheatingcooling.com' },
    { '@type': 'ListItem', position: 2, name: 'Residential Services', item: 'https://northeastheatingcooling.com/residential' },
    { '@type': 'ListItem', position: 3, name: 'AC Replacement Tampa' },
  ],
}

const replacementSigns = [
  {
    icon: '📅',
    title: 'Your AC Is 10-15+ Years Old',
    desc: "Most AC units in Florida last 10-15 years. After 12 years, repair costs and inefficiency usually make replacement the smarter financial choice.",
  },
  {
    icon: '💸',
    title: 'Repair Costs Exceed $1,500',
    desc: "The $5,000 rule: multiply your AC's age by the repair quote. If it exceeds $5,000, replace. A 10-year-old unit with a $700 repair = $7,000 — replacement territory.",
  },
  {
    icon: '📈',
    title: 'Energy Bills Climbing Every Summer',
    desc: "Modern 16+ SEER2 systems can cut summer cooling costs by 30-50% versus a 10-year-old 13 SEER system. The savings alone often justify replacement.",
  },
  {
    icon: '❄️',
    title: 'Uneven Cooling or Constant Running',
    desc: "If your AC runs constantly, can't keep up on hot days, or some rooms stay warm — your system is undersized, failing, or your ductwork needs attention.",
  },
  {
    icon: '🔧',
    title: 'Multiple Repairs in 2 Years',
    desc: "Three or more service calls in two years signals a failing system. Replacement before total failure means you avoid the emergency premium.",
  },
  {
    icon: '🌡️',
    title: 'Uses R-22 Refrigerant',
    desc: "R-22 (Freon) was phased out in 2020. R-22 systems are still legal but refrigerant now costs $100+/lb if available at all. Replacement is almost always more cost-effective than recharging.",
  },
]

const services = [
  {
    title: 'Central AC Replacement',
    description:
      "Full replacement of your existing central air conditioning system, including outdoor condenser, indoor air handler or coil, refrigerant lines (typically reused if compatible), and thermostat. We handle the entire process in one day for most homes — old unit out in the morning, new system tested and running by afternoon. Manual J load calculation ensures the new system is properly sized, not just matched to what was there before (which is often wrong).",
    bullets: [
      'Manual J load calculation for proper sizing',
      'Carrier, Trane, Lennox, Rheem, York, Goodman',
      'Same-day installation for most homes',
      'New thermostat included (smart thermostat upgrade available)',
      'Up to 21 SEER2 efficiency available',
      '10-year parts warranty (most brands)',
      'Lifetime workmanship warranty',
    ],
  },
  {
    title: 'Heat Pump Replacement',
    description:
      "Heat pumps handle both cooling and heating, making them ideal for Tampa Bay's mild winters. Modern variable-speed heat pumps run quieter, dehumidify better, and qualify for federal tax credits up to $2,000. We replace failing heat pumps with right-sized inverter systems that match your home's actual load.",
    bullets: [
      'Variable-speed inverter heat pumps',
      'Federal tax credit eligible (up to $2,000)',
      'Single system for cooling and heating',
      'Better dehumidification than standard AC',
      'Whisper-quiet operation (down to 56 dB)',
      'Smart compatibility (Wi-Fi thermostats included)',
    ],
  },
  {
    title: 'Complete HVAC System Replacement',
    description:
      "When the air handler, condenser, or both are at end of life, replacing as a matched system delivers better efficiency and reliability than mixing old and new components. We provide complete HVAC system replacement with matched indoor/outdoor units, evaluating ductwork condition during the assessment so you understand the full picture.",
    bullets: [
      'Matched system replacement (indoor + outdoor)',
      'Ductwork inspection during assessment',
      'Optional duct sealing or replacement',
      'Optional indoor air quality upgrades',
      'Single warranty covers entire system',
      'Optimized SEER2 ratings (matched components)',
    ],
  },
  {
    title: 'Old AC Unit Removal & Disposal',
    description:
      "We handle EPA-compliant removal of your old system: refrigerant recovery (required by federal law), proper recycling of metal components, and full cleanup of your install location. No leftover debris, no concrete pad surprises — your old unit leaves the property the same day the new one is installed.",
    bullets: [
      'EPA 608 certified refrigerant recovery',
      'Proper metal recycling (copper, aluminum)',
      'Concrete pad reuse or replacement included',
      'Hauled away same-day',
      'No hidden disposal fees',
    ],
  },
]

const faqs = [
  {
    q: 'How much does AC replacement cost in Tampa?',
    a: "Full AC replacement in Tampa Bay typically runs $5,500-$12,000 installed, depending on system size (tonnage), efficiency rating (SEER2), brand, and whether ductwork or other upgrades are needed. A 3-ton 16 SEER2 system for an average Tampa home usually lands around $6,500-$8,500. Higher-efficiency variable-speed systems run $9,000-$12,000+ but pay back through energy savings. We provide free written quotes with line-item pricing — no high-pressure tactics.",
  },
  {
    q: 'When should I replace my AC instead of repairing it?',
    a: "Three rules of thumb: (1) The $5,000 rule — multiply your AC's age by the repair cost. If the result exceeds $5,000, replace it. (2) The 10-15 year rule — Florida AC units typically last 10-15 years; past that, replacement usually wins. (3) The R-22 rule — if your system uses R-22 (Freon), refrigerant costs alone often justify replacement. We give honest assessments — sometimes the right answer is to repair and squeeze another year out of an existing system.",
  },
  {
    q: 'How long does AC replacement take in Tampa?',
    a: "Most central AC replacements in Tampa Bay are completed in 6-8 hours — start in the morning, fully tested and running by mid-afternoon. We handle larger projects (full HVAC replacements with ductwork modifications) in 1-2 days. We bring everything we need for a same-day install, including extra refrigerant, line set components, electrical supplies, and a properly equipped service van.",
  },
  {
    q: 'Do you offer financing for AC replacement?',
    a: "We're working on financing partnerships to give Tampa homeowners flexible payment options. In the meantime, we accept all major credit cards and provide written quotes you can take to your bank for a home equity line of credit if needed. AC replacement is the kind of expense most homeowners don't plan for — we keep our pricing transparent so you can make the decision that works for your budget.",
  },
  {
    q: 'What size AC do I need for my Tampa home?',
    a: "Sizing requires a Manual J load calculation — not a rule-of-thumb based on square footage alone. For Tampa homes, we factor in ceiling height, insulation quality, window orientation, ductwork condition, attic insulation, and number of occupants. Rough guideline: 600-800 sq ft per ton in Florida. So a 1,800 sq ft home typically needs 2.5-3 tons. But sizing wrong (especially oversizing) hurts comfort, humidity control, and lifespan — so we always do the math for free as part of the quote.",
  },
  {
    q: 'Should I upgrade to a higher SEER2 rating?',
    a: "Depends on how long you'll stay in the home and your current bills. Going from 13 SEER to 16 SEER2 typically saves 20-30% on cooling costs. Going from 16 to 20 SEER2 saves another 15-20%. The premium for higher efficiency runs $1,500-$3,000. For homeowners staying 7+ years, the higher SEER2 usually pays back. For shorter ownership horizons or lower cooling usage, 16 SEER2 is the sweet spot. We help you run the math during the quote.",
  },
  {
    q: 'Can you replace my AC during the summer?',
    a: "Yes — and this is when most replacements happen in Tampa Bay. We carry common system sizes on our service vans, can usually schedule replacements within 3-5 days, and complete same-day installations so you're never without cooling overnight. For emergency situations (system failure during a heat wave), we can often get a replacement system installed within 24-48 hours.",
  },
  {
    q: 'What brand of AC should I buy?',
    a: "For Tampa Bay's climate, we recommend Carrier, Trane, Lennox, and Rheem for best long-term reliability — these brands have the strongest parts availability and warranty support in our area. Goodman and York offer good value at lower price points. Daikin and Mitsubishi excel at variable-speed heat pumps. We don't lock you into one brand — we recommend based on your home, budget, and how long you plan to stay.",
  },
]

export default function ACReplacementTampaPage() {
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
            src="https://images.pexels.com/photos/8005397/pexels-photo-8005397.jpeg?auto=compress&cs=tinysrgb&w=1600"
            alt="HVAC technician installing replacement air conditioner unit in Tampa Bay home"
            className="w-full h-full object-cover object-center opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0f1620]/80 via-[#0f1620]/60 to-[#0f1620]/40" />
        </div>
        <div className="relative z-10 max-w-5xl mx-auto">
          <p className="text-[0.72rem] font-bold tracking-[0.18em] uppercase mb-4 text-[#F0A06A]">
            Tampa Bay, FL — AC Replacement Specialists
          </p>
          <h1 className="font-display text-4xl md:text-5xl font-extrabold leading-[1.05] mb-5 tracking-[-0.03em]">
            AC Replacement in Tampa, FL
          </h1>
          <p className="text-slate-300 text-lg md:text-xl max-w-3xl mb-8 leading-relaxed">
            Replacing an old, inefficient, or failing AC system before it leaves you stranded in 95°F heat.
            Same-day installation for most Tampa Bay homes — no second nights without cooling.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="tel:8132916146"
              className="inline-flex items-center justify-center px-8 py-3.5 bg-white text-[#0f1620] font-bold text-lg rounded-lg hover:bg-[#C8330A]/5 transition-colors shadow-lg"
            >
              Call (813) 291-6146
            </a>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-3.5 bg-[#C8330A] text-white font-bold text-lg rounded-lg border-2 border-[#C8330A]/40 hover:bg-[#b02c08] transition-colors"
            >
              Get a Free Quote
            </Link>
          </div>
        </div>
      </section>

      {/* Trust bar */}
      <section className="bg-[#0f1620] text-white py-4 px-4">
        <div className="max-w-5xl mx-auto flex flex-wrap justify-center md:justify-between gap-x-8 gap-y-2 text-sm font-semibold text-slate-300">
          <span>✓ Manual J Load Calculation</span>
          <span>✓ Same-Day Installation</span>
          <span>✓ 10-Year Parts Warranty</span>
          <span>✓ Lifetime Workmanship Warranty</span>
          <span>✓ All Major Brands</span>
        </div>
      </section>

      {/* When to replace */}
      <section className="bg-white py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="font-display tracking-[-0.03em] text-4xl sm:text-5xl font-extrabold text-slate-900 mb-5 leading-[1.02]">
            When to Replace Your AC Instead of Repairing It
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
            <div className="space-y-4 text-gray-600 text-lg leading-relaxed">
              <p>
                Florida AC units take a beating. Tampa Bay homes run their cooling systems 8-10 months
                a year, and the heat, humidity, and salt air shorten equipment life compared to almost
                any other climate in the country. The average AC unit in Florida lasts 10-15 years —
                and after the 10-year mark, every repair is a question of whether you&apos;re throwing
                good money after bad.
              </p>
              <p>
                There&apos;s a simple test we use called the <strong>$5,000 rule</strong>: multiply your
                AC&apos;s age (in years) by the repair quote. If the result exceeds $5,000,
                replacement makes more financial sense than repair. A 10-year-old unit with a $700
                compressor repair = $7,000 — replacement territory. A 6-year-old unit with the same
                repair = $4,200 — repair makes sense.
              </p>
              <p>
                We give honest assessments. Sometimes the answer is to repair. Sometimes it&apos;s to
                replace. We tell you which one we&apos;d do if it were our home, and we put it in
                writing so there&apos;s no ambiguity.
              </p>
            </div>
            <div className="bg-orange-50 rounded-2xl p-7 border border-orange-100">
              <h3 className="text-xl font-bold text-gray-900 mb-4">The $5,000 Rule (Quick Reference)</h3>
              <div className="space-y-3 text-sm">
                <div className="bg-white rounded-lg p-4 border border-gray-100">
                  <p className="font-bold text-gray-900 mb-1">5-year-old unit, $800 repair</p>
                  <p className="text-gray-600">5 × $800 = $4,000. Repair.</p>
                </div>
                <div className="bg-white rounded-lg p-4 border border-gray-100">
                  <p className="font-bold text-gray-900 mb-1">8-year-old unit, $750 repair</p>
                  <p className="text-gray-600">8 × $750 = $6,000. Replacement territory.</p>
                </div>
                <div className="bg-white rounded-lg p-4 border border-gray-100">
                  <p className="font-bold text-gray-900 mb-1">12-year-old unit, $500 repair</p>
                  <p className="text-gray-600">12 × $500 = $6,000. Replace.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Replacement signs */}
      <section className="bg-gray-50 py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-display tracking-[-0.03em] text-4xl sm:text-5xl font-extrabold text-slate-900 mb-3 leading-[1.02]">6 Signs Your AC Needs Replacement</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {replacementSigns.map((s) => (
              <div key={s.title} className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
                <div className="text-3xl mb-3">{s.icon}</div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{s.title}</h3>
                <p className="text-gray-600 leading-relaxed text-sm">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="bg-white py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-display tracking-[-0.03em] text-4xl sm:text-5xl font-extrabold text-slate-900 mb-3 leading-[1.02]">Our AC Replacement Services</h2>
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
          <h2 className="font-display tracking-[-0.03em] text-4xl sm:text-5xl font-extrabold text-slate-900 mb-10 text-center leading-[1.02]">Frequently Asked Questions</h2>
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
            <h2 className="font-display tracking-[-0.02em] text-2xl font-extrabold text-slate-900 mb-1">Ready for an AC Replacement Quote?</h2>
            <p className="text-gray-600">
              Free in-home assessment, Manual J load calc, and a written quote — no pressure tactics.{' '}
              <Link href="/blog/when-to-replace-your-ac-unit-florida" className="text-orange-700 font-semibold hover:underline">
                Read our AC replacement guide →
              </Link>
            </p>
          </div>
          <a
            href="tel:8132916146"
            className="shrink-0 inline-flex items-center justify-center px-7 py-3 bg-[#b02c08] text-white font-bold rounded-lg hover:bg-[#0f1620] transition-colors text-lg whitespace-nowrap"
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
          {/* ── FINANCING BAND ── */}
      <FinancingCTA />

    </main>
  )
}
