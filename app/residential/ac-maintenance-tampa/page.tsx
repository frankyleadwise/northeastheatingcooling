import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'AC Maintenance & Tune-Up Tampa, FL | North East Heating & Cooling',
  description:
    'Professional AC maintenance and HVAC tune-ups in Tampa, FL. Twice-yearly service plans, 20-point inspections, and priority repair scheduling. Call (813) 291-6146.',
  keywords: [
    'ac maintenance',
    'hvac maintenance',
    'ac maintenance tampa',
    'hvac maintenance tampa',
    'ac tune up tampa',
    'hvac tune up tampa',
    'ac service plan tampa',
    'hvac maintenance plan tampa',
    'air conditioning service tampa',
    'preventive ac maintenance florida',
  ],
  alternates: { canonical: '/residential/ac-maintenance-tampa' },
  openGraph: {
    title: 'AC Maintenance & Tune-Up Tampa, FL | North East Heating & Cooling',
    description:
      'Professional AC maintenance and HVAC tune-ups in Tampa, FL. Twice-yearly service plans and 20-point inspections.',
    url: '/residential/ac-maintenance-tampa',
    siteName: 'North East Heating & Cooling',
    locale: 'en_US',
    type: 'website',
  },
}

const schemaData = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'AC Maintenance & HVAC Tune-Up',
  serviceType: 'AC Maintenance',
  description:
    'Professional AC and HVAC preventive maintenance, tune-ups, and twice-yearly service plans in Tampa, FL and the Tampa Bay area.',
  provider: {
    '@type': 'HVACBusiness',
    name: 'North East Heating & Cooling',
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
    name: 'AC Maintenance Services',
    itemListElement: [
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Spring AC Tune-Up' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Fall HVAC Tune-Up' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Annual Maintenance Plan' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: '20-Point HVAC Inspection' } },
    ],
  },
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://northeastheatingcooling.com' },
    { '@type': 'ListItem', position: 2, name: 'Residential Services', item: 'https://northeastheatingcooling.com/residential' },
    { '@type': 'ListItem', position: 3, name: 'AC Maintenance Tampa' },
  ],
}

const tuneUpItems = [
  'Refrigerant level check and adjustment',
  'Evaporator and condenser coil cleaning',
  'Condensate drain line flush',
  'Electrical connections inspected and tightened',
  'Capacitor and contactor testing',
  'Blower motor inspection and lubrication',
  'Thermostat calibration and battery check',
  'Air filter replacement (standard size included)',
  'Airflow measurement at supply registers',
  'Static pressure reading',
  'Compressor amperage draw test',
  'Fan motor amperage draw test',
  'Refrigerant pressure verification',
  'Indoor coil cleanliness inspection',
  'Outdoor unit clearance and debris removal',
  'Ductwork visual inspection',
  'Safety control and limit switch testing',
  'Heat strip and reversing valve test (heat pumps)',
  'Cycle test on cooling and heating modes',
  'Written inspection report with photos',
]

const planTiers = [
  {
    name: 'Single Tune-Up',
    price: 'From $129',
    badge: null,
    summary: 'One comprehensive 20-point AC tune-up. No commitment — book it once a year or as needed.',
    bullets: [
      'Full 20-point inspection',
      'Coil cleaning included',
      'Filter replacement (standard size)',
      'Written inspection report',
      'Same-day service often available',
    ],
  },
  {
    name: 'Twice-Yearly Plan',
    price: 'From $19/mo',
    badge: 'Most Popular',
    summary: "Spring AC tune-up + fall heat pump tune-up. The way Florida systems should be serviced.",
    bullets: [
      'Two 20-point tune-ups per year',
      'Priority scheduling — front of the line',
      '15% discount on any repairs',
      'No diagnostic fee on service calls',
      'Filter replacements at every visit',
      'Cancel any time, no contract trap',
    ],
  },
  {
    name: 'Premium Care',
    price: 'From $29/mo',
    badge: null,
    summary: 'For homeowners who want every detail handled — including parts and labor protection.',
    bullets: [
      'Everything in Twice-Yearly Plan',
      '20% discount on any repairs',
      'Free standard service calls (no trip charge)',
      'Parts coverage on common failures',
      'Annual duct inspection included',
      '5-year transferable on home sale',
    ],
  },
]

const faqs = [
  {
    q: 'How often should I have AC maintenance done in Florida?',
    a: "In Florida's climate, twice a year — once in spring (March–April, before peak cooling) and once in fall (October–November, before any cold snaps). Tampa Bay AC systems run nearly year-round, which puts significantly more wear on coils, capacitors, and compressors than systems in northern states. Twice-yearly service is the difference between a system that lasts 15 years and one that fails at 8.",
  },
  {
    q: 'How much does AC maintenance cost in Tampa?',
    a: "A single comprehensive 20-point AC tune-up runs $129–$179 in the Tampa Bay area, depending on the size and complexity of your system. Our twice-yearly maintenance plan starts at $19/month, which covers two tune-ups per year, priority scheduling, a 15% discount on any repairs, and no diagnostic fees on service calls — so for most homeowners the plan more than pays for itself the first time something goes wrong.",
  },
  {
    q: "What's included in an AC tune-up?",
    a: "Our standard 20-point AC tune-up includes coil cleaning (both evaporator and condenser), refrigerant level check and adjustment, electrical inspection and tightening, capacitor and contactor testing, blower motor inspection, thermostat calibration, condensate drain flush, airflow measurement, filter replacement, and a written inspection report with photos. We also test the system in both cooling and heating modes if you have a heat pump.",
  },
  {
    q: "Will AC maintenance actually save me money?",
    a: "For most Tampa Bay homeowners, yes — and the numbers are clear. A well-maintained AC system runs 15–25% more efficiently than a neglected one, which means lower monthly electric bills (often $30–$60 less per month during summer). On top of that, regular maintenance catches small issues — a worn capacitor, a low refrigerant charge, a clogged drain line — before they become $1,500 emergency repairs. The cost of one preventive tune-up is almost always less than the cost of one breakdown.",
  },
  {
    q: 'Do I really need a maintenance plan or can I just call when something breaks?',
    a: "You can absolutely just call when something breaks — many homeowners do, and we'll always treat you well. But the math favors a plan: priority scheduling means you skip the line during heat waves (when wait times can stretch to a week), and the discount on repairs typically pays for the plan within one or two service calls. If you're staying in your home long-term, a plan also extends your system's lifespan by 3–5 years, which is a much bigger dollar value than the monthly cost.",
  },
  {
    q: 'Can AC maintenance void my equipment warranty?',
    a: "It's actually the opposite — most AC manufacturers (Carrier, Trane, Lennox, Goodman, and others) require documented annual maintenance to keep the warranty valid. If your compressor fails at year 7 and the manufacturer asks for maintenance records, skipping yearly service could cost you a $2,500 warranty claim. We provide written records for every visit so your warranty stays intact.",
  },
  {
    q: 'What signs mean my AC needs maintenance now (not in 6 months)?',
    a: "Don't wait for your scheduled visit if you notice: rising energy bills with no usage change, weak airflow from vents, the system short-cycling (turning on and off rapidly), unusual smells when the AC starts up, water pooling near the indoor unit, ice on the refrigerant lines, or rooms cooling unevenly. Any of these is a sign the system is under stress and a tune-up will likely catch the cause before it becomes a bigger repair.",
  },
]

export default function AcMaintenanceTampaPage() {
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
            src="https://images.pexels.com/photos/3855962/pexels-photo-3855962.jpeg?auto=compress&cs=tinysrgb&w=1600"
            alt="HVAC technician performing AC maintenance and tune-up in Tampa Bay home"
            className="w-full h-full object-cover object-center opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0f1620]/80 via-[#0f1620]/60 to-[#0f1620]/40" />
        </div>
        <div className="relative z-10 max-w-5xl mx-auto">
          <p className="text-orange-300 font-semibold text-sm uppercase tracking-widest mb-3">
            Tampa Bay, FL — Residential AC Maintenance
          </p>
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-5">
            AC Maintenance &amp; HVAC Tune-Ups in Tampa, FL
          </h1>
          <p className="text-blue-100 text-lg md:text-xl max-w-3xl mb-8 leading-relaxed">
            Twice-yearly tune-ups extend your system&apos;s life, lower your energy bills, and keep small problems
            from turning into expensive breakdowns. Comprehensive 20-point inspections by certified technicians
            who treat your home like their own.
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
              Schedule a Tune-Up
            </Link>
          </div>
        </div>
      </section>

      {/* Trust bar */}
      <section className="bg-[#0f1620] text-white py-4 px-4">
        <div className="max-w-5xl mx-auto flex flex-wrap justify-center md:justify-between gap-x-8 gap-y-2 text-sm font-semibold text-blue-200">
          <span>✓ 20-Point Inspection</span>
          <span>✓ Coil Cleaning Included</span>
          <span>✓ Written Report with Photos</span>
          <span>✓ Same-Day Booking</span>
          <span>✓ All Major Brands</span>
        </div>
      </section>

      {/* Why maintenance matters */}
      <section className="bg-white py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-5">
            Why AC Maintenance Matters More in Florida
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
            <div className="space-y-4 text-gray-600 text-lg leading-relaxed">
              <p>
                In a typical northern home, an AC system runs maybe four months a year. In Tampa Bay, your AC runs
                eight to ten months — sometimes year-round. That&apos;s roughly <strong>twice the runtime</strong>,
                which means twice the wear on your compressor, twice the dust and pollen pulled across your coils,
                and twice the strain on every electrical component.
              </p>
              <p>
                Skip maintenance, and your system pays the price. The most common Florida AC failures we see —
                seized compressors, burned-out capacitors, frozen coils, clogged drain lines — are almost always
                preventable with twice-yearly tune-ups.
              </p>
              <p>
                Beyond preventing breakdowns, a tuned system runs <strong>15&ndash;25% more efficiently</strong>{' '}
                than one that&apos;s neglected. For most Tampa Bay homeowners, that&apos;s $30&ndash;$60 less per
                month on summer electric bills. The math on maintenance is straightforward: it pays for itself, and
                then some.
              </p>
            </div>
            <div className="bg-orange-50 rounded-2xl p-7 border border-orange-100">
              <h3 className="text-xl font-bold text-gray-900 mb-4">What Happens Without Maintenance</h3>
              <ul className="space-y-2.5">
                {[
                  'Energy bills rise 15–25% per year',
                  'Capacitors fail unexpectedly (mid-July, of course)',
                  'Drain lines clog, water damages your ceiling',
                  'Coils lose efficiency, compressor strains harder',
                  'Refrigerant leaks go undetected for months',
                  'Filters clog, airflow drops, coils freeze',
                  'Manufacturer warranty becomes void',
                  'System lifespan drops from 15 years to 8–10',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-gray-700 text-sm">
                    <span className="w-2 h-2 rounded-full bg-red-600 shrink-0 mt-1.5" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 20-point inspection */}
      <section className="bg-gray-50 py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-3">What&apos;s Included in a Tune-Up</h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Every AC maintenance visit covers the same comprehensive 20 points. No corners cut, no upsells.
              You get a written report with photos when we&apos;re done.
            </p>
          </div>
          <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-3">
              {tuneUpItems.map((item, i) => (
                <div key={item} className="flex items-start gap-3">
                  <span className="flex items-center justify-center w-7 h-7 rounded-full bg-orange-500 text-white text-xs font-bold shrink-0">
                    {i + 1}
                  </span>
                  <span className="text-gray-700 text-sm leading-relaxed pt-0.5">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Maintenance plans */}
      <section className="bg-white py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-3">Maintenance Plans &amp; Pricing</h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              One-time tune-up or ongoing plan — both options. No long contracts, no surprise rate hikes.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {planTiers.map((tier) => (
              <div
                key={tier.name}
                className={`relative bg-white rounded-2xl p-7 border-2 ${
                  tier.badge ? 'border-orange-500 shadow-xl' : 'border-gray-200 shadow-sm'
                }`}
              >
                {tier.badge && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-orange-500 text-white text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full">
                    {tier.badge}
                  </span>
                )}
                <h3 className="text-xl font-bold text-gray-900 mb-1">{tier.name}</h3>
                <p className="text-3xl font-extrabold text-orange-600 mb-3">{tier.price}</p>
                <p className="text-gray-600 text-sm leading-relaxed mb-5">{tier.summary}</p>
                <ul className="space-y-2.5 mb-6">
                  {tier.bullets.map((b) => (
                    <li key={b} className="flex items-start gap-2 text-sm text-gray-700">
                      <span className="text-orange-500 font-bold shrink-0">✓</span>
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
                <a
                  href="tel:8132916146"
                  className="block w-full text-center bg-[#0f1620] text-white font-bold py-3 rounded-lg hover:bg-gray-800 transition-colors"
                >
                  Get Started
                </a>
              </div>
            ))}
          </div>
          <p className="text-center text-gray-500 text-sm mt-8">
            Plans renew month-to-month. Cancel any time. Pricing varies based on system size and number of units.
          </p>
        </div>
      </section>

      {/* When to schedule */}
      <section className="bg-gray-50 py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">When Should You Schedule?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white rounded-2xl p-7 border border-gray-100 shadow-sm">
              <div className="flex items-center gap-3 mb-3">
                <span className="text-3xl">☀️</span>
                <h3 className="text-xl font-bold text-gray-900">Spring Tune-Up</h3>
              </div>
              <p className="text-gray-600 leading-relaxed mb-3">
                <strong>Schedule between March and early May.</strong> This catches your AC before the peak heat
                arrives and we&apos;re booked solid through the summer.
              </p>
              <p className="text-gray-600 leading-relaxed text-sm">
                We focus on cooling-side components: refrigerant levels, evaporator coils, capacitors, condensate
                drains, and outdoor compressor performance.
              </p>
            </div>
            <div className="bg-white rounded-2xl p-7 border border-gray-100 shadow-sm">
              <div className="flex items-center gap-3 mb-3">
                <span className="text-3xl">🍂</span>
                <h3 className="text-xl font-bold text-gray-900">Fall Tune-Up</h3>
              </div>
              <p className="text-gray-600 leading-relaxed mb-3">
                <strong>Schedule between October and early December.</strong> Tampa winters are mild but cold snaps
                hit, and an unprepared heat pump or furnace will fail at the worst moment.
              </p>
              <p className="text-gray-600 leading-relaxed text-sm">
                We test heating mode operation, reversing valves on heat pumps, heat strips, igniters on gas
                furnaces, and the entire safety chain.
              </p>
            </div>
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

      {/* CTA Banner */}
      <section className="bg-orange-50 border-y border-orange-100 py-12 px-4">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-1">Ready to Schedule Your Tune-Up?</h2>
            <p className="text-gray-600">
              Same-day appointments often available across Tampa Bay.{' '}
              <Link href="/residential/hvac-service-tampa" className="text-orange-700 font-semibold hover:underline">
                Need a repair instead? →
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
