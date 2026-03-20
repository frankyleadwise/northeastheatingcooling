import type { MetadataRoute } from 'next'

const BASE_URL = 'https://www.northeastheatingcooling.com'

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date()

  // ── Static top-level pages ────────────────────────────────────────────────
  const staticPages: MetadataRoute.Sitemap = [
    {
      url: `${BASE_URL}/`,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 1.0,
    },
    {
      url: `${BASE_URL}/about`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/services`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/contact`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
  ]

  // ── Residential pages ─────────────────────────────────────────────────────
  const residentialSlugs = [
    'hvac-service-tampa',
    'hvac-installation-tampa-fl',
    'air-duct-repair-tampa',
    'exhaust-fan-repair-tampa',
    'water-heater-repair-tampa',
  ]

  const residentialPages: MetadataRoute.Sitemap = [
    {
      url: `${BASE_URL}/residential`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    ...residentialSlugs.map((slug) => ({
      url: `${BASE_URL}/residential/${slug}`,
      lastModified: now,
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    })),
  ]

  // ── Commercial pages ──────────────────────────────────────────────────────
  const commercialSlugs = [
    'hvac-service-tampa',
    'hvac-installation-tampa-fl',
    'air-duct-repair-tampa',
    'exhaust-fan-repair-tampa',
    'water-heater-repair-tampa',
  ]

  const commercialPages: MetadataRoute.Sitemap = [
    {
      url: `${BASE_URL}/commercial`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    ...commercialSlugs.map((slug) => ({
      url: `${BASE_URL}/commercial/${slug}`,
      lastModified: now,
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    })),
  ]

  // ── Service area pages ────────────────────────────────────────────────────
  const citySlugsList = [
    'tampa-fl',
    'brandon-fl',
    'riverview-fl',
    'wesley-chapel-fl',
    'clearwater-fl',
    'st-petersburg-fl',
    'largo-fl',
    'palm-harbor-fl',
    'pinellas-park-fl',
    'carrollwood-fl',
    'lutz-fl',
    'land-o-lakes-fl',
    'odessa-fl',
    'new-port-richey-fl',
    'apollo-beach-fl',
    'sun-city-center-fl',
    'ruskin-fl',
    'gibsonton-fl',
    'valrico-fl',
    'plant-city-fl',
  ]

  const serviceAreaPages: MetadataRoute.Sitemap = [
    {
      url: `${BASE_URL}/service-areas`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    ...citySlugsList.map((slug) => ({
      url: `${BASE_URL}/service-areas/${slug}`,
      lastModified: now,
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    })),
  ]

  // ── Blog pages ────────────────────────────────────────────────────────────
  const blogSlugs = [
    'benefits-of-regular-hvac-maintenance-florida',
    'best-energy-efficient-ac-systems-florida',
    'how-to-improve-indoor-air-quality-tampa',
    'top-signs-hvac-system-needs-repair',
    'when-to-replace-your-ac-unit-florida',
  ]

  const blogPages: MetadataRoute.Sitemap = [
    {
      url: `${BASE_URL}/blog`,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 0.7,
    },
    ...blogSlugs.map((slug) => ({
      url: `${BASE_URL}/blog/${slug}`,
      lastModified: now,
      changeFrequency: 'monthly' as const,
      priority: 0.6,
    })),
  ]

  return [
    ...staticPages,
    ...residentialPages,
    ...commercialPages,
    ...serviceAreaPages,
    ...blogPages,
  ]
}
