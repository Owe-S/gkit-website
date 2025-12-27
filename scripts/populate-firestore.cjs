#!/usr/bin/env node

/**
 * Initialize Firestore with Golfklubb-IT content via REST API
 * Requires: FIREBASE_API_KEY environment variable or use --key flag
 */

const https = require('https');
const path = require('path');

const PROJECT_ID = 'golfklubb-it-website';
const API_KEY = process.env.FIREBASE_API_KEY || 'AIzaSyA81DXrTztXQz9eYHeSysneh1fwAzC_GRc';

async function writeToFirestore(collection, docId, data) {
  return new Promise((resolve, reject) => {
    const url = `https://firestore.googleapis.com/v1/projects/${PROJECT_ID}/databases/(default)/documents/${collection}/${docId}?key=${API_KEY}`;
    
    const payload = {
      fields: Object.entries(data).reduce((acc, [key, value]) => {
        acc[key] = serializeValue(value);
        return acc;
      }, {})
    };

    const postData = JSON.stringify(payload);
    const options = {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
        'Content-Length': postData.length
      }
    };

    const req = https.request(url, options, (res) => {
      let responseData = '';
      res.on('data', chunk => responseData += chunk);
      res.on('end', () => {
        if (res.statusCode >= 400) {
          reject(new Error(`HTTP ${res.statusCode}: ${responseData}`));
        } else {
          resolve(JSON.parse(responseData));
        }
      });
    });

    req.on('error', reject);
    req.write(postData);
    req.end();
  });
}

function serializeValue(value) {
  if (value === null) return { nullValue: null };
  if (typeof value === 'string') return { stringValue: value };
  if (typeof value === 'number') return { doubleValue: value };
  if (typeof value === 'boolean') return { booleanValue: value };
  if (value instanceof Date) return { timestampValue: value.toISOString() };
  if (Array.isArray(value)) {
    return { arrayValue: { values: value.map(serializeValue) } };
  }
  if (typeof value === 'object') {
    return {
      mapValue: {
        fields: Object.entries(value).reduce((acc, [k, v]) => {
          acc[k] = serializeValue(v);
          return acc;
        }, {})
      }
    };
  }
  return { stringValue: String(value) };
}

async function populateFirestore() {
  console.log('🚀 Populating Firestore with Golfklubb-IT content...\n');

  try {
    // ============================================================================
    // 1. HOME
    // ============================================================================
    console.log('📄 Creating home collection...');
    await writeToFirestore('home', 'index', {
      title: 'Golfklubb-IT - Digital løsninger for golfklubber',
      description: 'Vi tilbyr innovative digital løsninger spesialisert på golfklubber. Fra e-post og samarbeid til full klubbadministrasjon.',
      tagline: 'Stabil drift. Smarte systemer.',
      createdAt: new Date(),
      updatedAt: new Date(),
    });
    console.log('✅ home collection created\n');

    // ============================================================================
    // 2. SOLUTIONS
    // ============================================================================
    console.log('📊 Creating solutions collection...');
    const solutions = [
      {
        id: 'google-workspace',
        title: 'Google Workspace',
        description: 'Profesjonell e-post, samarbeid og lagring for hele klubben.',
        category: 'Collaboration',
        price: 'Fra kr 29/bruker/måned',
      },
      {
        id: 'golfbox',
        title: 'GolfBox',
        description: 'Fullstendig administrasjon av golfbane og medlemmer.',
        category: 'Management',
        price: 'Fra kr 500/måned',
      },
      {
        id: 'clubsite-cms',
        title: 'ClubsiteCMS',
        description: 'Enkel webside-administrasjon for klubber.',
        category: 'Web',
        price: 'Fra kr 199/måned',
      },
      {
        id: 'digital-signage',
        title: 'Digital Skilting',
        description: 'Moderne display for klubben.',
        category: 'Communication',
        price: 'Fra kr 2.000',
      },
    ];

    for (const solution of solutions) {
      await writeToFirestore('solutions', solution.id, {
        ...solution,
        createdAt: new Date(),
        updatedAt: new Date(),
      });
      console.log(`  ✓ ${solution.title}`);
    }
    console.log(`✅ solutions collection created (${solutions.length} items)\n`);

    // ============================================================================
    // 3. APPS
    // ============================================================================
    console.log('🎯 Creating apps collection...');
    const apps = [
      {
        id: 'soknadsportalen',
        name: 'Søknadsportalen',
        description: 'Digital innlevering og behandling av søknader.',
        status: 'active',
      },
      {
        id: 'golfteam-time',
        name: 'GolfTeam Time',
        description: 'Lagplanlegging og turnering-administrasjon.',
        status: 'active',
      },
      {
        id: 'booking-kalender',
        name: 'Booking Kalender',
        description: 'Tee-time booking og reservasjon av greens.',
        status: 'active',
      },
      {
        id: 'frivillig-kalender',
        name: 'Frivillig Kalender',
        description: 'Koordinering av frivillig arbeid.',
        status: 'beta',
      },
      {
        id: 'ai-file-analyzer',
        name: 'AI File Analyzer',
        description: 'Intelligent analyse av golfresultater.',
        status: 'beta',
      },
      {
        id: 'golfbilkontroll',
        name: 'Golfbilkontroll',
        description: 'Administrasjon av klubbens golfbiler.',
        status: 'planned',
      },
    ];

    for (const app of apps) {
      await writeToFirestore('apps', app.id, {
        ...app,
        createdAt: new Date(),
        updatedAt: new Date(),
      });
      console.log(`  ✓ ${app.name}`);
    }
    console.log(`✅ apps collection created (${apps.length} items)\n`);

    console.log('═════════════════════════════════════════════════════════════');
    console.log('🎉 Firestore populated successfully!');
    console.log('═════════════════════════════════════════════════════════════\n');
    console.log('✅ Admin panel is now ready to use!');
    console.log('📱 Visit: https://golfklubb-it-website.web.app/admin\n');

    process.exit(0);
  } catch (error) {
    console.error('❌ Error:', error.message);
    process.exit(1);
  }
}

populateFirestore();
