import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Top Signs Your HVAC System Needs Repair',
  description:
    'Strange noises, warm air, high energy bills — learn the top signs your HVAC system needs repair. Expert advice from North East Heating And Cooling in Tampa Bay. Call (813) 291-6146.',
  openGraph: {
    title: 'Top Signs Your HVAC System Needs Repair',
    description:
      'Strange noises, warm air, high energy bills — learn the top signs your HVAC system needs repair. Expert advice from North East Heating And Cooling in Tampa Bay.',
    url: 'https://northeastheatingcooling.com/blog/top-signs-hvac-system-needs-repair',
    siteName: 'North East Heating And Cooling',
    locale: 'en_US',
    type: 'article',
  },
}

export default function TopSignsHVACRepairPage() {
  return (
    <main className="font-sans bg-gray-50 min-h-screen">
      {/* Post Header */}
      <header className="relative bg-[#0f1620] text-white py-16 px-4 overflow-hidden">
        {/* Background photo */}
        <div className="absolute inset-0">
          <img
            src="https://images.pexels.com/photos/7983215/pexels-photo-7983215.jpeg?auto=compress&cs=tinysrgb&w=1600"
            alt="Signs your HVAC system needs repair - technician inspecting unit"
            className="w-full h-full object-cover object-center opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0f1620]/80 via-[#0f1620]/60 to-[#0f1620]/40" />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto">
          <div className="flex items-center gap-3 mb-4">
            <span className="bg-orange-500 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide">
              HVAC Repair
            </span>
            <time className="text-slate-300 text-sm">January 8, 2025</time>
          </div>
          <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-extrabold leading-[1.05] mb-5 tracking-[-0.03em]">
            Top Signs Your HVAC System Needs Repair
          </h1>
          <p className="text-slate-300 text-sm">
            By <span className="font-semibold text-white">Chris Grullon</span>, <span className="text-slate-300">Owner &amp; EPA 608 Certified HVAC Technician</span> &mdash; North East Heating And Cooling, Tampa Bay, FL
          </p>
        </div>
      </header>

      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="flex flex-col lg:flex-row gap-10">
          {/* Main Content */}
          <article className="flex-1 min-w-0">
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 md:p-10">

              <p className="text-gray-700 text-lg leading-relaxed mb-8">
                In Tampa Bay, a malfunctioning HVAC system isn't just uncomfortable — it can be dangerous. With temperatures
                regularly topping 90°F from spring through fall, your heating and cooling system is one of the most critical
                components of your home. The good news is that most HVAC problems give you warning signs before they become
                complete failures. Recognizing these signals early can save you from expensive emergency repairs and keep your
                family comfortable all year long.
              </p>

              <h2 className="font-display tracking-[-0.02em] text-2xl font-extrabold text-slate-900 mt-10 mb-4">1. Strange or Unusual Noises</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                A well-maintained HVAC system operates with a consistent, relatively quiet hum. If you start hearing banging,
                clanking, rattling, squealing, or grinding noises, those are clear distress signals. Banging or clanking often
                indicates a loose or broken part — possibly a connecting rod, piston pin, or crankshaft — inside the compressor.
                Squealing sounds may point to a belt slipping or a bearing going bad in the blower motor.
              </p>
              <p className="text-gray-700 leading-relaxed mb-6">
                Don't ignore these sounds or assume they'll go away on their own. Strange noises almost always indicate
                mechanical issues that will worsen over time if left unaddressed. A technician can diagnose the source quickly
                and prevent a minor problem from becoming a major — and much more costly — breakdown.
              </p>

              <h2 className="font-display tracking-[-0.02em] text-2xl font-extrabold text-slate-900 mt-10 mb-4">2. Warm Air Blowing from Vents</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                If your AC is running but blowing warm or room-temperature air, something is definitely wrong. The two most
                common culprits are a refrigerant leak and a failed compressor. Refrigerant is the substance your AC uses to
                absorb heat from indoor air; without enough of it, the system simply cannot cool effectively. A compressor
                failure means the refrigerant isn't being circulated at all.
              </p>
              <p className="text-gray-700 leading-relaxed mb-6">
                Before calling for service, check that your thermostat is set to "cool" mode and that the temperature setting
                is below the current room temperature. If everything looks correct and you're still getting warm air, it's
                time to call a professional. Refrigerant handling requires EPA certification, so this is not a DIY repair.
              </p>

              <h2 className="font-display tracking-[-0.02em] text-2xl font-extrabold text-slate-900 mt-10 mb-4">3. Poor or Weak Airflow</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Weak airflow from your vents — even when the system is running — often points to a problem with the blower
                motor, a clogged air filter, or blocked ductwork. In Florida's dusty and humid environment, air filters can
                become saturated faster than homeowners expect, particularly if you have pets or live near construction.
              </p>
              <p className="text-gray-700 leading-relaxed mb-6">
                Start by checking and replacing your air filter. If airflow doesn't improve after a filter change, the issue
                likely lies deeper in the system — a failing blower fan, disconnected ducts, or obstructions in the duct
                network. Poor airflow forces your system to work harder to compensate, driving up energy costs and accelerating
                wear on components.
              </p>

              <h2 className="font-display tracking-[-0.02em] text-2xl font-extrabold text-slate-900 mt-10 mb-4">4. High Indoor Humidity</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Your air conditioning system is responsible for more than just lowering the temperature — it also removes
                excess moisture from the air. In a state with relative humidity consistently above 70%, this dehumidification
                function is critical. If your home feels sticky and muggy even with the AC running, your system may not be
                removing moisture effectively.
              </p>
              <p className="text-gray-700 leading-relaxed mb-6">
                This can be caused by an oversized or aging AC unit that cools the air too quickly without running long enough
                to properly dehumidify. It can also signal refrigerant issues or a malfunctioning condensate drain. Beyond
                discomfort, excess humidity promotes mold growth, damages wood and drywall, and creates unhealthy indoor air
                quality conditions.
              </p>

              <h2 className="font-display tracking-[-0.02em] text-2xl font-extrabold text-slate-900 mt-10 mb-4">5. Bad or Unusual Smells</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Musty or moldy odors coming from your vents are a serious warning sign. In Tampa Bay's humid climate, condensate
                pans and evaporator coils are prime breeding grounds for mold and mildew. Once mold establishes itself inside
                your HVAC system, it gets distributed throughout your home every time the unit runs.
              </p>

              <h3 className="text-xl font-bold text-gray-800 mt-6 mb-3">Burning or Electrical Smells</h3>
              <p className="text-gray-700 leading-relaxed mb-6">
                A burning or electrical smell should prompt you to turn off your system immediately. This can indicate an
                overheating motor, failing electrical components, or melting wiring insulation — all of which are fire hazards.
                Call a licensed HVAC technician or, if you suspect an immediate danger, contact emergency services. Never
                continue running a system that smells like it's burning.
              </p>

              <h2 className="font-display tracking-[-0.02em] text-2xl font-extrabold text-slate-900 mt-10 mb-4">6. Thermostat Problems</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Sometimes the issue isn't the HVAC unit itself but the thermostat controlling it. Signs of a thermostat problem
                include the system not turning on or off when expected, rooms being significantly warmer or cooler than the set
                temperature, or the system cycling on and off too frequently (short cycling).
              </p>
              <p className="text-gray-700 leading-relaxed mb-6">
                If your thermostat is more than 10 years old or is a basic manual model, upgrading to a programmable or smart
                thermostat can both resolve these issues and improve energy efficiency. However, if the thermostat appears
                functional and problems persist, the underlying HVAC system may need attention.
              </p>

              <h2 className="font-display tracking-[-0.02em] text-2xl font-extrabold text-slate-900 mt-10 mb-4">7. Unexplained Spikes in Energy Bills</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                A sudden or gradual increase in your monthly electricity bill — without a change in usage habits — is a
                reliable indicator that your HVAC system is struggling. When components wear out or lose efficiency, the system
                has to run longer and work harder to maintain your set temperature, consuming significantly more electricity
                in the process.
              </p>
              <p className="text-gray-700 leading-relaxed mb-6">
                Compare your current bills to the same months in prior years. A 15–25% increase during similar weather
                conditions is a strong signal that your system needs professional attention. Regular maintenance, timely
                repairs, and eventually a system upgrade are the most effective ways to keep energy costs under control
                in Florida's demanding climate.
              </p>

              <h2 className="font-display tracking-[-0.02em] text-2xl font-extrabold text-slate-900 mt-10 mb-4">What to Do When You Notice These Signs</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                The most important thing is not to ignore the warning signs. HVAC problems rarely resolve themselves, and
                delaying repair almost always results in higher costs — either because the initial problem worsens, or because
                a minor repair becomes a major breakdown in the middle of a Florida summer.
              </p>
              <p className="text-gray-700 leading-relaxed mb-6">
                Schedule a diagnostic visit with a licensed HVAC technician as soon as you notice any of the signs above.
                A professional inspection can identify root causes quickly and give you an honest assessment of whether
                repair or replacement is the right path forward.
              </p>

              {/* Related Links */}
              <div className="mt-10 pt-8 border-t border-gray-200">
                <h3 className="text-lg font-bold text-gray-900 mb-4">Related Services</h3>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link
                    href="/residential/hvac-service-tampa"
                    className="inline-flex items-center gap-2 text-[#C8330A] font-semibold hover:text-[#b02c08] transition-colors"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                    HVAC Repair &amp; Service in Tampa
                  </Link>
                  <Link
                    href="/residential/hvac-installation-tampa-fl"
                    className="inline-flex items-center gap-2 text-[#C8330A] font-semibold hover:text-[#b02c08] transition-colors"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                    HVAC Installation &amp; Replacement in Tampa
                  </Link>
                </div>
              </div>
            </div>
          </article>

          {/* Sidebar */}
          <aside className="lg:w-80 shrink-0 space-y-6">
            {/* CTA Card */}
            <div className="bg-[#0f1620] text-white rounded-2xl p-7 shadow-lg">
              <h3 className="text-xl font-bold mb-3">Need HVAC Help?</h3>
              <p className="text-slate-300 text-sm leading-relaxed mb-5">
                Noticing any of these warning signs? Don&apos;t wait — our Tampa Bay HVAC technicians are ready to
                diagnose and repair your system fast.
              </p>
              <a
                href="tel:8132916146"
                className="block w-full text-center bg-white text-[#0f1620] font-bold py-3 rounded-lg hover:bg-[#C8330A]/5 transition-colors text-lg mb-3"
              >
                Call (813) 291-6146
              </a>
              <p className="text-slate-300 text-xs text-center">Same-day service available</p>
            </div>

            {/* Related Posts */}
            <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-4">More HVAC Tips</h3>
              <ul className="space-y-3">
                <li>
                  <Link href="/blog/when-to-replace-your-ac-unit-florida" className="text-[#C8330A] hover:text-[#b02c08] text-sm font-medium leading-snug transition-colors">
                    How to Know When to Replace Your AC Unit in Florida
                  </Link>
                </li>
                <li>
                  <Link href="/blog/benefits-of-regular-hvac-maintenance-florida" className="text-[#C8330A] hover:text-[#b02c08] text-sm font-medium leading-snug transition-colors">
                    Benefits of Regular HVAC Maintenance in Florida
                  </Link>
                </li>
                <li>
                  <Link href="/blog/how-to-improve-indoor-air-quality-tampa" className="text-[#C8330A] hover:text-[#b02c08] text-sm font-medium leading-snug transition-colors">
                    How to Improve Indoor Air Quality in Tampa Homes
                  </Link>
                </li>
              </ul>
            </div>

            {/* Service Links */}
            <div className="bg-gray-50 rounded-2xl border border-gray-200 p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-4">Our Services</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/residential/hvac-service-tampa" className="text-gray-700 hover:text-[#C8330A] text-sm transition-colors">
                    → HVAC Repair &amp; Service
                  </Link>
                </li>
                <li>
                  <Link href="/residential/hvac-installation-tampa-fl" className="text-gray-700 hover:text-[#C8330A] text-sm transition-colors">
                    → HVAC Installation &amp; Replacement
                  </Link>
                </li>
                <li>
                  <Link href="/residential" className="text-gray-700 hover:text-[#C8330A] text-sm transition-colors">
                    → All Residential Services
                  </Link>
                </li>
              </ul>
            </div>
          </aside>
        </div>
      </div>

      {/* Bottom CTA Banner */}
      <section className="bg-[#fff6f1] border-y border-[#C8330A]/15 py-12 px-4">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h2 className="font-display tracking-[-0.02em] text-2xl font-extrabold text-slate-900 mb-1">Hearing Strange Noises or Warm Air?</h2>
            <p className="text-gray-600">
              North East Heating And Cooling provides fast, reliable HVAC repairs across Tampa Bay.{' '}
              <Link href="/residential/hvac-service-tampa" className="text-[#C8330A] font-semibold hover:underline">
                View repair services →
              </Link>
            </p>
          </div>
          <a
            href="tel:8132916146"
            className="shrink-0 inline-flex items-center justify-center px-7 py-3 bg-[#b02c08] text-white font-bold rounded-lg hover:bg-[#0f1620] transition-colors text-lg whitespace-nowrap"
          >
            Call Now: (813) 291-6146
          </a>
        </div>
      </section>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'BlogPosting',
            headline: 'Top Signs Your HVAC System Needs Repair',
            description: 'Strange noises, warm air, high energy bills — learn the top signs your HVAC system needs repair. Expert advice from North East Heating And Cooling in Tampa Bay.',
            datePublished: '2025-01-08',
            dateModified: '2025-01-08',
            url: 'https://northeastheatingcooling.com/blog/top-signs-hvac-system-needs-repair',
            mainEntityOfPage: 'https://northeastheatingcooling.com/blog/top-signs-hvac-system-needs-repair',
            author: {
              '@type': 'Person',
              name: 'Chris Grullon',
              jobTitle: 'Owner & EPA 608 Certified HVAC Technician',
              worksFor: { '@type': 'Organization', name: 'North East Heating And Cooling' },
            },
            publisher: { '@type': 'Organization', name: 'North East Heating And Cooling', url: 'https://northeastheatingcooling.com' },
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
              { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://northeastheatingcooling.com/blog' },
              { '@type': 'ListItem', position: 3, name: 'Top Signs Your HVAC System Needs Repair' },
            ],
          }),
        }}
      />
    </main>
  )
}
