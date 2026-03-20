import type { Metadata } from 'next'
import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'HVAC Services in Tampa, FL | North East Heating & Cooling',
  description:
    'North East Heating & Cooling provides expert HVAC repair, AC installation, heating services, and air duct repair throughout Tampa, FL. Call (813) 291-6146 for same-day service.',
}

export default function TampaPage() {
  return (
    <>
      <Header />
      <main>
        {/* Hero Banner */}
        <section className="bg-[#1e40af] text-white py-20 px-4">
          <div className="max-w-5xl mx-auto text-center">
            <p className="text-blue-200 text-sm font-semibold uppercase tracking-widest mb-3">
              Tampa Bay's Trusted HVAC Company
            </p>
            <h1 className="text-4xl sm:text-5xl font-extrabold leading-tight mb-5">
              HVAC Services in Tampa, FL
            </h1>
            <p className="text-blue-100 text-lg sm:text-xl max-w-3xl mx-auto leading-relaxed mb-8">
              Professional heating, air conditioning, and ventilation services for Tampa homeowners
              and businesses. Licensed technicians, transparent pricing, and same-day availability.
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
              Serving Tampa's Neighborhoods with Expert HVAC Care
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Tampa is Florida's third-largest city and one of the fastest-growing metros in the country, home to
              over 400,000 residents spread across vibrant neighborhoods like South Tampa, Westchase, New Tampa,
              Seminole Heights, and Ybor City. With a subtropical climate that delivers sweltering summers, high
              humidity, and mild winters, Tampa residents depend on their HVAC systems year-round to stay comfortable
              and healthy. When temperatures regularly push past 90°F from June through September and heat indices
              climb even higher, a failing air conditioner isn't just uncomfortable — it can be dangerous.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              North East Heating &amp; Cooling has served Tampa homeowners and commercial clients for years, building
              a reputation on fast response times, honest diagnostics, and workmanship that stands up to Florida's
              demanding climate. Our licensed and insured technicians are familiar with every neighborhood in
              Tampa, meaning shorter drive times and faster service for you. Whether you're in a historic Seminole
              Heights bungalow, a newer construction home in New Tampa, or a commercial storefront downtown, we
              have the tools and expertise to keep your system running at peak efficiency.
            </p>
            <p className="text-gray-700 leading-relaxed">
              We service all major HVAC brands including Carrier, Trane, Lennox, Rheem, Goodman, and more. From
              a quick refrigerant recharge to a complete system replacement, our team handles every job with the
              same level of professionalism and care. Call us today at{' '}
              <a href="tel:8132916146" className="text-blue-700 font-semibold hover:underline">(813) 291-6146</a>{' '}
              for a free estimate.
            </p>
          </div>
        </section>

        {/* HVAC Repair */}
        <section className="bg-gray-50 py-16 px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-extrabold text-blue-900 mb-5">
              HVAC Repair Services in Tampa, FL
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              A broken HVAC system in Tampa is an urgent problem. Our repair technicians are available for
              same-day and emergency service calls throughout the city. Common issues we diagnose and repair
              include refrigerant leaks, compressor failures, blower motor malfunctions, thermostat issues,
              electrical faults, frozen evaporator coils, and clogged condensate drain lines — all of which are
              especially prevalent in Tampa's high-humidity environment.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              We carry a fully stocked service van so the majority of repairs are completed on the first visit.
              Our technicians perform a thorough system inspection before recommending any repairs, and we always
              provide a written estimate before any work begins. No surprise charges, no upselling — just honest
              service from professionals who know Tampa's climate conditions inside and out.
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
              AC Installation in Tampa, FL
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Installing a new air conditioning system in a Tampa home is a significant investment, and getting
              the sizing and installation right the first time is critical to long-term performance and energy
              efficiency. An undersized unit will run constantly without adequately cooling your home, while an
              oversized unit will short-cycle, leaving excess humidity in the air — a real problem in Tampa's
              coastal climate.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              Our installation team performs a Manual J load calculation for every project to ensure your new
              system is perfectly sized for your home's square footage, insulation levels, window placement, and
              local climate. We install energy-efficient systems from top manufacturers, and we'll walk you through
              all available SEER ratings and rebate options to help you maximize your investment. Most installations
              are completed in a single day with minimal disruption to your household.
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
              Heating Services in Tampa, FL
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              While Tampa winters are mild compared to the rest of the country, temperatures do dip into the
              40s and 50s between December and February, and the occasional cold front can push readings even
              lower. Most Tampa homes rely on heat pumps for winter warmth, and when these systems underperform
              during a cold snap, you need a technician who can respond quickly.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              North East Heating &amp; Cooling handles heat pump repair, heat pump replacement, emergency heating
              service, and seasonal tune-ups throughout Tampa. We'll inspect your heat pump's reversing valve,
              refrigerant charge, defrost cycle, and auxiliary heat strips to ensure your system is ready when
              temperatures drop. For homes with older electric furnaces or gas systems, we provide thorough
              inspection, cleaning, and repair services as well.
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
              Air Duct Repair in Tampa, FL
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              In Tampa's humid climate, ductwork that is leaking, poorly insulated, or contaminated with mold
              and dust can dramatically reduce your HVAC system's efficiency and degrade your indoor air quality.
              Studies suggest that the average home loses 20–30% of its conditioned air through leaky ducts —
              air you're paying to cool or heat but never actually feeling inside your living spaces.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              Our duct specialists inspect your entire duct system using pressure testing and visual inspection
              to identify leaks, disconnected sections, collapsed ducts, and areas where insulation has
              deteriorated. We offer duct sealing, duct repair, duct replacement, and full duct cleaning services.
              Many Tampa homeowners notice an immediate improvement in comfort and a reduction in energy bills
              after a duct repair or cleaning.
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
              Commercial HVAC Services in Tampa, FL
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Tampa's thriving economy means busy offices, restaurants, retail stores, medical facilities, and
              warehouses that all require reliable commercial HVAC systems. A breakdown during Tampa's brutal
              summer can send customers away, force staff to work in unsafe conditions, and result in significant
              revenue loss. North East Heating &amp; Cooling provides priority commercial service with rapid
              response times and the capacity to handle rooftop units, split systems, chillers, and large-format
              commercial equipment.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              We offer preventive maintenance contracts for Tampa businesses that want to minimize downtime and
              extend equipment life. Our commercial team handles new HVAC installations, retrofits, and system
              upgrades for businesses of all sizes throughout Tampa's downtown, Westshore Business District,
              and surrounding commercial corridors.
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
              Why Tampa Residents Choose North East Heating &amp; Cooling
            </h2>
            <div className="grid sm:grid-cols-2 gap-5">
              {[
                { title: 'Licensed & Insured', desc: 'All our technicians are fully licensed in Florida and carry comprehensive liability insurance for your protection.' },
                { title: 'Same-Day Service', desc: 'We offer same-day appointments throughout Tampa, with emergency service available when your system fails at the worst possible time.' },
                { title: 'Upfront Pricing', desc: 'We provide a written estimate before any work begins. The price we quote is the price you pay — no hidden fees or surprise charges.' },
                { title: 'All Major Brands', desc: 'From Carrier and Trane to Lennox, Rheem, and Goodman, our technicians are trained and certified across all major HVAC manufacturers.' },
                { title: 'Local Expertise', desc: "We understand Tampa's climate and the unique demands it places on HVAC equipment, from high humidity to hurricane-season considerations." },
                { title: 'Satisfaction Guaranteed', desc: "We stand behind every repair and installation. If you're not completely satisfied, we'll make it right — that's our commitment to Tampa." },
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
              Areas Near Tampa We Also Serve
            </h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              In addition to Tampa, North East Heating &amp; Cooling proudly serves the surrounding communities
              throughout Hillsborough and Pinellas counties. Our service area includes:
            </p>
            <div className="flex flex-wrap gap-3">
              {[
                { name: 'Brandon, FL', slug: 'brandon-fl' },
                { name: 'Riverview, FL', slug: 'riverview-fl' },
                { name: 'St. Petersburg, FL', slug: 'st-petersburg-fl' },
                { name: 'Clearwater, FL', slug: 'clearwater-fl' },
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
                  Request a Free Consultation in Tampa
                </h2>
                <p className="text-blue-100 leading-relaxed mb-6">
                  Ready to schedule service or get a free estimate? Contact North East Heating &amp; Cooling
                  today. Our Tampa team is standing by to help with any heating or cooling need.
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
                      <label htmlFor="tampa-first" className="block text-sm font-medium text-gray-700 mb-1">First Name</label>
                      <input id="tampa-first" type="text" placeholder="John" className="w-full border border-gray-300 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent" />
                    </div>
                    <div>
                      <label htmlFor="tampa-last" className="block text-sm font-medium text-gray-700 mb-1">Last Name</label>
                      <input id="tampa-last" type="text" placeholder="Smith" className="w-full border border-gray-300 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent" />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="tampa-phone" className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
                    <input id="tampa-phone" type="tel" placeholder="(813) 555-0123" className="w-full border border-gray-300 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent" />
                  </div>
                  <div>
                    <label htmlFor="tampa-service" className="block text-sm font-medium text-gray-700 mb-1">Service Needed</label>
                    <select id="tampa-service" className="w-full border border-gray-300 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-700">
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
                    <label htmlFor="tampa-message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                    <textarea id="tampa-message" rows={3} placeholder="Describe your HVAC issue or project..." className="w-full border border-gray-300 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none" />
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
      <Footer />
    </>
  )
}
