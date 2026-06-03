import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: '24/7 Emergency AC Repair Tampa, FL | Same-Day Service',
  description:
    'Emergency AC repair in Tampa, FL. 24-hour service, same-day repairs, no extra weekend or after-hours fees. Get your AC running tonight. Call (813) 291-6146.',
  keywords: [
    'emergency ac repair tampa',
    '24 hour ac repair tampa',
    'same day ac repair tampa',
    'after hours ac repair tampa',
    'weekend ac repair tampa',
    'emergency hvac tampa',
    'ac broke tampa',
    'ac not working tampa',
    'urgent ac repair tampa',
    'ac repair near me tampa',
  ],
  alternates: { canonical: '/residential/emergency-ac-repair-tampa' },
  openGraph: {
    title: '24/7 Emergency AC Repair Tampa, FL | Same-Day Service | North East Heating And Cooling',
    description:
      'Emergency AC repair in Tampa, FL. 24-hour service, same-day repairs, no extra weekend or after-hours fees. Get your AC running tonight.',
    url: '/residential/emergency-ac-repair-tampa',
    siteName: 'North East Heating And Cooling',
    locale: 'en_US',
    type: 'website',
  },
}

const schemaData = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Emergency AC Repair',
  serviceType: 'Emergency Air Conditioning Repair',
  description:
    '24/7 emergency air conditioning repair in Tampa, FL. Same-day service, after-hours and weekend availability with no premium fees.',
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
    name: 'Emergency AC Repair Services',
    itemListElement: [
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: '24-Hour AC Repair' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Same-Day AC Repair' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'After-Hours HVAC Service' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Weekend AC Repair' } },
    ],
  },
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://northeastheatingcooling.com' },
    { '@type': 'ListItem', position: 2, name: 'Residential Services', item: 'https://northeastheatingcooling.com/residential' },
    { '@type': 'ListItem', position: 3, name: 'Emergency AC Repair Tampa' },
  ],
}

const emergencySymptoms = [
  {
    icon: '🌡️',
    title: 'AC Blowing Warm Air',
    desc: "Likely a refrigerant leak, failed compressor, or frozen evaporator coil. Don't wait — running an AC blowing warm air can damage the compressor.",
  },
  {
    icon: '💧',
    title: 'AC Leaking Water',
    desc: "Usually a clogged condensate drain. Tampa's humidity makes this common. We'll clear it tonight before water damage spreads.",
  },
  {
    icon: '❌',
    title: 'AC Won\'t Turn On',
    desc: "Could be a tripped breaker, blown capacitor, failed contactor, or thermostat issue. We diagnose and fix on the same visit.",
  },
  {
    icon: '🔇',
    title: 'AC Making Loud Noises',
    desc: "Grinding, screeching, or banging means immediate attention. Could be motor failure, loose blower wheel, or compressor problems.",
  },
  {
    icon: '🥶',
    title: 'AC Frozen Solid',
    desc: "Ice on the indoor coil or refrigerant lines means low refrigerant or airflow blockage. Shut it off and call us — running it frozen kills compressors.",
  },
  {
    icon: '⚡',
    title: 'AC Tripping Breakers',
    desc: "Repeatedly tripping breakers means electrical fault — failed capacitor, shorted compressor, or wiring issue. This is a fire risk. Call now.",
  },
]

const services = [
  {
    title: '24-Hour AC Repair',
    description:
      "We answer the phone day or night. Tampa Bay's heat doesn't take a break, and neither do we. When your AC fails at 11 PM in August, we're here. Most after-hours calls are dispatched within 60-90 minutes — we don't run a phone-only service that schedules you for tomorrow.",
    bullets: [
      'Live answered calls 24/7 (no voicemail games)',
      '60-90 minute typical dispatch window',
      'No after-hours surcharge for plan members',
      'Fully stocked service vans (most repairs done on first visit)',
      'EPA 608 certified for refrigerant work',
      'All major brands serviced',
    ],
  },
  {
    title: 'Same-Day AC Repair',
    description:
      "Call before noon, and we'll have a technician at your home the same day. For most non-weekend, non-holiday calls, we can dispatch within 2-4 hours. Our service vans carry the parts that fail most often in Tampa Bay's climate — capacitors, contactors, fan motors, refrigerant — so first-visit repairs are the rule, not the exception.",
    bullets: [
      'Same-day dispatch for daytime calls',
      '2-4 hour typical arrival window',
      'Stocked vans = first-visit repair on most jobs',
      'Diagnostic call complete within 30 minutes',
      'Written estimate before any repair work begins',
      'No diagnostic fee waived with repair',
    ],
  },
  {
    title: 'After-Hours & Weekend Service',
    description:
      "We don't charge premium pricing for evenings or weekends. Florida's climate doesn't care that it's Saturday at 9 PM — and your family shouldn't have to suffer through a hot night because we wanted to bill double for it. Standard repair pricing, period.",
    bullets: [
      'No after-hours surcharge',
      'No weekend surcharge',
      'Holiday service available',
      'Same diagnostic and repair pricing as weekday',
      'Plan members get priority scheduling',
    ],
  },
  {
    title: 'Emergency Refrigerant Recharge',
    description:
      "If your AC stopped cooling, low refrigerant is one of the most common causes — usually due to a slow leak that built up over months. We arrive equipped to find the leak with electronic detectors, repair it (or quote a permanent fix), and recharge with the correct refrigerant. R-410A and R-454B available; R-22 still serviced where systems require it.",
    bullets: [
      'Electronic leak detection',
      'Refrigerant recharge (R-410A, R-454B, R-22)',
      'Leak repair quote provided in writing',
      'EPA 608 certified handling',
      'Honest assessment: repair vs. replace',
    ],
  },
]

const responseTimes = [
  { area: 'Tampa', time: '30-60 minutes' },
  { area: 'Riverview', time: '45-75 minutes' },
  { area: 'Brandon', time: '45-75 minutes' },
  { area: 'Wesley Chapel', time: '60-90 minutes' },
  { area: 'Lutz', time: '60-90 minutes' },
  { area: 'Carrollwood', time: '30-60 minutes' },
  { area: 'St. Petersburg', time: '60-90 minutes' },
  { area: 'Clearwater', time: '60-90 minutes' },
]

const faqs = [
  {
    q: 'Do you really answer calls 24/7?',
    a: "Yes. Our after-hours line is answered by a real human, not a voicemail or answering service that takes a message and calls you back in the morning. When you call (813) 291-6146 at 2 AM in July, you get a real conversation about your problem and a real dispatch time. We don't play phone games when your family is hot.",
  },
  {
    q: 'How much does emergency AC repair cost in Tampa?',
    a: "We don't charge after-hours or weekend surcharges, so emergency repair pricing matches our standard rates. Diagnostic calls are typically $89, waived if you proceed with repair. Common repairs (capacitor, contactor, refrigerant recharge with leak repair) range $250-$650. Bigger jobs (compressor, blower motor, control board) can run $700-$2,000+. We give written estimates before any work begins — no surprises on the bill.",
  },
  {
    q: 'How fast can you get to my house?',
    a: "Standard response time during business hours is 2-4 hours. After-hours response is typically 60-90 minutes for Tampa proper, slightly longer for outlying areas like Wesley Chapel or Brandon. We'll give you a real arrival window when you call — not a vague \"sometime today\" answer.",
  },
  {
    q: 'What should I do while waiting for the technician?',
    a: "(1) Turn off your AC at the thermostat to prevent further damage. (2) Check that all return air vents and supply vents are open and unobstructed. (3) If you smell burning or see ice on refrigerant lines, leave the AC off — running it frozen or with electrical issues makes the repair more expensive. (4) Open windows in the early morning before heat builds up. (5) If you have ceiling fans, run them — they don't cool the air but they help you stay comfortable until we arrive.",
  },
  {
    q: 'Can you fix my AC tonight on the first visit?',
    a: "For most common failures — yes. Our service vans carry capacitors, contactors, fan motors, refrigerant, common control boards, and thermostats. About 80% of emergency calls in Tampa Bay involve one of these components. For specialty parts (compressor, specific control boards, OEM-only items), we may need to order parts the next day — but we'll get your system running on a temporary fix where possible.",
  },
  {
    q: 'My AC is making a loud noise — should I shut it off?',
    a: "If the noise is grinding, screeching metal, or banging — yes, shut it off and call us. Continuing to run a damaged system can turn a $500 repair into a $3,000 compressor replacement. If the noise is more like a louder-than-usual hum or rattle, it's safer to leave running until we get there. When in doubt, shut it off — your compressor is the most expensive component to replace.",
  },
  {
    q: 'Do you service my area at night?',
    a: "We provide 24/7 emergency service across all of Tampa Bay, including Tampa, Riverview, Brandon, Wesley Chapel, Lutz, Carrollwood, St. Petersburg, Clearwater, Largo, Plant City, Valrico, Apollo Beach, Sun City Center, and surrounding areas. Response times vary slightly by location — see the table on this page for typical arrival windows.",
  },
  {
    q: 'My AC works but only cools one room — is that an emergency?',
    a: "Probably not a true emergency, but it's a real problem. Uneven cooling usually means duct leaks, a failing blower motor, or undersized equipment. We can usually schedule next-day or same-week visits for non-emergency issues. If you have someone vulnerable in the home (elderly, young children, medical conditions), let us know when you call and we'll prioritize.",
  },
]

export default function EmergencyACRepairTampaPage() {
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
            src="https://images.pexels.com/photos/8961273/pexels-photo-8961273.jpeg?auto=compress&cs=tinysrgb&w=1600"
            alt="Emergency HVAC technician responding to AC repair call in Tampa Bay at night"
            className="w-full h-full object-cover object-center opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0f1620]/80 via-[#0f1620]/60 to-[#0f1620]/40" />
        </div>
        <div className="relative z-10 max-w-5xl mx-auto">
          <p className="text-[0.72rem] font-bold tracking-[0.18em] uppercase mb-4 text-[#F0A06A]">
            Tampa Bay, FL — 24/7 Emergency Service
          </p>
          <h1 className="font-display text-4xl md:text-5xl font-extrabold leading-[1.05] mb-5 tracking-[-0.03em]">
            24/7 Emergency AC Repair in Tampa, FL
          </h1>
          <p className="text-slate-300 text-lg md:text-xl max-w-3xl mb-8 leading-relaxed">
            AC out at midnight in August? Call us. Real humans answer 24/7, dispatch in 60-90 minutes,
            and we don&apos;t charge premium pricing for after-hours or weekends.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="tel:8132916146"
              className="inline-flex items-center justify-center px-8 py-3.5 bg-white text-[#0f1620] font-bold text-lg rounded-lg hover:bg-[#C8330A]/5 transition-colors shadow-lg"
            >
              Call (813) 291-6146 — 24/7
            </a>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-3.5 bg-[#C8330A] text-white font-bold text-lg rounded-lg border-2 border-[#C8330A]/40 hover:bg-[#b02c08] transition-colors"
            >
              Request Emergency Service
            </Link>
          </div>
        </div>
      </section>

      {/* Trust bar */}
      <section className="bg-[#0f1620] text-white py-4 px-4">
        <div className="max-w-5xl mx-auto flex flex-wrap justify-center md:justify-between gap-x-8 gap-y-2 text-sm font-semibold text-slate-300">
          <span>✓ 24/7 Live-Answered Calls</span>
          <span>✓ 60-90 Min Dispatch</span>
          <span>✓ No After-Hours Fees</span>
          <span>✓ Same-Day Repair</span>
          <span>✓ Stocked Service Vans</span>
        </div>
      </section>

      {/* Why us / urgency framing */}
      <section className="bg-white py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="font-display tracking-[-0.03em] text-4xl sm:text-5xl font-extrabold text-slate-900 mb-5 leading-[1.02]">
            When Your AC Goes Down in Tampa, Time Matters
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
            <div className="space-y-4 text-gray-600 text-lg leading-relaxed">
              <p>
                Tampa Bay summers don&apos;t play. Indoor temperatures climb 5-8°F per hour during peak
                heat once your AC stops working. By midnight on a typical August night, your house can
                hit 88°F — and stay there until sunrise. For elderly residents, young children, or
                anyone with health conditions, this isn&apos;t just uncomfortable, it&apos;s dangerous.
              </p>
              <p>
                We built our after-hours service around one principle: <strong>no surcharges, no
                games, no waiting until tomorrow.</strong> When you call (813) 291-6146 at any hour, a
                real person answers, takes your address, and dispatches a real technician — usually
                within 60-90 minutes for most of Tampa Bay.
              </p>
              <p>
                Our service vans are stocked for the failures we see most often in Florida: capacitors,
                contactors, blower motors, refrigerant, control boards, and thermostats. About 80% of
                emergency calls get fixed on the first visit. The other 20% get a temporary fix where
                possible while we order parts.
              </p>
            </div>
            <div className="bg-red-50 rounded-2xl p-7 border border-red-100">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Tampa Bay Response Times</h3>
              <div className="space-y-2 text-sm">
                {responseTimes.map((r) => (
                  <div key={r.area} className="bg-white rounded-lg p-3 border border-gray-100 flex justify-between items-center">
                    <span className="font-bold text-gray-900">{r.area}</span>
                    <span className="text-[#b02c08] font-semibold">{r.time}</span>
                  </div>
                ))}
              </div>
              <p className="text-xs text-gray-500 mt-3 leading-relaxed">
                Times shown for after-hours dispatch. Daytime response usually faster. Times may vary during peak demand or severe weather.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Emergency symptoms */}
      <section className="bg-gray-50 py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-display tracking-[-0.03em] text-4xl sm:text-5xl font-extrabold text-slate-900 mb-3 leading-[1.02]">When to Call for Emergency AC Repair</h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Some AC problems can wait until morning. These can&apos;t.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {emergencySymptoms.map((s) => (
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
            <h2 className="font-display tracking-[-0.03em] text-4xl sm:text-5xl font-extrabold text-slate-900 mb-3 leading-[1.02]">Our Emergency AC Repair Services</h2>
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

      {/* Big CTA */}
      <section className="bg-[#b02c08] text-white py-12 px-4">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h2 className="font-display tracking-[-0.02em] text-2xl md:text-3xl font-extrabold mb-1">AC Out Right Now? Call Us 24/7.</h2>
            <p className="text-white/80">
              Real humans answer. No surcharges. Dispatch in 60-90 minutes for most of Tampa Bay.
            </p>
          </div>
          <a
            href="tel:8132916146"
            className="shrink-0 inline-flex items-center justify-center px-7 py-4 bg-white text-[#b02c08] font-bold rounded-lg hover:bg-red-50 transition-colors text-lg whitespace-nowrap shadow-lg"
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
