/**
 * SEO JSON-LD Schema Generators
 * These functions generate structured data for search engines
 */

// Organization Schema - For homepage
export const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Golfklubbens IT',
  description: 'Stabil drift. Smarte systemer. Digital modernisering for norske golfklubber.',
  url: 'https://golfklubb-it-website.web.app',
  logo: 'https://golfklubb-it-website.web.app/gkit-logo.png',
  telephone: '+47XXXXXXXXX',
  email: 'kontakt@golfklubb-it.com',
  sameAs: [
    'https://www.linkedin.com/company/golfklubbens-it',
    'https://www.facebook.com/golfklubbens-it',
  ],
  address: {
    '@type': 'PostalAddress',
    addressCountry: 'NO',
    addressLocality: 'Norge',
  },
  areaServed: 'NO',
  serviceType: ['Software Development', 'IT Consulting', 'Digital Solutions'],
}

// LocalBusiness Schema - For contact pages
export const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'Golfklubbens IT',
  description: 'Digitale løsninger og IT-tjenester for golfklubber',
  url: 'https://golfklubb-it-website.web.app',
  telephone: '+47XXXXXXXXX',
  email: 'kontakt@golfklubb-it.com',
  address: {
    '@type': 'PostalAddress',
    addressCountry: 'NO',
    addressLocality: 'Norge',
  },
  image: 'https://golfklubb-it-website.web.app/gkit-logo.png',
  priceRange: '$$-$$$',
  serviceType: ['Software as a Service', 'IT Consulting', 'Integration Services'],
}

// Service Schema Generator
export const serviceSchema = (
  name: string,
  description: string,
  url: string,
  priceRange = '$$'
) => ({
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: name,
  description: description,
  url: url,
  provider: {
    '@type': 'Organization',
    name: 'Golfklubbens IT',
    url: 'https://golfklubb-it-website.web.app',
  },
  priceRange: priceRange,
  areaServed: 'NO',
  serviceType: 'Software & IT Solutions',
})

// SoftwareApplication Schema - For product pages
export const softwareApplicationSchema = (
  name: string,
  description: string,
  url: string,
  applicationCategory: string,
  image: string
) => ({
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: name,
  description: description,
  url: url,
  image: image,
  applicationCategory: applicationCategory,
  operatingSystem: ['Web-based', 'Cross-platform'],
  provider: {
    '@type': 'Organization',
    name: 'Golfklubbens IT',
    url: 'https://golfklubb-it-website.web.app',
  },
  offers: {
    '@type': 'Offer',
    priceCurrency: 'NOK',
    price: 'Contact for pricing',
  },
})

// BreadcrumbList Schema
export const breadcrumbSchema = (items: Array<{ name: string; url: string }>) => ({
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: items.map((item, index) => ({
    '@type': 'ListItem',
    position: index + 1,
    name: item.name,
    item: item.url,
  })),
})

// Article Schema - For blog posts (if added later)
export const articleSchema = (
  title: string,
  description: string,
  image: string,
  datePublished: string,
  dateModified: string,
  author: string,
  url: string
) => ({
  '@context': 'https://schema.org',
  '@type': 'BlogPosting',
  headline: title,
  description: description,
  image: image,
  datePublished: datePublished,
  dateModified: dateModified,
  author: {
    '@type': 'Organization',
    name: author,
  },
  url: url,
})

// FAQPage Schema - For FAQ sections
export const faqSchema = (
  faqs: Array<{
    question: string
    answer: string
  }>
) => ({
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map((faq) => ({
    '@type': 'Question',
    name: faq.question,
    acceptedAnswer: {
      '@type': 'Answer',
      text: faq.answer,
    },
  })),
})

// ContactPoint Schema
export const contactPointSchema = (
  telephone: string,
  email: string,
  contactType = 'Customer Support'
) => ({
  '@context': 'https://schema.org',
  '@type': 'ContactPoint',
  contactType: contactType,
  telephone: telephone,
  email: email,
})
