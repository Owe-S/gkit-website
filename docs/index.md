# Golfklubbens IT Website

Dokumentasjon for Golfklubbens IT Website - en moderne webløsning bygget med React, TypeScript, Vite og Firebase.

## Formål

Denne dokumentasjonen inneholder:

- Installasjonsinstruksjoner og oppsett
- Arkitektur og teknisk oversikt
- API-dokumentasjon
- Workflows og automatisering
- Guider for brukere og administratorer

## Hvem er dette for?

- **Utviklere** som skal jobbe med GKIT Website
- **Administratorer** som skal drifte løsningen
- **Prosjektledere** som trenger oversikt

## Hurtigstart

1. Installer Python 3.10+
2. Installer Node.js 20+
3. Installer Firebase CLI
4. Klon repositoryet
5. Kjør `npm install`
6. Kjør `npm run dev` for lokal utvikling

## Teknologistack

- **Frontend**: React 19, TypeScript, Vite
- **Backend**: Firebase Functions, Firestore
- **Hosting**: Firebase Hosting
- **Analytics**: Google Analytics 4

## GKIT Produkter & Apper

### Live Apper
- **Søknadsportalen**: https://soknadsportalen.web.app/
- **GolfTeam-Time**: https://golfteam-time-eur.web.app
- **Digital Signage**: https://loftlogic-display.web.app

### Under Testing
- Frivillig-kalender
- AI File Analyzer
- Golfbilkontroll
- Booking & Kalender

### Produkter
- **Google Workspace** - Dokumentasjon: https://owe-s.github.io/workspace-setup-gkit/
- **Digital Signage** - Dokumentasjon: https://owe-s.github.io/GKIT-DigitalSignage-APP/
- **ClubsiteCMS** - Scangolf-produkt: https://clubsite.no (GKIT tilbyr integrasjoner)

### Referanser
- 45+ golfklubber bruker ClubsiteCMS (inkl. Losby, Bærum, Asker, Vestfold)
- 15+ sentre bruker CS Booking (61 simulatorer, 36 instruktører)

## Nylige Oppdateringer (Desember 2025)

### Nytt "Card Stack" Design & Mobiloptimalisering
**Dato:** 24. desember 2025

**✅ Implementert:**
- ✅ **Horisontal Card Stack**: Ny landingsside med horisontal scrolling (snap-scroll) for en mer engasjerende brukeropplevelse.
- ✅ **Mobiloptimalisering**: Full responsivitet med 1-kolonne layout på mobil, redusert padding og tilpassede fontstørrelser.
- ✅ **Brand Audit**: Gjennomført fargerevisjon for å sikre konsistent bruk av Grønn (#4CAF50), Svart (#111827) og Hvit (#FFFFFF).
- ✅ **Branch Strategi**: Flyttet til `main` som standard produksjonsbranch og `dev-v3` som aktiv arbeidsbranch.

### E-post Notifikasjoner - Kontaktskjema
**Dato:** 7. desember 2025

**✅ Implementert:**
- ✅ **Automatiske notifikasjoner** til `kontakt-oss@golfklubb-it.com` distribusjonsliste
- ✅ **GDPR-compliant** - Distribuert i europe-west1 (Belgia)
- ✅ **HTML-formatert e-post** med alle skjemafelt
- ✅ **Lead-lagring** i Firestore med tidsstempel og ID
- ✅ **Firebase Cloud Functions** som utløser ved ny lead
- ✅ **Auto-responder** på distribusjionslisten for kvittering til avsender

**E-post Flyt:**
1. Kunde fyller ut kontaktskjema
2. Lead lagres i Firestore
3. E-post sendes til `kontakt-oss@golfklubb-it.com`
4. Google Groups sender AUTOMATISK kvittering til avsender
5. Distribusjonslistens medlemmer mottar orignal e-post

**E-post Format & Tilpasning:**

E-posten til distribusjionslisten har følgende struktur:

```
Avsender: owe-admin@golfklubb-it.com (via Golfklubbens IT Website)
Mottaker: kontakt-oss@golfklubb-it.com (distribusjonsliste)
Subject: 🔔 Ny henvendelse fra [Fornavn] [Etternavn]

Innhold:
- Navn, mobilnummer, e-post
- GolfBox ID (hvis oppgitt)
- Lead ID (auto-generert)
- Tidsstempel
```

**Å endre e-postmalen:**
1. Rediger `functions/src/index.ts`
2. Finn seksjonen `const mailOptions = { ... html: ... }`
3. Endre HTML-innholdet etter ønske
4. Kjør: `firebase deploy --only functions`

**Eksempel på HTML-endring:**
```typescript
html: `
    <h2 style="color: #4CAF50;">Din egen tittel her</h2>
    <p><strong>Navn:</strong> ${leadData.firstName} ${leadData.lastName}</p>
    <!-- Legg til flere felt etter behov -->
`
```

**Auto-responder til avsender (Google Groups):**

For å endre kvitteringsmeldingen som sendes til kunden:
1. Gå til https://groups.google.com/a/golfklubb-it.com/g/kontakt
2. Klikk **⚙️ Innstillinger**
3. Velg **Innstillinger** → søk etter **"Automatiske svar"** eller **"Auto-responder"**
4. Rediger meldingen etter behov
5. Lagre

### UI/UX Forbedringer - Hybrid Interaktiv Design
**Dato:** 3. desember 2025

**Implementert:**
- ✅ **Interaktive kort** med hover-ekspansjon på forsiden
- ✅ **Status badges**: 🟢 Live / 🟡 Testing på alle prosjekter
- ✅ **Klikbare elementer**: Alle prosjekt- og tjeneste-kort navigerer til riktige sider
- ✅ **Eksterne lenker**: "Åpne app" knapper for live apper
- ✅ **Smooth animasjoner**: cubic-bezier transitions (0.4s)
- ✅ **Mobile touch support**: Fungerer perfekt på touch-enheter
- ✅ **Feature chips**: Vises ved hover på tjeneste-kort
- ✅ **Hero padding fix**: Økt til 120px for bedre synlighet

**Tekniske detaljer:**
- CSS klasser: `.interactive-card`, `.status-badge`, `.card-hover-info`, `.feature-chips`
- Ingen visuelle endringer i design/farger - kun funksjonalitet
- Backup lagret i: `src/_old/Home.tsx.backup` og `src/_old/App.css.backup`

### Content Oppdateringer
**Dato:** 2. desember 2025

**Lagt til:**
- FAQ-seksjoner på alle 9 produkt/app-sider
- Eksterne lenker til live apper og dokumentasjon
- ClubsiteCMS tydeliggjort som Scangolf-produkt med GKIT-integrasjoner
- 45+ referanseklubber listet
- CS Booking info (15+ sentre, 61 simulatorer, 36 instruktører)
- "Under testing" badges på apper under utvikling

**Sider oppdatert:**
- `/products/clubsite` - FAQ + referanser + Scangolf-info
- `/apps/soknadsportalen` - Ekstern lenke + FAQ
- `/apps/golfteam-time` - Live lenke + FAQ
- `/apps/frivillig-kalender` - Testing badge + FAQ
- `/apps/ai-file-analyzer` - Testing badge + FAQ
- `/apps/golfbilkontroll` - Testing badge + FAQ
- `/apps/booking-kalender` - Testing badge + FAQ + CS Booking info
- `/products/workspace` - Dokumentasjonslenke + FAQ + prising
- `/products/signage` - Demo-lenke + dokumentasjon + FAQ

## Innhold

Dokumentasjonen er strukturert slik:

### Komme i gang

Installasjon, miljøoppsett og konfigurasjon for å komme i gang med utviklingen.

### Arkitektur

Oversikt over systemarkitekturen, komponenter og tekniske valg.

### API

Dokumentasjon av API-endepunkter og autentisering.

### Workflows

Oversikt over arbeidsflyter, automatisering og deployment.

### Guider

Brukerhåndbøker og administratorhåndbøker for drift av løsningen.

## Kontakt

For spørsmål eller support, kontakt Golfklubbens IT på [post@gkit.no](mailto:post@gkit.no)
