import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Exhaust Fan Repair Tampa, FL | Kitchen & Bathroom Fans | North East H&C',
  description:
    'Expert exhaust fan repair in Tampa, FL. Kitchen range hoods, bathroom exhaust fans, motor replacement & new fan installation. Call (813) 291-6146 for fast service.',
  keywords: [
    'exhaust fan repair Tampa FL',
    'bathroom fan repair Tampa',
    'kitchen exhaust fan repair Tampa',
    'range hood repair Tampa',
    'ventilation fan replacement Tampa Bay',
    'exhaust fan motor repair Tampa',
    'bathroom ventilation Tampa FL',
  ],
  alternates: { canonical: '/residential/exhaust-fan-repair-tampa' },
  openGraph: {
    title: 'Exhaust Fan Repair Tampa, FL | Kitchen & Bathroom Fans | North East H&C',
    description:
      'Expert exhaust fan repair in Tampa, FL. Kitchen range hoods, bathroom exhaust fans, motor replacement & new fan installation. Call (813) 291-6146 for fast service.',
    url: '/residential/exhaust-fan-repair-tampa',
    siteName: 'North East Heating & Cooling',
    locale: 'en_US',
    type: 'website',
  },
}

const fanServices = [
  {
    title: 'Bathroom Exhaust Fan Repair',
    description:
      "Bathroom exhaust fans are the first line of defense against the mold and mildew that Tampa Bay's humidity makes inevitable. When your bathroom fan stops working, slows down, or becomes noisy, it's not just an annoyance — it's a ventilation failure that allows moisture to accumulate in walls, ceilings, and grout, creating conditions for mold growth. We repair all major bathroom exhaust fan brands and models, from simple single-speed units to combination fan/light/heater units.",
    bullets: [
      'Motor replacement and lubrication',
      'Fan blade cleaning and replacement',
      'Duct connection repair and resealing',
      'Combination fan/light fixture repair',
      'Humidity-sensing fan installation',
      'Timer-equipped fan upgrades',
    ],
  },
  {
    title: 'Kitchen Exhaust Fan & Range Hood Repair',
    description:
      "Your kitchen range hood serves a dual purpose: it removes cooking odors and grease-laden steam, and it exhausts combustion byproducts if you cook with gas. A malfunctioning range hood not only makes cooking less pleasant — it allows grease to accumulate on your cabinets and walls, and can affect indoor air quality. We repair kitchen exhaust fans and range hoods of all styles: under-cabinet, wall-mount, island, and insert hoods.",
    bullets: [
      'Range hood motor and fan blade service',
      'Grease filter cleaning and replacement',
      'Blower assembly repair and replacement',
      'Ductwork connection and damper repair',
      'Lighting and electrical component repair',
      'Recirculating charcoal filter replacement',
    ],
  },
  {
    title: 'Exhaust Fan Motor Replacement',
    description:
      "The motor is the heart of any exhaust fan — and when it fails, the fan fails with it. Motor failure is the most common reason exhaust fans stop working or become noisy. Signs of motor failure include a humming sound with no airflow, squealing or grinding noises, the fan running slower than it used to, or the fan not starting at all. We stock motors for most common fan brands and can source specialty motors quickly for less common units.",
    bullets: [
      'Diagnosis of motor vs. other component failure',
      'Direct replacement with OEM or compatible motor',
      'Bearing replacement for squealing fans',
      'Electrical connection inspection and repair',
      'Fan blade inspection and replacement if needed',
      'Final performance testing after replacement',
    ],
  },
  {
    title: 'New Exhaust Fan Installation',
    description:
      "If your existing exhaust fan is beyond economical repair, significantly undersized for the space, or if you're adding a bathroom or kitchen renovation, we install new exhaust fans that are properly sized and correctly ducted for maximum effectiveness. In Tampa Bay's humid climate, proper exhaust fan sizing and duct routing is particularly important — we ensure your new fan actually exhausts air outdoors, not into an attic space where it can cause moisture damage.",
    bullets: [
      'CFM sizing calculation for room volume',
      'New fan installation with proper exterior ducting',
      'Smart and humidity-sensing fan options',
      'ENERGY STAR certified fan upgrades',
      'Combination fan/light/night light models',
      'Quiet operation fans (under 1.0 sone)',
    ],
  },
]

const whyItMatters = [
  {
    title: 'Mold Prevention',
    desc: "Tampa Bay averages 250+ days of high humidity annually. Without proper bathroom exhaust ventilation, shower moisture has nowhere to go — leading to mold and mildew on walls, ceilings, and grout within weeks.",
  },
  {
    title: 'Structural Protection',
    desc: 'Moisture that accumulates in walls and ceilings from inadequate ventilation can damage drywall, rot wood framing, and delaminate ceiling paint — repairs far more expensive than an exhaust fan fix.',
  },
  {
    title: 'Indoor Air Quality',
    desc: 'Working exhaust fans remove steam, odors, volatile organic compounds from cleaning products, and cooking pollutants that would otherwise recirculate through your home.',
  },
  {
    title: 'Comfort & Humidity Control',
    desc: 'In a Tampa Bay summer, every source of additional moisture makes your AC work harder. Properly functioning exhaust fans reduce the humidity load your air conditioning system has to manage.',
  },
]

const faqs = [
  {
    q: 'How do I know if my bathroom exhaust fan is working properly?',
    a: "A simple test: hold a piece of tissue paper near the exhaust fan grille while it runs. It should be drawn toward and held against the grille by suction. If the tissue falls or barely moves, your fan has inadequate airflow — possibly due to a failing motor, clogged blades, disconnected or kinked ductwork, or a blocked exterior vent cap. You can also feel for airflow with your hand or watch for steam lingering after a shower instead of clearing within 15–20 minutes.",
  },
  {
    q: 'Why is my bathroom exhaust fan so loud?',
    a: "Loud bathroom fans are usually caused by worn motor bearings, a loose or unbalanced fan blade, vibration from loose mounting, or debris caught in the fan housing. In some cases, the fan is simply old and was never quiet to begin with — older fans were commonly rated at 3–4 sones, while modern fans operate at 0.3–1.0 sones. We can diagnose whether the noise is a fixable mechanical issue or whether upgrading to a modern quiet fan is a more practical solution.",
  },
  {
    q: 'Can I leave my bathroom exhaust fan running all the time?',
    a: "Continuous bathroom exhaust fan operation is safe for most fans, but it&apos;s usually not necessary and does waste energy over time. The general recommendation is to run your bathroom fan during shower/bath use and for 20–30 minutes afterward to fully clear moisture. Humidity-sensing fans are an excellent solution for Tampa Bay homes — they automatically activate when humidity rises and shut off once it returns to normal, ensuring proper ventilation without manual operation.",
  },
  {
    q: 'Is my kitchen exhaust fan actually vented outside?',
    a: "Not necessarily. Many kitchen fans, particularly in apartments, condos, and some older homes, are recirculating units that filter air through charcoal filters and return it to the kitchen rather than exhausting it outside. While better than nothing, recirculating fans are less effective than ducted fans for removing heat and moisture. If your kitchen fan doesn&apos;t have exterior ductwork, we can evaluate whether adding ductwork is feasible and cost-effective for your home.",
  },
  {
    q: 'How much does exhaust fan repair cost in Tampa?',
    a: "Simple exhaust fan repairs like cleaning, blade replacement, or basic motor service typically run $75–$150. Motor replacement, which is the most common substantial repair, generally costs $100–$200 including parts and labor for standard residential fans. If replacement is more economical than repair, new basic exhaust fan installation (supply and install) typically ranges from $150–$350 depending on the fan type and existing ductwork access.",
  },
]

export default function ExhaustFanRepairTampaPage() {
  return (
    <main className="font-sans">
      {/* Hero */}
      <section className="bg-[#0f1620] text-white py-20 px-4">
        <div className="max-w-5xl mx-auto">
          <p className="text-blue-200 font-semibold text-sm uppercase tracking-widest mb-3">
            Tampa Bay, FL — Exhaust Fan Services
          </p>
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-5">
            Exhaust Fan Repair Services in Tampa, FL
          </h1>
          <p className="text-blue-100 text-lg md:text-xl max-w-3xl mb-8 leading-relaxed">
            Kitchen range hood and bathroom exhaust fan repair, motor replacement, and new fan
            installation for Tampa Bay homeowners. Proper ventilation is essential in Florida&rsquo;s
            humid climate — don&rsquo;t let a failing fan lead to bigger problems.
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
              Request Fan Repair
            </a>
          </div>
        </div>
      </section>

      {/* Trust bar */}
      <section className="bg-[#0f1620] text-white py-4 px-4">
        <div className="max-w-5xl mx-auto flex flex-wrap justify-center md:justify-between gap-x-8 gap-y-2 text-sm font-semibold text-blue-200">
          <span>✓ All Fan Brands Serviced</span>
          <span>✓ Same-Day Service Available</span>
          <span>✓ Bathroom &amp; Kitchen Fans</span>
          <span>✓ Licensed &amp; Insured</span>
          <span>✓ Upfront Pricing</span>
        </div>
      </section>

      {/* Why It Matters */}
      <section className="bg-white py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-5">
            Why Exhaust Fan Ventilation Matters in Tampa Bay
          </h2>
          <p className="text-gray-600 text-lg max-w-3xl mb-10 leading-relaxed">
            In Florida&rsquo;s subtropical climate, exhaust fans aren&rsquo;t a luxury — they&rsquo;re a moisture
            management necessity. Tampa Bay&rsquo;s year-round heat and humidity create ideal conditions for
            mold growth in bathrooms and kitchens, and a properly working exhaust fan is your first
            line of defense.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {whyItMatters.map((item) => (
              <div key={item.title} className="bg-blue-50 border border-blue-100 rounded-xl p-6">
                <h3 className="font-bold text-gray-900 text-lg mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="bg-gray-50 py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-3">Our Exhaust Fan Services</h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              From simple motor swaps to complete fan replacements and new installations, our team
              handles all types of residential exhaust fan work in Tampa Bay.
            </p>
          </div>
          <div className="space-y-8">
            {fanServices.map((service) => (
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

      {/* Common Issues */}
      <section className="bg-white py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-5">
                Common Exhaust Fan Issues We Repair
              </h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Most exhaust fan problems are repairable at a fraction of the cost of a new fan.
                Here are the most common issues our Tampa Bay customers call us about:
              </p>
              <div className="space-y-4">
                {[
                  {
                    issue: 'Fan runs but no airflow',
                    cause: 'Disconnected ductwork, blocked exterior vent cap, or failed blower wheel',
                  },
                  {
                    issue: 'Fan makes grinding or squealing noise',
                    cause: 'Worn motor bearings — often repairable with lubrication or motor replacement',
                  },
                  {
                    issue: 'Fan turns on but shuts off quickly',
                    cause: 'Thermal overload protection tripping — usually a sign of a failing motor',
                  },
                  {
                    issue: 'Fan vibrates excessively',
                    cause: 'Loose mounting, unbalanced fan blade, or debris in fan housing',
                  },
                  {
                    issue: 'Fan light works but fan doesn\'t',
                    cause: 'Separate motor circuit failure in combination units',
                  },
                  {
                    issue: 'Fan won\'t turn on at all',
                    cause: 'Tripped breaker, faulty switch, motor failure, or wiring issue',
                  },
                ].map((item) => (
                  <div key={item.issue} className="border-l-4 border-blue-600 pl-4">
                    <p className="font-semibold text-gray-900 text-sm">{item.issue}</p>
                    <p className="text-gray-600 text-sm">{item.cause}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="space-y-4">
              <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
                <h3 className="font-bold text-gray-900 mb-3 text-lg">Fan Upgrade Options</h3>
                <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                  If your fan is beyond economical repair or just outdated, modern fans offer
                  significant improvements in noise level, energy efficiency, and features:
                </p>
                <ul className="space-y-2.5">
                  {[
                    'Ultra-quiet models (0.3–0.5 sone)',
                    'Humidity-sensing automatic activation',
                    'Motion-sensing auto shutoff',
                    'Bluetooth speaker combination units',
                    'LED lighting integration',
                    'ENERGY STAR certified motors',
                    'Adjustable CFM airflow settings',
                  ].map((item) => (
                    <li key={item} className="flex items-center gap-2 text-sm text-gray-700">
                      <span className="w-1.5 h-1.5 rounded-full bg-red-600 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-[#0f1620] text-white rounded-xl p-6">
                <h3 className="font-bold mb-2">Tampa Bay Humidity Tip</h3>
                <p className="text-blue-200 text-sm leading-relaxed">
                  For Tampa Bay bathrooms, we recommend fans rated for at least <strong className="text-white">1 CFM per square foot</strong> of floor area, or a minimum of 110 CFM for most residential bathrooms. Humidity-sensing models are ideal for ensuring consistent ventilation during Florida&rsquo;s year-round humid conditions.
                </p>
              </div>
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
            <Link href="/residential/air-duct-repair-tampa" className="inline-flex items-center gap-1.5 px-5 py-2.5 bg-white border border-blue-200 text-blue-700 font-semibold text-sm rounded-lg hover:bg-red-700 hover:text-white hover:border-blue-700 transition-colors shadow-sm">
              Air Duct Repair →
            </Link>
            <Link href="/residential" className="inline-flex items-center gap-1.5 px-5 py-2.5 bg-white border border-blue-200 text-blue-700 font-semibold text-sm rounded-lg hover:bg-red-700 hover:text-white hover:border-blue-700 transition-colors shadow-sm">
              All Residential Services →
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-white py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-3 text-center">
            Frequently Asked Questions — Exhaust Fan Repair in Tampa
          </h2>
          <p className="text-gray-600 text-center mb-10">
            Common questions about bathroom and kitchen exhaust fan repair in Tampa Bay.
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
              <h2 className="text-3xl font-bold mb-4">Schedule Exhaust Fan Repair</h2>
              <p className="text-blue-100 text-lg mb-6 leading-relaxed">
                A malfunctioning exhaust fan in Tampa Bay is a mold problem waiting to happen. Call
                North East Heating &amp; Cooling to schedule prompt exhaust fan repair or replacement —
                same-day service available for most Tampa Bay locations.
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
              <h3 className="text-xl font-bold text-gray-800 mb-5">Request Fan Repair Service</h3>
              <div className="space-y-4">
                <div>
                  <label htmlFor="fan-name" className="block text-sm font-semibold text-gray-700 mb-1">Your Name</label>
                  <input id="fan-name" type="text" name="name" placeholder="John Smith" className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100" />
                </div>
                <div>
                  <label htmlFor="fan-phone" className="block text-sm font-semibold text-gray-700 mb-1">Phone Number</label>
                  <input id="fan-phone" type="tel" name="phone" placeholder="(813) 555-1234" className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100" />
                </div>
                <div>
                  <label htmlFor="fan-email" className="block text-sm font-semibold text-gray-700 mb-1">Email Address</label>
                  <input id="fan-email" type="email" name="email" placeholder="john@example.com" className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100" />
                </div>
                <div>
                  <label htmlFor="fan-message" className="block text-sm font-semibold text-gray-700 mb-1">Describe the Problem</label>
                  <textarea id="fan-message" name="message" placeholder="Kitchen or bathroom fan? What is it doing (or not doing)? Any noises?" rows={4} className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100 resize-none" />
                </div>
                <button type="submit" className="w-full bg-red-700 hover:bg-[#0f1620] active:bg-[#0f1620] text-white font-bold py-3.5 rounded-lg transition-colors text-base">
                  Submit Request
                </button>
                <p className="text-xs text-gray-500 text-center">
                  Call <a href="tel:8132916146" className="text-blue-600 font-semibold">(813) 291-6146</a> for same-day service availability.
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
                name: 'How do I know if my bathroom exhaust fan is working properly?',
                acceptedAnswer: { '@type': 'Answer', text: 'Hold a piece of tissue paper near the exhaust fan grille while it runs. It should be drawn toward and held against the grille by suction. If the tissue falls or barely moves, your fan has inadequate airflow — possibly due to a failing motor, clogged blades, disconnected ductwork, or a blocked exterior vent cap.' },
              },
              {
                '@type': 'Question',
                name: 'Why is my bathroom exhaust fan so loud?',
                acceptedAnswer: { '@type': 'Answer', text: 'Loud bathroom fans are usually caused by worn motor bearings, a loose or unbalanced fan blade, vibration from loose mounting, or debris caught in the fan housing. Older fans were commonly rated at 3–4 sones, while modern fans operate at 0.3–1.0 sones. We can diagnose whether the noise is a fixable mechanical issue or whether a modern quiet fan upgrade is the better solution.' },
              },
              {
                '@type': 'Question',
                name: 'Can I leave my bathroom exhaust fan running all the time?',
                acceptedAnswer: { '@type': 'Answer', text: 'Continuous operation is safe but usually unnecessary. The general recommendation is to run your bathroom fan during shower use and for 20–30 minutes afterward. Humidity-sensing fans are an excellent solution for Tampa Bay homes — they automatically activate when humidity rises and shut off once it returns to normal.' },
              },
              {
                '@type': 'Question',
                name: 'Is my kitchen exhaust fan actually vented outside?',
                acceptedAnswer: { '@type': 'Answer', text: 'Not necessarily. Many kitchen fans in apartments, condos, and older homes are recirculating units that filter air through charcoal filters and return it to the kitchen rather than exhausting it outside. Recirculating fans are less effective than ducted fans for removing heat and moisture. We can evaluate whether adding ductwork is feasible for your home.' },
              },
              {
                '@type': 'Question',
                name: 'How much does exhaust fan repair cost in Tampa?',
                acceptedAnswer: { '@type': 'Answer', text: 'Simple exhaust fan repairs like cleaning or blade replacement typically run $75–$150. Motor replacement generally costs $100–$200 including parts and labor. New basic exhaust fan installation (supply and install) typically ranges from $150–$350 depending on the fan type and existing ductwork access.' },
              },
            ],
          }),
        }}
      />
    </main>
  )
}
