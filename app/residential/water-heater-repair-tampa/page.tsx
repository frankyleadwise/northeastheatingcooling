import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Water Heater Repair Tampa, FL | Tank & Tankless Systems | North East H&C',
  description:
    'Professional water heater repair and replacement in Tampa, FL. Tank and tankless water heaters, fast diagnostics, energy-efficient systems. Call (813) 291-6146.',
  keywords: [
    'water heater repair Tampa FL',
    'tankless water heater Tampa',
    'water heater replacement Tampa',
    'hot water heater repair Tampa Bay',
    'water heater installation Tampa',
    'electric water heater repair Tampa',
    'gas water heater repair Tampa FL',
  ],
  alternates: { canonical: '/residential/water-heater-repair-tampa' },
  openGraph: {
    title: 'Water Heater Repair Tampa, FL | Tank & Tankless Systems | North East H&C',
    description:
      'Professional water heater repair and replacement in Tampa, FL. Tank and tankless water heaters, fast diagnostics, energy-efficient systems. Call (813) 291-6146.',
    url: '/residential/water-heater-repair-tampa',
    siteName: 'North East Heating & Cooling',
    locale: 'en_US',
    type: 'website',
  },
}

const waterHeaterServices = [
  {
    title: 'Water Heater Diagnostics & Repair',
    description:
      "When your water heater isn't delivering hot water — or is delivering water that's too hot, too cold, or rusty — you need fast, accurate diagnosis. Our technicians are experienced with all types of residential water heaters and know how to quickly identify the root cause of the problem, whether it's a failed heating element, a faulty thermostat, a worn anode rod, sediment buildup, or a pressure relief valve issue. We carry common replacement parts on every service vehicle to resolve most repairs in a single visit.",
    bullets: [
      'Heating element testing and replacement (electric)',
      'Gas burner and thermocouple inspection (gas)',
      'Thermostat calibration and replacement',
      'Anode rod inspection and replacement',
      'Sediment flush and tank cleaning',
      'Pressure relief valve testing and replacement',
      'Dip tube inspection and replacement',
      'Leak diagnosis and repair',
    ],
  },
  {
    title: 'Tank Water Heater Service',
    description:
      "Traditional tank water heaters are the most common type in Tampa Bay homes, and for good reason — they're reliable, relatively affordable, and familiar to homeowners and technicians alike. A properly maintained tank water heater can last 10–15 years with regular care. We service all major brands of electric and gas tank water heaters, from standard residential 40–50 gallon units to larger 75–80 gallon models. Our tank service includes everything from basic repairs to full flushing and descaling for Tampa Bay's hard water conditions.",
    bullets: [
      'All brands: Rheem, A.O. Smith, Bradford White, GE',
      'Electric and natural gas tank models',
      'Annual flush and maintenance service',
      'Hard water descaling treatment',
      'Expansion tank installation',
      'Insulation jacket installation for efficiency',
    ],
  },
  {
    title: 'Tankless Water Heater Service',
    description:
      "Tankless (on-demand) water heaters deliver hot water only when needed, eliminating standby heat loss and providing an essentially unlimited supply of hot water — an advantage Tampa Bay households with multiple bathrooms especially appreciate. However, tankless systems have more complex components than tank units and require annual descaling in Florida's hard water conditions to maintain efficiency. We service and install tankless water heaters from Navien, Rinnai, Rheem, Noritz, and other leading manufacturers.",
    bullets: [
      'Annual descaling and maintenance service',
      'Flow sensor and water flow diagnostics',
      'Heat exchanger cleaning and inspection',
      'Ignition and venting system service (gas units)',
      'Error code diagnosis and component repair',
      'Remote control and smart feature configuration',
    ],
  },
  {
    title: 'Water Heater Replacement',
    description:
      "When repair isn't the right answer — due to age, extent of damage, or a desire to upgrade to a more efficient system — we handle full water heater replacement with minimal disruption to your household. We'll help you select the right type, size, and efficiency level for your family's needs and budget, handle all necessary permits, safely disconnect and dispose of your old unit, and install and commission your new water heater. We also offer heat pump water heaters for Tampa Bay homeowners seeking maximum energy efficiency.",
    bullets: [
      'Tank-to-tank and tank-to-tankless replacements',
      'Heat pump water heater installation',
      'Permit-ready installation service',
      'Old unit removal and disposal',
      'Expansion tank and pressure regulator evaluation',
      'Post-install temperature setting and testing',
    ],
  },
]

const comparisonItems = [
  {
    feature: 'Upfront Cost',
    tank: 'Lower ($500–$1,200 installed)',
    tankless: 'Higher ($1,500–$3,000+ installed)',
  },
  {
    feature: 'Monthly Operating Cost',
    tank: 'Higher (standby heat loss)',
    tankless: 'Lower (20–30% energy savings)',
  },
  {
    feature: 'Hot Water Supply',
    tank: 'Limited to tank capacity',
    tankless: 'Essentially unlimited',
  },
  {
    feature: 'Lifespan',
    tank: '10–15 years',
    tankless: '15–25 years',
  },
  {
    feature: 'Space Required',
    tank: 'Larger footprint',
    tankless: 'Very compact (wall-mounted)',
  },
  {
    feature: 'Maintenance',
    tank: 'Annual flush recommended',
    tankless: 'Annual descaling required',
  },
]

const faqs = [
  {
    q: 'How long does a water heater last in Tampa, FL?',
    a: "Tank water heaters in Tampa Bay typically last 8–12 years, which is slightly shorter than national averages due to hard water mineral deposits that accelerate sediment buildup and anode rod depletion. Annual flushing and anode rod replacement every 3–5 years can extend tank life significantly. Tankless water heaters generally last 15–20 years with proper annual descaling service. If your water heater is more than 10 years old and showing signs of problems, replacement is often more cost-effective than continued repair.",
  },
  {
    q: 'Why is my water heater taking so long to produce hot water?',
    a: "Slow hot water delivery can have several causes: distance between the water heater and the fixture (common in larger Tampa Bay homes), sediment buildup reducing heating efficiency, a failing heating element providing insufficient heat, or a thermostat set too low. For homes with long distances between the water heater and frequently-used fixtures, a hot water recirculation pump can dramatically reduce wait times while actually saving water. We diagnose the specific cause and recommend the most appropriate solution.",
  },
  {
    q: 'Should I get a tankless water heater in Tampa, FL?',
    a: "Tankless water heaters offer compelling advantages for Tampa Bay homeowners — particularly the energy savings from eliminating standby heat loss, the ability to supply unlimited hot water, and a longer service lifespan. However, they require annual descaling due to Tampa Bay's hard water, and the higher upfront cost means the payback period is typically 5–8 years depending on your household's hot water usage. We provide honest comparisons and ROI calculations for your specific household when you request an estimate.",
  },
  {
    q: 'What temperature should my water heater be set to?',
    a: "The CDC and most plumbers recommend setting your water heater to 120°F — hot enough to inhibit Legionella bacteria growth while reducing scalding risk and lowering energy consumption. Settings above 120°F increase scalding risk (particularly for children and elderly) and waste energy. If you have an immune-compromised household member, your doctor may recommend 140°F as a safety precaution, in which case a mixing valve at fixtures is advisable to prevent scalding at the tap.",
  },
  {
    q: 'Is water heater repair or replacement more cost-effective for me?',
    a: "A helpful rule of thumb: if the repair cost exceeds 50% of the replacement cost and your unit is more than 7 years old, replacement is often the better investment. New units come with warranties (typically 6–12 years), improved energy efficiency that lowers operating costs, and the reliability of a fresh system. If your unit is less than 7 years old and the repair cost is modest (under $300), repair is usually the right call. We'll give you an honest assessment and let you decide — we never push replacement when repair is the right answer.",
  },
]

export default function WaterHeaterRepairTampaPage() {
  return (
    <main className="font-sans">
      {/* Hero */}
      <section className="relative bg-[#0f1620] text-white py-20 px-4 overflow-hidden">
        {/* Background photo */}
        <div className="absolute inset-0">
          <img
            src="https://images.pexels.com/photos/3807719/pexels-photo-3807719.jpeg?auto=compress&cs=tinysrgb&w=1600"
            alt="Water heater repair and installation service"
            className="w-full h-full object-cover object-center opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0f1620]/95 via-[#0f1620]/80 to-[#0f1620]/60" />
        </div>
        <div className="relative z-10 max-w-5xl mx-auto">
          <p className="text-blue-200 font-semibold text-sm uppercase tracking-widest mb-3">
            Tampa Bay, FL — Water Heater Services
          </p>
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-5">
            Water Heater Repair &amp; Replacement in Tampa, FL
          </h1>
          <p className="text-blue-100 text-lg md:text-xl max-w-3xl mb-8 leading-relaxed">
            Fast water heater diagnostics, repair, and replacement for Tampa Bay homeowners. Tank and
            tankless water heater service from certified technicians — same-day service available for
            emergency situations.
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
          <span>✓ Tank &amp; Tankless Specialists</span>
          <span>✓ Same-Day Service Available</span>
          <span>✓ All Major Brands</span>
          <span>✓ Licensed &amp; Insured</span>
          <span>✓ Upfront Pricing</span>
        </div>
      </section>

      {/* Overview */}
      <section className="bg-white py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-5">
            Tampa Bay Water Heater Experts
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
            <div className="space-y-4 text-gray-600 text-lg leading-relaxed">
              <p>
                A failed water heater can disrupt daily life quickly — cold showers, inability to run
                the dishwasher effectively, and the stress of not knowing whether you need a simple
                repair or a full replacement. North East Heating &amp; Cooling provides fast, honest
                water heater service for Tampa Bay homeowners, handling everything from emergency
                same-day repairs to planned system replacements.
              </p>
              <p>
                Tampa Bay&rsquo;s water presents unique challenges for water heaters. The area&rsquo;s moderately
                hard water — with mineral content around 180–250 mg/L — causes sediment accumulation
                in tank heaters and scale buildup in tankless heat exchangers. Without regular
                maintenance, this buildup reduces efficiency, increases energy consumption, and
                shortens equipment life. Our service includes specific attention to Tampa Bay&rsquo;s
                hard water challenges.
              </p>
              <p>
                Whether you need an emergency repair, an annual flush and maintenance, or want to
                upgrade to a tankless or heat pump water heater, our team provides the information
                you need to make an informed decision — and the quality service to back it up.
              </p>
            </div>
            <div className="bg-blue-50 rounded-2xl p-6 border border-blue-100">
              <h3 className="text-lg font-bold text-gray-900 mb-4">Signs Your Water Heater Needs Service</h3>
              <ul className="space-y-3">
                {[
                  'No hot water or insufficient hot water',
                  'Water takes much longer than usual to heat',
                  'Rusty or discolored hot water',
                  'Sulfur or rotten egg smell from hot water',
                  'Rumbling or popping noises from the tank',
                  'Water pooling around the base of the unit',
                  'Pilot light repeatedly going out (gas units)',
                  'Water heater is 10+ years old',
                  'Rising energy bills without explanation',
                  'Inconsistent water temperature',
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

      {/* Services */}
      <section className="bg-gray-50 py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-3">Our Water Heater Services</h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Comprehensive water heater service for Tampa Bay homeowners — from fast repairs to
              full system upgrades.
            </p>
          </div>
          <div className="space-y-8">
            {waterHeaterServices.map((service) => (
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

      {/* Tank vs Tankless Comparison */}
      <section className="bg-white py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-gray-900 mb-3">
              Tank vs. Tankless Water Heaters for Tampa Bay Homes
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Not sure which type of water heater is right for your home? Here&rsquo;s a straightforward
              comparison to help you decide.
            </p>
          </div>
          <div className="overflow-x-auto rounded-2xl border border-gray-200 shadow-sm">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-[#0f1620] text-white">
                  <th className="text-left py-4 px-5 font-semibold rounded-tl-2xl">Feature</th>
                  <th className="text-left py-4 px-5 font-semibold">Tank Water Heater</th>
                  <th className="text-left py-4 px-5 font-semibold rounded-tr-2xl">Tankless Water Heater</th>
                </tr>
              </thead>
              <tbody>
                {comparisonItems.map((row, idx) => (
                  <tr key={row.feature} className={idx % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                    <td className="py-4 px-5 font-semibold text-gray-900">{row.feature}</td>
                    <td className="py-4 px-5 text-gray-600">{row.tank}</td>
                    <td className="py-4 px-5 text-gray-600">{row.tankless}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-gray-500 text-sm mt-4 text-center">
            Costs shown are approximate installed costs in the Tampa Bay area. Call us for a specific estimate for your home.
          </p>
        </div>
      </section>

      {/* Energy Efficiency */}
      <section className="bg-gray-50 py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-5">
                Energy-Efficient Water Heating in Tampa Bay
              </h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  Water heating accounts for roughly 14–18% of the average Tampa Bay home&rsquo;s energy bill —
                  making it the second-largest energy expense after air conditioning. Upgrading to a more
                  efficient water heater is one of the most financially rewarding home improvements available.
                </p>
                <p>
                  Heat pump water heaters represent the most efficient option available for Tampa Bay
                  homes. These systems extract heat from the surrounding air — effectively acting like
                  an air conditioner in reverse — to heat water at 2–3x the efficiency of standard
                  electric resistance units. In Tampa Bay&rsquo;s warm climate where the surrounding air is
                  warm year-round, heat pump water heaters perform exceptionally well.
                </p>
                <p>
                  Federal tax credits and utility rebates may be available for high-efficiency water
                  heater installations, including heat pump models and qualifying tankless units. We
                  help identify and document all applicable incentives for your installation.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-1 gap-4">
              {[
                {
                  label: 'Standard Electric Tank',
                  efficiency: 'Energy Factor ~0.90',
                  savings: 'Baseline',
                  color: 'bg-gray-100 border-gray-200 text-gray-700',
                },
                {
                  label: 'Tankless Water Heater',
                  efficiency: 'UEF 0.87–0.96',
                  savings: '~20–30% savings',
                  color: 'bg-blue-50 border-blue-200 text-blue-800',
                },
                {
                  label: 'Heat Pump Water Heater',
                  efficiency: 'UEF 2.0–4.0+',
                  savings: '~50–70% savings',
                  color: 'bg-[#0f1620] border-blue-700 text-white',
                },
              ].map((item) => (
                <div key={item.label} className={`rounded-xl p-5 border ${item.color}`}>
                  <div className="font-bold text-lg mb-1">{item.label}</div>
                  <div className="text-sm opacity-80">{item.efficiency}</div>
                  <div className="text-sm font-semibold mt-1">{item.savings} vs. standard electric</div>
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
            Frequently Asked Questions — Water Heater Service in Tampa
          </h2>
          <p className="text-gray-600 text-center mb-10">
            Common questions about water heater repair, replacement, and maintenance in Tampa Bay.
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
              <h2 className="text-3xl font-bold mb-4">Schedule Water Heater Service Today</h2>
              <p className="text-blue-100 text-lg mb-6 leading-relaxed">
                Don&rsquo;t go without hot water. North East Heating &amp; Cooling offers same-day water heater
                repair for Tampa Bay homeowners and free estimates on all replacements. Call now or
                fill out the form to schedule service.
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
                <div className="pt-2 text-blue-200 text-sm">
                  <p className="font-semibold text-white mb-1">Same-Day Service Available</p>
                  <p>Mon–Fri: 8:00 AM – 6:00 PM</p>
                  <p>Saturday: 8:00 AM – 2:00 PM</p>
                  <p>Free estimates on all replacements</p>
                </div>
              </div>
            </div>
            <form className="bg-white rounded-2xl p-7 text-gray-900 shadow-xl" action="/api/contact" method="POST">
              <h3 className="text-xl font-bold text-gray-800 mb-5">Request Water Heater Service</h3>
              <div className="space-y-4">
                <div>
                  <label htmlFor="wh-name" className="block text-sm font-semibold text-gray-700 mb-1">Your Name</label>
                  <input id="wh-name" type="text" name="name" placeholder="John Smith" className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100" />
                </div>
                <div>
                  <label htmlFor="wh-phone" className="block text-sm font-semibold text-gray-700 mb-1">Phone Number</label>
                  <input id="wh-phone" type="tel" name="phone" placeholder="(813) 555-1234" className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100" />
                </div>
                <div>
                  <label htmlFor="wh-email" className="block text-sm font-semibold text-gray-700 mb-1">Email Address</label>
                  <input id="wh-email" type="email" name="email" placeholder="john@example.com" className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100" />
                </div>
                <div>
                  <label htmlFor="wh-message" className="block text-sm font-semibold text-gray-700 mb-1">Describe Your Issue</label>
                  <textarea id="wh-message" name="message" placeholder="Tank or tankless? Age of unit? What issue are you experiencing?" rows={4} className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100 resize-none" />
                </div>
                <button type="submit" className="w-full bg-red-700 hover:bg-[#0f1620] active:bg-[#0f1620] text-white font-bold py-3.5 rounded-lg transition-colors text-base">
                  Submit Request
                </button>
                <p className="text-xs text-gray-500 text-center">
                  For urgent situations, call <a href="tel:8132916146" className="text-blue-600 font-semibold">(813) 291-6146</a> directly for fastest response.
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
                name: 'How long does a water heater last in Tampa, FL?',
                acceptedAnswer: { '@type': 'Answer', text: 'Tank water heaters in Tampa Bay typically last 8–12 years, slightly shorter than national averages due to hard water mineral deposits that accelerate sediment buildup. Annual flushing and anode rod replacement every 3–5 years can extend tank life significantly. Tankless water heaters generally last 15–20 years with proper annual descaling service.' },
              },
              {
                '@type': 'Question',
                name: 'Why is my water heater taking so long to produce hot water?',
                acceptedAnswer: { '@type': 'Answer', text: 'Slow hot water delivery can have several causes: distance between the water heater and the fixture, sediment buildup reducing heating efficiency, a failing heating element, or a thermostat set too low. A hot water recirculation pump can dramatically reduce wait times in larger Tampa Bay homes while saving water.' },
              },
              {
                '@type': 'Question',
                name: 'Should I get a tankless water heater in Tampa, FL?',
                acceptedAnswer: { '@type': 'Answer', text: 'Tankless water heaters offer energy savings from eliminating standby heat loss and supply unlimited hot water. However, they require annual descaling due to Tampa Bay\'s hard water, and the higher upfront cost means the payback period is typically 5–8 years depending on your household\'s hot water usage.' },
              },
              {
                '@type': 'Question',
                name: 'What temperature should my water heater be set to?',
                acceptedAnswer: { '@type': 'Answer', text: 'The CDC recommends setting your water heater to 120°F — hot enough to inhibit Legionella bacteria growth while reducing scalding risk and lowering energy consumption. Settings above 120°F increase scalding risk and waste energy.' },
              },
              {
                '@type': 'Question',
                name: 'Is water heater repair or replacement more cost-effective?',
                acceptedAnswer: { '@type': 'Answer', text: 'If the repair cost exceeds 50% of the replacement cost and your unit is more than 7 years old, replacement is often the better investment. New units come with warranties (typically 6–12 years), improved energy efficiency, and full reliability. If your unit is less than 7 years old and the repair cost is modest (under $300), repair is usually the right call.' },
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
              { '@type': 'ListItem', position: 3, name: 'Water Heater Repair Tampa' },
            ],
          }),
        }}
      />
    </main>
  )
}
