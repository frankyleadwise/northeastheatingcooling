import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'HVAC Services in St. Petersburg, FL | North East Heating & Cooling',
  description:
    'Expert HVAC repair, AC installation, heating services, and air duct repair throughout St. Petersburg, FL. North East Heating & Cooling — call (813) 291-6146 for same-day service.',
}

export default function StPetersburgPage() {
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
              HVAC Services in St. Petersburg, FL
            </h1>
            <p className="text-blue-100 text-lg sm:text-xl max-w-3xl mx-auto leading-relaxed mb-8">
              Dependable heating, cooling, and air quality services for St. Pete homes and businesses.
              Fast response times, honest pricing, and licensed technicians ready to serve you today.
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
              HVAC Experts Proudly Serving St. Petersburg
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              St. Petersburg — affectionately known as "St. Pete" — is one of Florida's most beloved cities,
              boasting world-class beaches, a thriving arts scene, and a walkable downtown filled with restaurants,
              galleries, and boutiques. With a population approaching 260,000, St. Pete is the fourth-largest city
              in Florida and a community where quality of life is taken seriously. That includes staying cool and
              comfortable in a city that holds the Guinness World Record for consecutive days of sunshine.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              St. Petersburg's peninsular location means it is surrounded by water on three sides — Tampa Bay
              to the east and the Gulf of Mexico to the west. This geography moderates temperatures slightly but
              also contributes to extremely high humidity levels, especially during the summer months. Salt air
              from the coast accelerates corrosion of HVAC components, meaning systems in St. Pete often require
              more frequent maintenance and inspection than those in inland areas. North East Heating &amp; Cooling
              technicians understand these coastal HVAC challenges and can recommend corrosion-resistant equipment
              and coatings to extend system lifespan.
            </p>
            <p className="text-gray-700 leading-relaxed">
              From the historic homes of Old Northeast and Kenwood to the condos along Beach Drive and the
              family neighborhoods of Pinellas Point, we serve every corner of St. Petersburg with the same
              dedication to quality. Call us at{' '}
              <a href="tel:8132916146" className="text-blue-700 font-semibold hover:underline">(813) 291-6146</a>{' '}
              to schedule your service today.
            </p>
          </div>
        </section>

        {/* HVAC Repair */}
        <section className="bg-gray-50 py-16 px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-extrabold text-blue-900 mb-5">
              HVAC Repair Services in St. Petersburg, FL
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              When your air conditioner or heating system breaks down in St. Pete, you need a repair technician
              who can arrive quickly and diagnose the problem accurately the first time. Our fully stocked service
              vans carry the most common replacement parts for all major brands, allowing us to complete most
              repairs in a single visit. We handle everything from capacitor replacements and refrigerant
              recharges to full compressor swaps and board-level repairs.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              St. Petersburg's salt air environment is particularly hard on condenser coils and electrical
              components. If your system is running but struggling to cool effectively, or if you've noticed
              unusual sounds, higher-than-normal energy bills, or poor airflow, our technicians can perform a
              comprehensive diagnostic and recommend targeted repairs to restore full efficiency.
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
              AC Installation in St. Petersburg, FL
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Replacing an aging air conditioner in a St. Petersburg home is one of the most impactful comfort
              and efficiency upgrades a homeowner can make. Modern high-efficiency systems can cut cooling costs
              by 20–40% compared to equipment from a decade ago, a meaningful savings when your AC runs eight
              months out of the year. For St. Pete's unique coastal environment, we also recommend units with
              enhanced corrosion protection and higher SEER ratings to handle the longer cooling seasons.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              Our installation process begins with a proper load calculation to size your new system correctly.
              We'll handle all permits, electrical connections, refrigerant line sets, and thermostat programming.
              After installation, we test the system through a full heating and cooling cycle to verify performance
              before we leave. We also offer ductless mini-split installations for St. Pete's older homes and
              historic properties that may not have existing ductwork.
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
              Heating Services in St. Petersburg, FL
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              St. Petersburg's mild winters typically see temperatures in the high 50s to mid-60s, but cold
              fronts can push readings into the low 40s on occasion. Most homes in St. Pete use heat pumps that
              double as both heating and cooling systems, making them an efficient choice for Florida's climate.
              When your heat pump loses its heating capacity or your electric strip heat fails during a cold snap,
              North East Heating &amp; Cooling is ready to respond.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              We provide heat pump repair, heat pump replacement, and emergency heating service throughout St.
              Petersburg. Our technicians will check your reversing valve, refrigerant levels, defrost board,
              and electric heat strips to identify the root cause of any heating issue. We also offer fall
              maintenance tune-ups to prepare your system for the winter months.
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
              Air Duct Repair in St. Petersburg, FL
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Many of St. Petersburg's charming older homes were built before modern duct standards, and even
              newer construction can develop duct problems over time. Leaky or damaged ductwork lets conditioned
              air escape into unconditioned attic and wall spaces, forcing your HVAC system to work harder and
              driving up your energy bills. In St. Pete's humid coastal climate, duct leaks can also introduce
              outside air and moisture into your system, promoting mold growth and worsening indoor air quality.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              Our duct technicians perform a complete visual and pressure-based inspection of your duct system
              to locate leaks, disconnections, and deteriorated insulation. We offer aeroseal duct sealing, manual
              duct repair with mastic sealant and metallic tape, duct board replacement, and full duct system
              redesign for homes with persistent comfort or efficiency issues.
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
              Commercial HVAC Services in St. Petersburg, FL
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              St. Petersburg's booming downtown, the Central Arts District, and the lively waterfront all host
              dozens of restaurants, galleries, shops, offices, and hotels that depend on reliable commercial
              HVAC to serve their patrons and staff. North East Heating &amp; Cooling provides comprehensive
              commercial HVAC services including installation, repair, preventive maintenance, and emergency
              response throughout St. Petersburg.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              We work with rooftop package units, large split systems, VRF systems, and commercial refrigeration
              equipment. Our maintenance contracts are structured to minimize disruption to your business
              operations and maximize equipment uptime. Whether you're outfitting a new commercial space or
              keeping an existing facility running smoothly, our commercial team has the expertise to help.
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
              Why St. Petersburg Residents Choose North East Heating &amp; Cooling
            </h2>
            <div className="grid sm:grid-cols-2 gap-5">
              {[
                { title: 'Coastal HVAC Expertise', desc: 'We understand the corrosive effects of salt air on HVAC equipment and can recommend protective measures to extend your system\'s life.' },
                { title: 'Fast Response Times', desc: 'Our technicians are dispatched promptly throughout St. Petersburg, with same-day and emergency service available.' },
                { title: 'Transparent Pricing', desc: 'We quote every job in writing before work begins. No surprise charges, no inflated repair bills — just honest, fair pricing.' },
                { title: 'Full-Service Capability', desc: 'From small repairs to complete HVAC replacements, we handle every aspect of residential and commercial HVAC service.' },
                { title: 'Licensed & Insured', desc: 'All technicians are fully licensed by the state of Florida and carry comprehensive liability and workers\' compensation coverage.' },
                { title: 'Satisfaction Guaranteed', desc: 'We stand behind our work. If any part of your service experience falls short of your expectations, we\'ll make it right.' },
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
              Areas Near St. Petersburg We Also Serve
            </h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              Beyond St. Petersburg, our service territory covers the broader Tampa Bay region. Nearby communities
              we serve include:
            </p>
            <div className="flex flex-wrap gap-3">
              {[
                { name: 'Tampa, FL', slug: 'tampa-fl' },
                { name: 'Clearwater, FL', slug: 'clearwater-fl' },
                { name: 'Gibsonton, FL', slug: 'gibsonton-fl' },
                { name: 'Apollo Beach, FL', slug: 'apollo-beach-fl' },
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
                  Request a Free Consultation in St. Petersburg
                </h2>
                <p className="text-blue-100 leading-relaxed mb-6">
                  Contact North East Heating &amp; Cooling today for fast, professional HVAC service anywhere
                  in St. Petersburg. Our team is ready to help.
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
                      <label htmlFor="stpete-first" className="block text-sm font-medium text-gray-700 mb-1">First Name</label>
                      <input id="stpete-first" type="text" placeholder="John" className="w-full border border-gray-300 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent" />
                    </div>
                    <div>
                      <label htmlFor="stpete-last" className="block text-sm font-medium text-gray-700 mb-1">Last Name</label>
                      <input id="stpete-last" type="text" placeholder="Smith" className="w-full border border-gray-300 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent" />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="stpete-phone" className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
                    <input id="stpete-phone" type="tel" placeholder="(813) 555-0123" className="w-full border border-gray-300 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent" />
                  </div>
                  <div>
                    <label htmlFor="stpete-service" className="block text-sm font-medium text-gray-700 mb-1">Service Needed</label>
                    <select id="stpete-service" className="w-full border border-gray-300 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-700">
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
                    <label htmlFor="stpete-message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                    <textarea id="stpete-message" rows={3} placeholder="Describe your HVAC issue or project..." className="w-full border border-gray-300 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none" />
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
