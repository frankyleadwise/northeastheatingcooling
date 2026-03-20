import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'HVAC Services in Brandon, FL | North East Heating & Cooling',
  description:
    'Trusted HVAC repair, AC installation, heating services, and air duct repair in Brandon, FL. North East Heating & Cooling — call (813) 291-6146 for same-day service.',
}

export default function BrandonPage() {
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
              HVAC Services in Brandon, FL
            </h1>
            <p className="text-blue-100 text-lg sm:text-xl max-w-3xl mx-auto leading-relaxed mb-8">
              Reliable heating, air conditioning, and ventilation services for Brandon homeowners and
              businesses. Fast response, honest pricing, and technicians who know Hillsborough County.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="tel:8132916146"
                className="inline-flex items-center gap-2 bg-white text-blue-800 font-bold px-7 py-3.5 rounded-lg hover:bg-blue-50 transition-colors shadow-lg text-lg"
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5" aria-hidden="true"><path d="M22 16.96v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.4 2 2 0 0 1 3.6 1.22h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L7.91 8.8a16 16 0 0 0 6.29 6.29l.95-.95a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" /></svg>
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
              Serving Brandon's Growing Communities with Expert HVAC
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Brandon is one of Hillsborough County's most populous unincorporated communities, home to
              approximately 115,000 residents and one of the fastest-growing suburban areas in the Tampa Bay
              region. Situated just east of Tampa along the Interstate 60 and Brandon Boulevard corridors,
              Brandon features a diverse mix of established neighborhoods, newer subdivisions, and a robust
              commercial corridor packed with retail, restaurants, and medical facilities.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              Brandon's inland location means it experiences the full force of Florida's summer heat without
              the slight coastal moderating effect enjoyed by beachside communities. Summer temperatures
              regularly reach the mid-to-upper 90s, and the combination of heat and humidity makes a
              functioning air conditioner absolutely essential for comfortable living. Many of Brandon's
              homes — particularly those in established neighborhoods like Bloomingdale and Lakeview Village —
              feature ductwork and HVAC systems installed in the 1980s and 1990s that are approaching or past
              their useful service life.
            </p>
            <p className="text-gray-700 leading-relaxed">
              North East Heating &amp; Cooling has served Brandon homeowners and businesses for years, providing
              the fast, reliable service that busy families and local businesses depend on. Call us at{' '}
              <a href="tel:8132916146" className="text-blue-700 font-semibold hover:underline">(813) 291-6146</a>{' '}
              for a free estimate or same-day service.
            </p>
          </div>
        </section>

        {/* HVAC Repair */}
        <section className="bg-gray-50 py-16 px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-extrabold text-blue-900 mb-5">
              HVAC Repair Services in Brandon, FL
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              When your AC goes out in Brandon's summer heat, you need a technician who can be there fast. Our
              Brandon-area repair team offers same-day service for all HVAC emergencies and carries a
              comprehensive inventory of parts for all major brands. We diagnose and repair capacitor failures,
              refrigerant leaks, compressor problems, blower motor failures, evaporator coil issues, clogged
              condensate drain lines, and electrical faults.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              Brandon's many two-story homes present unique HVAC challenges — upper floors that never seem to
              cool adequately, systems struggling to maintain consistent temperatures throughout the house, and
              ductwork that has shifted or disconnected in the attic. Our technicians are experienced in
              diagnosing multi-zone comfort issues and recommending targeted solutions rather than defaulting
              to unnecessary equipment upgrades.
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
              AC Installation in Brandon, FL
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Brandon's mix of home sizes — from compact townhomes to large four-bedroom suburban houses —
              means proper system sizing is critical. An improperly sized air conditioner will either leave
              your home uncomfortable or cycle on and off too frequently, wearing out components prematurely
              and leaving excess humidity in the air. Our team performs a thorough Manual J load calculation
              for every installation project in Brandon to ensure your new system is the right fit.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              We offer a full selection of energy-efficient split systems, heat pumps, and packaged units from
              leading manufacturers. Homeowners in Brandon's established neighborhoods with older ductwork
              may benefit from a duct assessment performed alongside the new equipment installation, ensuring
              the new system isn't fighting against leaky or undersized ducts.
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
              Heating Services in Brandon, FL
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Brandon winters are generally short and mild, but January and February can bring overnight lows
              into the upper 30s and lower 40s — cold enough that a functioning heating system is a real
              comfort necessity. Most Brandon homes rely on the heat pump function of their central HVAC system,
              and occasional cold-weather failures are one of the more common service calls we receive from
              Brandon residents.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              We provide comprehensive heat pump repair and replacement, emergency heating service, and
              seasonal furnace and heat pump tune-ups throughout Brandon. If your home uses an older electric
              furnace or gas system, our technicians can inspect, clean, and service those as well. Call us
              before the cold season starts to schedule a preventive heating check-up.
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
              Air Duct Repair in Brandon, FL
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Brandon's older subdivisions — many built in the 1980s and 1990s — commonly have fiberglass
              duct board or early flex duct installations that have degraded significantly over the decades.
              Duct board that has separated at joints, flex duct that has kinked or sagged, and insulation that
              has deteriorated in the hot attic are all common findings in Brandon homes when we perform
              a duct inspection.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              Our duct specialists can identify and repair these issues efficiently, improving your home's
              airflow, reducing energy waste, and enhancing indoor air quality. Many Brandon homeowners are
              surprised by how much their HVAC system's performance improves after duct sealing or replacement
              — often achieving the same comfort level at a lower thermostat setting, which translates directly
              to lower energy bills throughout Florida's long cooling season.
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
              Commercial HVAC Services in Brandon, FL
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Brandon's commercial landscape is one of Hillsborough County's busiest outside of Tampa proper,
              featuring major retail centers, medical offices, restaurants, service businesses, and light
              industrial facilities along the Brandon Boulevard and SR-60 corridors. For all these businesses,
              a comfortable environment isn't just a convenience — it directly impacts customer experience,
              employee productivity, and regulatory compliance for temperature-sensitive operations.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              North East Heating &amp; Cooling provides commercial HVAC installation, repair, and maintenance
              for Brandon businesses of all sizes. We service rooftop units, split systems, and multi-zone
              commercial equipment, and we offer maintenance contracts that schedule regular service visits
              around your busiest operating hours to minimize disruption to your business.
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
              Why Brandon Residents Choose North East Heating &amp; Cooling
            </h2>
            <div className="grid sm:grid-cols-2 gap-5">
              {[
                { title: 'Fast Local Response', desc: 'Our technicians are dispatched from the greater Tampa Bay area and can reach Brandon quickly for same-day and emergency service calls.' },
                { title: 'Experienced with Brandon Homes', desc: 'We\'ve serviced hundreds of homes in Brandon\'s established neighborhoods and know the common HVAC issues in the area\'s housing stock.' },
                { title: 'Upfront Pricing', desc: 'We provide a detailed written estimate before any work begins. You approve the cost before we pick up a single tool.' },
                { title: 'Licensed & Insured', desc: 'Every technician is Florida-licensed and our company carries full liability and workers\' compensation insurance.' },
                { title: 'All Major Brands', desc: 'We service and install all major HVAC brands, and our trucks are stocked with the most commonly needed parts for quick repairs.' },
                { title: 'Satisfaction Guaranteed', desc: 'We stand behind every job we complete in Brandon. Your comfort and satisfaction are our highest priority.' },
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
              Areas Near Brandon We Also Serve
            </h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              In addition to Brandon, we serve the surrounding Hillsborough County communities including:
            </p>
            <div className="flex flex-wrap gap-3">
              {[
                { name: 'Tampa, FL', slug: 'tampa-fl' },
                { name: 'Riverview, FL', slug: 'riverview-fl' },
                { name: 'Valrico, FL', slug: 'valrico-fl' },
                { name: 'Gibsonton, FL', slug: 'gibsonton-fl' },
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
                  Request a Free Consultation in Brandon
                </h2>
                <p className="text-blue-100 leading-relaxed mb-6">
                  Contact North East Heating &amp; Cooling for fast, professional HVAC service throughout
                  Brandon, FL. We&apos;re here to help with any heating or cooling need.
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
                      <label htmlFor="brandon-first" className="block text-sm font-medium text-gray-700 mb-1">First Name</label>
                      <input id="brandon-first" type="text" placeholder="John" className="w-full border border-gray-300 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent" />
                    </div>
                    <div>
                      <label htmlFor="brandon-last" className="block text-sm font-medium text-gray-700 mb-1">Last Name</label>
                      <input id="brandon-last" type="text" placeholder="Smith" className="w-full border border-gray-300 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent" />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="brandon-phone" className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
                    <input id="brandon-phone" type="tel" placeholder="(813) 555-0123" className="w-full border border-gray-300 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent" />
                  </div>
                  <div>
                    <label htmlFor="brandon-service" className="block text-sm font-medium text-gray-700 mb-1">Service Needed</label>
                    <select id="brandon-service" className="w-full border border-gray-300 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-700">
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
                    <label htmlFor="brandon-message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                    <textarea id="brandon-message" rows={3} placeholder="Describe your HVAC issue or project..." className="w-full border border-gray-300 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none" />
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
