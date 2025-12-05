/**
 * GKIT Company Configuration
 * 
 * Denne filen skal plasseres i root av alle GKIT-applikasjoner
 * for å sikre konsistent firma-informasjon på tvers av hele økosystemet.
 * 
 * Version: 1.0.0
 * Last updated: December 5, 2025
 */

export const GKIT_CONFIG = {
  // Firma-informasjon
  company: {
    name: 'Golfklubb IT ENK',
    shortName: 'GKIT',
    tagline: 'Stabil drift. Smarte systemer.',
    slogan: 'Golfklubbens IT-partner',
    organizationNumber: '936 634 966 NO',
  },

  // Kontaktinformasjon
  contact: {
    email: 'kontakt-oss@golfklubb-it.com',
    phone: '472 65 100',
    phoneRaw: '+4747265100', // For tel: links
    address: 'Sloraveien 10, 1405 Langhus',
    country: 'Norge',
  },

  // Support
  support: {
    hours: 'E.A.', // E.A. = Etter Avtale
    responseTime: '24 timer (hverdager)',
  },

  // URLs
  urls: {
    website: 'https://golfklubb-it-website.web.app',
    apps: {
      soknadsportalen: 'https://soknadsportalen.web.app',
      golfTeamTime: 'https://golfteam-time-eur.web.app',
      digitalSignage: 'https://loftlogic-display.web.app',
    },
    documentation: {
      workspace: 'https://owe-s.github.io/workspace-setup-gkit/',
      digitalSignage: 'https://owe-s.github.io/GKIT-DigitalSignage-APP/',
    },
  },

  // Metadata
  meta: {
    copyrightYear: 2025,
    versionConfigFile: '1.0.0',
    lastUpdated: '2025-12-05',
  },

  // Helper functions
  getFullAddress: () => `${GKIT_CONFIG.contact.address}, ${GKIT_CONFIG.contact.country}`,
  getContactEmail: () => GKIT_CONFIG.contact.email,
  getContactPhone: () => GKIT_CONFIG.contact.phone,
  getFullName: () => GKIT_CONFIG.company.name,
  getMailtoLink: () => `mailto:${GKIT_CONFIG.contact.email}`,
  getTelLink: () => `tel:${GKIT_CONFIG.contact.phoneRaw}`,
}

// Eksport som default for enkel bruk
export default GKIT_CONFIG
