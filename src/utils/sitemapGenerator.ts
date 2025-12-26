/**
 * Sitemap Generator
 * Generates XML sitemap for search engines
 * Run during build process or use this as reference for static sitemap
 */

const baseUrl = 'https://golfklubb-it-website.web.app'

// Define all routes with their priority and change frequency
const routes = [
  // Main Pages
  { path: '/', priority: '1.0', changefreq: 'weekly' },
  { path: '/about', priority: '0.9', changefreq: 'monthly' },
  { path: '/services', priority: '0.9', changefreq: 'monthly' },
  { path: '/projects', priority: '0.8', changefreq: 'monthly' },
  { path: '/apps-integrations', priority: '0.9', changefreq: 'monthly' },
  { path: '/contact', priority: '0.8', changefreq: 'yearly' },

  // Product Pages
  { path: '/products/golfbox', priority: '0.9', changefreq: 'monthly' },
  { path: '/products/workspace', priority: '0.9', changefreq: 'monthly' },
  { path: '/products/workspace-nonprofit', priority: '0.9', changefreq: 'monthly' },
  { path: '/products/workspace-migration', priority: '0.8', changefreq: 'monthly' },
  { path: '/products/workspace-tools', priority: '0.8', changefreq: 'monthly' },
  { path: '/products/clubsite-cms', priority: '0.9', changefreq: 'monthly' },
  { path: '/products/signage', priority: '0.8', changefreq: 'monthly' },
  { path: '/products/api-automation', priority: '0.8', changefreq: 'monthly' },
  { path: '/products/digital-signage', priority: '0.8', changefreq: 'monthly' },

  // App Pages
  { path: '/apps/frivillig-kalender', priority: '0.8', changefreq: 'monthly' },
  { path: '/apps/golfteam-time', priority: '0.8', changefreq: 'monthly' },
  { path: '/apps/golfchart', priority: '0.8', changefreq: 'monthly' },
  { path: '/apps/golfbilkontroll', priority: '0.8', changefreq: 'monthly' },
  { path: '/apps/booking-kalender', priority: '0.8', changefreq: 'monthly' },
  { path: '/apps/ai-file-analyzer', priority: '0.8', changefreq: 'monthly' },
  { path: '/apps/soknad', priority: '0.8', changefreq: 'monthly' },
  { path: '/apps/sponsor-dugnad', priority: '0.7', changefreq: 'monthly' },

  // Integration Pages
  { path: '/integrations/scangolf', priority: '0.7', changefreq: 'monthly' },
  { path: '/integrations/vipps', priority: '0.7', changefreq: 'monthly' },
  { path: '/integrations/nets', priority: '0.7', changefreq: 'monthly' },
  { path: '/integrations/golfbox-modules', priority: '0.7', changefreq: 'monthly' },
  { path: '/integrations/spleis', priority: '0.7', changefreq: 'monthly' },
  { path: '/integrations/grasrotandelen', priority: '0.7', changefreq: 'monthly' },
]

/**
 * Generate XML sitemap content
 */
export const generateSitemapXml = (): string => {
  const urlElements = routes
    .map(
      (route) => `
  <url>
    <loc>${baseUrl}${route.path}</loc>
    <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
    <changefreq>${route.changefreq}</changefreq>
    <priority>${route.priority}</priority>
  </url>`
    )
    .join('')

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">
${urlElements}
</urlset>`
}

/**
 * Generate robots.txt content
 */
export const generateRobotsTxt = (): string => {
  return `# Robots.txt for Golfklubbens IT Website
User-agent: *
Allow: /
Disallow: /admin/
Disallow: /node_modules/

Sitemap: ${baseUrl}/sitemap.xml
Crawl-delay: 1

User-agent: Googlebot
Allow: /
Crawl-delay: 0

User-agent: Bingbot
Allow: /
Crawl-delay: 1`
}

/**
 * Get all routes for reference
 */
export const getAllRoutes = () => routes

/**
 * Get total number of pages
 */
export const getTotalPages = () => routes.length
