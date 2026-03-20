import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'HVAC Services in Valrico, FL | North East Heating & Cooling',
  description:
    'Reliable HVAC repair, AC installation, heating services, and air duct repair in Valrico, FL. North East Heating & Cooling — call (813) 291-6146 for expert service.',
}

export default function ValricoPage() {
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
              HVAC Services in Valrico, FL
            </h1>
            <p className="text-blue-100 text-lg sm:text-xl max-w-3xl mx-auto leading-relaxed mb-8">
              Dependable heating and cooling services for Valrico homes and businesses. Local knowledge,
              honest pricing, and fast response throughout eastern Hillsborough County.
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
              Expert HVAC Service for Valrico's Residential Communities
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Valrico is a quiet, unincorporated community in eastern Hillsborough County that offers residents
              a suburban lifestyle with convenient access to both Brandon and Tampa. Home to approximately
              38,000 residents, Valrico is characterized by established single-family neighborhoods, larger
              lots, good schools, and a strong sense of community. Neighborhoods like Buckhorn and Canterbury
              Lakes have been established for decades, while newer developments continue to fill in the
              community's remaining undeveloped land.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              Valrico's eastern Hillsborough County location places it slightly inland from the coast, meaning
              it experiences some of the highest summer temperatures in the Tampa Bay region without the slight
              moderating influence of Tampa Bay or the Gulf. Afternoon heat indexes regularly reach 105–110°F
              during peak summer, making a reliable, efficiently running air conditioning system a genuine
              necessity for Valrico families.
            </p>
            <p className="text-gray-700 leading-relaxed">
              North East Heating &amp; Cooling provides fast, professional HVAC service throughout Valrico.
              Our technicians are familiar with the housing stock in Valrico's established neighborhoods and
              can quickly identify and resolve the most common HVAC issues in the area. Call us at{' '}
              <a href="tel:8132916146" className="text-blue-700 font-semibold hover:underline">(813) 291-6146</a>{' '}
              to schedule service today.
            </p>
          </div>
        </section>

        {/* HVAC Repair */}
        <section className="bg-gray-50 py-16 px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-extrabold text-blue-900 mb-5">
              HVAC Repair Services in Valrico, FL
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Our Valrico HVAC repair team responds quickly to all service calls throughout the community. We
              diagnose and repair all types of heating and cooling system failures including refrigerant leaks,
              compressor problems, capacitor failures, blower motor issues, frozen evaporator coils, clogged
              drain lines, and control board malfunctions. Our stocked service vehicles allow us to complete
              the majority of Valrico repairs during the initial service visit.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              Many of Valrico's homes have HVAC systems that are 10–20 years old. If your aging system is
              requiring increasingly frequent repairs, our technicians can perform an honest efficiency and
              cost analysis to help you decide whether continued repair or system replacement makes more
              financial sense for your household.
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
              AC Installation in Valrico, FL
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Replacing an air conditioner in a Valrico home requires careful attention to sizing, ductwork
              compatibility, and equipment selection. Valrico's larger homes — many featuring four or five
              bedrooms — require higher-capacity systems that must be matched precisely to the home's thermal
              envelope for optimal efficiency. Our team performs a full Manual J load calculation before
              recommending any equipment to ensure your new system is sized correctly.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              We install energy-efficient systems from Carrier, Trane, Lennox, Rheem, and Goodman, with SEER
              ratings ranging from standard efficiency to top-tier inverter-driven systems that can cut cooling
              costs by 30–40% compared to older equipment. We handle all permits, electrical connections,
              refrigerant line sets, and thermostat programming and ensure a thorough system test before
              we consider any installation complete.
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
              Heating Services in Valrico, FL
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Valrico homeowners rely primarily on heat pumps for winter comfort, and those heat pumps need to
              be in good working order when Florida's brief but real cold season arrives. Heat pump heating
              failures in January or February — when temperatures can drop into the 30s overnight — call for
              a rapid response, and our team is equipped to diagnose and repair heating system problems quickly.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              We provide heat pump repair and replacement, emergency heating service, and fall heating tune-ups
              throughout Valrico. Our tune-up service covers a full inspection of the heating cycle, thermostat
              operation, filter replacement, and a check of all electrical connections and safety components to
              ensure your heating system is ready for whatever winter brings to Hillsborough County.
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
              Air Duct Repair in Valrico, FL
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Many of Valrico's established homes have duct systems that date back to the 1980s and 1990s and
              are showing their age. Fiberglass duct board that has cracked or delaminated, flex duct that has
              collapsed or disconnected, and connections sealed only with deteriorating cloth tape are common
              findings in homes of this vintage. These issues can cause significant energy waste and uneven
              comfort throughout the home.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              Our duct specialists perform comprehensive inspections, pressure testing, and targeted repairs
              or full duct replacements depending on the extent of the issues found. We insulate all ductwork
              passing through unconditioned attic space to reduce heat gain during Valrico's long, hot summers —
              a measure that can meaningfully improve both comfort and system efficiency.
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
              Commercial HVAC Services in Valrico, FL
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Valrico's commercial activity is concentrated along Bloomingdale Avenue and SR-60, where retail
              strip centers, service businesses, medical offices, and restaurants serve the surrounding
              residential population. These businesses depend on reliable HVAC to serve their customers and
              meet Florida's health and safety requirements for commercial spaces.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              North East Heating &amp; Cooling provides commercial HVAC repair, installation, and preventive
              maintenance for Valrico businesses. We work around your hours to minimize disruption, offer
              priority service agreements for businesses that need guaranteed response times, and provide
              detailed service documentation for your records and regulatory compliance.
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
              Why Valrico Residents Choose North East Heating &amp; Cooling
            </h2>
            <div className="grid sm:grid-cols-2 gap-5">
              {[
                { title: 'Eastern Hillsborough Expertise', desc: 'We know Valrico\'s housing stock, neighborhoods, and the specific HVAC challenges of eastern Hillsborough County\'s climate.' },
                { title: 'Fast Same-Day Response', desc: 'When your AC fails on a hot Valrico afternoon, we respond quickly with same-day and emergency service available throughout the community.' },
                { title: 'Written Estimates', desc: 'Every service call begins with a thorough diagnostic and a written estimate you approve before we start any repair work.' },
                { title: 'Licensed Technicians', desc: 'Our Florida-licensed technicians bring expertise and professionalism to every Valrico service call, large or small.' },
                { title: 'All Brands Serviced', desc: 'We work on all major HVAC brands and maintain a well-stocked fleet to complete most repairs on the first visit.' },
                { title: 'Customer-First Approach', desc: 'We treat every Valrico home as if it were our own and every customer as we would want our family to be treated.' },
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
              Areas Near Valrico We Also Serve
            </h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              Beyond Valrico, we serve the surrounding Hillsborough County communities including:
            </p>
            <div className="flex flex-wrap gap-3">
              {[
                { name: 'Brandon, FL', slug: 'brandon-fl' },
                { name: 'Plant City, FL', slug: 'plant-city-fl' },
                { name: 'Riverview, FL', slug: 'riverview-fl' },
                { name: 'Tampa, FL', slug: 'tampa-fl' },
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
                  Request a Free Consultation in Valrico
                </h2>
                <p className="text-blue-100 leading-relaxed mb-6">
                  Contact North East Heating &amp; Cooling today for professional HVAC service anywhere
                  in Valrico. Our team is ready to help with repairs, installations, and maintenance.
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
                      <label htmlFor="val-first" className="block text-sm font-medium text-gray-700 mb-1">First Name</label>
                      <input id="val-first" type="text" placeholder="John" className="w-full border border-gray-300 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent" />
                    </div>
                    <div>
                      <label htmlFor="val-last" className="block text-sm font-medium text-gray-700 mb-1">Last Name</label>
                      <input id="val-last" type="text" placeholder="Smith" className="w-full border border-gray-300 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent" />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="val-phone" className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
                    <input id="val-phone" type="tel" placeholder="(813) 555-0123" className="w-full border border-gray-300 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent" />
                  </div>
                  <div>
                    <label htmlFor="val-service" className="block text-sm font-medium text-gray-700 mb-1">Service Needed</label>
                    <select id="val-service" className="w-full border border-gray-300 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-700">
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
                    <label htmlFor="val-message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                    <textarea id="val-message" rows={3} placeholder="Describe your HVAC issue or project..." className="w-full border border-gray-300 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none" />
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
