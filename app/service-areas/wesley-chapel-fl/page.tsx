import type { Metadata } from 'next'
import ServiceAreaTemplate from '@/components/ServiceAreaTemplate'
import { CITIES } from '@/lib/cityData'

const city = CITIES['wesley-chapel-fl']

export const metadata: Metadata = {
  title: `HVAC Services in ${city.display}, FL | North East Heating & Cooling`,
  description: city.metaDescription,
  alternates: { canonical: `/service-areas/${city.slug}` },
  openGraph: {
    title: `HVAC Services in ${city.display}, FL | North East Heating & Cooling`,
    description: city.metaDescription,
    url: `/service-areas/${city.slug}`,
    siteName: 'North East Heating & Cooling',
    locale: 'en_US',
    type: 'website',
  },
}

export default function WesleyChapelFlPage() {
  return <ServiceAreaTemplate city={city} />
}
