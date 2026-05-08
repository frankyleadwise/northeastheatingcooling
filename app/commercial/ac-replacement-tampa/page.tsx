import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Commercial AC Replacement Tampa, FL | Rooftop & Split System Replacement | North East Heating And Cooling',
  description:
    'Commercial AC replacement in Tampa, FL. Rooftop units, split systems, and packaged HVAC replacement for restaurants, offices, retail, and warehouses. Call (813) 291-6146.',
  keywords: [
    'commercial ac replacement tampa',
    'commercial hvac replacement tampa',
    'rooftop unit replacement tampa',
    'commercial ac replacement tampa fl',
    'replace commercial ac tampa',
    'rtu replacement tampa',
    'commercial hvac upgrade tampa',
    'commercial air conditioning replacement tampa',
    'commercial ac contractor tampa',
    'package unit replacement tampa',
  ],
  alternates: { canonical: '/commercial/ac-replacement-tampa' },
  openGraph: {
    title: 'Commercial AC Replacement Tampa, FL | Rooftop & Split System Replacement',
    description:
      'Commercial AC replacement in Tampa, FL. Rooftop units, split systems, and packaged HVAC replacement for restaurants, offices, retail, and warehouses.',
    url: '/commercial/ac-replacement-tampa',
    siteName: 'North East Heating And Cooling',
    locale: 'en_US',
    type: 'website',
  },
}

const schemaData = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Commercial AC Replacement',
  serviceType: 'Commercial Air Conditioning Replacement',
  description:
    'Professional commercial AC replacement in Tampa, FL. Rooftop units, split systems, and packaged HVAC equipment replacement for commercial properties throughout Tampa Bay.',
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
    name: 'Commercial AC Replacement Services',
    itemListElement: [
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Rooftop Unit (RTU) Replacement' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Commercial Split System Replacement' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Packaged HVAC Unit Replacement' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Multi-Zone Commercial Replacement' } },
    ],
  },
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://northeastheatingcooling.com' },
    { '@type': 'ListItem', position: 2, name: 'Commercial Services', item: 'https://northeastheatingcooling.com/commercial' },
    { '@type': 'ListItem', position: 3, name: 'Commercial AC Replacement Tampa' },
  ],
}

const replacementTriggers = [
  {
    title: 'Rising Repair Costs Year-Over-Year',
    detail:
      "Commercial systems past 12-15 years often hit a tipping point where annual repair spend exceeds 30-40% of replacement cost. We track repair history during maintenance visits so you have data to make the call before a catastrophic failure forces it.",
  },
  {
    title: 'Energy Bills Climbing Despite Maintenance',
    detail:
      "Modern high-efficiency rooftop units and split systems can cut commercial cooling costs by 25-40% versus 12-year-old equipment. For restaurants and retail running 12+ hour days, the energy savings alone often pay back replacement within 4-7 years.",
  },
  {
    title: 'R-22 Refrigerant Systems',
    detail:
      "R-22 was phased out in 2020. Commercial systems still using R-22 face refrigerant costs of $100+/lb when leaks occur, with limited supply that's expected to disappear entirely. Replacing R-22 systems is almost always more cost-effective than continuing to recharge.",
  },
  {
    title: 'Failed Building Inspections',
    detail:
      "Aging commercial HVAC sometimes fails to meet current Florida Building Code requirements during renovation permit reviews. We provide replacement that meets current code and energy efficiency requirements.",
  },
  {
    title: 'Inadequate Capacity After Building Changes',
    detail:
      "Office reconfigurations, restaurant expansions, or changing occupancy levels often outgrow original HVAC capacity. We perform load calculations to right-size replacement equipment for your current building usage, not the spec from when the building was built.",
  },
  {
    title: 'Compressor Failure on Older Equipment',
    detail:
      "On commercial systems past 10-12 years, compressor failure is usually the trigger for replacement rather than repair — replacing a compressor on aging equipment costs nearly as much as a full system replacement, with no warranty on the older surrounding components.",
  },
]

const services = [
  {
    title: 'Rooftop Unit (RTU) Replacement',
    description:
      "Rooftop units are the workhorse of commercial cooling in Tampa Bay — restaurants, retail, warehouses, light industrial. Our crews handle complete RTU replacement including rigging, electrical disconnects, refrigerant recovery, removal, curb adapter installation if needed, new unit installation, refrigerant charging, controls integration, and startup. We work with cranes for rooftop access on multi-story buildings and coordinate with property management for after-hours work to minimize business disruption.",
    bullets: [
      'Crane rigging coordination for rooftop access',
      'Curb adapter installation for size mismatches',
      'EPA 608 certified refrigerant recovery',
      'Electrical disconnect and reconnection',
      'Building automation system (BAS) integration',
      'After-hours and weekend installation available',
      'Carrier, Trane, Lennox, Daikin commercial RTUs',
    ],
  },
  {
    title: 'Commercial Split System Replacement',
    description:
      "Office buildings and many medical facilities use commercial split systems with indoor air handlers and outdoor condensers. We replace failing split systems with matched high-efficiency equipment, including refrigerant line set evaluation, ductwork inspection, and electrical capacity verification. Common in light commercial 5-25 ton applications throughout Tampa Bay.",
    bullets: [
      'Matched indoor/outdoor system replacement',
      'Refrigerant line set evaluation',
      'Ductwork inspection during replacement',
      'Electrical service capacity verification',
      'Multi-zone configurations supported',
      'Variable refrigerant flow (VRF) options',
    ],
  },
  {
    title: 'Packaged HVAC Unit Replacement',
    description:
      "Packaged units combine compressor, condenser, evaporator, and air handler in a single outdoor cabinet — common in light commercial buildings, gas stations, and small restaurants. We replace packaged units as one piece, including curb work, electrical, and gas line modifications where applicable. Heat pump packaged units are increasingly popular for new commercial replacements due to efficiency and code requirements.",
    bullets: [
      'Single-piece packaged unit replacement',
      'Heat pump packaged units (preferred for new installs)',
      'Gas-electric packaged units',
      'Curb modifications and adapters',
      'Same-day installation for most sizes',
      'Code-compliant condensate routing',
    ],
  },
  {
    title: 'Multi-Zone Commercial System Replacement',
    description:
      "Larger commercial buildings (offices, medical, retail centers) often have multi-zone systems with chillers, multiple air handlers, or VRF (Variable Refrigerant Flow) systems. We coordinate complex replacements including phased installation to maintain conditioning during transition, building automation system updates, and engineering coordination for system redesigns where the original layout is being modernized.",
    bullets: [
      'Phased installation to maintain operation',
      'BAS programming and integration',
      'Engineering coordination for redesigns',
      'VRF system replacement and conversion',
      'Chiller replacement (light commercial)',
      'Project management from design to startup',
    ],
  },
  {
    title: 'Old Equipment Removal & Disposal',
    description:
      "EPA-compliant removal of decommissioned commercial HVAC equipment. We handle refrigerant recovery (federally required), proper disposal of hazardous components (mercury switches, PCB-containing capacitors on older equipment), metal recycling, and full site cleanup. Documentation provided for environmental compliance records.",
    bullets: [
      'EPA 608 refrigerant recovery and certification',
      'Hazardous component identification and disposal',
      'Metal recycling (copper, aluminum, steel)',
      'Disposal documentation for compliance records',
      'Site cleanup including curb and roof restoration',
      'Coordination with property management',
    ],
  },
]

const planning = [
  {
    title: 'Right-Sizing Through Manual N Load Calculation',
    detail:
      "Commercial HVAC sizing follows ASHRAE Manual N, not residential rules of thumb. We perform actual load calculations factoring building envelope, internal heat gains (equipment, occupancy, lighting), ventilation requirements, and Tampa Bay's specific climate data. Oversized commercial equipment short-cycles, fails to dehumidify, and burns through compressors prematurely.",
  },
  {
    title: 'Energy Code Compliance',
    detail:
      "Florida Building Code requires minimum efficiency ratings (SEER2, IEER, EER) for commercial replacement equipment. We specify equipment that meets or exceeds current code, document compliance for permit submissions, and ensure replacements qualify for utility rebates where available (TECO and Duke Energy commercial rebate programs).",
  },
  {
    title: 'Refrigerant Transition Planning',
    detail:
      "The HVAC industry is transitioning from R-410A to lower-GWP refrigerants like R-454B and R-32. Replacement equipment installed in 2025 and beyond will increasingly use the new refrigerants. We help businesses plan for this transition — including matching refrigerant types when partial system replacement is needed.",
  },
  {
    title: 'Phased Installation for Critical Operations',
    detail:
      "For restaurants, medical facilities, and businesses where conditioning can't fully shut down, we plan phased installations: temporary spot cooling during work, evening or overnight installation windows, or zone-by-zone replacement. Project planning happens during the quote phase, not the install day.",
  },
]

const faqs = [
  {
    q: 'How much does commercial AC replacement cost in Tampa Bay?',
    a: "Wide range based on size and type. Light commercial 5-ton rooftop units typically run $12,000-$18,000 fully installed. 7.5-ton RTUs land $16,000-$24,000. 10-ton units $20,000-$30,000. 15-25 ton units run $35,000-$75,000+. Multi-zone systems and chiller-based replacements scale into six figures depending on tonnage, controls, and ductwork modifications. We provide detailed written quotes with line-item pricing — no commercial replacement happens without full transparency on what you're paying for.",
  },
  {
    q: 'Can you replace commercial HVAC without shutting down our business?',
    a: "Most replacements yes — with planning. Restaurants, retail, and offices typically use after-hours installation (Sunday or overnight) for rooftop units to avoid business disruption. Buildings with multiple zones can often have one zone replaced at a time while others continue operating. For mission-critical operations (medical, data centers, food production), we plan temporary spot cooling and phased changeovers. The quote phase is when we determine the right approach for your specific business.",
  },
  {
    q: 'How long does commercial AC replacement take?',
    a: "Single rooftop unit replacement: typically 6-10 hours including crane rigging. Larger 15-25 ton RTUs: 1-2 days. Multi-zone or chiller replacements: 3-10 days depending on complexity. We provide a detailed project schedule during the quote phase — no surprises on timeline.",
  },
  {
    q: 'Do you provide warranties on commercial replacement equipment?',
    a: "Yes. Standard manufacturer warranties on commercial equipment typically run 1-5 years on parts (varies by component — compressors often have longer coverage). Extended warranties are available on most major brands. We provide a 1-year workmanship warranty on all commercial installation work. Maintenance plan customers receive priority warranty service.",
  },
  {
    q: 'What efficiency rating should I look for on commercial replacement?',
    a: "Florida Building Code sets minimums, but going above minimum often pays back through energy savings on commercial buildings with high cooling hours. For Tampa Bay restaurants and retail running 12+ hour days, look for IEER ratings 13.0+ on package units (current code minimum is around 12.0). For office buildings with lower cooling hours, code minimum equipment is often the right financial choice. We help run the math during the quote.",
  },
  {
    q: 'Do you handle permits and inspections for commercial replacement?',
    a: "Yes. We pull permits with the appropriate jurisdiction (Tampa, Hillsborough, Pinellas, Pasco — varies by location), coordinate inspections, and handle the documentation required for code compliance. Building permits typically run 5-15 business days for commercial replacement permits in Tampa Bay. We factor this into project schedules.",
  },
  {
    q: 'Can you replace just one rooftop unit if I have multiple?',
    a: "Yes, this is a common request. Phased rooftop unit replacement spreads capital expense over multiple budget years and lets you replace only equipment that's actually failing. We document each replacement and inspect remaining units during the same visits to give you visibility into what should be replaced next.",
  },
  {
    q: 'Are there utility rebates for commercial HVAC replacement?',
    a: "Sometimes yes. TECO and Duke Energy occasionally offer commercial rebates for high-efficiency replacement equipment, particularly for variable-speed/VRF systems and high-efficiency packaged units. Programs change — we check active rebate availability during the quote phase and factor any qualifying rebates into the project economics.",
  },
]

export default function CommercialACReplacementPage() {
  return (
    <main className="font-sans text-gray-800">
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
            src="https://images.pexels.com/photos/2244746/pexels-photo-2244746.jpeg?auto=compress&cs=tinysrgb&w=1600"
            alt="Commercial rooftop HVAC unit replacement Tampa Bay"
            className="w-full h-full object-cover object-center opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0f1620]/80 via-[#0f1620]/60 to-[#0f1620]/40" />
        </div>
        <div className="relative z-10 max-w-5xl mx-auto">
          <p className="text-blue-300 text-sm font-semibold uppercase tracking-widest mb-3">
            Commercial HVAC — Tampa Bay, FL
          </p>
          <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-5 max-w-3xl">
            Commercial AC Replacement in Tampa, FL
          </h1>
          <p className="text-blue-100 text-lg md:text-xl max-w-3xl mb-8 leading-relaxed">
            Rooftop unit replacement, commercial split system replacement, and packaged HVAC replacement
            for restaurants, retail, offices, and light industrial buildings throughout Tampa Bay.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="tel:8132916146"
              className="inline-block bg-orange-500 hover:bg-orange-600 text-white font-bold py-4 px-8 rounded-lg text-lg transition-colors"
            >
              Call (813) 291-6146
            </a>
            <Link
              href="/contact"
              className="inline-block bg-white hover:bg-blue-50 text-blue-900 font-bold py-4 px-8 rounded-lg text-lg transition-colors"
            >
              Request Quote
            </Link>
          </div>
        </div>
      </section>

      {/* Trust Bar */}
      <section className="bg-[#0f1620] text-white py-5 px-4">
        <div className="max-w-5xl mx-auto flex flex-wrap justify-center gap-8 text-sm font-medium">
          <div className="flex items-center gap-2"><span className="text-orange-400 text-lg">✓</span> Manual N Load Calculations</div>
          <div className="flex items-center gap-2"><span className="text-orange-400 text-lg">✓</span> After-Hours Installation</div>
          <div className="flex items-center gap-2"><span className="text-orange-400 text-lg">✓</span> Permit &amp; Inspection Coordination</div>
          <div className="flex items-center gap-2"><span className="text-orange-400 text-lg">✓</span> Carrier, Trane, Lennox, Daikin</div>
          <div className="flex items-center gap-2"><span className="text-orange-400 text-lg">✓</span> 1-Year Workmanship Warranty</div>
        </div>
      </section>

      {/* Intro */}
      <section className="bg-white py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="max-w-3xl">
            <h2 className="text-3xl font-bold text-gray-900 mb-5">
              When Commercial AC Replacement Makes More Sense Than Repair
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-4">
              Commercial HVAC replacement is one of the largest capital expenses most Tampa Bay business owners
              face. Done well, replacement extends building life, cuts energy costs, and prevents the kind of
              catastrophic failures that shut down operations during peak season. Done poorly, it&apos;s an
              expensive mistake that creates years of comfort and reliability problems.
            </p>
            <p className="text-gray-600 text-lg leading-relaxed mb-4">
              The right time to replace commercial HVAC isn&apos;t after the equipment fails — it&apos;s before.
              Reactive emergency replacement during a Tampa Bay summer typically costs 20-30% more than planned
              replacement, comes with shorter warranty options (rushed orders limit equipment selection), and
              forces businesses to operate without conditioning during the install.
            </p>
            <p className="text-gray-600 text-lg leading-relaxed">
              We help Tampa Bay business owners plan replacement based on actual equipment condition, repair
              history trends, and energy economics — not just age. Our maintenance customers get this analysis
              built into their service agreements; new customers receive it as part of any replacement quote.
            </p>
          </div>
        </div>
      </section>

      {/* Triggers */}
      <section className="bg-gray-50 py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-3 text-center">
            Common Triggers for Commercial AC Replacement
          </h2>
          <p className="text-gray-600 text-lg text-center max-w-3xl mx-auto mb-12">
            Tampa Bay business owners typically reach the replace-vs-repair decision through one of these paths.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {replacementTriggers.map((t) => (
              <div key={t.title} className="bg-white rounded-2xl p-7 shadow-sm border border-gray-100">
                <h3 className="font-bold text-gray-900 text-lg mb-3">{t.title}</h3>
                <p className="text-gray-600 leading-relaxed">{t.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="bg-white py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-3 text-center">
            Our Commercial Replacement Services
          </h2>
          <p className="text-gray-600 text-lg text-center max-w-3xl mx-auto mb-12">
            From single rooftop unit replacements to multi-zone system overhauls.
          </p>
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

      {/* Project Planning */}
      <section className="bg-gray-50 py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-3 text-center">How We Approach Commercial Replacement</h2>
          <p className="text-gray-600 text-lg text-center max-w-3xl mx-auto mb-12">
            Commercial replacement is project work — engineering, code, logistics, and execution.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {planning.map((p) => (
              <div key={p.title} className="bg-white rounded-2xl p-7 shadow-sm border border-gray-100">
                <h3 className="font-bold text-gray-900 text-lg mb-3">{p.title}</h3>
                <p className="text-gray-600 leading-relaxed">{p.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="bg-white py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-10 text-center">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {faqs.map((faq) => (
              <details
                key={faq.q}
                className="bg-gray-50 rounded-xl p-6 border border-gray-100 group"
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
      <section id="contact" className="bg-[#0f1620] text-white py-16 px-4">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Plan Your Commercial Replacement?</h2>
          <p className="text-blue-100 text-lg mb-8 max-w-3xl mx-auto">
            Detailed written quotes with line-item pricing. Project planning included. No commercial
            replacement happens without you understanding exactly what you&apos;re paying for.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:8132916146"
              className="inline-block bg-orange-500 hover:bg-orange-600 text-white font-bold py-4 px-8 rounded-lg text-lg transition-colors"
            >
              Call (813) 291-6146
            </a>
            <Link
              href="/contact"
              className="inline-block bg-white hover:bg-blue-50 text-blue-900 font-bold py-4 px-8 rounded-lg text-lg transition-colors"
            >
              Request Quote
            </Link>
          </div>
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
