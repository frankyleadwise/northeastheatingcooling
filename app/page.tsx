import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import QuoteForm from '@/app/components/QuoteForm'
import FinancingCTA from '@/components/FinancingCTA'
import { FanGrille, AirflowLines, PressureGauge } from '@/app/components/HvacMotifs'

export const metadata: Metadata = {
  title: 'AC Repair Near Me Tampa | North East Heating And Cooling',
  description: 'Looking for AC repair near me in Tampa? North East Heating And Cooling delivers same-day air conditioner repair, AC installation & HVAC maintenance across Tampa Bay. Licensed, insured, 5.0★ rated. Call (813) 291-6146.',
  keywords: [
    'ac repair near me',
    'air conditioner repair near me',
    'ac repair tampa',
    'hvac near me',
    'hvac repair tampa',
    'ac installation tampa',
    'ac replacement tampa',
    'ac maintenance tampa',
    'air conditioning service tampa',
    'hvac contractor tampa',
    'emergency ac repair tampa',
    'hvac company tampa',
  ],
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'AC Repair Near Me — Tampa Bay HVAC Experts | North East Heating And Cooling',
    description: 'Same-day AC repair across Tampa Bay. Licensed, insured, 5.0★ on Google. Call (813) 291-6146 for a free consultation.',
    url: '/',
    type: 'website',
  },
}

const services = [
  {
    category: 'Residential',
    color: 'blue',
    items: [
      { name: 'AC Repair & HVAC Repair', href: '/residential/hvac-service-tampa', desc: 'Same-day AC and heating diagnostics & repair' },
      { name: 'AC Installation & Replacement', href: '/residential/hvac-installation-tampa-fl', desc: 'New system installs with lifetime warranty' },
      { name: 'AC Maintenance & Tune-Ups', href: '/residential/ac-maintenance-tampa', desc: 'Twice-yearly maintenance plans, 20-point inspections' },
      { name: 'Heat Pump Installation & Repair', href: '/residential/heat-pump-tampa', desc: 'Variable-speed systems built for Florida' },
      { name: 'Ductless Mini-Split', href: '/residential/ductless-mini-split-tampa', desc: 'Single-zone or whole-home multi-zone systems' },
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
    location: 'Local Guide · 8 reviews',
    rating: 5,
    ago: '2 weeks ago',
  },
  {
    text: "My ac unit stopped working on a Saturday morning and I called to schedule an appointment. I was so happy that Christian was able to fix my ac unit the same day! Very knowledgeable and professional. He answered all my questions and made sure I understood everything. I would highly recommend this company!",
    name: 'Brandon Garrett',
    location: '7 reviews',
    rating: 5,
    ago: '1 month ago',
  },
  {
    text: "I recently hired North East Heating And Cooling for my annual AC tune-up, along with adding vents in two doorways and a return. From start to finish, their work was outstanding. They even removed all of our existing A/C vents, repainted them white, and made them look brand new. Their workmanship was timely, their pricing fair, and the quality exceptional. I'm thrilled with the results and will absolutely use them again for future needs. Thank you!",
    name: 'Robert Cowart',
    location: 'Local Guide · 24 reviews · 1 photo',
    rating: 5,
    ago: '3 months ago',
  },
  {
    text: "Christian did an amazing job!!! We were not happy that our AC went down in the middle of summer but he was professional, kind and got us back up and running right away. We appreciate everything Christian did and he was super informative. Definitely recommend to all our friends!!",
    name: 'Lupe and Micha',
    location: '8 reviews · 5 photos',
    rating: 5,
    ago: '2 months ago',
  },
  {
    text: "When your a/c is out you want Chris to come out to fix it. He is thorough and skilled. He discovered the problem and checked the whole system to make sure that there was not a secondary problem. My a/c is fixed and cool air is flowing again. Chris' charges were completely reasonable. He offers an annual maintenance contract which I signed up for because after meeting him there's no one I would find who could do a better job. Thank you, CHRIS!",
    name: 'Mary Hampton',
    location: 'Local Guide · 24 reviews',
    rating: 5,
    ago: '4 months ago',
  },
  {
    text: "We are so happy that Christian was highly recommended to us. Our upstairs unit shut down. One well-known company charged us $300 to research the problem and was to return to complete the job. Christian found a dead lizard had burned out wires that only needed replacement. He replaced the wiring. A new $7,000 unit was not required. His integrity, honesty, professionalism, and patience amazed us. We called a well known Plumber to fix an outdoor faucet that had rusted out, a highly rated company gave us a $600.00 estimate — Christian offered to come by at no charge to inspect it and fixed the problem at 1/3 the cost. Seniors risk being ripped off by these companies. This one is the ABSOLUTE VERY BEST!",
    name: 'Rose Jackson',
    location: 'Local Guide · 48 reviews · 69 photos',
    rating: 5,
    ago: '6 months ago',
  },
]

const faqs = [
  {
    q: 'Where can I find AC repair near me in Tampa Bay?',
    a: 'North East Heating And Cooling is a locally owned, Tampa-based HVAC company serving the entire Tampa Bay area — including Tampa, St. Petersburg, Clearwater, Brandon, Riverview, Valrico, Plant City, Carrollwood, Lutz, Wesley Chapel, and surrounding communities. We offer same-day AC repair across our service area. Call (813) 291-6146 or request a free consultation online and we\'ll dispatch a technician — usually the same day.',
  },
  {
    q: 'How much does AC repair cost in Tampa?',
    a: 'Most AC repairs in the Tampa Bay area fall between $150 and $650, with capacitor and contactor replacements on the lower end and refrigerant leaks, blower motors, or compressor work on the higher end. A standard diagnostic service call runs $75–$150, which we apply toward the repair if you proceed. We give you a flat, written quote before any work begins — no surprise charges, ever. Call (813) 291-6146 for a free estimate.',
  },
  {
    q: 'How fast can you get to me for emergency AC repair?',
    a: 'For emergency calls in our core Tampa service area (Tampa, St. Pete, Clearwater, Brandon, Riverview, Valrico), we can usually be at your home within 2–4 hours during business hours and same-day overnight for true emergencies. Our owner Chris answers emergency calls personally — you talk to a technician, not a dispatch queue. Call (813) 291-6146 anytime.',
  },
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
    a: 'Yes. North East Heating And Cooling is fully licensed, certified, and insured in the state of Florida. Our technicians are EPA 608 certified and Florida-licensed.',
  },
  {
    q: 'What is the $5,000 rule for HVAC?',
    a: 'The $5,000 rule helps you decide whether to repair or replace your system. Multiply your unit\'s age by the estimated repair cost — if the number exceeds $5,000, replacement is usually the smarter investment. In Florida\'s climate, where systems run nearly year-round, wear accumulates faster than in northern states, making this rule especially useful for Tampa Bay homeowners.',
  },
  {
    q: 'Which AC brand lasts the longest?',
    a: 'Trane, Carrier, and Lennox consistently rank as the longest-lasting AC brands, with well-maintained units often reaching 15–20 years. That said, brand matters less than installation quality and regular maintenance. At North East Heating And Cooling, we service all major brands and will always give you an honest assessment of whether repair or replacement makes more sense.',
  },
  {
    q: 'How much should an HVAC service call cost?',
    a: 'In the Tampa Bay area, a standard HVAC service call typically runs between $75 and $150, covering the diagnostic visit. Repair costs are separate and depend on what\'s found. At North East Heating And Cooling, we charge straightforward, upfront pricing with no surprises. Call us at (813) 291-6146 to get a clear estimate before any work begins.',
  },
  {
    q: 'What is the most common HVAC problem?',
    a: 'The most common HVAC issue in Florida is a dirty or clogged air filter, which restricts airflow and causes the system to work harder — leading to frozen coils, poor cooling, and higher energy bills. Refrigerant leaks, capacitor failures, and clogged condensate drain lines are also extremely common in Tampa Bay\'s humid climate. Most of these issues are preventable with twice-yearly maintenance.',
  },
  {
    q: 'What is the average life expectancy of an HVAC system?',
    a: 'Most HVAC systems last 15 to 20 years under normal conditions, but in Florida that number is often closer to 12 to 15 years. The combination of heat, humidity, and near-constant use puts significantly more wear on equipment here than in cooler climates. Regular maintenance is the single best way to maximize your system\'s lifespan.',
  },
  {
    q: 'What is the most expensive part of an HVAC system?',
    a: 'The compressor is the most expensive component — essentially the heart of your AC system — and replacement can run $1,500 to $2,500 or more. If your compressor fails and your system is more than 10 years old, replacing the full unit is often more cost-effective. We\'ll always walk you through both options honestly so you can make the best decision for your budget.',
  },
  {
    q: 'Heat pump vs. AC in Florida — which is better?',
    a: 'For most of Tampa Bay, a heat pump is the smarter choice. Florida\'s mild winters make heat pumps highly efficient year-round, since they handle both cooling in summer and heating in winter from one system — no separate furnace needed. Traditional split AC systems still make sense in homes with existing gas furnaces, but for new installs or full system replacements, a modern variable-speed heat pump usually wins on energy bills, comfort, and equipment life. We\'ll size and quote both options so you can compare honestly.',
  },
  {
    q: 'Ductless mini-split vs. central AC — which should I choose?',
    a: 'Central AC is the right call when your home already has good ductwork — it cools the whole house evenly with one system. Ductless mini-splits shine in additions, garages, sunrooms, older Florida homes without ducts, or anywhere you want zone control (cooling only the rooms you\'re using). Mini-splits also tend to be more energy-efficient per zone since you\'re not pushing cold air through leaky ducts in the attic. We install both. Call us and we\'ll walk through which makes sense for your specific home.',
  },
  {
    q: 'When should I replace my AC unit instead of repairing it?',
    a: 'Three signals tell us it\'s time to replace rather than repair: (1) the system is over 10–12 years old and starting to need recurring repairs, (2) the repair cost multiplied by the unit\'s age exceeds $5,000 (the $5,000 rule), or (3) your energy bills have been climbing year-over-year despite no change in usage. In Florida\'s climate, systems work harder than the national average, so the 12–15 year mark is often the right window. We\'ll always give you both options — repair cost vs. replacement quote — so you can decide with full information.',
  },
  {
    q: 'Why is my AC running but not cooling?',
    a: 'The most common causes in Tampa Bay homes are: a frozen evaporator coil (usually from a dirty filter or low refrigerant), a tripped or failing capacitor, a clogged condensate drain line shutting the system off, low refrigerant from a slow leak, or a failing compressor. Some of these you can troubleshoot yourself (replace the filter, check the breaker, look for ice on the lines). For the rest, give us a call — most of these are quick same-day fixes.',
  },
  {
    q: 'How long does an AC last in Florida?',
    a: 'In Florida\'s climate, expect a typical AC system to last 12–15 years rather than the national average of 15–20. The combination of year-round use, salt air near the coast, humidity, and heat all accelerate wear on coils, compressors, and electrical components. Routine maintenance — twice-yearly tune-ups, regular filter changes, keeping the outdoor unit clear — can push your system to the upper end of that range. Skip maintenance and you\'re often looking at 8–10 years.',
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
      <section
        className="relative overflow-hidden pt-28 pb-14 sm:pt-36 sm:pb-20"
        style={{ background: 'linear-gradient(180deg,#fff6f1 0%,#fdfbfa 55%,#ffffff 100%)' }}
        aria-label="Tampa Bay AC repair and HVAC services"
      >
        <div
          className="absolute -top-32 -right-24 w-[34rem] h-[34rem] rounded-full blur-3xl pointer-events-none"
          style={{ background: '#C8330A', opacity: 0.07 }}
          aria-hidden="true"
        />
        <div className="absolute -top-20 -right-12 w-[24rem] h-[24rem] pointer-events-none" aria-hidden="true">
          <FanGrille className="w-full h-full text-[#C8330A] opacity-[0.07] hvac-spin" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

            {/* Copy */}
            <div>
              <p className="inline-flex items-center gap-2 text-[0.72rem] font-bold tracking-[0.16em] uppercase px-4 py-1.5 rounded-full mb-6 text-[#C8330A] bg-[#C8330A]/10 border border-[#C8330A]/15">
                Tampa Bay&apos;s 5-Star HVAC Company
              </p>

              <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl font-extrabold tracking-[-0.03em] leading-[0.95] text-slate-900 mb-6">
                Cool air,
                <br />
                <span className="text-[#C8330A]">done right.</span>
              </h1>

              <p className="text-lg leading-relaxed max-w-xl mb-8 text-slate-600">
                Same-day AC repair, installation, and maintenance across Tampa Bay —
                honest flat-rate pricing, licensed and insured technicians, and 39
                five-star Google reviews from your neighbors. When the Florida heat
                hits, we show up and fix it right the first time.
              </p>

              <div className="flex flex-col sm:flex-row sm:items-center gap-3 mb-8">
                <a
                  href="tel:8132916146"
                  className="group inline-flex items-center justify-center gap-2.5 px-7 py-4 text-base font-bold text-white rounded-full bg-[#C8330A] hover:bg-[#b02c08] shadow-lg shadow-[#C8330A]/30 transition-all duration-300 ease-[cubic-bezier(0.32,0.72,0,1)] active:scale-[0.98]"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/></svg>
                  Call (813) 291-6146
                </a>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 px-7 py-4 text-base font-semibold rounded-full text-slate-800 bg-white border border-slate-300 hover:border-slate-400 hover:bg-slate-50 transition-colors"
                >
                  Book Same-Day Service
                </Link>
              </div>

              {/* Trust row */}
              <div className="flex flex-wrap items-center gap-x-5 gap-y-3 text-sm">
                <span className="flex items-center gap-1.5">
                  <span className="flex items-center gap-0.5">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <svg key={i} className="w-4 h-4 text-amber-400" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>
                    ))}
                  </span>
                  <span className="font-bold text-slate-900">5.0</span>
                  <span className="text-slate-500">&middot; 39 reviews</span>
                </span>
                {['Licensed & insured', 'Same-day service', 'Locally owned'].map((t) => (
                  <span key={t} className="flex items-center gap-1.5 text-slate-600 font-medium">
                    <svg className="w-4 h-4 text-emerald-600 shrink-0" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M20 6 9 17l-5-5"/></svg>
                    {t}
                  </span>
                ))}
              </div>
            </div>

            {/* Image */}
            <div className="relative">
              <div className="rounded-[2rem] bg-white/70 ring-1 ring-black/5 p-2 shadow-[0_40px_80px_-30px_rgba(200,51,10,0.3)]">
                <div className="relative rounded-[calc(2rem-0.5rem)] overflow-hidden aspect-[4/3]">
                  <Image
                    src="/home-hero-family.jpg"
                    alt="A happy Tampa Bay family relaxing comfortably at home"
                    fill
                    priority
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                </div>
              </div>
              <div className="hidden sm:flex items-center gap-2.5 absolute -bottom-4 -left-4 bg-white rounded-2xl shadow-xl ring-1 ring-black/5 pl-3.5 pr-4 py-3">
                <span className="flex items-center gap-0.5">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <svg key={i} className="w-4 h-4 text-amber-400" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>
                  ))}
                </span>
                <span className="text-sm font-semibold text-slate-800">5.0 &middot; 39 Google reviews</span>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── PROBLEM AGITATION ── */}
      <section className="py-20 bg-white" aria-label="The problem we solve">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Split head */}
          <div className="grid lg:grid-cols-12 gap-6 lg:gap-10 items-end mb-12">
            <div className="lg:col-span-7">
              <p className="inline-flex items-center gap-2.5 text-[0.72rem] font-bold tracking-[0.18em] uppercase mb-4 text-[#C8330A]">
                <span className="w-7 h-px bg-[#C8330A]/40" aria-hidden="true" />Sound familiar?
              </p>
              <h2 className="font-display text-4xl sm:text-5xl font-extrabold tracking-[-0.03em] leading-[1.02] text-slate-900">
                Most Tampa homeowners have been <span className="text-[#C8330A]">burned</span> by their HVAC company
              </h2>
            </div>
            <p className="lg:col-span-5 text-slate-600 text-lg leading-relaxed lg:pb-1">
              You call, you wait three days, a stranger shows up, quotes you $4,000, and disappears. Meanwhile it&apos;s 94° in your living room and your family is miserable. That&apos;s not how it should work — and it&apos;s not how we work.
            </p>
          </div>

          {/* Pain points — full-width row */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
                {[
                  { icon: <path strokeLinecap="round" strokeLinejoin="round" d="M12 7v5l3 2M12 21a9 9 0 100-18 9 9 0 000 18z" />, text: 'Waiting days for a tech while your home turns into a sauna' },
                  { icon: <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v18m4-13.5c0-1.66-1.79-3-4-3s-4 1.34-4 3 1.79 3 4 3 4 1.34 4 3-1.79 3-4 3-4-1.34-4-3" />, text: 'Getting hit with a $300 diagnostic fee before a single bolt is turned' },
                  { icon: <path strokeLinecap="round" strokeLinejoin="round" d="M9 4H7a2 2 0 00-2 2v13a2 2 0 002 2h10a2 2 0 002-2V6a2 2 0 00-2-2h-2M9 4a1 1 0 011-1h4a1 1 0 011 1v1a1 1 0 01-1 1h-4a1 1 0 01-1-1V4zM9 12h6m-6 4h4" />, text: 'Quoted $7,000 for a new unit — when a $200 repair was all it needed' },
                  { icon: <path strokeLinecap="round" strokeLinejoin="round" d="M3 5.5C3 4.67 3.67 4 4.5 4H8l2 5-2.5 1.5a11 11 0 005 5L14 13l5 2v3.5c0 .83-.67 1.5-1.5 1.5A14.5 14.5 0 013 5.5z" />, text: 'Calling a "24/7" line and waiting until Monday anyway' },
                  { icon: <path strokeLinecap="round" strokeLinejoin="round" d="M11.5 6.5a3.5 3.5 0 00-4.95 4.95L3 15v3h3l3.55-3.55a3.5 3.5 0 004.95-4.95l-2.12 2.12-1.83-1.83 2.12-2.12z" />, text: 'A different technician every visit who doesn\'t know your system' },
                ].map((item, i) => (
                  <div key={i} className="flex flex-col gap-3.5 p-5 rounded-xl bg-red-50 border border-red-100">
                    <span className="w-10 h-10 rounded-lg bg-red-100 flex items-center justify-center shrink-0">
                      <svg className="w-5 h-5 text-[#C8330A]" fill="none" stroke="currentColor" strokeWidth={1.75} viewBox="0 0 24 24">{item.icon}</svg>
                    </span>
                    <p className="text-gray-700 font-medium text-sm leading-relaxed">{item.text}</p>
                  </div>
                ))}
          </div>

          <p className="text-slate-400 text-sm italic mt-8 max-w-3xl">We&apos;ve heard these stories from hundreds of Tampa Bay families. It&apos;s why Chris started North East Heating And Cooling.</p>
        </div>
      </section>

      {/* ── OWNER / MENTOR ── */}
      <section className="py-16 bg-slate-50" aria-label="Meet Chris">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center gap-10 md:gap-14 bg-white rounded-2xl p-8 md:p-12 border border-gray-100 shadow-sm">
            <div className="relative w-40 h-40 md:w-48 md:h-48 shrink-0 rounded-full overflow-hidden shadow-lg border-4 border-white ring-2 ring-red-100">
              <Image
                src="/chris-owner-square.jpg"
                alt="Chris Grullon, Owner of North East Heating And Cooling"
                fill
                className="object-cover object-top"
                sizes="192px"
              />
            </div>
            <div className="max-w-3xl text-center md:text-left">
              <p className="text-red-600 font-semibold text-xs uppercase tracking-widest mb-2">Your HVAC expert &amp; neighbor</p>
              <blockquote className="text-gray-800 text-xl md:text-2xl font-medium leading-relaxed mb-4">
                &ldquo;I started this company because I was tired of seeing Tampa homeowners get overcharged and under-served by big HVAC companies. When you call me, I&apos;m the one who shows up, does the work, and stands behind it — personally. No dispatch centers, no rotating crews. Just honest service from someone who actually cares.&rdquo;
              </blockquote>
              <p className="text-gray-900 font-bold">Chris Grullon</p>
              <p className="text-gray-500 text-sm">Owner &amp; Founder · 16 years HVAC experience · Tampa Bay native</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── WHY CHOOSE US ── */}
      <section className="relative py-24 overflow-hidden" aria-label="Why Choose Us">
        {/* Van/truck photo as full background */}
        <div className="absolute inset-0">
          <Image
            src="/image.png"
            alt="North East Heating And Cooling service van in Tampa Bay"
            fill
            className="object-cover object-center"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-[#0f1620]/80" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Section label + heading */}
          <div className="text-center mb-16">
            <p className="inline-flex items-center gap-2.5 text-[0.72rem] font-bold tracking-[0.18em] uppercase mb-4 text-[#F0A06A]">
              <span className="w-7 h-px bg-[#F0A06A]/40" aria-hidden="true" />Why Choose Us<span className="w-7 h-px bg-[#F0A06A]/40" aria-hidden="true" />
            </p>
            <h2 className="font-display text-4xl sm:text-5xl font-extrabold tracking-[-0.03em] leading-[1.02] mb-4 text-white">
              Tampa Bay&apos;s Most <span className="text-[#F47438]">Trusted</span> HVAC Team
            </h2>
            <p className="text-lg max-w-2xl mx-auto text-slate-300">
              From quick repairs to full system replacements — 5-star service, every time.
            </p>
          </div>

          {/* Features grid — full width now */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
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
                  desc: 'Fully licensed, certified, and insured in Florida — your home is protected.',
                },
                {
                  icon: (
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="1.75" viewBox="0 0 24 24" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z"/>
                    </svg>
                  ),
                  title: '5.0 Stars on Google',
                  desc: '39 five-star reviews from real Tampa Bay customers — every single one.',
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
                  title: 'Certified & Licensed Technicians',
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
                  className="flex gap-4 p-5 rounded-xl bg-white/10 backdrop-blur-sm border border-white/15"
                >
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0 bg-orange-500/20 text-orange-400">
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="font-bold text-sm mb-1 text-white">{item.title}</h3>
                    <p className="text-sm leading-relaxed text-slate-300">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

        </div>
      </section>

      {/* ── SERVICES OVERVIEW ── */}
      <section className="relative py-24 overflow-hidden" style={{ background: 'var(--bg)' }} aria-label="Our Services">
        <div className="absolute -right-28 top-1/2 -translate-y-1/2 w-[34rem] h-[34rem] pointer-events-none" aria-hidden="true">
          <FanGrille className="w-full h-full text-[#E85A2A] opacity-[0.05] hvac-spin" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Header */}
          <div className="grid lg:grid-cols-12 gap-6 lg:gap-10 items-end mb-16">
            <div className="lg:col-span-7">
              <p className="inline-flex items-center gap-2.5 text-[0.72rem] font-bold tracking-[0.18em] uppercase mb-4" style={{ color: 'var(--accent-light)' }}>
                <span className="w-7 h-px" style={{ background: 'var(--accent-light)', opacity: 0.4 }} aria-hidden="true" />What We Do
              </p>
              <h2 className="font-display text-4xl sm:text-5xl font-extrabold tracking-[-0.03em] leading-[1.02]" style={{ color: 'var(--text)' }}>
                Complete HVAC Services for <span style={{ color: 'var(--accent-light)' }}>Tampa Bay</span>
              </h2>
            </div>
            <p className="lg:col-span-5 text-lg leading-relaxed lg:pb-1" style={{ color: 'var(--muted)' }}>
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
      <section className="relative py-20 bg-white overflow-hidden" aria-label="Our Process">
        <div className="absolute -bottom-24 -left-20 w-80 h-80 pointer-events-none" aria-hidden="true">
          <PressureGauge className="w-full h-full text-[#0f1620] opacity-[0.05]" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="inline-flex items-center gap-2.5 text-[0.72rem] font-bold tracking-[0.18em] uppercase mb-4 text-[#C8330A]">
              <span className="w-7 h-px bg-[#C8330A]/40" aria-hidden="true" />How It Works<span className="w-7 h-px bg-[#C8330A]/40" aria-hidden="true" />
            </p>
            <h2 className="font-display text-4xl sm:text-5xl font-extrabold tracking-[-0.03em] leading-[1.02] text-slate-900 mb-4">Our Simple <span className="text-[#C8330A]">3-Step</span> Process</h2>
            <p className="text-lg text-slate-600">Getting your HVAC system back to peak performance is easy.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
            {/* Connecting line on desktop */}
            <div className="hidden md:block absolute top-12 left-1/3 right-1/3 h-0.5 bg-[#C8330A]/20 z-0" />
            {[
              {
                step: '1',
                title: 'Get a Free Consultation',
                desc: 'Call us at (813) 291-6146 or fill out our online form. We\'ll schedule a convenient time and discuss your HVAC needs at no charge.',
              },
              {
                step: '2',
                title: 'Receive a Diagnosis',
                desc: 'Our certified technician arrives on time, thoroughly inspects your system, and provides a clear, upfront quote before any work begins.',
              },
              {
                step: '3',
                title: 'Guaranteed Comfort',
                desc: 'We complete the repair or installation efficiently, test everything, and back our work with a lifetime workmanship warranty. Your comfort is guaranteed.',
              },
            ].map((step) => (
              <div key={step.step} className="relative z-10 text-center">
                <div className="w-24 h-24 bg-[#0f1620] text-white rounded-full flex items-center justify-center font-display text-4xl font-extrabold mx-auto mb-6 shadow-lg ring-4 ring-[#C8330A]/10">
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
      <section className="relative py-20 bg-[#0f1620] overflow-hidden" aria-label="Customer Testimonials">
        <div className="absolute inset-0 pointer-events-none text-[#F0A06A] opacity-[0.08]" aria-hidden="true">
          <AirflowLines className="w-full h-full" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="inline-flex items-center gap-2.5 text-[0.72rem] font-bold tracking-[0.18em] uppercase mb-4 text-[#F0A06A]">
              <span className="w-7 h-px bg-[#F0A06A]/40" aria-hidden="true" />Real Google Reviews<span className="w-7 h-px bg-[#F0A06A]/40" aria-hidden="true" />
            </p>
            <h2 className="font-display text-4xl sm:text-5xl font-extrabold tracking-[-0.03em] leading-[1.02] text-white mb-4">What Our Customers Are <span className="text-[#F47438]">Saying</span></h2>
            <p className="text-slate-300 text-lg">
              <span className="text-amber-400 font-bold">★★★★★</span> 5.0 Average Rating · 39 Google Reviews
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map((t, i) => {
              const AVATAR_COLORS = ['#F44336','#E91E63','#9C27B0','#3F51B5','#2196F3','#009688','#4CAF50','#FF5722','#795548','#607D8B','#E67E22','#673AB7']
              const hash = t.name.split('').reduce((h, c) => c.charCodeAt(0) + ((h << 5) - h), 0)
              const avatarBg = AVATAR_COLORS[Math.abs(hash) % AVATAR_COLORS.length]
              return (
                <div key={i} className="bg-white rounded-2xl p-5 flex flex-col shadow-sm">
                  {/* Header — avatar, name, badge, Google logo */}
                  <div className="flex items-start justify-between gap-3 mb-3">
                    <div className="flex items-center gap-3">
                      <div
                        className="w-10 h-10 rounded-full flex items-center justify-center text-white font-bold text-base shrink-0 select-none"
                        style={{ background: avatarBg }}
                      >
                        {t.name.charAt(0).toUpperCase()}
                      </div>
                      <div>
                        <p className="font-bold text-sm text-gray-900 leading-tight">{t.name}</p>
                        <p className="text-xs text-gray-500 mt-0.5">{t.location}</p>
                      </div>
                    </div>
                    <svg className="w-5 h-5 shrink-0 mt-0.5" viewBox="0 0 24 24" aria-hidden="true"><path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/><path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/><path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z"/><path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/></svg>
                  </div>
                  {/* Stars + timestamp */}
                  <div className="flex items-center gap-2 mb-3">
                    {Array.from({ length: t.rating }).map((_, s) => (
                      <svg key={s} className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                      </svg>
                    ))}
                    <span className="text-xs text-gray-400 ml-1">{t.ago}</span>
                  </div>
                  {/* Review text — no quotes, plain like Google */}
                  <p className="text-sm text-gray-700 leading-relaxed flex-1">{t.text}</p>
                </div>
              )
            })}
          </div>

          {/* See all reviews CTA */}
          <div className="mt-12 text-center">
            <Link
              href="/reviews"
              className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 border border-white/30 text-white font-semibold px-8 py-3.5 rounded-full transition-colors text-sm"
            >
              <svg className="w-4 h-4" viewBox="0 0 24 24" aria-hidden="true"><path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/><path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/><path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z"/><path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/></svg>
              Read All 39 Google Reviews
            </Link>
          </div>
        </div>
      </section>


      {/* ── FLEX: WHY US VS THE BIG GUYS ── */}
      <section className="py-20 bg-white" aria-label="Why North East vs big HVAC companies">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-6 lg:gap-10 items-end mb-12">
            <div className="lg:col-span-7">
              <p className="inline-flex items-center gap-2.5 text-[0.72rem] font-bold tracking-[0.18em] uppercase mb-4 text-[#C8330A]">
                <span className="w-7 h-px bg-[#C8330A]/40" aria-hidden="true" />The honest difference
              </p>
              <h2 className="font-display text-4xl sm:text-5xl font-extrabold tracking-[-0.03em] leading-[1.02] text-slate-900">
                Why Tampa families choose us over the <span className="text-[#C8330A]">big names</span>
              </h2>
            </div>
            <p className="lg:col-span-5 text-slate-500 text-lg leading-relaxed lg:pb-1">
              The big companies have the billboards. We have the 5-star reviews.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { check: true,  text: 'You get the owner — Chris shows up personally, every time' },
              { check: true,  text: 'Upfront pricing before any work begins — zero surprise charges' },
              { check: true,  text: 'Same-day and true 24/7 emergency service — not "call Monday"' },
              { check: true,  text: 'Lifetime workmanship warranty on every repair and install' },
              { check: true,  text: 'We tell you the truth — even if it means a cheaper fix for you' },
              { check: true,  text: 'No commission-hungry sales reps — just honest recommendations' },
              { check: true,  text: 'EPA 608 certified, fully licensed and insured in Florida' },
              { check: true,  text: 'Serving Tampa Bay for 10+ years — we\'re not going anywhere' },
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-3 p-4 rounded-xl border border-gray-100 bg-gray-50">
                <div className="w-6 h-6 rounded-full bg-emerald-100 flex items-center justify-center shrink-0 mt-0.5">
                  <svg className="w-3.5 h-3.5 text-emerald-600" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5"/>
                  </svg>
                </div>
                <p className="text-gray-700 text-sm font-medium leading-relaxed">{item.text}</p>
              </div>
            ))}
          </div>
          <div className="mt-10 text-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 bg-red-600 hover:bg-red-500 text-white font-bold px-8 py-4 rounded-xl transition-all shadow-lg shadow-red-600/30 hover:-translate-y-0.5 text-base"
            >
              Get Your Free Consultation
            </Link>
          </div>
        </div>
      </section>

      {/* ── FEATURES / SPECS ── */}
      <section className="py-20 bg-slate-50" aria-label="What's included">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-6 lg:gap-10 items-end mb-12">
            <div className="lg:col-span-7">
              <p className="inline-flex items-center gap-2.5 text-[0.72rem] font-bold tracking-[0.18em] uppercase mb-4 text-[#C8330A]">
                <span className="w-7 h-px bg-[#C8330A]/40" aria-hidden="true" />Everything included
              </p>
              <h2 className="font-display text-4xl sm:text-5xl font-extrabold tracking-[-0.03em] leading-[1.02] text-slate-900">
                What you get with <span className="text-[#C8330A]">every</span> North East service call
              </h2>
            </div>
            <p className="lg:col-span-5 text-slate-500 text-lg leading-relaxed lg:pb-1">
              No add-ons, no upsells, no fine print. Here&apos;s exactly what&apos;s standard.
            </p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
            {[
              'Free diagnostic estimate',
              'Upfront written quote',
              'Same-day service available',
              'True 24/7 emergency response',
              'All major brands serviced',
              'EPA 608 certified technician',
              'Florida state licensed',
              'Fully insured — your home protected',
              'Lifetime workmanship warranty',
              'No hidden fees or dispatch charges',
              'Honest repair vs replace advice',
              'Clean jobsite — we respect your home',
              'Annual maintenance plans available',
              'Residential &amp; commercial HVAC',
              'AC repair, install &amp; maintenance',
              'Heating &amp; heat pump service',
              'Air duct repair &amp; sealing',
              'Water heater service',
            ].map((feat, i) => (
              <div key={i} className="flex items-center gap-2.5 py-2.5 px-3 rounded-lg bg-white border border-gray-100">
                <svg className="w-4 h-4 text-emerald-500 shrink-0" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5"/>
                </svg>
                <span className="text-gray-700 text-sm font-medium" dangerouslySetInnerHTML={{ __html: feat }} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="py-20 bg-gray-50" aria-label="FAQ">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="inline-flex items-center gap-2.5 text-[0.72rem] font-bold tracking-[0.18em] uppercase mb-4 text-[#C8330A]">
              <span className="w-7 h-px bg-[#C8330A]/40" aria-hidden="true" />Questions<span className="w-7 h-px bg-[#C8330A]/40" aria-hidden="true" />
            </p>
            <h2 className="font-display text-4xl sm:text-5xl font-extrabold tracking-[-0.03em] leading-[1.02] text-slate-900 mb-4">Frequently Asked <span className="text-[#C8330A]">Questions</span></h2>
            <p className="text-slate-600 text-lg">Common questions about HVAC service in Tampa Bay, FL.</p>
          </div>
          <div className="columns-1 lg:columns-2 gap-4 [column-fill:_balance]">
            {faqs.map((faq, i) => (
              <div key={i} className="break-inside-avoid mb-4 bg-white rounded-xl border border-gray-200 overflow-hidden shadow-sm">
                <div className="px-6 py-5">
                  <h3 className="font-bold text-gray-900 flex items-start gap-3">
                    <span className="text-[#C8330A] font-extrabold text-lg flex-shrink-0">Q.</span>
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
            <p className="inline-flex items-center gap-2.5 text-[0.72rem] font-bold tracking-[0.18em] uppercase mb-4 text-[#C8330A]">
              <span className="w-7 h-px bg-[#C8330A]/40" aria-hidden="true" />Where We Work<span className="w-7 h-px bg-[#C8330A]/40" aria-hidden="true" />
            </p>
            <h2 className="font-display text-4xl sm:text-5xl font-extrabold tracking-[-0.03em] leading-[1.02] text-slate-900 mb-4">
              Serving the Entire <span className="text-[#C8330A]">Tampa Bay</span> Area
            </h2>
            <p className="text-slate-600 text-lg max-w-2xl mx-auto">
              From Tampa to Clearwater and everywhere in between, North East Heating And Cooling provides fast, reliable HVAC service across the region.
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
                className="flex items-center gap-2 bg-gray-50 border border-gray-200 rounded-lg px-3 py-2.5 text-sm font-medium text-gray-700 hover:bg-[#C8330A]/5 hover:border-[#C8330A]/30 hover:text-[#C8330A] transition-colors"
              >
                <svg className="w-3.5 h-3.5 text-[#C8330A] flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"/>
                </svg>
                {area}
              </Link>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link href="/service-areas" className="inline-flex items-center gap-2 text-[#C8330A] font-semibold hover:text-[#b02c08]">
              View all service areas
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7"/></svg>
            </Link>
          </div>
        </div>
      </section>

      {/* ── FINANCING BAND ── */}
      <FinancingCTA />

      {/* ── CTA SECTION ── */}
      <section className="relative py-24 overflow-hidden bg-[#0f1620]" aria-label="Call to Action">
        <div className="absolute -top-24 -right-16 w-[30rem] h-[30rem] rounded-full blur-3xl pointer-events-none" style={{ background: '#C8330A', opacity: 0.12 }} aria-hidden="true" />
        <div className="absolute -bottom-28 -left-24 w-[26rem] h-[26rem] pointer-events-none" aria-hidden="true">
          <FanGrille className="w-full h-full text-[#F47438] opacity-[0.06] hvac-spin" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-display text-4xl sm:text-5xl font-extrabold tracking-[-0.03em] leading-[1.02] text-white mb-4">
                HVAC Acting Up? Get Your <span className="text-[#F47438]">Free Consultation</span> Today
              </h2>
              <p className="text-slate-300 text-lg mb-8">
                Don&apos;t suffer in the Florida heat. Our expert technicians are ready to diagnose, repair, or replace your HVAC system — fast.
              </p>
              <a
                href="tel:8132916146"
                className="inline-flex items-center gap-3 bg-[#C8330A] text-white font-bold text-2xl px-8 py-5 rounded-xl hover:bg-[#b02c08] transition-colors shadow-xl shadow-[#C8330A]/30"
              >
                <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
                </svg>
                (813) 291-6146
              </a>
              <p className="text-slate-400 text-sm mt-4">Available 24/7 for emergencies · Free estimates on new systems</p>
            </div>
            <div className="relative bg-white/10 backdrop-blur border border-white/20 rounded-2xl p-8">
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
