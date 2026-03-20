import type { Metadata } from 'next'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import MobileCallButton from '@/components/MobileCallButton'

export const metadata: Metadata = {
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
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'HVACBusiness',
  name: 'North East Heating & Cooling',
  telephone: '(813) 291-6146',
  email: 'office@northeastheatingcooling.com',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Tampa',
    addressRegion: 'FL',
    postalCode: '33601',
    addressCountry: 'US',
  },
  url: 'https://www.northeastheatingcooling.com',
  priceRange: '$$',
  openingHours: ['Mo-Fr 07:00-19:00', 'Sa 08:00-17:00'],
  areaServed: 'Tampa Bay, FL',
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
      <body className="min-h-screen flex flex-col">
        <Header />
        <div className="flex-1">{children}</div>
        <Footer />
        <MobileCallButton />
      </body>
    </html>
  )
}
