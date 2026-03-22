import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'HVAC Services in New Port Richey, FL | North East Heating & Cooling',
  description: 'Professional HVAC repair, AC installation & maintenance in New Port Richey, FL. Licensed technicians serving this older coastal community in Pasco County. Call (813) 291-6146 for fast service.',
}

export default function NewPortRicheyPage() {
  return (
    <main className="flex flex-col">

      {/* Hero Banner */}
      <section className="bg-[#0f1620] text-white py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-4xl font-bold mb-4">HVAC Services in New Port Richey, FL</h1>
          <p className="text-xl text-blue-200 mb-6">
            Trusted heating and cooling services for New Port Richey's established coastal neighborhoods and diverse mix of residential and commercial properties.
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
            New Port Richey is one of Pasco County's oldest and most established communities, with a rich history, a vibrant downtown district, and a mix of long-time residents and newer arrivals. Situated along the Gulf Coast just north of the Pinellas County line, New Port Richey enjoys the natural beauty of the Pithlachascotee River and easy access to coastal waterways. Its coastal location and warm, humid climate make reliable air conditioning essential for comfortable living year-round.
          </p>
          <p className="text-gray-700 text-lg leading-relaxed">
            North East Heating &amp; Cooling provides comprehensive HVAC services throughout New Port Richey, serving homeowners and businesses across the city's diverse neighborhoods. Our licensed technicians are experienced with the older housing stock and systems commonly found in New Port Richey, and we bring the same level of professionalism and honest service to every job regardless of the age or complexity of your property.
          </p>
        </div>
      </section>

      {/* HVAC Repair */}
      <section className="bg-gray-50 py-12 px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-blue-900 mb-4">HVAC Repair Services in New Port Richey</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Many New Port Richey homes were built decades ago and contain HVAC systems that have seen years of service in Florida's demanding climate. When these systems fail, you need a repair team with the experience to work on older equipment as well as modern systems. North East Heating &amp; Cooling offers same-day and emergency HVAC repair throughout New Port Richey, diagnosing and fixing issues quickly to restore your comfort.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Common repairs in older systems include capacitor and contactor replacements, refrigerant leak repairs, blower motor and fan replacements, and heat exchanger inspections. We carry a broad inventory of parts compatible with older and newer equipment alike. For expert <Link href="/residential/hvac-service-tampa" className="text-blue-700 underline hover:text-blue-900">residential HVAC repair</Link> in New Port Richey, call North East Heating &amp; Cooling.
          </p>
        </div>
      </section>

      {/* AC Installation */}
      <section className="bg-white py-12 px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-blue-900 mb-4">AC Installation &amp; Replacement in New Port Richey</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            New Port Richey's older housing stock means many homes are overdue for a system upgrade. If your HVAC system is more than 12–15 years old, requires frequent repairs, or struggles to maintain a comfortable temperature on hot Florida days, a new installation may be the most cost-effective solution. North East Heating &amp; Cooling provides professional <Link href="/residential/hvac-installation-tampa-fl" className="text-blue-700 underline hover:text-blue-900">AC installation</Link> services throughout New Port Richey.
          </p>
          <p className="text-gray-700 leading-relaxed">
            We perform a thorough load calculation for every installation to ensure your new system is correctly sized for your home. Modern high-efficiency systems not only keep your home more comfortable but can significantly reduce monthly energy costs compared to aging, inefficient equipment. Our team handles all permits and inspections required in Pasco County, making the process as straightforward as possible.
          </p>
        </div>
      </section>

      {/* Heating Services */}
      <section className="bg-gray-50 py-12 px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-blue-900 mb-4">Heating Services in New Port Richey</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            While New Port Richey's coastal climate keeps winter temperatures mild, cold fronts can bring cooler conditions that make reliable heating important — especially for older residents. Many of New Port Richey's older homes may have outdated or less efficient heating systems that benefit from servicing or replacement. North East Heating &amp; Cooling provides heating tune-ups, repairs, and system replacements to ensure year-round comfort.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Coastal humidity can accelerate wear on heating components, making regular maintenance particularly valuable in New Port Richey. Our fall heating tune-up service inspects your entire system, identifies worn or failing components, and ensures your heating equipment is ready to perform reliably when temperatures drop.
          </p>
        </div>
      </section>

      {/* Air Duct Repair */}
      <section className="bg-white py-12 px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-blue-900 mb-4">Air Duct Repair in New Port Richey</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Older homes in New Port Richey often have ductwork that has deteriorated significantly over the decades. Original galvanized metal ducts can develop rust and leaks, while older flex duct systems may have collapsed sections or separated joints. These issues cause conditioned air to escape before it reaches your living spaces, leading to hot rooms, high energy bills, and poor indoor air quality. Our <Link href="/residential/air-duct-repair-tampa" className="text-blue-700 underline hover:text-blue-900">air duct repair</Link> services restore your system's performance and improve comfort throughout your home.
          </p>
          <p className="text-gray-700 leading-relaxed">
            In some cases, older duct systems in New Port Richey homes may benefit from full replacement with modern, better-insulated ductwork. Our team will assess your existing system and provide an honest recommendation — whether that's targeted repairs or a complete duct overhaul — along with clear, upfront pricing.
          </p>
        </div>
      </section>

      {/* Commercial HVAC */}
      <section className="bg-gray-50 py-12 px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-blue-900 mb-4">Commercial HVAC Services in New Port Richey</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            New Port Richey's commercial district includes a variety of retail businesses, restaurants, medical and professional offices, and service businesses that serve the surrounding community. These operations require reliable HVAC systems to maintain comfortable environments for customers and employees alike. Our <Link href="/commercial/hvac-service-tampa" className="text-blue-700 underline hover:text-blue-900">commercial HVAC service</Link> team provides maintenance programs, emergency repair response, and system replacements for commercial properties throughout New Port Richey.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Many of New Port Richey's commercial buildings are older and may have aging HVAC infrastructure that requires specialized attention. Our commercial technicians are skilled in working with both legacy systems and modern commercial equipment. We provide honest assessments, prioritize cost-effective solutions, and keep your business running comfortably with minimal disruption.
          </p>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-white py-12 px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-blue-900 mb-6">Why Residents &amp; Businesses in New Port Richey Choose North East Heating &amp; Cooling</h2>
          <ul className="space-y-3 text-gray-700">
            <li className="flex items-start gap-3">
              <span className="text-blue-700 font-bold mt-1">&#10003;</span>
              <span>Licensed, insured, and background-checked technicians serving the greater Tampa Bay area</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-blue-700 font-bold mt-1">&#10003;</span>
              <span>Extensive experience servicing the older homes and legacy HVAC systems found throughout New Port Richey</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-blue-700 font-bold mt-1">&#10003;</span>
              <span>Transparent, upfront pricing with no hidden fees or surprise charges</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-blue-700 font-bold mt-1">&#10003;</span>
              <span>Same-day and emergency HVAC repair service available throughout New Port Richey</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-blue-700 font-bold mt-1">&#10003;</span>
              <span>Respectful, courteous service with a focus on long-term relationships with New Port Richey customers</span>
            </li>
          </ul>
        </div>
      </section>

      {/* Nearby Areas */}
      <section className="bg-gray-50 py-12 px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-blue-900 mb-4">Areas Near New Port Richey We Also Serve</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            In addition to New Port Richey, North East Heating &amp; Cooling provides HVAC services throughout the surrounding Tampa Bay region. View our <Link href="/service-areas" className="text-blue-700 underline hover:text-blue-900">all service areas</Link> page for a complete list, or explore nearby communities we serve:
          </p>
          <ul className="grid grid-cols-2 gap-3 text-blue-700 font-medium">
            <li><Link href="/service-areas/palm-harbor-fl" className="hover:underline">Palm Harbor, FL</Link></li>
            <li><Link href="/service-areas/land-o-lakes-fl" className="hover:underline">Land O Lakes, FL</Link></li>
            <li><Link href="/service-areas/odessa-fl" className="hover:underline">Odessa, FL</Link></li>
            <li><Link href="/service-areas/wesley-chapel-fl" className="hover:underline">Wesley Chapel, FL</Link></li>
          </ul>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#0f1620] text-white py-14 px-4">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Request a Free HVAC Consultation in New Port Richey</h2>
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
              <label className="block text-gray-700 text-sm font-medium mb-1" htmlFor="name-npr">Name</label>
              <input id="name-npr" type="text" className="w-full border border-gray-300 rounded px-3 py-2 text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-600" placeholder="Your Name" />
            </div>
            <div>
              <label className="block text-gray-700 text-sm font-medium mb-1" htmlFor="phone-npr">Phone</label>
              <input id="phone-npr" type="tel" className="w-full border border-gray-300 rounded px-3 py-2 text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-600" placeholder="(813) 000-0000" />
            </div>
            <div>
              <label className="block text-gray-700 text-sm font-medium mb-1" htmlFor="service-npr">Service Needed</label>
              <select id="service-npr" className="w-full border border-gray-300 rounded px-3 py-2 text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-600">
                <option value="">Select a service...</option>
                <option value="repair">HVAC Repair</option>
                <option value="installation">AC Installation</option>
                <option value="maintenance">Maintenance / Tune-Up</option>
                <option value="duct">Air Duct Repair</option>
                <option value="commercial">Commercial HVAC</option>
              </select>
            </div>
            <div>
              <label className="block text-gray-700 text-sm font-medium mb-1" htmlFor="message-npr">Message</label>
              <textarea id="message-npr" rows={3} className="w-full border border-gray-300 rounded px-3 py-2 text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-600" placeholder="Describe your HVAC issue or request..." />
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
