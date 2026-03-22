import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'HVAC Services in Wesley Chapel, FL | North East Heating & Cooling',
  description: 'Professional HVAC repair, AC installation & maintenance in Wesley Chapel, FL. Licensed technicians serving this rapidly growing suburb with new construction expertise. Call (813) 291-6146.',
}

export default function WesleyChapelPage() {
  return (
    <main className="flex flex-col">

      {/* Hero Banner */}
      <section className="bg-[#0f1620] text-white py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-4xl font-bold mb-4">HVAC Services in Wesley Chapel, FL</h1>
          <p className="text-xl text-blue-200 mb-6">
            Professional heating and cooling services for Wesley Chapel's rapidly expanding residential communities and new construction developments.
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
            Wesley Chapel has become one of the fastest-growing communities in the entire state of Florida, with thousands of new homes, master-planned communities, and commercial developments coming online each year. Located in Pasco County just north of Tampa, Wesley Chapel attracts families, young professionals, and retirees drawn to its excellent schools, modern amenities, and high quality of life. With this growth comes increased demand for professional, reliable HVAC services — because in Florida, a functioning air conditioning system is not optional.
          </p>
          <p className="text-gray-700 text-lg leading-relaxed">
            North East Heating &amp; Cooling is proud to serve Wesley Chapel with expert HVAC repair, installation, and maintenance services. Whether your home was just built or is a few years old, our licensed technicians provide the quality service your family deserves. We work with all major HVAC brands and stay current with the latest equipment and installation best practices to ensure your home stays comfortable year-round.
          </p>
        </div>
      </section>

      {/* HVAC Repair */}
      <section className="bg-gray-50 py-12 px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-blue-900 mb-4">HVAC Repair Services in Wesley Chapel</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Even brand-new HVAC systems can experience issues, and as Wesley Chapel's housing stock matures, repair needs will only grow. North East Heating &amp; Cooling provides same-day and emergency HVAC repair throughout Wesley Chapel. Our technicians are experienced with the systems commonly installed in newer construction — including high-efficiency heat pumps, two-stage systems, and smart thermostat setups.
          </p>
          <p className="text-gray-700 leading-relaxed">
            We diagnose problems accurately and repair them efficiently, providing clear communication throughout the process. Whether you're dealing with a refrigerant leak, an unresponsive thermostat, or a unit that simply isn't keeping up with the Florida heat, we have the skills and tools to resolve the issue. For trusted <Link href="/residential/hvac-service-tampa" className="text-blue-700 underline hover:text-blue-900">residential HVAC repair</Link> in Wesley Chapel, contact North East Heating &amp; Cooling today.
          </p>
        </div>
      </section>

      {/* AC Installation */}
      <section className="bg-white py-12 px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-blue-900 mb-4">AC Installation &amp; Replacement in Wesley Chapel</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Wesley Chapel's booming new construction market means there's constant demand for professional <Link href="/residential/hvac-installation-tampa-fl" className="text-blue-700 underline hover:text-blue-900">AC installation</Link> services. North East Heating &amp; Cooling installs new systems in new construction homes as well as replacement systems in existing properties throughout Wesley Chapel. Every installation begins with a proper load calculation to ensure your system is sized correctly for your home's square footage, layout, and exposure.
          </p>
          <p className="text-gray-700 leading-relaxed">
            We offer a range of high-efficiency systems that are ideal for Florida's demanding climate. Newer technologies such as variable-speed compressors and advanced dehumidification features are particularly well-suited to Wesley Chapel's hot, humid summers. Our team handles all permits and inspections, delivering a complete, code-compliant installation from start to finish.
          </p>
        </div>
      </section>

      {/* Heating Services */}
      <section className="bg-gray-50 py-12 px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-blue-900 mb-4">Heating Services in Wesley Chapel</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Wesley Chapel's newer homes are typically equipped with modern heat pump systems that efficiently handle both heating and cooling. While Florida winters are generally mild, cold snaps do occur, and a heat pump that hasn't been properly maintained may struggle to keep up. North East Heating &amp; Cooling provides annual heating tune-ups, heat pump repairs, and complete system replacements for Wesley Chapel homeowners.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Preventive maintenance is especially valuable in newer systems, as it keeps warranties current and helps identify any installation or manufacturing issues before they become larger problems. Schedule your fall heating tune-up with our team and enjoy worry-free comfort throughout the cooler months.
          </p>
        </div>
      </section>

      {/* Air Duct Repair */}
      <section className="bg-white py-12 px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-blue-900 mb-4">Air Duct Repair in Wesley Chapel</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Even in newer Wesley Chapel homes, ductwork issues can occur. Improperly sealed connections during original construction, damage during subsequent work in attic spaces, and the natural settling of a new home can all lead to duct leaks that reduce system efficiency and comfort. Our <Link href="/residential/air-duct-repair-tampa" className="text-blue-700 underline hover:text-blue-900">air duct repair</Link> services identify and correct these issues, ensuring your HVAC system delivers conditioned air efficiently to every room.
          </p>
          <p className="text-gray-700 leading-relaxed">
            If you notice certain rooms that seem harder to cool, unexpectedly high energy bills, or excess dust accumulation, your ductwork may be the cause. Our team performs a thorough duct inspection and provides professional repairs using materials rated for Florida's temperature extremes. Properly functioning ductwork is the foundation of a high-performing HVAC system.
          </p>
        </div>
      </section>

      {/* Commercial HVAC */}
      <section className="bg-gray-50 py-12 px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-blue-900 mb-4">Commercial HVAC Services in Wesley Chapel</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Wesley Chapel's rapid growth has attracted a wide variety of commercial developments, including major retail centers, restaurants, medical facilities, and professional office parks. All of these businesses depend on reliable commercial HVAC systems to serve their customers and employees effectively. Our <Link href="/commercial/hvac-service-tampa" className="text-blue-700 underline hover:text-blue-900">commercial HVAC service</Link> team provides maintenance contracts, emergency repair service, and complete system installations for commercial properties throughout Wesley Chapel.
          </p>
          <p className="text-gray-700 leading-relaxed">
            We understand the high expectations that Wesley Chapel's growing commercial community has for quality and reliability. Our commercial team works efficiently and professionally to keep your business operations running smoothly, delivering the same standard of excellence that has made us a trusted name throughout the greater Tampa Bay area.
          </p>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-white py-12 px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-blue-900 mb-6">Why Residents &amp; Businesses in Wesley Chapel Choose North East Heating &amp; Cooling</h2>
          <ul className="space-y-3 text-gray-700">
            <li className="flex items-start gap-3">
              <span className="text-blue-700 font-bold mt-1">&#10003;</span>
              <span>Licensed, insured, and background-checked technicians serving the greater Tampa Bay area</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-blue-700 font-bold mt-1">&#10003;</span>
              <span>Expertise with new construction HVAC systems and modern high-efficiency equipment</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-blue-700 font-bold mt-1">&#10003;</span>
              <span>Transparent, upfront pricing with no hidden fees or surprise charges</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-blue-700 font-bold mt-1">&#10003;</span>
              <span>Same-day and emergency HVAC service available throughout Wesley Chapel</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-blue-700 font-bold mt-1">&#10003;</span>
              <span>Knowledge of new construction communities and HOA requirements throughout Wesley Chapel</span>
            </li>
          </ul>
        </div>
      </section>

      {/* Nearby Areas */}
      <section className="bg-gray-50 py-12 px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-blue-900 mb-4">Areas Near Wesley Chapel We Also Serve</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            In addition to Wesley Chapel, North East Heating &amp; Cooling provides HVAC services throughout the surrounding Tampa Bay region. View our <Link href="/service-areas" className="text-blue-700 underline hover:text-blue-900">all service areas</Link> page for a complete list, or explore nearby communities we serve:
          </p>
          <ul className="grid grid-cols-2 gap-3 text-blue-700 font-medium">
            <li><Link href="/service-areas/land-o-lakes-fl" className="hover:underline">Land O Lakes, FL</Link></li>
            <li><Link href="/service-areas/lutz-fl" className="hover:underline">Lutz, FL</Link></li>
            <li><Link href="/service-areas/new-port-richey-fl" className="hover:underline">New Port Richey, FL</Link></li>
            <li><Link href="/service-areas/zephyrhills-fl" className="hover:underline">Zephyrhills, FL</Link></li>
          </ul>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#0f1620] text-white py-14 px-4">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Request a Free HVAC Consultation in Wesley Chapel</h2>
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
              <label className="block text-gray-700 text-sm font-medium mb-1" htmlFor="name-wc">Name</label>
              <input id="name-wc" type="text" className="w-full border border-gray-300 rounded px-3 py-2 text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-600" placeholder="Your Name" />
            </div>
            <div>
              <label className="block text-gray-700 text-sm font-medium mb-1" htmlFor="phone-wc">Phone</label>
              <input id="phone-wc" type="tel" className="w-full border border-gray-300 rounded px-3 py-2 text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-600" placeholder="(813) 000-0000" />
            </div>
            <div>
              <label className="block text-gray-700 text-sm font-medium mb-1" htmlFor="service-wc">Service Needed</label>
              <select id="service-wc" className="w-full border border-gray-300 rounded px-3 py-2 text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-600">
                <option value="">Select a service...</option>
                <option value="repair">HVAC Repair</option>
                <option value="installation">AC Installation</option>
                <option value="maintenance">Maintenance / Tune-Up</option>
                <option value="duct">Air Duct Repair</option>
                <option value="commercial">Commercial HVAC</option>
              </select>
            </div>
            <div>
              <label className="block text-gray-700 text-sm font-medium mb-1" htmlFor="message-wc">Message</label>
              <textarea id="message-wc" rows={3} className="w-full border border-gray-300 rounded px-3 py-2 text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-600" placeholder="Describe your HVAC issue or request..." />
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
