import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Air Duct Repair Tampa, FL | Duct Sealing & Replacement | North East H&C',
  description:
    'Professional air duct repair, sealing, and replacement in Tampa, FL. Fix leaky ducts to improve airflow, indoor air quality, and energy efficiency. Call (813) 291-6146.',
  keywords: [
    'air duct repair Tampa FL',
    'duct sealing Tampa',
    'duct replacement Tampa Bay',
    'leaky ductwork repair Tampa',
    'HVAC duct repair Tampa',
    'improve airflow Tampa home',
    'indoor air quality Tampa FL',
  ],
  alternates: { canonical: '/residential/air-duct-repair-tampa' },
  openGraph: {
    title: 'Air Duct Repair Tampa, FL | Duct Sealing & Replacement | North East H&C',
    description:
      'Professional air duct repair, sealing, and replacement in Tampa, FL. Fix leaky ducts to improve airflow, indoor air quality, and energy efficiency. Call (813) 291-6146.',
    url: '/residential/air-duct-repair-tampa',
    siteName: 'North East Heating & Cooling',
    locale: 'en_US',
    type: 'website',
  },
}

const ductServices = [
  {
    title: 'Duct Leak Detection & Inspection',
    description:
      "Most homeowners are unaware that their ductwork is leaking — but the U.S. Department of Energy estimates that 20–30% of conditioned air is lost through leaks, holes, and poorly connected ducts in a typical home. In Tampa Bay, where your AC runs nearly year-round, that wasted air is costing you significant money every month. Our duct inspection service uses blower door testing and duct pressurization equipment to precisely measure your duct leakage rate and pinpoint where the losses are occurring.",
    bullets: [
      'Blower door and duct pressurization testing',
      'Thermal imaging to locate leaks inside walls',
      'Visual inspection of accessible ductwork',
      'Leakage rate measurement and reporting',
      'Identification of disconnected or crushed ducts',
      'Attic duct inspection in Florida-specific conditions',
    ],
  },
  {
    title: 'Duct Sealing',
    description:
      "Once we identify where your ducts are leaking, we seal them using professional-grade materials appropriate for the location and severity of the leak. Small leaks at joints and seams are sealed with mastic sealant — a flexible, durable material that outperforms duct tape by decades. Larger gaps and holes may require additional reinforcement. For homes with extensive leakage throughout the duct system, we may recommend Aeroseal — a patented duct sealing technology that seals leaks from the inside without requiring access to every duct in your system.",
    bullets: [
      'Mastic sealant application for joints and seams',
      'Foil tape and reinforcement for larger gaps',
      'Aeroseal technology for comprehensive sealing',
      'Before-and-after leakage rate testing',
      'Attic and crawlspace duct sealing',
      'Air handler connection sealing',
    ],
  },
  {
    title: 'Duct Replacement',
    description:
      "Ductwork that is severely deteriorated, collapsed, improperly designed, or contaminated with mold may need to be partially or fully replaced rather than repaired. In Tampa Bay, Florida, ductwork in unconditioned attics faces extreme conditions — attic temperatures regularly exceed 140°F in summer — which can degrade flexible duct lining and insulation over time. We design and install replacement ductwork to current ACCA Manual D standards, ensuring proper sizing for each branch run and optimal airflow to every room in your home.",
    bullets: [
      'Partial or full duct system replacement',
      'Manual D ductwork design for proper sizing',
      'Insulated flexible and sheet metal duct options',
      'Mold-contaminated duct removal and replacement',
      'Duct routing improvements for better airflow',
      'Proper attic duct insulation for Florida heat',
    ],
  },
  {
    title: 'Airflow Balancing & Improvement',
    description:
      "Uneven temperatures from room to room — hot spots, cold spots, or rooms that never seem to reach your thermostat setting — are often signs of airflow problems in your duct system. These can result from undersized duct branches, dampers set incorrectly, too few return air grilles, or obstructions in the duct system. Our airflow balancing service uses calibrated instruments to measure airflow at every supply and return register, identify imbalances, and make adjustments to ensure every room receives the right amount of conditioned air.",
    bullets: [
      'Room-by-room airflow measurement',
      'Supply and return balance adjustment',
      'Damper adjustment and installation',
      'Return air improvement recommendations',
      'Register and grille sizing evaluation',
      'Static pressure testing and correction',
    ],
  },
]

const faqs = [
  {
    q: 'How do I know if my air ducts are leaking?',
    a: "Common signs of leaky ductwork include rooms that never reach the thermostat temperature, higher-than-expected energy bills, dusty or dirty supply registers, unusual stuffiness or humidity in certain rooms, and an HVAC system that runs constantly without adequately cooling your home. You may also notice a musty smell if ducts are pulling unconditioned attic air — which in Tampa Bay is hot, humid, and potentially contaminated — into your living spaces.",
  },
  {
    q: 'How much can duct sealing save on my energy bill in Tampa?',
    a: "The savings depend on how leaky your current ductwork is, but homeowners with typical 20–30% duct leakage often see 15–25% reductions in their cooling and heating costs after professional duct sealing. In Tampa Bay where AC accounts for 50–60% of most home energy bills, that can translate to $300–$600 or more in annual savings. We provide before-and-after testing so you can see the documented improvement.",
  },
  {
    q: 'How does duct condition affect indoor air quality?',
    a: "Leaky ducts in a Tampa Bay home often pull air from the attic, crawlspace, or wall cavities — spaces that may contain insulation fibers, mold spores, dust mite allergens, rodent droppings, or construction chemicals — and distribute it throughout your living areas. This can significantly worsen indoor air quality and aggravate allergies, asthma, and respiratory conditions. Sealed, clean ductwork ensures that only the filtered, conditioned air from your HVAC system is delivered to your living spaces.",
  },
  {
    q: 'How long does duct repair or replacement take?',
    a: "Simple duct sealing of accessible joints and connections typically takes 3–5 hours for an average-sized home. Full Aeroseal treatment takes 4–6 hours including setup, treatment, and testing. Partial duct replacement depends on the scope — a single branch run might take 2–3 hours, while a full duct system replacement for a larger home could span 1–2 days. We provide a specific time estimate before scheduling.",
  },
  {
    q: 'Do I need to leave my home during duct repair or sealing?',
    a: "For standard mastic sealing and duct repairs, you can typically remain home during the work. If we are accessing attic spaces with fiberglass insulation, we recommend limiting time in adjacent rooms during work. For Aeroseal duct sealing, occupants need to leave for approximately 4 hours while the sealant aerosol is injected and cures. All Aeroseal products are UL-listed and safe for residential use once cured.",
  },
]

export default function AirDuctRepairTampaPage() {
  return (
    <main className="font-sans">
      {/* Hero */}
      <section className="relative bg-[#0f1620] text-white py-20 px-4 overflow-hidden">
        {/* Background photo */}
        <div className="absolute inset-0">
          <img
            src="https://images.pexels.com/photos/5539540/pexels-photo-5539540.jpeg?auto=compress&cs=tinysrgb&w=1600"
            alt="Air duct repair and replacement service"
            className="w-full h-full object-cover object-center opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0f1620]/80 via-[#0f1620]/60 to-[#0f1620]/40" />
        </div>
        <div className="relative z-10 max-w-5xl mx-auto">
          <p className="text-blue-200 font-semibold text-sm uppercase tracking-widest mb-3">
            Tampa Bay, FL — Air Duct Services
          </p>
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-5">
            Air Duct Repair &amp; Replacement in Tampa, FL
          </h1>
          <p className="text-blue-100 text-lg md:text-xl max-w-3xl mb-8 leading-relaxed">
            Leaky ducts waste energy, reduce comfort, and degrade your home&rsquo;s air quality. Our Tampa Bay
            duct repair specialists find and fix duct leaks, seal connections, and replace deteriorated
            ductwork — so your HVAC system delivers the comfort you&rsquo;re paying for.
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
              Request Duct Inspection
            </a>
          </div>
        </div>
      </section>

      {/* Trust bar */}
      <section className="bg-[#0f1620] text-white py-4 px-4">
        <div className="max-w-5xl mx-auto flex flex-wrap justify-center md:justify-between gap-x-8 gap-y-2 text-sm font-semibold text-blue-200">
          <span>✓ Duct Leakage Testing &amp; Measurement</span>
          <span>✓ Aeroseal Certified Contractor</span>
          <span>✓ Before &amp; After Testing Provided</span>
          <span>✓ Licensed &amp; Insured</span>
          <span>✓ Serving All Tampa Bay</span>
        </div>
      </section>

      {/* Overview */}
      <section className="bg-white py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-5">
            Why Your Tampa Bay Home&rsquo;s Ductwork Matters
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
            <div className="space-y-4 text-gray-600 text-lg leading-relaxed">
              <p>
                Your HVAC system is only as effective as the ductwork that delivers conditioned air to
                every room in your home. Even a high-efficiency air conditioner running perfectly will
                underperform if 20–30% of its output is leaking into your attic or walls before it
                reaches the living areas. In Tampa Bay, where air conditioning is essentially a
                year-round necessity, duct leakage has an outsized impact on both your comfort and
                your utility bills.
              </p>
              <p>
                Tampa Bay&rsquo;s climate creates particularly challenging conditions for ductwork. Most homes
                here run ductwork through unconditioned attics that reach 130–150°F in summer. This
                extreme heat accelerates the degradation of flexible duct liner, causes sealants to
                fail, and puts enormous thermal load on any conditioned air passing through. Properly
                insulated, well-sealed ductwork is not optional in this environment — it&rsquo;s essential.
              </p>
              <p>
                North East Heating &amp; Cooling offers comprehensive duct services — from diagnostic
                testing to sealing, repair, and complete replacement. We use measurement-based
                approaches, providing you with documented evidence of the problem and documented
                proof of improvement after our work is complete.
              </p>
            </div>
            <div className="space-y-4">
              <div className="bg-red-50 border border-red-100 rounded-xl p-6">
                <h3 className="font-bold text-gray-900 mb-3 text-lg">Signs of Duct Problems</h3>
                <ul className="space-y-2.5">
                  {[
                    'Rooms that stay hot even when AC is running',
                    'Noticeably higher utility bills in summer',
                    'Dust accumulating quickly on surfaces',
                    'Musty or stale smell from vents',
                    'Weak airflow at some registers',
                    'Humidity feels high even with AC on',
                    'AC runs constantly without reaching setpoint',
                    'Hot spots in rooms adjacent to attic',
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2.5 text-gray-700 text-sm">
                      <span className="w-2 h-2 rounded-full bg-red-500 shrink-0 mt-1.5" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-[#0f1620] text-white rounded-xl p-6">
                <h3 className="font-bold mb-2">The Cost of Leaky Ducts</h3>
                <p className="text-blue-200 text-sm leading-relaxed">
                  The U.S. Department of Energy estimates that duct leakage costs the average homeowner
                  with leaky ducts <span className="text-white font-bold">$300–$700 per year</span> in
                  wasted energy — energy that heats your attic instead of cooling your home.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="bg-gray-50 py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-3">Our Air Duct Services</h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              From precise leak detection to full system replacement, we handle every aspect of
              residential ductwork in Tampa Bay.
            </p>
          </div>
          <div className="space-y-8">
            {ductServices.map((service) => (
              <div key={service.title} className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
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

      {/* Indoor Air Quality */}
      <section className="bg-white py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-5">
                Duct Repair &amp; Indoor Air Quality
              </h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  Tampa Bay&rsquo;s humidity creates ideal conditions for mold and mildew growth — and leaky
                  ducts can spread mold spores, dust mite allergens, and other contaminants throughout
                  your entire home. If your ducts run through an unconditioned attic, they may be pulling
                  in hot, humid, unfiltered attic air full of insulation particles and biological
                  contaminants every time your system runs.
                </p>
                <p>
                  Properly sealed ductwork ensures that only filtered air from your HVAC system circulates
                  through your home. This can make a meaningful difference for households with allergy
                  sufferers, asthma patients, infants, or anyone sensitive to airborne particles and
                  humidity fluctuations.
                </p>
                <p>
                  As part of our duct services, we also offer UV air purifier installation, media air
                  filtration upgrades, and duct cleaning for systems with visible contamination inside
                  the duct lining.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-1 gap-4">
              {[
                {
                  title: 'Allergen Reduction',
                  desc: 'Sealed ducts prevent attic contaminants from entering your living areas, reducing dust, mold spores, and allergens.',
                },
                {
                  title: 'Humidity Control',
                  desc: 'Properly sealed ducts help your AC control humidity more effectively — critical in Tampa Bay\'s subtropical climate.',
                },
                {
                  title: 'Energy Savings',
                  desc: 'Stop paying to cool your attic. Sealed ducts deliver more of your conditioned air where it\'s supposed to go.',
                },
                {
                  title: 'Extended Equipment Life',
                  desc: 'When your HVAC system doesn\'t have to work as hard to compensate for duct losses, it experiences less wear and lasts longer.',
                },
              ].map((item) => (
                <div key={item.title} className="bg-blue-50 border border-blue-100 rounded-xl p-5">
                  <h3 className="font-bold text-gray-900 mb-1.5">{item.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Internal Links */}
      <section className="bg-blue-50 border-y border-blue-100 py-10 px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-xl font-bold text-gray-900 mb-5">Related Services</h2>
          <div className="flex flex-wrap gap-3">
            <Link href="/residential/hvac-service-tampa" className="inline-flex items-center gap-1.5 px-5 py-2.5 bg-white border border-blue-200 text-blue-700 font-semibold text-sm rounded-lg hover:bg-red-700 hover:text-white hover:border-blue-700 transition-colors shadow-sm">
              HVAC Repair Services →
            </Link>
            <Link href="/residential/hvac-installation-tampa-fl" className="inline-flex items-center gap-1.5 px-5 py-2.5 bg-white border border-blue-200 text-blue-700 font-semibold text-sm rounded-lg hover:bg-red-700 hover:text-white hover:border-blue-700 transition-colors shadow-sm">
              HVAC Installation →
            </Link>
            <Link href="/service-areas" className="inline-flex items-center gap-1.5 px-5 py-2.5 bg-white border border-blue-200 text-blue-700 font-semibold text-sm rounded-lg hover:bg-red-700 hover:text-white hover:border-blue-700 transition-colors shadow-sm">
              View All Service Areas →
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-white py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-3 text-center">
            Frequently Asked Questions — Air Duct Repair in Tampa
          </h2>
          <p className="text-gray-600 text-center mb-10">
            Answers to common questions about ductwork repair, sealing, and replacement in Tampa Bay.
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
              <h2 className="text-3xl font-bold mb-4">Schedule a Duct Inspection Today</h2>
              <p className="text-blue-100 text-lg mb-6 leading-relaxed">
                Stop paying to cool your attic. Call North East Heating &amp; Cooling to schedule a
                professional duct inspection and leakage test for your Tampa Bay home. We&rsquo;ll identify
                exactly what&rsquo;s happening and give you a clear plan to fix it.
              </p>
              <div className="space-y-4">
                <a href="tel:8132916146" className="flex items-center gap-3 text-white text-xl font-bold hover:text-blue-200 transition-colors">
                  <span className="bg-red-600 rounded-full w-11 h-11 flex items-center justify-center shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5" aria-hidden="true">
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.4 2 2 0 0 1 3.6 1.22h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L7.91 8.8a16 16 0 0 0 6.29 6.29l.95-.95a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                    </svg>
                  </span>
                  (813) 291-6146
                </a>
                <a href="mailto:office@northeastheatingcooling.com" className="flex items-center gap-3 text-blue-200 hover:text-white transition-colors">
                  <span className="bg-red-600 rounded-full w-11 h-11 flex items-center justify-center shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5" aria-hidden="true">
                      <rect x="2" y="4" width="20" height="16" rx="2" />
                      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                    </svg>
                  </span>
                  office@northeastheatingcooling.com
                </a>
              </div>
            </div>
            <form className="bg-white rounded-2xl p-7 text-gray-900 shadow-xl" action="/api/contact" method="POST">
              <h3 className="text-xl font-bold text-gray-800 mb-5">Request Duct Inspection</h3>
              <div className="space-y-4">
                <div>
                  <label htmlFor="duct-name" className="block text-sm font-semibold text-gray-700 mb-1">Your Name</label>
                  <input id="duct-name" type="text" name="name" placeholder="John Smith" className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100" />
                </div>
                <div>
                  <label htmlFor="duct-phone" className="block text-sm font-semibold text-gray-700 mb-1">Phone Number</label>
                  <input id="duct-phone" type="tel" name="phone" placeholder="(813) 555-1234" className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100" />
                </div>
                <div>
                  <label htmlFor="duct-email" className="block text-sm font-semibold text-gray-700 mb-1">Email Address</label>
                  <input id="duct-email" type="email" name="email" placeholder="john@example.com" className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100" />
                </div>
                <div>
                  <label htmlFor="duct-message" className="block text-sm font-semibold text-gray-700 mb-1">Describe Your Concerns</label>
                  <textarea id="duct-message" name="message" placeholder="Hot rooms, high bills, dusty vents, musty smell, uneven temperatures..." rows={4} className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100 resize-none" />
                </div>
                <button type="submit" className="w-full bg-red-700 hover:bg-[#0f1620] active:bg-[#0f1620] text-white font-bold py-3.5 rounded-lg transition-colors text-base">
                  Submit Request
                </button>
                <p className="text-xs text-gray-500 text-center">
                  Questions? Call <a href="tel:8132916146" className="text-blue-600 font-semibold">(813) 291-6146</a> — we&apos;re here to help.
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
                name: 'How do I know if my air ducts are leaking?',
                acceptedAnswer: { '@type': 'Answer', text: 'Common signs of leaky ductwork include rooms that never reach the thermostat temperature, higher-than-expected energy bills, dusty supply registers, unusual stuffiness in certain rooms, and an HVAC system that runs constantly without adequately cooling your home. You may also notice a musty smell if ducts are pulling unconditioned attic air into your living spaces.' },
              },
              {
                '@type': 'Question',
                name: 'How much can duct sealing save on my energy bill in Tampa?',
                acceptedAnswer: { '@type': 'Answer', text: 'Homeowners with typical 20–30% duct leakage often see 15–25% reductions in cooling and heating costs after professional duct sealing. In Tampa Bay where AC accounts for 50–60% of most home energy bills, that can translate to $300–$600 or more in annual savings.' },
              },
              {
                '@type': 'Question',
                name: 'How does duct condition affect indoor air quality?',
                acceptedAnswer: { '@type': 'Answer', text: 'Leaky ducts in a Tampa Bay home often pull air from the attic or crawlspace — spaces that may contain insulation fibers, mold spores, dust mite allergens, or construction chemicals — and distribute it throughout your living areas. Sealed, clean ductwork ensures only filtered, conditioned air is delivered to your living spaces.' },
              },
              {
                '@type': 'Question',
                name: 'How long does duct repair or replacement take?',
                acceptedAnswer: { '@type': 'Answer', text: 'Simple duct sealing of accessible joints typically takes 3–5 hours for an average-sized home. Full Aeroseal treatment takes 4–6 hours including setup, treatment, and testing. A full duct system replacement for a larger home could span 1–2 days.' },
              },
              {
                '@type': 'Question',
                name: 'Do I need to leave my home during duct repair or sealing?',
                acceptedAnswer: { '@type': 'Answer', text: 'For standard mastic sealing and duct repairs, you can typically remain home during the work. For Aeroseal duct sealing, occupants need to leave for approximately 4 hours while the sealant aerosol is injected and cures. All Aeroseal products are UL-listed and safe for residential use once cured.' },
              },
            ],
          }),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'BreadcrumbList',
            itemListElement: [
              { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://northeastheatingcooling.com' },
              { '@type': 'ListItem', position: 2, name: 'Residential Services', item: 'https://northeastheatingcooling.com/residential' },
              { '@type': 'ListItem', position: 3, name: 'Air Duct Repair Tampa' },
            ],
          }),
        }}
      />
    </main>
  )
}
