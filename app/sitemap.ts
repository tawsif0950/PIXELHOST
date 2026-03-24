import { MetadataRoute } from 'next';
import { seoCountries, seoCities } from '@/lib/seo-data';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.pixelhost.fun';

  const staticRoutes = [
    '',
    '/upload',
    '/docs',
    '/free-image-hosting',
    '/upload-image',
    '/image-hosting-with-direct-link',
    '/bbcode-image-hosting',
    '/blog/best-free-image-hosting-sites-2026',
    '/blog/how-to-upload-image-and-get-direct-link-instantly',
    '/blog/top-postimage-alternatives',
    '/us/free-image-hosting',
    '/uk/image-hosting',
    '/eu/upload-image',
    '/jp/image-hosting'
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'daily' as const,
    priority: route === '' ? 1.0 : 0.8,
  }));

  const countryRoutes1 = seoCountries.map((country) => ({
    url: `${baseUrl}/free-image-hosting-no-signup-${country}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.7,
  }));

  const countryRoutes2 = seoCountries.map((country) => ({
    url: `${baseUrl}/imgur-alternative-${country}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.7,
  }));

  const cityRoutes = seoCities.map((city) => ({
    url: `${baseUrl}/upload-image-${city}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.7,
  }));

  return [...staticRoutes, ...countryRoutes1, ...countryRoutes2, ...cityRoutes];
}
