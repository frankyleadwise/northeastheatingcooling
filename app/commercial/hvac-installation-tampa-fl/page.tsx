import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Commercial HVAC Installation Tampa, FL | North East Heating & Cooling',
  description:
    'Expert commercial HVAC installation in Tampa Bay. Rooftop units, split systems, VRF systems. Minimize downtime. Call (813) 291-6146 for a free estimate.',
  keywords: [
    'commercial HVAC installation Tampa',
    'commercial AC installation Tampa FL',
    'rooftop unit installation Tampa',
    'VRF system installation Tampa',
    'commercial HVAC replacement Tampa Bay',
    'split system installation Tampa',
    'chilled water system Tampa',
    'North East Heating Cooling commercial',
  ],
  openGraph: {
    title: 'Commercial HVAC Installation Tampa, FL | North East Heating & Cooling',
    description:
      'Expert commercial HVAC installation in Tampa Bay. Rooftop units, split systems, VRF systems. Minimize downtime. Call (813) 291-6146.',
    url: 'https://northeastheatingcooling.com/commercial/hvac-installation-tampa-fl',
    siteName: 'North East Heating & Cooling',
    locale: 'en_US',
    type: 'website',
  },
}

const systemTypes = [
  {
    name: 'Rooftop Units (RTUs)',
    detail:
      'The workhorse of Tampa Bay commercial HVAC, rooftop package units are ideal for retail stores, strip malls, restaurants, and mid-size office buildings. We install, configure, and commission all major RTU brands including Carrier, Trane, York, and Lennox. Rooftop systems keep all mechanical equipment off the floor, maximizing usable interior space — a major advantage for high-value commercial properties.',
  },
  {
    name: 'Split Systems',
    detail:
      'Commercial split systems pair an indoor air handler with an outdoor condensing unit and are the right choice for server rooms, medical suites, retail back offices, and spaces where a rooftop unit is not practical. We size and install commercial split systems from 2 to 20+ tons to match your exact load requirements.',
  },
  {
    name: 'VRF / VRV Systems',
    detail:
      'Variable Refrigerant Flow (VRF) and Variable Refrigerant Volume (VRV) systems offer exceptional energy efficiency and zoning flexibility — perfect for multi-room office buildings, hotels, and mixed-use properties throughout Tampa Bay. A single outdoor unit can serve dozens of indoor zones simultaneously, with each zone independently controlled for maximum comfort and efficiency.',
  },
  {
    name: 'Chilled Water Systems',
    detail:
      'For large commercial buildings, hospitals, and multi-story office complexes in Tampa, chilled water systems provide the most scalable and efficient cooling solution. We design and install chiller plants, cooling towers, and air handling units tailored to your building\'s specific load profile and Florida\'s energy codes.',
  },
  {
    name: 'Make-Up Air Units (MAUs)',
    detail:
      'Restaurants, commercial kitchens, and industrial facilities in Tampa Bay require make-up air systems to replace air exhausted by hoods and ventilation systems. Properly sized MAUs maintain building pressurization, improve exhaust system performance, and ensure code compliance with Florida mechanical codes.',
  },
  {
    name: 'Dedicated Outdoor Air Systems (DOAS)',
    detail:
      'Florida\'s high outdoor humidity makes DOAS units increasingly popular for Tampa Bay commercial buildings. These systems pre-condition outdoor ventilation air before it enters the occupied space, dramatically reducing latent cooling loads and improving indoor air quality — critical for healthcare, education, and hospitality facilities.',
  },
]

const industries = [
  'Office Buildings & Corporate Campuses',
  'Restaurants & Commercial Kitchens',
  'Retail Stores & Shopping Centers',
  'Warehouses & Distribution Centers',
  'Medical & Dental Offices',
  'Hotels & Hospitality Properties',
  'Schools, Colleges & Universities',
  'Industrial & Manufacturing Facilities',
]

const processSteps = [
  {
    step: '01',
    title: 'Site Assessment & Load Calculation',
    detail:
      'Our certified engineers perform a complete Manual N commercial load calculation, accounting for your building\'s square footage, occupancy, equipment heat loads, insulation values, and Tampa Bay\'s specific climate data. Proper sizing is the single most important factor in long-term system performance.',
  },
  {
    step: '02',
    title: 'System Design & Equipment Selection',
    detail:
      'We present you with a detailed proposal outlining recommended equipment, system configurations, energy efficiency ratings, and projected operating costs. We work with your budget to identify the best-value system for your specific application and business goals.',
  },
  {
    step: '03',
    title: 'Permitting & Scheduling',
    detail:
      'North East Heating & Cooling handles all required permits with Hillsborough County, Pinellas County, and the City of Tampa. We coordinate installation around your business hours to minimize customer and employee disruption.',
  },
  {
    step: '04',
    title: 'Professional Installation',
    detail:
      'Our licensed installation crews follow manufacturer specifications and Florida Building Code requirements to the letter. All refrigerant work is performed by EPA 608-certified technicians, and all electrical connections are made per NEC standards.',
  },
  {
    step: '05',
    title: 'Commissioning & Handover',
    detail:
      'After installation, we perform a complete system commissioning: verifying airflow, refrigerant charge, electrical draw, thermostat programming, and controls integration. We walk you through system operation and provide all warranty documentation.',
  },
]

const faqs = [
  {
    q: 'How long does a commercial HVAC installation take?',
    a: 'Timeline varies by system type and building size. A single rooftop unit replacement for a small retail space typically takes one to two days. A multi-zone VRF system for a 10,000 sq ft office building may take four to seven days. We provide a detailed project schedule before work begins and can often phase installations to minimize business disruption.',
  },
  {
    q: 'What size commercial HVAC system does my Tampa Bay building need?',
    a: "Commercial systems are sized in tons of cooling capacity. As a rough guide, Tampa Bay commercial buildings typically require 1 ton per 200–400 sq ft of conditioned space, but the actual number depends on ceiling height, insulation, window area, occupancy, equipment loads, and building orientation. We perform a proper load calculation — never a rule-of-thumb guess — for every commercial project.",
  },
  {
    q: 'Do you handle commercial HVAC replacements, or only new installations?',
    a: "Both. We replace failed or end-of-life commercial systems regularly throughout Tampa Bay. Whether you're replacing a single rooftop unit, upgrading an aging split system, or retrofitting an entire building with a modern VRF system, our team has the experience to execute the project with minimal disruption to your operations.",
  },
  {
    q: 'What commercial HVAC brands do you install?',
    a: 'We are authorized to install and service equipment from all major commercial HVAC manufacturers including Carrier, Trane, Lennox, York, Daikin, Mitsubishi Electric, LG, Bosch, Rheem, and Goodman. We recommend the brand and model that best fits your application, budget, and long-term maintenance needs.',
  },
  {
    q: 'Do you offer maintenance contracts after installation?',
    a: "Yes. We offer commercial preventive maintenance agreements that cover quarterly or semi-annual inspections, filter changes, coil cleaning, belt checks, refrigerant monitoring, and priority emergency service. A maintenance plan is the best way to protect your new equipment investment and qualify for manufacturer warranty coverage. Visit our commercial HVAC service page for details.",
  },
]

export default function CommercialHVACInstallationPage() {
  return (
    <main className="font-sans text-gray-800">

      {/* Hero */}
      <section className="relative bg-[#0f1620] text-white py-20 px-4 overflow-hidden">
        {/* Background photo */}
        <div className="absolute inset-0">
          <img
            src="https://images.pexels.com/photos/32497161/pexels-photo-32497161.jpeg?auto=compress&cs=tinysrgb&w=1600"
            alt="HVAC technician installing new air conditioning system"
            className="w-full h-full object-cover object-center opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0f1620]/95 via-[#0f1620]/80 to-[#0f1620]/60" />
        </div>
        <div className="relative z-10 max-w-5xl mx-auto">
          <p className="text-blue-300 text-sm font-semibold uppercase tracking-widest mb-3">
            Commercial HVAC — Tampa Bay, FL
          </p>
          <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-5 max-w-3xl">
            Commercial HVAC Installation &amp; Replacement in Tampa, FL
          </h1>
          <p className="text-blue-100 text-lg md:text-xl max-w-3xl mb-8 leading-relaxed">
            From a single rooftop replacement to a full multi-building VRF system, North East Heating &amp;
            Cooling delivers expert commercial HVAC installation across Tampa Bay — on schedule, on budget,
            and with minimal disruption to your business.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="tel:8132916146"
              className="inline-block bg-orange-500 hover:bg-orange-600 text-white font-bold py-4 px-8 rounded-lg text-lg transition-colors"
            >
              Call (813) 291-6146
            </a>
            <a
              href="#contact"
              className="inline-block bg-white hover:bg-blue-50 text-blue-900 font-bold py-4 px-8 rounded-lg text-lg transition-colors"
            >
              Get a Free Estimate
            </a>
          </div>
        </div>
      </section>

      {/* Trust Bar */}
      <section className="bg-[#0f1620] text-white py-5 px-4">
        <div className="max-w-5xl mx-auto flex flex-wrap justify-center gap-8 text-sm font-medium">
          <div className="flex items-center gap-2"><span className="text-orange-400 text-lg">✓</span> Florida Licensed &amp; Insured</div>
          <div className="flex items-center gap-2"><span className="text-orange-400 text-lg">✓</span> Free Commercial Estimates</div>
          <div className="flex items-center gap-2"><span className="text-orange-400 text-lg">✓</span> All Major Brands</div>
          <div className="flex items-center gap-2"><span className="text-orange-400 text-lg">✓</span> Minimal Business Disruption</div>
          <div className="flex items-center gap-2"><span className="text-orange-400 text-lg">✓</span> Manufacturer Warranty Support</div>
        </div>
      </section>

      {/* Intro */}
      <section className="bg-white py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="max-w-3xl">
            <h2 className="text-3xl font-bold text-gray-900 mb-5">
              The Right Commercial HVAC System for Tampa Bay&apos;s Climate
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-4">
              Tampa Bay&apos;s subtropical climate is unforgiving on commercial HVAC equipment. With temperatures
              regularly topping 95°F from May through September, outdoor humidity often exceeding 85%, and a
              cooling season that effectively runs year-round, choosing and installing the right commercial
              system is one of the most important decisions a Tampa Bay business owner or property manager
              can make.
            </p>
            <p className="text-gray-600 text-lg leading-relaxed mb-4">
              An undersized system runs constantly, fails prematurely, and never adequately dehumidifies your
              space. An oversized system short-cycles, leaving occupants uncomfortable and creating serious
              moisture and mold risk — a particularly acute problem in Florida&apos;s humid coastal environment.
              Correct sizing, proper equipment selection, and expert installation are the foundation of a
              commercial HVAC system that performs reliably for 15–20 years.
            </p>
            <p className="text-gray-600 text-lg leading-relaxed">
              North East Heating &amp; Cooling brings extensive commercial installation experience to every
              Tampa Bay project. Our licensed technicians and project managers work with you from initial
              site assessment through commissioning to ensure your new system meets your comfort, efficiency,
              and operational requirements.
            </p>
          </div>
        </div>
      </section>

      {/* System Types */}
      <section className="bg-gray-50 py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-3">
              Commercial HVAC Systems We Install
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              We install every major category of commercial HVAC equipment throughout Hillsborough,
              Pinellas, and surrounding counties.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {systemTypes.map((system) => (
              <div key={system.name} className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm">
                <div className="flex items-start gap-3 mb-3">
                  <div className="w-2.5 h-2.5 rounded-full bg-orange-500 shrink-0 mt-2" />
                  <h3 className="text-lg font-bold text-gray-900">{system.name}</h3>
                </div>
                <p className="text-gray-600 text-sm leading-relaxed pl-5">{system.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Process */}
      <section className="bg-white py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-3">
              Our Commercial Installation Process
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Every commercial HVAC installation at North East Heating &amp; Cooling follows a structured
              process designed to protect your business investment and minimize downtime.
            </p>
          </div>
          <div className="space-y-6">
            {processSteps.map((step) => (
              <div key={step.step} className="flex gap-6 items-start">
                <div className="shrink-0 w-14 h-14 bg-[#0f1620] rounded-xl flex items-center justify-center">
                  <span className="text-white font-black text-lg">{step.step}</span>
                </div>
                <div className="pt-1">
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{step.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{step.detail}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries Served */}
      <section className="bg-[#0f1620] text-white py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold mb-3">Industries We Serve in Tampa Bay</h2>
            <p className="text-blue-200 max-w-2xl mx-auto">
              Our commercial installation teams have experience across virtually every commercial sector
              in the Tampa Bay metropolitan area.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {industries.map((industry) => (
              <div key={industry} className="bg-[#0f1620] rounded-lg px-5 py-4 flex items-center gap-3">
                <span className="text-orange-400 font-bold shrink-0">✓</span>
                <span className="text-sm font-medium">{industry}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Energy Efficiency */}
      <section className="bg-gray-50 py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-5">
                Energy Efficiency &amp; Utility Savings for Tampa Bay Businesses
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Florida businesses pay some of the highest commercial electricity rates in the southeastern
                United States. With your HVAC system typically accounting for 40–60% of your building&apos;s
                total energy consumption, choosing a high-efficiency system delivers measurable savings from
                day one.
              </p>
              <p className="text-gray-600 leading-relaxed mb-4">
                We install equipment that meets or exceeds current Florida Energy Code requirements and
                help you identify systems that qualify for Duke Energy, TECO Tampa Electric, or federal
                tax incentive programs. High-efficiency commercial equipment today — including inverter-driven
                compressors, electronically commutated motors (ECMs), and variable-speed drives — can reduce
                HVAC energy costs by 30–50% compared to older fixed-speed systems.
              </p>
              <p className="text-gray-600 leading-relaxed">
                We provide estimated operating cost comparisons between equipment options so you can make
                an informed decision that balances upfront investment against long-term utility savings.
              </p>
            </div>
            <div className="space-y-4">
              <div className="bg-white rounded-xl p-6 border border-gray-200">
                <div className="text-3xl font-black text-orange-500 mb-1">40–60%</div>
                <div className="font-bold text-gray-900 mb-1">Of Building Energy Use</div>
                <p className="text-gray-600 text-sm">Typical HVAC share of total commercial building energy consumption in Florida&apos;s climate.</p>
              </div>
              <div className="bg-white rounded-xl p-6 border border-gray-200">
                <div className="text-3xl font-black text-orange-500 mb-1">Up to 50%</div>
                <div className="font-bold text-gray-900 mb-1">Energy Savings Possible</div>
                <p className="text-gray-600 text-sm">Upgrading from a 10+ year old system to a modern high-efficiency unit can cut HVAC energy costs in half.</p>
              </div>
              <div className="bg-white rounded-xl p-6 border border-gray-200">
                <div className="text-3xl font-black text-orange-500 mb-1">15–20 Yrs</div>
                <div className="font-bold text-gray-900 mb-1">Expected System Life</div>
                <p className="text-gray-600 text-sm">Properly installed and maintained commercial HVAC equipment in Tampa Bay typically lasts 15–20 years.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-white py-16 px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-10 text-center">
            Frequently Asked Questions
          </h2>
          <div className="space-y-6">
            {faqs.map((faq) => (
              <div key={faq.q} className="border-b border-gray-200 pb-6">
                <h3 className="text-lg font-bold text-gray-900 mb-3">{faq.q}</h3>
                <p className="text-gray-600 leading-relaxed text-sm">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Area */}
      <section className="bg-blue-50 border-y border-blue-100 py-12 px-4">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-2">
              Commercial HVAC Installation Throughout Tampa Bay
            </h2>
            <p className="text-gray-600 max-w-2xl">
              We serve businesses in Tampa, St. Petersburg, Clearwater, Brandon, Riverview, Wesley
              Chapel, Lutz, Land O&apos; Lakes, Plant City, and all surrounding Hillsborough and Pinellas
              County communities.{' '}
              <Link href="/service-areas" className="text-blue-700 font-semibold hover:underline">
                View all service areas →
              </Link>
            </p>
          </div>
          <a
            href="tel:8132916146"
            className="shrink-0 bg-[#0f1620] hover:bg-[#0f1620] text-white font-bold py-3 px-7 rounded-lg text-lg transition-colors whitespace-nowrap"
          >
            Call (813) 291-6146
          </a>
        </div>
      </section>

      {/* CTA / Contact */}
      <section id="contact" className="bg-[#0f1620] text-white py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-3xl font-bold mb-4">
                Request a Free Commercial HVAC Installation Estimate
              </h2>
              <p className="text-blue-100 text-lg mb-6 leading-relaxed">
                Call us now for a same-day consultation, or fill out the form and a commercial HVAC
                specialist will contact you within one business day to discuss your project.
              </p>
              <div className="space-y-4 mb-8">
                <a
                  href="tel:8132916146"
                  className="flex items-center gap-3 text-white hover:text-orange-300 font-bold text-xl transition-colors"
                >
                  <span className="bg-orange-500 rounded-full w-11 h-11 flex items-center justify-center text-base shrink-0">📞</span>
                  (813) 291-6146
                </a>
                <a
                  href="mailto:office@northeastheatingcooling.com"
                  className="flex items-center gap-3 text-blue-200 hover:text-white transition-colors"
                >
                  <span className="bg-red-700 rounded-full w-11 h-11 flex items-center justify-center text-base shrink-0">✉️</span>
                  office@northeastheatingcooling.com
                </a>
              </div>
              <div className="text-sm text-blue-200 space-y-1">
                <p className="font-semibold text-white">Also helpful:</p>
                <Link href="/commercial" className="block text-blue-300 hover:text-white hover:underline">← All Commercial Services</Link>
                <Link href="/commercial/hvac-service-tampa" className="block text-blue-300 hover:text-white hover:underline">Commercial HVAC Service &amp; Maintenance →</Link>
                <Link href="/residential" className="block text-blue-300 hover:text-white hover:underline">Residential HVAC Services →</Link>
              </div>
            </div>
            <form className="bg-white rounded-2xl p-7 text-gray-900 shadow-xl">
              <h3 className="text-xl font-bold text-gray-800 mb-5">Get a Free Estimate</h3>
              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-gray-600 mb-1 uppercase tracking-wide">Business Name</label>
                    <input
                      type="text"
                      name="business"
                      placeholder="Acme Corp"
                      className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-gray-600 mb-1 uppercase tracking-wide">Your Name</label>
                    <input
                      type="text"
                      name="name"
                      placeholder="John Smith"
                      className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-xs font-semibold text-gray-600 mb-1 uppercase tracking-wide">Phone Number</label>
                  <input
                    type="tel"
                    name="phone"
                    placeholder="(813) 555-0100"
                    className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-gray-600 mb-1 uppercase tracking-wide">Email Address</label>
                  <input
                    type="email"
                    name="email"
                    placeholder="you@example.com"
                    className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-gray-600 mb-1 uppercase tracking-wide">System Type Needed</label>
                  <select
                    name="system_type"
                    className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                  >
                    <option value="">Select system type...</option>
                    <option>Rooftop Unit (RTU)</option>
                    <option>Commercial Split System</option>
                    <option>VRF / VRV System</option>
                    <option>Chilled Water System</option>
                    <option>Make-Up Air Unit</option>
                    <option>Not Sure — Need Assessment</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-semibold text-gray-600 mb-1 uppercase tracking-wide">Project Details</label>
                  <textarea
                    name="message"
                    rows={3}
                    placeholder="Building size, number of units, timeline, any other details..."
                    className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100 resize-none"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 rounded-lg transition-colors text-base"
                >
                  Request Free Estimate
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </main>
  )
}
