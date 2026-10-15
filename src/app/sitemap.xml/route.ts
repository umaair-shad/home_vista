import { ALL_PROPERTIES, ARTICLES, LOCATIONS, AGENTS } from '@/data/mockData';

export async function GET() {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://homevista.com';

  const staticPages = [
    '',
    '/properties',
    '/buy',
    '/rent',
    '/property-types',
    '/locations',
    '/agents',
    '/sell',
    '/how-it-works',
    '/about',
    '/contact',
    '/blog',
    '/faq',
    '/privacy-policy',
    '/terms',
    '/cookies',
  ];

  const propertyUrls = ALL_PROPERTIES.map((p) => `/properties/${p.slug}`);
  const articleUrls = ARTICLES.map((a) => `/blog/${a.slug}`);
  const locationUrls = LOCATIONS.map((l) => `/locations/${l.slug}`);
  const agentUrls = AGENTS.map((ag) => `/agents/${ag.slug}`);

  const allUrls = [...staticPages, ...propertyUrls, ...articleUrls, ...locationUrls, ...agentUrls];

  const sitemapXml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${allUrls
    .map(
      (path) => `
    <url>
      <loc>${baseUrl}${path}</loc>
      <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
      <changefreq>daily</changefreq>
      <priority>${path === '' ? '1.0' : path.startsWith('/properties/') ? '0.8' : '0.6'}</priority>
    </url>`
    )
    .join('')}
</urlset>`;

  return new Response(sitemapXml, {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
    },
  });
}
