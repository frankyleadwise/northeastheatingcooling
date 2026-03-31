import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import QuoteForm from '@/app/components/QuoteForm'

export const metadata: Metadata = {
  title: 'North East Heating & Cooling | HVAC Services Tampa Bay, FL',
  description: 'Expert HVAC repair, AC installation & maintenance in Tampa Bay, FL. Licensed, NATE-certified & insured technicians. 24/7 emergency service. Call (813) 291-6146 for a free consultation.',
  keywords: ['hvac tampa', 'ac repair tampa', 'hvac installation tampa', 'air duct repair tampa', 'heating and cooling tampa', 'hvac service tampa fl'],
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'North East Heating & Cooling | Tampa Bay HVAC Experts',
    description: 'Expert HVAC repair, AC installation & maintenance in Tampa Bay, FL. 24/7 emergency service. Call (813) 291-6146.',
    url: '/',
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
    text: "Chris figured out the issue which required a water heater replacement/installation. He completed it within a few hours and was friendly and professional. Due to his quick service I had water again and my water bill didn't become as big as it could have. Would recommend to everyone!",
    name: 'Nelida Rodriguez',
    location: 'Tampa Bay, FL',
    rating: 5,
  },
  {
    text: "My ac unit stopped working on a Saturday morning and I called to schedule an appointment. I was so happy that Christian was able to fix my ac unit the same day! Very knowledgeable and professional. He answered all my questions and made sure I understood everything. I would highly recommend this company!",
    name: 'Brandon Garrett',
    location: 'Tampa Bay, FL',
    rating: 5,
  },
  {
    text: "I recently hired North East Heating and Cooling for my annual AC tune-up, along with adding vents in two doorways and a return. From start to finish, their work was outstanding. They even removed all of our existing A/C vents, repainted them white, and made them look brand new. Their workmanship was timely, their pricing fair, and the quality exceptional. I'm thrilled with the results and will absolutely use them again for future needs. Thank you!",
    name: 'Robert Cowart',
    location: 'Tampa Bay, FL',
    rating: 5,
  },
  {
    text: "Christian did an amazing job!!! We were not happy that our AC went down in the middle of summer but he was professional, kind and got us back up and running right away. We appreciate everything Christian did and he was super informative. Definitely recommend to all our friends!!",
    name: 'Lupe and Micha',
    location: 'Tampa Bay, FL',
    rating: 5,
  },
  {
    text: "When your a/c is out you want Chris to come out to fix it. He is thorough and skilled. He discovered the problem and checked the whole system to make sure that there was not a secondary problem. My a/c is fixed and cool air is flowing again. Chris' charges were completely reasonable. He offers an annual maintenance contract which I signed up for because after meeting him there's no one I would find who could do a better job. Thank you, CHRIS!",
    name: 'Mary Hampton',
    location: 'Tampa Bay, FL',
    rating: 5,
  },
  {
    text: "We are so happy that Christian was highly recommended to us. Our upstairs unit shut down. One well-known company charged us $300 to research the problem and was to return to complete the job. Christian found a dead lizard had burned out wires that only needed replacement. He replaced the wiring. A new $7,000 unit was not required. His integrity, honesty, professionalism, and patience amazed us. We called a well known Plumber to fix an outdoor faucet that had rusted out, a highly rated company gave us a $600.00 estimate — Christian offered to come by at no charge to inspect it and fixed the problem at 1/3 the cost. Seniors risk being ripped off by these companies. This one is the ABSOLUTE VERY BEST! We bought a yearly HVAC package to have a thorough check up completed as our home was built in 2005. 5 stars, not enough for the service and satisfaction we received.",
    name: 'Rose Jackson',
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
            src="/image.png"
            alt="North East Heating & Cooling technician beside service van in Tampa Bay"
            fill
            className="object-cover object-right"
            priority
            sizes="100vw"
          />
          {/* Dark gradient overlay — heavy on left for text legibility, fades right to reveal technician/van */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#0f1620]/95 via-[#0f1620]/75 to-[#0f1620]/30" />
          {/* Bottom fade */}
          <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#0f1620]/20 to-transparent" />
        </div>

        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
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
                <span className="bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent">
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
                  className="inline-flex items-center justify-center gap-2 bg-red-600 hover:bg-red-500 text-white font-bold text-lg px-8 py-4 rounded-xl transition-all shadow-lg shadow-red-600/40 hover:shadow-red-500/50 hover:-translate-y-0.5"
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
                <div className="bg-gradient-to-r from-red-700/90 to-orange-600/80 backdrop-blur-sm px-6 py-5">
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
                    <p className="text-4xl font-extrabold text-sky-400">24/7</p>
                    <p className="text-slate-300 text-sm mt-1">Emergency<br />Service</p>
                  </div>
                  <div className="px-6 py-5 text-center">
                    <p className="text-4xl font-extrabold text-orange-400">100%</p>
                    <p className="text-slate-300 text-sm mt-1">Satisfaction<br />Guaranteed</p>
                  </div>
                </div>
                {/* CTA */}
                <div className="px-6 py-5">
                  <a
                    href="tel:8132916146"
                    className="flex items-center justify-center gap-3 w-full bg-red-600 hover:bg-red-500 text-white font-extrabold text-xl py-4 rounded-xl transition-colors shadow-lg shadow-red-600/30"
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

      {/* ── PHOTO STRIP ── */}
      <section className="py-12" style={{ background: 'var(--bg)' }} aria-hidden="true">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {[
              { id: '4489794', alt: 'HVAC technician servicing AC unit in Tampa Bay home' },
              { id: '3807517', alt: 'New air conditioning system installation in Florida' },
              { id: '8486944', alt: 'Air duct repair and cleaning service Tampa Bay' },
              { id: '3807719', alt: 'Water heater repair service by North East Heating and Cooling' },
            ].map((photo, i) => (
              <div key={i} className="relative rounded-xl overflow-hidden aspect-[4/3]">
                <img
                  src={`https://images.pexels.com/photos/${photo.id}/pexels-photo-${photo.id}.jpeg?auto=compress&cs=tinysrgb&w=600`}
                  alt={photo.alt}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHY CHOOSE US ── */}
      <section className="py-24" style={{ background: 'var(--surface)' }} aria-label="Why Choose Us">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Section label + heading */}
          <div className="text-center mb-16">
            <p className="text-sm font-bold uppercase tracking-widest mb-3" style={{ color: 'var(--accent-light)' }}>
              Why Choose Us
            </p>
            <h2 className="text-3xl sm:text-4xl font-extrabold mb-4" style={{ color: 'var(--text)' }}>
              Tampa Bay&apos;s Most Trusted HVAC Team
            </h2>
            <p className="text-lg max-w-2xl mx-auto" style={{ color: 'var(--muted)' }}>
              From quick repairs to full system replacements — 5-star service, every time.
            </p>
          </div>

          {/* Photo + features split */}
          <div className="grid lg:grid-cols-5 gap-8 items-start">

            {/* Owner photo column */}
            <div className="lg:col-span-2">
              <div className="relative rounded-2xl overflow-hidden" style={{ aspectRatio: '4/5' }}>
                <Image
                  src="/unnamed.jpg"
                  alt="Chris Grullon, Owner of North East Heating & Cooling, Tampa Bay FL"
                  fill
                  className="object-cover object-top"
                  sizes="(max-width: 1024px) 100vw, 40vw"
                />
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                {/* Caption */}
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <div className="flex items-center gap-0.5 mb-2">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <svg key={i} className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                      </svg>
                    ))}
                    <span className="text-white text-sm font-semibold ml-1.5">35 Google Reviews</span>
                  </div>
                  <p className="text-white font-bold text-lg leading-tight">Chris Grullon</p>
                  <p className="text-white/70 text-sm">Owner &amp; Founder</p>
                </div>
              </div>
            </div>

            {/* Features grid */}
            <div className="lg:col-span-3 grid sm:grid-cols-2 gap-4">
              {[
                {
                  icon: (
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="1.75" viewBox="0 0 24 24" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"/>
                    </svg>
                  ),
                  title: '10+ Years Experience',
                  desc: 'Over a decade serving Tampa Bay homeowners and businesses with expert HVAC care.',
                },
                {
                  icon: (
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="1.75" viewBox="0 0 24 24" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z"/>
                    </svg>
                  ),
                  title: 'Licensed & Insured',
                  desc: 'Fully licensed, NATE-certified, and insured in Florida — your home is protected.',
                },
                {
                  icon: (
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="1.75" viewBox="0 0 24 24" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z"/>
                    </svg>
                  ),
                  title: '5.0 Stars on Google',
                  desc: '35 five-star reviews from real Tampa Bay customers — every single one.',
                },
                {
                  icon: (
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="1.75" viewBox="0 0 24 24" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 6Z"/>
                    </svg>
                  ),
                  title: '24/7 Emergency Service',
                  desc: 'AC failures don\'t wait for business hours. Neither do we — call anytime.',
                },
                {
                  icon: (
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="1.75" viewBox="0 0 24 24" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 3.741-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5"/>
                    </svg>
                  ),
                  title: 'NATE-Certified Technicians',
                  desc: 'Our techs hold the HVAC industry\'s highest certification — not just a license.',
                },
                {
                  icon: (
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="1.75" viewBox="0 0 24 24" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 18.75h-9m9 0a3 3 0 0 1 3 3h-15a3 3 0 0 1 3-3m9 0v-3.375c0-.621-.503-1.125-1.125-1.125h-.871M7.5 18.75v-3.375c0-.621.504-1.125 1.125-1.125h.872m5.007 0H9.497m5.007 0a7.454 7.454 0 0 1-.982-3.172M9.497 14.25a7.454 7.454 0 0 0 .981-3.172M5.25 4.236c-.982.143-1.954.317-2.916.52A6.003 6.003 0 0 0 7.73 9.728M5.25 4.236V4.5c0 2.108.966 3.99 2.48 5.228M5.25 4.236V2.721C7.456 2.41 9.71 2.25 12 2.25c2.291 0 4.545.16 6.75.47v1.516M7.73 9.728a6.726 6.726 0 0 0 2.748 1.35m8.272-6.842V4.5c0 2.108-.966 3.99-2.48 5.228m2.48-5.492a46.32 46.32 0 0 1 2.916.52 6.003 6.003 0 0 1-5.395 4.972m0 0a6.726 6.726 0 0 1-2.749 1.35m0 0a6.772 6.772 0 0 1-3.044 0"/>
                    </svg>
                  ),
                  title: 'Lifetime Workmanship Warranty',
                  desc: 'We stand behind every repair and install — if it fails due to our work, we fix it.',
                },
                {
                  icon: (
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="1.75" viewBox="0 0 24 24" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9.568 3H5.25A2.25 2.25 0 0 0 3 5.25v4.318c0 .597.237 1.17.659 1.591l9.581 9.581c.699.699 1.78.872 2.607.33a18.095 18.095 0 0 0 5.223-5.223c.542-.827.369-1.908-.33-2.607L11.16 3.66A2.25 2.25 0 0 0 9.568 3Z"/>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M6 6h.008v.008H6V6Z"/>
                    </svg>
                  ),
                  title: 'Fair, Upfront Pricing',
                  desc: 'No surprise charges. We give you a clear quote before any wrench is turned.',
                },
                {
                  icon: (
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="1.75" viewBox="0 0 24 24" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"/>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"/>
                    </svg>
                  ),
                  title: 'Locally Owned & Operated',
                  desc: 'Born and raised in Tampa Bay — we\'re your neighbors, not a national chain.',
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className="flex gap-4 p-5 rounded-xl"
                  style={{ background: 'var(--surface-2)', border: '1px solid var(--border)' }}
                >
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0"
                    style={{ background: 'rgba(200,51,10,0.15)', color: 'var(--accent-light)' }}
                  >
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="font-bold text-sm mb-1" style={{ color: 'var(--text)' }}>{item.title}</h3>
                    <p className="text-sm leading-relaxed" style={{ color: 'var(--muted)' }}>{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </div>
      </section>

      {/* ── SERVICES OVERVIEW ── */}
      <section className="py-24" style={{ background: 'var(--bg)' }} aria-label="Our Services">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Header */}
          <div className="text-center mb-16">
            <p className="text-sm font-bold uppercase tracking-widest mb-3" style={{ color: 'var(--accent-light)' }}>
              What We Do
            </p>
            <h2 className="text-3xl sm:text-4xl font-extrabold mb-4" style={{ color: 'var(--text)' }}>
              Complete HVAC Services for Tampa Bay
            </h2>
            <p className="text-lg max-w-2xl mx-auto" style={{ color: 'var(--muted)' }}>
              From emergency repairs to full system replacements, we handle all your heating, cooling, and air quality needs.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {services.map((cat) => {
              const isResidential = cat.category === 'Residential'
              return (
                <div
                  key={cat.category}
                  className="rounded-2xl overflow-hidden"
                  style={{ background: 'var(--surface)', border: '1px solid var(--border)' }}
                >
                  {/* Card header with accent bar */}
                  <div
                    className="px-7 py-5 flex items-center gap-3"
                    style={{
                      background: isResidential
                        ? 'linear-gradient(90deg, #C8330A 0%, #9a2508 100%)'
                        : 'linear-gradient(90deg, #1c1f2e 0%, #252840 100%)',
                      borderBottom: '1px solid var(--border)',
                    }}
                  >
                    <div className="w-9 h-9 rounded-lg bg-white/15 flex items-center justify-center shrink-0">
                      {isResidential ? (
                        <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" strokeWidth="1.75" viewBox="0 0 24 24" aria-hidden="true">
                          <path strokeLinecap="round" strokeLinejoin="round" d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"/>
                        </svg>
                      ) : (
                        <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" strokeWidth="1.75" viewBox="0 0 24 24" aria-hidden="true">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h1.5m-1.5 3h1.5m-1.5 3h1.5m3-6H15m-1.5 3H15m-1.5 3H15M9 21v-3.375c0-.621.504-1.125 1.125-1.125h3.75c.621 0 1.125.504 1.125 1.125V21"/>
                        </svg>
                      )}
                    </div>
                    <h3 className="text-lg font-bold text-white">{cat.category} HVAC Services</h3>
                  </div>

                  {/* Service list */}
                  <div className="p-7">
                    <ul className="space-y-1">
                      {cat.items.map((item) => (
                        <li key={item.name}>
                          <Link
                            href={item.href}
                            className="flex items-start gap-3 group py-2.5 rounded-lg px-3 -mx-3 transition-colors hover:bg-[var(--surface-2)]"
                            style={{ color: 'var(--text)' }}
                          >
                            <svg
                              className="w-4 h-4 shrink-0 mt-0.5 transition-transform group-hover:translate-x-0.5"
                              style={{ color: 'var(--accent-light)' }}
                              fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24" aria-hidden="true"
                            >
                              <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5"/>
                            </svg>
                            <div>
                              <span className="font-semibold text-sm" style={{ color: 'var(--text)' }}>{item.name}</span>
                              <p className="text-xs mt-0.5" style={{ color: 'var(--muted)' }}>{item.desc}</p>
                            </div>
                          </Link>
                        </li>
                      ))}
                    </ul>
                    <div className="mt-5 pt-5" style={{ borderTop: '1px solid var(--border)' }}>
                      <Link
                        href={`/${cat.category.toLowerCase()}`}
                        className="inline-flex items-center gap-1.5 text-sm font-bold transition-colors"
                        style={{ color: 'var(--accent-light)' }}
                      >
                        View all {cat.category} services
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24" aria-hidden="true">
                          <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5"/>
                        </svg>
                      </Link>
                    </div>
                  </div>
                </div>
              )
            })}
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
      <section className="py-20 bg-[#0f1620]" aria-label="Customer Testimonials">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">What Our Customers Are Saying</h2>
            <p className="text-blue-200 text-lg">
              <span className="text-yellow-400 font-bold">★★★★★</span> 5.0 Average Rating · 35 Google Reviews
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((t, i) => (
              <div key={i} className="bg-white/10 backdrop-blur border border-white/20 rounded-2xl p-8 flex flex-col">
                <div className="flex items-center gap-1 mb-4">
                  {Array.from({ length: t.rating }).map((_, s) => (
                    <svg key={s} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                    </svg>
                  ))}
                </div>
                <blockquote className="text-blue-50 leading-relaxed mb-6 text-[15px] flex-1">
                  &ldquo;{t.text}&rdquo;
                </blockquote>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-sm shrink-0">
                    {t.name.charAt(0)}
                  </div>
                  <div>
                    <p className="font-semibold text-white">{t.name}</p>
                    <p className="text-blue-300 text-sm flex items-center gap-1">
                      <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" aria-hidden="true"><path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/><path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/><path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z"/><path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/></svg>
                      Google Review
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* See all reviews CTA */}
          <div className="mt-12 text-center">
            <Link
              href="/reviews"
              className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 border border-white/30 text-white font-semibold px-8 py-3.5 rounded-full transition-colors text-sm"
            >
              <svg className="w-4 h-4" viewBox="0 0 24 24" aria-hidden="true"><path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/><path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/><path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z"/><path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/></svg>
              Read All 35 Google Reviews
            </Link>
          </div>
        </div>
      </section>

      {/* ── OWNER QUOTE ── */}
      <section className="py-16 bg-white" aria-label="A message from our owner">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-center gap-8 bg-blue-50 rounded-2xl p-8 border border-blue-100">
            <div className="relative w-28 h-28 shrink-0 rounded-full overflow-hidden shadow-lg border-4 border-white">
              <Image
                src="/unnamed.jpg"
                alt="Chris Grullon, Owner of North East Heating & Cooling"
                fill
                className="object-cover object-top"
                sizes="112px"
              />
            </div>
            <div>
              <p className="text-blue-600 font-semibold text-xs uppercase tracking-widest mb-1">From Our Owner</p>
              <blockquote className="text-gray-800 text-lg font-medium leading-relaxed mb-3 italic">
                &ldquo;When you call North East Heating &amp; Cooling, you&apos;re calling a team that truly cares about your home and your comfort. We show up on time, tell you the truth about your system, and fix it right the first time — every time.&rdquo;
              </blockquote>
              <p className="text-gray-700 font-bold">Chris Grullon</p>
              <p className="text-gray-500 text-sm">Owner &amp; Founder, North East Heating &amp; Cooling</p>
            </div>
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
              <QuoteForm />
            </div>
          </div>
        </div>
      </section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            mainEntity: faqs.map((faq) => ({
              '@type': 'Question',
              name: faq.q,
              acceptedAnswer: {
                '@type': 'Answer',
                text: faq.a,
              },
            })),
          }),
        }}
      />
    </main>
  )
}
