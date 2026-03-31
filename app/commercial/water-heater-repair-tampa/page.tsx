import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Commercial Water Heater Repair Tampa, FL | Tank & Tankless Systems',
  description:
    'Commercial water heater repair and replacement in Tampa Bay, FL. Tank, tankless, heat pump, and boiler systems for restaurants, hotels, offices & more. Call (813) 291-6146.',
  keywords: [
    'commercial water heater repair Tampa',
    'commercial water heater replacement Tampa FL',
    'commercial tankless water heater Tampa',
    'restaurant water heater repair Tampa',
    'hotel water heater Tampa Bay',
    'commercial hot water system Tampa',
    'water heater service Tampa',
    'commercial plumbing Tampa Bay',
  ],
  openGraph: {
    title: 'Commercial Water Heater Repair Tampa, FL | Tank & Tankless Systems',
    description:
      'Expert commercial water heater repair and replacement throughout Tampa Bay. All system types. Call North East Heating & Cooling: (813) 291-6146.',
    url: 'https://northeastheatingcooling.com/commercial/water-heater-repair-tampa',
    siteName: 'North East Heating & Cooling',
    locale: 'en_US',
    type: 'website',
  },
}

const systemTypes = [
  {
    title: 'Commercial Tank Water Heaters',
    detail:
      'Commercial storage tank water heaters — typically ranging from 40 to 120+ gallons — are the most common hot water solution for small to mid-size Tampa Bay businesses including offices, retail stores, hair salons, and small restaurants. Modern commercial tank heaters offer 90%+ thermal efficiency with properly insulated tanks and power vent or direct vent configurations. We repair and replace commercial gas and electric storage water heaters from all major manufacturers including A.O. Smith, Bradford White, Rheem, State Water Heaters, and Lochinvar.',
  },
  {
    title: 'Tankless (On-Demand) Commercial Water Heaters',
    detail:
      'Commercial tankless water heaters provide hot water on demand without storing a large volume, dramatically reducing standby heat loss and saving energy for Tampa Bay businesses that need hot water during peak periods but have low off-peak demand. Commercial tankless units from Rinnai, Navien, Noritz, and Bosch can be installed as standalone units or in cascaded arrays for higher-demand applications. We install, service, and repair commercial tankless systems, including descaling services critical for Tampa Bay\'s moderately hard water.',
  },
  {
    title: 'Commercial Heat Pump Water Heaters',
    detail:
      'Heat pump water heaters use refrigerant-cycle technology to move heat from surrounding air into the water tank rather than generating heat directly — achieving efficiency ratings (Energy Factor / UEF) of 3.0 to 4.0 compared to 0.9 for a standard electric tank heater. In Tampa Bay\'s warm climate, commercial heat pump water heaters are an excellent choice for businesses looking to significantly reduce water heating costs. The warm outdoor temperatures that make Tampa summers brutal actually make heat pump water heaters more efficient, maximizing ROI.',
  },
  {
    title: 'Commercial Water Heater Boilers & Hot Water Plants',
    detail:
      'Larger commercial properties — hotels, apartment complexes, hospitals, schools, and multi-tenant commercial buildings in Tampa Bay — use central hot water systems with commercial boilers, storage tanks, recirculation pumps, and heat exchangers to deliver hot water at scale. We service and repair commercial hot water boiler systems, semi-instantaneous heat exchangers, domestic hot water storage tanks, and recirculation systems that keep hot water available at all fixtures throughout large facilities.',
  },
  {
    title: 'Restaurant & Food Service Water Heaters',
    detail:
      'Tampa Bay restaurants, bars, and food service operations have some of the most demanding hot water requirements of any commercial application. Commercial dishwashers require hot water at specific temperatures and flow rates. High-temperature sanitizing rinse cycles demand consistent 180°F water. Large prep sinks require high instantaneous flow. We size and install dedicated commercial water heating systems designed specifically for food service applications, ensuring compliance with Florida Department of Business and Professional Regulation (DBPR) health inspection requirements.',
  },
]

const repairServices = [
  'Thermostat & temperature control replacement',
  'Heating element replacement (electric)',
  'Burner assembly cleaning & replacement (gas)',
  'Pilot light and igniter service',
  'Pressure relief valve (T&P valve) replacement',
  'Anode rod inspection and replacement',
  'Dip tube replacement',
  'Recirculation pump repair & replacement',
  'Expansion tank inspection & replacement',
  'Gas valve replacement',
  'Flue vent repair and reconnection',
  'Tankless unit descaling & flushing',
  'Scale and sediment flush (tank systems)',
  'Heat exchanger cleaning & inspection',
  'Controls and sequencer repair',
]

const industries = [
  {
    name: 'Restaurants & Bars',
    detail: 'High-volume hot water demand for dishwashing, sanitizing, prep sinks, and bar service. Code-compliant water temperatures for health inspections.',
  },
  {
    name: 'Hotels & Motels',
    detail: 'Reliable 24/7 hot water for guest rooms, laundry, pools, and food service. Central hot water plant service and individual unit repair.',
  },
  {
    name: 'Medical & Dental Offices',
    detail: 'Consistent hot water for hand-washing stations, sterilization equipment, and patient care. Legionella prevention through proper temperature maintenance.',
  },
  {
    name: 'Salons & Spas',
    detail: 'High instantaneous flow rates for shampoo bowls, treatment rooms, and facility operations throughout Tampa Bay.',
  },
  {
    name: 'Schools & Daycares',
    detail: 'Anti-scald requirements for student safety combined with high-volume capacity for cafeteria and restroom facilities.',
  },
  {
    name: 'Office Buildings',
    detail: 'Efficient water heating for restrooms and break rooms, often with significant energy savings potential from heat pump or tankless upgrades.',
  },
  {
    name: 'Fitness Centers & Gyms',
    detail: 'High peak demand during post-workout shower hours requires properly sized systems that don\'t run cold on busy Tampa Bay gym mornings.',
  },
  {
    name: 'Multi-Family Properties',
    detail: 'Central domestic hot water systems, individual unit water heaters, and recirculation system service for apartment complexes.',
  },
]

const floridaFactors = [
  {
    title: 'Tampa Bay Water Quality',
    detail:
      'Tampa Bay area municipalities draw from the Hillsborough River, Tampa Bay seawater desalination, and regional aquifer sources. While Tampa\'s municipal water is treated, it carries moderate hardness and mineral content that deposits scale inside water heaters, tankless heat exchangers, and anode rods. Annual flushing and inspection — and more frequent descaling for tankless units — is essential to maintain efficiency and extend equipment life.',
  },
  {
    title: 'Year-Round Hot Water Demand',
    detail:
      'Unlike northern climates where hot water demand peaks in winter, Tampa Bay commercial buildings use hot water year-round at consistent rates. This continuous operation means commercial water heaters accumulate run hours faster, wear out components more quickly, and should be inspected at least annually rather than every few years.',
  },
  {
    title: 'Hurricane & Storm Preparedness',
    detail:
      'Tampa Bay\'s hurricane season runs June through November. Commercial water heater gas connections, flue vents, and outdoor tankless units can be damaged by storm debris and high winds. Post-storm inspection of water heating equipment is a recommended step in any Tampa Bay business\'s hurricane recovery checklist.',
  },
  {
    title: 'Energy Efficiency Incentives',
    detail:
      'Florida businesses upgrading to commercial heat pump water heaters or high-efficiency tankless systems may qualify for federal tax credits under the Inflation Reduction Act and incentive programs from TECO Tampa Electric, Duke Energy Florida, and TECO Peoples Gas. We can help you identify available incentives when planning a commercial water heater replacement.',
  },
]

const faqs = [
  {
    q: 'How long do commercial water heaters last in Tampa Bay?',
    a: "Commercial storage tank water heaters typically last 8–12 years. Tankless commercial units often last 15–20 years with regular descaling service. Tampa Bay's mineral-bearing municipal water accelerates sediment and scale accumulation inside tank heaters, shortening service life if units are not flushed annually. Signs that a commercial water heater is nearing end of life include rumbling or popping noises (sediment buildup), rust-colored water, visible tank corrosion, or repeated repairs to the same system.",
  },
  {
    q: 'What should I do if my commercial water heater stops working?',
    a: "For a gas water heater, check that the pilot light is lit and the gas supply is on. For an electric unit, check the circuit breaker. If the unit is tripping the breaker or making unusual sounds, do not continue to operate it — call us for a diagnostic. If you have no hot water at all during business hours, we provide priority service for commercial water heater failures. Call (813) 291-6146 and describe the situation — we can often dispatch a technician within hours.",
  },
  {
    q: 'Is a tankless water heater right for my Tampa Bay commercial building?',
    a: "Tankless commercial water heaters are an excellent choice for businesses with variable or intermittent hot water demand — offices, salons, small restaurants, and retail spaces. For applications with simultaneous high-volume demand like large commercial kitchens or hotel laundry facilities, properly cascaded tankless systems or hybrid tankless-with-storage configurations are typically the best approach. We perform a hot water demand analysis before recommending any replacement system.",
  },
  {
    q: 'Do you service commercial water heaters on evenings and weekends?',
    a: "Yes. We provide emergency commercial water heater service 24/7, including weekends and holidays. For Tampa Bay restaurants that simply cannot operate without hot water, we treat these calls with the same urgency as commercial HVAC emergencies. Our technicians carry common commercial water heater parts on their service vehicles to facilitate same-visit repairs whenever possible.",
  },
  {
    q: 'How can I reduce my commercial water heating energy costs in Tampa Bay?',
    a: "The most impactful strategies for Tampa Bay businesses are: switching from electric storage tanks to heat pump water heaters (can cut energy use by 60-70%); upgrading to high-efficiency condensing tankless units; installing recirculation systems with demand controls to eliminate hot water waste; and ensuring the system is properly sized and programmed for your actual hot water usage patterns. We can perform a water heating energy audit and provide a cost-benefit analysis of upgrade options for your specific facility.",
  },
]

export default function CommercialWaterHeaterRepairPage() {
  return (
    <main className="font-sans text-gray-800">

      {/* Hero */}
      <section className="relative bg-[#0f1620] text-white py-20 px-4 overflow-hidden">
        {/* Background photo */}
        <div className="absolute inset-0">
          <img
            src="https://images.pexels.com/photos/7556587/pexels-photo-7556587.jpeg?auto=compress&cs=tinysrgb&w=1600"
            alt="Water heater repair and installation service"
            className="w-full h-full object-cover object-center opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0f1620]/80 via-[#0f1620]/60 to-[#0f1620]/40" />
        </div>
        <div className="relative z-10 max-w-5xl mx-auto">
          <p className="text-blue-300 text-sm font-semibold uppercase tracking-widest mb-3">
            Commercial Water Heating — Tampa Bay, FL
          </p>
          <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-5 max-w-3xl">
            Commercial Water Heater Repair &amp; Replacement in Tampa, FL
          </h1>
          <p className="text-blue-100 text-lg md:text-xl max-w-3xl mb-8 leading-relaxed">
            North East Heating &amp; Cooling provides expert commercial water heater repair and replacement
            throughout Tampa Bay — from tank and tankless systems for small businesses to central
            hot water plants for hotels, restaurants, and large commercial properties.
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
          <div className="flex items-center gap-2"><span className="text-orange-400 text-lg">✓</span> Tank &amp; Tankless Systems</div>
          <div className="flex items-center gap-2"><span className="text-orange-400 text-lg">✓</span> Florida Licensed &amp; Insured</div>
          <div className="flex items-center gap-2"><span className="text-orange-400 text-lg">✓</span> All Major Brands</div>
          <div className="flex items-center gap-2"><span className="text-orange-400 text-lg">✓</span> Free Replacement Estimates</div>
        </div>
      </section>

      {/* Intro */}
      <section className="bg-white py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="max-w-3xl">
            <h2 className="text-3xl font-bold text-gray-900 mb-5">
              Commercial Hot Water You Can Count On
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-4">
              Hot water is a non-negotiable utility for virtually every Tampa Bay commercial business.
              Restaurants can&apos;t pass health inspections without it. Hotels can&apos;t accommodate guests
              without it. Medical offices, salons, fitness centers, and office buildings all depend on
              reliable hot water for daily operations.
            </p>
            <p className="text-gray-600 text-lg leading-relaxed mb-4">
              Yet commercial water heaters are often overlooked until something goes wrong. In Tampa Bay&apos;s
              demanding climate — with year-round operation, moderately hard municipal water, and high
              ambient temperatures that affect heat pump efficiency — commercial water heaters face
              specific challenges that require experienced local service technicians who understand
              the equipment and the environment.
            </p>
            <p className="text-gray-600 text-lg leading-relaxed">
              Whether you need same-day emergency repair, a planned replacement, or guidance on upgrading
              to a more energy-efficient system, North East Heating &amp; Cooling is Tampa Bay&apos;s commercial
              water heating specialist. We service all system types, all major brands, and all commercial
              property types throughout Hillsborough and Pinellas counties.
            </p>
          </div>
        </div>
      </section>

      {/* System Types */}
      <section className="bg-gray-50 py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-3">
              Commercial Water Heater Systems We Service
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              We repair and replace every category of commercial water heating equipment used by
              Tampa Bay businesses.
            </p>
          </div>
          <div className="space-y-5">
            {systemTypes.map((system) => (
              <div key={system.title} className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm">
                <h3 className="text-lg font-bold text-blue-900 mb-3">{system.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{system.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Repair Services */}
      <section className="bg-[#0f1620] text-white py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold mb-3">Commercial Water Heater Repairs We Perform</h2>
            <p className="text-blue-200 max-w-2xl mx-auto">
              From quick component swaps to complex heat exchanger service, our technicians are
              equipped to handle commercial water heater repairs of all types.
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

      {/* Industries */}
      <section className="bg-white py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-3">
              Industries We Serve Across Tampa Bay
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Our commercial water heater technicians understand the specific requirements and
              compliance standards for every major commercial sector in Tampa Bay.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {industries.map((industry) => (
              <div key={industry.name} className="bg-gray-50 rounded-xl p-5 border border-gray-200">
                <h3 className="font-bold text-gray-900 mb-2">{industry.name}</h3>
                <p className="text-gray-600 text-xs leading-relaxed">{industry.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Florida Factors */}
      <section className="bg-gray-50 py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-3">
              Commercial Water Heating in Tampa Bay: What You Need to Know
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Local conditions affect how commercial water heaters perform, how long they last, and
              what type of system makes the most financial sense for your business.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {floridaFactors.map((factor) => (
              <div key={factor.title} className="bg-white rounded-xl p-6 border border-gray-200">
                <h3 className="text-lg font-bold text-blue-900 mb-3">{factor.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{factor.detail}</p>
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
              Commercial Water Heater Service Throughout Tampa Bay
            </h2>
            <p className="text-gray-600 max-w-2xl">
              We repair and replace commercial water heaters in Tampa, St. Petersburg, Clearwater,
              Brandon, Riverview, Wesley Chapel, Lutz, and all surrounding communities.{' '}
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
                Request Commercial Water Heater Service
              </h2>
              <p className="text-blue-100 text-lg mb-6 leading-relaxed">
                Call for emergency service 24/7, or fill out the form for a diagnostic appointment
                or free replacement estimate at your Tampa Bay facility.
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
                <Link href="/commercial/hvac-service-tampa" className="block text-blue-300 hover:text-white hover:underline">Commercial HVAC Maintenance →</Link>
                <Link href="/residential/water-heater-repair-tampa" className="block text-blue-300 hover:text-white hover:underline">Residential Water Heater Service →</Link>
              </div>
            </div>
            <form className="bg-white rounded-2xl p-7 text-gray-900 shadow-xl">
              <h3 className="text-xl font-bold text-gray-800 mb-5">Request Service or Free Estimate</h3>
              <div className="space-y-4">
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
                  <label className="block text-xs font-semibold text-gray-600 mb-1 uppercase tracking-wide">Contact Name</label>
                  <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-gray-600 mb-1 uppercase tracking-wide">Phone</label>
                  <input
                    type="tel"
                    name="phone"
                    placeholder="(813) 555-0100"
                    className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-gray-600 mb-1 uppercase tracking-wide">Email</label>
                  <input
                    type="email"
                    name="email"
                    placeholder="you@example.com"
                    className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-gray-600 mb-1 uppercase tracking-wide">System Type</label>
                  <select
                    name="system_type"
                    className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                  >
                    <option value="">Select system type...</option>
                    <option>Commercial Storage Tank Water Heater</option>
                    <option>Tankless / On-Demand Water Heater</option>
                    <option>Heat Pump Water Heater</option>
                    <option>Commercial Boiler / Hot Water Plant</option>
                    <option>Recirculation System</option>
                    <option>Not Sure — Need Assessment</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-semibold text-gray-600 mb-1 uppercase tracking-wide">Service Needed</label>
                  <select
                    name="service"
                    className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                  >
                    <option value="">Select service...</option>
                    <option>Emergency Repair — No Hot Water</option>
                    <option>Diagnostic / Non-Emergency Repair</option>
                    <option>Annual Maintenance / Flush</option>
                    <option>Replacement Estimate</option>
                    <option>Tankless Descaling Service</option>
                    <option>Energy Efficiency Upgrade Consultation</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-semibold text-gray-600 mb-1 uppercase tracking-wide">Additional Details</label>
                  <textarea
                    name="message"
                    rows={3}
                    placeholder="Describe the issue, system age, or any other relevant details..."
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
