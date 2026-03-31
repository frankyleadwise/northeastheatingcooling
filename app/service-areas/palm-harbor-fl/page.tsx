import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'HVAC Services in Palm Harbor, FL | North East Heating & Cooling',
  description: 'Professional HVAC repair, AC installation & maintenance in Palm Harbor, FL. Licensed technicians serving this coastal community in Pinellas County. Call (813) 291-6146 for fast service.',
}

export default function PalmHarborPage() {
  return (
    <main className="flex flex-col">

      {/* Hero Banner */}
      <section className="bg-[#0f1620] text-white py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-4xl font-bold mb-4">HVAC Services in Palm Harbor, FL</h1>
          <p className="text-xl text-blue-200 mb-6">
            Expert HVAC repair, installation, and maintenance for Palm Harbor's coastal community — where humidity and heat demand the best in cooling technology.
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
            Palm Harbor is one of Pinellas County's most desirable coastal communities, attracting residents who appreciate its beautiful neighborhoods, top-rated schools, and proximity to the Gulf of Mexico. Living near the coast offers many advantages, but it also comes with a challenging climate — high humidity, salt air, and intense summer heat that puts HVAC systems under significant stress year-round. In Palm Harbor, a well-maintained, properly sized air conditioning system is essential for comfortable living.
          </p>
          <p className="text-gray-700 text-lg leading-relaxed">
            North East Heating &amp; Cooling provides comprehensive HVAC services throughout Palm Harbor. Our licensed technicians understand the unique demands that coastal Florida's climate places on HVAC equipment and bring the expertise needed to keep your system running efficiently through every season. From emergency repairs to complete system replacements, we're here to serve Palm Harbor homeowners and businesses.
          </p>
        </div>
      </section>

      {/* HVAC Repair */}
      <section className="bg-gray-50 py-12 px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-blue-900 mb-4">HVAC Repair Services in Palm Harbor</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Palm Harbor's high humidity and coastal conditions can accelerate wear on HVAC components, making regular service and prompt repairs especially important. North East Heating &amp; Cooling offers same-day and emergency HVAC repair service throughout Palm Harbor. Our technicians diagnose and repair a wide range of issues including refrigerant leaks, corrosion-related electrical failures, clogged condensate drains, frozen coils, and compressor problems.
          </p>
          <p className="text-gray-700 leading-relaxed">
            We service all major residential HVAC brands and carry a full inventory of common parts to get your system running again quickly. Our technicians provide honest assessments and will always recommend the most cost-effective solution. For reliable <Link href="/residential/hvac-service-tampa" className="text-blue-700 underline hover:text-blue-900">residential HVAC repair</Link> in Palm Harbor, call North East Heating &amp; Cooling.
          </p>
        </div>
      </section>

      {/* AC Installation */}
      <section className="bg-white py-12 px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-blue-900 mb-4">AC Installation &amp; Replacement in Palm Harbor</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            When it's time for a new air conditioning system in Palm Harbor, choosing the right equipment for a coastal environment makes a significant difference in longevity and performance. North East Heating &amp; Cooling provides professional <Link href="/residential/hvac-installation-tampa-fl" className="text-blue-700 underline hover:text-blue-900">AC installation</Link> services throughout Palm Harbor, with a focus on systems that are well-suited to Florida's heat and humidity.
          </p>
          <p className="text-gray-700 leading-relaxed">
            We recommend systems with enhanced humidity control capabilities, corrosion-resistant components, and high SEER ratings that deliver energy efficiency in year-round cooling climates. Our team performs a detailed load calculation for every installation to ensure your new system is sized correctly for your specific home, maximizing both comfort and efficiency.
          </p>
        </div>
      </section>

      {/* Heating Services */}
      <section className="bg-gray-50 py-12 px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-blue-900 mb-4">Heating Services in Palm Harbor</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Palm Harbor's coastal location means temperatures rarely drop dramatically, but winter cold fronts can bring unexpectedly cool nights. Most homes in the area use heat pump systems that provide efficient heating when temperatures dip. North East Heating &amp; Cooling provides seasonal heating maintenance, heat pump repairs, and complete system replacements to keep your home comfortable throughout the year.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Coastal humidity can affect heating system components over time, making annual inspections especially important in Palm Harbor. Our technicians check all mechanical and electrical components, clear drainage systems, and ensure your heat pump or furnace is operating safely and efficiently before the cooler months arrive.
          </p>
        </div>
      </section>

      {/* Air Duct Repair */}
      <section className="bg-white py-12 px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-blue-900 mb-4">Air Duct Repair in Palm Harbor</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            High humidity levels in coastal Palm Harbor can cause ductwork problems to develop faster than in inland areas. Moisture can infiltrate leaky ducts, promoting mold growth and reducing indoor air quality — a serious concern for any household. Our <Link href="/residential/air-duct-repair-tampa" className="text-blue-700 underline hover:text-blue-900">air duct repair</Link> services address leaks, disconnections, and inadequate insulation to restore your duct system's integrity and protect your indoor environment.
          </p>
          <p className="text-gray-700 leading-relaxed">
            We inspect your entire duct system, identify any problem areas, and provide professional repairs that prevent humid outside air from infiltrating your duct network. Properly sealed and insulated ducts also improve system efficiency and ensure that conditioned air reaches every room of your home.
          </p>
        </div>
      </section>

      {/* Commercial HVAC */}
      <section className="bg-gray-50 py-12 px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-blue-900 mb-4">Commercial HVAC Services in Palm Harbor</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Palm Harbor's commercial sector includes restaurants, retail shops, medical offices, and professional service businesses that all depend on reliable HVAC systems to operate comfortably. Our <Link href="/commercial/hvac-service-tampa" className="text-blue-700 underline hover:text-blue-900">commercial HVAC service</Link> team provides preventive maintenance plans, emergency repair response, and complete system installations for commercial properties throughout Palm Harbor.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Coastal conditions can be particularly hard on commercial HVAC equipment, making regular maintenance even more critical for Palm Harbor businesses. Our commercial maintenance agreements include scheduled inspections, filter changes, coil cleanings, and system performance checks — helping you avoid costly emergency repairs and extend the life of your equipment.
          </p>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-white py-12 px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-blue-900 mb-6">Why Residents &amp; Businesses in Palm Harbor Choose North East Heating &amp; Cooling</h2>
          <ul className="space-y-3 text-gray-700">
            <li className="flex items-start gap-3">
              <span className="text-blue-700 font-bold mt-1">&#10003;</span>
              <span>Licensed, insured, and background-checked technicians serving the greater Tampa Bay area</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-blue-700 font-bold mt-1">&#10003;</span>
              <span>Expertise in HVAC systems suited to Palm Harbor's coastal climate and humidity challenges</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-blue-700 font-bold mt-1">&#10003;</span>
              <span>Transparent, upfront pricing with no hidden fees or surprise charges</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-blue-700 font-bold mt-1">&#10003;</span>
              <span>Same-day and emergency HVAC repair service available throughout Palm Harbor</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-blue-700 font-bold mt-1">&#10003;</span>
              <span>Equipment recommendations that account for coastal conditions and maximize system longevity</span>
            </li>
          </ul>
        </div>
      </section>

      {/* Nearby Areas */}
      <section className="bg-gray-50 py-12 px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-blue-900 mb-4">Areas Near Palm Harbor We Also Serve</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            In addition to Palm Harbor, North East Heating &amp; Cooling provides HVAC services throughout the surrounding Tampa Bay region. View our <Link href="/service-areas" className="text-blue-700 underline hover:text-blue-900">all service areas</Link> page for a complete list, or explore nearby communities we serve:
          </p>
          <ul className="grid grid-cols-2 gap-3 text-blue-700 font-medium">
            <li><Link href="/service-areas/clearwater-fl" className="hover:underline">Clearwater, FL</Link></li>
            <li><Link href="/service-areas/largo-fl" className="hover:underline">Largo, FL</Link></li>
            <li><Link href="/service-areas/new-port-richey-fl" className="hover:underline">New Port Richey, FL</Link></li>
            <li><Link href="/service-areas/odessa-fl" className="hover:underline">Odessa, FL</Link></li>
          </ul>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#0f1620] text-white py-14 px-4">
        <div className="relative z-10 max-w-5xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Request a Free HVAC Consultation in Palm Harbor</h2>
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
              <label className="block text-gray-700 text-sm font-medium mb-1" htmlFor="name-ph">Name</label>
              <input id="name-ph" type="text" className="w-full border border-gray-300 rounded px-3 py-2 text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-600" placeholder="Your Name" />
            </div>
            <div>
              <label className="block text-gray-700 text-sm font-medium mb-1" htmlFor="phone-ph">Phone</label>
              <input id="phone-ph" type="tel" className="w-full border border-gray-300 rounded px-3 py-2 text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-600" placeholder="(813) 000-0000" />
            </div>
            <div>
              <label className="block text-gray-700 text-sm font-medium mb-1" htmlFor="service-ph">Service Needed</label>
              <select id="service-ph" className="w-full border border-gray-300 rounded px-3 py-2 text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-600">
                <option value="">Select a service...</option>
                <option value="repair">HVAC Repair</option>
                <option value="installation">AC Installation</option>
                <option value="maintenance">Maintenance / Tune-Up</option>
                <option value="duct">Air Duct Repair</option>
                <option value="commercial">Commercial HVAC</option>
              </select>
            </div>
            <div>
              <label className="block text-gray-700 text-sm font-medium mb-1" htmlFor="message-ph">Message</label>
              <textarea id="message-ph" rows={3} className="w-full border border-gray-300 rounded px-3 py-2 text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-600" placeholder="Describe your HVAC issue or request..." />
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
