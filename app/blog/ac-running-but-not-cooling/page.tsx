import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: "Why Is My AC Running But Not Cooling? 8 Causes (And What to Do)",
  description:
    "Your AC is running but not cooling — here are the 8 most common causes a Tampa HVAC technician sees, ordered from cheapest to fix to most expensive. What you can check yourself before calling.",
  alternates: { canonical: '/blog/ac-running-but-not-cooling' },
  openGraph: {
    title: "Why Is My AC Running But Not Cooling? 8 Causes (And What to Do)",
    description:
      "Your AC is running but not cooling — here are the 8 most common causes a Tampa HVAC technician sees, with what to check yourself before calling for service.",
    url: 'https://northeastheatingcooling.com/blog/ac-running-but-not-cooling',
    siteName: 'North East Heating And Cooling',
    locale: 'en_US',
    type: 'article',
  },
}

export default function AcRunningButNotCoolingPage() {
  return (
    <main className="font-sans bg-gray-50 min-h-screen">
      <header className="relative bg-[#0f1620] text-white py-16 px-4 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.pexels.com/photos/7983215/pexels-photo-7983215.jpeg?auto=compress&cs=tinysrgb&w=1600"
            alt="HVAC technician diagnosing AC unit that is running but not cooling"
            className="w-full h-full object-cover object-center opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0f1620]/80 via-[#0f1620]/60 to-[#0f1620]/40" />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto">
          <div className="flex items-center gap-3 mb-4">
            <span className="bg-orange-500 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide">
              Troubleshooting
            </span>
            <time className="text-slate-300 text-sm">April 29, 2026</time>
          </div>
          <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-extrabold leading-[1.05] mb-5 tracking-[-0.03em]">
            Why Is My AC Running But Not Cooling? 8 Causes (And What to Do)
          </h1>
          <p className="text-slate-300 text-sm">
            By <span className="font-semibold text-white">Chris Grullon</span>, <span className="text-slate-300">Owner &amp; EPA 608 Certified HVAC Technician</span> &mdash; North East Heating And Cooling, Tampa Bay, FL
          </p>
        </div>
      </header>

      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="flex flex-col lg:flex-row gap-10">
          <article className="flex-1 min-w-0">
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 md:p-10">

              <p className="text-gray-700 text-lg leading-relaxed mb-6">
                You walk into your living room and immediately notice it&apos;s warm. The thermostat reads
                78°F but you set it to 72°F. The outdoor unit is humming, the fan is spinning, you can hear
                air moving through the vents — but nothing is actually getting cool. This is one of the most
                common service calls I take in Tampa Bay. Here are the 8 most likely causes, ordered from
                cheapest to fix to most expensive, with what you can safely check yourself before calling.
              </p>

              <div className="bg-amber-50 border-l-4 border-amber-500 p-5 rounded-r-lg my-6">
                <p className="text-gray-800 text-sm leading-relaxed">
                  <strong>Quick safety check before troubleshooting:</strong> if you smell anything burning,
                  see ice forming on the refrigerant lines, or hear loud grinding/screeching, turn the system
                  off at the thermostat <em>now</em> and call for service. Continuing to run a system in
                  these states can turn a $300 repair into a $2,000 one.
                </p>
              </div>

              <h2 className="font-display tracking-[-0.02em] text-2xl font-extrabold text-slate-900 mt-10 mb-4">1. Dirty Air Filter (Cost: $15)</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                <strong>Always check this first.</strong> A clogged filter restricts airflow over the
                evaporator coil, which causes two problems: the air your system can deliver gets reduced
                (so cooling feels weak), and the coil temperature drops too low and starts to freeze. A
                frozen coil can&apos;t transfer heat at all — at that point, your system blows warm air no
                matter how cold the refrigerant is.
              </p>
              <p className="text-gray-700 leading-relaxed mb-6">
                <strong>What to do:</strong> Pull the filter out and look at it. If you can&apos;t see light
                through it, replace it. In Tampa during summer, replace filters monthly. If the filter looks
                fine, move to step 2.
              </p>

              <h2 className="font-display tracking-[-0.02em] text-2xl font-extrabold text-slate-900 mt-10 mb-4">2. Thermostat Issue (Cost: $0–$200)</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Sometimes the thermostat is the problem, not the AC. Check three things: (a) is it actually
                set to <strong>cool</strong> mode and not <strong>fan</strong> or <strong>heat</strong>?
                (b) is the temperature setting at least 3°F below current room temp? (c) does the thermostat
                screen show a low-battery indicator?
              </p>
              <p className="text-gray-700 leading-relaxed mb-6">
                <strong>What to do:</strong> Replace thermostat batteries if applicable. Reset to a clearly
                lower setting (e.g. 68°F) and wait 5 minutes. If the system still runs but doesn&apos;t cool,
                the thermostat may be miscalibrated or failing. A new programmable or smart thermostat
                installed runs $200&ndash;$400.
              </p>

              <h2 className="font-display tracking-[-0.02em] text-2xl font-extrabold text-slate-900 mt-10 mb-4">3. Frozen Evaporator Coil (Cost: $0–$200 if caught early)</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                If you go look at the indoor air handler (usually in your attic, garage, or a closet) and
                see <strong>ice on the copper refrigerant lines</strong> or on the coil itself, that&apos;s
                a frozen evaporator. This is almost always caused by either a dirty filter (see #1), low
                refrigerant (see #6), or a problem with the blower motor.
              </p>
              <p className="text-gray-700 leading-relaxed mb-6">
                <strong>What to do:</strong> Turn the system to <em>fan only</em> for 2&ndash;3 hours. This
                lets the ice thaw without the compressor running (which would damage it). Once thawed, run
                the AC again. If it freezes back up within a day, you almost certainly have low refrigerant
                or a blower motor problem and you need a tech.
              </p>

              <h2 className="font-display tracking-[-0.02em] text-2xl font-extrabold text-slate-900 mt-10 mb-4">4. Dirty Outdoor Condenser Coil (Cost: $150–$300)</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                The outdoor unit (the loud box in your yard) is responsible for dumping the heat your AC
                pulls out of your home into the outside air. If the fins on the outdoor coil are caked with
                grass clippings, pollen, dust, leaves, or pet hair, the system can&apos;t shed heat
                effectively — so the indoor air gets less cool, even though the system is &ldquo;running.&rdquo;
              </p>
              <p className="text-gray-700 leading-relaxed mb-6">
                <strong>What to do:</strong> With the system off at the breaker, you can rinse the outdoor
                coil with a garden hose (gentle pressure, top to bottom). Don&apos;t use a power washer —
                it bends fins. If the coil looks heavily impacted, schedule a professional coil cleaning;
                in Tampa, this should be part of a twice-yearly tune-up anyway.
              </p>

              <h2 className="font-display tracking-[-0.02em] text-2xl font-extrabold text-slate-900 mt-10 mb-4">5. Failed Capacitor (Cost: $150–$350)</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                The capacitor is essentially a battery that helps start the compressor and fan motors. When
                it fails, the system might run partially — sometimes the outdoor fan spins but the compressor
                doesn&apos;t kick on, sometimes everything runs but at reduced power. Capacitors are the
                most common failure point on Florida AC systems because Tampa heat literally cooks them.
              </p>
              <p className="text-gray-700 leading-relaxed mb-6">
                <strong>What to do:</strong> This requires a tech. A capacitor swap is a 30-minute job and
                runs $150&ndash;$350 typically. The good news: this is a cheap, common repair, and once
                replaced your system should work like new. If your tech finds the capacitor failed, ask
                whether it&apos;s worth installing a higher-rated capacitor — they&apos;re only $20&ndash;$40
                more and tend to last 2x as long in Florida heat.
              </p>

              <h2 className="font-display tracking-[-0.02em] text-2xl font-extrabold text-slate-900 mt-10 mb-4">6. Low Refrigerant / Refrigerant Leak (Cost: $300–$1,500)</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                AC systems are sealed — they shouldn&apos;t lose refrigerant under normal operation. If
                yours is low, you have a leak somewhere. Symptoms include: ice on the refrigerant lines,
                hissing sounds near the indoor or outdoor unit, weak cooling that gets worse over time,
                or a system that runs constantly without reaching the set temp.
              </p>
              <p className="text-gray-700 leading-relaxed mb-6">
                <strong>What to do:</strong> Refrigerant work requires EPA certification, so this is a
                tech-only fix. The repair has two parts: find and fix the leak, then recharge the system.
                Small leaks are typically $300&ndash;$600 to fix; bigger leaks (like at the evaporator coil
                or compressor) can run $800&ndash;$1,500. If your system uses R-22 (phased out in 2020) and
                you have a leak, replacement is often cheaper than refilling.
              </p>

              <h2 className="font-display tracking-[-0.02em] text-2xl font-extrabold text-slate-900 mt-10 mb-4">7. Failing Compressor (Cost: $1,500–$3,500)</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                The compressor is the heart of your AC — it pressurizes refrigerant so heat can be transferred.
                When it starts to fail, you typically hear changes (louder operation, clicking, humming) and
                see reduced cooling capacity that gets worse over weeks or months. A fully failed compressor
                produces no cooling at all.
              </p>
              <p className="text-gray-700 leading-relaxed mb-6">
                <strong>What to do:</strong> Compressor replacement on a 10+ year old system rarely makes
                financial sense. By the time you pay for the part ($800&ndash;$1,500) plus labor and refrigerant,
                you&apos;re at $1,500&ndash;$3,500 — and the rest of the system is the same age, meaning
                another major component is likely to fail soon. We always quote both the repair cost and a
                replacement option side-by-side so you can choose with full information.
              </p>

              <h2 className="font-display tracking-[-0.02em] text-2xl font-extrabold text-slate-900 mt-10 mb-4">8. Undersized System (Cost: Replacement)</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Less common but worth mentioning: sometimes a system that&apos;s technically working
                can&apos;t actually cool the home because it&apos;s undersized. This happens when someone
                added a sunroom, finished a garage, or did anything that increased the cooling load without
                upgrading the system. The AC runs constantly trying to keep up but never reaches the set
                temperature on hot days.
              </p>
              <p className="text-gray-700 leading-relaxed mb-6">
                <strong>What to do:</strong> A tech can verify this with a Manual J load calculation. If
                the system is genuinely undersized, options are: (a) replace with a properly-sized system,
                or (b) supplement with a ductless mini-split for the problem area. We commonly install
                mini-splits for sunrooms, additions, and garages where extending central AC isn&apos;t
                practical.
              </p>

              <h2 className="font-display tracking-[-0.02em] text-2xl font-extrabold text-slate-900 mt-10 mb-4">When to Call Right Away</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Don&apos;t wait if you notice any of the following — these can cascade into much bigger
                problems within hours:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
                <li>Burning smells coming from the vents or the outdoor unit</li>
                <li>Loud grinding or screeching from the outdoor unit</li>
                <li>Water pooling around the indoor air handler or dripping from the ceiling</li>
                <li>Ice on the refrigerant lines that doesn&apos;t thaw within a few hours of the system off</li>
                <li>Tripping breakers when the AC tries to start</li>
                <li>The outdoor unit not running at all while the indoor blower runs</li>
              </ul>

              <div className="bg-orange-50 border-l-4 border-orange-500 p-6 rounded-r-lg my-8">
                <h3 className="font-bold text-gray-900 mb-2">Need a Tampa Bay HVAC Tech Now?</h3>
                <p className="text-gray-700 leading-relaxed">
                  We offer same-day AC repair across Tampa Bay with most service calls scheduled within
                  hours of your call. Diagnostic fees are waived if you proceed with the repair, and every
                  quote is in writing before any work starts. Call <a href="tel:8132916146" className="text-orange-700 font-semibold hover:underline">(813) 291-6146</a> or{' '}
                  <Link href="/contact" className="text-orange-700 font-semibold hover:underline">request service online</Link>.
                </p>
              </div>

              <h2 className="font-display tracking-[-0.02em] text-2xl font-extrabold text-slate-900 mt-10 mb-4">Related Reading</h2>
              <div className="space-y-3">
                <Link href="/residential/hvac-service-tampa" className="inline-flex items-center gap-2 text-orange-700 font-semibold hover:text-orange-800 transition-colors">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                  AC Repair &amp; HVAC Service in Tampa
                </Link>
                <br />
                <Link href="/blog/top-signs-hvac-system-needs-repair" className="inline-flex items-center gap-2 text-orange-700 font-semibold hover:text-orange-800 transition-colors">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                  Top Signs Your HVAC System Needs Repair
                </Link>
                <br />
                <Link href="/blog/how-long-does-ac-last-in-florida" className="inline-flex items-center gap-2 text-orange-700 font-semibold hover:text-orange-800 transition-colors">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                  How Long Does an AC Last in Florida?
                </Link>
              </div>
            </div>
          </article>

          <aside className="lg:w-80 shrink-0 space-y-6">
            <div className="bg-[#0f1620] text-white rounded-2xl p-7 shadow-lg">
              <h3 className="text-xl font-bold mb-3">AC Not Cooling?</h3>
              <p className="text-slate-300 text-sm leading-relaxed mb-5">
                Same-day AC repair across Tampa Bay. Diagnostic fee waived with repair. Most fixes done in one visit.
              </p>
              <a href="tel:8132916146" className="block w-full text-center bg-white text-[#0f1620] font-bold py-3 rounded-lg hover:bg-[#C8330A]/5 transition-colors text-lg mb-3">
                Call (813) 291-6146
              </a>
              <p className="text-slate-300 text-xs text-center">Same-day appointments available</p>
            </div>

            <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-4">More Troubleshooting</h3>
              <ul className="space-y-3">
                <li><Link href="/blog/top-signs-hvac-system-needs-repair" className="text-orange-700 hover:text-orange-800 text-sm font-medium leading-snug transition-colors">Top Signs Your HVAC Needs Repair</Link></li>
                <li><Link href="/blog/how-long-does-ac-last-in-florida" className="text-orange-700 hover:text-orange-800 text-sm font-medium leading-snug transition-colors">How Long Does AC Last in Florida?</Link></li>
                <li><Link href="/blog/when-to-replace-your-ac-unit-florida" className="text-orange-700 hover:text-orange-800 text-sm font-medium leading-snug transition-colors">When to Replace Your AC Unit</Link></li>
                <li><Link href="/blog/benefits-of-regular-hvac-maintenance-florida" className="text-orange-700 hover:text-orange-800 text-sm font-medium leading-snug transition-colors">Benefits of Regular Maintenance</Link></li>
              </ul>
            </div>

            <div className="bg-gray-50 rounded-2xl border border-gray-200 p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-4">Our Services</h3>
              <ul className="space-y-2">
                <li><Link href="/residential/hvac-service-tampa" className="text-gray-700 hover:text-orange-700 text-sm transition-colors">→ AC &amp; HVAC Repair</Link></li>
                <li><Link href="/residential/ac-maintenance-tampa" className="text-gray-700 hover:text-orange-700 text-sm transition-colors">→ AC Maintenance Plans</Link></li>
                <li><Link href="/residential/hvac-installation-tampa-fl" className="text-gray-700 hover:text-orange-700 text-sm transition-colors">→ AC Replacement</Link></li>
              </ul>
            </div>
          </aside>
        </div>
      </div>

      <section className="bg-orange-50 border-y border-orange-100 py-12 px-4">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h2 className="font-display tracking-[-0.02em] text-2xl font-extrabold text-slate-900 mb-1">Still Not Cooling After Checking?</h2>
            <p className="text-gray-600">
              Our techs can usually diagnose in 30 minutes and most repairs are done same-day.{' '}
              <Link href="/residential/hvac-service-tampa" className="text-orange-700 font-semibold hover:underline">
                See AC repair services →
              </Link>
            </p>
          </div>
          <a href="tel:8132916146" className="shrink-0 inline-flex items-center justify-center px-7 py-3 bg-[#b02c08] text-white font-bold rounded-lg hover:bg-[#0f1620] transition-colors text-lg whitespace-nowrap">
            Call Now: (813) 291-6146
          </a>
        </div>
      </section>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'BlogPosting',
        headline: 'Why Is My AC Running But Not Cooling? 8 Causes (And What to Do)',
        description: "Your AC is running but not cooling — 8 most common causes a Tampa HVAC technician sees, ordered cheapest to most expensive.",
        datePublished: '2026-04-29',
        dateModified: '2026-04-29',
        url: 'https://northeastheatingcooling.com/blog/ac-running-but-not-cooling',
        mainEntityOfPage: 'https://northeastheatingcooling.com/blog/ac-running-but-not-cooling',
        author: {
          '@type': 'Person',
          name: 'Chris Grullon',
          jobTitle: 'Owner & EPA 608 Certified HVAC Technician',
          worksFor: { '@type': 'Organization', name: 'North East Heating And Cooling' },
        },
        publisher: { '@type': 'Organization', name: 'North East Heating And Cooling', url: 'https://northeastheatingcooling.com' },
      })}} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://northeastheatingcooling.com' },
          { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://northeastheatingcooling.com/blog' },
          { '@type': 'ListItem', position: 3, name: 'Why Is My AC Running But Not Cooling?' },
        ],
      })}} />
    </main>
  )
}
