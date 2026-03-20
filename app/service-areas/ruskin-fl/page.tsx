import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'HVAC Services in Ruskin, FL | North East Heating & Cooling',
  description:
    'Full-service HVAC repair, AC installation, heating services, and air duct repair in Ruskin, FL. North East Heating & Cooling — call (813) 291-6146 for expert south Hillsborough HVAC.',
}

export default function RuskinPage() {
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
              HVAC Services in Ruskin, FL
            </h1>
            <p className="text-blue-100 text-lg sm:text-xl max-w-3xl mx-auto leading-relaxed mb-8">
              Professional heating and cooling services for Ruskin's growing residential community and
              local businesses. Fast response, transparent pricing, and HVAC expertise you can count on.
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
                className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white font-bold px-7 py-3.5 rounded-lg transition-colors shadow-lg text-lg border border-blue-400"
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
              Serving Ruskin's Community with Quality HVAC Solutions
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Ruskin is a growing unincorporated community in the southernmost part of Hillsborough County,
              bordered by Tampa Bay to the west and the Little Manatee River to the south. With a population
              approaching 25,000 residents and significant new residential development underway, Ruskin is one
              of the Tampa Bay region's emerging communities, attracting families and retirees who appreciate
              its mix of agricultural character, waterfront access, and proximity to major employers throughout
              south Hillsborough County.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              Ruskin's southern location near Tampa Bay means the community experiences the full subtropical
              heat of Florida's summer, along with high humidity levels that persist throughout much of the
              year. The combination of heat, humidity, and Ruskin's proximity to the bay creates demanding
              conditions for HVAC equipment. Systems here must work hard to maintain comfortable indoor
              temperatures and humidity levels, and regular maintenance is essential to prevent the premature
              failures that Florida's climate accelerates.
            </p>
            <p className="text-gray-700 leading-relaxed">
              North East Heating &amp; Cooling proudly serves Ruskin and the surrounding south Hillsborough
              County area, providing the fast, professional, and fairly priced HVAC service that the
              community deserves. Call us at{' '}
              <a href="tel:8132916146" className="text-blue-700 font-semibold hover:underline">(813) 291-6146</a>{' '}
              to get started.
            </p>
          </div>
        </section>

        {/* HVAC Repair */}
        <section className="bg-gray-50 py-16 px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-extrabold text-blue-900 mb-5">
              HVAC Repair Services in Ruskin, FL
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Our Ruskin HVAC repair team responds promptly to service calls throughout the community.
              We diagnose and repair all types of heating and cooling system failures — refrigerant leaks,
              compressor issues, fan motor failures, electrical faults, thermostat problems, and clogged
              condensate drain lines that are especially common in Ruskin's high-humidity environment.
              Our service vehicles are fully stocked, enabling us to complete most repairs on the first visit.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              Ruskin's mix of older established homes and newer construction means our technicians encounter
              a wide variety of HVAC systems and configurations. Whether you have an older single-stage
              system that has served your family for years or a newer variable-speed system in a recently
              built subdivision, we have the knowledge and parts to get it running properly.
            </p>
            <Link
              href="/residential/hvac-service-tampa"
              className="inline-flex items-center gap-2 bg-blue-700 hover:bg-blue-800 text-white font-bold px-6 py-3 rounded-lg transition-colors"
            >
              View HVAC Repair Services &rarr;
            </Link>
          </div>
        </section>

        {/* AC Installation */}
        <section className="bg-white py-16 px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-extrabold text-blue-900 mb-5">
              AC Installation in Ruskin, FL
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Ruskin's growing population means a steady demand for new air conditioning installations,
              from replacement systems in older homes to first-time installations in new construction.
              North East Heating &amp; Cooling handles both residential and commercial AC installations
              throughout Ruskin, bringing the same level of care and professionalism to every project
              regardless of size or scope.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              We perform a complete Manual J load calculation for every installation, ensuring proper
              system sizing. In Ruskin's humid climate, correct sizing is especially important — an
              oversized system will cool quickly but won't run long enough to remove adequate humidity,
              leaving your home feeling clammy and uncomfortable even at a low thermostat setting. We
              size every system to the correct capacity for reliable, efficient performance in Ruskin's
              specific climate conditions.
            </p>
            <Link
              href="/residential/hvac-installation-tampa-fl"
              className="inline-flex items-center gap-2 bg-blue-700 hover:bg-blue-800 text-white font-bold px-6 py-3 rounded-lg transition-colors"
            >
              View AC Installation Services &rarr;
            </Link>
          </div>
        </section>

        {/* Heating Services */}
        <section className="bg-gray-50 py-16 px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-extrabold text-blue-900 mb-5">
              Heating Services in Ruskin, FL
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Ruskin's mild winters are occasionally interrupted by significant cold fronts that push
              temperatures below 40°F, particularly late at night. For households with elderly residents
              or young children, a reliable heating system during these cold snaps is an important safety
              consideration. Heat pump failures during cold weather are among the most urgent service
              calls we receive from Ruskin residents, and we prioritize rapid response for heating
              emergencies throughout the community.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              We service and replace heat pump systems throughout Ruskin, and we recommend a fall
              heating check-up to every homeowner in the area. Our heating tune-up includes inspection
              of the reversing valve, refrigerant charge, defrost cycle operation, auxiliary heat strips,
              thermostat settings, and all electrical connections — a comprehensive review that can
              identify potential issues before they cause a cold-night emergency call.
            </p>
            <Link
              href="/residential/hvac-service-tampa"
              className="inline-flex items-center gap-2 bg-blue-700 hover:bg-blue-800 text-white font-bold px-6 py-3 rounded-lg transition-colors"
            >
              View Heating Services &rarr;
            </Link>
          </div>
        </section>

        {/* Air Duct Repair */}
        <section className="bg-white py-16 px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-extrabold text-blue-900 mb-5">
              Air Duct Repair in Ruskin, FL
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Duct performance is particularly important in Ruskin's hot, humid climate. Leaky ductwork
              wastes cooled air before it reaches your living spaces and can draw in humid outdoor air
              that contributes to moisture issues, mold growth, and deteriorating indoor air quality.
              In a climate like Ruskin's, where humidity is a near-constant challenge, keeping your
              duct system sealed and properly insulated is one of the most effective ways to maintain
              both comfort and indoor air quality.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              North East Heating &amp; Cooling provides thorough duct inspections, pressure testing,
              sealing, repair, and full replacement services for Ruskin homes and businesses. We use
              durable, moisture-resistant materials appropriate for south Florida's climate and follow
              best practices for insulating duct runs in hot attic spaces to minimize heat gain and
              maximize system efficiency.
            </p>
            <Link
              href="/residential/air-duct-repair-tampa"
              className="inline-flex items-center gap-2 bg-blue-700 hover:bg-blue-800 text-white font-bold px-6 py-3 rounded-lg transition-colors"
            >
              View Air Duct Repair Services &rarr;
            </Link>
          </div>
        </section>

        {/* Commercial HVAC */}
        <section className="bg-gray-50 py-16 px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-extrabold text-blue-900 mb-5">
              Commercial HVAC Services in Ruskin, FL
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Ruskin's commercial sector has grown alongside its residential development, with retail
              centers, restaurants, agricultural supply businesses, and other commercial operations
              serving the community's expanding population. Commercial HVAC reliability is essential
              for all of these businesses, from keeping dining rooms comfortable for restaurant patrons
              to maintaining proper temperatures in storage facilities for agricultural products.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              We provide full-service commercial HVAC installation, repair, and preventive maintenance
              throughout Ruskin. Our commercial team is experienced with all types of commercial
              equipment and building configurations, and we offer maintenance contracts designed to
              protect your investment and minimize the risk of costly emergency breakdowns. Contact
              us to discuss how we can support your Ruskin business's HVAC needs.
            </p>
            <Link
              href="/commercial/hvac-service-tampa"
              className="inline-flex items-center gap-2 bg-blue-700 hover:bg-blue-800 text-white font-bold px-6 py-3 rounded-lg transition-colors"
            >
              View Commercial HVAC Services &rarr;
            </Link>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="bg-white py-16 px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-extrabold text-blue-900 mb-8">
              Why Ruskin Residents Choose North East Heating &amp; Cooling
            </h2>
            <div className="grid sm:grid-cols-2 gap-5">
              {[
                { title: 'South Hillsborough Specialists', desc: 'We serve Ruskin and the surrounding south Hillsborough County communities as a core part of our service territory, ensuring fast response times.' },
                { title: 'Climate-Focused Expertise', desc: 'Ruskin\'s humid coastal climate demands specific knowledge of humidity management, system sizing, and coastal equipment considerations — we have it.' },
                { title: 'Transparent Estimates', desc: 'Every service call includes a written, itemized estimate before any work begins. The price we quote is the price you pay.' },
                { title: 'Licensed & Insured Technicians', desc: 'All our technicians carry Florida HVAC licenses and our company maintains full liability and workers\' compensation insurance.' },
                { title: 'Same-Day & Emergency Service', desc: 'We offer same-day scheduling and emergency service for urgent HVAC failures throughout Ruskin and surrounding communities.' },
                { title: 'Satisfaction Guaranteed', desc: 'We stand behind every job we perform in Ruskin with a complete satisfaction guarantee and a commitment to quality craftsmanship.' },
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
              Areas Near Ruskin We Also Serve
            </h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              In addition to Ruskin, we serve the surrounding south and central Hillsborough County area including:
            </p>
            <div className="flex flex-wrap gap-3">
              {[
                { name: 'Apollo Beach, FL', slug: 'apollo-beach-fl' },
                { name: 'Gibsonton, FL', slug: 'gibsonton-fl' },
                { name: 'Riverview, FL', slug: 'riverview-fl' },
                { name: 'Brandon, FL', slug: 'brandon-fl' },
              ].map((city) => (
                <Link
                  key={city.slug}
                  href={`/service-areas/${city.slug}`}
                  className="bg-white border border-blue-200 text-blue-700 font-semibold px-4 py-2 rounded-lg hover:bg-blue-700 hover:text-white hover:border-blue-700 transition-colors text-sm"
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
                  Request a Free Consultation in Ruskin
                </h2>
                <p className="text-blue-100 leading-relaxed mb-6">
                  Contact North East Heating &amp; Cooling today for professional HVAC service
                  throughout Ruskin, FL. We&apos;re ready to help you stay comfortable year-round.
                </p>
                <a href="tel:8132916146" className="flex items-center gap-3 text-white hover:text-blue-200 transition-colors mb-3">
                  <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5" aria-hidden="true"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.4 2 2 0 0 1 3.6 1.22h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L7.91 8.8a16 16 0 0 0 6.29 6.29l.95-.95a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" /></svg>
                  </div>
                  <div>
                    <p className="text-blue-200 text-xs">Call us anytime</p>
                    <p className="font-bold text-xl">(813) 291-6146</p>
                  </div>
                </a>
                <a href="mailto:office@northeastheatingcooling.com" className="flex items-center gap-3 text-white hover:text-blue-200 transition-colors">
                  <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center shrink-0">
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
                      <label htmlFor="rk-first" className="block text-sm font-medium text-gray-700 mb-1">First Name</label>
                      <input id="rk-first" type="text" placeholder="John" className="w-full border border-gray-300 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent" />
                    </div>
                    <div>
                      <label htmlFor="rk-last" className="block text-sm font-medium text-gray-700 mb-1">Last Name</label>
                      <input id="rk-last" type="text" placeholder="Smith" className="w-full border border-gray-300 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent" />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="rk-phone" className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
                    <input id="rk-phone" type="tel" placeholder="(813) 555-0123" className="w-full border border-gray-300 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent" />
                  </div>
                  <div>
                    <label htmlFor="rk-service" className="block text-sm font-medium text-gray-700 mb-1">Service Needed</label>
                    <select id="rk-service" className="w-full border border-gray-300 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-700">
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
                    <label htmlFor="rk-message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                    <textarea id="rk-message" rows={3} placeholder="Describe your HVAC issue or project..." className="w-full border border-gray-300 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none" />
                  </div>
                  <button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 rounded-lg transition-colors text-base shadow-sm">
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
