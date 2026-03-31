import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Customer Reviews | North East Heating & Cooling Tampa Bay',
  description:
    'Read real 5-star Google reviews from North East Heating & Cooling customers across Tampa Bay. See why homeowners choose Chris Grullon and his team for HVAC repair, AC installation, and more.',
  alternates: {
    canonical: '/reviews',
  },
  openGraph: {
    title: 'Customer Reviews | North East Heating & Cooling Tampa Bay',
    description:
      'Real 5-star reviews from Tampa Bay homeowners. Honest, fast, affordable HVAC service from North East Heating & Cooling.',
    url: '/reviews',
    type: 'website',
  },
}

// ── Review data ───────────────────────────────────────────────────────────────

const reviews = [
  {
    name: 'Rose Jackson',
    badge: 'Local Guide · 48 reviews · 69 photos',
    ago: 'a year ago',
    rating: 5,
    text: "We are so happy that Christian was highly recommended to us. Our upstairs unit shut down. One well-known company charged us $300 to research the problem and was to return to complete the job. Christian found a dead lizard had burned out wires that only needed replacement. He replaced the wiring. A new $7,000 unit was not required. His integrity, honesty, professionalism, and patience amazed us. We called a well known Plumber to fix an outdoor faucet that had rusted out, a highly rated company gave us a $600.00 estimate to repair stating that a hole would have to be drilled into the wall, etc. The office manager gave us this estimate after reviewing a picture of the faucet. We called Christian and he offered to come by at no charge to inspect it. He fixed the problem at 1/3 the cost. Seniors risk being ripped off by these companies. This one new to the area is the ABSOLUTE VERY BEST! We bought a yearly HVAC package to have a thorough check up completed as our home was built in 2005. 5 stars, not enough for the service and satisfaction we received.",
  },
  {
    name: 'Mary Hampton',
    badge: 'Local Guide · 24 reviews',
    ago: '7 months ago',
    rating: 5,
    text: "When your a/c is out you want Chris to come out to fix it. He is thorough and skilled. He discovered the problem and checked the whole system to make sure that there was not a secondary problem. My a/c is fixed and cool air is flowing again. Chris' charges were completely reasonable. He offers an annual maintenance contract which I signed up for because after meeting him there's no one I would find who could do a better job. Thank you, CHRIS!",
  },
  {
    name: 'Robert Cowart',
    badge: 'Local Guide · 24 reviews · 1 photo',
    ago: '7 months ago',
    rating: 5,
    text: "Polished and professional — I recently hired North East Heating and Cooling for my annual AC tune-up, along with adding vents in two doorways and a return. From start to finish, their work was outstanding. They even removed all of our existing A/C vents, repainted them white, and made them look brand new. Their workmanship was timely, their pricing fair, and the quality exceptional. I'm thrilled with the results and will absolutely use them again for future needs. Thank you!",
  },
  {
    name: 'Lupe and Micha',
    badge: '8 reviews · 5 photos',
    ago: '7 months ago',
    rating: 5,
    text: "Christian did an amazing job!!! We were not happy that our AC went down in the middle of summer but he was professional, kind and got us back up and running right away. We appreciate everything Christian did and he was super informative. Definitely recommend to all our friends!!",
  },
  {
    name: 'Brandon Garrett',
    badge: '7 reviews',
    ago: '5 months ago',
    rating: 5,
    text: "My ac unit stopped working on a Saturday morning and I called to schedule an appointment. I was so happy that Christian was able to fix my ac unit the same day! Very knowledgeable and professional. He answered all my questions and made sure I understood everything. I would highly recommend this company!",
  },
  {
    name: 'Nelida Rodriguez',
    badge: '8 reviews',
    ago: 'recently',
    rating: 5,
    text: "Chris figured out the issue which required a water heater replacement/installation. He completed it within a few hours and was friendly and professional. Due to his quick service I had water again and my water bill didn't become as big as it could have. Would recommend to everyone!",
  },
]

// ── JSON-LD structured data ────────────────────────────────────────────────────

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'North East Heating & Cooling',
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '5.0',
    reviewCount: '35',
    bestRating: '5',
  },
  review: reviews.map((r) => ({
    '@type': 'Review',
    author: { '@type': 'Person', name: r.name },
    reviewRating: { '@type': 'Rating', ratingValue: r.rating, bestRating: 5 },
    reviewBody: r.text,
  })),
}

// ── Star SVG ──────────────────────────────────────────────────────────────────

const Star = () => (
  <svg className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
  </svg>
)

const GoogleLogo = () => (
  <svg className="w-4 h-4 shrink-0" viewBox="0 0 24 24" aria-hidden="true">
    <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
    <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
    <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z"/>
    <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
  </svg>
)

// ── Page ──────────────────────────────────────────────────────────────────────

export default function ReviewsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <main>
        {/* ── Hero ── */}
        <section
          className="py-20 text-center relative overflow-hidden"
          style={{ background: 'var(--bg)' }}
          aria-label="Reviews hero"
        >
          <div className="absolute inset-0">
            <img
              src="https://images.pexels.com/photos/3875141/pexels-photo-3875141.jpeg?auto=compress&cs=tinysrgb&w=1600"
              alt="Happy Tampa Bay family enjoying comfortable home"
              className="w-full h-full object-cover object-center opacity-10"
              loading="lazy"
            />
          </div>
          <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Google badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6 text-sm font-semibold"
              style={{ background: 'var(--surface-2)', border: '1px solid var(--border)', color: 'var(--muted)' }}>
              <GoogleLogo />
              Verified Google Reviews
            </div>

            <h1 className="text-4xl sm:text-5xl font-extrabold mb-4 tracking-tight" style={{ color: 'var(--text)' }}>
              What Tampa Bay Homeowners Are Saying
            </h1>
            <p className="text-lg mb-8" style={{ color: 'var(--muted)' }}>
              Don&apos;t take our word for it — read real reviews from real customers across Tampa Bay.
            </p>

            {/* Rating summary */}
            <div className="inline-flex flex-col sm:flex-row items-center gap-6 px-8 py-6 rounded-2xl"
              style={{ background: 'var(--surface)', border: '1px solid var(--border)' }}>
              <div className="text-center">
                <p className="text-6xl font-extrabold text-yellow-400 leading-none">5.0</p>
                <div className="flex items-center justify-center gap-0.5 mt-2">
                  {Array.from({ length: 5 }).map((_, i) => <Star key={i} />)}
                </div>
                <p className="text-sm mt-1.5" style={{ color: 'var(--muted)' }}>Average rating</p>
              </div>
              <div className="hidden sm:block w-px h-16 self-center" style={{ background: 'var(--border)' }} />
              <div className="text-center">
                <p className="text-6xl font-extrabold leading-none" style={{ color: 'var(--text)' }}>35</p>
                <p className="text-sm mt-3" style={{ color: 'var(--muted)' }}>Google Reviews</p>
              </div>
              <div className="hidden sm:block w-px h-16 self-center" style={{ background: 'var(--border)' }} />
              <div className="text-center">
                <p className="text-6xl font-extrabold leading-none" style={{ color: 'var(--text)' }}>100<span className="text-3xl">%</span></p>
                <p className="text-sm mt-3" style={{ color: 'var(--muted)' }}>5-star reviews</p>
              </div>
            </div>
          </div>
        </section>

        {/* ── Reviews grid ── */}
        <section
          className="pb-24"
          style={{ background: 'var(--bg)' }}
          aria-label="Customer reviews"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {reviews.map((r, i) => (
                <article
                  key={i}
                  className="flex flex-col rounded-2xl p-7"
                  style={{ background: 'var(--surface)', border: '1px solid var(--border)' }}
                >
                  {/* Header */}
                  <div className="flex items-start justify-between gap-3 mb-4">
                    <div className="flex items-center gap-3">
                      <div
                        className="w-11 h-11 rounded-full flex items-center justify-center text-white font-bold text-base shrink-0"
                        style={{ background: 'var(--accent)' }}
                        aria-hidden="true"
                      >
                        {r.name.charAt(0)}
                      </div>
                      <div>
                        <p className="font-bold text-sm" style={{ color: 'var(--text)' }}>{r.name}</p>
                        <p className="text-xs leading-snug" style={{ color: 'var(--muted)' }}>{r.badge}</p>
                      </div>
                    </div>
                    <GoogleLogo />
                  </div>

                  {/* Stars + date */}
                  <div className="flex items-center gap-2 mb-3">
                    <div className="flex items-center gap-0.5">
                      {Array.from({ length: r.rating }).map((_, s) => <Star key={s} />)}
                    </div>
                    <span className="text-xs" style={{ color: 'var(--muted)' }}>{r.ago}</span>
                  </div>

                  {/* Review text */}
                  <blockquote className="text-sm leading-relaxed flex-1" style={{ color: 'var(--muted)' }}>
                    &ldquo;{r.text}&rdquo;
                  </blockquote>
                </article>
              ))}
            </div>

            {/* CTA */}
            <div className="mt-16 text-center rounded-2xl px-8 py-12"
              style={{ background: 'var(--surface)', border: '1px solid var(--border)' }}>
              <h2 className="text-2xl sm:text-3xl font-bold mb-3" style={{ color: 'var(--text)' }}>
                Ready to Experience 5-Star HVAC Service?
              </h2>
              <p className="mb-8 max-w-xl mx-auto" style={{ color: 'var(--muted)' }}>
                Join the growing list of satisfied Tampa Bay homeowners who trust North East Heating &amp; Cooling.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 text-white font-bold px-8 py-4 rounded-full transition-colors"
                  style={{ background: 'var(--accent)' }}
                >
                  Get a Free Quote
                </Link>
                <a
                  href="tel:8132916146"
                  className="inline-flex items-center justify-center gap-2 font-bold px-8 py-4 rounded-full transition-colors"
                  style={{ background: 'var(--surface-2)', color: 'var(--text)', border: '1px solid var(--border)' }}
                >
                  Call (813) 291-6146
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}
