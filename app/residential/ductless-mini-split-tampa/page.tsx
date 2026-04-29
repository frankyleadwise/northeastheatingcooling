import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Ductless Mini-Split Installation Tampa, FL | North East Heating & Cooling',
  description:
    'Ductless mini-split installation, repair, and service in Tampa, FL. Perfect for additions, garages, sunrooms, or whole-home zoning. Mitsubishi, Daikin, LG. Call (813) 291-6146.',
  keywords: [
    'ductless mini split tampa',
    'ductless ac tampa',
    'mini split installation tampa',
    'ductless air conditioner tampa',
    'mini split tampa fl',
    'mitsubishi mini split tampa',
    'daikin mini split tampa',
    'multi zone mini split tampa',
    'garage ac tampa',
    'sunroom ac tampa',
  ],
  alternates: { canonical: '/residential/ductless-mini-split-tampa' },
  openGraph: {
    title: 'Ductless Mini-Split Installation Tampa, FL | North East Heating & Cooling',
    description:
      'Ductless mini-split installation, repair, and service in Tampa, FL. Perfect for additions, garages, sunrooms, or whole-home zoning.',
    url: '/residential/ductless-mini-split-tampa',
    siteName: 'North East Heating & Cooling',
    locale: 'en_US',
    type: 'website',
  },
}

const schemaData = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Ductless Mini-Split Installation',
  serviceType: 'Ductless Mini-Split Installation',
  description:
    'Professional ductless mini-split installation, repair, and service in Tampa, FL. Single-zone and multi-zone systems for additions, garages, sunrooms, and whole-home applications.',
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
    name: 'Ductless Mini-Split Services',
    itemListElement: [
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Single-Zone Mini-Split Installation' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Multi-Zone Mini-Split Installation' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Mini-Split Repair' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Mini-Split Maintenance' } },
    ],
  },
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://northeastheatingcooling.com' },
    { '@type': 'ListItem', position: 2, name: 'Residential Services', item: 'https://northeastheatingcooling.com/residential' },
    { '@type': 'ListItem', position: 3, name: 'Ductless Mini-Split Tampa' },
  ],
}

const useCases = [
  {
    icon: '🚗',
    title: 'Garage & Workshop',
    desc: "Tampa garages hit 105°F+ in summer. A single-zone mini-split makes them usable year-round — perfect for home gyms, woodworking, or just keeping cars cooler.",
  },
  {
    icon: '☀️',
    title: 'Sunroom or Florida Room',
    desc: "Sunrooms are notoriously hard to cool because of all the glass. A mini-split sized to the load handles them without overworking your main AC.",
  },
  {
    icon: '🏠',
    title: 'Home Addition',
    desc: "Adding a master suite or in-law unit? Extending your existing ductwork is often expensive and inefficient. A mini-split is faster, cheaper, and more efficient.",
  },
  {
    icon: '🏡',
    title: 'Older Tampa Homes Without Ducts',
    desc: "Pre-1970s Tampa homes often have window units or no central AC at all. A multi-zone mini-split gives you whole-home cooling without tearing into walls for ductwork.",
  },
  {
    icon: '🛏️',
    title: 'Bedroom Comfort',
    desc: "Some rooms always run hot or cold while the rest of the house is fine. A mini-split lets you control that one room independently — great for bedrooms and home offices.",
  },
  {
    icon: '🏢',
    title: 'Detached Office or ADU',
    desc: "Pool houses, detached offices, accessory dwelling units — anywhere extending the main HVAC is impractical, a mini-split is the right call.",
  },
]

const services = [
  {
    title: 'Single-Zone Mini-Split Installation',
    description:
      "One outdoor condenser, one indoor head — perfect for cooling and heating a single room, addition, or garage. Most single-zone installs are completed in one day with minimal disruption to your home. We size every system to the actual load using Manual J calculations, not rules of thumb.",
    bullets: [
      'Manual J load calculation for proper sizing',
      'Wall-mounted, floor-mounted, or ceiling cassette options',
      'Inverter-driven variable-speed compressor',
      'Heat pump operation (cooling + heating)',
      'Wireless remote and Wi-Fi control standard',
      'Lifetime workmanship warranty',
    ],
  },
  {
    title: 'Multi-Zone Mini-Split Installation',
    description:
      "One outdoor condenser, multiple indoor heads — typically 2 to 5 zones from a single unit. Ideal for whole-home cooling without ductwork, or for adding zone control to homes where the existing ductwork delivers uneven cooling. Each zone has its own thermostat.",
    bullets: [
      '2–8 indoor zones from one outdoor unit',
      'Independent thermostat in every room',
      'Single shared refrigerant line set',
      'Lower energy bills than a single oversized AC',
      'Premium brands: Mitsubishi, Daikin, LG, Fujitsu',
      'Stretches federal tax credits (qualifying systems)',
    ],
  },
  {
    title: 'Mini-Split Repair',
    description:
      "Mini-splits are reliable but they're not maintenance-free. Common issues we fix: drainage problems, indoor head sensor failures, refrigerant line leaks (often at the connection points), inverter board failures, and dirty filters causing efficiency loss. Same-day repair for most issues.",
    bullets: [
      'Refrigerant leak detection and repair',
      'Inverter board diagnostics and replacement',
      'Indoor head fan and sensor replacement',
      'Drain line clearing and pump service',
      'Outdoor unit fan motor and capacitor repair',
      'All major brands serviced',
    ],
  },
  {
    title: 'Mini-Split Maintenance',
    description:
      "Mini-splits should be cleaned and inspected at least once a year. The indoor heads accumulate dust, biofilm, and moisture in Tampa's humid climate — left unchecked, this cuts efficiency, causes musty smells, and shortens component life. We deep-clean indoor heads, clear drain lines, verify refrigerant charge, and inspect outdoor units.",
    bullets: [
      'Deep cleaning of indoor head and blower wheel',
      'Drain line flush and biofilm removal',
      'Refrigerant pressure check',
      'Outdoor coil cleaning',
      'Filter cleaning or replacement',
      'Maintenance plan members get priority service',
    ],
  },
]

const faqs = [
  {
    q: 'How much does a ductless mini-split cost in Tampa?',
    a: "Single-zone mini-split installations in Tampa Bay typically run $4,500–$7,500 fully installed, depending on system size, brand, and installation complexity. Multi-zone systems start around $7,500 for two zones and scale up to $14,000–$20,000+ for whole-home four or five zone systems. Premium brands like Mitsubishi and Daikin sit at the higher end but offer 18–25 year lifespans. We provide free written estimates with no high-pressure tactics.",
  },
  {
    q: "Will a ductless mini-split work for my whole house?",
    a: "Yes — a properly designed multi-zone mini-split can handle whole-home cooling without any ductwork. We've installed systems with 4–5 indoor heads serving entire 2,000+ square foot homes in Tampa Bay. The advantages over central AC are zone-by-zone control, no duct losses (which can be 20–30% in attic-installed ducts), and quieter operation. The trade-offs are higher upfront cost and visible indoor units in each room.",
  },
  {
    q: "Are mini-splits energy efficient compared to central AC?",
    a: "Significantly more efficient in most cases. Modern mini-splits commonly hit 20–28 SEER2, while typical central AC systems run 14–18 SEER2. They're also more efficient in real-world use because they only cool the rooms you're using — central AC cools your whole house regardless. For Tampa homes that don't fully use every room, mini-splits often cut summer cooling bills by 30–40%.",
  },
  {
    q: "How long does mini-split installation take?",
    a: "A single-zone install is usually completed in 4–6 hours — start in the morning, finished by lunch. Multi-zone installations take 1–2 days depending on the number of zones and how the line set is routed. We focus on minimal cosmetic disruption — clean line set covers, neat drain runs, and proper outdoor mounting that won't be an eyesore.",
  },
  {
    q: "Do mini-splits handle Tampa humidity well?",
    a: "Yes, generally better than central AC. Variable-speed compressors run at lower output for longer periods, which pulls more moisture out of the air than a system that just blasts on and off. That said, oversizing kills humidity control on any system — which is why we use Manual J load calculations rather than guessing at the size. A properly sized mini-split will keep indoor humidity in the 45–55% range, which is the comfort sweet spot.",
  },
  {
    q: "Are mini-splits noisy?",
    a: "Modern mini-splits are remarkably quiet. Indoor heads typically run at 19–35 decibels (whisper-quiet), and outdoor units run at 45–55 decibels (similar to a quiet refrigerator). We've installed systems where homeowners can't tell if the unit is running without looking at the remote. Older or low-end mini-splits can be louder — brand and model matter.",
  },
  {
    q: "What brands of mini-splits do you install?",
    a: "We install Mitsubishi, Daikin, LG, Fujitsu, Carrier, Senville, and Pioneer. For most Tampa Bay homeowners, Mitsubishi and Daikin offer the best balance of reliability and lifespan — they're built for hot, humid climates and the warranty support is strong. We service every brand including ones we didn't install.",
  },
]

export default function DuctlessMiniSplitTampaPage() {
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
            src="https://images.pexels.com/photos/4078319/pexels-photo-4078319.jpeg?auto=compress&cs=tinysrgb&w=1600"
            alt="Ductless mini-split installation in Tampa Bay home"
            className="w-full h-full object-cover object-center opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0f1620]/80 via-[#0f1620]/60 to-[#0f1620]/40" />
        </div>
        <div className="relative z-10 max-w-5xl mx-auto">
          <p className="text-orange-300 font-semibold text-sm uppercase tracking-widest mb-3">
            Tampa Bay, FL — Ductless Mini-Split Specialists
          </p>
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-5">
            Ductless Mini-Split Installation &amp; Repair in Tampa, FL
          </h1>
          <p className="text-blue-100 text-lg md:text-xl max-w-3xl mb-8 leading-relaxed">
            The smart choice for additions, garages, sunrooms, older homes without ducts, or any room that
            never quite gets comfortable. Single-zone or whole-home multi-zone systems from Mitsubishi, Daikin,
            and LG.
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
          <span>✓ Mitsubishi, Daikin, LG</span>
          <span>✓ Single-Day Installs</span>
        </div>
      </section>

      {/* Why mini-split */}
      <section className="bg-white py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-5">
            Why Tampa Homeowners Choose Ductless Mini-Splits
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
            <div className="space-y-4 text-gray-600 text-lg leading-relaxed">
              <p>
                A ductless mini-split is exactly what it sounds like — a heating and cooling system that
                doesn&apos;t require ductwork. An outdoor compressor connects to one or more indoor head units
                via a small refrigerant line set (about 3 inches in diameter). Each indoor head cools and heats
                the room it&apos;s mounted in, with its own remote and thermostat.
              </p>
              <p>
                The big advantage in Tampa Bay is <strong>efficiency and zone control</strong>. Florida homes
                routinely lose 20&ndash;30% of their cooling capacity through leaky attic ducts running through
                140°F attic spaces. Mini-splits skip that entirely. You also get to cool only the rooms
                you&apos;re using, which most homeowners discover is dramatically cheaper than running central
                AC for the whole house.
              </p>
              <p>
                The trade-off: indoor heads are visible (they mount on a wall, ceiling, or floor), and the
                upfront cost per ton is higher than central AC. For most Tampa applications — additions,
                garages, sunrooms, ductless homes — the benefits clearly outweigh the costs.
              </p>
            </div>
            <div className="bg-orange-50 rounded-2xl p-7 border border-orange-100">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Mini-Split vs. Central AC</h3>
              <div className="space-y-3 text-sm">
                <div className="bg-white rounded-lg p-4 border border-gray-100">
                  <p className="font-bold text-gray-900 mb-1">Pick Mini-Split When...</p>
                  <p className="text-gray-600">No existing ducts, adding a room, cooling a garage/sunroom, or want zone-by-zone control.</p>
                </div>
                <div className="bg-white rounded-lg p-4 border border-gray-100">
                  <p className="font-bold text-gray-900 mb-1">Pick Central AC When...</p>
                  <p className="text-gray-600">Existing ductwork is in good shape, you want hidden equipment, or you&apos;re replacing an existing central system.</p>
                </div>
                <div className="bg-white rounded-lg p-4 border border-gray-100">
                  <p className="font-bold text-gray-900 mb-1">Hybrid Approach</p>
                  <p className="text-gray-600">Many Tampa homeowners keep their central AC and add a mini-split for one problem room — best of both worlds.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Use cases */}
      <section className="bg-gray-50 py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-3">Where Mini-Splits Make the Most Sense</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {useCases.map((u) => (
              <div key={u.title} className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
                <div className="text-3xl mb-3">{u.icon}</div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{u.title}</h3>
                <p className="text-gray-600 leading-relaxed text-sm">{u.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="bg-white py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-3">Our Mini-Split Services</h2>
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
            <h2 className="text-2xl font-bold text-gray-900 mb-1">Ready for a Free Mini-Split Quote?</h2>
            <p className="text-gray-600">
              Free in-home assessment, Manual J load calc, and a written quote — no pressure tactics.{' '}
              <Link href="/blog/ductless-vs-central-ac" className="text-orange-700 font-semibold hover:underline">
                Read our ductless vs. central AC guide →
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
