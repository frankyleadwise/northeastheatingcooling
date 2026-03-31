import type { Metadata } from 'next'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import MobileCallButton from '@/components/MobileCallButton'

export const metadata: Metadata = {
  metadataBase: new URL('https://northeastheatingcooling.com'),
  title: {
    default: 'North East Heating & Cooling | HVAC Services Tampa Bay, FL',
    template: '%s | North East Heating & Cooling',
  },
  description:
    'Expert HVAC repair, AC installation & maintenance in Tampa Bay, FL. Licensed, certified & insured. 24/7 emergency service. Call (813) 291-6146.',
  keywords: [
    'hvac tampa',
    'ac repair tampa',
    'hvac installation tampa',
    'air duct repair tampa',
    'heating and cooling tampa',
    'hvac service tampa fl',
  ],
  openGraph: {
    siteName: 'North East Heating & Cooling',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
  },
  icons: {
    icon: [
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon.ico' },
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'HVACBusiness',
  name: 'North East Heating & Cooling',
  description:
    'Expert HVAC repair, AC installation & maintenance in Tampa Bay, FL. Licensed, licensed & insured. 24/7 emergency service.',
  telephone: '(813) 291-6146',
  email: 'office@northeastheatingcooling.com',
  url: 'https://northeastheatingcooling.com',
  logo: 'https://northeastheatingcooling.com/logo.svg',
  image: 'https://northeastheatingcooling.com/image.png',
  priceRange: '$$',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Tampa',
    addressRegion: 'FL',
    postalCode: '33601',
    addressCountry: 'US',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 27.9506,
    longitude: -82.4572,
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
