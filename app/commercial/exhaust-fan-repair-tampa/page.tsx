import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Commercial Exhaust Fan Repair Tampa, FL | Restaurant & Industrial Ventilation',
  description:
    'Commercial exhaust fan repair and replacement in Tampa Bay, FL. Kitchen exhaust systems, industrial ventilation, code compliance. Call North East Heating & Cooling: (813) 291-6146.',
  keywords: [
    'commercial exhaust fan repair Tampa',
    'restaurant exhaust fan repair Tampa FL',
    'kitchen exhaust repair Tampa Bay',
    'industrial ventilation repair Tampa',
    'commercial ventilation Tampa',
    'exhaust fan motor replacement Tampa',
    'rooftop exhaust fan Tampa',
    'commercial hood exhaust Tampa',
  ],
  openGraph: {
    title: 'Commercial Exhaust Fan Repair Tampa, FL | Restaurant & Industrial Ventilation',
    description:
      'Expert commercial exhaust fan repair, motor replacement, and ventilation service throughout Tampa Bay. Call (813) 291-6146.',
    url: 'https://northeastheatingcooling.com/commercial/exhaust-fan-repair-tampa',
    siteName: 'North East Heating & Cooling',
    locale: 'en_US',
    type: 'website',
  },
}

const systemTypes = [
  {
    title: 'Restaurant & Commercial Kitchen Exhaust Systems',
    detail:
      'Commercial kitchen exhaust systems are among the most demanding mechanical components in any Tampa Bay food service operation. Kitchen exhaust fans remove heat, smoke, grease-laden vapors, and combustion byproducts from cooking equipment — operating at high temperatures and under continuous grease exposure that accelerates wear on all components. We repair and service all types of commercial kitchen exhaust fans including upblast fans, utility set fans, and inline centrifugal exhaust units from manufacturers like Greenheck, Cook, Loren Cook, Strobic, and Penn. Regular service is essential for both equipment longevity and fire code compliance under NFPA 96.',
  },
  {
    title: 'Make-Up Air (Compensating Hood) Systems',
    detail:
      'Every commercial exhaust system that removes air from a building must have a corresponding make-up air source. In Tampa Bay restaurants and commercial kitchens, an improperly sized or malfunctioning make-up air system creates negative building pressure, causes back-drafting of combustion appliances, makes doors difficult to open, allows unconditioned outside air to flood the kitchen, and dramatically increases cooling loads. We service, repair, and balance exhaust and make-up air systems to ensure proper pressurization and energy-efficient operation.',
  },
  {
    title: 'Rooftop Power Exhaust Ventilators',
    detail:
      'Warehouses, retail stores, offices, and industrial facilities throughout Tampa Bay use rooftop power exhaust fans to expel heat buildup, maintain code-required ventilation rates, and control building pressure. Tampa Bay\'s coastal environment accelerates corrosion on fan housings, shafts, and bearings, while the near-continuous operating schedule wears out motors and belts faster than in northern climates. We repair, replace, and service all types of commercial rooftop exhaust fans.',
  },
  {
    title: 'Industrial Process Ventilation',
    detail:
      'Manufacturing facilities, body shops, chemical storage areas, and paint booths in Tampa Bay require specialized industrial exhaust systems engineered for their specific contaminant and airflow requirements. We service industrial exhaust fans including belt-driven industrial exhaust fans, mixed-flow fans, pressure blowers, and hazardous location (explosion-proof) fans, ensuring your ventilation system meets OSHA and Florida DEP requirements.',
  },
  {
    title: 'Parking Garage Ventilation Systems',
    detail:
      'Multi-level parking structures in Tampa Bay are required by Florida Building Code to maintain CO concentrations below dangerous thresholds. Parking garage ventilation systems rely on a network of fans, sensors, and controls that must be regularly maintained and promptly repaired. We service supply and exhaust fans, CO sensor systems, and variable-frequency drive (VFD) controls for commercial parking structures.',
  },
  {
    title: 'Restroom & General Building Exhaust Fans',
    detail:
      'Commercial restroom, break room, and general building exhaust fans may seem minor, but a failed exhaust fan in a Tampa Bay commercial restroom quickly creates humidity, odor, and air quality problems for employees and customers. We repair and replace all types of commercial ceiling and wall exhaust fans, including inline exhaust fans for multi-floor commercial restroom stacks.',
  },
]

const repairServices = [
  'Exhaust fan motor replacement',
  'Belt, sheave & pulley replacement',
  'Fan blade & wheel replacement',
  'Bearing replacement & lubrication',
  'Shaft seal replacement',
  'VFD / motor controller replacement',
  'Exhaust duct repair & rerouting',
  'Hood and grease filter service',
  'Fan housing rust repair & coating',
  'Damper repair & replacement',
  'Control wiring and switch replacement',
  'Exhaust system balancing & testing',
]

const codeCompliance = [
  {
    title: 'NFPA 96 — Commercial Kitchen Exhaust',
    detail:
      'NFPA 96 Standard for Ventilation Control and Fire Protection of Commercial Cooking Operations requires commercial kitchen exhaust fans to be inspected and cleaned at intervals based on cooking volume. Grease accumulation in exhaust fans is a major fire risk. Our technicians service and document kitchen exhaust systems to NFPA 96 standards and can work alongside your hood cleaning contractor.',
  },
  {
    title: 'Florida Mechanical Code — Ventilation Rates',
    detail:
      'The Florida Building Code (Mechanical) prescribes minimum exhaust airflow rates for restrooms, kitchens, garages, and other commercial spaces based on area and occupancy. When exhaust fans fail or degrade, buildings can fall out of compliance. We verify and restore exhaust airflow to code-required minimums.',
  },
  {
    title: 'IMC Section 505 — Commercial Kitchen Hood Balance',
    detail:
      'Commercial kitchen ventilation systems must maintain proper pressure balance between exhaust and make-up air. Imbalanced systems cause back-drafting, excess heat in the kitchen, comfort complaints in dining areas, and increased HVAC energy costs. We perform exhaust / make-up air balancing and document results for health department and fire marshal inspections.',
  },
]

const faqs = [
  {
    q: 'How do I know if my commercial exhaust fan needs repair?',
    a: "Common warning signs include unusual noise (squealing, grinding, or rattling), reduced airflow at hood or exhaust registers, a fan that runs but doesn't move adequate air, visible damage to the fan housing or blades, motor that trips overload protection and shuts down, excessive vibration, or grease accumulation on the roof around the exhaust fan discharge. In commercial kitchens, a clear sign is heat and smoke buildup during cooking when the hood should be clearing the air.",
  },
  {
    q: 'Can you repair a commercial exhaust fan motor, or does the whole unit need to be replaced?',
    a: "In many cases, the motor is the failed component and can be replaced independently, saving the cost of a complete fan assembly. We stock common commercial exhaust fan motor frames and can source specialty motors quickly through our commercial supply network. However, if the fan wheel, housing, or shaft are also damaged, or if the unit is very old and replacement parts are unavailable, full unit replacement is more economical.",
  },
  {
    q: 'How often should commercial kitchen exhaust fans be serviced?',
    a: "At minimum, commercial kitchen exhaust fans should be inspected and lubricated at least twice annually. High-volume kitchens operating 12+ hours per day should have quarterly inspections. Grease filters in the hood should be cleaned weekly or more frequently depending on cooking volume. NFPA 96 inspection and cleaning intervals for the full exhaust system range from monthly (for 24-hour operations using wood or charcoal) to annually (for low-volume operations).",
  },
  {
    q: 'Do you service exhaust fans for restaurants that are open during the day?',
    a: "Yes. We schedule commercial kitchen exhaust fan service and repair around your operating hours whenever possible. Many repairs — including motor, belt, and bearing replacements — can be completed during early morning hours or after closing to avoid disrupting your kitchen operations. Emergency repairs can be dispatched at any time of day or night.",
  },
  {
    q: 'Are there energy-efficient options when replacing a commercial exhaust fan?',
    a: "Absolutely. Modern commercial exhaust fans with variable-frequency drives (VFDs) can reduce fan motor energy consumption by 50% or more by varying fan speed based on actual ventilation demand. Demand-controlled kitchen ventilation (DCKV) systems use sensors to automatically adjust exhaust and make-up air flow rates based on cooking activity — a technology that Tampa Bay restaurant operators can use to significantly reduce both energy costs and HVAC cooling loads.",
  },
]

export default function CommercialExhaustFanRepairPage() {
  return (
    <main className="font-sans text-gray-800">

      {/* Hero */}
      <section className="relative bg-[#0f1620] text-white py-20 px-4 overflow-hidden">
        {/* Background photo */}
        <div className="absolute inset-0">
          <img
            src="https://images.pexels.com/photos/5539540/pexels-photo-5539540.jpeg?auto=compress&cs=tinysrgb&w=1600"
            alt="Exhaust fan and ventilation repair service"
            className="w-full h-full object-cover object-center opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0f1620]/95 via-[#0f1620]/80 to-[#0f1620]/60" />
        </div>
        <div className="relative z-10 max-w-5xl mx-auto">
          <p className="text-blue-300 text-sm font-semibold uppercase tracking-widest mb-3">
            Commercial Ventilation — Tampa Bay, FL
          </p>
          <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-5 max-w-3xl">
            Commercial Exhaust Fan Repair Services in Tampa, FL
          </h1>
          <p className="text-blue-100 text-lg md:text-xl max-w-3xl mb-8 leading-relaxed">
            From restaurant kitchen exhaust systems and industrial ventilation to rooftop power
            exhaust fans, North East Heating &amp; Cooling provides expert commercial exhaust fan
            repair, motor replacement, and ventilation system service throughout Tampa Bay.
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
              Schedule Service
            </a>
          </div>
        </div>
      </section>

      {/* Trust Bar */}
      <section className="bg-[#0f1620] text-white py-5 px-4">
        <div className="max-w-5xl mx-auto flex flex-wrap justify-center gap-8 text-sm font-medium">
          <div className="flex items-center gap-2"><span className="text-orange-400 text-lg">✓</span> 24/7 Emergency Service</div>
          <div className="flex items-center gap-2"><span className="text-orange-400 text-lg">✓</span> NFPA 96 Compliant</div>
          <div className="flex items-center gap-2"><span className="text-orange-400 text-lg">✓</span> Florida Licensed &amp; Insured</div>
          <div className="flex items-center gap-2"><span className="text-orange-400 text-lg">✓</span> All Commercial Fan Brands</div>
          <div className="flex items-center gap-2"><span className="text-orange-400 text-lg">✓</span> Kitchen to Industrial</div>
        </div>
      </section>

      {/* Intro */}
      <section className="bg-white py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="max-w-3xl">
            <h2 className="text-3xl font-bold text-gray-900 mb-5">
              Why Commercial Exhaust Systems Demand Specialized Service in Tampa Bay
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-4">
              Commercial exhaust fans are among the hardest-working mechanical components in any Tampa
              Bay commercial building. Kitchen exhaust systems run throughout every service period.
              Warehouse and industrial fans combat 95°F+ summer heat. Parking garage fans operate
              continuously to protect occupants from carbon monoxide. All of these systems face Tampa
              Bay&apos;s unique combination of high humidity, salt air exposure, and subtropical heat that
              accelerates wear on motors, bearings, housings, and electrical components.
            </p>
            <p className="text-gray-600 text-lg leading-relaxed mb-4">
              A failed exhaust fan is never a minor inconvenience. For a Tampa restaurant, it can mean
              shutting down the kitchen. For a warehouse, it can mean unbearable working conditions and
              OSHA exposure. For a medical facility, it can mean IAQ failures and regulatory scrutiny.
              Prompt, expert repair by technicians who understand commercial exhaust systems is essential.
            </p>
            <p className="text-gray-600 text-lg leading-relaxed">
              North East Heating &amp; Cooling has the experience, parts inventory, and technical knowledge
              to diagnose and repair commercial exhaust fans quickly — often on the same day — throughout
              Tampa Bay.
            </p>
          </div>
        </div>
      </section>

      {/* System Types */}
      <section className="bg-gray-50 py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-3">
              Commercial Exhaust Systems We Service
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              We repair and service every type of commercial exhaust and ventilation system across
              Hillsborough, Pinellas, and surrounding counties.
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

      {/* Repair Services List */}
      <section className="bg-[#0f1620] text-white py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold mb-3">Exhaust Fan Repair Services We Provide</h2>
            <p className="text-blue-200 max-w-2xl mx-auto">
              Our service trucks are stocked with the most common commercial exhaust fan parts
              for first-visit repairs.
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

      {/* Code Compliance */}
      <section className="bg-white py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-3">
              Code Compliance for Tampa Bay Commercial Exhaust Systems
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Commercial exhaust systems are subject to multiple overlapping codes and standards.
              Our technicians keep Tampa Bay businesses in full compliance.
            </p>
          </div>
          <div className="space-y-5">
            {codeCompliance.map((code) => (
              <div key={code.title} className="bg-gray-50 rounded-xl p-6 border border-gray-200">
                <h3 className="text-lg font-bold text-blue-900 mb-3">{code.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{code.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-gray-50 py-16 px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-10 text-center">
            Frequently Asked Questions
          </h2>
          <div className="space-y-6">
            {faqs.map((faq) => (
              <div key={faq.q} className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm">
                <h3 className="font-bold text-gray-900 mb-3">{faq.q}</h3>
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
              Commercial Exhaust Fan Service Throughout Tampa Bay
            </h2>
            <p className="text-gray-600 max-w-2xl">
              We service restaurants, warehouses, medical facilities, and commercial properties in
              Tampa, St. Petersburg, Clearwater, Brandon, and all surrounding areas.{' '}
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
                Schedule Commercial Exhaust Fan Repair
              </h2>
              <p className="text-blue-100 text-lg mb-6 leading-relaxed">
                Call for emergency service, or use the form to schedule routine exhaust fan service or
                get a quote for replacement at your Tampa Bay business.
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
                <Link href="/residential/exhaust-fan-repair-tampa" className="block text-blue-300 hover:text-white hover:underline">Residential Exhaust Fan Repair →</Link>
              </div>
            </div>
            <form className="bg-white rounded-2xl p-7 text-gray-900 shadow-xl">
              <h3 className="text-xl font-bold text-gray-800 mb-5">Request Service</h3>
              <div className="space-y-4">
                <div>
                  <label className="block text-xs font-semibold text-gray-600 mb-1 uppercase tracking-wide">Business Name</label>
                  <input
                    type="text"
                    name="business"
                    placeholder="Your Restaurant or Business"
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
                  <label className="block text-xs font-semibold text-gray-600 mb-1 uppercase tracking-wide">Fan / System Type</label>
                  <select
                    name="fan_type"
                    className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                  >
                    <option value="">Select type...</option>
                    <option>Commercial Kitchen / Restaurant Exhaust</option>
                    <option>Make-Up Air System</option>
                    <option>Rooftop Power Exhaust Fan</option>
                    <option>Industrial / Process Ventilation</option>
                    <option>Parking Garage Ventilation</option>
                    <option>Restroom / General Building Exhaust</option>
                    <option>Not Sure</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-semibold text-gray-600 mb-1 uppercase tracking-wide">Description of Issue</label>
                  <textarea
                    name="message"
                    rows={3}
                    placeholder="Describe what's happening with your exhaust system..."
                    className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100 resize-none"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 rounded-lg transition-colors text-base"
                >
                  Request Service
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </main>
  )
}
