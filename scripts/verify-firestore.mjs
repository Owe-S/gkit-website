#!/usr/bin/env node

/**
 * Verify Firestore Population  
 * Uses Firebase REST API to check all documents
 */

const PROJECT_ID = 'golfklubb-it-website';
const API_KEY = process.env.FIREBASE_API_KEY;

async function verifyDocument(collectionName, documentId) {
  const url = `https://firestore.googleapis.com/v1/projects/${PROJECT_ID}/databases/(default)/documents/${collectionName}/${documentId}?key=${API_KEY}`;
  
  try {
    const response = await fetch(url);
    if (response.ok) {
      const doc = await response.json();
      return { found: true, doc };
    }
    return { found: false };
  } catch (error) {
    return { found: false, error: error.message };
  }
}

async function main() {
  console.log('\n╔════════════════════════════════════════════════════════════╗');
  console.log('║          VERIFYING FIRESTORE POPULATION                  ║');
  console.log('╚════════════════════════════════════════════════════════════╝\n');

  if (!API_KEY) {
    console.log('⚠️  FIREBASE_API_KEY not set. Please run:');
    console.log('   $env:FIREBASE_API_KEY = "AIzaSyA81DXrTztXQz9eYHeSysneh1fwAzC_GRc"\n');
    process.exit(1);
  }

  const expectedDocs = {
    home: ['homepage'],
    solutions: ['workspace-business', 'clubsite-cms', 'golfbox-automation', 'digital-signage'],
    apps: ['soknadsportalen', 'golfteam-time', 'frivillig-kalender', 'ai-file-analyzer', 'golfbilkontroll', 'booking-kalender']
  };

  let totalVerified = 0;
  let totalExpected = 0;

  for (const [collectionName, docIds] of Object.entries(expectedDocs)) {
    console.log(`\n📁 Checking "${collectionName}" collection...`);
    totalExpected += docIds.length;
    
    for (const docId of docIds) {
      const result = await verifyDocument(collectionName, docId);
      if (result.found) {
        console.log(`   ✅ ${docId}`);
        totalVerified++;
      } else {
        console.log(`   ❌ ${docId} - NOT FOUND`);
      }
    }
  }

  console.log('\n╔════════════════════════════════════════════════════════════╗');
  console.log('║                      VERIFICATION SUMMARY                ║');
  console.log('╚════════════════════════════════════════════════════════════╝\n');

  console.log(`Verified: ${totalVerified}/${totalExpected} documents\n`);

  if (totalVerified === totalExpected) {
    console.log(`✅ SUCCESS: All ${totalVerified} documents verified in Firestore!\n`);
    console.log('📋 Next steps:');
    console.log('1. Go to: https://golfklubb-it-website.web.app/admin');
    console.log('2. Reload the page (F5)');
    console.log('3. Verify all content appears\n');
    process.exit(0);
  } else {
    console.log(`⚠️  Only ${totalVerified}/${totalExpected} documents verified\n`);
    process.exit(1);
  }
}

main();
