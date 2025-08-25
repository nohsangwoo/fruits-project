import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/', '/admin/', '/_next/', '/.next/'],
        crawlDelay: 1,
      },
      {
        userAgent: 'Yeti',
        allow: '/',
        disallow: ['/api/', '/admin/', '/_next/', '/.next/'],
        crawlDelay: 1,
      },
      {
        userAgent: 'Googlebot',
        allow: '/',
        disallow: ['/api/', '/admin/', '/_next/', '/.next/'],
      },
      {
        userAgent: 'Googlebot-Image',
        allow: ['/images/', '/hero-background.jpeg', '/*.jpg', '/*.png', '/*.webp'],
      },
    ],
    sitemap: 'https://www.junilgong.com/sitemap.xml',
    host: 'https://www.junilgong.com',
  }
}
