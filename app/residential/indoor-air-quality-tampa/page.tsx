import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Indoor Air Quality Services Tampa, FL | Air Purification & UV Lights',
  description:
    'Indoor air quality services in Tampa, FL. Air purification systems, UV light air sanitizers, HEPA filtration, whole-home dehumidifiers. Florida humidity solutions. Call (813) 291-6146.',
  keywords: [
    'indoor air quality tampa',
    'air purification tampa',
    'uv light hvac tampa',
    'uv air sanitizer tampa',
    'hepa filtration tampa',
    'whole home dehumidifier tampa',
    'whole house air purifier tampa',
    'air quality services tampa fl',
    'tampa humidity control',
    'mold prevention hvac tampa',
  ],
  alternates: { canonical: '/residential/indoor-air-quality-tampa' },
  openGraph: {
    title: 'Indoor Air Quality Services Tampa, FL | Air Purification & UV Lights',
    description:
      'Indoor air quality services in Tampa, FL. Air purification systems, UV light air sanitizers, HEPA filtration, whole-home dehumidifiers.',
    url: '/residential/indoor-air-quality-tampa',
    siteName: 'North East Heating And Cooling',
    locale: 'en_US',
    type: 'website',
  },
}

const schemaData = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Indoor Air Quality Services',
  serviceType: 'Indoor Air Quality',
  description:
    'Whole-home indoor air quality services in Tampa, FL — air purification systems, UV germicidal lights, HEPA filtration, whole-home dehumidifiers, and humidity control for Florida\'s climate.',
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
    name: 'Indoor Air Quality Services',
    itemListElement: [
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Whole-Home Air Purification System Installation' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'UV Germicidal Light Installation' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'HEPA Filtration System Installation' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Whole-Home Dehumidifier Installation' } },
    ],
  },
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://northeastheatingcooling.com' },
    { '@type': 'ListItem', position: 2, name: 'Residential Services', item: 'https://northeastheatingcooling.com/residential' },
    { '@type': 'ListItem', position: 3, name: 'Indoor Air Quality Tampa' },
  ],
}

const issues = [
  {
    icon: '💧',
    title: 'High Humidity (Tampa\'s #1 Issue)',
    desc: "Tampa Bay summers run 70-90% outdoor humidity. Without proper indoor humidity control, mold, dust mites, and that musty smell take over. Target indoor: 45-55%.",
  },
  {
    icon: '🦠',
    title: 'Mold and Mildew',
    desc: "High humidity plus dark HVAC interiors equals mold. Florida homes are especially prone to mold growth in evaporator coils, drain pans, and ductwork.",
  },
  {
    icon: '🌳',
    title: 'Pollen and Outdoor Allergens',
    desc: "Tampa's pollen season runs almost year-round. Live oaks, pine, ragweed, and grass pollens drift indoors and circulate through your AC.",
  },
  {
    icon: '🐾',
    title: 'Pet Dander and Hair',
    desc: "Pets shed continuously in air-conditioned homes. Standard 1-inch filters miss most dander particles, which then recirculate and accumulate.",
  },
  {
    icon: '🏠',
    title: 'Dust and Particulates',
    desc: "Coastal salt air plus Florida sand creates abrasive dust that builds up faster than inland homes. Standard filters can't keep up.",
  },
  {
    icon: '🚪',
    title: 'Volatile Organic Compounds',
    desc: "Cleaning products, paint, new furniture, and carpets release VOCs. In tightly-sealed Florida homes, these accumulate indoors.",
  },
]

const services = [
  {
    title: 'Whole-Home Air Purification Systems',
    description:
      "Whole-home air purifiers integrate with your existing HVAC system to clean every cubic foot of air that circulates through your home. Unlike portable purifiers that only treat the room they're in, a whole-home system processes air throughout the entire house, every cycle of your AC. We install media filtration, electronic air cleaners, and active purification systems depending on your home's needs and budget.",
    bullets: [
      'Whole-home coverage (every room)',
      'Removes 99%+ of airborne particles down to 0.3 microns',
      'Eliminates pet dander, pollen, dust, smoke',
      'Integrates with existing HVAC system',
      'Aprilaire, Honeywell, Carrier, Lennox PureAir',
      'Reduces allergy and asthma symptoms',
    ],
  },
  {
    title: 'UV Light Installation (Germicidal Air Sanitizers)',
    description:
      "UV-C germicidal lights install inside your air handler, where they continuously sanitize air and surfaces as it passes through. Tampa Bay's humidity makes HVAC systems prone to mold and bacterial growth on the evaporator coil — UV lights kill these organisms before they multiply. UV is especially valuable in Florida homes where coil mold is a chronic problem. Bulb replacement every 12-24 months keeps the system effective.",
    bullets: [
      'Kills mold, bacteria, and viruses on evaporator coil',
      'Reduces musty AC smells from coil mold',
      'Improves HVAC efficiency (clean coils transfer heat better)',
      '24-month bulb life (longer than older single-bulb systems)',
      'Two installation options: coil sterilization or air sterilization',
      'Significantly reduces airborne pathogens',
    ],
  },
  {
    title: 'UV Air Sanitizers (PCO and REME-HALO)',
    description:
      "Beyond simple UV-C bulbs, advanced UV air sanitizers use Photocatalytic Oxidation (PCO) and similar technologies to actively reduce airborne pathogens, odors, and VOCs throughout your home — not just at the coil. REME-HALO systems are particularly popular in Tampa Bay because they're effective against the specific challenges of humid Florida air. They install in the supply ductwork and treat air actively as it circulates.",
    bullets: [
      'Active treatment of airborne pathogens',
      'Reduces odors (cooking, pets, smoke)',
      'Reduces VOCs from cleaning products and furniture',
      'Effective against mold spores in air',
      'REME-HALO, iWave-R, and similar systems',
      '5-year typical bulb life',
    ],
  },
  {
    title: 'HEPA Filtration Systems',
    description:
      "True HEPA filters capture 99.97% of particles down to 0.3 microns — including most viruses, bacteria, and the finest pollens. Standard 1-inch HVAC filters cap out around MERV 11. We install whole-home HEPA bypass systems that filter a portion of your home's air through true HEPA media on every AC cycle. Best fit for homes with severe allergies, asthma, or specific medical needs. Standard residential blowers can't handle full HEPA inline, so bypass installation is the right approach.",
    bullets: [
      'True HEPA filtration (99.97% at 0.3 microns)',
      'Bypass installation (preserves HVAC airflow)',
      'Captures viruses, bacteria, fine particles',
      'Best for severe allergies or asthma',
      'IQAir, Aprilaire, and similar systems',
      'Annual filter replacement',
    ],
  },
  {
    title: 'Whole-Home Dehumidifiers',
    description:
      "This might be the most important indoor air quality upgrade for Tampa Bay homes. Your AC removes some humidity, but it's optimized for cooling — not dehumidification. During shoulder seasons (spring, fall) when AC runs less, indoor humidity climbs into the 60-70% range, fueling mold and dust mite growth. A whole-home dehumidifier maintains 45-55% humidity year-round, independent of cooling demand. Installs alongside your air handler.",
    bullets: [
      'Maintains 45-55% indoor humidity year-round',
      'Operates independently of cooling cycle',
      '70-130 pints/day capacity for typical homes',
      'Dramatically reduces mold/mildew risk',
      'Improves AC efficiency (cooling drier air uses less energy)',
      'Aprilaire, Honeywell TrueDRY, Santa Fe',
    ],
  },
  {
    title: 'Coil Cleaning & Drain Pan Treatment',
    description:
      "Even with UV and good filtration, evaporator coils accumulate biofilm in Tampa Bay's humidity. We perform deep coil cleaning with EPA-registered cleaners that remove existing buildup, plus drain pan treatment to prevent algae growth in condensate lines (a common Tampa cause of clogged drain lines and water leaks). This is foundational for indoor air quality — a moldy coil contaminates everything else you do.",
    bullets: [
      'Deep evaporator coil cleaning',
      'Condenser coil cleaning',
      'Drain pan biofilm removal',
      'Condensate line algaecide treatment',
      'Recommended at least annually in Florida',
      'Included in maintenance plan visits',
    ],
  },
]

const faqs = [
  {
    q: 'What\'s the most important indoor air quality upgrade for a Tampa home?',
    a: "Humidity control. Tampa Bay's outdoor humidity routinely runs 70-90% from May through October, and indoor humidity above 60% creates conditions for mold growth, dust mite proliferation, and that distinctive musty smell. A whole-home dehumidifier maintains 45-55% indoor humidity year-round and addresses the root cause that makes most other IAQ issues worse. After that, UV lights at the coil and a quality media filter cover the next layer.",
  },
  {
    q: 'Do UV lights in HVAC systems actually work?',
    a: "Yes — for the specific job they're designed to do. UV-C lights installed at the evaporator coil prevent mold and bacterial growth on the coil itself, which is significant in Tampa Bay where coil mold is a chronic problem. They're highly effective at this. They're less effective at killing pathogens floating through the air at typical residential airflow speeds — UV needs contact time. For airborne pathogens, advanced systems like REME-HALO that actively treat air work better than passive UV-C.",
  },
  {
    q: 'How much does indoor air quality equipment cost?',
    a: "It depends on what you install — UV light systems, media filter cabinets, advanced purifiers, and whole-home dehumidifiers are all priced differently. We'll assess your system, recommend the right fit, and quote the exact installed price upfront before any work begins.",
  },
  {
    q: 'Can indoor air quality really help allergies and asthma?',
    a: "For most people with mild to moderate allergies, yes — measurably. Studies have shown that whole-home filtration combined with humidity control reduces airborne allergen exposure substantially. Severe allergy and asthma sufferers often benefit even more from HEPA-bypass systems. We always recommend talking with your physician about specific medical needs — but most Tampa Bay homeowners with allergies see clear improvement with the basic upgrades (humidity control + good media filter + UV at the coil).",
  },
  {
    q: 'What\'s the difference between a whole-home dehumidifier and my AC\'s dehumidification?',
    a: "Your AC removes humidity as a side effect of cooling — when warm air passes over a cold coil, water condenses out. That works fine when AC runs frequently in summer. But during spring, fall, and mild days, AC barely runs, indoor humidity climbs into the 60-70% range, and mold conditions kick in. A whole-home dehumidifier runs independently of cooling demand and pulls 70-130 pints of water per day specifically to maintain target humidity. It's a separate piece of equipment, not just an AC mode.",
  },
  {
    q: 'How often should HVAC filters be replaced?',
    a: "For standard 1-inch filters in Tampa Bay homes: every 30-60 days during heavy use months (June-October), every 60-90 days otherwise. Pets shorten that interval. For thicker 4-5 inch media filters: every 6-12 months depending on MERV rating and environment. We include filter replacement in our maintenance plan visits, but homeowners should still check filters monthly — a clogged filter is the single most common cause of Florida AC failures.",
  },
  {
    q: 'Are there indoor air quality tax credits or rebates available?',
    a: "Some indoor air quality equipment qualifies for federal tax credits when installed alongside qualifying high-efficiency HVAC systems. Whole-home dehumidifiers paired with new heat pumps can sometimes be included. We're not tax advisors, but we'll provide AHRI ratings and equipment documentation that your tax preparer needs. Always confirm credit eligibility with your tax professional before assuming a credit will apply.",
  },
  {
    q: 'Will indoor air quality equipment work with my existing HVAC system?',
    a: "Almost always yes. Most IAQ equipment is designed to retrofit onto any existing residential HVAC system. UV lights install in any air handler. Media filter cabinets replace the standard filter rack with minimal modification. Whole-home dehumidifiers tie into existing return ductwork. The exception is true HEPA inline systems, which need bypass installation because residential blowers can't push air through true HEPA media at full flow. We'll assess your specific system during the consultation.",
  },
]

export default function IndoorAirQualityTampaPage() {
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
            src="https://images.pexels.com/photos/4239031/pexels-photo-4239031.jpeg?auto=compress&cs=tinysrgb&w=1600"
            alt="Indoor air quality system installed in Tampa Bay home HVAC"
            className="w-full h-full object-cover object-center opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0f1620]/80 via-[#0f1620]/60 to-[#0f1620]/40" />
        </div>
        <div className="relative z-10 max-w-5xl mx-auto">
          <p className="text-[0.72rem] font-bold tracking-[0.18em] uppercase mb-4 text-[#F0A06A]">
            Tampa Bay, FL — Indoor Air Quality Specialists
          </p>
          <h1 className="font-display text-4xl md:text-5xl font-extrabold leading-[1.05] mb-5 tracking-[-0.03em]">
            Indoor Air Quality Services in Tampa, FL
          </h1>
          <p className="text-slate-300 text-lg md:text-xl max-w-3xl mb-8 leading-relaxed">
            Tampa Bay&apos;s humidity, pollen, and salt air make indoor air quality a real problem.
            Whole-home air purification, UV sanitizers, HEPA filtration, and humidity control built
            for Florida homes.
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
          <span>✓ Whole-Home Solutions</span>
          <span>✓ Florida Climate Specialists</span>
          <span>✓ Aprilaire / REME / Honeywell</span>
          <span>✓ Allergy &amp; Asthma Focused</span>
          <span>✓ Humidity Control Experts</span>
        </div>
      </section>

      {/* Why IAQ matters here */}
      <section className="bg-white py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="font-display tracking-[-0.03em] text-4xl sm:text-5xl font-extrabold text-slate-900 mb-5 leading-[1.02]">
            Why Indoor Air Quality Matters More in Tampa Bay
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
            <div className="space-y-4 text-gray-600 text-lg leading-relaxed">
              <p>
                Florida homes deal with indoor air challenges that homes in drier climates simply
                don&apos;t face. Outdoor humidity above 70% for months at a time. A nearly year-round
                pollen season. Salt air from the Gulf. Coastal sand dust. Hurricane-driven mold
                outbreaks. And tightly-sealed homes that trap everything indoors.
              </p>
              <p>
                The result: indoor air in Tampa Bay homes is often <strong>2-5 times more polluted
                than outdoor air</strong> — particulates, allergens, mold spores, and VOCs all
                concentrate inside. For families with allergies, asthma, or anyone sensitive to mold,
                this isn&apos;t a quality-of-life issue, it&apos;s a health issue.
              </p>
              <p>
                We approach indoor air quality as a system, not individual products. Humidity control
                first. Then filtration appropriate to your specific needs. Then sanitization where it
                helps. We&apos;ll give you an honest assessment of what your home actually needs —
                not a one-size-fits-all upsell.
              </p>
            </div>
            <div className="bg-orange-50 rounded-2xl p-7 border border-orange-100">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Tampa Bay IAQ Priorities (In Order)</h3>
              <div className="space-y-3 text-sm">
                <div className="bg-white rounded-lg p-4 border border-gray-100">
                  <p className="font-bold text-gray-900 mb-1">1. Humidity Control</p>
                  <p className="text-gray-600">Target 45-55%. Solves root cause of mold, dust mites, and musty smells.</p>
                </div>
                <div className="bg-white rounded-lg p-4 border border-gray-100">
                  <p className="font-bold text-gray-900 mb-1">2. Coil Sanitization (UV)</p>
                  <p className="text-gray-600">Stops mold growth at the source — your HVAC evaporator coil.</p>
                </div>
                <div className="bg-white rounded-lg p-4 border border-gray-100">
                  <p className="font-bold text-gray-900 mb-1">3. Filtration Upgrade</p>
                  <p className="text-gray-600">MERV 13+ media filter or HEPA bypass for allergies/asthma.</p>
                </div>
                <div className="bg-white rounded-lg p-4 border border-gray-100">
                  <p className="font-bold text-gray-900 mb-1">4. Active Air Treatment</p>
                  <p className="text-gray-600">REME-HALO or similar for ongoing pathogen and odor reduction.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Issues we solve */}
      <section className="bg-gray-50 py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-display tracking-[-0.03em] text-4xl sm:text-5xl font-extrabold text-slate-900 mb-3 leading-[1.02]">Indoor Air Issues We Solve</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {issues.map((s) => (
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
            <h2 className="font-display tracking-[-0.03em] text-4xl sm:text-5xl font-extrabold text-slate-900 mb-3 leading-[1.02]">Our Indoor Air Quality Services</h2>
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
            <h2 className="font-display tracking-[-0.02em] text-2xl font-extrabold text-slate-900 mb-1">Ready to Improve Your Home&apos;s Air Quality?</h2>
            <p className="text-gray-600">
              Free in-home air quality assessment, written quote with options at multiple price points.{' '}
              <Link href="/blog/how-to-improve-indoor-air-quality-tampa" className="text-orange-700 font-semibold hover:underline">
                Read our IAQ guide →
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
    </main>
  )
}
