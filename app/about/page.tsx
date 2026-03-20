import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'About North East Heating & Cooling | Tampa Bay HVAC Company',
  description:
    'Learn about North East Heating & Cooling — a locally owned Tampa Bay HVAC company with 10+ years of experience, NATE-certified technicians, and a commitment to honest, affordable service.',
}

// ─── SVG Icons ────────────────────────────────────────────────────────────────

const CheckIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="w-5 h-5 text-blue-600 shrink-0"
    aria-hidden="true"
  >
    <path d="M20 6 9 17l-5-5" />
  </svg>
)

const StarIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    className="w-5 h-5 text-yellow-400"
    aria-hidden="true"
  >
    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
  </svg>
)

const PhoneIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="w-5 h-5"
    aria-hidden="true"
  >
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.4 2 2 0 0 1 3.6 1.22h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L7.91 8.8a16 16 0 0 0 6.29 6.29l.95-.95a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
  </svg>
)

const ShieldIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="w-8 h-8 text-blue-600"
    aria-hidden="true"
  >
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
  </svg>
)

const HeartIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="w-8 h-8 text-blue-600"
    aria-hidden="true"
  >
    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
  </svg>
)

const ThumbsUpIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="w-8 h-8 text-blue-600"
    aria-hidden="true"
  >
    <path d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3H14z" />
    <path d="M7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3" />
  </svg>
)

const ClockIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="w-8 h-8 text-blue-600"
    aria-hidden="true"
  >
    <circle cx="12" cy="12" r="10" />
    <polyline points="12 6 12 12 16 14" />
  </svg>
)

const AwardIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="w-8 h-8 text-blue-600"
    aria-hidden="true"
  >
    <circle cx="12" cy="8" r="6" />
    <path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11" />
  </svg>
)

// ─── Data ─────────────────────────────────────────────────────────────────────

const stats = [
  { value: '10+', label: 'Years in Business' },
  { value: '5,000+', label: 'Happy Customers' },
  { value: '5.0', label: 'Star Rating' },
  { value: '24/7', label: 'Emergency Service' },
]

const differentiators = [
  'NATE-Certified technicians on every job',
  'Licensed & fully insured in Florida',
  'Transparent, upfront pricing — no hidden fees',
  '5-star rated on Google by Tampa Bay homeowners',
  'Same-day and next-day appointments available',
  'Satisfaction guarantee on all work performed',
  'Background-checked, uniformed professionals',
  'Serving residential and commercial customers',
]

const credentials = [
  {
    title: 'NATE Certified',
    description:
      'Our technicians hold NATE (North American Technician Excellence) certification — the highest industry standard for HVAC professionals.',
  },
  {
    title: 'EPA 608 Certified',
    description:
      'Certified to handle refrigerants safely and legally in compliance with EPA Section 608 regulations.',
  },
  {
    title: 'Florida Licensed Contractor',
    description:
      'Fully licensed as an HVAC contractor in the State of Florida, ensuring your home and warranty protections remain valid.',
  },
  {
    title: 'Fully Insured',
    description:
      "Comprehensive general liability and workers' compensation insurance protects you and our team on every service call.",
  },
]

const teamValues = [
  {
    Icon: ShieldIcon,
    title: 'Integrity First',
    description:
      'We never recommend repairs or replacements you don\'t need. Our honest assessments have earned us thousands of loyal customers across Tampa Bay.',
  },
  {
    Icon: HeartIcon,
    title: 'Family Values',
    description:
      'As a locally owned business, we treat every customer like a neighbor — because most of our customers truly are neighbors right here in the Tampa Bay area.',
  },
  {
    Icon: ThumbsUpIcon,
    title: 'Quality Work',
    description:
      'Every installation and repair is performed to manufacturer specs and Florida building codes. We stand behind our work with a satisfaction guarantee.',
  },
  {
    Icon: ClockIcon,
    title: '24/7 Availability',
    description:
      'HVAC emergencies don\'t wait for business hours. Our team is available around the clock for emergency service so you\'re never left without comfort.',
  },
]

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function AboutPage() {
  return (
    <>
      {/* ── Hero ──────────────────────────────────────────────────────────── */}
      <section className="hero-gradient text-white section-padding">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-blue-200 font-semibold text-sm uppercase tracking-widest mb-3">
            Tampa Bay&apos;s Trusted HVAC Experts
          </p>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight mb-5">
            About North East Heating &amp; Cooling
          </h1>
          <p className="text-blue-100 text-lg sm:text-xl max-w-3xl mx-auto leading-relaxed">
            Locally owned and operated in Tampa, FL, we&apos;ve been keeping families
            and businesses comfortable throughout Tampa Bay for over a decade.
          </p>
        </div>
      </section>

      {/* ── Stats ─────────────────────────────────────────────────────────── */}
      <section className="bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {stats.map(({ value, label }) => (
              <div key={label} className="flex flex-col items-center">
                <span className="text-4xl sm:text-5xl font-extrabold text-blue-700 leading-none">
                  {value}
                </span>
                <span className="text-gray-500 text-sm font-medium mt-1.5">
                  {label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Company Story ─────────────────────────────────────────────────── */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-blue-600 font-semibold text-sm uppercase tracking-widest mb-2">
                Our Story
              </p>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-5 leading-tight">
                10+ Years Serving the Tampa Bay Community
              </h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  North East Heating &amp; Cooling was founded right here in Tampa with
                  one goal: to provide Tampa Bay residents and businesses with the
                  same honest, high-quality HVAC service that we&apos;d want for our
                  own families. What started as a small operation has grown into one
                  of the most trusted names in Tampa Bay HVAC.
                </p>
                <p>
                  Over the past decade, we&apos;ve built our reputation one service
                  call at a time — showing up on time, diagnosing problems correctly,
                  and fixing them right the first time. We&apos;ve served more than 5,000
                  customers from Tampa to Clearwater, Brandon to Wesley Chapel.
                </p>
                <p>
                  As a locally owned and operated business, we&apos;re deeply rooted in
                  the Tampa Bay community. Our technicians live and work in the same
                  neighborhoods we serve, and that sense of community responsibility
                  drives everything we do. When you call us, you&apos;re not calling a
                  distant call center — you&apos;re calling your neighbors.
                </p>
                <p>
                  We built this company on family values: honesty, hard work, and
                  genuine care for the people we serve. Those values haven&apos;t
                  changed since day one, and they never will.
                </p>
              </div>
            </div>

            {/* Visual accent panel */}
            <div className="bg-blue-50 rounded-2xl p-8 border border-blue-100">
              <h3 className="text-xl font-bold text-gray-900 mb-6">
                Our Mission
              </h3>
              <p className="text-gray-600 leading-relaxed mb-6">
                To deliver reliable, honest, and affordable HVAC service to every
                home and business in Tampa Bay — treating every customer with the
                respect and transparency they deserve.
              </p>
              <ul className="space-y-3">
                {[
                  'Honest diagnoses, honest prices',
                  'Fast response times — same day available',
                  'Durable repairs that last',
                  'Clear communication throughout the job',
                  'Respectful, professional technicians',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckIcon />
                    <span className="text-gray-700 text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ── Why We're Different ───────────────────────────────────────────── */}
      <section className="section-padding bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-blue-600 font-semibold text-sm uppercase tracking-widest mb-2">
              The North East Difference
            </p>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 leading-tight">
              Why Tampa Bay Chooses Us
            </h2>
            <p className="text-gray-500 mt-3 max-w-2xl mx-auto">
              We don&apos;t just fix HVAC systems — we build long-term relationships
              with our customers based on trust and consistent quality.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-3 max-w-3xl mx-auto">
            {differentiators.map((item) => (
              <div
                key={item}
                className="flex items-start gap-3 bg-white rounded-xl p-4 shadow-sm border border-gray-100"
              >
                <CheckIcon />
                <span className="text-gray-700 text-sm font-medium">{item}</span>
              </div>
            ))}
          </div>

          {/* 5-star strip */}
          <div className="mt-10 flex justify-center">
            <div className="inline-flex items-center gap-2 bg-yellow-50 border border-yellow-200 rounded-full px-6 py-3">
              {Array.from({ length: 5 }).map((_, i) => (
                <StarIcon key={i} />
              ))}
              <span className="text-yellow-800 font-bold text-sm ml-1">
                5.0 Stars — Hundreds of Verified Reviews
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* ── Our Team ──────────────────────────────────────────────────────── */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-blue-600 font-semibold text-sm uppercase tracking-widest mb-2">
              The People Behind the Work
            </p>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 leading-tight">
              Meet Our Team
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {teamValues.map(({ Icon, title, description }) => (
              <div
                key={title}
                className="text-center p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-50 rounded-2xl mb-4">
                  <Icon />
                </div>
                <h3 className="font-bold text-gray-900 text-base mb-2">{title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{description}</p>
              </div>
            ))}
          </div>

          <div className="mt-10 bg-blue-50 rounded-2xl p-8 border border-blue-100 max-w-3xl mx-auto text-center">
            <p className="text-gray-700 leading-relaxed">
              Every North East Heating &amp; Cooling technician undergoes rigorous
              background checks, drug screening, and ongoing technical training.
              We hire professionals who share our values — people who take pride in
              their craft and genuinely care about the customers they serve. When
              one of our techs arrives at your door, you can expect clean
              uniforms, a friendly attitude, and expert knowledge.
            </p>
          </div>
        </div>
      </section>

      {/* ── Certifications ────────────────────────────────────────────────── */}
      <section className="section-padding bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-blue-600 font-semibold text-sm uppercase tracking-widest mb-2">
              Credentials &amp; Certifications
            </p>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 leading-tight">
              Qualified, Certified &amp; Insured
            </h2>
            <p className="text-gray-500 mt-3 max-w-xl mx-auto">
              Our certifications aren&apos;t just plaques on the wall — they represent
              a commitment to excellence and protecting you, our customer.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {credentials.map(({ title, description }) => (
              <div
                key={title}
                className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:border-blue-200 transition-colors"
              >
                <div className="inline-flex items-center justify-center w-12 h-12 bg-blue-600 rounded-xl mb-4">
                  <AwardIcon />
                </div>
                <h3 className="font-bold text-gray-900 text-base mb-2">{title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Service Commitment ────────────────────────────────────────────── */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="bg-blue-700 rounded-2xl p-8 text-white">
              <h2 className="text-2xl sm:text-3xl font-extrabold mb-4 leading-tight">
                Our Service Commitment to You
              </h2>
              <div className="space-y-4 text-blue-100 text-sm leading-relaxed">
                <p>
                  <strong className="text-white">24/7 Emergency Response:</strong>{' '}
                  HVAC emergencies don&apos;t wait for convenient times. We&apos;re
                  available around the clock — nights, weekends, and holidays — to
                  get your system back up and running quickly.
                </p>
                <p>
                  <strong className="text-white">Fast Response Times:</strong>{' '}
                  We respect your time. That&apos;s why we offer same-day and next-day
                  appointments and always arrive on time within our service windows.
                </p>
                <p>
                  <strong className="text-white">Guaranteed Work:</strong>{' '}
                  We stand behind every repair and installation we perform. If
                  something isn&apos;t right after we&apos;ve finished the job, we&apos;ll make it
                  right — period.
                </p>
                <p>
                  <strong className="text-white">Upfront Pricing:</strong>{' '}
                  You&apos;ll always know the cost before we start. No surprise charges,
                  no hidden fees — just honest, transparent pricing.
                </p>
              </div>
            </div>

            <div>
              <p className="text-blue-600 font-semibold text-sm uppercase tracking-widest mb-2">
                Ready to Experience the Difference?
              </p>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-5 leading-tight">
                Let&apos;s Take Care of Your HVAC System
              </h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                Whether you need a quick repair, a full system replacement, or
                routine maintenance, North East Heating &amp; Cooling is ready to
                help. Join the thousands of satisfied customers throughout Tampa
                Bay who trust us with their home comfort.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <a
                  href="tel:8132916146"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-xl transition-colors shadow-sm text-base"
                >
                  <PhoneIcon />
                  (813) 291-6146
                </a>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center px-6 py-3.5 border-2 border-blue-600 text-blue-700 hover:bg-blue-50 font-bold rounded-xl transition-colors text-base"
                >
                  Get a Free Quote
                </Link>
              </div>
              <p className="text-gray-400 text-xs mt-4">
                Mon–Fri 7am–7pm &bull; Sat 8am–5pm &bull; 24/7 Emergency
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
