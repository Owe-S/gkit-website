#!/usr/bin/env node

/**
 * Populate Firestore using Node.js Firebase Admin SDK
 * Auto-generates service account from Firebase project
 * 
 * Usage: node scripts/populate-firestore-automated.mjs
 * 
 * This script automatically:
 * 1. Uses your default Firebase credentials
 * 2. Connects to Firestore
 * 3. Creates all 11 documents
 * 4. Reports results
 */

import admin from 'firebase-admin';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

// ============================================================================
// CONFIGURATION
// ============================================================================

const CONFIG = {
  projectId: 'golfklubb-it-website',
};

// ============================================================================
// FIRESTORE DATA
// ============================================================================

const FIRESTORE_DATA = {
  home: [
    {
      id: 'homepage',
      data: {
        title: 'Golfklubb-IT - Din IT-Partner for Golfklubber',
        tagline: 'Spesialisert IT-løsninger for golfklubber og idrettslag',
        description: 'Vi tilbyr Google Workspace, integrasjoner, og automatisering for moderne golfklubber',
        features: ['Google Workspace Integration', 'Custom Apps & Automations', 'Cloud Infrastructure', 'Digital Membership Management'],
        ctaPrimary: 'Kontakt oss i dag',
        ctaSecondary: 'Se våre løsninger',
        updatedAt: new Date().toISOString()
      }
    }
  ],
  solutions: [
    {
      id: 'workspace-business',
      data: {
        name: 'Google Workspace - Business Edition',
        slug: 'workspace',
        category: 'Produkter',
        description: 'Komplett Google Workspace-løsning for bedrifter og organisasjoner',
        details: 'Inkluderer Gmail, Drive, Docs, Sheets, Meet, Calendar, Sites og mange flere verktøy',
        price: 'Fra 6 USD/bruker/måned',
        features: ['Gmail med eget domene', 'Ubegrenset lagring i Drive', 'Samarbeid i Docs, Sheets, Slides', 'Video møter med Meet', 'Kalender og oppgavestyring', 'Sikkerhetskopiering og gjenoppretting', 'Admin console for brukerstyring'],
        imageUrl: '/assets/products/workspace.png',
        cta: 'Kontakt oss for tilbud',
        order: 1,
        active: true,
        updatedAt: new Date().toISOString()
      }
    },
    {
      id: 'clubsite-cms',
      data: {
        name: 'ClubsiteCMS - Nettstedadministrasjon',
        slug: 'clubsitecms',
        category: 'Produkter',
        description: 'Enkelt og kraftig system for å administrere klubbens nettsted',
        details: 'Drift, vedlikehold og oppdatering av klubbnettsider med minimal teknisk kompetanse',
        price: 'Kontakt oss',
        features: ['Drag-and-drop side builder', 'Automatisk SSL-sertifikat', 'Responsiv design', 'SEO-optimalisert', 'Integrasjon med medlemsregister', 'Nyhetsarkiv og blogg', 'Kontaktskjema og booking'],
        imageUrl: '/assets/products/clubsite.png',
        cta: 'Be om demo',
        order: 2,
        active: true,
        updatedAt: new Date().toISOString()
      }
    },
    {
      id: 'golfbox-automation',
      data: {
        name: 'GolfBox - Automatisering & Integrasjon',
        slug: 'golfbox',
        category: 'Produkter',
        description: 'Automatiser GolfBox med Google Workspace og andre systemer',
        details: 'Sveiser sammen dine golfklubbs systemer med kraftige automatiseringer',
        price: 'Fra 2000 NOK/måned',
        features: ['Automatisk booking av tider', 'Synkronisering med Google Calendar', 'Medlemslister til Google Groups', 'Fakturaering automatisert', 'Rapportgenerering', 'Webhook integrasjoner', 'Custom API tilgang'],
        imageUrl: '/assets/products/golfbox.png',
        cta: 'Se priser',
        order: 3,
        active: true,
        updatedAt: new Date().toISOString()
      }
    },
    {
      id: 'digital-signage',
      data: {
        name: 'Digital Skilting - Info Display System',
        slug: 'signage',
        category: 'Produkter',
        description: 'Digitale skjermer for klubbhuset - lister, meldinger, resultater',
        details: 'Vis viktig informasjon på skjermer rundt klubben - oppdateres automatisk',
        price: 'Fra 5000 NOK',
        features: ['Enkel admin grensesnitt', 'Sanntid oppdateringer', 'Støttelse for foto og video', 'Værvarsel og nyheter', 'Turneringsresultater (live)', 'Åpningstider og beskjeder', 'Statistikk og rapporter'],
        imageUrl: '/assets/products/signage.png',
        cta: 'Forespørsel',
        order: 4,
        active: true,
        updatedAt: new Date().toISOString()
      }
    }
  ],
  apps: [
    {
      id: 'soknadsportalen',
      data: {
        name: 'Søknadsportalen',
        slug: 'soknadsportalen',
        category: 'Apps',
        description: 'Digitale søknadsskjemaer for klubben - medlemskap, tilskudd, arrangementer',
        url: 'https://apps.golfklubb-it.no/soknadsportalen',
        features: ['Fleksible skjemaer', 'Integrasjon med medlemsregister', 'Automatisk notifikasjoner', 'Signeringsløsning', 'PDF-export'],
        icon: 'form',
        order: 1,
        active: true,
        updatedAt: new Date().toISOString()
      }
    },
    {
      id: 'golfteam-time',
      data: {
        name: 'GolfTeam Time',
        slug: 'golfteam-time',
        category: 'Apps',
        description: 'Lag og turnerings-administrasjon - lag, spill, statistikk',
        url: 'https://apps.golfklubb-it.no/golfteam',
        features: ['Lagadministrasjon', 'Turneringssystem', 'Live-scoring', 'Lederstavle', 'Statistikk og analyser'],
        icon: 'trophy',
        order: 2,
        active: true,
        updatedAt: new Date().toISOString()
      }
    },
    {
      id: 'frivillig-kalender',
      data: {
        name: 'Frivillig Kalender',
        slug: 'frivillig-kalender',
        category: 'Apps',
        description: 'Koordinering av frivilliger - oppgaver, tidsslot, påmelding',
        url: 'https://apps.golfklubb-it.no/frivillig',
        features: ['Oppgavelister', 'Påmelding til tidsslot', 'Automatiske påminnelser', 'Oversikt over ressurser', 'Rapporter'],
        icon: 'calendar',
        order: 3,
        active: true,
        updatedAt: new Date().toISOString()
      }
    },
    {
      id: 'ai-file-analyzer',
      data: {
        name: 'AI File Analyzer',
        slug: 'ai-file-analyzer',
        category: 'Apps',
        description: 'Intelligentanalyse av dokumenter - OCR, tekst-gjenkjenning, klassifisering',
        url: 'https://apps.golfklubb-it.no/ai-analyzer',
        features: ['OCR og tekstgjenkjenning', 'Dokumentklassifisering', 'Automatisk indeksering', 'Søk i dokumenter', 'Batch-prosessering'],
        icon: 'brain',
        order: 4,
        active: true,
        updatedAt: new Date().toISOString()
      }
    },
    {
      id: 'golfbilkontroll',
      data: {
        name: 'Golfbil-Kontroll',
        slug: 'golfbilkontroll',
        category: 'Apps',
        description: 'Administrasjon av golfbiler - booking, vedlikehold, kostnader',
        url: 'https://apps.golfklubb-it.no/golfbil',
        features: ['Billeting og booking', 'Vedlikeholdsplan', 'Kostnadsoppfølging', 'Brukerhistorie', 'Alerts og varsler'],
        icon: 'car',
        order: 5,
        active: true,
        updatedAt: new Date().toISOString()
      }
    },
    {
      id: 'booking-kalender',
      data: {
        name: 'Booking Kalender',
        slug: 'booking-kalender',
        category: 'Apps',
        description: 'Enkel booking av ressurser - baner, rom, utstyr, instruktører',
        url: 'https://apps.golfklubb-it.no/booking',
        features: ['Kalender-basert booking', 'Ressurs-styring', 'Automatisk konfirmasjoner', 'Betalingsintegrasjon', 'API for innbygging'],
        icon: 'calendar-check',
        order: 6,
        active: true,
        updatedAt: new Date().toISOString()
      }
    }
  ]
};

// ============================================================================
// MAIN
// ============================================================================

async function main() {
  console.log('\n╔════════════════════════════════════════════════════════════╗');
  console.log('║        FIRESTORE POPULATION VIA ADMIN SDK                 ║');
  console.log('╚════════════════════════════════════════════════════════════╝\n');

  try {
    // Initialize Firebase Admin
    console.log('🔐 Initializing Firebase Admin SDK...');
    
    if (!admin.apps.length) {
      // Try to use Application Default Credentials
      admin.initializeApp({
        projectId: CONFIG.projectId,
      });
    }
    
    const db = admin.firestore();
    console.log('✅ Connected to Firestore\n');

    let totalSuccess = 0;
    let totalFailure = 0;

    // Populate each collection
    for (const [collection, documents] of Object.entries(FIRESTORE_DATA)) {
      console.log(`📝 Populating "${collection}" collection...`);

      for (const doc of documents) {
        try {
          await db.collection(collection).doc(doc.id).set(doc.data);
          console.log(`   ✅ Created: ${doc.id}`);
          totalSuccess++;
        } catch (error) {
          console.log(`   ❌ Failed: ${doc.id} - ${error.message}`);
          totalFailure++;
        }
      }
    }

    // Summary
    console.log('\n╔════════════════════════════════════════════════════════════╗');
    console.log('║                      SUMMARY                             ║');
    console.log('╚════════════════════════════════════════════════════════════╝\n');

    console.log(`✅ home: 1 created`);
    console.log(`✅ solutions: 4 created`);
    console.log(`✅ apps: 6 created`);
    console.log(`\n📊 Total: ${totalSuccess} documents created, ${totalFailure} failed\n`);

    if (totalFailure === 0) {
      console.log('✅ All documents created successfully!');
      console.log('\n📋 Next steps:');
      console.log('1. Go to: https://golfklubb-it-website.web.app/admin');
      console.log('2. Reload the page');
      console.log('3. Verify all 11 documents appear\n');
      process.exit(0);
    } else {
      console.log(`⚠️  ${totalFailure} documents failed\n`);
      process.exit(1);
    }
  } catch (error) {
    console.error('\n❌ Error:', error.message);
    console.error('\nMake sure:');
    console.error('1. gcloud CLI is installed: gcloud --version');
    console.error('2. You\'re authenticated: gcloud auth list');
    console.error('3. Default project is set: gcloud config set project golfklubb-it-website\n');
    process.exit(1);
  }
}

main();
