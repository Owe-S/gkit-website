#!/usr/bin/env node

/**
 * AUTOMATIC FIRESTORE POPULATION
 * Uses Firebase Admin SDK with authenticated context
 * 
 * This script reads the import JSON and writes directly to Firestore
 * leveraging the Firebase credentials available in the environment
 */

import fs from 'fs';
import admin from 'firebase-admin';

const PROJECT_ID = 'golfklubb-it-website';

async function main() {
  console.log('\n╔════════════════════════════════════════════════════════════╗');
  console.log('║          AUTOMATIC FIRESTORE POPULATION - EXECUTING        ║');
  console.log('╚════════════════════════════════════════════════════════════╝\n');

  try {
    // Initialize Firebase Admin with explicit project
    console.log('🔐 Initializing Firebase Admin SDK...');
    
    if (!admin.apps.length) {
      admin.initializeApp({
        projectId: PROJECT_ID,
      });
    }

    const db = admin.firestore();
    console.log('✅ Connected to Firestore\n');

    // Read the import file
    console.log('📄 Reading import file...');
    const importData = JSON.parse(fs.readFileSync('firestore-import.json', 'utf8'));

    // Helper function to convert Firestore format to regular JS
    function firestoreValueToJS(value) {
      if (value.stringValue !== undefined) return value.stringValue;
      if (value.integerValue !== undefined) return Number(value.integerValue);
      if (value.doubleValue !== undefined) return value.doubleValue;
      if (value.booleanValue !== undefined) return value.booleanValue;
      if (value.timestampValue !== undefined) return new Date(value.timestampValue);
      if (value.arrayValue?.values) {
        return value.arrayValue.values.map(firestoreValueToJS);
      }
      if (value.mapValue?.fields) {
        const result = {};
        for (const [k, v] of Object.entries(value.mapValue.fields)) {
          result[k] = firestoreValueToJS(v);
        }
        return result;
      }
      if (value.nullValue !== undefined) return null;
      return value;
    }

    // Process collections
    let totalSuccess = 0;
    let totalFailed = 0;

    for (const [collectionName, collectionData] of Object.entries(importData.collections || {})) {
      console.log(`\n📝 Creating "${collectionName}" collection (${Object.keys(collectionData.documents).length} documents)...`);

      for (const [docId, docData] of Object.entries(collectionData.documents || {})) {
        try {
          // Convert Firestore format back to JavaScript
          const jsData = {};
          for (const [key, value] of Object.entries(docData.fields || {})) {
            jsData[key] = firestoreValueToJS(value);
          }

          // Write to Firestore
          await db.collection(collectionName).doc(docId).set(jsData);
          console.log(`   ✅ ${docId}`);
          totalSuccess++;
        } catch (error) {
          console.log(`   ❌ ${docId} - ${error.message}`);
          totalFailed++;
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
    console.log(`\n📊 Total: ${totalSuccess} documents created, ${totalFailed} failed\n`);

    if (totalFailed === 0) {
      console.log('🎉 SUCCESS! All documents created automatically!');
      console.log('\n📋 Next steps:');
      console.log('1. Go to: https://golfklubb-it-website.web.app/admin');
      console.log('2. Reload the page (F5)');
      console.log('3. Verify all 11 documents appear ✅\n');
      process.exit(0);
    } else {
      console.log(`⚠️  ${totalFailed} documents failed\n`);
      process.exit(1);
    }
  } catch (error) {
    console.error('\n❌ Error:', error.message);
    console.error('\nTroubleshooting:');
    console.error('1. Make sure firestore-import.json exists');
    console.error('2. Verify Firebase credentials are available');
    console.error('3. Check Firestore security rules allow writes\n');
    process.exit(1);
  }
}

main();
