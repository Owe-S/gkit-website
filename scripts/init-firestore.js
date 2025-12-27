#!/usr/bin/env node

/**
 * Initialize Firestore collections with sample data
 * Run with: node scripts/init-firestore.js
 */

const admin = require('firebase-admin');
const serviceAccount = require('./service-account-key.json');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  projectId: 'golfklubb-it-website'
});

const db = admin.firestore();

async function initializeCollections() {
  console.log('🚀 Initializing Firestore collections...\n');

  try {
    // 1. Create home collection
    console.log('📄 Creating home collection...');
    await db.collection('home').doc('index').set({
      title: 'Golfklubb-IT - Digital løsninger for golfklubber',
      description: 'Vi tilbyr innovative digital løsninger spesialisert på golfklubber',
      tagline: 'Smart teknologi for smarte klubber',
      createdAt: new Date(),
      updatedAt: new Date(),
    });
    console.log('✅ home collection created\n');

    // 2. Create solutions collection
    console.log('📊 Creating solutions collection...');
    const solutions = [
      {
        id: 'google-workspace',
        title: 'Google Workspace',
        description: 'Profesjonell e-post, samarbeid og lagring for din klubb',
        category: 'Collaboration',
        price: 'Fra kr 29/bruker/måned',
      },
      {
        id: 'golfbox',
        title: 'GolfBox',
        description: 'Automatisering av golfbane og klubbadministrasjon',
        category: 'Management',
        price: 'Kontakt oss',
      },
      {
        id: 'clubsite-cms',
        title: 'ClubsiteCMS',
        description: 'Enkel webside-administrasjon for klubber',
        category: 'Web',
        price: 'Fra kr 199/måned',
      },
    ];

    for (const solution of solutions) {
      await db.collection('solutions').doc(solution.id).set({
        ...solution,
        createdAt: new Date(),
        updatedAt: new Date(),
      });
    }
    console.log('✅ solutions collection created\n');

    // 3. Create apps collection
    console.log('🎯 Creating apps collection...');
    const apps = [
      {
        id: 'soknadsportalen',
        name: 'Søknadsportalen',
        description: 'Digital innlevering og behandling av søknader',
        status: 'active',
      },
      {
        id: 'golfteam-time',
        name: 'GolfTeam Time',
        description: 'Lagplanlegging og turnering-administrasjon',
        status: 'active',
      },
      {
        id: 'booking-kalender',
        name: 'Booking Kalender',
        description: 'Tee-time booking og reservasjonsadministrasjon',
        status: 'active',
      },
      {
        id: 'frivillig-kalender',
        name: 'Frivillig Kalender',
        description: 'Frivilligkoordinering og oppgavedistribusjon',
        status: 'beta',
      },
      {
        id: 'ai-file-analyzer',
        name: 'AI File Analyzer',
        description: 'Intelligent analyse av golfresultater og statistikk',
        status: 'beta',
      },
      {
        id: 'golfbilkontroll',
        name: 'Golfbilkontroll',
        description: 'Administrasjon av klubbens golfbiler og utleie',
        status: 'planned',
      },
    ];

    for (const app of apps) {
      await db.collection('apps').doc(app.id).set({
        ...app,
        createdAt: new Date(),
        updatedAt: new Date(),
      });
    }
    console.log('✅ apps collection created\n');

    // 4. Create blog collection (empty, ready for content)
    console.log('📰 Creating blog collection...');
    await db.collection('blog').doc('_metadata').set({
      description: 'Nyheter og artikler om golfklubber og digital løsninger',
      createdAt: new Date(),
    });
    console.log('✅ blog collection created\n');

    // 5. Create admins collection (for tracking admins)
    console.log('👥 Creating admins collection...');
    await db.collection('admins').doc('_metadata').set({
      description: 'Admin users with access to the admin panel',
      createdAt: new Date(),
    });
    console.log('✅ admins collection created\n');

    console.log('🎉 All collections initialized successfully!');
    console.log('\n📝 Next steps:');
    console.log('1. Add owe-admin@golfklubb-it.com as the first admin user');
    console.log('2. Configure Google OAuth in Firebase Console');
    console.log('3. Test the admin panel: https://golfklubb-it-website.web.app/admin');
    console.log('\n✨ Firestore is ready!\n');

    process.exit(0);
  } catch (error) {
    console.error('❌ Error initializing collections:', error);
    process.exit(1);
  }
}

initializeCollections();
