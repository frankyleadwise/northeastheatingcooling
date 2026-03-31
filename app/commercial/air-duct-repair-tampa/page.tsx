import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Commercial Air Duct Repair Tampa, FL | Duct Sealing & Replacement',
  description:
    'Commercial air duct repair, sealing, and replacement in Tampa Bay, FL. Improve indoor air quality, reduce energy waste, and meet Florida building codes. Call (813) 291-6146.',
  keywords: [
    'commercial air duct repair Tampa',
    'commercial duct sealing Tampa FL',
    'commercial ductwork replacement Tampa',
    'duct leak detection Tampa Bay',
    'commercial IAQ Tampa',
    'air duct repair Tampa Bay',
    'commercial ventilation Tampa',
    'duct repair Tampa FL',
  ],
  openGraph: {
    title: 'Commercial Air Duct Repair Tampa, FL | Duct Sealing & Replacement',
    description:
      'Expert commercial duct repair, sealing, and replacement throughout Tampa Bay. Improve air quality and cut energy waste. Call (813) 291-6146.',
    url: 'https://northeastheatingcooling.com/commercial/air-duct-repair-tampa',
    siteName: 'North East Heating & Cooling',
    locale: 'en_US',
    type: 'website',
  },
}

const ductServices = [
  {
    title: 'Duct Leak Detection & Testing',
    detail:
      'The EPA estimates that the average commercial building loses 20–30% of conditioned air through duct leaks. In Tampa Bay\'s hot, humid climate, that air loss translates directly to higher utility bills, reduced cooling capacity, and potential moisture intrusion into unconditioned spaces. We use duct blaster testing and pressure diagnostics to precisely locate and quantify leaks before recommending the appropriate repair strategy.',
  },
  {
    title: 'Aeroseal Commercial Duct Sealing',
    detail:
      'For buildings where ductwork is inaccessible in walls, ceilings, or under slabs, Aeroseal duct sealing is the most effective solution. This patented process injects a water-based sealant polymer into the duct system under pressure. The particles circulate through the ductwork and bond to the edges of leaks from the inside out — sealing gaps up to 5/8" without tearing open walls or ceilings. Ideal for occupied commercial buildings where minimal disruption is critical.',
  },
  {
    title: 'Manual Duct Sealing & Mastic Application',
    detail:
      'For accessible ductwork in mechanical rooms, attics, or exposed ceiling plenum spaces, we apply UL-181-compliant mastic sealant and fiberglass mesh tape to all joints, seams, and connections. Properly sealed duct connections are essential for maintaining static pressure, system efficiency, and IAQ in Florida\'s commercial buildings.',
  },
  {
    title: 'Duct Insulation Repair & Replacement',
    detail:
      'In Tampa Bay\'s climate, duct insulation is as important as the ductwork itself. Uninsulated or damaged duct insulation in unconditioned attic spaces — where temperatures regularly exceed 140°F in summer — causes massive heat gain that severely reduces cooling efficiency. We repair, replace, and upgrade duct insulation to current Florida Energy Code standards, typically R-8 minimum for attic runs.',
  },
  {
    title: 'Full Ductwork Replacement',
    detail:
      'When ductwork reaches end of life — typically 15–25 years for flex duct and 20–30 years for sheet metal — repair is no longer cost-effective. We design and install complete commercial duct replacement systems using properly sized ducts that deliver balanced airflow throughout your building. New duct systems eliminate accumulated biological contaminants, restore full system capacity, and can dramatically improve both comfort and indoor air quality.',
  },
  {
    title: 'Airflow Balancing & Rebalancing',
    detail:
      'Uneven temperatures between offices, conference rooms, or zones are a common complaint in Tampa Bay commercial buildings. Improper airflow balance causes some areas to be over-cooled while others remain uncomfortably hot — wasting energy while reducing occupant comfort and productivity. Our technicians use calibrated airflow hoods and static pressure gauges to balance supply and return registers throughout your duct system.',
  },
]

const iaqBenefits = [
  {
    title: 'Mold & Mildew Prevention',
    detail:
      'Leaky, unsealed ducts in Tampa Bay\'s humid climate draw in unconditioned outdoor air loaded with moisture and biological contaminants. Proper duct sealing keeps outdoor humidity out of your air distribution system, preventing the condensation and mold growth that can contaminate indoor air and create health liability.',
  },
  {
    title: 'Reduced Dust & Allergens',
    detail:
      'Duct leaks in unconditioned spaces pull in insulation fibers, dust, rodent dander, and pest debris from attics and wall cavities. In medical offices, restaurants, and schools, this kind of contamination is unacceptable. Sealed ducts keep your distributed air clean from the AHU to the diffuser.',
  },
  {
    title: 'Improved Ventilation Effectiveness',
    detail:
      'When duct leaks short-circuit your ventilation system, fresh outdoor air from your DOAS or economizer may never reach occupied zones. Sealed, balanced ductwork ensures that the ventilation air you\'re paying to condition actually reaches the people who need it — improving both comfort and ASHRAE 62.1 compliance.',
  },
  {
    title: 'Lower Humidity in Occupied Spaces',
    detail:
      'Duct leakage is one of the most underdiagnosed causes of chronic humidity problems in Tampa Bay commercial buildings. When supply ductwork leaks into unconditioned spaces, less dehumidified air reaches occupied zones — often requiring the thermostat to be set lower just to achieve acceptable humidity, wasting significant energy.',
  },
]

const energySavings = [
  { metric: '20–30%', label: 'Typical conditioned air lost through duct leaks in commercial buildings' },
  { metric: 'Up to 25%', label: 'Energy savings achievable through commercial duct sealing in Florida' },
  { metric: '< 5%', label: 'Target duct leakage rate after professional sealing and repair' },
  { metric: '2–4 Yrs', label: 'Typical payback period for commercial duct sealing investment in Tampa Bay' },
]

const faqs = [
  {
    q: 'How do I know if my commercial building has duct leaks?',
    a: "Common signs include rooms or zones that never reach temperature setpoint, unusually high utility bills, excessive dust on supply registers, humidity problems in specific areas of the building, or a system that runs constantly without adequately cooling the space. The only definitive way to quantify duct leakage is a professional duct blaster test, which we can perform as a standalone diagnostic or as part of a broader HVAC assessment.",
  },
  {
    q: 'Is duct sealing or duct replacement more cost-effective for my Tampa Bay commercial building?',
    a: "It depends on the age and condition of your ductwork. Flex duct and sheet metal ductwork that is structurally sound but leaky at joints and seams is an excellent candidate for sealing — often at a fraction of the cost of replacement with a payback period of just a few years. Ductwork that is collapsed, severely deteriorated, undersized, or heavily contaminated should be replaced rather than sealed.",
  },
  {
    q: 'Can duct work be repaired or sealed without disrupting my business?',
    a: "In most cases, yes. Manual duct sealing in accessible areas can be performed with minimal disruption. Aeroseal duct sealing is specifically designed for occupied buildings — the process can typically be completed in a single day per zone and does not require tearing into walls or ceilings. We schedule all commercial duct work around your business hours when possible.",
  },
  {
    q: 'Does Florida building code require duct testing for commercial buildings?',
    a: "Florida Energy Code (based on ASHRAE 90.1) does require duct testing for new commercial construction and major system replacements. Beyond code compliance, duct testing is an excellent diagnostic tool for any commercial building experiencing comfort, humidity, or energy efficiency issues. We can provide documentation and test reports for building permit compliance.",
  },
  {
    q: 'Does duct sealing help with commercial building odors?',
    a: "Yes — especially in Tampa Bay commercial buildings where ductwork runs through unconditioned attic spaces. Duct leaks allow outdoor air, pest-related odors, insulation off-gassing, and other contaminants to enter the air supply stream. Sealing these leaks can significantly improve indoor air quality and eliminate mystery odors that are otherwise difficult to trace.",
  },
]

export default function CommercialAirDuctRepairPage() {
  return (
    <main className="font-sans text-gray-800">

      {/* Hero */}
      <section className="relative bg-[#0f1620] text-white py-20 px-4 overflow-hidden">
        {/* Background photo */}
        <div className="absolute inset-0">
          <img
            src="https://images.pexels.com/photos/7534294/pexels-photo-7534294.jpeg?auto=compress&cs=tinysrgb&w=1600"
            alt="Air duct repair and replacement service"
            className="w-full h-full object-cover object-center opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0f1620]/80 via-[#0f1620]/60 to-[#0f1620]/40" />
        </div>
        <div className="relative z-10 max-w-5xl mx-auto">
          <p className="text-blue-300 text-sm font-semibold uppercase tracking-widest mb-3">
            Commercial Ductwork — Tampa Bay, FL
          </p>
          <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-5 max-w-3xl">
            Commercial Air Duct Repair &amp; Replacement in Tampa, FL
          </h1>
          <p className="text-blue-100 text-lg md:text-xl max-w-3xl mb-8 leading-relaxed">
            Leaking, damaged, or aging commercial ductwork wastes energy, undermines indoor air quality,
            and prevents your HVAC system from doing its job. North East Heating &amp; Cooling provides
            expert duct leak detection, sealing, and full replacement throughout Tampa Bay.
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
              Get a Free Assessment
            </a>
          </div>
        </div>
      </section>

      {/* Trust Bar */}
      <section className="bg-[#0f1620] text-white py-5 px-4">
        <div className="max-w-5xl mx-auto flex flex-wrap justify-center gap-8 text-sm font-medium">
          <div className="flex items-center gap-2"><span className="text-orange-400 text-lg">✓</span> Duct Blaster Testing</div>
          <div className="flex items-center gap-2"><span className="text-orange-400 text-lg">✓</span> Aeroseal Certified</div>
          <div className="flex items-center gap-2"><span className="text-orange-400 text-lg">✓</span> Florida Code Compliant</div>
          <div className="flex items-center gap-2"><span className="text-orange-400 text-lg">✓</span> Minimal Business Disruption</div>
          <div className="flex items-center gap-2"><span className="text-orange-400 text-lg">✓</span> Free Commercial Estimates</div>
        </div>
      </section>

      {/* Intro */}
      <section className="bg-white py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="max-w-3xl">
            <h2 className="text-3xl font-bold text-gray-900 mb-5">
              The Hidden Cost of Duct Leaks in Tampa Bay Commercial Buildings
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-4">
              Most Tampa Bay business owners and property managers focus on their HVAC equipment — the
              rooftop units, air handlers, and chillers that they can see. But the ductwork that distributes
              conditioned air throughout a commercial building is often overlooked, and leaky ducts can
              silently waste 20–30% of all the energy your HVAC system produces.
            </p>
            <p className="text-gray-600 text-lg leading-relaxed mb-4">
              In Tampa Bay, the consequences of duct leakage are amplified by the climate. When supply ducts
              leak conditioned air into a 140°F attic space, that energy is simply lost. When return duct
              leaks pull unconditioned 90°F, 85%-humidity outdoor air into the return plenum, your air handler
              must work dramatically harder to cool and dehumidify it — driving up energy costs and straining
              equipment. Over time, this moisture infiltration can cause mold growth inside the duct system,
              degrading indoor air quality for employees and customers alike.
            </p>
            <p className="text-gray-600 text-lg leading-relaxed">
              North East Heating &amp; Cooling provides comprehensive commercial duct leak detection, sealing,
              and replacement services throughout Tampa Bay. Our approach starts with diagnostic testing to
              accurately quantify the problem, then provides you with a cost-benefit analysis of repair
              options so you can make an informed investment decision.
            </p>
          </div>
        </div>
      </section>

      {/* Energy Savings Stats */}
      <section className="bg-gray-50 py-12 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {energySavings.map((stat) => (
              <div key={stat.metric} className="bg-white rounded-xl p-6 border border-gray-200 text-center shadow-sm">
                <div className="text-3xl font-black text-orange-500 mb-2">{stat.metric}</div>
                <p className="text-gray-600 text-sm leading-snug">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Duct Services */}
      <section className="bg-white py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-3">
              Our Commercial Duct Repair &amp; Replacement Services
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              We offer every level of commercial ductwork service, from diagnostic testing through
              full system replacement — tailored to your building and budget.
            </p>
          </div>
          <div className="space-y-6">
            {ductServices.map((service) => (
              <div key={service.title} className="bg-gray-50 rounded-xl p-6 border border-gray-200">
                <h3 className="text-lg font-bold text-blue-900 mb-3">{service.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{service.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* IAQ Section */}
      <section className="bg-[#0f1620] text-white py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold mb-3">
              Indoor Air Quality Benefits for Tampa Bay Commercial Buildings
            </h2>
            <p className="text-blue-200 max-w-2xl mx-auto">
              In Florida&apos;s humid climate, duct integrity is directly tied to the air quality your
              employees and customers breathe every day.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {iaqBenefits.map((benefit) => (
              <div key={benefit.title} className="bg-[#0f1620] rounded-xl p-6">
                <h3 className="font-bold text-white mb-3">{benefit.title}</h3>
                <p className="text-blue-200 text-sm leading-relaxed">{benefit.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Florida Code Compliance */}
      <section className="bg-gray-50 py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-5">
                Florida Energy Code &amp; Compliance
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Florida&apos;s commercial energy code — based on ASHRAE 90.1 — imposes specific requirements on
                duct construction, insulation, and sealing. New commercial HVAC installations and major
                system replacements require duct systems that meet maximum leakage rates, minimum insulation
                values, and construction standards verified by third-party testing.
              </p>
              <p className="text-gray-600 leading-relaxed mb-4">
                North East Heating &amp; Cooling is fully versed in Florida Building Code commercial mechanical
                requirements. We design and install duct systems that pass duct blaster testing at first
                inspection, provide all required documentation for permit closeout, and help property owners
                demonstrate compliance for insurance, LEED certification, and tenant requirements.
              </p>
              <p className="text-gray-600 leading-relaxed">
                For existing commercial buildings undergoing renovations or experiencing recurring HVAC
                performance issues, we can assess whether current ductwork meets code and recommend the
                most cost-effective path to compliance.
              </p>
            </div>
            <div className="space-y-4">
              <div className="bg-white rounded-xl p-5 border border-gray-200">
                <h3 className="font-bold text-gray-900 mb-2">ASHRAE 90.1 Duct Sealing</h3>
                <p className="text-gray-600 text-sm">All duct connections, seams, and joints must be sealed with UL 181-compliant materials. We meet this standard on every commercial installation.</p>
              </div>
              <div className="bg-white rounded-xl p-5 border border-gray-200">
                <h3 className="font-bold text-gray-900 mb-2">R-8 Minimum Duct Insulation</h3>
                <p className="text-gray-600 text-sm">Florida Energy Code requires R-8 minimum insulation for supply and return ducts in unconditioned spaces. We verify and upgrade insulation to meet current requirements.</p>
              </div>
              <div className="bg-white rounded-xl p-5 border border-gray-200">
                <h3 className="font-bold text-gray-900 mb-2">Duct Pressure Testing</h3>
                <p className="text-gray-600 text-sm">We perform and document duct blaster pressure tests to quantify system leakage and verify compliance with Florida Energy Code maximum leakage rates.</p>
              </div>
            </div>
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
              Commercial Duct Services Throughout Tampa Bay
            </h2>
            <p className="text-gray-600 max-w-2xl">
              We serve commercial buildings throughout Tampa, St. Petersburg, Clearwater, Brandon,
              Riverview, Wesley Chapel, Lutz, and all surrounding communities.{' '}
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
                Request a Commercial Duct Assessment
              </h2>
              <p className="text-blue-100 text-lg mb-6 leading-relaxed">
                Contact us to schedule a commercial duct leak diagnostic or get a free estimate for
                duct sealing or replacement at your Tampa Bay facility.
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
                <Link href="/residential/air-duct-repair-tampa" className="block text-blue-300 hover:text-white hover:underline">Residential Duct Repair →</Link>
              </div>
            </div>
            <form className="bg-white rounded-2xl p-7 text-gray-900 shadow-xl">
              <h3 className="text-xl font-bold text-gray-800 mb-5">Get a Free Duct Assessment</h3>
              <div className="space-y-4">
                <div>
                  <label className="block text-xs font-semibold text-gray-600 mb-1 uppercase tracking-wide">Business / Property Name</label>
                  <input
                    type="text"
                    name="business"
                    placeholder="Your Business or Property"
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
                  <label className="block text-xs font-semibold text-gray-600 mb-1 uppercase tracking-wide">Service Needed</label>
                  <select
                    name="service"
                    className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                  >
                    <option value="">Select service...</option>
                    <option>Duct Leak Diagnostic / Testing</option>
                    <option>Aeroseal Duct Sealing</option>
                    <option>Manual Duct Sealing</option>
                    <option>Duct Insulation Repair / Upgrade</option>
                    <option>Full Duct Replacement</option>
                    <option>Airflow Balancing</option>
                    <option>Not Sure — Need Assessment</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-semibold text-gray-600 mb-1 uppercase tracking-wide">Details</label>
                  <textarea
                    name="message"
                    rows={3}
                    placeholder="Building type, size, current issues, or any other details..."
                    className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100 resize-none"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 rounded-lg transition-colors text-base"
                >
                  Request Free Assessment
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </main>
  )
}
