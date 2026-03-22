import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'HVAC Services in Carrollwood, FL | North East Heating & Cooling',
  description: 'Professional HVAC repair, AC installation & maintenance in Carrollwood, FL. Licensed technicians serving established Tampa suburbs. Call (813) 291-6146 for fast service.',
}

export default function CarrollwoodPage() {
  return (
    <main className="flex flex-col">

      {/* Hero Banner */}
      <section className="bg-[#0f1620] text-white py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-4xl font-bold mb-4">HVAC Services in Carrollwood, FL</h1>
          <p className="text-xl text-blue-200 mb-6">
            Reliable heating and cooling solutions for Carrollwood's established residential neighborhoods and growing community.
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
            Carrollwood is one of Tampa's most established and sought-after suburban communities, known for its mature tree-lined streets, well-kept neighborhoods, and convenient access to everything the greater Tampa area has to offer. Residents here take pride in their homes, and that includes keeping their HVAC systems running efficiently year-round. With Florida's intense summer heat and humidity, a properly functioning air conditioning system is essential to comfortable living in Carrollwood.
          </p>
          <p className="text-gray-700 text-lg leading-relaxed">
            North East Heating &amp; Cooling has served Carrollwood homeowners and businesses for years, delivering professional HVAC repair, installation, and maintenance services with the attention to detail that this community deserves. Whether your home was built in the 1970s or the 2000s, our licensed technicians have the expertise to service all makes and models of heating and cooling equipment.
          </p>
        </div>
      </section>

      {/* HVAC Repair */}
      <section className="bg-gray-50 py-12 px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-blue-900 mb-4">HVAC Repair Services in Carrollwood</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            When your AC stops working on a sweltering Tampa summer day, you need a repair team that responds fast. North East Heating &amp; Cooling offers prompt same-day and emergency HVAC repair throughout Carrollwood. Our technicians diagnose and fix everything from refrigerant leaks and frozen evaporator coils to faulty thermostats, failed capacitors, and blower motor problems.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Many of Carrollwood's established homes are equipped with older HVAC systems that may be approaching the end of their service life. Our team provides honest, thorough assessments to help you decide whether repair or replacement is the most cost-effective path forward. For trusted <Link href="/residential/hvac-service-tampa" className="text-blue-700 underline hover:text-blue-900">residential HVAC repair</Link> in Carrollwood, look no further than North East Heating &amp; Cooling.
          </p>
        </div>
      </section>

      {/* AC Installation */}
      <section className="bg-white py-12 px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-blue-900 mb-4">AC Installation &amp; Replacement in Carrollwood</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            If your current AC system is more than 12–15 years old, running frequent repairs, or failing to keep up with Florida's heat, it may be time for a new installation. Our <Link href="/residential/hvac-installation-tampa-fl" className="text-blue-700 underline hover:text-blue-900">AC installation</Link> services in Carrollwood include full load calculations, proper equipment sizing, and professional installation from licensed technicians.
          </p>
          <p className="text-gray-700 leading-relaxed">
            We work with leading HVAC brands and can help you select a high-efficiency system that will lower your monthly energy bills while keeping your home consistently comfortable. Our team handles all permits and inspections required for installations in the Tampa area, so you can have complete confidence in your new system from day one.
          </p>
        </div>
      </section>

      {/* Heating Services */}
      <section className="bg-gray-50 py-12 px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-blue-900 mb-4">Heating Services in Carrollwood</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Although Florida winters are mild, Carrollwood residents still rely on their heat pumps and furnaces during cooler months. A system that hasn't been properly maintained can fail when you need it most. North East Heating &amp; Cooling provides seasonal heating tune-ups, repairs, and full system replacements to keep your home warm and comfortable through every season.
          </p>
          <p className="text-gray-700 leading-relaxed">
            We recommend scheduling a heating inspection each fall before temperatures drop. Preventive maintenance helps identify worn components, improves system efficiency, and extends the overall life of your equipment — saving you money in the long run.
          </p>
        </div>
      </section>

      {/* Air Duct Repair */}
      <section className="bg-white py-12 px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-blue-900 mb-4">Air Duct Repair in Carrollwood</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            In Carrollwood's older homes, ductwork can develop leaks, gaps, or disconnections over time — especially in hot attic spaces where materials expand and contract with the Florida heat. Leaky ducts allow conditioned air to escape before it reaches living spaces, driving up your energy bills and leaving rooms feeling uneven in temperature. Our <Link href="/residential/air-duct-repair-tampa" className="text-blue-700 underline hover:text-blue-900">air duct repair</Link> services restore your system's efficiency and improve indoor air quality throughout your home.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Our technicians use professional-grade sealing and repair techniques to address leaks and damaged duct sections. If you notice rising utility bills, dusty rooms, or hot and cold spots throughout your home, schedule a duct inspection with our team today.
          </p>
        </div>
      </section>

      {/* Commercial HVAC */}
      <section className="bg-gray-50 py-12 px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-blue-900 mb-4">Commercial HVAC Services in Carrollwood</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Carrollwood is home to a wide variety of retail centers, restaurants, professional offices, and service businesses that all depend on reliable commercial HVAC systems. Our <Link href="/commercial/hvac-service-tampa" className="text-blue-700 underline hover:text-blue-900">commercial HVAC service</Link> team provides preventive maintenance contracts, emergency repairs, and complete system replacements for commercial properties throughout the Carrollwood area.
          </p>
          <p className="text-gray-700 leading-relaxed">
            We understand that a malfunctioning HVAC system can disrupt your business operations and negatively impact customer and employee comfort. Our commercial technicians work efficiently and professionally to minimize downtime and get your system back online as quickly as possible.
          </p>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-white py-12 px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-blue-900 mb-6">Why Residents &amp; Businesses in Carrollwood Choose North East Heating &amp; Cooling</h2>
          <ul className="space-y-3 text-gray-700">
            <li className="flex items-start gap-3">
              <span className="text-blue-700 font-bold mt-1">&#10003;</span>
              <span>Licensed, insured, and background-checked technicians serving the greater Tampa Bay area</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-blue-700 font-bold mt-1">&#10003;</span>
              <span>Deep experience servicing the mix of home ages and HVAC systems found throughout Carrollwood</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-blue-700 font-bold mt-1">&#10003;</span>
              <span>Transparent, upfront pricing with no hidden fees or surprise charges</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-blue-700 font-bold mt-1">&#10003;</span>
              <span>Same-day and emergency HVAC repair service available throughout Carrollwood</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-blue-700 font-bold mt-1">&#10003;</span>
              <span>Comprehensive service covering repairs, installations, maintenance, and duct work</span>
            </li>
          </ul>
        </div>
      </section>

      {/* Nearby Areas */}
      <section className="bg-gray-50 py-12 px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-blue-900 mb-4">Areas Near Carrollwood We Also Serve</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            In addition to Carrollwood, North East Heating &amp; Cooling provides HVAC services throughout the surrounding Tampa Bay region. View our <Link href="/service-areas" className="text-blue-700 underline hover:text-blue-900">all service areas</Link> page for a complete list, or explore nearby communities we serve:
          </p>
          <ul className="grid grid-cols-2 gap-3 text-blue-700 font-medium">
            <li><Link href="/service-areas/tampa-fl" className="hover:underline">Tampa, FL</Link></li>
            <li><Link href="/service-areas/lutz-fl" className="hover:underline">Lutz, FL</Link></li>
            <li><Link href="/service-areas/odessa-fl" className="hover:underline">Odessa, FL</Link></li>
            <li><Link href="/service-areas/land-o-lakes-fl" className="hover:underline">Land O Lakes, FL</Link></li>
          </ul>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#0f1620] text-white py-14 px-4">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Request a Free HVAC Consultation in Carrollwood</h2>
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
              <label className="block text-gray-700 text-sm font-medium mb-1" htmlFor="name-cw">Name</label>
              <input id="name-cw" type="text" className="w-full border border-gray-300 rounded px-3 py-2 text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-600" placeholder="Your Name" />
            </div>
            <div>
              <label className="block text-gray-700 text-sm font-medium mb-1" htmlFor="phone-cw">Phone</label>
              <input id="phone-cw" type="tel" className="w-full border border-gray-300 rounded px-3 py-2 text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-600" placeholder="(813) 000-0000" />
            </div>
            <div>
              <label className="block text-gray-700 text-sm font-medium mb-1" htmlFor="service-cw">Service Needed</label>
              <select id="service-cw" className="w-full border border-gray-300 rounded px-3 py-2 text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-600">
                <option value="">Select a service...</option>
                <option value="repair">HVAC Repair</option>
                <option value="installation">AC Installation</option>
                <option value="maintenance">Maintenance / Tune-Up</option>
                <option value="duct">Air Duct Repair</option>
                <option value="commercial">Commercial HVAC</option>
              </select>
            </div>
            <div>
              <label className="block text-gray-700 text-sm font-medium mb-1" htmlFor="message-cw">Message</label>
              <textarea id="message-cw" rows={3} className="w-full border border-gray-300 rounded px-3 py-2 text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-600" placeholder="Describe your HVAC issue or request..." />
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
