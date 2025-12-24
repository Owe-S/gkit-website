# Administratorhåndbok

Guide for administratorer av GKIT Website.

## Tilgang

### Firebase Console

Logg inn på [Firebase Console](https://console.firebase.google.com/):

- Prosjekt: `golfklubb-it-website`
- URL: `https://console.firebase.google.com/u/0/project/golfklubb-it-website`

### Roller og tilganger

- **Owner** - Full tilgang
- **Editor** - Kan endre konfigurasjon og data
- **Viewer** - Kun lesetilgang

## Administrere kontakthenvendelser

### Firestore Console

1. Gå til Firebase Console
2. Velg "Firestore Database"
3. Naviger til `contacts`-collection
4. Se alle henvendelser

### Felter i kontakt-dokumenter

```json
{
  "name": "Kontaktpersonens navn",
  "email": "E-postadresse",
  "company": "Klubb/Bedrift",
  "interest": "Interesseområde",
  "message": "Melding",
  "timestamp": "2025-12-02T10:30:00Z",
  "status": "new | contacted | closed"
}
```

### Endre status

1. Åpne kontakt-dokumentet
2. Endre `status`-feltet:
   - `new` - Ny henvendelse
   - `contacted` - Kontaktet
   - `closed` - Lukket

## Administrere innhold

### Firestore CMS (Nytt i Desember 2025)

Nettsiden henter nå innholdet sitt dynamisk fra **Firebase Firestore**. Dette betyr at du kan endre tekst, ikoner og lenker uten å skrive kode.

#### Slik endrer du innholdet:

1. Logg inn på [Firebase Console](https://console.firebase.google.com/).
2. Gå til **Firestore Database**.
3. Finn samlingen (Collection) `content`.
4. Velg dokumentet `home`.
5. Her ser du alle feltene som styrer forsiden:
    - `hero`: Overskrift, tagline, beskrivelse og knapper.
    - `challenges`: Liste over utfordringer.
    - `solutions`: Liste over løsninger med ikoner.
    - `apps`: Oversikt over live applikasjoner.
    - `benefits`: Fordeler ved å velge GKIT.

### Mock CMS (Gammelt oppsett)

Innhold for blogg og visse tjenester styres fortsatt av `src/mock_cms.json`:

## Firebase Hosting

### Deploy ny versjon

```bash
# Build
npm run build

# Deploy
firebase deploy --only hosting
```

### Rollback

```bash
# Se hosting-historikk
firebase hosting:channel:list

# Rollback til forrige versjon
firebase hosting:clone source:target
```

### Custom domain

Sett opp custom domain i Firebase Console:

1. Gå til "Hosting"
2. Klikk "Add custom domain"
3. Følg instruksjonene
4. Oppdater DNS-records

## Firebase Functions

### Administrere Functions

```bash
# Deploy functions
firebase deploy --only functions

# Se function logs
firebase functions:log

# Delete function
firebase functions:delete functionName
```

### Function-miljøvariabler

```bash
# Sett miljøvariabel
firebase functions:config:set api.key="secret-key"

# Hent konfigurasjon
firebase functions:config:get

# Deploy etter endring
firebase deploy --only functions
```

## Firestore

### Backup

Manuell backup:

```bash
gcloud firestore export gs://backup-bucket/backup-$(date +%Y%m%d)
```

Automatisk backup (sett opp i Firebase Console):

1. Gå til "Firestore Database"
2. Klikk "Import/Export"
3. Sett opp scheduled export

### Indexes

Opprett indexes for queries:

1. Kjør query som feiler
2. Firebase gir lenke til å opprette index
3. Klikk lenken og opprett index

Eller definer i `firestore.indexes.json`:

```json
{
  "indexes": [
    {
      "collectionGroup": "contacts",
      "queryScope": "COLLECTION",
      "fields": [
        { "fieldPath": "status", "order": "ASCENDING" },
        { "fieldPath": "timestamp", "order": "DESCENDING" }
      ]
    }
  ]
}
```

## Analytics

### Google Analytics 4

Se statistikk i [GA4 Console](https://analytics.google.com/):

- Sidevisninger
- Brukerflyt
- Konverteringer
- Events

### Firebase Analytics

Se realtime analytics i Firebase Console:

1. Gå til "Analytics"
2. Se dashboard med:
   - Active users
   - Top events
   - Top pages

## Monitoring

### Performance Monitoring

Firebase Performance Monitoring:

1. Gå til "Performance" i Firebase Console
2. Se metrics:
   - Page load time
   - Network requests
   - Custom traces

### Error Logging

Se feil i Firebase Console:

1. Gå til "Functions"
2. Klikk "Logs"
3. Filtrer på "Error"

## Sikkerhet

### Firestore Rules

Sikkerhet defineres i `firestore.rules`:

```javascript
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /contacts/{contactId} {
      allow create: if true;
      allow read, update: if request.auth != null;
    }
  }
}
```

Deploy rules:

```bash
firebase deploy --only firestore:rules
```

### Security Best Practices

1. ✅ Test rules med Firebase Emulator
2. ✅ Aldri commit hemmeligheter til git
3. ✅ Bruk miljøvariabler for API-nøkler
4. ✅ Aktiver 2FA for Firebase-konto
5. ✅ Review Security-fanen i Firebase Console

## Kostnader

### Firebase Pricing

Overvåk kostnader i Firebase Console:

1. Gå til "Usage and billing"
2. Se breakdown:
   - Hosting bandwidth
   - Firestore reads/writes
   - Function invocations

### Spark Plan (Gratis)

Nåværende plan har grenser:

- Hosting: 10 GB storage, 360 MB/dag
- Firestore: 1 GB storage, 50K reads/dag
- Functions: 125K invocations/måned

### Blaze Plan (Pay-as-you-go)

Oppgrader hvis nødvendig for:

- Mer trafikk
- Flere Functions-invocations
- Scheduled Functions

## Support

### Teknisk support

- Firebase Support: [Firebase Support](https://firebase.google.com/support)
- GitHub Issues: Rapporter bugs i repository

### GKIT Intern Support

- Teknisk ansvarlig: [kontakt internt]
- Prosjektleder: [kontakt internt]

## Neste steg

Les mer om [Workflows](../workflows/overview.md) for deployment og CI/CD.
