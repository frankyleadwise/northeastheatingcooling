import type { Metadata } from 'next'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import MobileCallButton from '@/components/MobileCallButton'

export const metadata: Metadata = {
  metadataBase: new URL('https://northeastheatingcooling.com'),
  title: {
    default: 'AC Repair Near Me Tampa | North East Heating And Cooling',
    template: '%s | North East Heating And Cooling',
  },
  description:
    'Same-day AC repair, HVAC installation & maintenance across Tampa Bay, FL. Licensed, certified & insured. 5.0★ on Google with 35 reviews. Call (813) 291-6146.',
  keywords: [
    'ac repair near me',
    'air conditioner repair near me',
    'hvac near me',
    'ac repair tampa',
    'hvac repair tampa',
    'ac installation tampa',
    'ac replacement tampa',
    'ac maintenance tampa',
    'hvac contractor tampa',
    'hvac company tampa',
    'air conditioning service tampa',
    'emergency ac repair tampa',
  ],
  openGraph: {
    siteName: 'North East Heating And Cooling',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
  },
  icons: {
    icon: [
      { url: '/favicon-16x16.png?v=2', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png?v=2', sizes: '32x32', type: 'image/png' },
      { url: '/favicon.ico?v=2' },
    ],
    apple: [
      { url: '/apple-touch-icon.png?v=2', sizes: '180x180', type: 'image/png' },
    ],
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'HVACBusiness',
  '@id': 'https://northeastheatingcooling.com/#business',
  name: 'North East Heating And Cooling',
  alternateName: [
    'North East Heating And Cooling LLC',
    'North East Heating & Cooling',
    'Northeast Heating and Cooling',
    'Northeast HVAC Tampa',
    'NE Heating & Cooling',
  ],
  description:
    'Same-day AC repair, HVAC installation & maintenance across Tampa Bay, FL. Licensed, certified, and insured. 24/7 emergency service.',
  telephone: '+1-813-291-6146',
  email: 'office@northeastheatingcooling.com',
  url: 'https://northeastheatingcooling.com',
  logo: 'https://northeastheatingcooling.com/logo.svg',
  image: 'https://northeastheatingcooling.com/image.png',
  priceRange: '$$',
  currenciesAccepted: 'USD',
  paymentAccepted: 'Cash, Credit Card, Check',
  // Service-area business: technicians travel to customers, no public storefront.
  // Per schema.org guidance, areaServed + serviceArea express coverage without
  // requiring a publishable street address.
  serviceArea: {
    '@type': 'GeoCircle',
    geoMidpoint: {
      '@type': 'GeoCoordinates',
      latitude: 27.9506,
      longitude: -82.4572,
    },
    geoRadius: '40000', // ~25 miles, covers the full Tampa Bay service footprint
  },
  serviceType: [
    'AC Repair',
    'AC Installation',
    'AC Replacement',
    'HVAC Repair',
    'HVAC Installation',
    'HVAC Maintenance',
    'Heating Repair',
    'Heat Pump Installation',
    'Heat Pump Repair',
    'Furnace Repair',
    'Air Duct Repair',
    'Ductless Mini-Split Installation',
    'Emergency AC Repair',
    'Commercial HVAC Service',
  ],
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'HVAC Services',
    itemListElement: [
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'AC Repair',
          description: 'Same-day air conditioner diagnostic and repair across Tampa Bay.',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'AC Installation',
          description: 'New AC and full system installation with lifetime workmanship warranty.',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'HVAC Maintenance',
          description: 'Twice-yearly preventive HVAC tune-ups and maintenance plans.',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Heat Pump Installation',
          description: 'Variable-speed heat pump installation optimized for Florida climate.',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Emergency AC Repair',
          description: '24/7 emergency air conditioner repair service across Tampa Bay.',
        },
      },
    ],
  },
  areaServed: [
    { '@type': 'City', name: 'Tampa' },
    { '@type': 'City', name: 'St. Petersburg' },
    { '@type': 'City', name: 'Clearwater' },
    { '@type': 'City', name: 'Brandon' },
    { '@type': 'City', name: 'Riverview' },
    { '@type': 'City', name: 'Valrico' },
    { '@type': 'City', name: 'Plant City' },
    { '@type': 'City', name: 'Apollo Beach' },
    { '@type': 'City', name: 'Gibsonton' },
    { '@type': 'City', name: 'Ruskin' },
    { '@type': 'City', name: 'Sun City Center' },
    { '@type': 'City', name: 'Carrollwood' },
    { '@type': 'City', name: 'Lutz' },
    { '@type': 'City', name: 'Odessa' },
    { '@type': 'City', name: 'Largo' },
    { '@type': 'City', name: 'Pinellas Park' },
    { '@type': 'City', name: 'Palm Harbor' },
    { '@type': 'City', name: 'Wesley Chapel' },
    { '@type': 'City', name: 'Land O Lakes' },
    { '@type': 'City', name: 'New Port Richey' },
  ],
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: '07:00',
      closes: '19:00',
    },
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Saturday'],
      opens: '08:00',
      closes: '17:00',
    },
  ],
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '5.0',
    reviewCount: '35',
    bestRating: '5',
  },
  contactPoint: [
    {
      '@type': 'ContactPoint',
      telephone: '+1-813-291-6146',
      contactType: 'customer service',
      areaServed: 'US',
      availableLanguage: ['English', 'Spanish'],
      contactOption: 'TollFree',
    },
    {
      '@type': 'ContactPoint',
      telephone: '+1-813-291-6146',
      contactType: 'emergency',
      areaServed: 'US',
      availableLanguage: 'English',
    },
  ],
  sameAs: [
    'https://www.facebook.com/northeastheatingcooling',
    'https://www.google.com/maps/place/North+East+Heating+%26+Cooling',
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen flex flex-col" style={{ background: 'var(--bg)' }}>
        <Header />
        <div className="flex-1">{children}</div>
        <Footer />
        <MobileCallButton />
      </body>
    </html>
  )
}
