import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Dryer Vent Cleaning Tampa, FL | Fire Prevention & Lint Removal | North East Heating & Cooling',
  description:
    'Professional dryer vent cleaning in Tampa, FL. Reduce fire risk, dry clothes faster, lower energy bills. Annual cleaning recommended for Florida homes. Call (813) 291-6146.',
  keywords: [
    'dryer vent cleaning tampa',
    'dryer vent cleaning service tampa',
    'dryer duct cleaning tampa',
    'dryer vent cleaning near me tampa',
    'dryer fire prevention tampa',
    'lint trap cleaning tampa',
    'dryer not drying tampa',
    'dryer vent inspection tampa',
    'roof dryer vent tampa',
    'dryer vent service tampa fl',
  ],
  alternates: { canonical: '/residential/dryer-vent-cleaning-tampa' },
  openGraph: {
    title: 'Dryer Vent Cleaning Tampa, FL | Fire Prevention & Lint Removal',
    description:
      'Professional dryer vent cleaning in Tampa, FL. Reduce fire risk, dry clothes faster, lower energy bills. Annual cleaning recommended for Florida homes.',
    url: '/residential/dryer-vent-cleaning-tampa',
    siteName: 'North East Heating & Cooling',
    locale: 'en_US',
    type: 'website',
  },
}

const schemaData = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Dryer Vent Cleaning',
  serviceType: 'Dryer Vent Cleaning',
  description:
    'Professional dryer vent cleaning in Tampa, FL. Removes lint buildup, reduces fire risk, restores dryer efficiency, and prevents moisture damage in Florida homes.',
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
    name: 'Dryer Vent Services',
    itemListElement: [
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Dryer Vent Cleaning' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Dryer Vent Inspection' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Roof Dryer Vent Cleaning' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Dryer Vent Repair & Replacement' } },
    ],
  },
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://northeastheatingcooling.com' },
    { '@type': 'ListItem', position: 2, name: 'Residential Services', item: 'https://northeastheatingcooling.com/residential' },
    { '@type': 'ListItem', position: 3, name: 'Dryer Vent Cleaning Tampa' },
  ],
}

const warningSigns = [
  {
    icon: '⏱️',
    title: 'Clothes Take Multiple Cycles to Dry',
    desc: "Single biggest sign of vent obstruction. If your dryer needs 60+ minutes for a normal load, restricted airflow is forcing it to work harder.",
  },
  {
    icon: '🔥',
    title: 'Dryer & Clothes Hot to Touch',
    desc: "Unusually hot dryers and laundry mean heat is trapped instead of venting outside. This is the failure mode that causes dryer fires.",
  },
  {
    icon: '👃',
    title: 'Burning Smell During Operation',
    desc: "Burning lint smell means lint is actually scorching inside the vent system. Stop using the dryer and call us immediately — this is a fire hazard.",
  },
  {
    icon: '💧',
    title: 'Moisture or Lint at Outdoor Vent',
    desc: "Outdoor vent should blow clean warm air. Excess lint, moisture, or no airflow at all means the vent is blocked somewhere.",
  },
  {
    icon: '🐦',
    title: 'Bird Nests at Vent Opening',
    desc: "Tampa Bay birds love dryer vents — particularly during nesting season. Common cause of complete blockage we find in Florida homes.",
  },
  {
    icon: '📅',
    title: 'It\'s Been Over a Year',
    desc: "Dryer vents should be cleaned at least annually. Tampa homes with pets, large families, or long vent runs may need cleaning every 6 months.",
  },
]

const services = [
  {
    title: 'Standard Dryer Vent Cleaning',
    description:
      "We clean dryer vents from both ends — disconnecting the dryer to access the vent, and accessing the outdoor vent terminal. Using high-powered vacuum equipment and rotary brushes specifically designed for dryer ducts, we remove all lint, debris, and obstructions throughout the entire vent run. Most cleanings take 45-90 minutes depending on vent length and complexity. Includes before-and-after airflow testing so you can see the improvement.",
    bullets: [
      'Full vent run cleaning (dryer to outdoor terminal)',
      'Rotary brush + high-powered vacuum',
      'Outdoor vent cap inspection and cleaning',
      'Lint trap area thorough cleaning',
      'Airflow measurement before and after',
      '45-90 minute typical service time',
    ],
  },
  {
    title: 'Dryer Vent Inspection',
    description:
      "Sometimes you just want to know whether your vent needs service. We do thorough inspections for Tampa homeowners worried about fire risk, slow-drying clothes, or who just bought a home and want to verify the vent is safe. Includes a video inspection of the vent run, airflow measurement, and a written report — useful for insurance documentation and home maintenance records.",
    bullets: [
      'Video inspection (camera in vent)',
      'Written inspection report',
      'Airflow measurement',
      'Fire risk assessment',
      'Recommendations with priority levels',
      'Useful for insurance documentation',
    ],
  },
  {
    title: 'Roof Dryer Vent Cleaning',
    description:
      "Many Tampa Bay homes route the dryer vent up through the roof — common in older neighborhoods and townhomes. These vents are harder to access, accumulate more lint due to vertical runs, and are prone to bird nests. We have the equipment to safely access roof vents, clear them thoroughly, and inspect the roof terminal cap for damage from sun, salt air, or storms.",
    bullets: [
      'Safe roof access and cleaning',
      'Vertical vent run cleaning',
      'Roof vent cap inspection',
      'Bird nest and debris removal',
      'Storm damage assessment',
      'Cap replacement if needed',
    ],
  },
  {
    title: 'Dryer Vent Repair & Replacement',
    description:
      "Beyond cleaning, sometimes vents need physical repair. Common Tampa Bay issues: crushed flexible ducting behind the dryer (reduces airflow), rusted-out roof terminals, code-violating flexible duct runs (modern code requires rigid metal duct in walls and ceilings), and improperly terminated vents that recirculate moisture into attics. We repair and replace as needed to bring your venting up to code and safe operation.",
    bullets: [
      'Crushed/damaged duct replacement',
      'Conversion from flex to rigid metal duct',
      'Roof terminal cap replacement',
      'Wall/ceiling penetration sealing',
      'Code-compliant venting installation',
      'New dryer vent installation',
    ],
  },
]

const faqs = [
  {
    q: 'How much does dryer vent cleaning cost in Tampa?',
    a: "Standard residential dryer vent cleaning runs $129-$229 depending on vent length, accessibility, and roof access. Most ground-level vents land at $129-$169. Roof vents and long runs (over 25 feet) run $179-$229. Add-ons like vent cap replacement or repair work are quoted separately and only with your approval. Free written quote before any work begins.",
  },
  {
    q: 'How often should dryer vents be cleaned?',
    a: "At least once a year for typical Tampa Bay households. Twice a year if you have pets, do laundry daily (large family), have a vent run longer than 25 feet, or have noticed any of the warning signs (slow drying, hot clothes, burning smell). Tampa's humidity also accelerates lint compaction in vents, making annual cleaning more important here than in dry climates.",
  },
  {
    q: 'How dangerous is a clogged dryer vent?',
    a: "Dangerous enough that the U.S. Fire Administration tracks it as a leading cause of residential fires — about 2,900 dryer fires per year in the U.S., with failure to clean being the #1 cause. Lint is highly flammable, and clogged vents trap heat exactly where it's most likely to ignite. Beyond fire risk, clogged vents waste energy (typical clogged vent costs $20-$40/month in extra electricity), shorten dryer lifespan, and can cause moisture damage to walls and ceilings.",
  },
  {
    q: 'Can I clean my own dryer vent?',
    a: "You can clean the easy parts — the lint trap and the first few feet behind the dryer. But the full vent run (especially through walls, attics, or roofs) requires professional equipment to clean thoroughly: rotary brushes, high-powered vacuums, and often roof access. DIY kits from hardware stores typically miss 30-50% of the lint and don't reach the most dangerous accumulation points. Annual professional cleaning runs $129-$229 — well worth it given fire risk and energy savings.",
  },
  {
    q: 'How do I know if my dryer vent needs cleaning right now?',
    a: "The clearest signs: (1) Clothes take more than one cycle to dry. (2) Dryer feels unusually hot to the touch. (3) Burning smell when running. (4) Lint visible at the outdoor vent or flecks on clothes. (5) Dryer shuts off mid-cycle (overheating safety). (6) It's been more than 12 months since the last cleaning. Any one of these means call us. Multiple symptoms together mean stop using the dryer until we clean it.",
  },
  {
    q: 'Do you do dryer vent cleaning in condos and townhomes?',
    a: "Yes. Tampa Bay condos and townhomes are actually some of our most common dryer vent calls — vent runs in these buildings are often longer, harder to access, and shared with adjacent units, making them more prone to clogs. We work with HOAs and property managers regularly. Some communities require professional documentation of dryer vent cleaning for insurance purposes — we provide written service reports for that purpose.",
  },
  {
    q: 'Is dryer vent cleaning the same as air duct cleaning?',
    a: "No — they're completely different services. Dryer vent cleaning addresses the specific exhaust duct that vents your dryer to the outside (one vent run, lint-focused). Air duct cleaning addresses your HVAC supply and return ducts that distribute conditioned air throughout your home (multiple ducts, dust and contaminant focused). We provide both services — see our Air Duct Repair page for HVAC ductwork.",
  },
]

export default function DryerVentCleaningTampaPage() {
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
            src="https://images.pexels.com/photos/4108714/pexels-photo-4108714.jpeg?auto=compress&cs=tinysrgb&w=1600"
            alt="Dryer vent cleaning service in Tampa Bay home"
            className="w-full h-full object-cover object-center opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0f1620]/80 via-[#0f1620]/60 to-[#0f1620]/40" />
        </div>
        <div className="relative z-10 max-w-5xl mx-auto">
          <p className="text-orange-300 font-semibold text-sm uppercase tracking-widest mb-3">
            Tampa Bay, FL — Dryer Vent Specialists
          </p>
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-5">
            Dryer Vent Cleaning in Tampa, FL
          </h1>
          <p className="text-blue-100 text-lg md:text-xl max-w-3xl mb-8 leading-relaxed">
            Reduce fire risk, dry clothes faster, lower energy bills. Annual cleaning is the single
            most overlooked home maintenance task in Tampa Bay — and the U.S. Fire Administration
            ranks dryer vents as a leading cause of residential fires.
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
              Schedule Service
            </Link>
          </div>
        </div>
      </section>

      {/* Trust bar */}
      <section className="bg-[#0f1620] text-white py-4 px-4">
        <div className="max-w-5xl mx-auto flex flex-wrap justify-center md:justify-between gap-x-8 gap-y-2 text-sm font-semibold text-blue-200">
          <span>✓ 45-90 Minute Service</span>
          <span>✓ Rotary Brush + Vacuum System</span>
          <span>✓ Roof Vents Included</span>
          <span>✓ Before/After Airflow Test</span>
          <span>✓ Written Service Report</span>
        </div>
      </section>

      {/* Why it matters */}
      <section className="bg-white py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-5">
            Why Dryer Vent Cleaning Matters in Tampa Bay
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
            <div className="space-y-4 text-gray-600 text-lg leading-relaxed">
              <p>
                Dryer vents are a leading cause of residential fires — about 2,900 each year in the
                U.S. — and the leading cause is one homeowners can prevent: <strong>failure to
                clean.</strong> Lint is one of the most flammable household substances, and a clogged
                dryer vent traps heat exactly where it&apos;s most likely to ignite.
              </p>
              <p>
                Tampa Bay homes deal with this faster than dryer climates because Florida&apos;s
                humidity makes lint pack tighter inside vent runs. Add the long vent runs typical in
                modern Florida homes, plus the bird nest problem at exterior vent caps, and annual
                cleaning isn&apos;t optional — it&apos;s essential.
              </p>
              <p>
                Beyond fire prevention, clean dryer vents save real money. A clogged vent can add
                $20-$40/month to your electric bill (the dryer runs longer and hotter to compensate
                for poor airflow), and it cuts dryer lifespan by 30-50%. A $129 cleaning pays for
                itself in 4-6 months on energy savings alone.
              </p>
            </div>
            <div className="bg-red-50 rounded-2xl p-7 border border-red-100">
              <h3 className="text-xl font-bold text-gray-900 mb-4">The Numbers on Dryer Fires</h3>
              <div className="space-y-3 text-sm">
                <div className="bg-white rounded-lg p-4 border border-gray-100">
                  <p className="font-bold text-gray-900 mb-1">~2,900</p>
                  <p className="text-gray-600">Dryer fires reported annually in the U.S. (USFA)</p>
                </div>
                <div className="bg-white rounded-lg p-4 border border-gray-100">
                  <p className="font-bold text-gray-900 mb-1">#1 Cause</p>
                  <p className="text-gray-600">Failure to clean — accounts for ~34% of dryer fires</p>
                </div>
                <div className="bg-white rounded-lg p-4 border border-gray-100">
                  <p className="font-bold text-gray-900 mb-1">$35M+</p>
                  <p className="text-gray-600">Annual property damage from dryer-related fires</p>
                </div>
                <div className="bg-white rounded-lg p-4 border border-gray-100">
                  <p className="font-bold text-gray-900 mb-1">12 months</p>
                  <p className="text-gray-600">Recommended cleaning interval for typical homes</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Warning signs */}
      <section className="bg-gray-50 py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-3">Warning Signs Your Vent Needs Cleaning</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {warningSigns.map((s) => (
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
            <h2 className="text-3xl font-bold text-gray-900 mb-3">Our Dryer Vent Services</h2>
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
            <h2 className="text-2xl font-bold text-gray-900 mb-1">Schedule Your Dryer Vent Cleaning</h2>
            <p className="text-gray-600">
              45-90 minutes. Done right. Most appointments available within 3-5 days.
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
