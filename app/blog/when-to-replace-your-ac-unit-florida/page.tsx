import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'How to Know When to Replace Your AC Unit in Florida | North East Heating And Cooling',
  description:
    "Learn the top signs it's time to replace your AC unit in Florida. Expert advice from North East Heating And Cooling in Tampa Bay. Call (813) 291-6146.",
  openGraph: {
    title: 'How to Know When to Replace Your AC Unit in Florida',
    description:
      "Learn the top signs it's time to replace your AC unit in Florida. Expert advice from North East Heating And Cooling in Tampa Bay.",
    url: 'https://northeastheatingcooling.com/blog/when-to-replace-your-ac-unit-florida',
    siteName: 'North East Heating And Cooling',
    locale: 'en_US',
    type: 'article',
  },
}

export default function WhenToReplaceACPage() {
  return (
    <main className="font-sans bg-gray-50 min-h-screen">
      {/* Post Header */}
      <header className="relative bg-[#0f1620] text-white py-16 px-4 overflow-hidden">
        {/* Background photo */}
        <div className="absolute inset-0">
          <img
            src="https://images.pexels.com/photos/7983215/pexels-photo-7983215.jpeg?auto=compress&cs=tinysrgb&w=1600"
            alt="When to replace your AC unit in Florida - old vs new air conditioner"
            className="w-full h-full object-cover object-center opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0f1620]/80 via-[#0f1620]/60 to-[#0f1620]/40" />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto">
          <div className="flex items-center gap-3 mb-4">
            <span className="bg-red-500 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide">
              AC Replacement
            </span>
            <time className="text-blue-200 text-sm">December 15, 2024</time>
          </div>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold leading-tight mb-5">
            How to Know When to Replace Your AC Unit in Florida
          </h1>
          <p className="text-blue-200 text-sm">
            By <span className="font-semibold text-white">Chris Grullon</span>, <span className="text-blue-200">Owner &amp; EPA 608 Certified HVAC Technician</span> &mdash; North East Heating And Cooling, Tampa Bay, FL
          </p>
        </div>
      </header>

      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="flex flex-col lg:flex-row gap-10">
          {/* Main Content */}
          <article className="flex-1 min-w-0">
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 md:p-10">

              <p className="text-gray-700 text-lg leading-relaxed mb-8">
                Florida homeowners put their air conditioning systems through more stress than almost anyone else in the country.
                With sweltering heat from March through November, near-constant humidity, and a cooling season that stretches for
                most of the year, your AC unit works harder — and wears out faster — than systems in cooler climates. Knowing when
                to stop repairing and start replacing can save you thousands of dollars and countless headaches.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">1. Your Unit Is 10–15 Years Old</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                The average lifespan of a central air conditioning system in the United States is 15–20 years. In Florida,
                however, that number drops significantly. Because units here run nearly year-round, the wear and tear accumulates
                much faster. Most Tampa Bay HVAC professionals recommend evaluating replacement when a system hits the 10–12 year
                mark, especially if repairs are becoming more frequent.
              </p>
              <p className="text-gray-700 leading-relaxed mb-6">
                Older systems also struggle to keep up with modern efficiency standards, meaning you're paying more to cool your
                home than you should be. If your unit is a decade old or more, it's worth having a professional assess whether
                repair or replacement makes more financial sense.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">2. Your Energy Bills Keep Climbing</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                One of the most telling signs that your AC is failing is a steady increase in your monthly electricity bills —
                even when your usage habits haven't changed. As AC systems age, their efficiency degrades. Components wear down,
                coils lose their ability to transfer heat effectively, and the system must run longer to achieve the same result.
              </p>
              <p className="text-gray-700 leading-relaxed mb-6">
                Compare your current summer bills to those from three to five years ago. If you're seeing 20–30% increases without
                a corresponding rise in utility rates, your AC system is likely the culprit. A new, high-efficiency unit can
                reduce cooling costs by 30–50% compared to an older, degraded system.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">3. Repairs Are Becoming Frequent and Costly</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Every AC unit needs occasional repairs — that's normal. But when you're calling a technician multiple times per
                year, or facing repair bills that approach the cost of a new system, it's time to do the math. A common rule of
                thumb in the HVAC industry is the "5,000 rule": multiply the age of the unit by the repair cost. If the result
                exceeds $5,000, replacement is typically the smarter investment.
              </p>
              <p className="text-gray-700 leading-relaxed mb-6">
                For example, if your 12-year-old unit needs a $600 compressor repair, 12 × $600 = $7,200 — well above the
                threshold. That's a strong signal to replace rather than repair.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">4. Your System Uses R-22 Refrigerant</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                If your AC system was manufactured before 2010, there's a good chance it uses R-22 refrigerant (also known as
                Freon). The U.S. Environmental Protection Agency phased out R-22 production and import in 2020 due to its
                ozone-depleting properties. As a result, the remaining supply has become extremely scarce and expensive.
              </p>
              <p className="text-gray-700 leading-relaxed mb-6">
                Recharging an R-22 system can cost $50–$150 per pound of refrigerant — and a standard system holds 5–15 pounds.
                If your aging unit has a refrigerant leak, the cost to recharge it may far exceed the value of keeping the
                system running. Modern systems use R-410A or R-32 refrigerants, which are more efficient and readily available.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">5. Uneven Cooling Throughout Your Home</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Does one room feel like a freezer while another stays stuffy and warm? Uneven cooling is often a symptom of an
                aging or undersized AC system that can no longer distribute conditioned air effectively. It can also indicate
                ductwork problems, but when paired with other signs on this list, it often points to a failing system.
              </p>
              <p className="text-gray-700 leading-relaxed mb-6">
                A properly sized, properly installed new AC system — combined with a ductwork inspection — will deliver
                consistent, even comfort throughout every room in your Tampa Bay home.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">6. You're Struggling With Humidity Problems</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                In Tampa Bay, humidity control isn't optional — it's essential. A properly functioning AC system does more than
                cool the air; it dehumidifies it. When an AC system is failing or improperly sized, it often loses its ability
                to remove moisture from the air effectively, leaving your home feeling clammy and uncomfortable.
              </p>
              <p className="text-gray-700 leading-relaxed mb-6">
                Excess indoor humidity creates ideal conditions for mold and mildew growth, which poses serious health risks
                and can cause significant structural damage. If your home consistently feels muggy despite the AC running,
                and a service call doesn't resolve the issue, a system replacement — potentially with a dedicated whole-home
                dehumidifier — may be the right solution.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Making the Decision: Repair or Replace?</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                No single factor should drive the decision to replace your AC system — it's the combination of signs that tells
                the full story. If your unit is older than 10 years, your bills are rising, repairs are piling up, and your
                home isn't as comfortable as it used to be, replacement is almost certainly the right move.
              </p>
              <p className="text-gray-700 leading-relaxed mb-6">
                The good news: today's AC systems are dramatically more efficient than units from a decade ago. SEER ratings
                of 16–20 are now standard, compared to SEER 8–10 for older units. The long-term energy savings often make a
                new installation cost-neutral within 3–5 years — and in Florida's climate, sometimes faster.
              </p>

              {/* Related Links */}
              <div className="mt-10 pt-8 border-t border-gray-200">
                <h3 className="text-lg font-bold text-gray-900 mb-4">Related Services</h3>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link
                    href="/residential/hvac-installation-tampa-fl"
                    className="inline-flex items-center gap-2 text-blue-600 font-semibold hover:text-blue-800 transition-colors"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                    HVAC Installation &amp; Replacement in Tampa
                  </Link>
                  <Link
                    href="/residential/hvac-service-tampa"
                    className="inline-flex items-center gap-2 text-blue-600 font-semibold hover:text-blue-800 transition-colors"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                    HVAC Repair Services in Tampa
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
              <p className="text-blue-100 text-sm leading-relaxed mb-5">
                Not sure whether to repair or replace? Our Tampa Bay HVAC experts will give you an honest assessment.
                No pressure, no upsells.
              </p>
              <a
                href="tel:8132916146"
                className="block w-full text-center bg-white text-blue-800 font-bold py-3 rounded-lg hover:bg-blue-50 transition-colors text-lg mb-3"
              >
                Call (813) 291-6146
              </a>
              <p className="text-blue-200 text-xs text-center">Same-day service available</p>
            </div>

            {/* Related Posts */}
            <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-4">More HVAC Tips</h3>
              <ul className="space-y-3">
                <li>
                  <Link href="/blog/top-signs-hvac-system-needs-repair" className="text-blue-600 hover:text-blue-800 text-sm font-medium leading-snug transition-colors">
                    Top Signs Your HVAC System Needs Repair
                  </Link>
                </li>
                <li>
                  <Link href="/blog/benefits-of-regular-hvac-maintenance-florida" className="text-blue-600 hover:text-blue-800 text-sm font-medium leading-snug transition-colors">
                    Benefits of Regular HVAC Maintenance in Florida
                  </Link>
                </li>
                <li>
                  <Link href="/blog/best-energy-efficient-ac-systems-florida" className="text-blue-600 hover:text-blue-800 text-sm font-medium leading-snug transition-colors">
                    Best Energy-Efficient AC Systems for Florida
                  </Link>
                </li>
              </ul>
            </div>

            {/* Service Links */}
            <div className="bg-gray-50 rounded-2xl border border-gray-200 p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-4">Our Services</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/residential/hvac-service-tampa" className="text-gray-700 hover:text-blue-700 text-sm transition-colors">
                    → HVAC Repair &amp; Service
                  </Link>
                </li>
                <li>
                  <Link href="/residential/hvac-installation-tampa-fl" className="text-gray-700 hover:text-blue-700 text-sm transition-colors">
                    → HVAC Installation &amp; Replacement
                  </Link>
                </li>
                <li>
                  <Link href="/residential" className="text-gray-700 hover:text-blue-700 text-sm transition-colors">
                    → All Residential Services
                  </Link>
                </li>
              </ul>
            </div>
          </aside>
        </div>
      </div>

      {/* Bottom CTA Banner */}
      <section className="bg-blue-50 border-y border-blue-100 py-12 px-4">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-1">Ready to Replace Your AC?</h2>
            <p className="text-gray-600">
              North East Heating And Cooling installs energy-efficient systems across Tampa Bay.{' '}
              <Link href="/residential/hvac-installation-tampa-fl" className="text-blue-600 font-semibold hover:underline">
                View installation services →
              </Link>
            </p>
          </div>
          <a
            href="tel:8132916146"
            className="shrink-0 inline-flex items-center justify-center px-7 py-3 bg-red-700 text-white font-bold rounded-lg hover:bg-[#0f1620] transition-colors text-lg whitespace-nowrap"
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
            headline: 'How to Know When to Replace Your AC Unit in Florida',
            description: "Learn the top signs it's time to replace your AC unit in Florida. Expert advice from North East Heating And Cooling in Tampa Bay.",
            datePublished: '2024-12-15',
            dateModified: '2024-12-15',
            url: 'https://northeastheatingcooling.com/blog/when-to-replace-your-ac-unit-florida',
            mainEntityOfPage: 'https://northeastheatingcooling.com/blog/when-to-replace-your-ac-unit-florida',
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
              { '@type': 'ListItem', position: 3, name: 'How to Know When to Replace Your AC Unit in Florida' },
            ],
          }),
        }}
      />
    </main>
  )
}
