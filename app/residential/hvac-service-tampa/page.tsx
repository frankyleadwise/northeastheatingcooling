import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Residential HVAC Repair Services in Tampa, FL | North East Heating & Cooling',
  description:
    'Expert residential HVAC repair in Tampa, FL. Fast AC repair, heating repair & emergency HVAC service. Call (813) 291-6146 for same-day service.',
  keywords: [
    'HVAC repair Tampa FL',
    'AC repair Tampa',
    'emergency HVAC repair Tampa',
    'heating repair Tampa',
    'residential HVAC service Tampa',
    'same-day AC repair Tampa Bay',
    'North East Heating Cooling Tampa',
  ],
  alternates: { canonical: '/residential/hvac-service-tampa' },
  openGraph: {
    title: 'Residential HVAC Repair Services in Tampa, FL | North East Heating & Cooling',
    description:
      'Expert residential HVAC repair in Tampa, FL. Fast AC repair, heating repair & emergency HVAC service. Call (813) 291-6146 for same-day service.',
    url: '/residential/hvac-service-tampa',
    siteName: 'North East Heating & Cooling',
    locale: 'en_US',
    type: 'website',
  },
}

const schemaData = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'North East Heating & Cooling',
  description:
    'Professional residential HVAC repair, AC repair, and heating repair services in Tampa, FL and the Tampa Bay area.',
  telephone: '+18132916146',
  email: 'office@northeastheatingcooling.com',
  url: 'https://northeastheatingcooling.com',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Tampa',
    addressRegion: 'FL',
    addressCountry: 'US',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 27.9506,
    longitude: -82.4572,
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
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: '08:00',
      closes: '18:00',
    },
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Saturday'],
      opens: '08:00',
      closes: '14:00',
    },
  ],
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'HVAC Repair Services',
    itemListElement: [
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'AC Repair' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Heating Repair' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Emergency HVAC Repair' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'HVAC System Tune-Up' } },
    ],
  },
  priceRange: '$$',
  currenciesAccepted: 'USD',
  paymentAccepted: 'Cash, Credit Card, Check',
}

const repairServices = [
  {
    title: 'AC Repair & Diagnostics',
    description:
      'Is your air conditioner blowing warm air, freezing up, or refusing to turn on? Our certified technicians use advanced diagnostic tools to pinpoint the exact cause of your AC problems — whether it\'s a refrigerant leak, failed compressor, faulty capacitor, or a clogged condensate drain — and get it fixed right the first time.',
    bullets: [
      'Refrigerant recharge and leak repair',
      'Compressor and capacitor replacement',
      'Evaporator and condenser coil cleaning',
      'Thermostat calibration and replacement',
      'Condensate drain cleaning and repair',
      'Blower motor and fan blade service',
    ],
  },
  {
    title: 'Heating System Repair',
    description:
      "While Tampa Bay winters are mild, cold snaps do hit — and a malfunctioning heat pump or furnace makes them miserable. North East Heating & Cooling services all types of residential heating systems common in Florida, including heat pumps, electric furnaces, and gas furnaces. We'll restore your heat quickly so your family stays comfortable.",
    bullets: [
      'Heat pump repair and refrigerant service',
      'Electric and gas furnace diagnostics',
      'Igniter and heat exchanger inspection',
      'Reversing valve replacement',
      'Air handler and blower service',
      'Thermostat wiring and programming',
    ],
  },
  {
    title: '24/7 Emergency HVAC Repair',
    description:
      "HVAC breakdowns don't keep business hours — and in Florida's extreme heat, a broken AC can become a health emergency within hours. Our emergency HVAC team is available around the clock, including weekends and holidays. When you call our emergency line, a live technician answers and we dispatch the nearest available crew to your Tampa Bay home as fast as possible.",
    bullets: [
      'Live answering — no voicemail after hours',
      'Emergency dispatch 7 days a week',
      'Priority service for households with elderly or young children',
      'Fully stocked service vans for faster repairs',
    ],
  },
  {
    title: 'HVAC System Tune-Ups & Preventive Maintenance',
    description:
      "The best repair is the one you never need. Annual or bi-annual HVAC tune-ups catch small problems before they become expensive failures. Our comprehensive tune-up service covers over 20 inspection and maintenance points, ensuring your system runs at peak efficiency heading into Tampa's grueling summer.",
    bullets: [
      'Full system inspection and safety check',
      'Coil cleaning (evaporator and condenser)',
      'Refrigerant level check and adjustment',
      'Electrical connections tightened and tested',
      'Filter replacement and airflow measurement',
      'Thermostat calibration and testing',
    ],
  },
]

const faqs = [
  {
    q: 'How quickly can you respond to an AC repair call in Tampa?',
    a: "For standard service calls, we typically offer same-day or next-day appointments for Tampa and the surrounding Tampa Bay area. For emergency breakdowns, we dispatch a technician as quickly as possible — often within 1–2 hours depending on your location and current service volume. We keep our vans stocked with common repair parts to resolve most issues on the first visit.",
  },
  {
    q: 'How much does HVAC repair in Tampa typically cost?',
    a: "HVAC repair costs vary widely depending on the issue. Minor repairs like capacitor replacements may run $150–$300, while larger repairs such as compressor replacement can cost $800–$1,500 or more. We always provide a written, upfront estimate before beginning any repair work, so there are never surprise charges. We also offer financing options for larger repairs.",
  },
  {
    q: 'My AC is blowing warm air — what could be wrong?',
    a: "Several issues can cause an AC to blow warm air: low refrigerant (often from a leak), a dirty air filter restricting airflow, a failing compressor, a frozen evaporator coil, or a thermostat set incorrectly. While some issues — like replacing a filter — are DIY-friendly, refrigerant work requires a licensed technician. Call us and we'll diagnose the exact cause.",
  },
  {
    q: 'Should I repair or replace my aging HVAC system?',
    a: "A good rule of thumb is the 5,000 rule: multiply the repair cost by the system's age. If the result exceeds $5,000, replacement is usually more cost-effective. Systems over 10–12 years old with recurring problems often make more financial sense to replace with a high-efficiency unit that will also lower your monthly energy bills. We'll give you an honest assessment — no upselling.",
  },
  {
    q: 'What HVAC brands do you service in Tampa?',
    a: "Our technicians are trained to service and repair all major HVAC brands including Carrier, Trane, Lennox, Rheem, Goodman, York, American Standard, Bryant, Daikin, and Mitsubishi. We stock parts for the most common brands and can source specialty parts quickly for less common manufacturers.",
  },
]

export default function HvacServiceTampaPage() {
  return (
    <main className="font-sans">
      {/* JSON-LD Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />

      {/* Hero */}
      <section className="bg-[#0f1620] text-white py-20 px-4">
        <div className="max-w-5xl mx-auto">
          <p className="text-blue-200 font-semibold text-sm uppercase tracking-widest mb-3">
            Tampa Bay, FL — Residential HVAC Repair
          </p>
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-5">
            Professional Residential HVAC Repair Services in Tampa, FL
          </h1>
          <p className="text-blue-100 text-lg md:text-xl max-w-3xl mb-8 leading-relaxed">
            Fast, reliable AC and heating repairs for Tampa Bay homeowners. Certified HVAC technicians,
            same-day service, upfront pricing — and 24/7 emergency response when you need it most.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="tel:8132916146"
              className="inline-flex items-center justify-center px-8 py-3.5 bg-white text-blue-800 font-bold text-lg rounded-lg hover:bg-blue-50 transition-colors shadow-lg"
            >
              Call (813) 291-6146
            </a>
            <a
              href="#contact-form"
              className="inline-flex items-center justify-center px-8 py-3.5 bg-red-600 text-white font-bold text-lg rounded-lg border-2 border-red-400 hover:bg-red-700 transition-colors"
            >
              Request Service Online
            </a>
          </div>
        </div>
      </section>

      {/* Trust bar */}
      <section className="bg-[#0f1620] text-white py-4 px-4">
        <div className="max-w-5xl mx-auto flex flex-wrap justify-center md:justify-between gap-x-8 gap-y-2 text-sm font-semibold text-blue-200">
          <span>✓ Licensed &amp; Insured</span>
          <span>✓ Same-Day Service Available</span>
          <span>✓ 24/7 Emergency Response</span>
          <span>✓ Upfront Pricing — No Surprises</span>
          <span>✓ All Major Brands Serviced</span>
        </div>
      </section>

      {/* Overview */}
      <section className="bg-white py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-5">
            Tampa Bay&rsquo;s Trusted Residential HVAC Repair Team
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
            <div className="space-y-4 text-gray-600 text-lg leading-relaxed">
              <p>
                When your air conditioner breaks down in Tampa Bay, every hour without cool air matters.
                Temperatures routinely exceed 90&deg;F from May through October, and with humidity levels that
                make it feel even hotter, a malfunctioning HVAC system can quickly move from uncomfortable to
                dangerous — especially for elderly residents, young children, and pets.
              </p>
              <p>
                North East Heating &amp; Cooling has built its reputation on fast response times, honest
                diagnostics, and repairs that last. Our certified technicians carry a comprehensive inventory
                of parts on every service van, which means we can resolve the majority of AC and heating
                repairs in a single visit — no return trips, no waiting on back-ordered parts.
              </p>
              <p>
                We service all residential HVAC systems — from central air conditioning and heat pumps to
                mini-splits and packaged units — and we work on every major brand. Whether you have a
                10-year-old Carrier system or a newly installed Trane unit under warranty, our team has the
                training and tools to handle it.
              </p>
            </div>
            <div className="bg-blue-50 rounded-2xl p-7 border border-blue-100">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Common HVAC Problems We Fix</h3>
              <ul className="space-y-2.5">
                {[
                  'AC not cooling or blowing warm air',
                  'Air conditioner not turning on',
                  'Frozen evaporator coils',
                  'Refrigerant leaks',
                  'Unusual noises (banging, squealing, clicking)',
                  'High energy bills with reduced performance',
                  'Short cycling (system turns on and off frequently)',
                  'Thermostat not responding',
                  'Uneven cooling between rooms',
                  'Water leaking from AC unit',
                  'Heat pump not heating in winter',
                  'Burning smell from vents',
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

      {/* Repair Services */}
      <section className="bg-gray-50 py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-3">Our HVAC Repair Services</h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              From routine tune-ups to emergency repairs, our technicians handle every aspect of residential
              HVAC service in Tampa Bay.
            </p>
          </div>
          <div className="space-y-8">
            {repairServices.map((service) => (
              <div
                key={service.title}
                className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100"
              >
                <h3 className="text-2xl font-bold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-600 leading-relaxed mb-5">{service.description}</p>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {service.bullets.map((b) => (
                    <li key={b} className="flex items-center gap-2 text-sm text-gray-700">
                      <span className="w-1.5 h-1.5 rounded-full bg-red-600 shrink-0" />
                      {b}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Florida Climate Section */}
      <section className="bg-white py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-5">
                HVAC Repair in Florida&rsquo;s Demanding Climate
              </h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  HVAC systems in Tampa Bay work harder than almost anywhere else in the country. The
                  combination of intense heat, high humidity, and salt-laden coastal air creates conditions
                  that accelerate wear on compressors, coils, and electrical components faster than in
                  milder climates.
                </p>
                <p>
                  Florida&rsquo;s humidity — regularly above 80% — puts a massive strain on evaporator coils
                  and drain systems. Condensate drains clog frequently, coils develop mold and algae growth,
                  and systems that run nearly year-round log thousands more operating hours than systems in
                  northern states.
                </p>
                <p>
                  Our technicians understand these Florida-specific failure patterns. When we diagnose your
                  system, we look beyond the immediate symptom to identify the underlying causes that are
                  common in Tampa Bay — giving you repairs that address root issues rather than just
                  masking problems temporarily.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { label: 'Average Summer High', value: '91°F', note: 'May–September' },
                { label: 'Average Humidity', value: '80%+', note: 'Year-round' },
                { label: 'AC Season Length', value: '10 Months', note: 'Oct–Mar mild' },
                { label: 'Annual Cooling Hours', value: '3,000+', note: 'vs ~800 in NY' },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="bg-[#0f1620] text-white rounded-xl p-5 text-center"
                >
                  <div className="text-3xl font-extrabold text-blue-200 mb-1">{stat.value}</div>
                  <div className="text-sm font-semibold text-white">{stat.label}</div>
                  <div className="text-xs text-blue-300 mt-1">{stat.note}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-gray-50 py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-3 text-center">
            Why Choose North East Heating &amp; Cooling for HVAC Repair?
          </h2>
          <p className="text-gray-600 text-center text-lg max-w-2xl mx-auto mb-12">
            Tampa Bay homeowners have choices when it comes to HVAC repair. Here&rsquo;s why they call us again
            and again.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: 'Certified Technicians',
                desc: 'Our HVAC technicians are EPA-certified, NATE-certified, and continuously trained on the latest equipment and repair techniques.',
              },
              {
                title: 'Same-Day Service',
                desc: "We understand that a broken AC in Tampa is urgent. We offer same-day appointments for most residential repair calls in the Tampa Bay area.",
              },
              {
                title: 'Fully Stocked Service Vans',
                desc: 'Our vans carry hundreds of common HVAC parts, which means we fix most issues on the first visit — saving you time and money.',
              },
              {
                title: 'Transparent, Upfront Pricing',
                desc: 'You receive a written estimate before any work begins. The price you approve is the price you pay — no hidden fees, no surprise add-ons.',
              },
              {
                title: '24/7 Emergency Service',
                desc: 'HVAC emergencies happen at the worst times. Our emergency line connects you with a live technician any time, day or night, every day of the year.',
              },
              {
                title: 'Parts & Labor Warranty',
                desc: "We stand behind our repairs with a warranty on both parts and labor. If an issue recurs within the warranty period, we'll come back and make it right at no charge.",
              },
            ].map((item) => (
              <div key={item.title} className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center mb-4">
                  <span className="w-3 h-3 rounded-full bg-red-700 block" />
                </div>
                <h3 className="font-bold text-gray-900 text-lg mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Internal Links */}
      <section className="bg-blue-50 border-y border-blue-100 py-10 px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-xl font-bold text-gray-900 mb-5">Related Services</h2>
          <div className="flex flex-wrap gap-3">
            <Link
              href="/residential/hvac-installation-tampa-fl"
              className="inline-flex items-center gap-1.5 px-5 py-2.5 bg-white border border-blue-200 text-blue-700 font-semibold text-sm rounded-lg hover:bg-red-700 hover:text-white hover:border-blue-700 transition-colors shadow-sm"
            >
              HVAC Installation &amp; Replacement →
            </Link>
            <Link
              href="/residential/air-duct-repair-tampa"
              className="inline-flex items-center gap-1.5 px-5 py-2.5 bg-white border border-blue-200 text-blue-700 font-semibold text-sm rounded-lg hover:bg-red-700 hover:text-white hover:border-blue-700 transition-colors shadow-sm"
            >
              Air Duct Repair &amp; Replacement →
            </Link>
            <Link
              href="/service-areas"
              className="inline-flex items-center gap-1.5 px-5 py-2.5 bg-white border border-blue-200 text-blue-700 font-semibold text-sm rounded-lg hover:bg-red-700 hover:text-white hover:border-blue-700 transition-colors shadow-sm"
            >
              View All Service Areas →
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-white py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-3 text-center">
            Frequently Asked Questions — HVAC Repair in Tampa
          </h2>
          <p className="text-gray-600 text-center mb-10">
            Have questions about your HVAC repair? Here are answers to the questions Tampa Bay homeowners ask
            most often.
          </p>
          <div className="space-y-4">
            {faqs.map((faq) => (
              <div key={faq.q} className="border border-gray-200 rounded-xl p-6">
                <h3 className="font-bold text-gray-900 text-lg mb-2">{faq.q}</h3>
                <p className="text-gray-600 leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section id="contact-form" className="bg-[#0f1620] py-16 px-4 text-white">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-3xl font-bold mb-4">Schedule Your HVAC Repair Today</h2>
              <p className="text-blue-100 text-lg mb-6 leading-relaxed">
                Don&rsquo;t let a broken HVAC system make your Tampa Bay home unbearable. Our technicians are
                standing by for same-day and emergency service. Call now or fill out the form and
                we&rsquo;ll get back to you within the hour during business hours.
              </p>
              <div className="space-y-4">
                <a
                  href="tel:8132916146"
                  className="flex items-center gap-3 text-white text-xl font-bold hover:text-blue-200 transition-colors"
                >
                  <span className="bg-red-600 rounded-full w-11 h-11 flex items-center justify-center shrink-0">
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
                  </span>
                  (813) 291-6146
                </a>
                <a
                  href="mailto:office@northeastheatingcooling.com"
                  className="flex items-center gap-3 text-blue-200 hover:text-white transition-colors"
                >
                  <span className="bg-red-600 rounded-full w-11 h-11 flex items-center justify-center shrink-0">
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
                      <rect x="2" y="4" width="20" height="16" rx="2" />
                      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                    </svg>
                  </span>
                  office@northeastheatingcooling.com
                </a>
                <div className="pt-2 text-blue-200 text-sm">
                  <p className="font-semibold text-white mb-1">Hours of Operation</p>
                  <p>Mon–Fri: 8:00 AM – 6:00 PM</p>
                  <p>Saturday: 8:00 AM – 2:00 PM</p>
                  <p>24/7 Emergency Line Available</p>
                </div>
              </div>
            </div>
            <form
              className="bg-white rounded-2xl p-7 text-gray-900 shadow-xl"
              action="/api/contact"
              method="POST"
            >
              <h3 className="text-xl font-bold text-gray-800 mb-5">Request HVAC Repair Service</h3>
              <div className="space-y-4">
                <div>
                  <label htmlFor="repair-name" className="block text-sm font-semibold text-gray-700 mb-1">
                    Your Name
                  </label>
                  <input
                    id="repair-name"
                    type="text"
                    name="name"
                    placeholder="John Smith"
                    className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                  />
                </div>
                <div>
                  <label htmlFor="repair-phone" className="block text-sm font-semibold text-gray-700 mb-1">
                    Phone Number
                  </label>
                  <input
                    id="repair-phone"
                    type="tel"
                    name="phone"
                    placeholder="(813) 555-1234"
                    className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                  />
                </div>
                <div>
                  <label htmlFor="repair-email" className="block text-sm font-semibold text-gray-700 mb-1">
                    Email Address
                  </label>
                  <input
                    id="repair-email"
                    type="email"
                    name="email"
                    placeholder="john@example.com"
                    className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                  />
                </div>
                <div>
                  <label htmlFor="repair-message" className="block text-sm font-semibold text-gray-700 mb-1">
                    Describe Your Issue
                  </label>
                  <textarea
                    id="repair-message"
                    name="message"
                    placeholder="Describe your HVAC problem — when it started, what you&apos;ve noticed, system age, etc."
                    rows={4}
                    className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100 resize-none"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-red-700 hover:bg-[#0f1620] active:bg-[#0f1620] text-white font-bold py-3.5 rounded-lg transition-colors text-base"
                >
                  Submit Repair Request
                </button>
                <p className="text-xs text-gray-500 text-center">
                  We respond within 1 hour during business hours. For emergencies, call{' '}
                  <a href="tel:8132916146" className="text-blue-600 font-semibold">
                    (813) 291-6146
                  </a>{' '}
                  directly.
                </p>
              </div>
            </form>
          </div>
        </div>
      </section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            mainEntity: [
              {
                '@type': 'Question',
                name: 'How quickly can you respond to an AC repair call in Tampa?',
                acceptedAnswer: { '@type': 'Answer', text: 'For standard service calls, we typically offer same-day or next-day appointments for Tampa and the surrounding Tampa Bay area. For emergency breakdowns, we dispatch a technician as quickly as possible — often within 1–2 hours depending on your location and current service volume. We keep our vans stocked with common repair parts to resolve most issues on the first visit.' },
              },
              {
                '@type': 'Question',
                name: 'How much does HVAC repair in Tampa typically cost?',
                acceptedAnswer: { '@type': 'Answer', text: 'HVAC repair costs vary widely depending on the issue. Minor repairs like capacitor replacements may run $150–$300, while larger repairs such as compressor replacement can cost $800–$1,500 or more. We always provide a written, upfront estimate before beginning any repair work, so there are never surprise charges.' },
              },
              {
                '@type': 'Question',
                name: 'My AC is blowing warm air — what could be wrong?',
                acceptedAnswer: { '@type': 'Answer', text: 'Several issues can cause an AC to blow warm air: low refrigerant (often from a leak), a dirty air filter restricting airflow, a failing compressor, a frozen evaporator coil, or a thermostat set incorrectly. While some issues — like replacing a filter — are DIY-friendly, refrigerant work requires a licensed technician.' },
              },
              {
                '@type': 'Question',
                name: 'Should I repair or replace my aging HVAC system?',
                acceptedAnswer: { '@type': 'Answer', text: 'A good rule of thumb is the 5,000 rule: multiply the repair cost by the system\'s age. If the result exceeds $5,000, replacement is usually more cost-effective. Systems over 10–12 years old with recurring problems often make more financial sense to replace with a high-efficiency unit.' },
              },
              {
                '@type': 'Question',
                name: 'What HVAC brands do you service in Tampa?',
                acceptedAnswer: { '@type': 'Answer', text: 'Our technicians are trained to service and repair all major HVAC brands including Carrier, Trane, Lennox, Rheem, Goodman, York, American Standard, Bryant, Daikin, and Mitsubishi.' },
              },
            ],
          }),
        }}
      />
    </main>
  )
}
