import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: '24/7 Emergency Commercial HVAC Tampa, FL | Same-Day Repair | North East Heating And Cooling',
  description:
    '24/7 emergency commercial HVAC repair in Tampa, FL. Restaurant, retail, office, and industrial HVAC emergency service. Priority response for businesses. Call (813) 291-6146.',
  keywords: [
    'emergency commercial hvac tampa',
    '24 hour commercial hvac tampa',
    'commercial ac repair emergency tampa',
    'restaurant hvac repair tampa',
    'commercial hvac after hours tampa',
    'emergency commercial ac tampa',
    'commercial rooftop unit emergency tampa',
    'commercial hvac downtime tampa',
    'business ac repair emergency tampa',
    'commercial hvac priority service tampa',
  ],
  alternates: { canonical: '/commercial/emergency-hvac-tampa' },
  openGraph: {
    title: '24/7 Emergency Commercial HVAC Tampa, FL | Same-Day Repair',
    description:
      '24/7 emergency commercial HVAC repair in Tampa, FL. Restaurant, retail, office, and industrial HVAC emergency service. Priority response for businesses.',
    url: '/commercial/emergency-hvac-tampa',
    siteName: 'North East Heating And Cooling',
    locale: 'en_US',
    type: 'website',
  },
}

const schemaData = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Emergency Commercial HVAC',
  serviceType: 'Emergency Commercial HVAC Repair',
  description:
    '24/7 emergency commercial HVAC repair in Tampa, FL. Priority response for restaurants, retail, offices, medical facilities, and industrial buildings throughout Tampa Bay.',
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
  hoursAvailable: {
    '@type': 'OpeningHoursSpecification',
    dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
    opens: '00:00',
    closes: '23:59',
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
    name: 'Emergency Commercial HVAC Services',
    itemListElement: [
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: '24-Hour Commercial HVAC Repair' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Restaurant Emergency HVAC Service' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Retail Emergency HVAC Service' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Commercial Rooftop Unit Emergency Repair' } },
    ],
  },
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://northeastheatingcooling.com' },
    { '@type': 'ListItem', position: 2, name: 'Commercial Services', item: 'https://northeastheatingcooling.com/commercial' },
    { '@type': 'ListItem', position: 3, name: 'Emergency Commercial HVAC Tampa' },
  ],
}

const businessTypes = [
  {
    title: 'Restaurants',
    detail:
      "HVAC failure in a Tampa Bay restaurant during dinner service costs revenue every minute. We prioritize restaurant emergency calls during operating hours. Familiar with kitchen makeup air units, dining room rooftop units, and the unique cooling load combinations restaurants require — including coordinating with refrigeration if walk-in coolers are affected.",
  },
  {
    title: 'Retail & Shopping Centers',
    detail:
      "Foot traffic disappears within an hour of HVAC failure during summer. We respond to retail emergencies fast and have experience working with property management companies, anchor tenants, and shopping center management to coordinate repairs that minimize disruption to surrounding businesses.",
  },
  {
    title: 'Medical & Dental Offices',
    detail:
      "Patient comfort and infection control depend on properly functioning HVAC. We respond to medical facility emergencies as priority calls, understand the air pressure and filtration requirements that medical facilities maintain, and document repair work for compliance records.",
  },
  {
    title: 'Office Buildings',
    detail:
      "Commercial office tenants expect rapid response to comfort issues. We work with property management companies, building engineers, and tenant representatives to coordinate emergency repairs across multi-tenant buildings — including after-hours response when failures happen overnight or weekends.",
  },
  {
    title: 'Light Industrial & Warehouses',
    detail:
      "Manufacturing facilities, distribution centers, and warehouses often have specialized HVAC requirements — process cooling, ventilation, dehumidification for moisture-sensitive products. We respond to industrial emergencies with awareness that downtime impacts production schedules.",
  },
  {
    title: 'Multi-Tenant Properties',
    detail:
      "Property managers need a single contractor who can respond fast across multiple buildings. Our maintenance plan customers receive priority response to any building they manage, with documented service records and consolidated billing options.",
  },
]

const services = [
  {
    title: '24/7 Emergency Commercial Repair',
    description:
      "Live-answered phone lines around the clock. When a Tampa Bay restaurant's rooftop unit fails at 9 PM Saturday, you don't get a voicemail — you get a real conversation about dispatch time. Our after-hours response targets 90-120 minutes for most commercial calls, with priority response for maintenance plan customers.",
    bullets: [
      'Live-answered calls 24/7',
      '90-120 minute typical commercial dispatch',
      'Priority response for maintenance plan customers',
      'Refrigerant on-board for most call-outs',
      'EPA 608 certified technicians',
      'After-hours and weekend service available',
    ],
  },
  {
    title: 'Restaurant Emergency HVAC',
    description:
      "Restaurants face unique HVAC challenges: kitchen heat loads, makeup air balance, sensitive customer comfort, and the absolute need to stay operational during service. We dispatch to restaurant emergencies with technicians familiar with restaurant-specific equipment — exhaust hood interlocks, makeup air units, dining room cooling, and the impact of one system on another.",
    bullets: [
      'Familiar with restaurant equipment configurations',
      'Coordinate with kitchen exhaust if applicable',
      'Service during off-hours where possible',
      'Temporary spot cooling rentals coordinated if needed',
      'Refrigeration referrals if walk-ins affected',
    ],
  },
  {
    title: 'Commercial Rooftop Unit Emergency',
    description:
      "Rooftop unit failures require crane access for major component replacement, but most emergency calls don't require that. Common emergency RTU repairs include capacitor failure, contactor burnout, fan motor replacement, refrigerant leaks, and control board failures — all of which we handle with stocked service vans. For major component failures, we coordinate crane scheduling for next-day completion where possible.",
    bullets: [
      'Stocked vans for common RTU failures',
      'Crane coordination for major repairs',
      'Capacitor, contactor, fan motor on-board',
      'Refrigerant recharge available on-site',
      'Multi-zone diagnostic capability',
      'Building automation system troubleshooting',
    ],
  },
  {
    title: 'Maintenance Plan Priority Service',
    description:
      "Commercial customers on our maintenance plans receive guaranteed response times during emergencies — typically 4 hours during business hours, 6 hours after-hours, with priority dispatch ahead of non-plan customers. This is the single best protection against extended downtime during peak season — when emergency capacity gets stretched, plan customers stay covered.",
    bullets: [
      '4-hour guaranteed business-hour response',
      '6-hour guaranteed after-hours response',
      'Priority dispatch over non-plan customers',
      'No after-hours surcharges for plan members',
      '15% discount on emergency repairs',
      'Multi-location coordination available',
    ],
  },
]

const faqs = [
  {
    q: 'Do you really answer commercial calls 24/7?',
    a: "Yes. Our after-hours line is answered by a real person who can immediately dispatch a technician — not an answering service that takes a message and calls back. When a Tampa Bay restaurant manager calls at 11 PM Saturday because the rooftop unit failed during dinner service, you get a real conversation and a real dispatch time, not voicemail.",
  },
  {
    q: 'How fast can you respond to a commercial emergency in Tampa Bay?',
    a: "Maintenance plan customers: 4 hours guaranteed during business hours, 6 hours after-hours. Non-plan emergency calls: typically 90-120 minutes during business hours, 2-3 hours after-hours, depending on demand and location. Outlying areas (Wesley Chapel, Plant City, Apollo Beach) may add 30-60 minutes to response times.",
  },
  {
    q: 'How much does emergency commercial HVAC repair cost?',
    a: "Standard commercial diagnostic service typically runs $189-$249 (waived if repair proceeds for plan customers). Common repair work — capacitor, contactor, fan motor, refrigerant — typically lands $400-$1,800 fully repaired. Major repairs (compressor, control boards, multi-component failures) range $2,000-$8,000+. We provide written estimates before any work proceeds. Maintenance plan customers receive 15% discount on emergency repairs.",
  },
  {
    q: 'Do you charge premium pricing for after-hours commercial calls?',
    a: "We charge a modest after-hours dispatch fee for non-plan customers ($89-$129 depending on time and day) — significantly less than competitor surcharges that can run 50-100% of the repair cost. Maintenance plan customers pay no after-hours surcharge. Our goal is to make emergency response affordable so business owners don't delay calling when they should.",
  },
  {
    q: 'Can you coordinate with our property management company?',
    a: "Yes. We work regularly with Tampa Bay commercial property management companies, building engineers, and facility managers. We can bill property management directly, coordinate access through building maintenance, document work for compliance records, and provide multi-property service coordination.",
  },
  {
    q: 'What if my commercial HVAC needs a part you don\'t carry?',
    a: "For specialty parts (specific control boards, OEM-only components, large compressors), we typically need next-day delivery from our suppliers. We'll get your system running on a temporary fix where possible, give you a clear timeline, and prioritize the follow-up appointment. For mission-critical operations, we can coordinate temporary spot cooling rentals while parts arrive.",
  },
  {
    q: 'Do you work on systems we didn\'t install?',
    a: "Yes. We service all major commercial HVAC brands regardless of original installer — Carrier, Trane, Lennox, Rheem, York, Goodman, Daikin, Mitsubishi, and others. Many of our commercial customers came to us after their original installer's service deteriorated.",
  },
  {
    q: 'What information should I have ready when I call?',
    a: "Helpful info to have ready: (1) Building address and contact person on-site. (2) Equipment location (rooftop, ground, mechanical room). (3) Symptom description (not cooling, not turning on, leaking, unusual noise, ice on coil). (4) When the problem started. (5) Brand and approximate age if known. (6) Any error codes displayed on thermostats or building automation systems. We can troubleshoot some issues over the phone and bring the right equipment for the most likely repair.",
  },
]

export default function CommercialEmergencyHVACPage() {
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
            src="https://images.pexels.com/photos/3964736/pexels-photo-3964736.jpeg?auto=compress&cs=tinysrgb&w=1600"
            alt="Emergency commercial HVAC repair in Tampa Bay restaurant"
            className="w-full h-full object-cover object-center opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0f1620]/80 via-[#0f1620]/60 to-[#0f1620]/40" />
        </div>
        <div className="relative z-10 max-w-5xl mx-auto">
          <p className="text-blue-300 text-sm font-semibold uppercase tracking-widest mb-3">
            Commercial HVAC — 24/7 Emergency Service
          </p>
          <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-5 max-w-3xl">
            24/7 Emergency Commercial HVAC in Tampa, FL
          </h1>
          <p className="text-blue-100 text-lg md:text-xl max-w-3xl mb-8 leading-relaxed">
            Restaurant, retail, office, medical, and industrial commercial HVAC emergency service. Live
            calls 24/7. Priority response for maintenance plan customers. Tampa Bay&apos;s heat and humidity
            don&apos;t take a break — neither do we.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="tel:8132916146"
              className="inline-block bg-orange-500 hover:bg-orange-600 text-white font-bold py-4 px-8 rounded-lg text-lg transition-colors"
            >
              Call (813) 291-6146 — 24/7
            </a>
            <Link
              href="/contact"
              className="inline-block bg-white hover:bg-blue-50 text-blue-900 font-bold py-4 px-8 rounded-lg text-lg transition-colors"
            >
              Request Service
            </Link>
          </div>
        </div>
      </section>

      {/* Trust Bar */}
      <section className="bg-[#0f1620] text-white py-5 px-4">
        <div className="max-w-5xl mx-auto flex flex-wrap justify-center gap-8 text-sm font-medium">
          <div className="flex items-center gap-2"><span className="text-orange-400 text-lg">✓</span> 24/7 Live-Answered Calls</div>
          <div className="flex items-center gap-2"><span className="text-orange-400 text-lg">✓</span> 90-120 Min Response</div>
          <div className="flex items-center gap-2"><span className="text-orange-400 text-lg">✓</span> Plan Customer Priority</div>
          <div className="flex items-center gap-2"><span className="text-orange-400 text-lg">✓</span> Stocked Service Vans</div>
          <div className="flex items-center gap-2"><span className="text-orange-400 text-lg">✓</span> EPA 608 Certified</div>
        </div>
      </section>

      {/* Why response time matters */}
      <section className="bg-white py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="max-w-3xl">
            <h2 className="text-3xl font-bold text-gray-900 mb-5">
              Commercial HVAC Failure Costs More Than the Repair
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-4">
              For Tampa Bay businesses, HVAC failure during operating hours has a cost that goes far beyond the
              service ticket. Restaurants lose covers. Retail loses foot traffic. Offices lose productivity.
              Medical facilities risk patient comfort and compliance. Manufacturing loses production. The
              calculus is simple: every hour of downtime during peak season costs real money.
            </p>
            <p className="text-gray-600 text-lg leading-relaxed mb-4">
              That&apos;s why response time matters more than hourly rate. A contractor who quotes lower rates
              but shows up six hours later costs you significantly more than one who responds in two hours at a
              slightly higher rate. We built our commercial emergency response around this reality —
              live-answered calls, priority dispatch for plan customers, and stocked service vans that fix most
              problems on the first visit.
            </p>
            <p className="text-gray-600 text-lg leading-relaxed">
              The single biggest protection against expensive emergencies is a maintenance plan that gives your
              business priority response when failures happen. Plan customers get 4-hour guaranteed business-hour
              response and 6-hour guaranteed after-hours response — no matter how busy our queue is.
            </p>
          </div>
        </div>
      </section>

      {/* Business Types */}
      <section className="bg-gray-50 py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-3 text-center">Commercial Customers We Serve</h2>
          <p className="text-gray-600 text-lg text-center max-w-3xl mx-auto mb-12">
            Every commercial sector has unique HVAC needs. Here&apos;s how we approach each.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {businessTypes.map((b) => (
              <div key={b.title} className="bg-white rounded-2xl p-7 shadow-sm border border-gray-100">
                <h3 className="font-bold text-gray-900 text-lg mb-3">{b.title}</h3>
                <p className="text-gray-600 leading-relaxed">{b.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="bg-white py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-3 text-center">Our Emergency Services</h2>
          <div className="space-y-8 mt-12">
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
                className="bg-white rounded-xl p-6 border border-gray-100 group"
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

      {/* Big CTA */}
      <section className="bg-red-700 text-white py-12 px-4">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold mb-1">Commercial HVAC Down Right Now? Call Us 24/7.</h2>
            <p className="text-red-100">
              Live-answered calls. Priority response for plan customers. Stocked vans for first-visit repair.
            </p>
          </div>
          <a
            href="tel:8132916146"
            className="shrink-0 inline-flex items-center justify-center px-7 py-4 bg-white text-red-700 font-bold rounded-lg hover:bg-red-50 transition-colors text-lg whitespace-nowrap shadow-lg"
          >
            Call (813) 291-6146
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
