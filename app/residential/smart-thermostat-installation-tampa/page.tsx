import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Smart Thermostat Installation Tampa, FL | Nest, Ecobee & Honeywell | North East Heating And Cooling',
  description:
    'Smart thermostat installation in Tampa, FL. Nest, Ecobee, Honeywell, and standard thermostats professionally installed. Save 10-15% on cooling bills. Call (813) 291-6146.',
  keywords: [
    'smart thermostat installation tampa',
    'nest thermostat installation tampa',
    'ecobee installation tampa',
    'honeywell thermostat installation tampa',
    'thermostat installation tampa',
    'thermostat replacement tampa',
    'wifi thermostat tampa',
    'programmable thermostat tampa',
    'smart home hvac tampa',
    'thermostat upgrade tampa fl',
  ],
  alternates: { canonical: '/residential/smart-thermostat-installation-tampa' },
  openGraph: {
    title: 'Smart Thermostat Installation Tampa, FL | Nest, Ecobee & Honeywell',
    description:
      'Smart thermostat installation in Tampa, FL. Nest, Ecobee, Honeywell, and standard thermostats professionally installed. Save 10-15% on cooling bills.',
    url: '/residential/smart-thermostat-installation-tampa',
    siteName: 'North East Heating And Cooling',
    locale: 'en_US',
    type: 'website',
  },
}

const schemaData = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Smart Thermostat Installation',
  serviceType: 'Smart Thermostat Installation',
  description:
    'Professional smart thermostat installation in Tampa, FL. Nest, Ecobee, Honeywell, and standard programmable thermostats. Includes wiring, calibration, and Wi-Fi setup.',
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
    name: 'Thermostat Installation Services',
    itemListElement: [
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Nest Thermostat Installation' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Ecobee Thermostat Installation' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Honeywell Smart Thermostat Installation' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Standard Programmable Thermostat Installation' } },
    ],
  },
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://northeastheatingcooling.com' },
    { '@type': 'ListItem', position: 2, name: 'Residential Services', item: 'https://northeastheatingcooling.com/residential' },
    { '@type': 'ListItem', position: 3, name: 'Smart Thermostat Installation Tampa' },
  ],
}

const benefits = [
  {
    icon: '💰',
    title: '10-15% Lower Cooling Bills',
    desc: "ENERGY STAR estimates smart thermostats save the average household $50-$150/year. In Tampa Bay's cooling-heavy climate, savings tend to land at the higher end.",
  },
  {
    icon: '📱',
    title: 'Remote Control From Anywhere',
    desc: "Coming home early? Cool the house from your phone before you arrive. Going on vacation? Set it from the airport. Real convenience that works.",
  },
  {
    icon: '🤖',
    title: 'Learning Schedules',
    desc: "Nest learns your routine and adjusts automatically. Ecobee uses room sensors to balance temperature where you actually are. Set-it-and-forget-it cooling.",
  },
  {
    icon: '🌡️',
    title: 'Better Humidity Control',
    desc: "Smart thermostats with humidity sensors run AC longer at lower fan speeds when humidity is high — exactly what Tampa Bay homes need for comfort.",
  },
  {
    icon: '🚨',
    title: 'System Alerts',
    desc: "Get notified when filters need changing, when indoor temp drifts unexpectedly, or when something's wrong before it becomes a $1,000 repair.",
  },
  {
    icon: '🏠',
    title: 'Home Automation Integration',
    desc: "Works with Alexa, Google Home, Apple HomeKit. Pairs with smart sensors, geofencing, and other home automation for full smart-home setups.",
  },
]

const services = [
  {
    title: 'Nest Thermostat Installation',
    description:
      "Google Nest thermostats — including the Nest Learning Thermostat and Nest Thermostat (basic) — are the most popular smart thermostats in Tampa Bay. The Learning Thermostat builds a schedule from your behavior over the first 1-2 weeks, then runs your system efficiently without manual programming. Installation includes verifying C-wire compatibility (most Florida systems have one), proper mounting, system configuration, and Wi-Fi setup with the Nest app.",
    bullets: [
      'Nest Learning Thermostat (3rd gen, 4th gen)',
      'Nest Thermostat (entry model)',
      'C-wire verification and addition if needed',
      'Wi-Fi setup and app configuration',
      'Schedule programming guidance',
      'Compatible with most central AC and heat pump systems',
    ],
  },
  {
    title: 'Ecobee Thermostat Installation',
    description:
      "Ecobee SmartThermostat with voice control includes built-in Alexa and ships with a remote SmartSensor. The room sensors are Ecobee's killer feature — they let the thermostat balance temperature based on the room you're actually in, not just where the wall thermostat is. Particularly useful in larger Tampa homes where the master bedroom or bonus room runs warmer than the rest of the house.",
    bullets: [
      'Ecobee SmartThermostat Premium / Enhanced',
      'Room sensor placement and configuration',
      'Built-in Alexa setup',
      'C-wire verification and addition if needed',
      'HomeKit, Google Home, and SmartThings integration',
      'Two-stage and variable-speed compatibility',
    ],
  },
  {
    title: 'Honeywell Smart Thermostat Installation',
    description:
      "Honeywell Home thermostats — including the T9, T10, and Pro Series — are reliable, well-built workhorses with strong app integration. The T9 with smart room sensors is a strong alternative to Ecobee. Honeywell's Pro Series (used by HVAC contractors) offers some features residential models lack, like full multi-stage support and dehumidification controls. Good fit for homeowners who want smart features without subscription dependencies.",
    bullets: [
      'T9, T10 with room sensors',
      'Pro Series for advanced systems',
      'Multi-stage AC and heat pump support',
      'Dehumidification control (key for Tampa)',
      'Wi-Fi setup and Honeywell Home app',
      'Geofencing automation',
    ],
  },
  {
    title: 'Standard Programmable Thermostat Installation',
    description:
      "Not everyone wants Wi-Fi or a learning algorithm. Standard programmable thermostats are reliable, cheaper, and don't depend on internet connectivity. We install Honeywell, White-Rodgers, Emerson, and other standard programmable models — perfect for rental properties, vacation homes, or homeowners who want simple, reliable temperature control.",
    bullets: [
      '7-day, 5-1-1, and 5-2 day programming',
      'No Wi-Fi or app required',
      'Lower cost than smart thermostats',
      'Simple, durable operation',
      'Heat pump and conventional system models',
    ],
  },
  {
    title: 'Thermostat Wiring & C-Wire Installation',
    description:
      "Most Tampa Bay homes built after 2000 already have a C-wire (common wire) at the thermostat — required for smart thermostats to function properly. Older homes often need a C-wire added. We can run a C-wire from the air handler to the thermostat, or install a C-wire adapter (Venstar Add-A-Wire or similar) where running a new wire isn't practical. We don't push smart thermostats on systems where the wiring won't support them reliably.",
    bullets: [
      'C-wire verification and installation',
      'Add-A-Wire adapter installation',
      'Thermostat wire replacement (when corroded)',
      'Heat pump O/B reversing valve configuration',
      'Multi-stage and dehumidification wiring',
      'Compatibility check before recommending equipment',
    ],
  },
]

const faqs = [
  {
    q: 'How much does smart thermostat installation cost in Tampa?',
    a: "Installation alone runs $150-$250 depending on whether C-wire work is needed. The thermostat itself ranges from $130 (Nest Thermostat) to $280 (Ecobee Premium, Nest Learning 4th gen). Total fully-installed cost: $280-$530 depending on model. C-wire installation when needed adds $75-$150. We provide written quotes before any work begins — no surprises.",
  },
  {
    q: 'Will a smart thermostat actually save me money in Florida?',
    a: "Yes, but expectations matter. ENERGY STAR studies show 8-15% savings on heating and cooling for homes that previously used a manual thermostat with no schedule. Tampa Bay homes that already use a programmable thermostat with reasonable settings see smaller gains — usually 5-10%. The biggest savings come from features like geofencing (automatic away modes when you leave) and humidity-aware cooling. For most Tampa homes, smart thermostats pay back within 2-3 years on the energy savings alone.",
  },
  {
    q: 'What\'s a C-wire and do I need one?',
    a: "The C-wire (common wire) provides continuous 24V power to the thermostat — required for smart thermostats since they need power to run their displays, Wi-Fi radios, and processors. Most Tampa Bay homes built since 2000 already have one. Older homes may not. If yours doesn't, we can run a new wire from the air handler to the thermostat (best solution) or install a C-wire adapter. We always check before recommending a smart thermostat — installing one without proper power leads to chronic Wi-Fi disconnects and flaky operation.",
  },
  {
    q: 'Which smart thermostat is best for a Tampa home?',
    a: "Depends on what you value. **Nest Learning Thermostat** — best for set-and-forget homeowners. Builds a schedule automatically, integrates with Google Home. **Ecobee SmartThermostat Premium** — best for larger homes with hot/cold rooms. Room sensors are genuinely useful. Built-in Alexa. **Honeywell T9** — best balance of features and reliability. Strong dehumidification control (matters in Tampa). For most Tampa homeowners, we recommend Ecobee or Honeywell T9 — the room sensor feature is genuinely valuable in Florida's variable cooling demands.",
  },
  {
    q: 'Will a smart thermostat work with my existing AC?',
    a: "Almost always yes. Smart thermostats are compatible with the vast majority of central AC, heat pump, and gas furnace systems. They typically don't work with very old systems (pre-1995, mercury switch thermostats), some boiler/radiator systems, and a few proprietary brand systems with specialized controls. We verify compatibility during the quote — if your system isn't a fit, we'll tell you upfront.",
  },
  {
    q: 'How long does installation take?',
    a: "Most thermostat installations are completed in 30-60 minutes. C-wire installation adds 30-90 minutes depending on attic access. Wi-Fi setup, app pairing, and walking you through the basics adds another 15-30 minutes. Plan on 1-2 hours total for a typical smart thermostat install with a quick walkthrough. Standard programmable thermostats install faster — usually under 30 minutes.",
  },
  {
    q: 'Do I need professional installation for a smart thermostat?',
    a: "For a basic Nest install on a system with an existing C-wire, no — most homeowners can DIY with the included instructions. But Tampa Bay homes often have complications: missing C-wire, old wiring, heat pump O/B configuration that's easy to set wrong, dehumidification controls that need proper setup. Professional install runs $150-$250, includes a one-year workmanship warranty, and ensures the system is configured correctly for Florida's specific cooling/dehumidification needs. For most homeowners, the peace of mind is worth it.",
  },
]

export default function SmartThermostatInstallationTampaPage() {
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
            src="https://images.pexels.com/photos/8473911/pexels-photo-8473911.jpeg?auto=compress&cs=tinysrgb&w=1600"
            alt="Smart thermostat installation in Tampa Bay home"
            className="w-full h-full object-cover object-center opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0f1620]/80 via-[#0f1620]/60 to-[#0f1620]/40" />
        </div>
        <div className="relative z-10 max-w-5xl mx-auto">
          <p className="text-orange-300 font-semibold text-sm uppercase tracking-widest mb-3">
            Tampa Bay, FL — Smart Home HVAC Specialists
          </p>
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-5">
            Smart Thermostat Installation in Tampa, FL
          </h1>
          <p className="text-blue-100 text-lg md:text-xl max-w-3xl mb-8 leading-relaxed">
            Professional installation of Nest, Ecobee, Honeywell, and standard thermostats. C-wire work
            included if needed. Properly configured for Tampa Bay&apos;s humidity-heavy cooling demands.
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
          <span>✓ Nest, Ecobee, Honeywell</span>
          <span>✓ C-Wire Work Included</span>
          <span>✓ App Setup &amp; Walkthrough</span>
          <span>✓ 1-Hour Typical Install</span>
          <span>✓ 1-Year Workmanship Warranty</span>
        </div>
      </section>

      {/* Why upgrade */}
      <section className="bg-white py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-5">
            Why Tampa Bay Homeowners Upgrade Their Thermostats
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
            <div className="space-y-4 text-gray-600 text-lg leading-relaxed">
              <p>
                Tampa Bay homes run their AC 8-10 months a year. That&apos;s a lot of cooling cycles —
                and a lot of opportunity for a smart thermostat to save real money. ENERGY STAR pegs
                average smart thermostat savings at 8-15% on cooling and heating, but Florida homes
                with high cooling demand tend to land at the upper end of that range.
              </p>
              <p>
                The other reason homeowners upgrade is humidity control. Tampa Bay&apos;s real cooling
                challenge isn&apos;t just temperature — it&apos;s the humidity. Smart thermostats with
                humidity sensors run the AC longer at lower fan speeds when humidity is elevated,
                which is exactly what Florida homes need. Standard mercury or basic programmable
                thermostats can&apos;t do this.
              </p>
              <p>
                We install all major smart thermostat brands and standard programmable thermostats.
                Most installs take an hour. Most are done same-day. Most pay for themselves in 2-3
                years on the energy savings alone — sooner if you take advantage of utility company
                rebates (TECO and Duke Energy occasionally offer them).
              </p>
            </div>
            <div className="bg-orange-50 rounded-2xl p-7 border border-orange-100">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Quick Brand Comparison</h3>
              <div className="space-y-3 text-sm">
                <div className="bg-white rounded-lg p-4 border border-gray-100">
                  <p className="font-bold text-gray-900 mb-1">Nest Learning</p>
                  <p className="text-gray-600">Set-and-forget. Learns your schedule. Best for simple setups.</p>
                </div>
                <div className="bg-white rounded-lg p-4 border border-gray-100">
                  <p className="font-bold text-gray-900 mb-1">Ecobee SmartThermostat</p>
                  <p className="text-gray-600">Room sensors fix hot/cold spots. Best for larger Tampa homes.</p>
                </div>
                <div className="bg-white rounded-lg p-4 border border-gray-100">
                  <p className="font-bold text-gray-900 mb-1">Honeywell T9</p>
                  <p className="text-gray-600">Strong humidity control. Best for variable-speed systems.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="bg-gray-50 py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-3">Smart Thermostat Benefits</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {benefits.map((b) => (
              <div key={b.title} className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
                <div className="text-3xl mb-3">{b.icon}</div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{b.title}</h3>
                <p className="text-gray-600 leading-relaxed text-sm">{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="bg-white py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-3">Thermostats We Install</h2>
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
            <h2 className="text-2xl font-bold text-gray-900 mb-1">Ready to Upgrade Your Thermostat?</h2>
            <p className="text-gray-600">
              Most installations completed in under an hour. C-wire work included if needed.
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
