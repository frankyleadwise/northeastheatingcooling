import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'North East Heating & Cooling | HVAC Services Tampa Bay, FL',
  description: 'Expert HVAC repair, AC installation & maintenance in Tampa Bay, FL. Licensed, NATE-certified & insured technicians. 24/7 emergency service. Call (813) 291-6146 for a free consultation.',
  keywords: ['hvac tampa', 'ac repair tampa', 'hvac installation tampa', 'air duct repair tampa', 'heating and cooling tampa', 'hvac service tampa fl'],
  openGraph: {
    title: 'North East Heating & Cooling | Tampa Bay HVAC Experts',
    description: 'Expert HVAC repair, AC installation & maintenance in Tampa Bay, FL. 24/7 emergency service. Call (813) 291-6146.',
    type: 'website',
  },
}

const services = [
  {
    category: 'Residential',
    color: 'blue',
    items: [
      { name: 'Residential HVAC Repair', href: '/residential/hvac-service-tampa', desc: 'Fast AC & heating diagnostics and repair' },
      { name: 'AC Installation', href: '/residential/hvac-installation-tampa-fl', desc: 'New system installs & upgrades' },
      { name: 'Heating Repair', href: '/residential/hvac-service-tampa', desc: 'Heat pump & furnace repair' },
      { name: 'Air Duct Repair', href: '/residential/air-duct-repair-tampa', desc: 'Duct sealing, replacement & airflow' },
      { name: 'Exhaust Fan Repair', href: '/residential/exhaust-fan-repair-tampa', desc: 'Kitchen & bathroom ventilation' },
      { name: 'Water Heater Repair', href: '/residential/water-heater-repair-tampa', desc: 'Tank & tankless water heater service' },
    ],
  },
  {
    category: 'Commercial',
    color: 'slate',
    items: [
      { name: 'Commercial HVAC Installation', href: '/commercial/hvac-installation-tampa-fl', desc: 'Rooftop units, VRF & large-scale systems' },
      { name: 'Commercial HVAC Service', href: '/commercial/hvac-service-tampa', desc: 'Preventive maintenance & emergency repair' },
      { name: 'Commercial Air Duct Repair', href: '/commercial/air-duct-repair-tampa', desc: 'Large building duct sealing & replacement' },
      { name: 'Commercial Exhaust Fans', href: '/commercial/exhaust-fan-repair-tampa', desc: 'Restaurant & industrial ventilation' },
      { name: 'Commercial Water Heaters', href: '/commercial/water-heater-repair-tampa', desc: 'High-capacity water heater systems' },
    ],
  },
]

const testimonials = [
  {
    text: "Called them for an emergency and their technician Christian showed up fast — his response time was incredibly fast. He came fully prepared to assess and resolve the problem right away, discovered the issue, and checked the whole system to make sure there wasn't a secondary problem. Thorough, skilled, and truly professional.",
    name: 'Google Reviewer',
    location: 'Tampa Bay, FL',
    rating: 5,
  },
  {
    text: "Had them out for an AC tune-up and some vent work. From start to finish, their work was outstanding — polished and professional in every way. They explained what they were doing and left everything cleaner than they found it. Highly recommend.",
    name: 'Google Reviewer',
    location: 'Gibsonton, FL',
    rating: 5,
  },
  {
    text: "This is an amazing family company that truly cares about your home. They make sure you become a long-time client by ensuring your house is back to 100%. Honest, reliable, and genuinely invested in doing right by their customers. I won't use anyone else.",
    name: 'Google Reviewer',
    location: 'Tampa Bay, FL',
    rating: 5,
  },
]

const faqs = [
  {
    q: 'How often should I service my HVAC system in Florida?',
    a: 'In Florida\'s climate, we recommend twice-yearly maintenance — once before summer (April/May) and once before winter (October/November). The heat and humidity put extra strain on your system.',
  },
  {
    q: 'Do you offer 24/7 emergency HVAC service?',
    a: 'Yes! We provide 24/7 emergency HVAC service throughout Tampa Bay. When your AC breaks down in Florida heat, we\'re here day or night. Call (813) 291-6146 anytime.',
  },
  {
    q: 'What areas do you serve in Tampa Bay?',
    a: 'We serve Tampa, St. Petersburg, Clearwater, Brandon, Riverview, Valrico, Plant City, Apollo Beach, Gibsonton, Ruskin, Sun City Center, Carrollwood, Lutz, Odessa, Largo, Pinellas Park, Palm Harbor, Wesley Chapel, Land O Lakes, New Port Richey, and surrounding areas.',
  },
  {
    q: 'How long does AC installation take?',
    a: 'Most residential AC installations are completed in one day (4–8 hours). Commercial installations may take 2–3 days depending on the system size and complexity.',
  },
  {
    q: 'Are your technicians licensed and insured?',
    a: 'Yes. North East Heating & Cooling is fully licensed, certified, and insured in the state of Florida. Our technicians are NATE-certified and EPA 608 certified.',
  },
]

const serviceAreas = [
  'Tampa', 'St. Petersburg', 'Clearwater', 'Brandon', 'Riverview',
  'Valrico', 'Plant City', 'Apollo Beach', 'Gibsonton', 'Ruskin',
  'Sun City Center', 'Carrollwood', 'Lutz', 'Odessa', 'Largo',
  'Pinellas Park', 'Palm Harbor', 'Wesley Chapel', 'Land O Lakes', 'New Port Richey',
]

const areaLinks: Record<string, string> = {
  'Tampa': '/service-areas/tampa-fl',
  'St. Petersburg': '/service-areas/st-petersburg-fl',
  'Clearwater': '/service-areas/clearwater-fl',
  'Brandon': '/service-areas/brandon-fl',
  'Riverview': '/service-areas/riverview-fl',
  'Valrico': '/service-areas/valrico-fl',
  'Plant City': '/service-areas/plant-city-fl',
  'Apollo Beach': '/service-areas/apollo-beach-fl',
  'Gibsonton': '/service-areas/gibsonton-fl',
  'Ruskin': '/service-areas/ruskin-fl',
  'Sun City Center': '/service-areas/sun-city-center-fl',
  'Carrollwood': '/service-areas/carrollwood-fl',
  'Lutz': '/service-areas/lutz-fl',
  'Odessa': '/service-areas/odessa-fl',
  'Largo': '/service-areas/largo-fl',
  'Pinellas Park': '/service-areas/pinellas-park-fl',
  'Palm Harbor': '/service-areas/palm-harbor-fl',
  'Wesley Chapel': '/service-areas/wesley-chapel-fl',
  'Land O Lakes': '/service-areas/land-o-lakes-fl',
  'New Port Richey': '/service-areas/new-port-richey-fl',
}

export default function HomePage() {
  return (
    <main>
      {/* ── HERO ── */}
      <section className="relative min-h-screen flex items-center overflow-hidden" aria-label="Hero">
        {/* Background photo */}
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=1920&q=85"
            alt="HVAC technician servicing air conditioning unit"
            fill
            className="object-cover object-center"
            priority
            sizes="100vw"
          />
          {/* Dark gradient overlay — deep on left for legibility, lighter on right to show image */}
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950/95 via-blue-950/80 to-slate-900/50" />
          {/* Subtle bottom fade */}
          <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white/5 to-transparent" />
        </div>

        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-28 lg:py-36">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

            {/* ── Left column: copy ── */}
            <div>
              {/* Trust badges */}
              <div className="flex flex-wrap gap-2.5 mb-7">
                <span className="inline-flex items-center gap-1.5 bg-white/10 backdrop-blur-sm border border-white/20 text-white text-sm font-semibold px-3.5 py-1.5 rounded-full">
                  <svg className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>
                  5.0 Stars on Google
                </span>
                <span className="inline-flex items-center gap-1.5 bg-white/10 backdrop-blur-sm border border-white/20 text-white text-sm font-semibold px-3.5 py-1.5 rounded-full">
                  <svg className="w-4 h-4 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/></svg>
                  Licensed &amp; Insured
                </span>
                <span className="inline-flex items-center gap-1.5 bg-white/10 backdrop-blur-sm border border-white/20 text-white text-sm font-semibold px-3.5 py-1.5 rounded-full">
                  <svg className="w-4 h-4 text-sky-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
                  24/7 Emergency Service
                </span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-[1.1] mb-6 tracking-tight">
                Expert HVAC Services<br />
                You Can{' '}
                <span className="bg-gradient-to-r from-sky-300 to-blue-400 bg-clip-text text-transparent">
                  Trust
                </span>{' '}
                in Tampa Bay
              </h1>

              <p className="text-lg sm:text-xl text-slate-300 leading-relaxed mb-9 max-w-xl">
                Dependable heating, cooling, and indoor air quality solutions for Florida homes and businesses — fast repairs, quality installations, and routine maintenance.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-10">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 bg-blue-500 hover:bg-blue-400 text-white font-bold text-lg px-8 py-4 rounded-xl transition-all shadow-lg shadow-blue-500/30 hover:shadow-blue-400/40 hover:-translate-y-0.5"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"/></svg>
                  Get a Free Consultation
                </Link>
                <a
                  href="tel:8132916146"
                  className="inline-flex items-center justify-center gap-2 bg-white/10 backdrop-blur-sm border border-white/30 text-white font-bold text-lg px-8 py-4 rounded-xl hover:bg-white/20 transition-all"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/></svg>
                  Call (813) 291-6146
                </a>
              </div>

              <div className="flex flex-wrap gap-x-6 gap-y-2 text-slate-300 text-sm font-medium">
                <span className="flex items-center gap-1.5"><span className="text-emerald-400 font-bold">✓</span> NATE-Certified Technicians</span>
                <span className="flex items-center gap-1.5"><span className="text-emerald-400 font-bold">✓</span> 10+ Years Experience</span>
                <span className="flex items-center gap-1.5"><span className="text-emerald-400 font-bold">✓</span> Lifetime Workmanship Warranty</span>
                <span className="flex items-center gap-1.5"><span className="text-emerald-400 font-bold">✓</span> Locally Owned &amp; Operated</span>
              </div>
            </div>

            {/* ── Right column: stats card ── */}
            <div className="hidden lg:flex justify-end">
              <div className="w-full max-w-sm bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 shadow-2xl overflow-hidden">
                {/* Card header */}
                <div className="bg-blue-600/80 backdrop-blur-sm px-6 py-5">
                  <p className="text-white/80 text-sm font-semibold uppercase tracking-widest mb-1">Tampa Bay&apos;s Trusted Choice</p>
                  <p className="text-white text-2xl font-extrabold">North East Heating &amp; Cooling</p>
                </div>
                {/* Stats grid */}
                <div className="grid grid-cols-2 divide-x divide-y divide-white/15">
                  <div className="px-6 py-5 text-center">
                    <p className="text-4xl font-extrabold text-white">10+</p>
                    <p className="text-slate-300 text-sm mt-1">Years Serving<br />Tampa Bay</p>
                  </div>
                  <div className="px-6 py-5 text-center">
                    <p className="text-4xl font-extrabold text-yellow-400">5.0</p>
                    <p className="text-slate-300 text-sm mt-1">Star Rating<br />on Google</p>
                  </div>
                  <div className="px-6 py-5 text-center">
                    <p className="text-4xl font-extrabold text-emerald-400">24/7</p>
                    <p className="text-slate-300 text-sm mt-1">Emergency<br />Service</p>
                  </div>
                  <div className="px-6 py-5 text-center">
                    <p className="text-4xl font-extrabold text-sky-300">100%</p>
                    <p className="text-slate-300 text-sm mt-1">Satisfaction<br />Guaranteed</p>
                  </div>
                </div>
                {/* CTA */}
                <div className="px-6 py-5">
                  <a
                    href="tel:8132916146"
                    className="flex items-center justify-center gap-3 w-full bg-white text-blue-900 font-extrabold text-xl py-4 rounded-xl hover:bg-blue-50 transition-colors shadow-lg"
                  >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/></svg>
                    (813) 291-6146
                  </a>
                  <p className="text-center text-slate-400 text-xs mt-3">Free estimates · No hidden fees</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── WHY CHOOSE US ── */}
      <section className="py-20 bg-white" aria-label="Why Choose Us">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Why Choose North East Heating &amp; Cooling?
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Tampa Bay homeowners and businesses trust us for reliable, professional HVAC service.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: '🏆', title: '10+ Years Experience', desc: 'Over a decade serving Tampa Bay with expert HVAC solutions.' },
              { icon: '🛡️', title: 'Licensed & Insured', desc: 'Fully licensed, NATE-certified, and insured for your peace of mind.' },
              { icon: '⭐', title: '5.0 Stars on Google', desc: 'Consistently rated 5 stars by hundreds of satisfied customers.' },
              { icon: '🕐', title: '24/7 Emergency Service', desc: 'HVAC emergencies don\'t keep business hours — neither do we.' },
              { icon: '🔧', title: 'NATE-Certified Techs', desc: 'Our technicians hold the industry\'s top HVAC certification.' },
              { icon: '✅', title: 'Lifetime Warranty', desc: 'We stand behind our work with a lifetime workmanship guarantee.' },
              { icon: '💰', title: 'Fair, Upfront Pricing', desc: 'No hidden fees. Transparent quotes before any work begins.' },
              { icon: '🏠', title: 'Locally Owned', desc: 'A Tampa Bay company serving our neighbors with pride.' },
            ].map((item, i) => (
              <div key={i} className="bg-blue-50 rounded-xl p-6 text-center hover:shadow-md transition-shadow">
                <div className="text-4xl mb-3">{item.icon}</div>
                <h3 className="font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SERVICES OVERVIEW ── */}
      <section className="py-20 bg-gray-50" aria-label="Our Services">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Complete HVAC Services for Tampa Bay
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              From emergency repairs to full system replacements, we handle all your heating, cooling, and air quality needs.
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {services.map((cat) => (
              <div key={cat.category} className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
                <div className={`px-6 py-4 ${cat.category === 'Residential' ? 'bg-blue-800' : 'bg-slate-800'}`}>
                  <h3 className="text-xl font-bold text-white">{cat.category} HVAC Services</h3>
                </div>
                <div className="p-6">
                  <ul className="space-y-3">
                    {cat.items.map((item) => (
                      <li key={item.name}>
                        <Link
                          href={item.href}
                          className="flex items-start gap-3 group hover:text-blue-700 transition-colors"
                        >
                          <svg className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5 group-hover:translate-x-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7"/>
                          </svg>
                          <div>
                            <span className="font-semibold text-gray-900 group-hover:text-blue-700">{item.name}</span>
                            <p className="text-sm text-gray-500 mt-0.5">{item.desc}</p>
                          </div>
                        </Link>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-6 pt-4 border-t border-gray-100">
                    <Link
                      href={`/${cat.category.toLowerCase()}`}
                      className="inline-flex items-center gap-2 text-blue-700 font-semibold hover:text-blue-800 transition-colors"
                    >
                      View all {cat.category} services
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7"/></svg>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PROCESS ── */}
      <section className="py-20 bg-white" aria-label="Our Process">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Our Simple 3-Step Process</h2>
            <p className="text-lg text-gray-600">Getting your HVAC system back to peak performance is easy.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
            {/* Connecting line on desktop */}
            <div className="hidden md:block absolute top-12 left-1/3 right-1/3 h-0.5 bg-blue-200 z-0" />
            {[
              {
                step: '1',
                title: 'Get a Free Consultation',
                desc: 'Call us at (813) 291-6146 or fill out our online form. We\'ll schedule a convenient time and discuss your HVAC needs at no charge.',
              },
              {
                step: '2',
                title: 'Receive a Diagnosis',
                desc: 'Our NATE-certified technician arrives on time, thoroughly inspects your system, and provides a clear, upfront quote before any work begins.',
              },
              {
                step: '3',
                title: 'Guaranteed Comfort',
                desc: 'We complete the repair or installation efficiently, test everything, and back our work with a lifetime workmanship warranty. Your comfort is guaranteed.',
              },
            ].map((step) => (
              <div key={step.step} className="relative z-10 text-center">
                <div className="w-24 h-24 bg-blue-800 text-white rounded-full flex items-center justify-center text-3xl font-extrabold mx-auto mb-6 shadow-lg">
                  {step.step}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{step.title}</h3>
                <p className="text-gray-600 leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ── */}
      <section className="py-20 bg-blue-950" aria-label="Customer Testimonials">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">What Our Customers Are Saying</h2>
            <p className="text-blue-200 text-lg">
              <span className="text-yellow-400 font-bold">★★★★★</span> 5.0 Average Rating · 30 Google Reviews
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((t, i) => (
              <div key={i} className="bg-white/10 backdrop-blur border border-white/20 rounded-2xl p-8">
                <div className="text-yellow-400 text-2xl mb-4">{'★'.repeat(t.rating)}</div>
                <blockquote className="text-blue-50 leading-relaxed mb-6 text-[15px]">
                  &ldquo;{t.text}&rdquo;
                </blockquote>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-sm">
                    {t.name.charAt(0)}
                  </div>
                  <div>
                    <p className="font-semibold text-white">{t.name}</p>
                    <p className="text-blue-300 text-sm">{t.location}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="py-20 bg-gray-50" aria-label="FAQ">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
            <p className="text-gray-600 text-lg">Common questions about HVAC service in Tampa Bay, FL.</p>
          </div>
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <div key={i} className="bg-white rounded-xl border border-gray-200 overflow-hidden shadow-sm">
                <div className="px-6 py-5">
                  <h3 className="font-bold text-gray-900 flex items-start gap-3">
                    <span className="text-blue-600 font-extrabold text-lg flex-shrink-0">Q.</span>
                    {faq.q}
                  </h3>
                  <p className="mt-3 text-gray-600 leading-relaxed pl-7">{faq.a}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SERVICE AREAS ── */}
      <section className="py-20 bg-white" aria-label="Service Areas">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Serving the Entire Tampa Bay Area
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              From Tampa to Clearwater and everywhere in between, North East Heating &amp; Cooling provides fast, reliable HVAC service across the region.
            </p>
          </div>
          {/* Google Maps — Tampa Bay service area */}
          <div className="rounded-2xl overflow-hidden border border-gray-200 shadow-md mb-12">
            <iframe
              title="North East Heating And Cooling Tampa Bay service area"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d180000!2d-82.45!3d27.87!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2003b66f381708c5%3A0xb21d6d85ffd57b3c!2sNorth%20East%20Heating%20And%20Cooling!5e0!3m2!1sen!2sus!4v1710000000000!5m2!1sen!2sus"
              width="100%"
              height="400"
              style={{ border: 0, display: 'block' }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
            {serviceAreas.map((area) => (
              <Link
                key={area}
                href={areaLinks[area] || '/service-areas'}
                className="flex items-center gap-2 bg-gray-50 border border-gray-200 rounded-lg px-3 py-2.5 text-sm font-medium text-gray-700 hover:bg-blue-50 hover:border-blue-300 hover:text-blue-700 transition-colors"
              >
                <svg className="w-3.5 h-3.5 text-blue-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"/>
                </svg>
                {area}
              </Link>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link href="/service-areas" className="inline-flex items-center gap-2 text-blue-700 font-semibold hover:text-blue-800">
              View all service areas
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7"/></svg>
            </Link>
          </div>
        </div>
      </section>

      {/* ── CTA SECTION ── */}
      <section className="py-20 bg-gradient-to-r from-blue-900 to-blue-700" aria-label="Call to Action">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4">
                HVAC Acting Up? Get Your Free Consultation Today
              </h2>
              <p className="text-blue-100 text-lg mb-8">
                Don&apos;t suffer in the Florida heat. Our expert technicians are ready to diagnose, repair, or replace your HVAC system — fast.
              </p>
              <a
                href="tel:8132916146"
                className="inline-flex items-center gap-3 bg-white text-blue-900 font-bold text-2xl px-8 py-5 rounded-xl hover:bg-blue-50 transition-colors shadow-xl"
              >
                <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
                </svg>
                (813) 291-6146
              </a>
              <p className="text-blue-200 text-sm mt-4">Available 24/7 for emergencies · Free estimates on new systems</p>
            </div>
            <div className="bg-white/10 backdrop-blur border border-white/20 rounded-2xl p-8">
              <h3 className="text-xl font-bold text-white mb-6">Request a Free Quote</h3>
              <form className="space-y-4" action="/contact" method="get">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    required
                    className="w-full bg-white/20 border border-white/30 text-white placeholder-blue-200 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-white/50"
                  />
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Phone Number"
                    required
                    className="w-full bg-white/20 border border-white/30 text-white placeholder-blue-200 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-white/50"
                  />
                </div>
                <input
                  type="email"
                  name="email"
                  placeholder="Email Address"
                  className="w-full bg-white/20 border border-white/30 text-white placeholder-blue-200 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-white/50"
                />
                <select
                  name="service"
                  className="w-full bg-white/20 border border-white/30 text-white rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-white/50"
                >
                  <option value="" className="text-gray-900">Select Service</option>
                  <option value="ac-repair" className="text-gray-900">AC Repair</option>
                  <option value="ac-installation" className="text-gray-900">AC Installation</option>
                  <option value="heating-repair" className="text-gray-900">Heating Repair</option>
                  <option value="air-duct-repair" className="text-gray-900">Air Duct Repair</option>
                  <option value="exhaust-fan" className="text-gray-900">Exhaust Fan Repair</option>
                  <option value="water-heater" className="text-gray-900">Water Heater</option>
                  <option value="commercial" className="text-gray-900">Commercial HVAC</option>
                  <option value="other" className="text-gray-900">Other</option>
                </select>
                <button
                  type="submit"
                  className="w-full bg-white text-blue-900 font-bold text-lg py-4 rounded-lg hover:bg-blue-50 transition-colors shadow-lg"
                >
                  Get My Free Quote →
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
