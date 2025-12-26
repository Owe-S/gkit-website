import { Helmet } from 'react-helmet-async'
import React from 'react'

interface SEOMetaProps {
  title: string
  description: string
  keywords?: string
  image?: string
  url?: string
  type?: string
  schema?: any
  breadcrumbs?: Array<{ name: string; url: string }>
}

/**
 * SEO Meta Component
 * Manages all meta tags, Open Graph, Twitter cards, and structured data for a page
 */
export const SEOMeta: React.FC<SEOMetaProps> = ({
  title,
  description,
  keywords = '',
  image = 'https://golfklubb-it-website.web.app/og-image.png',
  url = 'https://golfklubb-it-website.web.app',
  type = 'website',
  schema = null,
  breadcrumbs = null,
}) => {
  const fullTitle = `${title} | Golfklubbens IT`

  const schemas = [
    schema,
    breadcrumbs && {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: breadcrumbs.map((item, index) => ({
        '@type': 'ListItem',
        position: index + 1,
        name: item.name,
        item: item.url,
      })),
    },
  ].filter(Boolean)

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta charSet="utf-8" />

      {/* Canonical URL */}
      <link rel="canonical" href={url} />

      {/* Open Graph Tags (for social media sharing) */}
      <meta property="og:type" content={type} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:url" content={url} />
      <meta property="og:site_name" content="Golfklubbens IT" />

      {/* Twitter Card Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      <meta name="twitter:creator" content="@golfklubbens-it" />

      {/* Language */}
      <meta httpEquiv="content-language" content="no-NO" />
      <meta name="language" content="Norwegian" />

      {/* Robots */}
      <meta name="robots" content="index, follow" />
      <meta name="googlebot" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />

      {/* JSON-LD Structured Data */}
      {schemas.map((s, idx) => (
        <script key={idx} type="application/ld+json">
          {JSON.stringify(s)}
        </script>
      ))}
    </Helmet>
  )
}

export default SEOMeta
