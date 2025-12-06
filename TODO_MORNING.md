# 📋 Oppgaveliste - Fredag 6. desember 2025

## 🔴 Kritisk - Firebase Functions Deploy (GDPR)

### Problem
Firebase Functions deployment feiler for `europe-west1` (GDPR-compliant region) med permissions-feil.

---

## 📖 DETALJERT GUIDE: Fikse Service Account Permissions

### Metode 1: Google Cloud Console (ANBEFALT - Enklest)

#### Steg 1: Åpne Google Cloud IAM
1. Gå til: https://console.cloud.google.com/iam-admin/iam?project=golfklubb-it-website
2. Logg inn med `owe-admin@golfklubb-it.com`

#### Steg 2: Finn Service Account
1. I listen, **scroll ned** til du ser:
   ```
   186711894198-compute@developer.gserviceaccount.com
   ```
2. Denne har sannsynligvis bare "Editor" rolle nå

#### Steg 3: Legg til ny rolle
1. Klikk på **✏️ Edit/Rediger-ikonet** (blyant) til **høyre** for service account
2. En sidebar åpnes med "Edit permissions"
3. Klikk på **"+ ADD ANOTHER ROLE"** knappen
4. I dropdown-menyen:
   - Søk etter: `Storage Object Viewer`
   - Eller søk: `storage.objectViewer`
5. Velg: **Storage Object Viewer**
6. Klikk **"SAVE"** nederst

#### Steg 4: Verifiser
1. Refresh siden
2. Sjekk at `186711894198-compute@developer.gserviceaccount.com` nå har **BEGGE** rollene:
   - ✅ Editor
   - ✅ Storage Object Viewer

---

### Metode 2: Kommandolinje (gcloud CLI)

Hvis Metode 1 ikke fungerer, bruk terminal:

#### Steg 1: Sett riktig prosjekt
```bash
gcloud config set project golfklubb-it-website
```

#### Steg 2: Autentiser med din admin-bruker
```bash
gcloud auth login
```
- Velg: `owe-admin@golfklubb-it.com`

#### Steg 3: Gi Storage Object Viewer rolle
```bash
gcloud projects add-iam-policy-binding golfklubb-it-website \
  --member="serviceAccount:186711894198-compute@developer.gserviceaccount.com" \
  --role="roles/storage.objectViewer"
```

#### Steg 4: Verifiser rollene
```bash
gcloud projects get-iam-policy golfklubb-it-website \
  --flatten="bindings[].members" \
  --filter="bindings.members:186711894198-compute@developer.gserviceaccount.com"
```

Du skal se **begge** rollene listet.

---

### Metode 3: Firebase Console (Hvis de andre feiler)

#### Steg 1: Åpne Firebase Service Accounts
1. Gå til: https://console.firebase.google.com/project/golfklubb-it-website/settings/serviceaccounts/adminsdk

#### Steg 2: Gå til Google Cloud Platform
1. Klikk på lenken: **"Manage service account permissions in Google Cloud Console"**
2. Dette tar deg til IAM-siden (samme som Metode 1)

#### Steg 3: Følg Metode 1 fra steg 2

---

## 🚀 Etter Permissions er fikset

### Deploy Cloud Functions
```bash
cd c:/Dev/Gkit-ENK/gkit-website
firebase deploy --only functions
```

### Forventet output:
```
✔ functions[sendLeadNotification(europe-west1)] Successful create operation.
✔ functions[submitContactForm(europe-west1)] Successful create operation.
```

### Verifiser region
```bash
firebase functions:list
```

Du skal se:
```
sendLeadNotification(europe-west1)
submitContactForm(europe-west1)
```

**VIKTIG:** Begge skal vise `europe-west1` (GDPR-compliant), **IKKE** `us-central1`

---

## ❓ Hvis det fortsatt feiler

### Alternativ løsning: Bruk Project Editor rolle i stedet

Hvis Storage Object Viewer ikke fungerer, prøv å gi **bredere** tilgang:

```bash
gcloud projects add-iam-policy-binding golfklubb-it-website \
  --member="serviceAccount:186711894198-compute@developer.gserviceaccount.com" \
  --role="roles/cloudfunctions.developer"
```

Eller via Console:
1. Samme steg som Metode 1
2. Men velg rolle: **Cloud Functions Developer** i stedet

---

## 📞 Hvis ingenting fungerer

**Siste utvei - Kontakt Google Support:**
1. Gå til: https://console.cloud.google.com/support?project=golfklubb-it-website
2. Forklar: "Cannot deploy Cloud Functions to europe-west1 due to Storage permissions"
3. Nevn service account: `186711894198-compute@developer.gserviceaccount.com`

---

## ✅ Suksess-kriterier

**Du vet det fungerer når:**
1. ✅ `firebase deploy --only functions` kjører uten feil
2. ✅ `firebase functions:list` viser `europe-west1` (ikke us-central1)
3. ✅ Test kontaktskjemaet → e-post kommer til `kontakt-oss@golfklubb-it.com`

---

## ✅ Fullført i går

- ✅ Forenklet kontaktskjema (Fornavn, Etternavn, Mobil, E-post, GolfBox ID)
- ✅ Rebrand: "GKIT" → "Golfklubbens IT" overalt
- ✅ Firebase Cloud Function opprettet for e-postvarsling
- ✅ Nodemailer + Gmail SMTP konfigurert
- ✅ Gmail credentials satt (app password: `cknaueso trvicrat`)
- ✅ Region endret fra `us-central1` (USA) → `europe-west1` (GDPR)
- ✅ HTML mockup opprettet (`CONTACT_PAGE_MOCKUP.html`)
- ✅ Dokumentasjonsrutine etablert (`.github/DOCS-UPDATE-CHECKLIST.md`)

---

## 📝 Status nå

**Funksjonalitet klar:**
- Kontaktskjema samler data i Firestore
- Cloud Function skal sende e-post til `kontakt-oss@golfklubb-it.com`
- GDPR-compliant (europe-west1)

**Blokkert av:**
- Google Cloud Storage permissions for compute service account

---

## 🔧 Hvis permissions-problemet fortsetter

**Plan B - Bruk .env fil i stedet:**

1. Opprett `functions/.env`:
   ```
   GMAIL_USER=kontakt-oss@golfklubb-it.com
   GMAIL_APP_PASSWORD=cknaueso trvicrat
   ```

2. Oppdater `functions/src/index.ts` til å bruke `.env` i stedet for `functions.config()`

3. Deploy med dotenv (moderne metode, ikke deprecated)

---

## 📚 Dokumentasjon

- `EMAIL_NOTIFICATIONS_SETUP.md` - Guide for e-postvarsling
- `CONTACT_PAGE_MOCKUP.html` - Design-preview av kontaktside
- `.github/DOCS-UPDATE-CHECKLIST.md` - Dokumentasjonsrutine

---

## 🚀 Når alt er ferdig

**Test e-postvarsling:**
1. Gå til nettsiden
2. Fyll ut kontaktskjemaet
3. Sjekk `kontakt-oss@golfklubb-it.com` for varsel-e-post

**Oppdater dokumentasjon:**
1. Legg til "Hva ble gjort" i `docs/index.md`
2. Kjør `mkdocs gh-deploy` for å publisere docs
3. Commit og push alt til GitHub

---

## 💡 Tips

- Firebase Console: https://console.firebase.google.com/project/golfklubb-it-website
- Cloud Functions logs: `firebase functions:log`
- Test lokalt: `firebase emulators:start`

---

**Prioritet:** 🔴 Høy - GDPR-compliant e-postvarsling må fungere før produksjon.
