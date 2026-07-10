// app/sitemap.ts
import { MetadataRoute } from 'next'

const baseUrl = 'https://manikantatours.com'

const pages = [
  { path: '', priority: 1.0, changefreq: 'weekly' },
  { path: '/about', priority: 0.9, changefreq: 'monthly' },
  { path: '/contact', priority: 0.9, changefreq: 'monthly' },
  { path: '/faqs', priority: 0.8, changefreq: 'weekly' },
  { path: '/gallery', priority: 0.7, changefreq: 'monthly' },
  { path: '/reviews', priority: 0.7, changefreq: 'weekly' },
  { path: '/transportation', priority: 0.8, changefreq: 'weekly' },
  { path: '/transportation/buses', priority: 0.8, changefreq: 'weekly' },
  { path: '/transportation/cars', priority: 0.8, changefreq: 'weekly' },
  { path: '/help', priority: 0.5, changefreq: 'monthly' },
  { path: '/policies', priority: 0.5, changefreq: 'monthly' },
  { path: '/cancellation-policy', priority: 0.5, changefreq: 'monthly' },
  { path: '/refund-policy', priority: 0.5, changefreq: 'monthly' },
  { path: '/terms', priority: 0.5, changefreq: 'monthly' },
]

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date()
  
  return pages.map((page) => ({
    url: `${baseUrl}${page.path}`,
    lastModified,
    changeFrequency: page.changefreq as any,
    priority: page.priority,
  }))
}