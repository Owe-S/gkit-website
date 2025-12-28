#!/usr/bin/env node

/**
 * Populate Firestore Documents via Batch Import
 * 
 * Creates all 11 documents by writing JSON data that can be imported
 * This is the most reliable method when credentials are not available
 * 
 * Usage: node scripts/create-import-file.mjs && firebase firestore:import firestore-data.json
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

// ============================================================================
// EXPORT FORMAT FOR FIRESTORE
// ============================================================================

const FIRESTORE_EXPORT = {
  // Export format includes collection paths and documents
  __type: 'firestore-export',
  collections: {
    home: {
      documents: {
        homepage: {
          createTime: new Date().toISOString(),
          updateTime: new Date().toISOString(),
          fields: {
            title: { stringValue: 'Golfklubb-IT - Din IT-Partner for Golfklubber' },
            tagline: { stringValue: 'Spesialisert IT-løsninger for golfklubber og idrettslag' },
            description: { stringValue: 'Vi tilbyr Google Workspace, integrasjoner, og automatisering for moderne golfklubber' },
            features: {
              arrayValue: {
                values: [
                  { stringValue: 'Google Workspace Integration' },
                  { stringValue: 'Custom Apps & Automations' },
                  { stringValue: 'Cloud Infrastructure' },
                  { stringValue: 'Digital Membership Management' }
                ]
              }
            },
            ctaPrimary: { stringValue: 'Kontakt oss i dag' },
            ctaSecondary: { stringValue: 'Se våre løsninger' },
            updatedAt: { timestampValue: new Date().toISOString() }
          }
        }
      }
    },
    solutions: {
      documents: {
        'workspace-business': {
          createTime: new Date().toISOString(),
          updateTime: new Date().toISOString(),
          fields: {
            name: { stringValue: 'Google Workspace - Business Edition' },
            slug: { stringValue: 'workspace' },
            category: { stringValue: 'Produkter' },
            description: { stringValue: 'Komplett Google Workspace-løsning for bedrifter og organisasjoner' },
            details: { stringValue: 'Inkluderer Gmail, Drive, Docs, Sheets, Meet, Calendar, Sites og mange flere verktøy' },
            price: { stringValue: 'Fra 6 USD/bruker/måned' },
            features: {
              arrayValue: {
                values: [
                  { stringValue: 'Gmail med eget domene' },
                  { stringValue: 'Ubegrenset lagring i Drive' },
                  { stringValue: 'Samarbeid i Docs, Sheets, Slides' },
                  { stringValue: 'Video møter med Meet' },
                  { stringValue: 'Kalender og oppgavestyring' },
                  { stringValue: 'Sikkerhetskopiering og gjenoppretting' },
                  { stringValue: 'Admin console for brukerstyring' }
                ]
              }
            },
            imageUrl: { stringValue: '/assets/products/workspace.png' },
            cta: { stringValue: 'Kontakt oss for tilbud' },
            order: { integerValue: 1 },
            active: { booleanValue: true },
            updatedAt: { timestampValue: new Date().toISOString() }
          }
        },
        'clubsite-cms': {
          createTime: new Date().toISOString(),
          updateTime: new Date().toISOString(),
          fields: {
            name: { stringValue: 'ClubsiteCMS - Nettstedadministrasjon' },
            slug: { stringValue: 'clubsitecms' },
            category: { stringValue: 'Produkter' },
            description: { stringValue: 'Enkelt og kraftig system for å administrere klubbens nettsted' },
            details: { stringValue: 'Drift, vedlikehold og oppdatering av klubbnettsider med minimal teknisk kompetanse' },
            price: { stringValue: 'Kontakt oss' },
            features: {
              arrayValue: {
                values: [
                  { stringValue: 'Drag-and-drop side builder' },
                  { stringValue: 'Automatisk SSL-sertifikat' },
                  { stringValue: 'Responsiv design' },
                  { stringValue: 'SEO-optimalisert' },
                  { stringValue: 'Integrasjon med medlemsregister' },
                  { stringValue: 'Nyhetsarkiv og blogg' },
                  { stringValue: 'Kontaktskjema og booking' }
                ]
              }
            },
            imageUrl: { stringValue: '/assets/products/clubsite.png' },
            cta: { stringValue: 'Be om demo' },
            order: { integerValue: 2 },
            active: { booleanValue: true },
            updatedAt: { timestampValue: new Date().toISOString() }
          }
        },
        'golfbox-automation': {
          createTime: new Date().toISOString(),
          updateTime: new Date().toISOString(),
          fields: {
            name: { stringValue: 'GolfBox - Automatisering & Integrasjon' },
            slug: { stringValue: 'golfbox' },
            category: { stringValue: 'Produkter' },
            description: { stringValue: 'Automatiser GolfBox med Google Workspace og andre systemer' },
            details: { stringValue: 'Sveiser sammen dine golfklubbs systemer med kraftige automatiseringer' },
            price: { stringValue: 'Fra 2000 NOK/måned' },
            features: {
              arrayValue: {
                values: [
                  { stringValue: 'Automatisk booking av tider' },
                  { stringValue: 'Synkronisering med Google Calendar' },
                  { stringValue: 'Medlemslister til Google Groups' },
                  { stringValue: 'Fakturaering automatisert' },
                  { stringValue: 'Rapportgenerering' },
                  { stringValue: 'Webhook integrasjoner' },
                  { stringValue: 'Custom API tilgang' }
                ]
              }
            },
            imageUrl: { stringValue: '/assets/products/golfbox.png' },
            cta: { stringValue: 'Se priser' },
            order: { integerValue: 3 },
            active: { booleanValue: true },
            updatedAt: { timestampValue: new Date().toISOString() }
          }
        },
        'digital-signage': {
          createTime: new Date().toISOString(),
          updateTime: new Date().toISOString(),
          fields: {
            name: { stringValue: 'Digital Skilting - Info Display System' },
            slug: { stringValue: 'signage' },
            category: { stringValue: 'Produkter' },
            description: { stringValue: 'Digitale skjermer for klubbhuset - lister, meldinger, resultater' },
            details: { stringValue: 'Vis viktig informasjon på skjermer rundt klubben - oppdateres automatisk' },
            price: { stringValue: 'Fra 5000 NOK' },
            features: {
              arrayValue: {
                values: [
                  { stringValue: 'Enkel admin grensesnitt' },
                  { stringValue: 'Sanntid oppdateringer' },
                  { stringValue: 'Støttelse for foto og video' },
                  { stringValue: 'Værvarsel og nyheter' },
                  { stringValue: 'Turneringsresultater (live)' },
                  { stringValue: 'Åpningstider og beskjeder' },
                  { stringValue: 'Statistikk og rapporter' }
                ]
              }
            },
            imageUrl: { stringValue: '/assets/products/signage.png' },
            cta: { stringValue: 'Forespørsel' },
            order: { integerValue: 4 },
            active: { booleanValue: true },
            updatedAt: { timestampValue: new Date().toISOString() }
          }
        }
      }
    },
    apps: {
      documents: {
        soknadsportalen: {
          createTime: new Date().toISOString(),
          updateTime: new Date().toISOString(),
          fields: {
            name: { stringValue: 'Søknadsportalen' },
            slug: { stringValue: 'soknadsportalen' },
            category: { stringValue: 'Apps' },
            description: { stringValue: 'Digitale søknadsskjemaer for klubben - medlemskap, tilskudd, arrangementer' },
            url: { stringValue: 'https://apps.golfklubb-it.no/soknadsportalen' },
            features: {
              arrayValue: {
                values: [
                  { stringValue: 'Fleksible skjemaer' },
                  { stringValue: 'Integrasjon med medlemsregister' },
                  { stringValue: 'Automatisk notifikasjoner' },
                  { stringValue: 'Signeringsløsning' },
                  { stringValue: 'PDF-export' }
                ]
              }
            },
            icon: { stringValue: 'form' },
            order: { integerValue: 1 },
            active: { booleanValue: true },
            updatedAt: { timestampValue: new Date().toISOString() }
          }
        },
        'golfteam-time': {
          createTime: new Date().toISOString(),
          updateTime: new Date().toISOString(),
          fields: {
            name: { stringValue: 'GolfTeam Time' },
            slug: { stringValue: 'golfteam-time' },
            category: { stringValue: 'Apps' },
            description: { stringValue: 'Lag og turnerings-administrasjon - lag, spill, statistikk' },
            url: { stringValue: 'https://apps.golfklubb-it.no/golfteam' },
            features: {
              arrayValue: {
                values: [
                  { stringValue: 'Lagadministrasjon' },
                  { stringValue: 'Turneringssystem' },
                  { stringValue: 'Live-scoring' },
                  { stringValue: 'Lederstavle' },
                  { stringValue: 'Statistikk og analyser' }
                ]
              }
            },
            icon: { stringValue: 'trophy' },
            order: { integerValue: 2 },
            active: { booleanValue: true },
            updatedAt: { timestampValue: new Date().toISOString() }
          }
        },
        'frivillig-kalender': {
          createTime: new Date().toISOString(),
          updateTime: new Date().toISOString(),
          fields: {
            name: { stringValue: 'Frivillig Kalender' },
            slug: { stringValue: 'frivillig-kalender' },
            category: { stringValue: 'Apps' },
            description: { stringValue: 'Koordinering av frivilliger - oppgaver, tidsslot, påmelding' },
            url: { stringValue: 'https://apps.golfklubb-it.no/frivillig' },
            features: {
              arrayValue: {
                values: [
                  { stringValue: 'Oppgavelister' },
                  { stringValue: 'Påmelding til tidsslot' },
                  { stringValue: 'Automatiske påminnelser' },
                  { stringValue: 'Oversikt over ressurser' },
                  { stringValue: 'Rapporter' }
                ]
              }
            },
            icon: { stringValue: 'calendar' },
            order: { integerValue: 3 },
            active: { booleanValue: true },
            updatedAt: { timestampValue: new Date().toISOString() }
          }
        },
        'ai-file-analyzer': {
          createTime: new Date().toISOString(),
          updateTime: new Date().toISOString(),
          fields: {
            name: { stringValue: 'AI File Analyzer' },
            slug: { stringValue: 'ai-file-analyzer' },
            category: { stringValue: 'Apps' },
            description: { stringValue: 'Intelligentanalyse av dokumenter - OCR, tekst-gjenkjenning, klassifisering' },
            url: { stringValue: 'https://apps.golfklubb-it.no/ai-analyzer' },
            features: {
              arrayValue: {
                values: [
                  { stringValue: 'OCR og tekstgjenkjenning' },
                  { stringValue: 'Dokumentklassifisering' },
                  { stringValue: 'Automatisk indeksering' },
                  { stringValue: 'Søk i dokumenter' },
                  { stringValue: 'Batch-prosessering' }
                ]
              }
            },
            icon: { stringValue: 'brain' },
            order: { integerValue: 4 },
            active: { booleanValue: true },
            updatedAt: { timestampValue: new Date().toISOString() }
          }
        },
        golfbilkontroll: {
          createTime: new Date().toISOString(),
          updateTime: new Date().toISOString(),
          fields: {
            name: { stringValue: 'Golfbil-Kontroll' },
            slug: { stringValue: 'golfbilkontroll' },
            category: { stringValue: 'Apps' },
            description: { stringValue: 'Administrasjon av golfbiler - booking, vedlikehold, kostnader' },
            url: { stringValue: 'https://apps.golfklubb-it.no/golfbil' },
            features: {
              arrayValue: {
                values: [
                  { stringValue: 'Billeting og booking' },
                  { stringValue: 'Vedlikeholdsplan' },
                  { stringValue: 'Kostnadsoppfølging' },
                  { stringValue: 'Brukerhistorie' },
                  { stringValue: 'Alerts og varsler' }
                ]
              }
            },
            icon: { stringValue: 'car' },
            order: { integerValue: 5 },
            active: { booleanValue: true },
            updatedAt: { timestampValue: new Date().toISOString() }
          }
        },
        'booking-kalender': {
          createTime: new Date().toISOString(),
          updateTime: new Date().toISOString(),
          fields: {
            name: { stringValue: 'Booking Kalender' },
            slug: { stringValue: 'booking-kalender' },
            category: { stringValue: 'Apps' },
            description: { stringValue: 'Enkel booking av ressurser - baner, rom, utstyr, instruktører' },
            url: { stringValue: 'https://apps.golfklubb-it.no/booking' },
            features: {
              arrayValue: {
                values: [
                  { stringValue: 'Kalender-basert booking' },
                  { stringValue: 'Ressurs-styring' },
                  { stringValue: 'Automatisk konfirmasjoner' },
                  { stringValue: 'Betalingsintegrasjon' },
                  { stringValue: 'API for innbygging' }
                ]
              }
            },
            icon: { stringValue: 'calendar-check' },
            order: { integerValue: 6 },
            active: { booleanValue: true },
            updatedAt: { timestampValue: new Date().toISOString() }
          }
        }
      }
    }
  }
};

console.log('\n╔════════════════════════════════════════════════════════════╗');
console.log('║    CREATING FIRESTORE IMPORT FILE FOR BATCH UPLOAD       ║');
console.log('╚════════════════════════════════════════════════════════════╝\n');

// Write the export file
const exportPath = path.join(process.cwd(), 'firestore-import.json');
fs.writeFileSync(exportPath, JSON.stringify(FIRESTORE_EXPORT, null, 2));

console.log(`✅ Created: firestore-import.json`);
console.log(`📊 Contains: 11 documents (1 home, 4 solutions, 6 apps)`);
console.log(`\n📋 Next: Open Firebase Console and import the file manually`);
console.log(`   Or upload via: firebase firestore:import firestore-import.json\n`);
