import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'HVAC Services in Pinellas Park, FL | North East Heating & Cooling',
  description: 'Professional HVAC repair, AC installation & maintenance in Pinellas Park, FL. Licensed technicians serving this diverse Pinellas County community. Call (813) 291-6146 for fast service.',
}

export default function PinellasParkPage() {
  return (
    <main className="flex flex-col">

      {/* Hero Banner */}
      <section className="bg-[#0f1620] text-white py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-4xl font-bold mb-4">HVAC Services in Pinellas Park, FL</h1>
          <p className="text-xl text-blue-200 mb-6">
            Dependable heating and cooling solutions for Pinellas Park's diverse residential neighborhoods and active commercial community.
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
            Pinellas Park is a vibrant, diverse community located in the heart of Pinellas County, surrounded by St. Petersburg, Clearwater, and Largo. With a mix of long-established neighborhoods, mobile home communities, newer subdivisions, and a strong commercial and light industrial sector, Pinellas Park represents the full breadth of Florida living. And in Florida's hot, humid climate, reliable air conditioning is a necessity for every type of property in the city.
          </p>
          <p className="text-gray-700 text-lg leading-relaxed">
            North East Heating &amp; Cooling serves Pinellas Park homeowners and businesses with professional HVAC repair, installation, and maintenance services. Our experienced technicians understand the variety of HVAC systems and property types found throughout the city and provide service tailored to your specific needs — all at transparent, competitive pricing.
          </p>
        </div>
      </section>

      {/* HVAC Repair */}
      <section className="bg-gray-50 py-12 px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-blue-900 mb-4">HVAC Repair Services in Pinellas Park</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            When your HVAC system breaks down, you need a reliable repair team that can respond quickly. North East Heating &amp; Cooling offers same-day and emergency HVAC repair throughout Pinellas Park. Our technicians are skilled at diagnosing and repairing all makes and models of residential and light commercial HVAC equipment, from central air systems and heat pumps to ductless mini-splits and package units.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Common repairs we handle include refrigerant recharges, capacitor and contactor replacements, blower motor repairs, frozen coil corrections, and drainage system cleanouts. We provide clear explanations of the issue and upfront pricing before any work begins. For dependable <Link href="/residential/hvac-service-tampa" className="text-blue-700 underline hover:text-blue-900">residential HVAC repair</Link> in Pinellas Park, trust North East Heating &amp; Cooling.
          </p>
        </div>
      </section>

      {/* AC Installation */}
      <section className="bg-white py-12 px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-blue-900 mb-4">AC Installation &amp; Replacement in Pinellas Park</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            If your current system is aging, inefficient, or constantly requiring repairs, a new installation may be the most cost-effective solution. North East Heating &amp; Cooling provides professional <Link href="/residential/hvac-installation-tampa-fl" className="text-blue-700 underline hover:text-blue-900">AC installation</Link> services in Pinellas Park, including proper equipment sizing and full installation by licensed technicians.
          </p>
          <p className="text-gray-700 leading-relaxed">
            We work with a broad range of budgets and equipment options to help you find the best system for your home or property. Whether you need a straightforward replacement in a standard home or a more complex installation in a commercial space, our team has the skills and experience to handle the job correctly and efficiently.
          </p>
        </div>
      </section>

      {/* Heating Services */}
      <section className="bg-gray-50 py-12 px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-blue-900 mb-4">Heating Services in Pinellas Park</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Florida winters may be mild, but cooler temperatures in Pinellas Park can still make reliable heating important — particularly for older residents and those with health conditions. Most Pinellas Park homes rely on heat pump systems that handle both heating and cooling. North East Heating &amp; Cooling provides thorough heating system tune-ups, repairs, and replacements to keep your home comfortable no matter the season.
          </p>
          <p className="text-gray-700 leading-relaxed">
            A well-maintained heat pump operates more efficiently, lasts longer, and provides more consistent comfort. We recommend an annual maintenance visit each fall to prepare your heating system before temperatures drop. Contact us to schedule your heating tune-up today.
          </p>
        </div>
      </section>

      {/* Air Duct Repair */}
      <section className="bg-white py-12 px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-blue-900 mb-4">Air Duct Repair in Pinellas Park</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Many of Pinellas Park's homes and commercial buildings contain ductwork that has aged significantly over the years. Leaky, poorly insulated, or collapsed duct sections allow conditioned air to escape before reaching your living spaces, resulting in hot spots, uneven airflow, and inflated utility bills. Our <Link href="/residential/air-duct-repair-tampa" className="text-blue-700 underline hover:text-blue-900">air duct repair</Link> services restore your duct system's integrity and improve the overall performance of your HVAC system.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Our technicians conduct a thorough duct assessment, identify all problem areas, and provide professional repairs using durable materials and techniques. Improved duct performance means better air distribution, improved indoor air quality, and reduced energy waste — tangible benefits you'll notice on your next utility bill.
          </p>
        </div>
      </section>

      {/* Commercial HVAC */}
      <section className="bg-gray-50 py-12 px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-blue-900 mb-4">Commercial HVAC Services in Pinellas Park</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Pinellas Park has a substantial commercial and light industrial base, including retail shops, restaurants, auto dealerships, warehouses, and professional service businesses. All of these operations depend on reliable HVAC systems to maintain comfortable environments for employees and customers. Our <Link href="/commercial/hvac-service-tampa" className="text-blue-700 underline hover:text-blue-900">commercial HVAC service</Link> team provides comprehensive maintenance contracts, emergency repair response, and system upgrades for commercial properties throughout Pinellas Park.
          </p>
          <p className="text-gray-700 leading-relaxed">
            We understand the importance of minimizing downtime in a commercial setting. Our team works quickly and professionally to diagnose and resolve issues, and our preventive maintenance programs help you avoid unexpected breakdowns that can disrupt operations and impact your bottom line.
          </p>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-white py-12 px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-blue-900 mb-6">Why Residents &amp; Businesses in Pinellas Park Choose North East Heating &amp; Cooling</h2>
          <ul className="space-y-3 text-gray-700">
            <li className="flex items-start gap-3">
              <span className="text-blue-700 font-bold mt-1">&#10003;</span>
              <span>Licensed, insured, and background-checked technicians serving the greater Tampa Bay area</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-blue-700 font-bold mt-1">&#10003;</span>
              <span>Experience with the full range of residential and commercial property types found in Pinellas Park</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-blue-700 font-bold mt-1">&#10003;</span>
              <span>Transparent, upfront pricing with no hidden fees or surprise charges</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-blue-700 font-bold mt-1">&#10003;</span>
              <span>Same-day and emergency HVAC repair service available throughout Pinellas Park</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-blue-700 font-bold mt-1">&#10003;</span>
              <span>Competitive pricing and flexible options to fit a wide range of budgets</span>
            </li>
          </ul>
        </div>
      </section>

      {/* Nearby Areas */}
      <section className="bg-gray-50 py-12 px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-blue-900 mb-4">Areas Near Pinellas Park We Also Serve</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            In addition to Pinellas Park, North East Heating &amp; Cooling provides HVAC services throughout the surrounding Tampa Bay region. View our <Link href="/service-areas" className="text-blue-700 underline hover:text-blue-900">all service areas</Link> page for a complete list, or explore nearby communities we serve:
          </p>
          <ul className="grid grid-cols-2 gap-3 text-blue-700 font-medium">
            <li><Link href="/service-areas/largo-fl" className="hover:underline">Largo, FL</Link></li>
            <li><Link href="/service-areas/clearwater-fl" className="hover:underline">Clearwater, FL</Link></li>
            <li><Link href="/service-areas/st-petersburg-fl" className="hover:underline">St. Petersburg, FL</Link></li>
            <li><Link href="/service-areas/palm-harbor-fl" className="hover:underline">Palm Harbor, FL</Link></li>
          </ul>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#0f1620] text-white py-14 px-4">
        <div className="relative z-10 max-w-5xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Request a Free HVAC Consultation in Pinellas Park</h2>
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
              <label className="block text-gray-700 text-sm font-medium mb-1" htmlFor="name-pp">Name</label>
              <input id="name-pp" type="text" className="w-full border border-gray-300 rounded px-3 py-2 text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-600" placeholder="Your Name" />
            </div>
            <div>
              <label className="block text-gray-700 text-sm font-medium mb-1" htmlFor="phone-pp">Phone</label>
              <input id="phone-pp" type="tel" className="w-full border border-gray-300 rounded px-3 py-2 text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-600" placeholder="(813) 000-0000" />
            </div>
            <div>
              <label className="block text-gray-700 text-sm font-medium mb-1" htmlFor="service-pp">Service Needed</label>
              <select id="service-pp" className="w-full border border-gray-300 rounded px-3 py-2 text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-600">
                <option value="">Select a service...</option>
                <option value="repair">HVAC Repair</option>
                <option value="installation">AC Installation</option>
                <option value="maintenance">Maintenance / Tune-Up</option>
                <option value="duct">Air Duct Repair</option>
                <option value="commercial">Commercial HVAC</option>
              </select>
            </div>
            <div>
              <label className="block text-gray-700 text-sm font-medium mb-1" htmlFor="message-pp">Message</label>
              <textarea id="message-pp" rows={3} className="w-full border border-gray-300 rounded px-3 py-2 text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-600" placeholder="Describe your HVAC issue or request..." />
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
