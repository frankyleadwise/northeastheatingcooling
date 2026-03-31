import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'HVAC Services in Riverview, FL | North East Heating & Cooling',
  description:
    'Expert HVAC repair, AC installation, heating services, and air duct repair in Riverview, FL. North East Heating & Cooling — call (813) 291-6146 for fast, reliable service.',
}

export default function RiverviewPage() {
  return (
    <>
      <main>
        {/* Hero Banner */}
        <section className="bg-[#1e40af] text-white py-20 px-4 relative overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.pexels.com/photos/7577378/pexels-photo-7577378.jpeg?auto=compress&cs=tinysrgb&w=1600"
            alt="Happy family outside their home in Tampa Bay Florida"
            className="w-full h-full object-cover object-center opacity-40"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0f1620]/80 via-[#0f1620]/60 to-[#0f1620]/40" />
        </div>
          <div className="relative z-10 max-w-5xl mx-auto text-center">
            <p className="text-blue-200 text-sm font-semibold uppercase tracking-widest mb-3">
              Tampa Bay's Trusted HVAC Company
            </p>
            <h1 className="text-4xl sm:text-5xl font-extrabold leading-tight mb-5">
              HVAC Services in Riverview, FL
            </h1>
            <p className="text-blue-100 text-lg sm:text-xl max-w-3xl mx-auto leading-relaxed mb-8">
              Professional heating, cooling, and air quality solutions for Riverview's rapidly growing
              residential and commercial communities. Same-day service available throughout Hillsborough County.
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
              Trusted HVAC Service for Riverview's Booming Neighborhoods
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Riverview is one of the fastest-growing communities in all of Florida, with a population that has
              exploded from around 71,000 in 2010 to well over 120,000 residents today. Located in southeastern
              Hillsborough County along the Alafia River, Riverview's rapid development has brought dozens of
              new residential communities, including communities like Summerfield, Panther Trace, South Fork,
              Triple Creek, and Boyette Springs — each filled with newer homes and the growing families that call
              Riverview home.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              While newer construction homes often feature modern, efficient HVAC systems, the rapid pace of
              Riverview's development means many homes were built quickly and may have ductwork, equipment, or
              installation practices that fall short of optimal. Homeowners in newer Riverview subdivisions
              sometimes discover that their relatively new systems are not performing as expected due to duct
              leakage, improper airflow balancing, or equipment that was sized to the minimum acceptable standard
              to reduce builder costs.
            </p>
            <p className="text-gray-700 leading-relaxed">
              North East Heating &amp; Cooling serves every neighborhood in Riverview, from the established
              areas near the Alafia River to the newest subdivisions being built in the community's rapidly
              expanding southern reaches. Call us at{' '}
              <a href="tel:8132916146" className="text-blue-700 font-semibold hover:underline">(813) 291-6146</a>{' '}
              for fast, professional service.
            </p>
          </div>
        </section>

        {/* HVAC Repair */}
        <section className="bg-gray-50 py-16 px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-extrabold text-blue-900 mb-5">
              HVAC Repair Services in Riverview, FL
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Our Riverview HVAC repair team is available for same-day service calls throughout the community's
              many neighborhoods. We diagnose and repair a full range of HVAC problems including refrigerant
              leaks, failed capacitors and contactors, blower motor and fan failures, evaporator coil issues,
              condensate drainage problems, and thermostat malfunctions. We work on all major brands and carry
              a comprehensive parts inventory to complete most repairs in a single visit.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              Riverview's newer homes often feature more complex HVAC configurations including variable-speed
              equipment, communicating systems, and smart thermostat integrations. Our technicians are trained
              on the latest HVAC technology and can diagnose and repair modern systems with the same proficiency
              they bring to older equipment.
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
              AC Installation in Riverview, FL
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Whether you're replacing an aging system or outfitting a new build in one of Riverview's growing
              communities, North East Heating &amp; Cooling delivers expert AC installation backed by proper
              load calculations, quality equipment selection, and clean, professional installation practices.
              We do not cut corners on refrigerant line sizing, duct connections, or electrical work — details
              that make a real difference in long-term system performance.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              For Riverview homeowners whose builder-installed systems are showing early signs of failure, we
              offer free consultations to assess whether repair or full replacement is the right path forward.
              We'll give you our honest assessment based on the age, condition, and efficiency of your existing
              equipment — not on what generates the most revenue for us.
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
              Heating Services in Riverview, FL
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              While Riverview's heating season is brief, Florida's unpredictable winters mean your heat pump
              needs to be ready when temperatures drop. Cold fronts that push nighttime lows below 40°F are not
              uncommon in January and February, and families with young children or elderly relatives particularly
              benefit from a well-maintained heating system that responds reliably when needed.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              We offer heat pump repair, heat pump replacement, and full HVAC system tune-ups for Riverview
              homeowners preparing for winter. Our fall maintenance service includes a thorough inspection of
              your heat pump's heating cycle, thermostat settings, filter condition, and overall system
              efficiency — catching small issues before they become expensive problems on a cold night.
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
              Air Duct Repair in Riverview, FL
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Newer homes in Riverview's subdivisions often have ductwork that was installed quickly during
              the construction boom and may not have been pressure-tested before the home was finished.
              Improperly sealed duct connections, kinked flex duct runs, and undersized duct branches are
              all common findings in homes built during Riverview's rapid development phase.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              Our duct technicians use blower door and duct pressurization testing to quantify exactly how much
              conditioned air your system is losing before it reaches your living spaces. We then perform
              targeted sealing and repairs to bring your duct system up to proper efficiency standards. Many
              Riverview homeowners see a 15–25% reduction in cooling costs after duct sealing — a return that
              typically pays for the service within one to two cooling seasons.
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
              Commercial HVAC Services in Riverview, FL
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Riverview's commercial development has grown alongside its residential boom, with new shopping
              centers, medical offices, restaurants, and service businesses opening throughout the community.
              Commercial HVAC demands differ significantly from residential — higher occupancy loads, longer
              operating hours, and greater regulatory requirements around indoor air quality and temperature
              control all play a role in how commercial systems must be designed and maintained.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              North East Heating &amp; Cooling provides commercial HVAC installation, repair, and maintenance
              contracts for Riverview businesses. Our commercial team can handle equipment ranging from small
              split systems in strip mall suites to large rooftop package units serving anchor retail and
              medical facilities.
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
              Why Riverview Residents Choose North East Heating &amp; Cooling
            </h2>
            <div className="grid sm:grid-cols-2 gap-5">
              {[
                { title: 'New Construction Knowledge', desc: 'We understand the HVAC systems commonly installed in Riverview\'s newer homes and the issues that frequently arise in recently built subdivisions.' },
                { title: 'Same-Day Service', desc: 'Our technicians serve Riverview with same-day and emergency availability, so you\'re never left waiting in Florida\'s heat.' },
                { title: 'Honest Recommendations', desc: 'We tell you what your system actually needs — not what generates the highest invoice. Repair when repair makes sense, replace when it doesn\'t.' },
                { title: 'Licensed & Fully Insured', desc: 'All of our technicians hold Florida HVAC licenses and our company carries comprehensive liability and workers\' compensation insurance.' },
                { title: 'Full-Service HVAC', desc: 'From basic tune-ups to full system replacements, duct work overhauls, and commercial contracts — we handle it all in Riverview.' },
                { title: 'Satisfaction Guaranteed', desc: 'Every job we complete in Riverview is backed by our satisfaction guarantee. We won\'t close out a job until you\'re completely happy.' },
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
              Areas Near Riverview We Also Serve
            </h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              Our service territory surrounds Riverview on all sides. Nearby communities we also serve include:
            </p>
            <div className="flex flex-wrap gap-3">
              {[
                { name: 'Brandon, FL', slug: 'brandon-fl' },
                { name: 'Gibsonton, FL', slug: 'gibsonton-fl' },
                { name: 'Ruskin, FL', slug: 'ruskin-fl' },
                { name: 'Apollo Beach, FL', slug: 'apollo-beach-fl' },
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
                  Request a Free Consultation in Riverview
                </h2>
                <p className="text-blue-100 leading-relaxed mb-6">
                  Get in touch with North East Heating &amp; Cooling for professional HVAC service throughout
                  Riverview, FL. Fast response, honest pricing, and guaranteed satisfaction.
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
                      <label htmlFor="rv-first" className="block text-sm font-medium text-gray-700 mb-1">First Name</label>
                      <input id="rv-first" type="text" placeholder="John" className="w-full border border-gray-300 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent" />
                    </div>
                    <div>
                      <label htmlFor="rv-last" className="block text-sm font-medium text-gray-700 mb-1">Last Name</label>
                      <input id="rv-last" type="text" placeholder="Smith" className="w-full border border-gray-300 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent" />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="rv-phone" className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
                    <input id="rv-phone" type="tel" placeholder="(813) 555-0123" className="w-full border border-gray-300 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent" />
                  </div>
                  <div>
                    <label htmlFor="rv-service" className="block text-sm font-medium text-gray-700 mb-1">Service Needed</label>
                    <select id="rv-service" className="w-full border border-gray-300 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-700">
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
                    <label htmlFor="rv-message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                    <textarea id="rv-message" rows={3} placeholder="Describe your HVAC issue or project..." className="w-full border border-gray-300 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none" />
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
