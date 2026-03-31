import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'HVAC Services in Land O Lakes, FL | North East Heating & Cooling',
  description: 'Professional HVAC repair, AC installation & maintenance in Land O Lakes, FL. Licensed technicians serving this rural-suburban community in Pasco County. Call (813) 291-6146 for fast service.',
}

export default function LandOLakesPage() {
  return (
    <main className="flex flex-col">

      {/* Hero Banner */}
      <section className="bg-[#0f1620] text-white py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-4xl font-bold mb-4">HVAC Services in Land O Lakes, FL</h1>
          <p className="text-xl text-blue-200 mb-6">
            Dependable heating and cooling solutions for Land O Lakes' rural-suburban neighborhoods and newer residential developments in Pasco County.
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
            Land O Lakes is a unique community in Pasco County that blends rural character with suburban convenience. Known for its natural scenery, numerous lakes, and spacious properties, Land O Lakes has grown steadily as Tampa Bay area residents seek more space while staying connected to the region's employment and amenities. Whether you live in a sprawling rural property or one of the area's newer residential developments, reliable HVAC service is essential for comfort in Florida's demanding climate.
          </p>
          <p className="text-gray-700 text-lg leading-relaxed">
            North East Heating &amp; Cooling serves Land O Lakes homeowners and businesses with comprehensive HVAC services. Our technicians are experienced with the full range of property types found in the area — from large homes with complex multi-zone systems to newer construction in planned developments. We deliver professional, prompt service with the honest, straightforward approach that Land O Lakes residents appreciate.
          </p>
        </div>
      </section>

      {/* HVAC Repair */}
      <section className="bg-gray-50 py-12 px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-blue-900 mb-4">HVAC Repair Services in Land O Lakes</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            HVAC breakdowns in Land O Lakes can be especially frustrating given the area's warm climate and the distance from some service providers. North East Heating &amp; Cooling offers same-day and emergency HVAC repair service throughout Land O Lakes, responding quickly to get your system back up and running. Our technicians diagnose and repair a full range of issues including refrigerant problems, electrical failures, blower motor faults, compressor issues, and thermostat malfunctions.
          </p>
          <p className="text-gray-700 leading-relaxed">
            We carry a comprehensive inventory of parts and service all major HVAC brands, helping us resolve most repairs on the first visit. Our team provides clear, honest explanations of any issue and upfront pricing before work begins. For dependable <Link href="/residential/hvac-service-tampa" className="text-blue-700 underline hover:text-blue-900">residential HVAC repair</Link> in Land O Lakes, trust North East Heating &amp; Cooling.
          </p>
        </div>
      </section>

      {/* AC Installation */}
      <section className="bg-white py-12 px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-blue-900 mb-4">AC Installation &amp; Replacement in Land O Lakes</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Whether you're building a new home, replacing an aging system, or upgrading to a more efficient unit, North East Heating &amp; Cooling provides professional <Link href="/residential/hvac-installation-tampa-fl" className="text-blue-700 underline hover:text-blue-900">AC installation</Link> services throughout Land O Lakes. Larger homes in the area often require careful system design, and our team performs detailed load calculations to ensure your new equipment is properly sized for your specific property.
          </p>
          <p className="text-gray-700 leading-relaxed">
            We work with industry-leading HVAC brands and can help you select a system that delivers efficient, reliable performance in Florida's climate. For homes on larger lots or with more complex layouts, we can discuss zoning options that allow you to control temperatures in different areas of your home independently — maximizing both comfort and energy savings.
          </p>
        </div>
      </section>

      {/* Heating Services */}
      <section className="bg-gray-50 py-12 px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-blue-900 mb-4">Heating Services in Land O Lakes</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Land O Lakes experiences the same mild Florida winters as the greater Tampa Bay area, but cold nights and unexpected cold fronts can make reliable heating important — particularly for families with young children or elderly members. Most Land O Lakes homes use heat pump systems that provide efficient heating alongside year-round cooling.
          </p>
          <p className="text-gray-700 leading-relaxed">
            North East Heating &amp; Cooling offers seasonal heating maintenance, heat pump repairs, and complete system replacements for Land O Lakes homeowners. An annual fall tune-up ensures your heating system is ready before cooler weather arrives, prevents unexpected failures, and helps maintain the efficiency and longevity of your equipment.
          </p>
        </div>
      </section>

      {/* Air Duct Repair */}
      <section className="bg-white py-12 px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-blue-900 mb-4">Air Duct Repair in Land O Lakes</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            In Land O Lakes' larger homes and properties, duct systems can be extensive and more prone to developing leaks and inefficiencies. Older flex duct systems degrade over time in Florida's heat, while even newer ductwork can develop issues due to poor initial installation or physical damage. Our <Link href="/residential/air-duct-repair-tampa" className="text-blue-700 underline hover:text-blue-900">air duct repair</Link> services address leaks, disconnections, and insulation problems that undermine your HVAC system's efficiency.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Leaky ducts in a large Land O Lakes home can result in significant energy waste and rooms that never reach the desired temperature. Our team conducts a thorough duct inspection, pinpoints problem areas, and provides professional repairs to restore your system's full performance. Improved ductwork translates directly to greater comfort and lower monthly energy costs.
          </p>
        </div>
      </section>

      {/* Commercial HVAC */}
      <section className="bg-gray-50 py-12 px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-blue-900 mb-4">Commercial HVAC Services in Land O Lakes</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Land O Lakes supports a growing commercial sector that includes neighborhood retail, medical offices, and service businesses serving the surrounding community. These operations depend on properly functioning HVAC systems to maintain comfortable environments for staff and customers. Our <Link href="/commercial/hvac-service-tampa" className="text-blue-700 underline hover:text-blue-900">commercial HVAC service</Link> team provides preventive maintenance plans, emergency repair response, and system installations for commercial properties throughout Land O Lakes.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Our commercial maintenance agreements are designed to prevent the unexpected breakdowns that can disrupt business operations. We schedule service at times that are most convenient for your business, work efficiently, and provide detailed service reports so you always know the status of your commercial HVAC equipment.
          </p>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-white py-12 px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-blue-900 mb-6">Why Residents &amp; Businesses in Land O Lakes Choose North East Heating &amp; Cooling</h2>
          <ul className="space-y-3 text-gray-700">
            <li className="flex items-start gap-3">
              <span className="text-blue-700 font-bold mt-1">&#10003;</span>
              <span>Licensed, insured, and background-checked technicians serving the greater Tampa Bay area</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-blue-700 font-bold mt-1">&#10003;</span>
              <span>Experience with both established rural properties and newer residential developments in Land O Lakes</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-blue-700 font-bold mt-1">&#10003;</span>
              <span>Transparent, upfront pricing with no hidden fees or surprise charges</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-blue-700 font-bold mt-1">&#10003;</span>
              <span>Same-day and emergency HVAC repair service available throughout Land O Lakes</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-blue-700 font-bold mt-1">&#10003;</span>
              <span>Expertise in servicing larger homes and multi-zone systems common in the Land O Lakes area</span>
            </li>
          </ul>
        </div>
      </section>

      {/* Nearby Areas */}
      <section className="bg-gray-50 py-12 px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-blue-900 mb-4">Areas Near Land O Lakes We Also Serve</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            In addition to Land O Lakes, North East Heating &amp; Cooling provides HVAC services throughout the surrounding Tampa Bay region. View our <Link href="/service-areas" className="text-blue-700 underline hover:text-blue-900">all service areas</Link> page for a complete list, or explore nearby communities we serve:
          </p>
          <ul className="grid grid-cols-2 gap-3 text-blue-700 font-medium">
            <li><Link href="/service-areas/lutz-fl" className="hover:underline">Lutz, FL</Link></li>
            <li><Link href="/service-areas/wesley-chapel-fl" className="hover:underline">Wesley Chapel, FL</Link></li>
            <li><Link href="/service-areas/new-port-richey-fl" className="hover:underline">New Port Richey, FL</Link></li>
            <li><Link href="/service-areas/carrollwood-fl" className="hover:underline">Carrollwood, FL</Link></li>
          </ul>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#0f1620] text-white py-14 px-4">
        <div className="relative z-10 max-w-5xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Request a Free HVAC Consultation in Land O Lakes</h2>
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
              className="border-2 border-white text-white font-bold px-8 py-3 rounded hover:bg-red-700 transition-colors"
            >
              Email Us
            </a>
          </div>
          <form className="max-w-xl mx-auto bg-white rounded-lg p-6 text-left space-y-4">
            <h3 className="text-blue-900 text-xl font-bold mb-2">Get a Free Estimate</h3>
            <div>
              <label className="block text-gray-700 text-sm font-medium mb-1" htmlFor="name-lol">Name</label>
              <input id="name-lol" type="text" className="w-full border border-gray-300 rounded px-3 py-2 text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-600" placeholder="Your Name" />
            </div>
            <div>
              <label className="block text-gray-700 text-sm font-medium mb-1" htmlFor="phone-lol">Phone</label>
              <input id="phone-lol" type="tel" className="w-full border border-gray-300 rounded px-3 py-2 text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-600" placeholder="(813) 000-0000" />
            </div>
            <div>
              <label className="block text-gray-700 text-sm font-medium mb-1" htmlFor="service-lol">Service Needed</label>
              <select id="service-lol" className="w-full border border-gray-300 rounded px-3 py-2 text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-600">
                <option value="">Select a service...</option>
                <option value="repair">HVAC Repair</option>
                <option value="installation">AC Installation</option>
                <option value="maintenance">Maintenance / Tune-Up</option>
                <option value="duct">Air Duct Repair</option>
                <option value="commercial">Commercial HVAC</option>
              </select>
            </div>
            <div>
              <label className="block text-gray-700 text-sm font-medium mb-1" htmlFor="message-lol">Message</label>
              <textarea id="message-lol" rows={3} className="w-full border border-gray-300 rounded px-3 py-2 text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-600" placeholder="Describe your HVAC issue or request..." />
            </div>
            <button type="submit" className="w-full bg-[#0f1620] text-white font-bold py-3 rounded hover:bg-[#0f1620] transition-colors">
              Submit Request
            </button>
          </form>
        </div>
      </section>

    </main>
  )
}
