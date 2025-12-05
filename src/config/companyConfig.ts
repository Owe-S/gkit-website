/**
 * Sentralisert firma-konfigurasjonsfile
 * Oppdater denne filen for å endre firma-informasjon overalt på siden
 */

export const companyConfig = {
  // Navn
  name: 'Golfklubb IT ENK',
  shortName: 'GKIT',
  tagline: 'Stabil drift. Smarte systemer.',
  
  // Organisasjonsnummer
  organizationNumber: '936 634 966 NO',
  
  // Kontaktinformasjon
  email: 'kontakt-oss@golfklubb-it.com',
  phone: '472 65 100',
  address: 'Sloraveien 10, 1405 Langhus',
  
  // Åpningstider
  supportHours: 'E.A.',
  
  // Social & Web
  website: 'https://golfklubb-it-website.web.app',
  
  // Copyright
  copyrightYear: 2025,
  
  // Gjøre det enkelt å få full kontaktstreng
  getFullAddress: () => `${companyConfig.address}, Norge`,
  getContactEmail: () => companyConfig.email,
  getContactPhone: () => companyConfig.phone,
  getFullName: () => companyConfig.name,
}

export default companyConfig
