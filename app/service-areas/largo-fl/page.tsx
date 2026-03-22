import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'HVAC Services in Largo, FL | North East Heating & Cooling',
  description: 'Professional HVAC repair, AC installation & maintenance in Largo, FL. Licensed technicians serving Pinellas County\'s second largest city. Call (813) 291-6146 for fast service.',
}

export default function LargoPage() {
  return (
    <main className="flex flex-col">

      {/* Hero Banner */}
      <section className="bg-[#0f1620] text-white py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-4xl font-bold mb-4">HVAC Services in Largo, FL</h1>
          <p className="text-xl text-blue-200 mb-6">
            Comprehensive heating and cooling services for Largo residents and businesses — Pinellas County's second largest city.
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
            Largo is the second largest city in Pinellas County and one of the most vibrant communities in the Tampa Bay area. With a diverse mix of residential neighborhoods, thriving businesses, and proximity to Florida's Gulf Coast, Largo offers its residents a high quality of life — and year-round warm weather that demands dependable air conditioning. Whether you live in a single-family home, a condo, or manage a commercial property, keeping your HVAC system in peak condition is essential.
          </p>
          <p className="text-gray-700 text-lg leading-relaxed">
            North East Heating &amp; Cooling provides full-service HVAC solutions for Largo homes and businesses. Our licensed technicians are familiar with the wide range of property types and HVAC systems found throughout the city. From prompt emergency repairs to carefully planned new installations, we deliver reliable, professional service backed by transparent pricing.
          </p>
        </div>
      </section>

      {/* HVAC Repair */}
      <section className="bg-gray-50 py-12 px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-blue-900 mb-4">HVAC Repair Services in Largo</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Largo's warm, humid climate puts significant stress on HVAC equipment. When systems break down, North East Heating &amp; Cooling provides fast same-day and emergency repair service throughout the city. Our technicians diagnose and fix a full range of problems — from refrigerant leaks and dirty coils to compressor failures, thermostat issues, and electrical faults — working efficiently to restore your comfort as quickly as possible.
          </p>
          <p className="text-gray-700 leading-relaxed">
            We service all major brands and models and carry common replacement parts to minimize return trips. Our goal is to get your system running again on the first visit whenever possible. For trusted <Link href="/residential/hvac-service-tampa" className="text-blue-700 underline hover:text-blue-900">residential HVAC repair</Link> in Largo, call North East Heating &amp; Cooling.
          </p>
        </div>
      </section>

      {/* AC Installation */}
      <section className="bg-white py-12 px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-blue-900 mb-4">AC Installation &amp; Replacement in Largo</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Whether you're replacing an aging system or installing AC in a newly renovated space, North East Heating &amp; Cooling provides professional <Link href="/residential/hvac-installation-tampa-fl" className="text-blue-700 underline hover:text-blue-900">AC installation</Link> services throughout Largo. We perform a thorough load calculation before recommending any system, ensuring your new equipment is properly sized for your specific space — not too large, not too small.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Largo's proximity to the Gulf Coast means homes and buildings here are exposed to salt air and high humidity, which can affect equipment longevity. We help you select systems designed to handle these conditions and install them correctly to maximize lifespan and efficiency. Our team manages all required permits and inspections for a hassle-free experience.
          </p>
        </div>
      </section>

      {/* Heating Services */}
      <section className="bg-gray-50 py-12 px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-blue-900 mb-4">Heating Services in Largo</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            While Largo's winters are relatively mild, cold fronts do pass through the region and temperatures can drop unexpectedly. Many Largo residents rely on heat pump systems that provide both year-round cooling and supplemental heating. North East Heating &amp; Cooling offers seasonal heating tune-ups, heat pump repairs, and heating system replacements to keep your home warm when temperatures dip.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Scheduling a fall maintenance inspection ensures your heating system is ready before cold weather arrives. Our technicians check all components, clean heat exchangers, and verify that your system is operating safely and efficiently — giving you peace of mind throughout the cooler months.
          </p>
        </div>
      </section>

      {/* Air Duct Repair */}
      <section className="bg-white py-12 px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-blue-900 mb-4">Air Duct Repair in Largo</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Largo's mix of older and newer housing means that ductwork conditions vary widely from property to property. Older homes may have original ductwork with leaks, poor insulation, or outdated flex duct that has deteriorated over time. Leaky ducts waste expensive conditioned air, reduce system efficiency, and can allow dust, pollen, and humidity to enter your living spaces. Our <Link href="/residential/air-duct-repair-tampa" className="text-blue-700 underline hover:text-blue-900">air duct repair</Link> services address these issues systematically and effectively.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Our team inspects your entire duct system, identifies problem areas, and provides professional sealing, insulation, or replacement as needed. Improved ductwork translates directly to lower energy bills and more consistent comfort throughout your home or building.
          </p>
        </div>
      </section>

      {/* Commercial HVAC */}
      <section className="bg-gray-50 py-12 px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-blue-900 mb-4">Commercial HVAC Services in Largo</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            As one of Pinellas County's largest cities, Largo is home to a significant number of commercial properties, including retail centers, restaurants, medical offices, and light industrial facilities. Our <Link href="/commercial/hvac-service-tampa" className="text-blue-700 underline hover:text-blue-900">commercial HVAC service</Link> team provides comprehensive maintenance programs, emergency repairs, and complete system replacements for commercial buildings throughout Largo.
          </p>
          <p className="text-gray-700 leading-relaxed">
            We offer commercial maintenance agreements that keep your system running reliably while helping you avoid costly emergency breakdowns. Our team works around your business hours to minimize disruption and ensures that your commercial HVAC equipment meets all applicable codes and standards.
          </p>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-white py-12 px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-blue-900 mb-6">Why Residents &amp; Businesses in Largo Choose North East Heating &amp; Cooling</h2>
          <ul className="space-y-3 text-gray-700">
            <li className="flex items-start gap-3">
              <span className="text-blue-700 font-bold mt-1">&#10003;</span>
              <span>Licensed, insured, and background-checked technicians serving the greater Tampa Bay area</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-blue-700 font-bold mt-1">&#10003;</span>
              <span>Familiarity with Largo's diverse mix of residential and commercial property types</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-blue-700 font-bold mt-1">&#10003;</span>
              <span>Transparent, upfront pricing with no hidden fees or surprise charges</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-blue-700 font-bold mt-1">&#10003;</span>
              <span>Same-day and emergency HVAC repair service available throughout Largo</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-blue-700 font-bold mt-1">&#10003;</span>
              <span>Equipment recommendations suited to Largo's coastal climate and humidity levels</span>
            </li>
          </ul>
        </div>
      </section>

      {/* Nearby Areas */}
      <section className="bg-gray-50 py-12 px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-blue-900 mb-4">Areas Near Largo We Also Serve</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            In addition to Largo, North East Heating &amp; Cooling provides HVAC services throughout the surrounding Tampa Bay region. View our <Link href="/service-areas" className="text-blue-700 underline hover:text-blue-900">all service areas</Link> page for a complete list, or explore nearby communities we serve:
          </p>
          <ul className="grid grid-cols-2 gap-3 text-blue-700 font-medium">
            <li><Link href="/service-areas/clearwater-fl" className="hover:underline">Clearwater, FL</Link></li>
            <li><Link href="/service-areas/pinellas-park-fl" className="hover:underline">Pinellas Park, FL</Link></li>
            <li><Link href="/service-areas/st-petersburg-fl" className="hover:underline">St. Petersburg, FL</Link></li>
            <li><Link href="/service-areas/palm-harbor-fl" className="hover:underline">Palm Harbor, FL</Link></li>
          </ul>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#0f1620] text-white py-14 px-4">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Request a Free HVAC Consultation in Largo</h2>
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
              <label className="block text-gray-700 text-sm font-medium mb-1" htmlFor="name-lg">Name</label>
              <input id="name-lg" type="text" className="w-full border border-gray-300 rounded px-3 py-2 text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-600" placeholder="Your Name" />
            </div>
            <div>
              <label className="block text-gray-700 text-sm font-medium mb-1" htmlFor="phone-lg">Phone</label>
              <input id="phone-lg" type="tel" className="w-full border border-gray-300 rounded px-3 py-2 text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-600" placeholder="(813) 000-0000" />
            </div>
            <div>
              <label className="block text-gray-700 text-sm font-medium mb-1" htmlFor="service-lg">Service Needed</label>
              <select id="service-lg" className="w-full border border-gray-300 rounded px-3 py-2 text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-600">
                <option value="">Select a service...</option>
                <option value="repair">HVAC Repair</option>
                <option value="installation">AC Installation</option>
                <option value="maintenance">Maintenance / Tune-Up</option>
                <option value="duct">Air Duct Repair</option>
                <option value="commercial">Commercial HVAC</option>
              </select>
            </div>
            <div>
              <label className="block text-gray-700 text-sm font-medium mb-1" htmlFor="message-lg">Message</label>
              <textarea id="message-lg" rows={3} className="w-full border border-gray-300 rounded px-3 py-2 text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-600" placeholder="Describe your HVAC issue or request..." />
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
