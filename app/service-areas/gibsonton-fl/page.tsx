import type { Metadata } from 'next'
import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'HVAC Services in Gibsonton, FL | North East Heating & Cooling',
  description:
    'Affordable HVAC repair, AC installation, heating services, and air duct repair in Gibsonton, FL. North East Heating & Cooling — call (813) 291-6146 for fast, local service.',
}

export default function GibsontonPage() {
  return (
    <>
      <Header />
      <main>
        {/* Hero Banner */}
        <section className="bg-[#1e40af] text-white py-20 px-4">
          <div className="max-w-5xl mx-auto text-center">
            <p className="text-blue-200 text-sm font-semibold uppercase tracking-widest mb-3">
              Tampa Bay's Trusted HVAC Company
            </p>
            <h1 className="text-4xl sm:text-5xl font-extrabold leading-tight mb-5">
              HVAC Services in Gibsonton, FL
            </h1>
            <p className="text-blue-100 text-lg sm:text-xl max-w-3xl mx-auto leading-relaxed mb-8">
              Affordable, reliable heating and cooling services for Gibsonton homes and businesses.
              Licensed HVAC technicians serving south Hillsborough County with same-day availability.
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
              Reliable HVAC Service for Gibsonton Residents
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Gibsonton is a unique and close-knit unincorporated community in southern Hillsborough County,
              situated between Riverview and Apollo Beach along the eastern shore of Tampa Bay. With a
              population of approximately 14,000 residents, Gibsonton has a tight community feel and a
              distinctive character that sets it apart from the larger suburban developments surrounding it.
              The community is conveniently located near US-41, providing easy access to Tampa, Brandon,
              and the growing communities to the south.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              Gibsonton's location near Tampa Bay means residents experience some of the same coastal humidity
              challenges as neighboring Apollo Beach and Ruskin. High humidity levels throughout the year
              place significant demands on air conditioning systems, which must not only cool the air but also
              remove substantial amounts of moisture to maintain comfortable indoor conditions. A properly
              sized, well-maintained HVAC system is essential for healthy, comfortable living in Gibsonton's
              warm, humid climate.
            </p>
            <p className="text-gray-700 leading-relaxed">
              North East Heating &amp; Cooling provides responsive, affordable HVAC service throughout
              Gibsonton. Our technicians are familiar with the community and respond quickly to service
              calls in the area. Call us at{' '}
              <a href="tel:8132916146" className="text-blue-700 font-semibold hover:underline">(813) 291-6146</a>{' '}
              to schedule your service today.
            </p>
          </div>
        </section>

        {/* HVAC Repair */}
        <section className="bg-gray-50 py-16 px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-extrabold text-blue-900 mb-5">
              HVAC Repair Services in Gibsonton, FL
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              When your AC breaks down in Gibsonton's summer heat, you need a fast, reliable technician
              who won't overcharge you for a straightforward repair. North East Heating &amp; Cooling
              provides honest diagnostic service and repair for all types of HVAC failures throughout
              Gibsonton. We fix refrigerant leaks, replace failed capacitors and contactors, repair
              blower motors and fan blades, clear clogged condensate drain lines, and address any other
              issue preventing your system from cooling effectively.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              We believe in fixing what needs to be fixed and not recommending unnecessary replacements
              when a repair is the right answer. Our technicians provide an honest assessment of your
              system's condition and give you all the information you need to make an informed decision
              about repairs, without any pressure to upgrade unnecessarily.
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
              AC Installation in Gibsonton, FL
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              When the time comes to replace an aging air conditioner in your Gibsonton home, North East
              Heating &amp; Cooling makes the process straightforward and stress-free. We offer a range of
              equipment options at different price points, from value-conscious standard efficiency units
              to high-efficiency systems that deliver greater long-term energy savings. Our goal is to
              match you with the right system for your home and budget — not to sell you more system
              than you need.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              Every installation begins with a proper load calculation to ensure correct sizing. We handle
              all permits, perform a clean, professional installation, and thoroughly test the system before
              we leave your property. We'll also walk you through the new system's operation, thermostat
              settings, and filter maintenance requirements so you can keep it running efficiently for
              years to come.
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
              Heating Services in Gibsonton, FL
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Gibsonton's winters are mild, but cold fronts during January and February can drop temperatures
              into the low 40s, making a working heating system a real comfort necessity, especially for
              households with young children, seniors, or family members with health conditions that make
              cold temperatures particularly problematic.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              We provide heat pump repair and replacement, emergency heating service, and seasonal heating
              tune-ups for Gibsonton residents. Our heating service includes a complete inspection of the
              heat pump's reversing valve, defrost controls, refrigerant charge, and auxiliary heat strips
              to ensure your system can keep your home warm when temperatures drop. A fall tune-up before
              the cool season begins is the best way to catch any potential heating issues before they
              become urgent problems.
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
              Air Duct Repair in Gibsonton, FL
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Ductwork issues are among the most common causes of comfort problems and high energy bills
              in Gibsonton homes. Leaky or damaged ducts waste the conditioned air your HVAC system works
              hard to produce, pushing it into attic spaces and wall cavities rather than into your
              living spaces. In Gibsonton's humid climate, duct leaks also introduce moisture into the
              system, potentially promoting mold and mildew growth in the ductwork and throughout the home.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              Our duct technicians inspect, test, seal, and repair ductwork throughout Gibsonton, identifying
              problem areas and addressing them with durable solutions that provide lasting improvement.
              Whether you have a minor leak at a duct connection or significant damage throughout the system,
              we have the tools and expertise to restore your ductwork to proper working condition.
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
              Commercial HVAC Services in Gibsonton, FL
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Gibsonton's commercial establishments along US-41 and the surrounding area rely on dependable
              HVAC systems to serve their customers and comply with Florida's health and safety requirements
              for commercial spaces. North East Heating &amp; Cooling provides commercial HVAC repair,
              installation, and preventive maintenance for Gibsonton businesses.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              Whether you operate a restaurant, retail shop, office, or light industrial facility in
              Gibsonton, we can keep your commercial HVAC system running reliably. Our maintenance
              agreements are priced competitively for small businesses and structured to minimize
              disruption to your operations. We also respond promptly to emergency commercial calls
              to get your system back online as quickly as possible.
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
              Why Gibsonton Residents Choose North East Heating &amp; Cooling
            </h2>
            <div className="grid sm:grid-cols-2 gap-5">
              {[
                { title: 'Local & Responsive', desc: 'We serve Gibsonton as part of our core south Hillsborough County service area and can dispatch technicians quickly to the community.' },
                { title: 'Honest Pricing', desc: 'We provide written estimates and stick to them. No bait-and-switch pricing, no inflated repair costs — just fair, transparent service.' },
                { title: 'Repair-First Philosophy', desc: 'We always tell you honestly whether repair or replacement makes more sense for your situation. We don\'t push replacements when repairs are appropriate.' },
                { title: 'Licensed & Insured', desc: 'All our technicians are fully licensed by the state of Florida and our company carries comprehensive liability and workers\' comp coverage.' },
                { title: 'Same-Day Service', desc: 'We offer same-day and emergency service throughout Gibsonton, so you\'re not left without cooling in Tampa Bay\'s intense summer heat.' },
                { title: 'Satisfaction Guaranteed', desc: 'Every job we do in Gibsonton is backed by our satisfaction guarantee. We\'re not done until you\'re happy with the results.' },
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
              Areas Near Gibsonton We Also Serve
            </h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              Beyond Gibsonton, we serve all of south and central Hillsborough County including:
            </p>
            <div className="flex flex-wrap gap-3">
              {[
                { name: 'Riverview, FL', slug: 'riverview-fl' },
                { name: 'Apollo Beach, FL', slug: 'apollo-beach-fl' },
                { name: 'Brandon, FL', slug: 'brandon-fl' },
                { name: 'Ruskin, FL', slug: 'ruskin-fl' },
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
                  Request a Free Consultation in Gibsonton
                </h2>
                <p className="text-blue-100 leading-relaxed mb-6">
                  Contact North East Heating &amp; Cooling for affordable, professional HVAC service
                  throughout Gibsonton. We&apos;re your local HVAC experts in south Hillsborough County.
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
                      <label htmlFor="gib-first" className="block text-sm font-medium text-gray-700 mb-1">First Name</label>
                      <input id="gib-first" type="text" placeholder="John" className="w-full border border-gray-300 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent" />
                    </div>
                    <div>
                      <label htmlFor="gib-last" className="block text-sm font-medium text-gray-700 mb-1">Last Name</label>
                      <input id="gib-last" type="text" placeholder="Smith" className="w-full border border-gray-300 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent" />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="gib-phone" className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
                    <input id="gib-phone" type="tel" placeholder="(813) 555-0123" className="w-full border border-gray-300 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent" />
                  </div>
                  <div>
                    <label htmlFor="gib-service" className="block text-sm font-medium text-gray-700 mb-1">Service Needed</label>
                    <select id="gib-service" className="w-full border border-gray-300 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-700">
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
                    <label htmlFor="gib-message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                    <textarea id="gib-message" rows={3} placeholder="Describe your HVAC issue or project..." className="w-full border border-gray-300 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none" />
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
      <Footer />
    </>
  )
}
