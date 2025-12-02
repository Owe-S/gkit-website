# Sikkerhet og API-nøkler

Viktig informasjon om sikkerhet i GKIT Website.

## Firebase API-nøkler

### ✅ Firebase API-nøkler er TRYGGE å dele offentlig

Firebase API-nøkkelen i `src/firebase.ts` er **designet for å være offentlig** og er trygt å committe til Git.

**Hvorfor?**

1. **Klient-side nøkler** - Må være tilgjengelige i frontend-koden
2. **Sikkerhet håndteres av Firestore Security Rules** - Ikke av API-nøkkelen
3. **Identifiserer kun prosjektet** - Gir ingen tilgang i seg selv
4. **Google-anbefalt** - Firebase dokumentasjon bekrefter dette er trygt

**Referanse**: [Firebase API Keys Best Practices](https://firebase.google.com/docs/projects/api-keys)

### Eksempel fra vår kode

```typescript
const firebaseConfig = {
    apiKey: "AIzaSyA81DXrTztXQz9eYHeSysneh1fwAzC_GRc",
    authDomain: "golfklubb-it-website.firebaseapp.com",
    projectId: "golfklubb-it-website",
    // ... resten av konfigurasjonen
};
```

Dette er **100% trygt** å ha i offentlig repository.

## Firestore Security Rules

All sikkerhet styres av Firestore Security Rules i `firestore.rules`.

### Våre nåværende regler

```javascript
rules_version = '2';

service cloud.firestore {
  match /databases/{database}/documents {
    
    // Tillat alle å sende kontaktskjema
    match /leads/{leadId} {
      allow create: if true;
      allow read, update, delete: if false;
    }
    
    // Standard: nekt all tilgang
    match /{document=**} {
      allow read, write: if false;
    }
  }
}
```

### Hva betyr dette?

- ✅ **Hvem som helst kan sende kontaktskjema** (`allow create: if true`)
- ✅ **Ingen kan lese data** (`allow read: if false`)
- ✅ **Ingen kan oppdatere eller slette** (`allow update, delete: if false`)
- ✅ **Alt annet er blokkert** (default deny)
- ✅ **Kun Firebase Admin SDK** (server-side) kan administrere data

## Hva skal IKKE committes til Git?

### ❌ ALDRI commit disse:

1. **Firebase Service Account Keys** (`.json` filer)
   ```
   golfklubb-it-website-firebase-adminsdk-xxxxx.json
   ```

2. **Environment variabler med hemmeligheter**
   ```
   .env.local
   .env.production
   ```

3. **Private API nøkler** (tredjepartstjenester)
   ```
   STRIPE_SECRET_KEY=sk_live_xxxxx
   SENDGRID_API_KEY=SG.xxxxx
   ```

4. **OAuth Client Secrets**
   ```
   GOOGLE_CLIENT_SECRET=xxxxx
   ```

### ✅ Trygt å committe:

1. **Firebase client-side konfigurasjon** (`src/firebase.ts`)
2. **Firestore Security Rules** (`firestore.rules`)
3. **Firebase Functions kode** (uten hemmeligheter)
4. **Public API endpoints**

## .gitignore konfigurasjon

Vårt prosjekt har `.gitignore` som ekskluderer sensitive filer:

```gitignore
# Environment filer
.env.local
.env.production

# Firebase
.firebase/
firebase-debug.log
firestore-debug.log
ui-debug.log

# Service account keys
*-firebase-adminsdk-*.json
```

## Best Practices

### 1. Bruk Firebase Security Rules

All tilgangskontroll **må** defineres i Security Rules:

```javascript
// Eksempel: Kun autentiserte brukere
match /private/{document} {
  allow read, write: if request.auth != null;
}

// Eksempel: Kun admin-brukere
match /admin/{document} {
  allow read, write: if request.auth != null && 
                        request.auth.token.admin == true;
}
```

### 2. Aldri stol på client-side validering

Validering i frontend er kun for UX. All sikkerhet **må** håndteres server-side:

- ✅ Firestore Security Rules
- ✅ Firebase Functions validering
- ✅ Backend API validering

### 3. Bruk miljøvariabler for hemmeligheter

Hvis du trenger sensitive nøkler i Firebase Functions:

```typescript
// functions/src/config.ts
import * as functions from 'firebase-functions';

const stripeKey = functions.config().stripe.secret;
```

Sett med:
```bash
firebase functions:config:set stripe.secret="sk_live_xxxxx"
```

### 4. Test Security Rules

Test alltid Security Rules før deployment:

```bash
firebase emulators:start --only firestore
```

### 5. Aldri hardkod hemmeligheter

❌ FEIL:
```typescript
const apiKey = "sk_live_123456789";
```

✅ RIKTIG:
```typescript
const apiKey = process.env.VITE_API_KEY;
```

## Sjekkliste før commit

Før du committer til Git, sjekk:

- [ ] Ingen `.env` filer med hemmeligheter
- [ ] Ingen service account `.json` filer
- [ ] Ingen hardkodede API-nøkler (utenom Firebase client config)
- [ ] Firestore Security Rules er oppdatert
- [ ] `.gitignore` er konfigurert riktig

## Hva gjøre hvis hemmelighet committes?

Hvis du ved et uhell committer en hemmelighet:

### 1. Roter nøkkelen umiddelbart

- Firebase: Regenerer API-nøkkelen i Firebase Console
- GitHub: Revoke tokenet i GitHub Settings
- Tredjepartstjenester: Generer ny nøkkel

### 2. Fjern fra Git-historikk

```bash
# ADVARSEL: Dette omskriver historikk!
git filter-branch --force --index-filter \
  "git rm --cached --ignore-unmatch path/to/secret/file" \
  --prune-empty --tag-name-filter cat -- --all

# Force push (kun hvis absolutt nødvendig)
git push origin --force --all
```

### 3. Bruk GitHub Secret Scanning

GitHub scanner automatisk for kjente hemmeligheter og varsler deg.

## Testing av sikkerhet

### Firebase Security Rules testing

Opprett tester for Security Rules:

```typescript
// firestore.rules.test.ts
import { assertFails, assertSucceeds } from '@firebase/rules-unit-testing';

test('anyone can create a contact form', async () => {
  await assertSucceeds(
    testDb.collection('leads').add({ name: 'Test' })
  );
});

test('no one can read contact forms', async () => {
  await assertFails(
    testDb.collection('leads').doc('test').get()
  );
});
```

## Overvåking

### Firebase Console

Overvåk sikkerhet i Firebase Console:

1. **Security Rules** - Se regelovertredelser
2. **Usage** - Overvåk unormal aktivitet
3. **Authentication** - Sjekk login-forsøk

### GitHub

Aktiver i repository settings:

- ✅ **Secret scanning** - Finn lekkede hemmeligheter
- ✅ **Dependabot alerts** - Sårbare dependencies
- ✅ **Code scanning** - Finn sikkerhetsproblemer

## Kontakt

For sikkerhetsspørsmål eller rapportering av sårbarheter:

- E-post: [post@gkit.no](mailto:post@gkit.no)
- Ikke rapporter sikkerhetsproblemer i offentlige Issues

## Ressurser

- [Firebase Security Rules Guide](https://firebase.google.com/docs/rules)
- [Firebase API Keys Documentation](https://firebase.google.com/docs/projects/api-keys)
- [OWASP Top 10](https://owasp.org/www-project-top-ten/)
- [GitHub Secret Scanning](https://docs.github.com/en/code-security/secret-scanning)
