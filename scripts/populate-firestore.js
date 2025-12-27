#!/usr/bin/env node

/**
 * Initialize Firestore with Golfklubb-IT content
 * This script populates all collections with real website content
 */

import admin from 'firebase-admin';

// Initialize Firebase Admin SDK using default credentials
const app = admin.initializeApp({
  projectId: 'golfklubb-it-website',
});

const db = admin.firestore(app);

async function populateFirestore() {
  console.log('🚀 Populating Firestore with Golfklubb-IT content...\n');

  try {
    // ============================================================================
    // 1. HOME COLLECTION - Hero and main content
    // ============================================================================
    console.log('📄 Creating home collection...');
    
    await db.collection('home').doc('index').set({
      title: 'Golfklubb-IT - Digital løsninger for golfklubber',
      description: 'Vi tilbyr innovative digital løsninger spesialisert på golfklubber. Fra e-post og samarbeid til full klubbadministrasjon.',
      tagline: 'Stabil drift. Smarte systemer.',
      heroSubtitle: 'Automatiser driften av din golfklubb med moderne teknologi',
      features: [
        {
          title: 'Google Workspace',
          description: 'Profesjonell e-post, samarbeid og lagring for hele klubben'
        },
        {
          title: 'GolfBox',
          description: 'Fullstendig administrasjon av golfbane og medlemmer'
        },
        {
          title: 'ClubsiteCMS',
          description: 'Enkel webside-administrasjon uten programmering'
        },
        {
          title: 'Digital Skilting',
          description: 'Moderne display for turnering og medlemstall'
        }
      ],
      createdAt: new Date(),
      updatedAt: new Date(),
    });
    console.log('✅ home collection created\n');

    // ============================================================================
    // 2. SOLUTIONS COLLECTION - Products and services
    // ============================================================================
    console.log('📊 Creating solutions collection...');
    
    const solutions = [
      {
        id: 'google-workspace',
        title: 'Google Workspace',
        description: 'Profesjonell e-post, samarbeid og lagring for hele klubben. Mellom 100-1000 brukere.',
        category: 'Collaboration & Productivity',
        price: 'Fra kr 29/bruker/måned',
        icon: '📧',
        details: 'Inkluderer: Gmail, Drive, Docs, Sheets, Meet, Calendar, Sites, Forms',
        bestFor: 'Alle klubber',
      },
      {
        id: 'workspace-nonprofit',
        title: 'Google Workspace Non-Profit',
        description: 'Rabattert eller gratis pakker for ideelle organisasjoner og klubber.',
        category: 'Collaboration & Productivity',
        price: 'Gratis - 75% rabatt',
        icon: '🎁',
        details: 'Spesiell pris for ideelle klubber. Søk om ikke-kommersielt tilbud.',
        bestFor: 'Ideelle golfklubber',
      },
      {
        id: 'workspace-migration',
        title: 'Workspace Migrering',
        description: 'Migrering fra Outlook, Exchange eller andre e-postsystemer.',
        category: 'Implementation',
        price: 'Fra kr 5.000',
        icon: '🔄',
        details: 'Vi flytter all e-post, kontakter og kalendre sikkert til Google Workspace.',
        bestFor: 'Klubber som skal bytte e-postsystem',
      },
      {
        id: 'golfbox',
        title: 'GolfBox',
        description: 'Fullstendig administrasjon av golfbane: handicap, medlemmer, turnering, booking.',
        category: 'Management',
        price: 'Fra kr 500/måned',
        icon: '⛳',
        details: 'Integrert med golfbanen, automatisert handicap-administrasjon.',
        bestFor: 'Alle golfklubber',
      },
      {
        id: 'clubsite-cms',
        title: 'ClubsiteCMS',
        description: 'Enkel webside-administrasjon for klubber. Uten kodekompetanse nødvendig.',
        category: 'Web & Content',
        price: 'Fra kr 199/måned',
        icon: '🌐',
        details: 'Drag-and-drop editor, integrert booking, medlemsprofiler.',
        bestFor: 'Klubber som vil ha enkel webside',
      },
      {
        id: 'digital-signage',
        title: 'Digital Skilting',
        description: 'Moderne display for klubben: turnering, resultat, medlemstall, nyheter.',
        category: 'Communication',
        price: 'Fra kr 2.000 setup + display',
        icon: '📺',
        details: 'Live oppdatering av resultater og info på storskjerm.',
        bestFor: 'Klubber med klubbhus eller restaurant',
      },
    ];

    for (const solution of solutions) {
      await db.collection('solutions').doc(solution.id).set({
        ...solution,
        createdAt: new Date(),
        updatedAt: new Date(),
      });
    }
    console.log(`✅ solutions collection created (${solutions.length} items)\n`);

    // ============================================================================
    // 3. APPS COLLECTION - Applications and integrations
    // ============================================================================
    console.log('🎯 Creating apps collection...');
    
    const apps = [
      {
        id: 'soknadsportalen',
        name: 'Søknadsportalen',
        description: 'Digital innlevering og behandling av søknader til klubben. Automatisk arkivering og notifikasjoner.',
        status: 'active',
        category: 'Administration',
        icon: '📝',
      },
      {
        id: 'golfteam-time',
        name: 'GolfTeam Time',
        description: 'Lagplanlegging, turnering-administrasjon og lagstatistikk. Inkluderer tipping.',
        status: 'active',
        category: 'Competition',
        icon: '🏆',
      },
      {
        id: 'booking-kalender',
        name: 'Booking Kalender',
        description: 'Tee-time booking og reservasjon av greens. Integrert med medlemsdatabase.',
        status: 'active',
        category: 'Booking',
        icon: '📅',
      },
      {
        id: 'frivillig-kalender',
        name: 'Frivillig Kalender',
        description: 'Koordinering av frivillig arbeid og oppgaver. Notifikasjoner og påminnelser.',
        status: 'beta',
        category: 'Volunteer Management',
        icon: '🙋',
      },
      {
        id: 'ai-file-analyzer',
        name: 'AI File Analyzer',
        description: 'Intelligent analyse av golfresultater og statistikk. Automatisk rapportgenerering.',
        status: 'beta',
        category: 'Analytics',
        icon: '📊',
      },
      {
        id: 'golfbilkontroll',
        name: 'Golfbilkontroll',
        description: 'Administrasjon av klubbens golfbiler, utleie, vedlikehold og brennstoff.',
        status: 'planned',
        category: 'Fleet Management',
        icon: '🚗',
      },
    ];

    for (const app of apps) {
      await db.collection('apps').doc(app.id).set({
        ...app,
        createdAt: new Date(),
        updatedAt: new Date(),
      });
    }
    console.log(`✅ apps collection created (${apps.length} items)\n`);

    // ============================================================================
    // 4. ADMINS COLLECTION - Track admins
    // ============================================================================
    console.log('👥 Creating admins collection...');
    
    await db.collection('admins').doc('_metadata').set({
      description: 'Admin users with access to the admin panel',
      createdAt: new Date(),
    });
    console.log('✅ admins collection created\n');

    // ============================================================================
    // Summary
    // ============================================================================
    console.log('═════════════════════════════════════════════════════════════');
    console.log('🎉 Firestore populated successfully!');
    console.log('═════════════════════════════════════════════════════════════\n');
    console.log('📊 Summary:');
    console.log(`  • home: 1 document`);
    console.log(`  • solutions: ${solutions.length} products`);
    console.log(`  • apps: ${apps.length} applications`);
    console.log(`  • admins: metadata setup\n`);
    console.log('✅ Admin panel is now ready to use!');
    console.log('📱 Visit: https://golfklubb-it-website.web.app/admin\n');
    console.log('Next steps:');
    console.log('  1. Login with owe-admin@golfklubb-it.com');
    console.log('  2. Browse "Home", "Solutions", "Apps"');
    console.log('  3. Edit items or add new ones with "+ New Item"');
    console.log('═════════════════════════════════════════════════════════════\n');

    process.exit(0);
  } catch (error) {
    console.error('❌ Error populating Firestore:', error);
    process.exit(1);
  }
}

populateFirestore();
