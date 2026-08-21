import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: "Getting Powell Middle School's Band Room Cool Again: An Emergency Install Story",
  description:
    "A Friday-afternoon emergency call, three companies, and two new Daikin mini-splits — how North East Heating And Cooling got Powell Middle School's band room cooling again.",
  openGraph: {
    title: "Getting Powell Middle School's Band Room Cool Again: An Emergency Install Story",
    description:
      "A Friday-afternoon emergency call, three companies, and two new Daikin mini-splits — how North East Heating And Cooling got Powell Middle School's band room cooling again.",
    url: 'https://northeastheatingcooling.com/blog/emergency-ac-install-powell-middle-school',
    siteName: 'North East Heating And Cooling',
    locale: 'en_US',
    type: 'article',
    images: [{ url: 'https://northeastheatingcooling.com/powell-crew-hero.jpg' }],
  },
}

export default function PowellMiddleSchoolPage() {
  return (
    <main className="font-sans bg-gray-50 min-h-screen">
      <header className="relative bg-[#0f1620] text-white py-16 px-4 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/powell-crew-hero.jpg"
            alt="North East Heating And Cooling with the Daikin and Atom crews and two new Daikin condensers at Powell Middle School"
            className="w-full h-full object-cover object-center opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0f1620]/85 via-[#0f1620]/65 to-[#0f1620]/45" />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto">
          <div className="flex items-center gap-3 mb-4">
            <span className="bg-orange-500 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide">
              On the Job
            </span>
            <time className="text-slate-300 text-sm">August 21, 2026</time>
          </div>
          <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-extrabold leading-[1.05] mb-5 tracking-[-0.03em]">
            Getting Powell Middle School&apos;s Band Room Cool Again
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

              <p className="text-gray-700 text-lg leading-relaxed mb-8">
                Some jobs are about a house. This one was about a room full of kids who make music &mdash;
                and a band room that had been running hot for years. Here&apos;s the story of a Friday-afternoon
                emergency call, three companies pulling in the same direction, and how Powell Middle School&apos;s
                music program finally got its cooling back.
              </p>

              <figure className="mb-8">
                <img
                  src="/powell-crew.jpg"
                  alt="Chris Grullon of North East Heating And Cooling with the Daikin representative and the electrician from Atom, standing between two new Daikin mini-split condensers"
                  className="w-full max-w-2xl mx-auto rounded-xl shadow-md"
                  loading="lazy"
                />
                <figcaption className="text-center text-sm text-gray-500 mt-3">
                  The crew that made it happen &mdash; North East Heating And Cooling, Daikin, and Atom &mdash; with the two new Daikin condensers.
                </figcaption>
              </figure>

              <h2 className="font-display tracking-[-0.02em] text-2xl font-extrabold text-slate-900 mt-10 mb-4">The call came in on a Friday at 3 PM</h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                If you&apos;ve ever tried to get anything handled right before a weekend, you know 3 PM on a Friday
                is about the worst time for an emergency to land. That&apos;s when the call came in from Powell Middle
                School out in West Hernando County. Their band room &mdash; the hottest room in the building &mdash;
                needed help, and it couldn&apos;t wait until Monday.
              </p>

              <h2 className="font-display tracking-[-0.02em] text-2xl font-extrabold text-slate-900 mt-10 mb-4">A problem three years in the making</h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                The original system dated all the way back to 2008, and it finally gave out a few years ago. The
                trouble was that the fix was never simple: the replacement needed to be larger, and between the
                building&apos;s structural realities and how a school has to budget cooling across every building on
                campus, the band room kept getting pushed to the back of the line.
              </p>

              <figure className="mb-6">
                <img
                  src="/powell-old-unit.jpg"
                  alt="The original 2008 HVAC unit in the Powell Middle School band room that was being replaced"
                  className="w-full max-w-md mx-auto rounded-xl shadow-md"
                  loading="lazy"
                />
                <figcaption className="text-center text-sm text-gray-500 mt-3">
                  The original unit &mdash; manufactured back in 2008 &mdash; that had been struggling to keep the band room cool for years.
                </figcaption>
              </figure>

              <p className="text-gray-700 leading-relaxed mb-6">
                In the meantime, the school leaned on rented temporary units, and the band room stayed
                uncomfortable. It got hot enough that the music teacher was cleared to teach in shorts and a polo
                just to get through the day. The principal had been fighting to get something real done &mdash;
                and this emergency install was the piece that couldn&apos;t wait for the full building-wide overhaul
                still to come.
              </p>

              <h2 className="font-display tracking-[-0.02em] text-2xl font-extrabold text-slate-900 mt-10 mb-4">Three companies, one afternoon</h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                We didn&apos;t pull this off alone, and that&apos;s the part I&apos;m proudest of. On site we had a
                Daikin senior administrator and a Daikin representative, plus a licensed electrician from Atom.
                Together we put in two brand-new Daikin ductless mini-split systems &mdash; mounted, wired, and
                running. That&apos;s a job that only comes together when everybody shows up ready to work: the HVAC
                crew, the manufacturer, and the electrical team, all pointed at the same finish line.
              </p>

              <h2 className="font-display tracking-[-0.02em] text-2xl font-extrabold text-slate-900 mt-10 mb-4">And now the band plays cool</h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                By the time we wrapped, the music program officially had its cooling back &mdash; not another rented
                stopgap, but a real, permanent system built to stand up to Florida heat, holding down the one room
                that needed it most while the school keeps working toward its larger cooling revamp.
              </p>

              <div className="bg-orange-50 border-l-4 border-orange-500 p-6 rounded-r-lg my-8">
                <h3 className="font-bold text-gray-900 mb-3">Credit where it&apos;s due</h3>
                <p className="text-gray-700 leading-relaxed mb-3">
                  This one took a team, and every crew on it earned a shout-out:
                </p>
                <ul className="list-disc pl-6 space-y-1.5 text-gray-700">
                  <li><strong>North East Heating And Cooling</strong> &mdash; install &amp; project lead</li>
                  <li><strong>Daikin</strong> &mdash; equipment and factory support on site</li>
                  <li><strong>Atom</strong> &mdash; electrical</li>
                </ul>
                <p className="text-gray-700 leading-relaxed mt-3">
                  If you&apos;re one of the crews we worked with here &mdash; thank you. Send folks our way and
                  we&apos;ll always do the same.
                </p>
              </div>

              <h2 className="font-display tracking-[-0.02em] text-2xl font-extrabold text-slate-900 mt-10 mb-4">Need cooling that can&apos;t wait?</h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                Whether it&apos;s a home, a business, or a middle school band room, the job&apos;s the same: show up,
                do it right, and leave people more comfortable than we found them. If your space isn&apos;t cooling
                the way it should, call us at <a href="tel:8132916146" className="text-orange-700 font-semibold hover:underline">(813) 291-6146</a> or{' '}
                <Link href="/contact" className="text-orange-700 font-semibold hover:underline">request a free assessment online</Link>.
              </p>

              <h2 className="font-display tracking-[-0.02em] text-2xl font-extrabold text-slate-900 mt-10 mb-4">Related Reading</h2>
              <div className="space-y-3">
                <Link
                  href="/residential/ductless-mini-split-tampa"
                  className="inline-flex items-center gap-2 text-orange-700 font-semibold hover:text-orange-800 transition-colors"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                  Ductless Mini-Split Installation in Tampa
                </Link>
                <br />
                <Link
                  href="/commercial/emergency-hvac-tampa"
                  className="inline-flex items-center gap-2 text-orange-700 font-semibold hover:text-orange-800 transition-colors"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                  Commercial Emergency HVAC in Tampa
                </Link>
                <br />
                <Link
                  href="/blog/ductless-vs-central-ac"
                  className="inline-flex items-center gap-2 text-orange-700 font-semibold hover:text-orange-800 transition-colors"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                  Ductless Mini-Split vs. Central AC
                </Link>
              </div>
            </div>
          </article>

          <aside className="lg:w-80 shrink-0 space-y-6">
            <div className="bg-[#0f1620] text-white rounded-2xl p-7 shadow-lg">
              <h3 className="text-xl font-bold mb-3">Cooling Emergency?</h3>
              <p className="text-slate-300 text-sm leading-relaxed mb-5">
                Homes, businesses, and everything in between. Same-day appointments and free quotes across Tampa Bay.
              </p>
              <a
                href="tel:8132916146"
                className="block w-full text-center bg-white text-[#0f1620] font-bold py-3 rounded-lg hover:bg-[#C8330A]/5 transition-colors text-lg mb-3"
              >
                Call (813) 291-6146
              </a>
              <p className="text-slate-300 text-xs text-center">Free quotes &middot; Same-day appointments</p>
            </div>

            <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-4">More HVAC Guides</h3>
              <ul className="space-y-3">
                <li>
                  <Link href="/blog/ductless-vs-central-ac" className="text-orange-700 hover:text-orange-800 text-sm font-medium leading-snug transition-colors">
                    Ductless Mini-Split vs. Central AC
                  </Link>
                </li>
                <li>
                  <Link href="/blog/heat-pump-vs-ac-florida" className="text-orange-700 hover:text-orange-800 text-sm font-medium leading-snug transition-colors">
                    Heat Pump vs. AC in Florida
                  </Link>
                </li>
                <li>
                  <Link href="/blog/best-energy-efficient-ac-systems-florida" className="text-orange-700 hover:text-orange-800 text-sm font-medium leading-snug transition-colors">
                    Best Energy-Efficient AC Systems
                  </Link>
                </li>
                <li>
                  <Link href="/blog/how-long-does-ac-last-in-florida" className="text-orange-700 hover:text-orange-800 text-sm font-medium leading-snug transition-colors">
                    How Long Does an AC Last in Florida?
                  </Link>
                </li>
              </ul>
            </div>

            <div className="bg-gray-50 rounded-2xl border border-gray-200 p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-4">Our Services</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/residential/ductless-mini-split-tampa" className="text-gray-700 hover:text-orange-700 text-sm transition-colors">
                    → Ductless Mini-Split
                  </Link>
                </li>
                <li>
                  <Link href="/residential/hvac-installation-tampa-fl" className="text-gray-700 hover:text-orange-700 text-sm transition-colors">
                    → HVAC Installation
                  </Link>
                </li>
                <li>
                  <Link href="/commercial/emergency-hvac-tampa" className="text-gray-700 hover:text-orange-700 text-sm transition-colors">
                    → Commercial Emergency HVAC
                  </Link>
                </li>
              </ul>
            </div>
          </aside>
        </div>
      </div>

      <section className="bg-orange-50 border-y border-orange-100 py-12 px-4">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h2 className="font-display tracking-[-0.02em] text-2xl font-extrabold text-slate-900 mb-1">Have a job that can&apos;t wait?</h2>
            <p className="text-gray-600">
              Same-day service across Tampa Bay.{' '}
              <Link href="/contact" className="text-orange-700 font-semibold hover:underline">
                Schedule online →
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
            headline: "Getting Powell Middle School's Band Room Cool Again: An Emergency Install Story",
            description:
              "A Friday-afternoon emergency call, three companies, and two new Daikin mini-splits — how North East Heating And Cooling got Powell Middle School's band room cooling again.",
            image: 'https://northeastheatingcooling.com/powell-crew-hero.jpg',
            datePublished: '2026-08-21',
            dateModified: '2026-08-21',
            url: 'https://northeastheatingcooling.com/blog/emergency-ac-install-powell-middle-school',
            mainEntityOfPage: 'https://northeastheatingcooling.com/blog/emergency-ac-install-powell-middle-school',
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
              { '@type': 'ListItem', position: 3, name: 'Powell Middle School Emergency Install' },
            ],
          }),
        }}
      />
    </main>
  )
}
