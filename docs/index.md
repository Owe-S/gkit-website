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
