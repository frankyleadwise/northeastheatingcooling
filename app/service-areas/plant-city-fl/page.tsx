import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'HVAC Services in Plant City, FL | North East Heating & Cooling',
  description:
    'Professional HVAC repair, AC installation, heating services, and air duct repair in Plant City, FL. North East Heating & Cooling — call (813) 291-6146 for fast, reliable service.',
}

export default function PlantCityPage() {
  return (
    <>
      <main>
        {/* Hero Banner */}
        <section className="bg-[#1e40af] text-white py-20 px-4">
          <div className="max-w-5xl mx-auto text-center">
            <p className="text-blue-200 text-sm font-semibold uppercase tracking-widest mb-3">
              Tampa Bay's Trusted HVAC Company
            </p>
            <h1 className="text-4xl sm:text-5xl font-extrabold leading-tight mb-5">
              HVAC Services in Plant City, FL
            </h1>
            <p className="text-blue-100 text-lg sm:text-xl max-w-3xl mx-auto leading-relaxed mb-8">
              Reliable heating and cooling services for Plant City homes and businesses. Local HVAC experts
              serving Hillsborough County's eastern communities with fast response and honest pricing.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="tel:8132916146"
                className="inline-flex items-center gap-2 bg-white text-blue-800 font-bold px-7 py-3.5 rounded-lg hover:bg-blue-50 transition-colors shadow-lg text-lg"
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5" aria-hidden="true"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.4 2 2 0 0 1 3.6 1.22h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L7.91 8.8a16 16 0 0 0 6.29 6.29l.95-.95a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" /></svg>
                (813) 291-6146
              </a>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white font-bold px-7 py-3.5 rounded-lg transition-colors shadow-lg text-lg border border-blue-400"
              >
                Request Free Estimate
              </Link>
            </div>
          </div>
        </section>

        {/* Intro */}
        <section className="bg-white py-16 px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-extrabold text-blue-900 mb-5">
              Proud to Serve Plant City's Homes and Businesses
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Plant City is a proud, independent city in eastern Hillsborough County with a population of
              approximately 40,000 residents. Known as the "Winter Strawberry Capital of the World," Plant City
              celebrates its agricultural heritage each year at the Florida Strawberry Festival, one of Florida's
              largest and most beloved annual events. Beyond its farming roots, Plant City has evolved into a
              thriving small city with a historic downtown district, growing residential neighborhoods, and an
              expanding commercial and industrial base along the Interstate 4 corridor.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              Plant City's location in Hillsborough County's interior means it experiences some of the warmest
              summer temperatures in the Tampa Bay area, with afternoon highs routinely reaching the mid-to-upper
              90s from May through September. Combined with high humidity, summer heat in Plant City can be
              intense, and the city's many older homes — some dating back to the early 20th century in the
              historic downtown area — present unique HVAC challenges around ductwork, insulation, and equipment
              placement.
            </p>
            <p className="text-gray-700 leading-relaxed">
              North East Heating &amp; Cooling serves all of Plant City, from the historic homes near downtown
              to the newer subdivisions on the city's growing outskirts. Call us at{' '}
              <a href="tel:8132916146" className="text-blue-700 font-semibold hover:underline">(813) 291-6146</a>{' '}
              for fast, professional HVAC service.
            </p>
          </div>
        </section>

        {/* HVAC Repair */}
        <section className="bg-gray-50 py-16 px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-extrabold text-blue-900 mb-5">
              HVAC Repair Services in Plant City, FL
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Our Plant City HVAC repair team provides same-day and emergency service throughout the city and
              surrounding rural areas. We diagnose and repair all types of HVAC failures including refrigerant
              issues, electrical problems, mechanical failures, and control system malfunctions across all
              major brands and system types. Our technicians arrive with fully stocked service vehicles to
              complete most repairs in a single visit.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              Plant City's agricultural area is home to many farms and rural properties with HVAC systems
              that experience unique demands — exposure to outdoor dust and debris, systems protecting
              agricultural products or equipment, and properties with irregular usage patterns. Our
              technicians are comfortable working in all types of Plant City environments, from downtown
              historic homes to rural agricultural properties east of the city.
            </p>
            <Link
              href="/residential/hvac-service-tampa"
              className="inline-flex items-center gap-2 bg-blue-700 hover:bg-blue-800 text-white font-bold px-6 py-3 rounded-lg transition-colors"
            >
              View HVAC Repair Services &rarr;
            </Link>
          </div>
        </section>

        {/* AC Installation */}
        <section className="bg-white py-16 px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-extrabold text-blue-900 mb-5">
              AC Installation in Plant City, FL
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Installing a new air conditioning system in Plant City requires careful consideration of the
              property's specific characteristics. Historic downtown homes may require creative approaches
              to duct routing and equipment placement, while newer suburban homes typically allow for more
              straightforward installations. Regardless of the property type, our team performs a thorough
              load calculation and site assessment before recommending any equipment.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              For Plant City's historic properties, we offer ductless mini-split installations as a clean
              alternative to traditional ducted systems. Mini-splits preserve the architectural character
              of older homes while delivering modern comfort and efficiency. For standard residential and
              commercial installations, we offer a full line of split systems and packaged units from
              all major manufacturers.
            </p>
            <Link
              href="/residential/hvac-installation-tampa-fl"
              className="inline-flex items-center gap-2 bg-blue-700 hover:bg-blue-800 text-white font-bold px-6 py-3 rounded-lg transition-colors"
            >
              View AC Installation Services &rarr;
            </Link>
          </div>
        </section>

        {/* Heating Services */}
        <section className="bg-gray-50 py-16 px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-extrabold text-blue-900 mb-5">
              Heating Services in Plant City, FL
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Plant City sits in Florida's interior, away from the moderating influence of the Gulf and Tampa
              Bay, making it one of the cooler spots in Hillsborough County during winter cold fronts.
              Frost events — while uncommon — do occur in Plant City, and winter temperatures in the 30s are
              not unheard of. The city's strawberry growers are acutely aware of this, and so are homeowners
              who rely on heat pumps to stay warm when a front moves through.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              Our team provides heat pump repair, emergency heating service, heat pump replacement, and
              preventive heating maintenance for Plant City residents and businesses. We also service older
              gas and electric furnace systems that may still be in service in some of Plant City's more
              established homes. A fall heating tune-up is an especially good investment in Plant City
              given the community's slightly greater exposure to winter cold.
            </p>
            <Link
              href="/residential/hvac-service-tampa"
              className="inline-flex items-center gap-2 bg-blue-700 hover:bg-blue-800 text-white font-bold px-6 py-3 rounded-lg transition-colors"
            >
              View Heating Services &rarr;
            </Link>
          </div>
        </section>

        {/* Air Duct Repair */}
        <section className="bg-white py-16 px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-extrabold text-blue-900 mb-5">
              Air Duct Repair in Plant City, FL
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Plant City's older homes often have duct systems in need of attention. Older flex duct
              installations can become kinked, compressed, or disconnected over time, especially in
              cramped attic spaces where foot traffic from HVAC technicians or pest control operators
              can inadvertently damage duct runs. In some older homes, original metal ductwork may have
              developed rust or physical damage that compromises its ability to deliver conditioned air.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              Our duct technicians can assess, repair, or replace ductwork in all types of Plant City
              homes and commercial properties. We use pressure testing to quantify existing leakage,
              perform targeted repairs, and then retest to confirm improvements. Properly functioning
              ductwork can make a dramatic difference in the comfort and energy efficiency of Plant City
              homes, particularly those with rooms that have historically been difficult to cool.
            </p>
            <Link
              href="/residential/air-duct-repair-tampa"
              className="inline-flex items-center gap-2 bg-blue-700 hover:bg-blue-800 text-white font-bold px-6 py-3 rounded-lg transition-colors"
            >
              View Air Duct Repair Services &rarr;
            </Link>
          </div>
        </section>

        {/* Commercial HVAC */}
        <section className="bg-gray-50 py-16 px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-extrabold text-blue-900 mb-5">
              Commercial HVAC Services in Plant City, FL
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Plant City's commercial landscape includes a vibrant downtown retail and restaurant scene,
              a growing medical community, light industrial facilities along the I-4 corridor, and numerous
              agribusiness operations throughout the surrounding area. All of these commercial and industrial
              uses have distinct HVAC requirements, and North East Heating &amp; Cooling has the expertise
              to address them all.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              We provide commercial HVAC installation, repair, and preventive maintenance throughout Plant
              City. For businesses along I-4 and in Plant City's industrial parks, we offer rapid response
              contracts that minimize costly production downtime. For downtown retailers and restaurants, we
              provide sensitive, low-disruption service that keeps your customer-facing spaces comfortable
              without interfering with your operations.
            </p>
            <Link
              href="/commercial/hvac-service-tampa"
              className="inline-flex items-center gap-2 bg-blue-700 hover:bg-blue-800 text-white font-bold px-6 py-3 rounded-lg transition-colors"
            >
              View Commercial HVAC Services &rarr;
            </Link>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="bg-white py-16 px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-extrabold text-blue-900 mb-8">
              Why Plant City Residents Choose North East Heating &amp; Cooling
            </h2>
            <div className="grid sm:grid-cols-2 gap-5">
              {[
                { title: 'Deep Local Knowledge', desc: 'From Plant City\'s historic downtown homes to newer developments near I-4, we know the community\'s HVAC landscape and housing stock well.' },
                { title: 'Prompt Service', desc: 'Our technicians serve Plant City and the surrounding eastern Hillsborough County area with same-day and emergency service availability.' },
                { title: 'Transparent Pricing', desc: 'No hidden fees, no surprise charges. Every job gets a written estimate you approve before any work begins.' },
                { title: 'All System Types', desc: 'We service split systems, packaged units, ductless mini-splits, heat pumps, and older gas and electric furnace systems.' },
                { title: 'Licensed & Insured', desc: 'Our technicians are fully licensed by the state of Florida and backed by comprehensive liability and workers\' compensation insurance.' },
                { title: 'Guaranteed Work', desc: 'We stand behind every repair and installation we complete in Plant City with a satisfaction guarantee backed by our reputation.' },
              ].map((item) => (
                <div key={item.title} className="bg-blue-50 border border-blue-100 rounded-xl p-5">
                  <h3 className="font-bold text-blue-900 mb-2">{item.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Nearby Areas */}
        <section className="bg-gray-50 py-12 px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-extrabold text-blue-900 mb-4">
              Areas Near Plant City We Also Serve
            </h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              In addition to Plant City, we provide HVAC services to surrounding communities including:
            </p>
            <div className="flex flex-wrap gap-3">
              {[
                { name: 'Valrico, FL', slug: 'valrico-fl' },
                { name: 'Brandon, FL', slug: 'brandon-fl' },
                { name: 'Tampa, FL', slug: 'tampa-fl' },
                { name: 'Riverview, FL', slug: 'riverview-fl' },
              ].map((city) => (
                <Link
                  key={city.slug}
                  href={`/service-areas/${city.slug}`}
                  className="bg-white border border-blue-200 text-blue-700 font-semibold px-4 py-2 rounded-lg hover:bg-blue-700 hover:text-white hover:border-blue-700 transition-colors text-sm"
                >
                  {city.name}
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-[#1e40af] py-16 px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-10 items-start">
              <div className="text-white">
                <h2 className="text-3xl font-extrabold mb-4">
                  Request a Free Consultation in Plant City
                </h2>
                <p className="text-blue-100 leading-relaxed mb-6">
                  Contact North East Heating &amp; Cooling for expert HVAC service throughout Plant City.
                  We&apos;re committed to keeping your home or business comfortable year-round.
                </p>
                <a href="tel:8132916146" className="flex items-center gap-3 text-white hover:text-blue-200 transition-colors mb-3">
                  <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5" aria-hidden="true"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.4 2 2 0 0 1 3.6 1.22h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L7.91 8.8a16 16 0 0 0 6.29 6.29l.95-.95a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" /></svg>
                  </div>
                  <div>
                    <p className="text-blue-200 text-xs">Call us anytime</p>
                    <p className="font-bold text-xl">(813) 291-6146</p>
                  </div>
                </a>
                <a href="mailto:office@northeastheatingcooling.com" className="flex items-center gap-3 text-white hover:text-blue-200 transition-colors">
                  <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5" aria-hidden="true"><rect x="2" y="4" width="20" height="16" rx="2" /><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" /></svg>
                  </div>
                  <div>
                    <p className="text-blue-200 text-xs">Email us</p>
                    <p className="font-medium text-sm">office@northeastheatingcooling.com</p>
                  </div>
                </a>
              </div>
              <div className="bg-white rounded-2xl p-6 shadow-xl">
                <h3 className="text-blue-900 font-bold text-xl mb-4">Get Your Free Estimate</h3>
                <form className="space-y-4">
                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label htmlFor="pc-first" className="block text-sm font-medium text-gray-700 mb-1">First Name</label>
                      <input id="pc-first" type="text" placeholder="John" className="w-full border border-gray-300 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent" />
                    </div>
                    <div>
                      <label htmlFor="pc-last" className="block text-sm font-medium text-gray-700 mb-1">Last Name</label>
                      <input id="pc-last" type="text" placeholder="Smith" className="w-full border border-gray-300 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent" />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="pc-phone" className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
                    <input id="pc-phone" type="tel" placeholder="(813) 555-0123" className="w-full border border-gray-300 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent" />
                  </div>
                  <div>
                    <label htmlFor="pc-service" className="block text-sm font-medium text-gray-700 mb-1">Service Needed</label>
                    <select id="pc-service" className="w-full border border-gray-300 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-700">
                      <option value="">Select a service...</option>
                      <option>AC Repair</option>
                      <option>AC Installation</option>
                      <option>Heating Repair</option>
                      <option>Air Duct Repair</option>
                      <option>Commercial HVAC</option>
                      <option>Maintenance / Tune-Up</option>
                    </select>
                  </div>
                  <div>
                    <label htmlFor="pc-message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                    <textarea id="pc-message" rows={3} placeholder="Describe your HVAC issue or project..." className="w-full border border-gray-300 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none" />
                  </div>
                  <button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 rounded-lg transition-colors text-base shadow-sm">
                    Send Request
                  </button>
                  <p className="text-gray-400 text-xs text-center">We&apos;ll respond within 1 business hour.</p>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}
