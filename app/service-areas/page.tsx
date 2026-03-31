import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'HVAC Service Areas in Tampa Bay, FL | North East Heating & Cooling',
  description:
    'North East Heating & Cooling proudly serves Tampa Bay and surrounding communities. View all HVAC service areas including Tampa, St. Petersburg, Clearwater, Brandon, Riverview, and more.',
}

const cities = [
  { name: 'Tampa',         slug: 'tampa-fl',          desc: 'Full HVAC repair, installation & maintenance in Tampa, FL.' },
  { name: 'St. Petersburg', slug: 'st-petersburg-fl', desc: 'Expert heating & cooling services throughout St. Pete.' },
  { name: 'Clearwater',    slug: 'clearwater-fl',      desc: 'AC installation, repair & air duct services in Clearwater.' },
  { name: 'Brandon',       slug: 'brandon-fl',         desc: 'Residential & commercial HVAC solutions in Brandon, FL.' },
  { name: 'Riverview',     slug: 'riverview-fl',       desc: 'Trusted HVAC contractors serving Riverview neighborhoods.' },
  { name: 'Valrico',       slug: 'valrico-fl',         desc: 'Heating, cooling & duct repair for Valrico homes & businesses.' },
  { name: 'Plant City',    slug: 'plant-city-fl',      desc: 'Reliable HVAC service throughout Plant City, FL.' },
  { name: 'Apollo Beach',  slug: 'apollo-beach-fl',    desc: 'Coastal climate comfort — HVAC experts in Apollo Beach.' },
  { name: 'Gibsonton',     slug: 'gibsonton-fl',       desc: 'Affordable heating & cooling repairs in Gibsonton, FL.' },
  { name: 'Ruskin',        slug: 'ruskin-fl',          desc: 'Full-service HVAC repair & installation in Ruskin, FL.' },
]

export default function ServiceAreasPage() {
  return (
    <>
      <main>
        {/* ── Hero Banner ──────────────────────────────────────────────────── */}
        <section className="bg-[#1e40af] text-white py-20 px-4 relative overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.pexels.com/photos/7577378/pexels-photo-7577378.jpeg?auto=compress&cs=tinysrgb&w=1600"
            alt="Happy family outside their Tampa Bay Florida home"
            className="w-full h-full object-cover object-center opacity-40"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0f1620]/80 via-[#0f1620]/60 to-[#0f1620]/40" />
        </div>
          <div className="relative z-10 max-w-5xl mx-auto text-center">
            <p className="text-blue-200 text-sm font-semibold uppercase tracking-widest mb-3">
              Tampa Bay's Trusted HVAC Company
            </p>
            <h1 className="text-4xl sm:text-5xl font-extrabold leading-tight mb-5">
              HVAC Service Areas in Tampa Bay, FL
            </h1>
            <p className="text-blue-100 text-lg sm:text-xl max-w-3xl mx-auto leading-relaxed mb-8">
              North East Heating &amp; Cooling provides professional heating, air conditioning, and ventilation
              services throughout the greater Tampa Bay region. Whether you need emergency AC repair on a sweltering
              summer afternoon or a brand-new system installation, our licensed technicians are ready to help
              homeowners and businesses across Hillsborough and Pinellas counties.
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
                className="inline-flex items-center gap-2 bg-red-600 hover:bg-blue-500 text-white font-bold px-7 py-3.5 rounded-lg transition-colors shadow-lg text-lg border border-red-400"
              >
                Request Free Estimate
              </Link>
            </div>
          </div>
        </section>

        {/* ── Intro ─────────────────────────────────────────────────────────── */}
        <section className="bg-white py-16 px-4">
          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-2 gap-10 items-center">
              <div>
                <h2 className="text-3xl font-extrabold text-blue-900 mb-4">
                  Serving the Entire Tampa Bay Area
                </h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Florida's subtropical climate puts extraordinary demands on HVAC systems. With summer temperatures
                  regularly exceeding 90°F and humidity levels that make it feel even hotter, a malfunctioning air
                  conditioner is more than an inconvenience — it can be a health hazard. North East Heating &amp; Cooling
                  has built its reputation on fast response times, honest pricing, and technicians who treat every
                  customer's home or business with respect.
                </p>
                <p className="text-gray-700 leading-relaxed mb-4">
                  We serve communities across Hillsborough and Pinellas counties, from the urban core of Tampa and
                  St. Petersburg to the suburban neighborhoods of Brandon, Riverview, and Valrico, out to the coastal
                  communities of Apollo Beach and Ruskin. No matter where you are in the Tampa Bay region, a North East
                  Heating &amp; Cooling technician is never far away.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  Our services include residential AC repair, air conditioning installation, heating system service,
                  air duct repair and cleaning, exhaust fan repair, water heater service, and commercial HVAC solutions.
                  We work on all major brands and offer upfront pricing with no hidden fees.
                </p>
              </div>
              <div className="space-y-4">
                <div className="bg-blue-50 border border-blue-100 rounded-xl p-6">
                  <h3 className="font-bold text-blue-900 mb-3 text-lg">Why Choose North East Heating &amp; Cooling?</h3>
                  <ul className="space-y-2.5">
                    {[
                      'Licensed & insured HVAC technicians',
                      'Same-day & emergency service available',
                      'Upfront, transparent pricing',
                      'All major brands serviced & installed',
                      'Residential & commercial expertise',
                      'Financing options available',
                      'Satisfaction guaranteed',
                    ].map((item) => (
                      <li key={item} className="flex items-start gap-2 text-gray-700 text-sm">
                        <svg className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5} aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="bg-[#0f1620] text-white rounded-xl p-5 text-center">
                  <p className="text-blue-200 text-sm mb-1">Call us anytime</p>
                  <a href="tel:8132916146" className="text-2xl font-extrabold hover:text-blue-200 transition-colors">
                    (813) 291-6146
                  </a>
                  <p className="text-blue-300 text-xs mt-1">Available for emergency service</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── Service Area Map ──────────────────────────────────────────────── */}
        <section className="bg-white py-12 px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-6">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-blue-900 mb-2">
                Our Service Area
              </h2>
              <p className="text-gray-600 text-sm">
                Based in Gibsonton, FL — serving the greater Tampa Bay region
              </p>
            </div>
            <div className="rounded-2xl overflow-hidden border border-gray-200 shadow-md">
              <iframe
                title="North East Heating And Cooling Tampa Bay service area map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d180000!2d-82.45!3d27.87!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2003b66f381708c5%3A0xb21d6d85ffd57b3c!2sNorth%20East%20Heating%20And%20Cooling!5e0!3m2!1sen!2sus!4v1710000000000!5m2!1sen!2sus"
                width="100%"
                height="420"
                style={{ border: 0, display: 'block' }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
            <p className="text-center text-xs text-gray-400 mt-3">
              Serving Tampa, St. Petersburg, Clearwater, Brandon, Riverview, Valrico, Plant City, Apollo Beach, Gibsonton, Ruskin &amp; surrounding communities.
            </p>
          </div>
        </section>

        {/* ── City Grid ─────────────────────────────────────────────────────── */}
        <section className="bg-gray-50 py-16 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-extrabold text-blue-900 mb-4">
                Cities We Serve
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Click on your city below for detailed information about our HVAC services in your area,
                local climate considerations, and how to schedule a visit.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
              {cities.map((city) => (
                <Link
                  key={city.slug}
                  href={`/service-areas/${city.slug}`}
                  className="group bg-white border border-gray-200 rounded-xl p-5 hover:border-red-400 hover:shadow-lg transition-all duration-200"
                >
                  <div className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-10 h-10 bg-blue-100 group-hover:bg-red-600 rounded-lg flex items-center justify-center transition-colors">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 text-blue-600 group-hover:text-white transition-colors" aria-hidden="true"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" /><circle cx="12" cy="10" r="3" /></svg>
                    </div>
                    <div>
                      <h3 className="font-bold text-blue-900 group-hover:text-blue-700 transition-colors mb-1">
                        {city.name}, FL
                      </h3>
                      <p className="text-gray-500 text-sm leading-snug">{city.desc}</p>
                    </div>
                  </div>
                  <div className="mt-3 text-blue-600 group-hover:text-blue-800 text-sm font-semibold flex items-center gap-1 transition-colors">
                    View Services
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4" aria-hidden="true"><path d="m9 18 6-6-6-6" /></svg>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* ── Map Placeholder ───────────────────────────────────────────────── */}
        <section className="bg-white py-16 px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-extrabold text-blue-900 mb-3">Our Coverage Area</h2>
              <p className="text-gray-600 max-w-xl mx-auto">
                We cover a broad service territory across the Tampa Bay metro region, spanning both
                Hillsborough and Pinellas counties.
              </p>
            </div>
            {/* Map placeholder */}
            <div className="relative w-full h-80 sm:h-96 bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 rounded-2xl overflow-hidden shadow-xl flex flex-col items-center justify-center text-white">
              <div className="absolute inset-0 opacity-10">
                {/* Decorative grid lines */}
                <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
                  <defs>
                    <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                      <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="0.5"/>
                    </pattern>
                  </defs>
                  <rect width="100%" height="100%" fill="url(#grid)" />
                </svg>
              </div>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-16 h-16 text-blue-300 mb-4" aria-hidden="true"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" /><circle cx="12" cy="10" r="3" /></svg>
              <h3 className="text-2xl font-extrabold mb-2">Tampa Bay, FL</h3>
              <p className="text-blue-200 text-center max-w-xs px-4 text-sm">
                Hillsborough County · Pinellas County<br />
                and surrounding communities
              </p>
              <div className="mt-4 flex flex-wrap justify-center gap-2 px-6">
                {['Tampa', 'St. Pete', 'Clearwater', 'Brandon', 'Riverview', 'Valrico', 'Plant City', 'Apollo Beach', 'Gibsonton', 'Ruskin'].map((city) => (
                  <span key={city} className="bg-red-600/60 text-white text-xs px-2.5 py-1 rounded-full border border-red-400/40">
                    {city}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── Services Overview ─────────────────────────────────────────────── */}
        <section className="bg-gray-50 py-16 px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-extrabold text-blue-900 mb-3">
                HVAC Services Available Throughout Tampa Bay
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                From a quick repair to a full system replacement, our team handles every aspect of residential
                and commercial HVAC service.
              </p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  title: 'HVAC Repair',
                  desc: 'Fast diagnostics and repairs for all makes and models of heating and cooling equipment. Same-day service available.',
                  href: '/residential/hvac-service-tampa',
                },
                {
                  title: 'AC Installation',
                  desc: 'Expert installation of energy-efficient air conditioning systems sized correctly for your home or business.',
                  href: '/residential/hvac-installation-tampa-fl',
                },
                {
                  title: 'Heating Services',
                  desc: 'Heat pump repair, furnace service, and heating system installation to keep you comfortable year-round.',
                  href: '/residential/hvac-service-tampa',
                },
                {
                  title: 'Air Duct Repair',
                  desc: 'Duct cleaning, sealing, and replacement to improve indoor air quality and system efficiency.',
                  href: '/residential/air-duct-repair-tampa',
                },
                {
                  title: 'Commercial HVAC',
                  desc: 'Commercial-grade installation, maintenance contracts, and emergency repair for offices, retail, and more.',
                  href: '/commercial/hvac-service-tampa',
                },
                {
                  title: 'Preventive Maintenance',
                  desc: 'Seasonal tune-ups and maintenance plans that extend equipment life and prevent costly breakdowns.',
                  href: '/residential/hvac-service-tampa',
                },
              ].map((service) => (
                <Link
                  key={service.title}
                  href={service.href}
                  className="group bg-white border border-gray-200 rounded-xl p-6 hover:border-red-400 hover:shadow-md transition-all"
                >
                  <h3 className="font-bold text-blue-900 text-lg mb-2 group-hover:text-blue-700 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{service.desc}</p>
                  <span className="mt-3 inline-block text-blue-600 text-sm font-semibold group-hover:text-blue-800 transition-colors">
                    Learn more &rarr;
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* ── CTA Section ───────────────────────────────────────────────────── */}
        <section className="bg-[#1e40af] py-16 px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-10 items-start">
              {/* Left: contact info */}
              <div className="text-white">
                <h2 className="text-3xl font-extrabold mb-4">
                  Ready to Schedule Service?
                </h2>
                <p className="text-blue-100 leading-relaxed mb-6">
                  Contact North East Heating &amp; Cooling today for a free estimate. Our team is standing by to
                  answer your questions and get a technician out to your home or business as quickly as possible.
                </p>
                <div className="space-y-3">
                  <a href="tel:8132916146" className="flex items-center gap-3 text-white hover:text-blue-200 transition-colors">
                    <div className="w-10 h-10 bg-red-600 rounded-lg flex items-center justify-center shrink-0">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5" aria-hidden="true"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.4 2 2 0 0 1 3.6 1.22h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L7.91 8.8a16 16 0 0 0 6.29 6.29l.95-.95a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" /></svg>
                    </div>
                    <div>
                      <p className="text-blue-200 text-xs">Call us anytime</p>
                      <p className="font-bold text-xl">(813) 291-6146</p>
                    </div>
                  </a>
                  <a href="mailto:office@northeastheatingcooling.com" className="flex items-center gap-3 text-white hover:text-blue-200 transition-colors">
                    <div className="w-10 h-10 bg-red-600 rounded-lg flex items-center justify-center shrink-0">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5" aria-hidden="true"><rect x="2" y="4" width="20" height="16" rx="2" /><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" /></svg>
                    </div>
                    <div>
                      <p className="text-blue-200 text-xs">Email us</p>
                      <p className="font-medium text-sm">office@northeastheatingcooling.com</p>
                    </div>
                  </a>
                </div>
              </div>

              {/* Right: contact form */}
              <div className="bg-white rounded-2xl p-6 shadow-xl">
                <h3 className="text-blue-900 font-bold text-xl mb-4">Request a Free Consultation</h3>
                <form className="space-y-4">
                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label htmlFor="sa-first-name" className="block text-sm font-medium text-gray-700 mb-1">First Name</label>
                      <input id="sa-first-name" type="text" placeholder="John" className="w-full border border-gray-300 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent" />
                    </div>
                    <div>
                      <label htmlFor="sa-last-name" className="block text-sm font-medium text-gray-700 mb-1">Last Name</label>
                      <input id="sa-last-name" type="text" placeholder="Smith" className="w-full border border-gray-300 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent" />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="sa-phone" className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
                    <input id="sa-phone" type="tel" placeholder="(813) 555-0123" className="w-full border border-gray-300 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent" />
                  </div>
                  <div>
                    <label htmlFor="sa-email" className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                    <input id="sa-email" type="email" placeholder="john@example.com" className="w-full border border-gray-300 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent" />
                  </div>
                  <div>
                    <label htmlFor="sa-city" className="block text-sm font-medium text-gray-700 mb-1">Your City</label>
                    <select id="sa-city" className="w-full border border-gray-300 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-700">
                      <option value="">Select your city...</option>
                      <option>Tampa</option>
                      <option>St. Petersburg</option>
                      <option>Clearwater</option>
                      <option>Brandon</option>
                      <option>Riverview</option>
                      <option>Valrico</option>
                      <option>Plant City</option>
                      <option>Apollo Beach</option>
                      <option>Gibsonton</option>
                      <option>Ruskin</option>
                    </select>
                  </div>
                  <div>
                    <label htmlFor="sa-message" className="block text-sm font-medium text-gray-700 mb-1">How Can We Help?</label>
                    <textarea id="sa-message" rows={3} placeholder="Describe your HVAC issue or project..." className="w-full border border-gray-300 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none" />
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-red-600 hover:bg-red-700 active:bg-[#0f1620] text-white font-bold py-3 rounded-lg transition-colors text-base shadow-sm"
                  >
                    Send Request
                  </button>
                  <p className="text-gray-400 text-xs text-center">
                    We&apos;ll respond within 1 business hour.
                  </p>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}
