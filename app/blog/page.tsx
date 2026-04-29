import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'HVAC Tips & Resources for Tampa Bay Homeowners | North East Heating & Cooling',
  description:
    'Expert HVAC tips, guides, and resources for Tampa Bay homeowners. Learn about AC replacement, energy efficiency, indoor air quality, and more from North East Heating & Cooling.',
  openGraph: {
    title: 'HVAC Tips & Resources for Tampa Bay Homeowners | North East Heating & Cooling',
    description:
      'Expert HVAC tips, guides, and resources for Tampa Bay homeowners from North East Heating & Cooling.',
    url: 'https://northeastheatingcooling.com/blog',
    siteName: 'North East Heating & Cooling',
    locale: 'en_US',
    type: 'website',
  },
}

const posts = [
  {
    slug: 'when-to-replace-your-ac-unit-florida',
    title: 'How to Know When to Replace Your AC Unit in Florida',
    excerpt:
      "Florida's brutal heat means your AC works harder than almost anywhere else. Learn the key warning signs that it's time to replace your system before you're left sweating.",
    date: 'December 15, 2024',
    category: 'AC Replacement',
    photo: '5813746',
    photoAlt: 'Family relaxing comfortably at home on sofa',
  },
  {
    slug: 'top-signs-hvac-system-needs-repair',
    title: 'Top Signs Your HVAC System Needs Repair',
    excerpt:
      "Strange noises, warm air, high energy bills — your HVAC system sends signals when something is wrong. Here's what Tampa Bay homeowners should watch for.",
    date: 'January 8, 2025',
    category: 'HVAC Repair',
    photo: '3875141',
    photoAlt: 'Happy family enjoying comfortable home',
  },
  {
    slug: 'how-to-improve-indoor-air-quality-tampa',
    title: 'How to Improve Indoor Air Quality in Tampa Homes',
    excerpt:
      "Tampa's high humidity creates unique indoor air quality challenges. Discover practical steps to reduce allergens, mold risk, and pollutants inside your home.",
    date: 'January 22, 2025',
    category: 'Indoor Air Quality',
    photo: '7534294',
    photoAlt: 'Spacious bright clean living room with fresh air',
  },
  {
    slug: 'benefits-of-regular-hvac-maintenance-florida',
    title: "Benefits of Regular HVAC Maintenance in Florida's Climate",
    excerpt:
      "In Florida, skipping HVAC maintenance isn't just inconvenient — it's costly. Find out how regular tune-ups save money, extend system life, and prevent summer breakdowns.",
    date: 'February 5, 2025',
    category: 'Maintenance',
    photo: '7983215',
    photoAlt: 'Joyful family relaxing together at home',
  },
  {
    slug: 'best-energy-efficient-ac-systems-florida',
    title: 'Best Energy-Efficient AC Systems for Florida Homeowners',
    excerpt:
      'Florida homeowners run their AC year-round, making energy efficiency critical. Explore the top systems, SEER ratings, and incentives that can slash your utility bills.',
    date: 'February 20, 2025',
    category: 'Energy Efficiency',
    photo: '5825527',
    photoAlt: 'Cozy comfortable living room in energy efficient home',
  },
  {
    slug: 'new-refrigerants-r454b-r32-efficiency-safety',
    title: 'R454B and R32: What Tampa Bay Homeowners Need to Know About the New Refrigerants',
    excerpt:
      'R-410A is being phased out. The new R454B and R32 refrigerants offer better efficiency and a lower environmental footprint — but come with new leak safety considerations every homeowner should understand.',
    date: 'March 23, 2026',
    category: 'Refrigerants',
    photo: '7556587',
    photoAlt: 'Person sleeping comfortably in cool bedroom',
  },
  {
    slug: 'heat-pump-vs-ac-florida',
    title: 'Heat Pump vs. AC in Florida: Which Is Better for Tampa Homes?',
    excerpt:
      "Florida's mild winters change the math on heating and cooling. A side-by-side comparison of heat pumps and traditional AC systems for Tampa Bay homes — including federal tax credits and real installed-cost numbers.",
    date: 'April 29, 2026',
    category: 'Buying Guide',
    photo: '8961065',
    photoAlt: 'Heat pump installed outside Tampa Bay home',
  },
  {
    slug: 'ductless-vs-central-ac',
    title: 'Ductless Mini-Split vs. Central AC: Which Is Right for Your Tampa Home?',
    excerpt:
      'Two completely different approaches to cooling your home. When mini-splits make more sense than central AC, when they don\'t, and the hybrid approach most Tampa homeowners overlook.',
    date: 'April 29, 2026',
    category: 'Buying Guide',
    photo: '4078319',
    photoAlt: 'Ductless mini-split unit on wall in modern Tampa home',
  },
  {
    slug: 'how-long-does-ac-last-in-florida',
    title: 'How Long Does an AC Last in Florida? A Tampa HVAC Owner Explains',
    excerpt:
      'The honest answer is 12–15 years, but the difference between a system that lasts 8 years and one that lasts 18 comes down to a handful of factors most homeowners control.',
    date: 'April 29, 2026',
    category: 'HVAC Lifespan',
    photo: '3855962',
    photoAlt: 'HVAC technician inspecting aging AC unit',
  },
]

const categoryColors: Record<string, string> = {
  'AC Replacement': 'bg-red-100 text-red-700',
  'HVAC Repair': 'bg-orange-100 text-orange-700',
  'Indoor Air Quality': 'bg-green-100 text-green-700',
  'Maintenance': 'bg-blue-100 text-blue-700',
  'Energy Efficiency': 'bg-purple-100 text-purple-700',
  'Refrigerants': 'bg-teal-100 text-teal-700',
  'Buying Guide': 'bg-indigo-100 text-indigo-700',
  'HVAC Lifespan': 'bg-amber-100 text-amber-700',
}

export default function BlogPage() {
  return (
    <main className="font-sans">
      {/* Hero */}
      <section className="bg-[#0f1620] text-white py-20 px-4">
        <div className="max-w-5xl mx-auto text-center">
          <p className="text-blue-200 font-semibold text-sm uppercase tracking-widest mb-3">
            North East Heating &amp; Cooling — Tampa Bay, FL
          </p>
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-5">
            HVAC Tips &amp; Resources for Tampa Bay Homeowners
          </h1>
          <p className="text-blue-100 text-lg md:text-xl max-w-3xl mx-auto">
            Expert advice on AC maintenance, energy savings, indoor air quality, and more — written specifically
            for Florida homeowners by the team at North East Heating &amp; Cooling.
          </p>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="bg-gray-50 py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post) => (
              <article
                key={post.slug}
                className="bg-white rounded-2xl shadow-sm border border-gray-100 hover:shadow-lg hover:border-blue-200 transition-all duration-200 flex flex-col overflow-hidden"
              >
                {/* Post Image */}
                <div className="w-full h-48 overflow-hidden relative">
                  <img
                    src={`https://images.pexels.com/photos/${post.photo}/pexels-photo-${post.photo}.jpeg?auto=compress&cs=tinysrgb&w=600`}
                    alt={post.photoAlt}
                    className="w-full h-full object-cover object-center hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                </div>

                <div className="p-6 flex flex-col flex-1">
                  {/* Category + Date */}
                  <div className="flex items-center justify-between mb-3">
                    <span className={`text-xs font-semibold px-2.5 py-1 rounded-full ${categoryColors[post.category] ?? 'bg-gray-100 text-gray-600'}`}>
                      {post.category}
                    </span>
                    <time className="text-xs text-gray-400">{post.date}</time>
                  </div>

                  {/* Title */}
                  <h2 className="text-lg font-bold text-gray-900 mb-3 leading-snug">
                    <Link href={`/blog/${post.slug}`} className="hover:text-blue-700 transition-colors">
                      {post.title}
                    </Link>
                  </h2>

                  {/* Excerpt */}
                  <p className="text-gray-600 text-sm leading-relaxed flex-1 mb-5">{post.excerpt}</p>

                  {/* Read More */}
                  <Link
                    href={`/blog/${post.slug}`}
                    className="inline-flex items-center gap-1.5 text-blue-600 font-semibold text-sm hover:text-blue-800 transition-colors"
                  >
                    Read More
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="bg-[#0f1620] py-14 px-4 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Need HVAC Help in Tampa Bay?</h2>
          <p className="text-blue-100 text-lg mb-8 max-w-2xl mx-auto">
            Our certified technicians are ready to help with repairs, installations, and maintenance. Call us today
            for same-day service.
          </p>
          <a
            href="tel:8132916146"
            className="inline-flex items-center justify-center px-10 py-4 bg-white text-blue-800 font-bold text-xl rounded-lg hover:bg-blue-50 transition-colors shadow-lg"
          >
            Call (813) 291-6146
          </a>
        </div>
      </section>
    </main>
  )
}
