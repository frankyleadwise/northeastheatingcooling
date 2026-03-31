import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Commercial HVAC Service & Repair Tampa, FL | North East Heating & Cooling',
  description:
    'Preventive maintenance plans, emergency repair, and full-service commercial HVAC service in Tampa Bay, FL. Keep your system running efficiently. Call (813) 291-6146.',
  keywords: [
    'commercial HVAC service Tampa',
    'commercial HVAC repair Tampa FL',
    'commercial AC repair Tampa Bay',
    'commercial HVAC maintenance Tampa',
    'emergency commercial HVAC Tampa',
    'commercial coil cleaning Tampa',
    'commercial refrigerant service Tampa',
    'HVAC maintenance plan Tampa Bay',
  ],
  openGraph: {
    title: 'Commercial HVAC Service & Repair Tampa, FL | North East Heating & Cooling',
    description:
      'Preventive maintenance plans and emergency commercial HVAC repair throughout Tampa Bay. Licensed technicians. Call (813) 291-6146.',
    url: 'https://northeastheatingcooling.com/commercial/hvac-service-tampa',
    siteName: 'North East Heating & Cooling',
    locale: 'en_US',
    type: 'website',
  },
}

const maintenanceItems = [
  {
    title: 'Filter Inspection & Replacement',
    detail:
      'Commercial HVAC filters clog faster in Tampa Bay\'s dusty, pollen-heavy environment. Clogged filters force your system to work harder, increase energy consumption, and can lead to coil freeze-ups and blower motor damage. We inspect and replace filters on every scheduled visit using the correct MERV-rated media for your system.',
  },
  {
    title: 'Evaporator & Condenser Coil Cleaning',
    detail:
      'Dirty coils are the number-one cause of commercial HVAC efficiency loss and premature failure in Florida. Our technicians chemically clean evaporator and condenser coils to remove accumulated dust, bio-film, and mold — restoring heat transfer efficiency and reducing compressor strain. In Tampa Bay\'s humid climate, coil cleaning is essential at least twice annually.',
  },
  {
    title: 'Refrigerant Level Check & Leak Detection',
    detail:
      'Low refrigerant reduces cooling capacity, increases compressor temperatures, and leads to premature compressor failure. We check system superheat and subcooling on every maintenance visit, top off refrigerant as needed, and trace any leaks to their source. All refrigerant handling is performed by EPA 608-certified technicians.',
  },
  {
    title: 'Electrical Component Inspection',
    detail:
      'We inspect and tighten all electrical connections, measure amperage on compressors and fan motors, test capacitors and contactors, and check control boards. Electrical faults are a leading cause of commercial HVAC failure — catching a worn capacitor during maintenance is far less costly than a failed compressor on a 95°F Tampa afternoon.',
  },
  {
    title: 'Drain Pan & Condensate Line Cleaning',
    detail:
      'Tampa Bay\'s humidity means commercial HVAC systems produce enormous volumes of condensate. Clogged drain lines lead to water damage, mold growth, and system shutdowns. We flush and treat condensate lines with algaecide on every visit to prevent algae buildup — a common problem in Florida\'s warm climate.',
  },
  {
    title: 'Belt, Bearing & Motor Lubrication',
    detail:
      'Belt-driven air handlers require regular belt tension checks and replacement. We inspect blower and fan motor bearings, lubricate as needed, and check belt condition to prevent unexpected failures. Worn belts cause noise, reduced airflow, and complete system shutdown if they snap.',
  },
  {
    title: 'Thermostat & Controls Calibration',
    detail:
      'Commercial building automation systems, programmable thermostats, and zone controls must be properly calibrated to deliver efficient, consistent comfort. We verify setpoints, check sensor accuracy, test economizer operation, and ensure your controls are optimized for Tampa Bay\'s climate patterns.',
  },
  {
    title: 'System Performance Report',
    detail:
      'After every maintenance visit, we provide a written system report documenting findings, work performed, equipment condition ratings, and recommended repairs or upgrades. This documentation protects your warranty, tracks equipment history, and helps you budget for future capital expenditures.',
  },
]

const repairServices = [
  'Compressor repair and replacement',
  'Condenser and evaporator fan motor replacement',
  'Capacitor and contactor replacement',
  'Control board and thermostat replacement',
  'Refrigerant leak repair and recharge',
  'Coil repair and replacement',
  'Ductwork repair and rebalancing',
  'Economizer repair and calibration',
  'Variable-speed drive (VFD) service',
  'Commercial heat pump reversing valve repair',
  'BAS / building automation integration',
  'Emergency 24/7 breakdown response',
]

const maintenancePlans = [
  {
    name: 'Quarterly Plan',
    cadence: '4 visits/year',
    ideal: 'Restaurants, medical offices, high-use commercial spaces',
    includes: [
      'Quarterly filter changes',
      'Bi-annual coil cleaning',
      'Full electrical and refrigerant check each visit',
      'Priority emergency service (4-hour response)',
      'Written system report each visit',
      '15% discount on repairs',
    ],
  },
  {
    name: 'Semi-Annual Plan',
    cadence: '2 visits/year',
    ideal: 'Offices, retail stores, warehouses',
    includes: [
      'Spring and fall comprehensive tune-up',
      'Full coil cleaning both visits',
      'Electrical, refrigerant, and controls check',
      'Priority emergency service (8-hour response)',
      'Written system report each visit',
      '10% discount on repairs',
    ],
  },
  {
    name: 'Annual Plan',
    cadence: '1 visit/year',
    ideal: 'Low-use commercial spaces, storage facilities',
    includes: [
      'Annual comprehensive inspection',
      'Filter replacement',
      'Coil cleaning and drain service',
      'Electrical and refrigerant check',
      'Written system report',
      '5% discount on repairs',
    ],
  },
]

const challenges = [
  {
    title: 'Near-Continuous Operation',
    detail:
      'Most Tampa Bay commercial buildings require cooling 10–12 months a year. That\'s 2–3x more annual run hours than systems in northern climates, accelerating wear on every component and making regular maintenance non-negotiable rather than optional.',
  },
  {
    title: 'Extreme Humidity & Mold Risk',
    detail:
      'Florida\'s outdoor humidity levels regularly exceed 80–90%. When HVAC systems are oversized, short-cycling, or poorly maintained, they fail to adequately dehumidify indoor air — creating conditions for mold and mildew growth in ductwork, coils, and occupied spaces. This is both a health risk and a liability issue.',
  },
  {
    title: 'Lightning & Power Surge Damage',
    detail:
      'Tampa Bay is the lightning capital of North America. Power surges regularly damage commercial HVAC control boards, compressors, and variable-speed drives. Proper surge protection and rapid post-storm diagnostics are part of our commercial service offering.',
  },
  {
    title: 'Salt Air Corrosion',
    detail:
      'Businesses within a few miles of Tampa Bay, Hillsborough Bay, or the Gulf experience accelerated corrosion on condenser coils, electrical panels, and cabinet hardware. We apply protective coatings and specify corrosion-resistant equipment for coastal commercial properties.',
  },
]

const faqs = [
  {
    q: 'How often should a commercial HVAC system be serviced in Tampa Bay?',
    a: "Given Florida's near-year-round cooling season and high humidity, most Tampa Bay commercial HVAC systems should be serviced at least twice annually — ideally before peak cooling season in spring and again in the fall. High-use environments like restaurants, medical facilities, and gyms benefit from quarterly maintenance. More frequent service extends equipment life, maintains efficiency, and catches problems before they cause costly downtime.",
  },
  {
    q: 'Do you offer 24/7 emergency commercial HVAC repair?',
    a: "Yes. A commercial HVAC failure during a Tampa Bay summer can drive customers away, damage temperature-sensitive inventory, and create health risks for employees. Our emergency service line is staffed around the clock. Customers on a preventive maintenance plan receive priority scheduling and guaranteed response times.",
  },
  {
    q: 'What is included in a commercial HVAC maintenance agreement?',
    a: "Our maintenance agreements include scheduled inspections, filter replacements, coil cleaning, refrigerant level checks, electrical component testing, drain line treatment, controls calibration, and written system reports. We tailor agreement scope and visit frequency to your specific equipment, usage patterns, and budget.",
  },
  {
    q: 'How can I tell if my commercial HVAC system needs repair?',
    a: "Common warning signs include unusual noises (banging, squealing, rattling), reduced airflow from vents, uneven temperatures between zones, increased utility bills, ice forming on indoor coils or refrigerant lines, water around the indoor unit, or a system that runs constantly without reaching setpoint. If you notice any of these symptoms, call us — early diagnosis prevents small issues from becoming major repairs.",
  },
  {
    q: 'Will my manufacturer warranty cover commercial HVAC repairs?',
    a: "Most commercial HVAC manufacturers require documented annual professional maintenance to maintain warranty coverage. Our maintenance agreements provide the service records you need to support warranty claims. We are authorized service providers for all major commercial HVAC brands and can assist with warranty claims on parts and equipment.",
  },
]

export default function CommercialHVACServicePage() {
  return (
    <main className="font-sans text-gray-800">

      {/* Hero */}
      <section className="relative bg-[#0f1620] text-white py-20 px-4 overflow-hidden">
        {/* Background photo */}
        <div className="absolute inset-0">
          <img
            src="https://images.pexels.com/photos/5463575/pexels-photo-5463575.jpeg?auto=compress&cs=tinysrgb&w=1600"
            alt="HVAC technician performing AC repair service"
            className="w-full h-full object-cover object-center opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0f1620]/95 via-[#0f1620]/80 to-[#0f1620]/60" />
        </div>
        <div className="relative z-10 max-w-5xl mx-auto">
          <p className="text-blue-300 text-sm font-semibold uppercase tracking-widest mb-3">
            Commercial HVAC — Tampa Bay, FL
          </p>
          <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-5 max-w-3xl">
            Commercial HVAC Service &amp; Repair in Tampa, FL
          </h1>
          <p className="text-blue-100 text-lg md:text-xl max-w-3xl mb-8 leading-relaxed">
            Preventive maintenance plans, emergency breakdown response, and comprehensive repair services
            for commercial HVAC systems throughout Tampa Bay. Protect your equipment investment and keep
            your business running in Florida&apos;s demanding climate.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="tel:8132916146"
              className="inline-block bg-orange-500 hover:bg-orange-600 text-white font-bold py-4 px-8 rounded-lg text-lg transition-colors"
            >
              Call (813) 291-6146
            </a>
            <a
              href="#contact"
              className="inline-block bg-white hover:bg-blue-50 text-blue-900 font-bold py-4 px-8 rounded-lg text-lg transition-colors"
            >
              Request Service
            </a>
          </div>
        </div>
      </section>

      {/* Trust Bar */}
      <section className="bg-[#0f1620] text-white py-5 px-4">
        <div className="max-w-5xl mx-auto flex flex-wrap justify-center gap-8 text-sm font-medium">
          <div className="flex items-center gap-2"><span className="text-orange-400 text-lg">✓</span> 24/7 Emergency Service</div>
          <div className="flex items-center gap-2"><span className="text-orange-400 text-lg">✓</span> Preventive Maintenance Plans</div>
          <div className="flex items-center gap-2"><span className="text-orange-400 text-lg">✓</span> Florida Licensed &amp; Insured</div>
          <div className="flex items-center gap-2"><span className="text-orange-400 text-lg">✓</span> All Major Brands Serviced</div>
          <div className="flex items-center gap-2"><span className="text-orange-400 text-lg">✓</span> EPA 608 Certified Technicians</div>
        </div>
      </section>

      {/* Intro */}
      <section className="bg-white py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="max-w-3xl">
            <h2 className="text-3xl font-bold text-gray-900 mb-5">
              Why Commercial HVAC Maintenance Matters More in Tampa Bay
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-4">
              Commercial HVAC systems in Tampa Bay work harder than virtually anywhere else in the country.
              The combination of near-continuous cooling demand, extreme humidity, salt air, lightning storms,
              and Florida&apos;s demanding energy codes creates a challenging environment that accelerates equipment
              wear and increases the risk of unexpected failures.
            </p>
            <p className="text-gray-600 text-lg leading-relaxed mb-4">
              A reactive approach — waiting for something to break — is the most expensive strategy for
              commercial HVAC. Emergency repairs cost 3–5x more than the same work performed during a
              scheduled maintenance visit. Unplanned downtime during a Tampa Bay summer can mean lost
              revenue, damaged inventory, uncomfortable employees, and unhappy customers.
            </p>
            <p className="text-gray-600 text-lg leading-relaxed">
              North East Heating &amp; Cooling offers structured commercial preventive maintenance agreements
              designed to maximize equipment life, maintain energy efficiency, and give Tampa Bay business
              owners the confidence that their HVAC systems will perform when they need them most.
            </p>
          </div>
        </div>
      </section>

      {/* Maintenance Items */}
      <section className="bg-gray-50 py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-3">
              What&apos;s Included in Our Commercial Maintenance Visits
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Every maintenance visit covers a thorough inspection and service of all critical system
              components — not just a quick filter swap.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {maintenanceItems.map((item) => (
              <div key={item.title} className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm">
                <div className="flex items-start gap-3 mb-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-orange-500 shrink-0 mt-2" />
                  <h3 className="font-bold text-gray-900">{item.title}</h3>
                </div>
                <p className="text-gray-600 text-sm leading-relaxed pl-5">{item.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Maintenance Plans */}
      <section className="bg-white py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-3">
              Commercial Maintenance Plan Options
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Choose the plan that fits your facility&apos;s usage and your budget. All plans include
              priority emergency service and a discount on repairs.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {maintenancePlans.map((plan, idx) => (
              <div
                key={plan.name}
                className={`rounded-xl p-6 border-2 ${idx === 0 ? 'border-orange-400 bg-orange-50' : 'border-gray-200 bg-gray-50'}`}
              >
                {idx === 0 && (
                  <div className="inline-block bg-orange-500 text-white text-xs font-bold px-3 py-1 rounded-full mb-3 uppercase tracking-wide">
                    Most Popular
                  </div>
                )}
                <h3 className="text-xl font-bold text-gray-900 mb-1">{plan.name}</h3>
                <p className="text-orange-600 font-semibold text-sm mb-1">{plan.cadence}</p>
                <p className="text-gray-500 text-xs mb-4">Best for: {plan.ideal}</p>
                <ul className="space-y-2">
                  {plan.includes.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-gray-700">
                      <span className="text-orange-500 font-bold shrink-0 mt-0.5">✓</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <p className="text-center text-gray-500 text-sm mt-6">
            Custom maintenance agreements available for multi-unit properties and large commercial portfolios.
            Call <a href="tel:8132916146" className="text-blue-600 font-semibold hover:underline">(813) 291-6146</a> to discuss your needs.
          </p>
        </div>
      </section>

      {/* Repair Services */}
      <section className="bg-[#0f1620] text-white py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold mb-3">Commercial HVAC Repair Services</h2>
            <p className="text-blue-200 max-w-2xl mx-auto">
              Our technicians carry a fully stocked service fleet to handle the majority of commercial
              HVAC repairs on the first visit — minimizing your downtime.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {repairServices.map((service) => (
              <div key={service} className="bg-[#0f1620] rounded-lg px-5 py-3.5 flex items-center gap-3">
                <span className="text-orange-400 font-bold shrink-0">✓</span>
                <span className="text-sm">{service}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tampa-Specific Challenges */}
      <section className="bg-gray-50 py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-3">
              Commercial HVAC Challenges Unique to Tampa Bay
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Our technicians understand the specific conditions that affect commercial HVAC performance
              in Hillsborough and Pinellas counties.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {challenges.map((challenge) => (
              <div key={challenge.title} className="bg-white rounded-xl p-6 border border-gray-200">
                <h3 className="text-lg font-bold text-blue-900 mb-3">{challenge.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{challenge.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-white py-16 px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-10 text-center">
            Frequently Asked Questions
          </h2>
          <div className="space-y-6">
            {faqs.map((faq) => (
              <div key={faq.q} className="border-b border-gray-200 pb-6">
                <h3 className="text-lg font-bold text-gray-900 mb-3">{faq.q}</h3>
                <p className="text-gray-600 leading-relaxed text-sm">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Area */}
      <section className="bg-blue-50 border-y border-blue-100 py-12 px-4">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-2">
              Commercial HVAC Service Across Tampa Bay
            </h2>
            <p className="text-gray-600 max-w-2xl">
              We service commercial buildings in Tampa, St. Petersburg, Clearwater, Brandon, Riverview,
              Wesley Chapel, Lutz, Land O&apos; Lakes, Plant City, and surrounding areas.{' '}
              <Link href="/service-areas" className="text-blue-700 font-semibold hover:underline">
                View all service areas →
              </Link>
            </p>
          </div>
          <a
            href="tel:8132916146"
            className="shrink-0 bg-[#0f1620] hover:bg-[#0f1620] text-white font-bold py-3 px-7 rounded-lg text-lg transition-colors whitespace-nowrap"
          >
            Call (813) 291-6146
          </a>
        </div>
      </section>

      {/* CTA / Contact */}
      <section id="contact" className="bg-[#0f1620] text-white py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-3xl font-bold mb-4">
                Schedule Commercial HVAC Service Today
              </h2>
              <p className="text-blue-100 text-lg mb-6 leading-relaxed">
                Call for emergency service available 24/7, or fill out the form to discuss a
                maintenance agreement or schedule a diagnostic visit.
              </p>
              <div className="space-y-4 mb-8">
                <a
                  href="tel:8132916146"
                  className="flex items-center gap-3 text-white hover:text-orange-300 font-bold text-xl transition-colors"
                >
                  <span className="bg-orange-500 rounded-full w-11 h-11 flex items-center justify-center text-base shrink-0">📞</span>
                  (813) 291-6146
                </a>
                <a
                  href="mailto:office@northeastheatingcooling.com"
                  className="flex items-center gap-3 text-blue-200 hover:text-white transition-colors"
                >
                  <span className="bg-red-700 rounded-full w-11 h-11 flex items-center justify-center text-base shrink-0">✉️</span>
                  office@northeastheatingcooling.com
                </a>
              </div>
              <div className="text-sm text-blue-200 space-y-1">
                <p className="font-semibold text-white">Also helpful:</p>
                <Link href="/commercial" className="block text-blue-300 hover:text-white hover:underline">← All Commercial Services</Link>
                <Link href="/commercial/hvac-installation-tampa-fl" className="block text-blue-300 hover:text-white hover:underline">Commercial HVAC Installation →</Link>
                <Link href="/residential" className="block text-blue-300 hover:text-white hover:underline">Residential HVAC Services →</Link>
              </div>
            </div>
            <form className="bg-white rounded-2xl p-7 text-gray-900 shadow-xl">
              <h3 className="text-xl font-bold text-gray-800 mb-5">Request Service or Maintenance Quote</h3>
              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-gray-600 mb-1 uppercase tracking-wide">Business Name</label>
                    <input
                      type="text"
                      name="business"
                      placeholder="Your Business"
                      className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-gray-600 mb-1 uppercase tracking-wide">Your Name</label>
                    <input
                      type="text"
                      name="name"
                      placeholder="Contact Name"
                      className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-xs font-semibold text-gray-600 mb-1 uppercase tracking-wide">Phone Number</label>
                  <input
                    type="tel"
                    name="phone"
                    placeholder="(813) 555-0100"
                    className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-gray-600 mb-1 uppercase tracking-wide">Email Address</label>
                  <input
                    type="email"
                    name="email"
                    placeholder="you@example.com"
                    className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-gray-600 mb-1 uppercase tracking-wide">Service Needed</label>
                  <select
                    name="service"
                    className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                  >
                    <option value="">Select service...</option>
                    <option>Emergency Repair</option>
                    <option>Diagnostic / Non-Emergency Repair</option>
                    <option>Quarterly Maintenance Plan</option>
                    <option>Semi-Annual Maintenance Plan</option>
                    <option>Annual Maintenance Plan</option>
                    <option>Custom / Multi-Unit Agreement</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-semibold text-gray-600 mb-1 uppercase tracking-wide">Details</label>
                  <textarea
                    name="message"
                    rows={3}
                    placeholder="Describe the issue or what you're looking for..."
                    className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100 resize-none"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 rounded-lg transition-colors text-base"
                >
                  Submit Request
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </main>
  )
}
