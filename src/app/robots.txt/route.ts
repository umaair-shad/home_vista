export async function GET() {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://homevista.com';

  const robotsTxt = `User-agent: *
Allow: /
Disallow: /dashboard/
Disallow: /account/

Sitemap: ${baseUrl}/sitemap.xml
`;

  return new Response(robotsTxt, {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
    },
  });
}
