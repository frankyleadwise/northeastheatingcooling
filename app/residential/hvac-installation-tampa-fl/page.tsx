import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'AC Installation & HVAC Installation Tampa, FL | North East Heating & Cooling',
  description:
    'Professional AC installation and HVAC system replacement in Tampa, FL. Energy-efficient systems, quality installation. Free estimates. Call (813) 291-6146.',
  keywords: [
    'AC installation Tampa FL',
    'HVAC installation Tampa',
    'new air conditioner Tampa',
    'HVAC system replacement Tampa',
    'energy efficient AC Tampa Bay',
    'central air installation Tampa',
    'heat pump installation Tampa FL',
  ],
  alternates: { canonical: '/residential/hvac-installation-tampa-fl' },
  openGraph: {
    title: 'AC Installation & HVAC Installation Tampa, FL | North East Heating & Cooling',
    description:
      'Professional AC installation and HVAC system replacement in Tampa, FL. Energy-efficient systems, quality installation. Free estimates. Call (813) 291-6146.',
    url: '/residential/hvac-installation-tampa-fl',
    siteName: 'North East Heating & Cooling',
    locale: 'en_US',
    type: 'website',
  },
}

const installationTypes = [
  {
    title: 'New Central AC System Installation',
    description:
      'Installing a brand-new central air conditioning system in your Tampa home is one of the most impactful home improvements you can make for comfort and property value. Our installation process starts with a Manual J load calculation to precisely size the system for your home — because an oversized or undersized AC is just as problematic as no AC at all. We then handle every aspect of the installation: equipment delivery, refrigerant line sets, electrical connections, ductwork connections, thermostat installation, and full system commissioning.',
    bullets: [
      'Load calculation sizing for your specific home',
      'Complete new system installation — indoor and outdoor units',
      'Refrigerant line set installation',
      'Electrical disconnect and wiring',
      'Programmable or smart thermostat included',
      'Full system testing and commissioning',
    ],
  },
  {
    title: 'HVAC System Replacement',
    description:
      "If your existing AC system is 10–15 years old, experiencing frequent breakdowns, or failing to keep up with Tampa's heat, it may be time for a full replacement. Modern HVAC systems are dramatically more efficient than systems installed even a decade ago — a new 18 SEER unit uses roughly 30–40% less electricity than a 10 SEER system from the early 2000s. Our replacement service includes removal and responsible disposal of your old equipment, installation of the new system using all new components, and a thorough walkthrough so you know how to operate and maintain your new system.",
    bullets: [
      'Full removal and disposal of old equipment',
      'New refrigerant line sets and drain lines',
      'Updated electrical connections as needed',
      'New condensate drain pan installation',
      'Smart thermostat programming',
      'Post-install walkthrough and homeowner education',
    ],
  },
  {
    title: 'Energy-Efficient System Upgrades',
    description:
      "Florida homeowners spend more on cooling than nearly any other state. Upgrading to a high-efficiency HVAC system can dramatically reduce your monthly utility bills while improving comfort. We specialize in installing high-SEER central AC systems, inverter-driven heat pumps, and variable-speed air handlers that modulate their output to match your home's exact cooling demand — eliminating the uncomfortable temperature swings of older on/off systems.",
    bullets: [
      'High-SEER2 central air conditioners (16–22+ SEER)',
      'Inverter heat pumps for maximum efficiency',
      'Variable-speed air handler installations',
      'Ductless mini-split systems for additions or problem rooms',
      'Smart thermostat integration (Nest, Ecobee, etc.)',
      'Utility rebate assistance for qualifying systems',
    ],
  },
  {
    title: 'Ductless Mini-Split Installation',
    description:
      "Ductless mini-split systems are an ideal solution for Florida room additions, garage conversions, older homes without existing ductwork, and rooms that never seem to get cool enough. These highly efficient systems provide targeted cooling and heating without the duct losses that can account for 20–30% of energy waste in standard central AC systems. We install single-zone and multi-zone mini-split systems from leading manufacturers including Mitsubishi, Daikin, and LG.",
    bullets: [
      'Single-zone and multi-zone configurations',
      'Wall-mount, ceiling cassette, and floor console styles',
      'No ductwork required — minimal home disruption',
      'SEER ratings up to 30+ for exceptional efficiency',
      'Whisper-quiet operation',
      'Ideal for Florida rooms and home additions',
    ],
  },
]

const installationProcess = [
  {
    step: '01',
    title: 'Free Home Assessment & Estimate',
    desc: "A certified comfort advisor visits your home to assess your current system, measure your living space, check insulation levels, and evaluate your ductwork. We perform a Manual J load calculation to determine the precise size system your home needs — not a guess based on square footage alone.",
  },
  {
    step: '02',
    title: 'System Selection & Custom Proposal',
    desc: "We present you with 2–3 equipment options at different price and efficiency points, explaining the long-term energy savings of each. Our proposals include everything — equipment, labor, permits, and any necessary ductwork modifications — so you know the total cost before saying yes.",
  },
  {
    step: '03',
    title: 'Scheduled Installation Day',
    desc: 'Our installation crews arrive on time in marked vehicles. We protect your floors and living areas, pull the necessary permits, and complete the full installation typically in a single day for a standard replacement. Larger projects may require two days.',
  },
  {
    step: '04',
    title: 'Quality Inspection & Testing',
    desc: "Before we leave, we test the system through a full cooling and heating cycle, verify refrigerant charge, check airflow at every register, confirm drain line function, and ensure your thermostat communicates correctly with the system.",
  },
  {
    step: '05',
    title: 'Post-Install Walkthrough',
    desc: "We walk you through your new system — how to operate the thermostat, how to change filters, what maintenance schedule to follow, and what signs to watch for. We also register your equipment warranty and leave you with all documentation.",
  },
]

const faqs = [
  {
    q: 'How do I know what size AC system my Tampa home needs?',
    a: "System sizing for Tampa Bay homes requires a Manual J load calculation that accounts for your home's square footage, ceiling height, insulation levels, window count and orientation, local climate data, and number of occupants. A general rule of thumb (1 ton per 400–500 sq ft) is too imprecise for proper sizing. An oversized system will short-cycle — cooling quickly then shutting off — which leaves humidity high and wastes energy. An undersized system runs constantly and still can't keep up on hot days. We always calculate your home's exact load before recommending equipment.",
  },
  {
    q: 'How long does a new AC installation take?',
    a: "A standard like-for-like replacement in an average-sized Tampa home (1,500–2,500 sq ft) typically takes our crew 4–8 hours in a single day. More complex installations — involving ductwork modifications, electrical panel upgrades, or multi-zone systems — may require 1–2 days. We give you a specific time estimate before scheduling.",
  },
  {
    q: 'What SEER rating should I choose for a Tampa, FL home?',
    a: "In Florida's hot and humid climate, we typically recommend systems with a minimum SEER2 rating of 15–16, and often 18–20+ for homeowners who want to maximize energy savings. The higher the SEER rating, the more efficient the system. In Tampa Bay, where your AC runs 10 months a year, the payback period on a higher-efficiency system is considerably shorter than in cooler climates. We'll calculate the estimated annual energy savings for each option we present.",
  },
  {
    q: 'Are there any rebates available for a new AC system in Tampa?',
    a: "Yes — TECO (Tampa Electric) and Duke Energy Florida both offer rebates for qualifying high-efficiency HVAC systems. There may also be federal tax credits available under the Inflation Reduction Act for systems meeting certain efficiency thresholds. Our team will identify and document all applicable rebates and credits at the time of your estimate to help reduce your upfront cost.",
  },
  {
    q: 'What brands of HVAC systems do you install?',
    a: "We are authorized dealers and installation specialists for several top-tier HVAC brands including Carrier, Trane, Lennox, Daikin, Mitsubishi, Rheem, and Goodman. Each brand has its strengths, and we match equipment to your budget, home size, and efficiency goals. All systems we install are rated for Florida's climate conditions and backed by manufacturer warranties.",
  },
]

export default function HvacInstallationTampaPage() {
  return (
    <main className="font-sans">
      {/* Hero */}
      <section className="bg-[#0f1620] text-white py-20 px-4">
        <div className="max-w-5xl mx-auto">
          <p className="text-blue-200 font-semibold text-sm uppercase tracking-widest mb-3">
            Tampa Bay, FL — HVAC Installation
          </p>
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-5">
            AC Installation &amp; HVAC System Installation in Tampa, FL
          </h1>
          <p className="text-blue-100 text-lg md:text-xl max-w-3xl mb-8 leading-relaxed">
            New AC installation, full system replacement, and energy-efficient upgrades for Tampa Bay
            homeowners. Free in-home estimates, manufacturer-authorized installation, and post-install
            walkthroughs so you get the most from your investment.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="tel:8132916146"
              className="inline-flex items-center justify-center px-8 py-3.5 bg-white text-blue-800 font-bold text-lg rounded-lg hover:bg-blue-50 transition-colors shadow-lg"
            >
              Call (813) 291-6146
            </a>
            <a
              href="#contact-form"
              className="inline-flex items-center justify-center px-8 py-3.5 bg-red-600 text-white font-bold text-lg rounded-lg border-2 border-red-400 hover:bg-red-700 transition-colors"
            >
              Get Free Estimate
            </a>
          </div>
        </div>
      </section>

      {/* Trust bar */}
      <section className="bg-[#0f1620] text-white py-4 px-4">
        <div className="max-w-5xl mx-auto flex flex-wrap justify-center md:justify-between gap-x-8 gap-y-2 text-sm font-semibold text-blue-200">
          <span>✓ Free In-Home Estimates</span>
          <span>✓ Manufacturer-Authorized Installer</span>
          <span>✓ Proper Load Calculation Sizing</span>
          <span>✓ Licensed &amp; Insured</span>
          <span>✓ Parts &amp; Labor Warranty</span>
        </div>
      </section>

      {/* Overview */}
      <section className="bg-white py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-5">
            Tampa Bay&rsquo;s HVAC Installation Specialists
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 items-start">
            <div className="lg:col-span-3 space-y-4 text-gray-600 text-lg leading-relaxed">
              <p>
                Choosing a new HVAC system for your Tampa Bay home is one of the largest home improvement
                investments you&rsquo;ll make — and one of the most important. The right system, properly sized and
                correctly installed, will keep your home comfortable for 15–20 years while keeping your
                utility bills in check. The wrong system, or a poor installation, can mean years of
                inadequate cooling, high energy bills, and costly repairs.
              </p>
              <p>
                North East Heating &amp; Cooling takes HVAC installation seriously. We never guess at system
                sizing, never cut corners on installation quality, and never push equipment that earns us
                the highest margin at the expense of your comfort. Our installation process follows
                ACCA (Air Conditioning Contractors of America) quality installation standards, and every
                job is inspected before we consider it complete.
              </p>
              <p>
                Whether you&rsquo;re replacing an aging central AC system, installing AC in a home that
                never had it, or upgrading to a high-efficiency heat pump, our team has the expertise
                to deliver an installation you&rsquo;ll be satisfied with for years to come.
              </p>
            </div>
            <div className="lg:col-span-2 bg-blue-50 rounded-2xl p-6 border border-blue-100">
              <h3 className="text-lg font-bold text-gray-900 mb-4">Signs It&rsquo;s Time for a New System</h3>
              <ul className="space-y-3">
                {[
                  'System is 12+ years old',
                  'Repair costs approaching 50% of replacement cost',
                  'Monthly bills are rising without explanation',
                  'Home never feels comfortable in summer',
                  'Humidity stays high even when AC is running',
                  'System uses R-22 refrigerant (phased out)',
                  'Frequent breakdowns in the past 2 years',
                  'Noisy operation that repairs haven\'t resolved',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-gray-700 text-sm">
                    <span className="w-2 h-2 rounded-full bg-red-600 shrink-0 mt-1.5" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Installation Types */}
      <section className="bg-gray-50 py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-3">
              Our HVAC Installation Services
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              From new builds to full system replacements, we handle every type of residential HVAC
              installation in Tampa Bay.
            </p>
          </div>
          <div className="space-y-8">
            {installationTypes.map((type) => (
              <div
                key={type.title}
                className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100"
              >
                <h3 className="text-2xl font-bold text-gray-900 mb-3">{type.title}</h3>
                <p className="text-gray-600 leading-relaxed mb-5">{type.description}</p>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {type.bullets.map((b) => (
                    <li key={b} className="flex items-center gap-2 text-sm text-gray-700">
                      <span className="w-1.5 h-1.5 rounded-full bg-red-600 shrink-0" />
                      {b}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Installation Process */}
      <section className="bg-white py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-3">
              Our Installation Process
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              We follow a proven, structured installation process that ensures your new system is
              sized correctly, installed properly, and performing at its best from day one.
            </p>
          </div>
          <div className="space-y-4">
            {installationProcess.map((step) => (
              <div key={step.step} className="flex gap-6 items-start">
                <div className="w-14 h-14 rounded-full bg-[#0f1620] text-white flex items-center justify-center font-extrabold text-lg shrink-0">
                  {step.step}
                </div>
                <div className="pt-2">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{step.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Florida Climate Considerations */}
      <section className="bg-gray-50 py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-5">
            Choosing an HVAC System for Florida&rsquo;s Climate
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            <div className="space-y-4 text-gray-600 leading-relaxed">
              <p>
                Not every HVAC system is equally well-suited for Tampa Bay&rsquo;s hot, humid subtropical
                climate. Systems designed for drier climates may struggle with humidity control, leading
                to mold growth, musty odors, and that clammy feeling even when the temperature is
                technically at your setpoint.
              </p>
              <p>
                In Florida, we recommend HVAC systems with excellent dehumidification capabilities.
                Variable-speed or inverter-driven compressors are particularly valuable here — they run
                at lower speeds for longer periods, which removes far more moisture from the air than
                single-speed systems that cycle on and off.
              </p>
              <p>
                We also consider salt-air corrosion resistance when recommending equipment for coastal
                Tampa Bay locations. Systems with coated coils and corrosion-resistant cabinets will
                outlast standard equipment by years in seaside environments.
              </p>
            </div>
            <div className="space-y-4">
              <div className="bg-white rounded-xl p-6 border border-gray-200">
                <h3 className="font-bold text-gray-900 mb-3">Florida HVAC Recommendations</h3>
                <ul className="space-y-2.5">
                  {[
                    'Minimum 16 SEER2 rating for Tampa Bay',
                    'Two-stage or variable-speed compressor for humidity control',
                    'UV air purifier for mold prevention',
                    'Coated coils for coastal corrosion resistance',
                    'Oversized condensate drain pan',
                    'Smart thermostat with humidity control',
                    'Surge protection for lightning protection',
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2.5 text-gray-700 text-sm">
                      <span className="w-2 h-2 rounded-full bg-red-600 shrink-0 mt-1.5" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-[#0f1620] text-white rounded-xl p-6">
                <h3 className="font-bold mb-2">Energy Savings Estimate</h3>
                <p className="text-blue-200 text-sm leading-relaxed">
                  Replacing a 10 SEER system with a new 18 SEER system in Tampa Bay can reduce your
                  annual cooling costs by <span className="text-white font-bold">35–45%</span>. On a
                  typical Tampa home spending $2,400/year on cooling, that&rsquo;s $840–$1,080 in annual
                  savings — often paying back the efficiency upgrade in 4–6 years.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Internal Links */}
      <section className="bg-blue-50 border-y border-blue-100 py-10 px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-xl font-bold text-gray-900 mb-5">Related Services</h2>
          <div className="flex flex-wrap gap-3">
            <Link
              href="/residential/hvac-service-tampa"
              className="inline-flex items-center gap-1.5 px-5 py-2.5 bg-white border border-blue-200 text-blue-700 font-semibold text-sm rounded-lg hover:bg-red-700 hover:text-white hover:border-blue-700 transition-colors shadow-sm"
            >
              HVAC Repair Services →
            </Link>
            <Link
              href="/residential/air-duct-repair-tampa"
              className="inline-flex items-center gap-1.5 px-5 py-2.5 bg-white border border-blue-200 text-blue-700 font-semibold text-sm rounded-lg hover:bg-red-700 hover:text-white hover:border-blue-700 transition-colors shadow-sm"
            >
              Air Duct Repair →
            </Link>
            <Link
              href="/service-areas"
              className="inline-flex items-center gap-1.5 px-5 py-2.5 bg-white border border-blue-200 text-blue-700 font-semibold text-sm rounded-lg hover:bg-red-700 hover:text-white hover:border-blue-700 transition-colors shadow-sm"
            >
              View All Service Areas →
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-white py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-3 text-center">
            Frequently Asked Questions — AC Installation in Tampa
          </h2>
          <p className="text-gray-600 text-center mb-10">
            Common questions about new AC installation and HVAC system replacement in Tampa Bay.
          </p>
          <div className="space-y-4">
            {faqs.map((faq) => (
              <div key={faq.q} className="border border-gray-200 rounded-xl p-6">
                <h3 className="font-bold text-gray-900 text-lg mb-2">{faq.q}</h3>
                <p className="text-gray-600 leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section id="contact-form" className="bg-[#0f1620] py-16 px-4 text-white">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-3xl font-bold mb-4">Get Your Free Installation Estimate</h2>
              <p className="text-blue-100 text-lg mb-6 leading-relaxed">
                Ready to explore a new HVAC system for your Tampa Bay home? Call us for a free
                in-home consultation and estimate, or fill out the form and we&rsquo;ll schedule a
                convenient time to visit.
              </p>
              <div className="space-y-4">
                <a
                  href="tel:8132916146"
                  className="flex items-center gap-3 text-white text-xl font-bold hover:text-blue-200 transition-colors"
                >
                  <span className="bg-red-600 rounded-full w-11 h-11 flex items-center justify-center shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5" aria-hidden="true">
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.4 2 2 0 0 1 3.6 1.22h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L7.91 8.8a16 16 0 0 0 6.29 6.29l.95-.95a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                    </svg>
                  </span>
                  (813) 291-6146
                </a>
                <a href="mailto:office@northeastheatingcooling.com" className="flex items-center gap-3 text-blue-200 hover:text-white transition-colors">
                  <span className="bg-red-600 rounded-full w-11 h-11 flex items-center justify-center shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5" aria-hidden="true">
                      <rect x="2" y="4" width="20" height="16" rx="2" />
                      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                    </svg>
                  </span>
                  office@northeastheatingcooling.com
                </a>
              </div>
            </div>
            <form className="bg-white rounded-2xl p-7 text-gray-900 shadow-xl" action="/api/contact" method="POST">
              <h3 className="text-xl font-bold text-gray-800 mb-5">Request a Free Installation Estimate</h3>
              <div className="space-y-4">
                <div>
                  <label htmlFor="install-name" className="block text-sm font-semibold text-gray-700 mb-1">Your Name</label>
                  <input id="install-name" type="text" name="name" placeholder="John Smith" className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100" />
                </div>
                <div>
                  <label htmlFor="install-phone" className="block text-sm font-semibold text-gray-700 mb-1">Phone Number</label>
                  <input id="install-phone" type="tel" name="phone" placeholder="(813) 555-1234" className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100" />
                </div>
                <div>
                  <label htmlFor="install-email" className="block text-sm font-semibold text-gray-700 mb-1">Email Address</label>
                  <input id="install-email" type="email" name="email" placeholder="john@example.com" className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100" />
                </div>
                <div>
                  <label htmlFor="install-message" className="block text-sm font-semibold text-gray-700 mb-1">Tell Us About Your Project</label>
                  <textarea id="install-message" name="message" placeholder="Home size, current system age, specific concerns or goals..." rows={4} className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100 resize-none" />
                </div>
                <button type="submit" className="w-full bg-red-700 hover:bg-[#0f1620] active:bg-[#0f1620] text-white font-bold py-3.5 rounded-lg transition-colors text-base">
                  Request Free Estimate
                </button>
                <p className="text-xs text-gray-500 text-center">
                  Free in-home estimates for all HVAC installations. Call{' '}
                  <a href="tel:8132916146" className="text-blue-600 font-semibold">(813) 291-6146</a> to schedule today.
                </p>
              </div>
            </form>
          </div>
        </div>
      </section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            mainEntity: [
              {
                '@type': 'Question',
                name: 'How do I know what size AC system my Tampa home needs?',
                acceptedAnswer: { '@type': 'Answer', text: 'System sizing requires a Manual J load calculation that accounts for square footage, ceiling height, insulation, window count, local climate data, and number of occupants. An oversized system will short-cycle, leaving humidity high and wasting energy. An undersized system runs constantly and still can\'t keep up on hot days. We always calculate your home\'s exact load before recommending equipment.' },
              },
              {
                '@type': 'Question',
                name: 'How long does a new AC installation take?',
                acceptedAnswer: { '@type': 'Answer', text: 'A standard like-for-like replacement in an average-sized Tampa home (1,500–2,500 sq ft) typically takes 4–8 hours in a single day. More complex installations involving ductwork modifications, electrical panel upgrades, or multi-zone systems may require 1–2 days.' },
              },
              {
                '@type': 'Question',
                name: 'What SEER rating should I choose for a Tampa, FL home?',
                acceptedAnswer: { '@type': 'Answer', text: 'In Florida\'s hot and humid climate, we typically recommend systems with a minimum SEER2 rating of 15–16, and often 18–20+ for homeowners who want to maximize energy savings. In Tampa Bay, where your AC runs 10 months a year, the payback period on a higher-efficiency system is considerably shorter than in cooler climates.' },
              },
              {
                '@type': 'Question',
                name: 'Are there any rebates available for a new AC system in Tampa?',
                acceptedAnswer: { '@type': 'Answer', text: 'Yes — TECO (Tampa Electric) and Duke Energy Florida both offer rebates for qualifying high-efficiency HVAC systems. There may also be federal tax credits available under the Inflation Reduction Act for systems meeting certain efficiency thresholds. Our team will identify all applicable rebates at the time of your estimate.' },
              },
              {
                '@type': 'Question',
                name: 'What brands of HVAC systems do you install?',
                acceptedAnswer: { '@type': 'Answer', text: 'We are authorized dealers for several top-tier HVAC brands including Carrier, Trane, Lennox, Daikin, Mitsubishi, Rheem, and Goodman. All systems we install are rated for Florida\'s climate conditions and backed by manufacturer warranties.' },
              },
            ],
          }),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'BreadcrumbList',
            itemListElement: [
              { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://northeastheatingcooling.com' },
              { '@type': 'ListItem', position: 2, name: 'Residential Services', item: 'https://northeastheatingcooling.com/residential' },
              { '@type': 'ListItem', position: 3, name: 'AC Installation Tampa, FL' },
            ],
          }),
        }}
      />
    </main>
  )
}
