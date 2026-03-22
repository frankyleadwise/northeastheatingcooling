import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'HVAC Services in Clearwater, FL | North East Heating & Cooling',
  description:
    'Professional HVAC repair, AC installation, heating services, and air duct repair in Clearwater, FL. North East Heating & Cooling — call (813) 291-6146 for fast, reliable service.',
}

export default function ClearwaterPage() {
  return (
    <>
      <main>
        {/* Hero Banner */}
        <section className="bg-[#1e40af] text-white py-20 px-4">
          <div className="max-w-5xl mx-auto text-center">
            <p className="text-blue-200 text-sm font-semibold uppercase tracking-widest mb-3">
              Tampa Bay's Trusted HVAC Company
            </p>
            <h1 className="text-4xl sm:text-5xl font-extrabold leading-tight mb-5">
              HVAC Services in Clearwater, FL
            </h1>
            <p className="text-blue-100 text-lg sm:text-xl max-w-3xl mx-auto leading-relaxed mb-8">
              Expert heating, air conditioning, and ventilation services for Clearwater residents and businesses.
              Coastal climate specialists available for same-day and emergency service.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="tel:8132916146"
                className="inline-flex items-center gap-2 bg-white text-blue-800 font-bold px-7 py-3.5 rounded-lg hover:bg-blue-50 transition-colors shadow-lg text-lg"
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5" aria-hidden="true"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.4 2 2 0 0 1 3.6 1.22h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L7.91 8.8a16 16 0 0 0 6.29 6.29l.95-.95a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" /></svg>
                (813) 291-6146
              </a>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-red-600 hover:bg-blue-500 text-white font-bold px-7 py-3.5 rounded-lg transition-colors shadow-lg text-lg border border-red-400"
              >
                Request Free Estimate
              </Link>
            </div>
          </div>
        </section>

        {/* Intro */}
        <section className="bg-white py-16 px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-extrabold text-blue-900 mb-5">
              Clearwater's Choice for Professional HVAC Services
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Clearwater is one of the crown jewels of Florida's Gulf Coast, home to world-famous Clearwater
              Beach, a thriving downtown entertainment district, and residential neighborhoods that attract both
              year-round residents and seasonal snowbirds. With approximately 117,000 full-time residents —
              and tens of thousands more who visit or part-time in the area — Clearwater has a diverse housing
              stock ranging from mid-century beachside cottages to luxury waterfront condominiums and sprawling
              suburban developments east of US-19.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              Clearwater's proximity to the Gulf of Mexico creates a climate that is both beautiful and
              demanding on HVAC equipment. Salt-laden sea breezes accelerate corrosion on condenser coils and
              electrical components, while the city's subtropical heat and humidity keep air conditioners running
              for the better part of the year. North East Heating &amp; Cooling's technicians are well-versed
              in the specific challenges of servicing HVAC systems in coastal Pinellas County environments, and
              we can recommend corrosion-resistant components and protective coatings that significantly extend
              equipment life near the coast.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Whether you're in a beachside condo on Sand Key, a ranch home in Countryside, or a business on
              Cleveland Street, our technicians serve every part of Clearwater. Call us at{' '}
              <a href="tel:8132916146" className="text-blue-700 font-semibold hover:underline">(813) 291-6146</a>{' '}
              to get started.
            </p>
          </div>
        </section>

        {/* HVAC Repair */}
        <section className="bg-gray-50 py-16 px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-extrabold text-blue-900 mb-5">
              HVAC Repair Services in Clearwater, FL
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              A malfunctioning air conditioner on a hot Clearwater afternoon is never convenient. Our repair
              technicians prioritize fast response times and accurate first-visit diagnostics so you're not left
              suffering in the heat longer than necessary. We diagnose and repair refrigerant leaks, faulty
              capacitors, failed contactors, blower motor issues, frozen coils, drainage problems, and
              thermostat malfunctions across all major system brands.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              For Clearwater's coastal properties, we also offer coil cleaning services to remove salt and
              debris buildup that reduces heat transfer efficiency. Regular coil cleaning is one of the most
              cost-effective maintenance tasks for any Gulf-side property, and our team can build it into an
              annual maintenance plan that keeps your system performing at its best year-round.
            </p>
            <Link
              href="/residential/hvac-service-tampa"
              className="inline-flex items-center gap-2 bg-red-700 hover:bg-[#0f1620] text-white font-bold px-6 py-3 rounded-lg transition-colors"
            >
              View HVAC Repair Services &rarr;
            </Link>
          </div>
        </section>

        {/* AC Installation */}
        <section className="bg-white py-16 px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-extrabold text-blue-900 mb-5">
              AC Installation in Clearwater, FL
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              When the time comes to replace an aging air conditioner in your Clearwater home or business, the
              right installation makes all the difference. North East Heating &amp; Cooling recommends
              coastal-rated systems with enhanced corrosion-resistant coatings for properties within a few miles
              of the Gulf. These systems cost modestly more upfront but can last several years longer than
              standard equipment in salt air environments, making them a smart long-term investment.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              Our installation team handles load calculations, equipment selection, permit acquisition, and
              full system startup testing. We work with all major HVAC brands and can help you navigate
              available utility rebates from Duke Energy and state-sponsored efficiency programs that can
              significantly offset the cost of a new high-efficiency system. Ductless mini-split options are
              also available for Clearwater's vacation rentals and older homes without existing ductwork.
            </p>
            <Link
              href="/residential/hvac-installation-tampa-fl"
              className="inline-flex items-center gap-2 bg-red-700 hover:bg-[#0f1620] text-white font-bold px-6 py-3 rounded-lg transition-colors"
            >
              View AC Installation Services &rarr;
            </Link>
          </div>
        </section>

        {/* Heating Services */}
        <section className="bg-gray-50 py-16 px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-extrabold text-blue-900 mb-5">
              Heating Services in Clearwater, FL
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Clearwater's winters are generally mild, but the city's waterside location means cold fronts can
              arrive suddenly with significant temperature drops, especially overnight. When your heat pump
              struggles to maintain a comfortable temperature on a cold Clearwater night, our heating service
              team can respond quickly to diagnose and resolve the issue.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              We service and replace heat pumps throughout Clearwater, including the inspection of reversing
              valves, defrost cycles, auxiliary electric heat, and refrigerant charge. If your heat pump is
              more than 12–15 years old and requiring repeated repairs, we'll provide an honest assessment
              of whether repair or replacement is the more cost-effective path forward — without any pressure
              to upgrade if a repair is the better choice for your situation.
            </p>
            <Link
              href="/residential/hvac-service-tampa"
              className="inline-flex items-center gap-2 bg-red-700 hover:bg-[#0f1620] text-white font-bold px-6 py-3 rounded-lg transition-colors"
            >
              View Heating Services &rarr;
            </Link>
          </div>
        </section>

        {/* Air Duct Repair */}
        <section className="bg-white py-16 px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-extrabold text-blue-900 mb-5">
              Air Duct Repair in Clearwater, FL
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Clearwater's high humidity makes duct integrity especially important. Leaky ductwork doesn't just
              waste energy — in humid coastal air, it draws unconditioned moisture into your living spaces,
              potentially leading to mold growth in walls, ceilings, and the duct system itself. If you've
              noticed musty odors, uneven cooling, rooms that never seem to reach the set temperature, or a
              spike in your energy bills, your ductwork may be the culprit.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              Our duct team inspects your entire duct system, tests for leakage, and performs targeted repairs
              or full replacements as needed. We use high-quality mastic sealant, metallic tape, and insulated
              flex duct that resists Clearwater's humidity and temperature extremes. After sealing, we retest
              the system to verify that leakage has been reduced to acceptable levels and that airflow is
              properly balanced throughout your home.
            </p>
            <Link
              href="/residential/air-duct-repair-tampa"
              className="inline-flex items-center gap-2 bg-red-700 hover:bg-[#0f1620] text-white font-bold px-6 py-3 rounded-lg transition-colors"
            >
              View Air Duct Repair Services &rarr;
            </Link>
          </div>
        </section>

        {/* Commercial HVAC */}
        <section className="bg-gray-50 py-16 px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-extrabold text-blue-900 mb-5">
              Commercial HVAC Services in Clearwater, FL
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Clearwater's robust tourism industry, medical community centered around Morton Plant Hospital,
              and growing technology and business sectors all depend on reliable commercial HVAC systems.
              A system failure at a hotel, restaurant, or office building during peak season can be devastating
              to business. North East Heating &amp; Cooling provides commercial HVAC repair, installation,
              and preventive maintenance throughout Clearwater with the rapid response times that businesses
              demand.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              We service all commercial HVAC equipment including rooftop units, split systems, package units,
              and fan coil systems. Our commercial maintenance contracts are fully customizable to your
              business's schedule and budget, and our technicians are experienced working in occupied spaces
              with minimal disruption to your operations and customers.
            </p>
            <Link
              href="/commercial/hvac-service-tampa"
              className="inline-flex items-center gap-2 bg-red-700 hover:bg-[#0f1620] text-white font-bold px-6 py-3 rounded-lg transition-colors"
            >
              View Commercial HVAC Services &rarr;
            </Link>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="bg-white py-16 px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-extrabold text-blue-900 mb-8">
              Why Clearwater Residents Choose North East Heating &amp; Cooling
            </h2>
            <div className="grid sm:grid-cols-2 gap-5">
              {[
                { title: 'Gulf-Side HVAC Knowledge', desc: 'We know how salt air affects HVAC equipment and can recommend the right systems and maintenance plans for coastal Clearwater properties.' },
                { title: 'Same-Day Availability', desc: 'We offer same-day service calls throughout Clearwater, with emergency service available for urgent breakdowns.' },
                { title: 'Honest Estimates', desc: 'Every job starts with a written estimate. We explain what needs to be done and why before a single repair is made.' },
                { title: 'All Brands Serviced', desc: 'Our technicians are trained on all major HVAC brands and carry the parts most commonly needed for same-day repairs.' },
                { title: 'Residential & Commercial', desc: 'We serve Clearwater homeowners, landlords, vacation rental owners, and commercial businesses of all sizes.' },
                { title: 'Satisfaction Guaranteed', desc: 'Our commitment to quality extends beyond the job. If something isn\'t right, we come back and fix it — no questions asked.' },
              ].map((item) => (
                <div key={item.title} className="bg-blue-50 border border-blue-100 rounded-xl p-5">
                  <h3 className="font-bold text-blue-900 mb-2">{item.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Nearby Areas */}
        <section className="bg-gray-50 py-12 px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-extrabold text-blue-900 mb-4">
              Areas Near Clearwater We Also Serve
            </h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              Our service area extends throughout Pinellas and Hillsborough counties. Communities near
              Clearwater that we serve include:
            </p>
            <div className="flex flex-wrap gap-3">
              {[
                { name: 'St. Petersburg, FL', slug: 'st-petersburg-fl' },
                { name: 'Tampa, FL', slug: 'tampa-fl' },
                { name: 'Brandon, FL', slug: 'brandon-fl' },
                { name: 'Riverview, FL', slug: 'riverview-fl' },
              ].map((city) => (
                <Link
                  key={city.slug}
                  href={`/service-areas/${city.slug}`}
                  className="bg-white border border-blue-200 text-blue-700 font-semibold px-4 py-2 rounded-lg hover:bg-red-700 hover:text-white hover:border-blue-700 transition-colors text-sm"
                >
                  {city.name}
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-[#1e40af] py-16 px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-10 items-start">
              <div className="text-white">
                <h2 className="text-3xl font-extrabold mb-4">
                  Request a Free Consultation in Clearwater
                </h2>
                <p className="text-blue-100 leading-relaxed mb-6">
                  Get in touch with North East Heating &amp; Cooling for expert HVAC service throughout
                  Clearwater. We&apos;re ready to help you stay comfortable year-round.
                </p>
                <a href="tel:8132916146" className="flex items-center gap-3 text-white hover:text-blue-200 transition-colors mb-3">
                  <div className="w-10 h-10 bg-red-600 rounded-lg flex items-center justify-center shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5" aria-hidden="true"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.4 2 2 0 0 1 3.6 1.22h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L7.91 8.8a16 16 0 0 0 6.29 6.29l.95-.95a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" /></svg>
                  </div>
                  <div>
                    <p className="text-blue-200 text-xs">Call us anytime</p>
                    <p className="font-bold text-xl">(813) 291-6146</p>
                  </div>
                </a>
                <a href="mailto:office@northeastheatingcooling.com" className="flex items-center gap-3 text-white hover:text-blue-200 transition-colors">
                  <div className="w-10 h-10 bg-red-600 rounded-lg flex items-center justify-center shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5" aria-hidden="true"><rect x="2" y="4" width="20" height="16" rx="2" /><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" /></svg>
                  </div>
                  <div>
                    <p className="text-blue-200 text-xs">Email us</p>
                    <p className="font-medium text-sm">office@northeastheatingcooling.com</p>
                  </div>
                </a>
              </div>
              <div className="bg-white rounded-2xl p-6 shadow-xl">
                <h3 className="text-blue-900 font-bold text-xl mb-4">Get Your Free Estimate</h3>
                <form className="space-y-4">
                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label htmlFor="cw-first" className="block text-sm font-medium text-gray-700 mb-1">First Name</label>
                      <input id="cw-first" type="text" placeholder="John" className="w-full border border-gray-300 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent" />
                    </div>
                    <div>
                      <label htmlFor="cw-last" className="block text-sm font-medium text-gray-700 mb-1">Last Name</label>
                      <input id="cw-last" type="text" placeholder="Smith" className="w-full border border-gray-300 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent" />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="cw-phone" className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
                    <input id="cw-phone" type="tel" placeholder="(813) 555-0123" className="w-full border border-gray-300 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent" />
                  </div>
                  <div>
                    <label htmlFor="cw-service" className="block text-sm font-medium text-gray-700 mb-1">Service Needed</label>
                    <select id="cw-service" className="w-full border border-gray-300 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-700">
                      <option value="">Select a service...</option>
                      <option>AC Repair</option>
                      <option>AC Installation</option>
                      <option>Heating Repair</option>
                      <option>Air Duct Repair</option>
                      <option>Commercial HVAC</option>
                      <option>Maintenance / Tune-Up</option>
                    </select>
                  </div>
                  <div>
                    <label htmlFor="cw-message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                    <textarea id="cw-message" rows={3} placeholder="Describe your HVAC issue or project..." className="w-full border border-gray-300 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none" />
                  </div>
                  <button type="submit" className="w-full bg-red-600 hover:bg-red-700 text-white font-bold py-3 rounded-lg transition-colors text-base shadow-sm">
                    Send Request
                  </button>
                  <p className="text-gray-400 text-xs text-center">We&apos;ll respond within 1 business hour.</p>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}
