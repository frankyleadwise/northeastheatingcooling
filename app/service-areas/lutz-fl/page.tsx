import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'HVAC Services in Lutz, FL | North East Heating & Cooling',
  description: 'Professional HVAC repair, AC installation & maintenance in Lutz, FL. Licensed technicians serving this growing suburb north of Tampa. Call (813) 291-6146 for fast service.',
}

export default function LutzPage() {
  return (
    <main className="flex flex-col">

      {/* Hero Banner */}
      <section className="bg-[#0f1620] text-white py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-4xl font-bold mb-4">HVAC Services in Lutz, FL</h1>
          <p className="text-xl text-blue-200 mb-6">
            Expert heating and cooling services for Lutz's rapidly growing residential and commercial communities north of Tampa.
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
            Lutz is one of the Tampa Bay area's fastest-growing communities, attracting new residents drawn by its combination of suburban convenience, quality schools, and proximity to Tampa's employment centers. As Lutz continues to grow, so does the demand for reliable HVAC services. Florida's hot and humid climate makes air conditioning not just a comfort, but a daily necessity — and Lutz residents know that their cooling systems need to perform flawlessly through long, sweltering summers.
          </p>
          <p className="text-gray-700 text-lg leading-relaxed">
            North East Heating &amp; Cooling serves Lutz homeowners and businesses with comprehensive HVAC repair, installation, and maintenance services. Whether you're in an established neighborhood or a newer development, our licensed technicians bring the expertise and equipment needed to keep your home or business at the perfect temperature year-round.
          </p>
        </div>
      </section>

      {/* HVAC Repair */}
      <section className="bg-gray-50 py-12 px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-blue-900 mb-4">HVAC Repair Services in Lutz</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            HVAC breakdowns don't wait for convenient times — that's why North East Heating &amp; Cooling offers same-day and emergency repair services throughout Lutz. Our technicians diagnose and resolve a full range of issues, including refrigerant leaks, compressor failures, frozen coils, electrical faults, and thermostat malfunctions. We arrive stocked with common parts to get your system running again as quickly as possible.
          </p>
          <p className="text-gray-700 leading-relaxed">
            As Lutz's housing stock ages and grows, our team is well-prepared to service systems in both newer construction and older homes. We believe in honest recommendations — if your system can be repaired cost-effectively, we'll tell you. For dependable <Link href="/residential/hvac-service-tampa" className="text-blue-700 underline hover:text-blue-900">residential HVAC repair</Link> in Lutz, call North East Heating &amp; Cooling.
          </p>
        </div>
      </section>

      {/* AC Installation */}
      <section className="bg-white py-12 px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-blue-900 mb-4">AC Installation &amp; Replacement in Lutz</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Whether you're moving into a new construction home in a Lutz development or replacing an aging system in an established neighborhood, North East Heating &amp; Cooling provides professional <Link href="/residential/hvac-installation-tampa-fl" className="text-blue-700 underline hover:text-blue-900">AC installation</Link> services tailored to your home's needs. We begin every installation with a thorough load calculation to ensure your new system is properly sized — an oversized or undersized unit will cost you more in energy bills and wear out faster.
          </p>
          <p className="text-gray-700 leading-relaxed">
            We carry and install systems from trusted brands and can help you choose the right equipment for your budget and efficiency goals. Our installation teams are fully licensed, insured, and experienced in working with all types of homes and duct configurations common throughout the Lutz area.
          </p>
        </div>
      </section>

      {/* Heating Services */}
      <section className="bg-gray-50 py-12 px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-blue-900 mb-4">Heating Services in Lutz</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            While Lutz enjoys a warm climate for most of the year, winter cold snaps can catch residents off guard. Heat pumps and gas furnaces that haven't been serviced in years may struggle or fail when temperatures finally drop. North East Heating &amp; Cooling offers seasonal heating maintenance, repairs, and replacements to ensure your system is ready when you need it.
          </p>
          <p className="text-gray-700 leading-relaxed">
            A fall heating tune-up is one of the most cost-effective investments a Lutz homeowner can make. Our technicians inspect heat exchangers, check refrigerant levels on heat pump systems, test electrical components, and clean critical parts to help your system run efficiently and reliably all winter long.
          </p>
        </div>
      </section>

      {/* Air Duct Repair */}
      <section className="bg-white py-12 px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-blue-900 mb-4">Air Duct Repair in Lutz</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Lutz homes — particularly older ones — can develop ductwork problems that go unnoticed until energy bills spike or rooms become uncomfortable. Leaky or poorly sealed ducts allow conditioned air to escape into attics and wall cavities rather than reaching your living spaces. Our <Link href="/residential/air-duct-repair-tampa" className="text-blue-700 underline hover:text-blue-900">air duct repair</Link> services identify and fix these issues, improving both comfort and energy efficiency throughout your home.
          </p>
          <p className="text-gray-700 leading-relaxed">
            We use professional duct sealing techniques and materials to provide lasting repairs. In some cases, older flex duct systems may benefit from partial or full replacement. Our team will give you a thorough assessment and honest recommendation for the most cost-effective solution for your Lutz home.
          </p>
        </div>
      </section>

      {/* Commercial HVAC */}
      <section className="bg-gray-50 py-12 px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-blue-900 mb-4">Commercial HVAC Services in Lutz</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            As Lutz continues to grow, so does its commercial sector. Local businesses, strip centers, medical offices, and light industrial facilities all require reliable commercial HVAC systems to stay operational. Our <Link href="/commercial/hvac-service-tampa" className="text-blue-700 underline hover:text-blue-900">commercial HVAC service</Link> team provides preventive maintenance plans, emergency repairs, and system installations for businesses throughout the Lutz area.
          </p>
          <p className="text-gray-700 leading-relaxed">
            We work around your business schedule to minimize disruption and keep your employees, customers, and equipment comfortable year-round. Contact us to learn more about our commercial HVAC maintenance agreements that help prevent unexpected breakdowns and extend equipment life.
          </p>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-white py-12 px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-blue-900 mb-6">Why Residents &amp; Businesses in Lutz Choose North East Heating &amp; Cooling</h2>
          <ul className="space-y-3 text-gray-700">
            <li className="flex items-start gap-3">
              <span className="text-blue-700 font-bold mt-1">&#10003;</span>
              <span>Licensed, insured, and background-checked technicians serving the greater Tampa Bay area</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-blue-700 font-bold mt-1">&#10003;</span>
              <span>Experience servicing both new construction and older homes throughout Lutz's diverse neighborhoods</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-blue-700 font-bold mt-1">&#10003;</span>
              <span>Transparent, upfront pricing with no hidden fees or surprise charges</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-blue-700 font-bold mt-1">&#10003;</span>
              <span>Same-day and emergency HVAC service available when you need it most</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-blue-700 font-bold mt-1">&#10003;</span>
              <span>Full-service HVAC company handling repairs, replacements, maintenance, and duct services</span>
            </li>
          </ul>
        </div>
      </section>

      {/* Nearby Areas */}
      <section className="bg-gray-50 py-12 px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-blue-900 mb-4">Areas Near Lutz We Also Serve</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            In addition to Lutz, North East Heating &amp; Cooling provides HVAC services throughout the surrounding Tampa Bay region. View our <Link href="/service-areas" className="text-blue-700 underline hover:text-blue-900">all service areas</Link> page for a complete list, or explore nearby communities we serve:
          </p>
          <ul className="grid grid-cols-2 gap-3 text-blue-700 font-medium">
            <li><Link href="/service-areas/land-o-lakes-fl" className="hover:underline">Land O Lakes, FL</Link></li>
            <li><Link href="/service-areas/carrollwood-fl" className="hover:underline">Carrollwood, FL</Link></li>
            <li><Link href="/service-areas/odessa-fl" className="hover:underline">Odessa, FL</Link></li>
            <li><Link href="/service-areas/wesley-chapel-fl" className="hover:underline">Wesley Chapel, FL</Link></li>
          </ul>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#0f1620] text-white py-14 px-4">
        <div className="relative z-10 max-w-5xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Request a Free HVAC Consultation in Lutz</h2>
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
              <label className="block text-gray-700 text-sm font-medium mb-1" htmlFor="name-lutz">Name</label>
              <input id="name-lutz" type="text" className="w-full border border-gray-300 rounded px-3 py-2 text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-600" placeholder="Your Name" />
            </div>
            <div>
              <label className="block text-gray-700 text-sm font-medium mb-1" htmlFor="phone-lutz">Phone</label>
              <input id="phone-lutz" type="tel" className="w-full border border-gray-300 rounded px-3 py-2 text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-600" placeholder="(813) 000-0000" />
            </div>
            <div>
              <label className="block text-gray-700 text-sm font-medium mb-1" htmlFor="service-lutz">Service Needed</label>
              <select id="service-lutz" className="w-full border border-gray-300 rounded px-3 py-2 text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-600">
                <option value="">Select a service...</option>
                <option value="repair">HVAC Repair</option>
                <option value="installation">AC Installation</option>
                <option value="maintenance">Maintenance / Tune-Up</option>
                <option value="duct">Air Duct Repair</option>
                <option value="commercial">Commercial HVAC</option>
              </select>
            </div>
            <div>
              <label className="block text-gray-700 text-sm font-medium mb-1" htmlFor="message-lutz">Message</label>
              <textarea id="message-lutz" rows={3} className="w-full border border-gray-300 rounded px-3 py-2 text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-600" placeholder="Describe your HVAC issue or request..." />
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
