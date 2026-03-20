import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'HVAC Services in Odessa, FL | North East Heating & Cooling',
  description: 'Professional HVAC repair, AC installation & maintenance in Odessa, FL. Licensed technicians serving upscale residential communities west of Tampa. Call (813) 291-6146 for fast service.',
}

export default function OdessaPage() {
  return (
    <main className="flex flex-col">

      {/* Hero Banner */}
      <section className="bg-blue-900 text-white py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-4xl font-bold mb-4">HVAC Services in Odessa, FL</h1>
          <p className="text-xl text-blue-200 mb-6">
            Premium HVAC repair, installation, and maintenance for Odessa's upscale residential communities and businesses west of Tampa.
          </p>
          <a
            href="tel:8132916146"
            className="inline-block bg-white text-blue-900 font-bold px-8 py-3 rounded hover:bg-blue-50 transition-colors"
          >
            Call (813) 291-6146
          </a>
        </div>
      </section>

      {/* Intro */}
      <section className="bg-white py-12 px-4">
        <div className="max-w-5xl mx-auto">
          <p className="text-gray-700 text-lg leading-relaxed mb-6">
            Odessa is one of Tampa Bay's most desirable residential communities, known for its spacious homes, upscale neighborhoods, and scenic lakes. Located just west of Tampa along the Hillsborough-Pasco county border, Odessa attracts discerning homeowners who expect the best — including when it comes to HVAC service. With Florida's demanding climate, a properly sized and well-maintained cooling system is essential to protecting both your family's comfort and your home's value.
          </p>
          <p className="text-gray-700 text-lg leading-relaxed">
            North East Heating &amp; Cooling provides the professional, high-quality HVAC service that Odessa residents expect. Our licensed technicians are experienced in servicing larger and more complex residential HVAC systems common in upscale homes. We offer thorough assessments, premium equipment options, and meticulous installations — all backed by our commitment to customer satisfaction.
          </p>
        </div>
      </section>

      {/* HVAC Repair */}
      <section className="bg-gray-50 py-12 px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-blue-900 mb-4">HVAC Repair Services in Odessa</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            When your HVAC system fails in an Odessa home, you need a repair team that is prompt, professional, and thorough. North East Heating &amp; Cooling offers same-day and emergency HVAC repair service throughout Odessa. Our technicians are equipped to diagnose and repair all makes and models, including multi-zone systems, variable-speed units, and high-efficiency equipment commonly found in Odessa's larger homes.
          </p>
          <p className="text-gray-700 leading-relaxed">
            We take the time to thoroughly diagnose the root cause of any issue rather than offering a quick fix that leaves underlying problems unresolved. For expert <Link href="/residential/hvac-service-tampa" className="text-blue-700 underline hover:text-blue-900">residential HVAC repair</Link> in Odessa, homeowners trust North East Heating &amp; Cooling for honest, high-quality service.
          </p>
        </div>
      </section>

      {/* AC Installation */}
      <section className="bg-white py-12 px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-blue-900 mb-4">AC Installation &amp; Replacement in Odessa</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Odessa's larger homes require carefully selected and properly installed HVAC systems to ensure consistent comfort throughout every room. Our <Link href="/residential/hvac-installation-tampa-fl" className="text-blue-700 underline hover:text-blue-900">AC installation</Link> process begins with a detailed load calculation that accounts for your home's square footage, ceiling heights, insulation levels, window exposure, and other factors unique to your property.
          </p>
          <p className="text-gray-700 leading-relaxed">
            We offer premium, high-efficiency systems from leading manufacturers and can guide you toward options with advanced features such as variable-speed compressors, smart thermostat compatibility, and enhanced dehumidification — features particularly valuable in Florida's humid climate. Every installation is handled by our licensed technicians and backed by manufacturer warranties.
          </p>
        </div>
      </section>

      {/* Heating Services */}
      <section className="bg-gray-50 py-12 px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-blue-900 mb-4">Heating Services in Odessa</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            While Odessa's winters are typically mild, colder-than-expected nights do occur, and a well-functioning heating system is important for year-round home comfort. Many of Odessa's upscale homes feature heat pump systems that provide both heating and cooling — and these systems require regular maintenance to perform at their best.
          </p>
          <p className="text-gray-700 leading-relaxed">
            North East Heating &amp; Cooling provides comprehensive heating services including annual tune-ups, heat pump repairs, and complete heating system replacements. Scheduling a fall maintenance visit helps ensure your system is ready for the cooler months while also keeping your warranty current and your system running at peak efficiency.
          </p>
        </div>
      </section>

      {/* Air Duct Repair */}
      <section className="bg-white py-12 px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-blue-900 mb-4">Air Duct Repair in Odessa</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            In larger Odessa homes, ductwork systems can be extensive and complex — making duct leaks and inefficiencies particularly costly. Leaky ducts in a large home can waste a significant amount of conditioned air, resulting in uneven temperatures between rooms and substantially higher utility bills. Our <Link href="/residential/air-duct-repair-tampa" className="text-blue-700 underline hover:text-blue-900">air duct repair</Link> services identify and seal leaks, reconnect displaced duct sections, and improve the overall performance of your HVAC system.
          </p>
          <p className="text-gray-700 leading-relaxed">
            We perform thorough duct inspections using professional tools and techniques. In homes with older ductwork, we may recommend a full duct replacement to bring your system up to modern efficiency standards. Our team will provide a detailed assessment and clear pricing so you can make an informed decision.
          </p>
        </div>
      </section>

      {/* Commercial HVAC */}
      <section className="bg-gray-50 py-12 px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-blue-900 mb-4">Commercial HVAC Services in Odessa</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Odessa's commercial properties — including professional offices, medical practices, and retail establishments — require reliable, well-maintained HVAC systems to serve their clients and employees effectively. Our <Link href="/commercial/hvac-service-tampa" className="text-blue-700 underline hover:text-blue-900">commercial HVAC service</Link> team delivers preventive maintenance programs, emergency repairs, and system upgrades for commercial buildings throughout the Odessa area.
          </p>
          <p className="text-gray-700 leading-relaxed">
            We understand the importance of professionalism and minimal disruption when servicing commercial properties. Our team coordinates with your schedule to perform maintenance and repairs with as little impact on your operations as possible, keeping your business comfortable and running smoothly.
          </p>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-white py-12 px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-blue-900 mb-6">Why Residents &amp; Businesses in Odessa Choose North East Heating &amp; Cooling</h2>
          <ul className="space-y-3 text-gray-700">
            <li className="flex items-start gap-3">
              <span className="text-blue-700 font-bold mt-1">&#10003;</span>
              <span>Licensed, insured, and background-checked technicians serving the greater Tampa Bay area</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-blue-700 font-bold mt-1">&#10003;</span>
              <span>Experience with larger, more complex HVAC systems found in Odessa's upscale residential properties</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-blue-700 font-bold mt-1">&#10003;</span>
              <span>Transparent, upfront pricing with no hidden fees or surprise charges</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-blue-700 font-bold mt-1">&#10003;</span>
              <span>Same-day and emergency HVAC repair service available throughout Odessa</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-blue-700 font-bold mt-1">&#10003;</span>
              <span>Premium equipment options including high-efficiency and variable-speed systems</span>
            </li>
          </ul>
        </div>
      </section>

      {/* Nearby Areas */}
      <section className="bg-gray-50 py-12 px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-blue-900 mb-4">Areas Near Odessa We Also Serve</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            In addition to Odessa, North East Heating &amp; Cooling provides HVAC services throughout the surrounding Tampa Bay region. View our <Link href="/service-areas" className="text-blue-700 underline hover:text-blue-900">all service areas</Link> page for a complete list, or explore nearby communities we serve:
          </p>
          <ul className="grid grid-cols-2 gap-3 text-blue-700 font-medium">
            <li><Link href="/service-areas/lutz-fl" className="hover:underline">Lutz, FL</Link></li>
            <li><Link href="/service-areas/carrollwood-fl" className="hover:underline">Carrollwood, FL</Link></li>
            <li><Link href="/service-areas/palm-harbor-fl" className="hover:underline">Palm Harbor, FL</Link></li>
            <li><Link href="/service-areas/new-port-richey-fl" className="hover:underline">New Port Richey, FL</Link></li>
          </ul>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-blue-800 text-white py-14 px-4">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Request a Free HVAC Consultation in Odessa</h2>
          <p className="text-blue-200 text-lg mb-8">
            Ready to schedule service or get a free estimate? Call us or send a message and a member of our team will be in touch shortly.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10">
            <a
              href="tel:8132916146"
              className="bg-white text-blue-900 font-bold px-8 py-3 rounded hover:bg-blue-50 transition-colors"
            >
              Call (813) 291-6146
            </a>
            <a
              href="mailto:office@northeastheatingcooling.com"
              className="border-2 border-white text-white font-bold px-8 py-3 rounded hover:bg-blue-700 transition-colors"
            >
              Email Us
            </a>
          </div>
          <form className="max-w-xl mx-auto bg-white rounded-lg p-6 text-left space-y-4">
            <h3 className="text-blue-900 text-xl font-bold mb-2">Get a Free Estimate</h3>
            <div>
              <label className="block text-gray-700 text-sm font-medium mb-1" htmlFor="name-od">Name</label>
              <input id="name-od" type="text" className="w-full border border-gray-300 rounded px-3 py-2 text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-600" placeholder="Your Name" />
            </div>
            <div>
              <label className="block text-gray-700 text-sm font-medium mb-1" htmlFor="phone-od">Phone</label>
              <input id="phone-od" type="tel" className="w-full border border-gray-300 rounded px-3 py-2 text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-600" placeholder="(813) 000-0000" />
            </div>
            <div>
              <label className="block text-gray-700 text-sm font-medium mb-1" htmlFor="service-od">Service Needed</label>
              <select id="service-od" className="w-full border border-gray-300 rounded px-3 py-2 text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-600">
                <option value="">Select a service...</option>
                <option value="repair">HVAC Repair</option>
                <option value="installation">AC Installation</option>
                <option value="maintenance">Maintenance / Tune-Up</option>
                <option value="duct">Air Duct Repair</option>
                <option value="commercial">Commercial HVAC</option>
              </select>
            </div>
            <div>
              <label className="block text-gray-700 text-sm font-medium mb-1" htmlFor="message-od">Message</label>
              <textarea id="message-od" rows={3} className="w-full border border-gray-300 rounded px-3 py-2 text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-600" placeholder="Describe your HVAC issue or request..." />
            </div>
            <button type="submit" className="w-full bg-blue-800 text-white font-bold py-3 rounded hover:bg-blue-900 transition-colors">
              Submit Request
            </button>
          </form>
        </div>
      </section>

    </main>
  )
}
