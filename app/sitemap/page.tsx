import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Sitemap | North East Heating & Cooling',
  description: 'Full sitemap for North East Heating & Cooling — HVAC services, service areas, and resources for Tampa Bay homeowners.',
}

const sections = [
  {
    title: 'Main Pages',
    links: [
      { label: 'Home', href: '/' },
      { label: 'About Us', href: '/about' },
      { label: 'Services Overview', href: '/services' },
      { label: 'Customer Reviews', href: '/reviews' },
      { label: 'Contact', href: '/contact' },
    ],
  },
  {
    title: 'Residential Services',
    links: [
      { label: 'Residential HVAC Overview', href: '/residential' },
      { label: 'HVAC Service & Repair Tampa', href: '/residential/hvac-service-tampa' },
      { label: 'AC Installation Tampa, FL', href: '/residential/hvac-installation-tampa-fl' },
      { label: 'Air Duct Repair Tampa', href: '/residential/air-duct-repair-tampa' },
      { label: 'Exhaust Fan Repair Tampa', href: '/residential/exhaust-fan-repair-tampa' },
      { label: 'Water Heater Repair Tampa', href: '/residential/water-heater-repair-tampa' },
    ],
  },
  {
    title: 'Commercial Services',
    links: [
      { label: 'Commercial HVAC Overview', href: '/commercial' },
      { label: 'Commercial HVAC Service Tampa', href: '/commercial/hvac-service-tampa' },
      { label: 'Commercial HVAC Installation Tampa', href: '/commercial/hvac-installation-tampa-fl' },
      { label: 'Commercial Air Duct Repair Tampa', href: '/commercial/air-duct-repair-tampa' },
      { label: 'Commercial Exhaust Fan Repair Tampa', href: '/commercial/exhaust-fan-repair-tampa' },
      { label: 'Commercial Water Heater Repair Tampa', href: '/commercial/water-heater-repair-tampa' },
    ],
  },
  {
    title: 'Service Areas',
    links: [
      { label: 'All Service Areas', href: '/service-areas' },
      { label: 'Tampa, FL', href: '/service-areas/tampa-fl' },
      { label: 'Brandon, FL', href: '/service-areas/brandon-fl' },
      { label: 'Riverview, FL', href: '/service-areas/riverview-fl' },
      { label: 'Wesley Chapel, FL', href: '/service-areas/wesley-chapel-fl' },
      { label: 'Clearwater, FL', href: '/service-areas/clearwater-fl' },
      { label: 'St. Petersburg, FL', href: '/service-areas/st-petersburg-fl' },
      { label: 'Largo, FL', href: '/service-areas/largo-fl' },
      { label: 'Palm Harbor, FL', href: '/service-areas/palm-harbor-fl' },
      { label: 'Pinellas Park, FL', href: '/service-areas/pinellas-park-fl' },
      { label: 'Carrollwood, FL', href: '/service-areas/carrollwood-fl' },
      { label: 'Lutz, FL', href: '/service-areas/lutz-fl' },
      { label: 'Land O\' Lakes, FL', href: '/service-areas/land-o-lakes-fl' },
      { label: 'Odessa, FL', href: '/service-areas/odessa-fl' },
      { label: 'New Port Richey, FL', href: '/service-areas/new-port-richey-fl' },
      { label: 'Apollo Beach, FL', href: '/service-areas/apollo-beach-fl' },
      { label: 'Sun City Center, FL', href: '/service-areas/sun-city-center-fl' },
      { label: 'Ruskin, FL', href: '/service-areas/ruskin-fl' },
      { label: 'Gibsonton, FL', href: '/service-areas/gibsonton-fl' },
      { label: 'Valrico, FL', href: '/service-areas/valrico-fl' },
      { label: 'Plant City, FL', href: '/service-areas/plant-city-fl' },
    ],
  },
  {
    title: 'Blog & Resources',
    links: [
      { label: 'HVAC Blog', href: '/blog' },
      { label: 'Top Signs Your HVAC System Needs Repair', href: '/blog/top-signs-hvac-system-needs-repair' },
      { label: 'How to Improve Indoor Air Quality in Tampa', href: '/blog/how-to-improve-indoor-air-quality-tampa' },
      { label: 'When to Replace Your AC Unit in Florida', href: '/blog/when-to-replace-your-ac-unit-florida' },
      { label: "Benefits of Regular HVAC Maintenance in Florida's Climate", href: '/blog/benefits-of-regular-hvac-maintenance-florida' },
      { label: 'Best Energy-Efficient AC Systems for Florida Homeowners', href: '/blog/best-energy-efficient-ac-systems-florida' },
      { label: 'R454B and R32 Refrigerants: Efficiency & Safety Guide', href: '/blog/new-refrigerants-r454b-r32-efficiency-safety' },
    ],
  },
]

export default function SitemapPage() {
  return (
    <main className="bg-white">
      {/* Header */}
      <section className="bg-[#0f1620] text-white py-14 px-4">
        <div className="max-w-5xl mx-auto">
          <p className="text-blue-300 text-sm font-semibold uppercase tracking-widest mb-3">Navigation</p>
          <h1 className="text-4xl font-extrabold">Sitemap</h1>
          <p className="mt-3 text-blue-200 text-base max-w-xl">
            Every page on northeastheatingcooling.com, organized by category.
          </p>
        </div>
      </section>

      {/* Sitemap grid */}
      <section className="py-14 px-4">
        <div className="max-w-5xl mx-auto grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {sections.map((section) => (
            <div key={section.title}>
              <h2 className="text-xs font-bold uppercase tracking-widest text-blue-700 mb-4 border-b border-blue-100 pb-2">
                {section.title}
              </h2>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-gray-700 hover:text-blue-700 text-sm transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-blue-50 border-y border-blue-100 py-10 px-4">
        <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <p className="font-bold text-gray-900 text-lg mb-1">Need HVAC service in Tampa Bay?</p>
            <p className="text-gray-600 text-sm">
              Call us or{' '}
              <Link href="/contact" className="text-blue-600 font-semibold hover:underline">
                request service online
              </Link>{' '}
              — same-day appointments available.
            </p>
          </div>
          <a
            href="tel:8132916146"
            className="shrink-0 inline-flex items-center justify-center px-7 py-3 bg-red-700 text-white font-bold rounded-lg hover:bg-[#0f1620] transition-colors text-lg whitespace-nowrap"
          >
            (813) 291-6146
          </a>
        </div>
      </section>
    </main>
  )
}
