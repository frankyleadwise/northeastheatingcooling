import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'HVAC Services in Sun City Center, FL | North East Heating & Cooling',
  description: 'Professional HVAC repair, AC installation & maintenance in Sun City Center, FL. Licensed technicians serving retirement communities. Call (813) 291-6146 for fast service.',
}

export default function SunCityCenterPage() {
  return (
    <main className="flex flex-col">

      {/* Hero Banner */}
      <section className="bg-[#0f1620] text-white py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-4xl font-bold mb-4">HVAC Services in Sun City Center, FL</h1>
          <p className="text-xl text-blue-200 mb-6">
            Trusted heating and cooling solutions for Sun City Center's retirement communities and HOA neighborhoods.
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
            Sun City Center is one of Florida's most celebrated active adult retirement communities, home to thousands of residents who depend on reliable HVAC systems year-round. With the Florida heat bearing down from spring through fall and mild but unpredictable winters, keeping your heating and cooling system in peak condition is not a luxury — it's a necessity. North East Heating &amp; Cooling provides comprehensive HVAC services tailored to the unique demands of Sun City Center's retirement community lifestyle.
          </p>
          <p className="text-gray-700 text-lg leading-relaxed">
            Many homes in Sun City Center were built decades ago, and older HVAC equipment can struggle to keep up with modern efficiency standards. Whether you live in a standalone villa, a single-family home within an HOA community, or a condo, our licensed technicians understand the specific requirements of these properties. We deliver fast, respectful service with transparent pricing — because your comfort and peace of mind matter.
          </p>
        </div>
      </section>

      {/* HVAC Repair */}
      <section className="bg-gray-50 py-12 px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-blue-900 mb-4">HVAC Repair Services in Sun City Center</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            When your air conditioner breaks down in the middle of a Florida summer, you need a repair team that responds quickly. Our technicians are available for prompt same-day and emergency service throughout Sun City Center. From refrigerant leaks and frozen coils to failed capacitors and blower motor issues, we diagnose and repair all makes and models of residential HVAC equipment.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Older homes in Sun City Center often contain HVAC systems that are approaching or past their expected service life. Our team performs honest assessments and will always recommend repair when it is the most cost-effective solution. For expert <Link href="/residential/hvac-service-tampa" className="text-blue-700 underline hover:text-blue-900">residential HVAC repair</Link>, Sun City Center homeowners trust North East Heating &amp; Cooling.
          </p>
        </div>
      </section>

      {/* AC Installation */}
      <section className="bg-white py-12 px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-blue-900 mb-4">AC Installation &amp; Replacement in Sun City Center</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            If your current system is more than 12–15 years old or requires frequent costly repairs, a new high-efficiency AC installation may be the smarter long-term investment. North East Heating &amp; Cooling offers full <Link href="/residential/hvac-installation-tampa-fl" className="text-blue-700 underline hover:text-blue-900">AC installation</Link> services in Sun City Center, including proper load calculations to ensure the right-sized unit for your home.
          </p>
          <p className="text-gray-700 leading-relaxed">
            We work with leading brands and can help you select a system that reduces your monthly energy bills while keeping your home comfortable. Many HOA communities in Sun City Center have specific requirements for exterior equipment — our team is familiar with these guidelines and ensures every installation meets community standards.
          </p>
        </div>
      </section>

      {/* Heating Services */}
      <section className="bg-gray-50 py-12 px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-blue-900 mb-4">Heating Services in Sun City Center</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            While Florida winters are mild compared to the rest of the country, Sun City Center residents — especially those with health sensitivities — rely on properly functioning heat pumps and gas furnaces during cooler months. Our heating service team provides tune-ups, repairs, and full replacements to keep your home warm when temperatures drop.
          </p>
          <p className="text-gray-700 leading-relaxed">
            We recommend a seasonal heating inspection each fall to catch any issues before the cooler weather arrives. Regular maintenance extends equipment life, improves efficiency, and ensures consistent comfort throughout your home.
          </p>
        </div>
      </section>

      {/* Air Duct Repair */}
      <section className="bg-white py-12 px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-blue-900 mb-4">Air Duct Repair in Sun City Center</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Many of Sun City Center's older homes have ductwork that has developed leaks, disconnections, or buildup over the years. Leaky ducts waste conditioned air, drive up energy bills, and can reduce indoor air quality — a serious concern for residents with respiratory conditions. Our <Link href="/residential/air-duct-repair-tampa" className="text-blue-700 underline hover:text-blue-900">air duct repair</Link> services restore your system's efficiency and ensure clean, properly distributed airflow throughout your home.
          </p>
          <p className="text-gray-700 leading-relaxed">
            We inspect, seal, and repair ductwork using professional-grade materials and techniques. If your energy bills have increased or certain rooms feel stuffy or inconsistently cooled, your ductwork may be the culprit. Contact us for a duct system inspection today.
          </p>
        </div>
      </section>

      {/* Commercial HVAC */}
      <section className="bg-gray-50 py-12 px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-blue-900 mb-4">Commercial HVAC Services in Sun City Center</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Sun City Center supports a variety of small businesses, medical offices, HOA clubhouses, and community facilities that require dependable commercial HVAC systems. Our <Link href="/commercial/hvac-service-tampa" className="text-blue-700 underline hover:text-blue-900">commercial HVAC service</Link> team provides maintenance contracts, emergency repairs, and full system replacements for commercial properties throughout the area.
          </p>
          <p className="text-gray-700 leading-relaxed">
            We understand that downtime for a business or community facility is costly and disruptive. Our commercial team works efficiently to minimize interruptions and keep your property comfortable for staff, customers, and residents alike.
          </p>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-white py-12 px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-blue-900 mb-6">Why Residents &amp; Businesses in Sun City Center Choose North East Heating &amp; Cooling</h2>
          <ul className="space-y-3 text-gray-700">
            <li className="flex items-start gap-3">
              <span className="text-blue-700 font-bold mt-1">&#10003;</span>
              <span>Licensed, insured, and background-checked technicians serving the greater Tampa Bay area</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-blue-700 font-bold mt-1">&#10003;</span>
              <span>Experience servicing older homes common throughout Sun City Center's retirement communities</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-blue-700 font-bold mt-1">&#10003;</span>
              <span>Transparent, upfront pricing with no hidden fees or surprise charges</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-blue-700 font-bold mt-1">&#10003;</span>
              <span>Same-day and emergency HVAC repair service available</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-blue-700 font-bold mt-1">&#10003;</span>
              <span>Courteous, respectful service suited to Sun City Center's community-oriented culture</span>
            </li>
          </ul>
        </div>
      </section>

      {/* Nearby Areas */}
      <section className="bg-gray-50 py-12 px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-blue-900 mb-4">Areas Near Sun City Center We Also Serve</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            In addition to Sun City Center, North East Heating &amp; Cooling provides HVAC services throughout the surrounding region. View our <Link href="/service-areas" className="text-blue-700 underline hover:text-blue-900">all service areas</Link> page for a complete list, or explore nearby communities we serve:
          </p>
          <ul className="grid grid-cols-2 gap-3 text-blue-700 font-medium">
            <li><Link href="/service-areas/brandon-fl" className="hover:underline">Brandon, FL</Link></li>
            <li><Link href="/service-areas/riverview-fl" className="hover:underline">Riverview, FL</Link></li>
            <li><Link href="/service-areas/wimauma-fl" className="hover:underline">Wimauma, FL</Link></li>
            <li><Link href="/service-areas/apollo-beach-fl" className="hover:underline">Apollo Beach, FL</Link></li>
          </ul>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#0f1620] text-white py-14 px-4">
        <div className="relative z-10 max-w-5xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Request a Free HVAC Consultation in Sun City Center</h2>
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
              <label className="block text-gray-700 text-sm font-medium mb-1" htmlFor="name-scc">Name</label>
              <input id="name-scc" type="text" className="w-full border border-gray-300 rounded px-3 py-2 text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-600" placeholder="Your Name" />
            </div>
            <div>
              <label className="block text-gray-700 text-sm font-medium mb-1" htmlFor="phone-scc">Phone</label>
              <input id="phone-scc" type="tel" className="w-full border border-gray-300 rounded px-3 py-2 text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-600" placeholder="(813) 000-0000" />
            </div>
            <div>
              <label className="block text-gray-700 text-sm font-medium mb-1" htmlFor="service-scc">Service Needed</label>
              <select id="service-scc" className="w-full border border-gray-300 rounded px-3 py-2 text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-600">
                <option value="">Select a service...</option>
                <option value="repair">HVAC Repair</option>
                <option value="installation">AC Installation</option>
                <option value="maintenance">Maintenance / Tune-Up</option>
                <option value="duct">Air Duct Repair</option>
                <option value="commercial">Commercial HVAC</option>
              </select>
            </div>
            <div>
              <label className="block text-gray-700 text-sm font-medium mb-1" htmlFor="message-scc">Message</label>
              <textarea id="message-scc" rows={3} className="w-full border border-gray-300 rounded px-3 py-2 text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-600" placeholder="Describe your HVAC issue or request..." />
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
