import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'HVAC Services in Apollo Beach, FL | North East Heating & Cooling',
  description:
    'Expert HVAC repair, AC installation, heating services, and air duct repair in Apollo Beach, FL. North East Heating & Cooling — call (813) 291-6146 for coastal HVAC specialists.',
}

export default function ApolloBeachPage() {
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
              HVAC Services in Apollo Beach, FL
            </h1>
            <p className="text-blue-100 text-lg sm:text-xl max-w-3xl mx-auto leading-relaxed mb-8">
              Coastal HVAC specialists serving Apollo Beach homeowners and waterfront properties. Expert
              heating, cooling, and air quality service built for Tampa Bay's unique marine environment.
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
              HVAC Experts for Apollo Beach's Waterfront Community
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Apollo Beach is one of Tampa Bay's most desirable waterfront communities, situated along the
              eastern shore of Tampa Bay in southern Hillsborough County. Known for its navigable canals,
              direct bay access, and stunning water views, Apollo Beach attracts residents who appreciate the
              Florida waterfront lifestyle — and who understand that coastal living comes with some unique
              maintenance considerations, particularly when it comes to HVAC equipment.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              Homes in Apollo Beach are exposed to the salt air carried in from Tampa Bay on the prevailing
              sea breeze. This salt-laden air is highly corrosive to metal HVAC components, particularly
              condenser coils, electrical contacts, and refrigerant line connections. Systems in Apollo Beach
              and other waterfront communities can show significant corrosion damage in just a few years if
              they are not specifically designed for coastal environments or protected with appropriate coatings
              and regular maintenance. North East Heating &amp; Cooling's technicians are experienced in
              servicing HVAC systems in Apollo Beach's marine environment and can recommend the right
              equipment choices and maintenance practices to protect your investment.
            </p>
            <p className="text-gray-700 leading-relaxed">
              From the established waterfront homes along the canals to the newer construction in communities
              like MiraBay, we serve all of Apollo Beach with professional HVAC service. Call us at{' '}
              <a href="tel:8132916146" className="text-blue-700 font-semibold hover:underline">(813) 291-6146</a>{' '}
              for a consultation today.
            </p>
          </div>
        </section>

        {/* HVAC Repair */}
        <section className="bg-gray-50 py-16 px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-extrabold text-blue-900 mb-5">
              HVAC Repair Services in Apollo Beach, FL
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              HVAC repairs in Apollo Beach often involve addressing accelerated corrosion of condenser coils
              and electrical components, in addition to the standard range of mechanical and refrigerant
              issues seen throughout the Tampa Bay area. Our technicians are experienced in identifying
              corrosion-related failures and can recommend corrosion inhibitor coatings for the condenser
              unit to slow future deterioration.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              We provide same-day and emergency repair service throughout Apollo Beach and respond quickly
              to all service calls. Our trucks are fully stocked with the most commonly needed parts, and
              our technicians are trained to work efficiently in Apollo Beach's waterfront settings, including
              homes with challenging access or unique equipment placement requirements.
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
              AC Installation in Apollo Beach, FL
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              When it's time to replace your Apollo Beach home's air conditioning system, choosing the right
              equipment for a coastal environment is critical. We strongly recommend coastal-rated systems
              with factory-applied protective coatings on condenser coils for properties in Apollo Beach
              and other waterfront communities. These systems are specifically engineered to withstand salt
              air corrosion and can last significantly longer than standard equipment in marine environments.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              Our installation team will assess your home's specific requirements, perform a thorough load
              calculation, and recommend the right system for both your comfort needs and Apollo Beach's
              coastal environment. We handle all permits, electrical work, and startup testing, and we take
              care to ensure proper drainage and condensate management given the high humidity levels that
              waterfront properties experience.
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
              Heating Services in Apollo Beach, FL
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Apollo Beach's waterfront location means temperatures stay somewhat milder than inland areas
              during winter, but cold fronts can still push nighttime lows into the 40s during January and
              February. Heat pump systems in Apollo Beach need particular attention to their reversing valves
              and defrost cycles, as the salt air environment can accelerate wear on these critical components.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              We offer comprehensive heat pump repair and replacement services throughout Apollo Beach,
              along with fall heating tune-ups to prepare your system for the winter season. For Apollo
              Beach's many vacation and seasonal properties, we also offer pre-season startup inspections
              to ensure your HVAC system is in top condition when you arrive for the winter months.
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
              Air Duct Repair in Apollo Beach, FL
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Apollo Beach's high humidity environment makes duct integrity especially important. Even
              small duct leaks allow humid outdoor air to enter the system, contributing to moisture
              buildup in the ductwork and the potential for mold growth — a serious concern in any home,
              but especially problematic in coastal properties where humidity levels are consistently high.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              Our duct specialists provide complete duct inspection, sealing, and replacement services
              for Apollo Beach homes. We use moisture-resistant insulation and high-quality sealants
              appropriate for humid coastal environments, and we can design and install duct systems
              that minimize condensation and moisture accumulation in Apollo Beach's challenging climate.
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
              Commercial HVAC Services in Apollo Beach, FL
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Apollo Beach is home to a growing commercial corridor along US-41, including restaurants,
              retail shops, marinas, and waterfront dining establishments that serve both residents and
              visitors to this scenic bay community. Commercial HVAC systems in Apollo Beach face the
              same coastal corrosion challenges as residential equipment, and regular maintenance is
              particularly important to prevent premature equipment failure.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              We provide commercial HVAC installation, repair, and preventive maintenance for Apollo
              Beach businesses. Our commercial maintenance contracts can include coil cleaning and
              corrosion inspection specifically designed for coastal commercial properties, helping
              businesses in Apollo Beach get the maximum service life from their HVAC investment.
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
              Why Apollo Beach Residents Choose North East Heating &amp; Cooling
            </h2>
            <div className="grid sm:grid-cols-2 gap-5">
              {[
                { title: 'Coastal HVAC Specialists', desc: 'We understand the unique demands that Tampa Bay\'s salt air environment places on HVAC equipment and tailor our recommendations accordingly.' },
                { title: 'Rapid Response', desc: 'Same-day and emergency service throughout Apollo Beach, so you\'re never left without cooling in Florida\'s intense summer heat.' },
                { title: 'Honest Assessments', desc: 'We give you the straight story on your system\'s condition and what it needs — no upselling, no scare tactics, just honest HVAC advice.' },
                { title: 'Coastal-Rated Equipment', desc: 'We recommend and install HVAC systems with enhanced corrosion protection specifically designed for coastal environments like Apollo Beach.' },
                { title: 'Licensed & Insured', desc: 'All technicians carry Florida HVAC licenses and our company maintains full liability and workers\' compensation insurance coverage.' },
                { title: 'Satisfaction Guaranteed', desc: 'Every service call and installation in Apollo Beach is backed by our commitment to your complete satisfaction.' },
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
              Areas Near Apollo Beach We Also Serve
            </h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              In addition to Apollo Beach, we serve the surrounding south Hillsborough County communities including:
            </p>
            <div className="flex flex-wrap gap-3">
              {[
                { name: 'Ruskin, FL', slug: 'ruskin-fl' },
                { name: 'Gibsonton, FL', slug: 'gibsonton-fl' },
                { name: 'Riverview, FL', slug: 'riverview-fl' },
                { name: 'Brandon, FL', slug: 'brandon-fl' },
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
                  Request a Free Consultation in Apollo Beach
                </h2>
                <p className="text-blue-100 leading-relaxed mb-6">
                  Contact North East Heating &amp; Cooling for coastal HVAC expertise throughout Apollo
                  Beach. We understand waterfront properties and deliver service that stands up to Tampa
                  Bay&apos;s marine environment.
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
                      <label htmlFor="ab-first" className="block text-sm font-medium text-gray-700 mb-1">First Name</label>
                      <input id="ab-first" type="text" placeholder="John" className="w-full border border-gray-300 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent" />
                    </div>
                    <div>
                      <label htmlFor="ab-last" className="block text-sm font-medium text-gray-700 mb-1">Last Name</label>
                      <input id="ab-last" type="text" placeholder="Smith" className="w-full border border-gray-300 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent" />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="ab-phone" className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
                    <input id="ab-phone" type="tel" placeholder="(813) 555-0123" className="w-full border border-gray-300 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent" />
                  </div>
                  <div>
                    <label htmlFor="ab-service" className="block text-sm font-medium text-gray-700 mb-1">Service Needed</label>
                    <select id="ab-service" className="w-full border border-gray-300 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-700">
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
                    <label htmlFor="ab-message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                    <textarea id="ab-message" rows={3} placeholder="Describe your HVAC issue or project..." className="w-full border border-gray-300 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none" />
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
