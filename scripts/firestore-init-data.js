// Firestore initialization data
// This creates initial collections and documents when initialized
db.collection('home').doc('index').set({
  title: 'Golfklubb-IT - Digital løsninger for golfklubber',
  description: 'Vi tilbyr innovative digital løsninger spesialisert på golfklubber',
  tagline: 'Smart teknologi for smarte klubber',
  createdAt: new Date(),
  updatedAt: new Date(),
});

// Solutions collection
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

solutions.forEach(solution => {
  db.collection('solutions').doc(solution.id).set({
    ...solution,
    createdAt: new Date(),
    updatedAt: new Date(),
  });
});

// Apps collection
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

apps.forEach(app => {
  db.collection('apps').doc(app.id).set({
    ...app,
    createdAt: new Date(),
    updatedAt: new Date(),
  });
});

// Blog collection (empty for now)
db.collection('blog').doc('_metadata').set({
  description: 'Nyheter og artikler om golfklubber og digital løsninger',
  createdAt: new Date(),
});

console.log('✅ Firestore collections initialized!');
