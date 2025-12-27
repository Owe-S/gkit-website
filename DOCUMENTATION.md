# Golfklubb-IT Website - Dokumentasjon

## Prosjektoversikt

Dette er hovednettsiden for Golfklubb-IT AS - en IT-partner spesialisert på golfklubber.

**Live URL:** https://golfklubb-it-website.web.app

## Teknologi Stack

- **Frontend:** React 19, TypeScript, Vite
- **Styling:** CSS (custom, mobile-first)
- **Hosting:** Firebase Hosting
- **CI/CD:** Firebase CLI
- **Responsive:** Mobile-first design

## Prosjektstruktur

```
src/
├── pages/
│   ├── Home.tsx                 # Forside
│   ├── About.tsx                # Om oss (klassisk)
│   ├── AboutUs.tsx              # Om oss (ny side)
│   ├── Services.tsx             # Tjenester
│   ├── Projects.tsx             # Prosjekter
│   ├── Contact.tsx              # Kontaktskjema
│   ├── Terms.tsx                # Vilkår og betingelser
│   ├── Club2026.tsx             # 2026-kampanje
│   ├── AppsIntegrations.tsx      # Apps & integrasjoner
│   ├── products/
│   │   ├── Workspace.tsx        # Google Workspace (hoved)
│   │   ├── WorkspaceNonprofit.tsx # Google Workspace Non-profit
│   │   ├── WorkspaceTools.tsx    # Google Workspace Tools
│   │   ├── WorkspaceMigration.tsx # Google Workspace Migrering
│   │   ├── ClubsiteCMS.tsx       # ClubsiteCMS produktside
│   │   ├── GolfBox.tsx           # GolfBox automatisering
│   │   └── Signage.tsx           # Digital skilting
│   └── apps/
│       ├── Soknadsportalen.tsx
│       ├── GolfTeamTime.tsx
│       ├── FrivilligKalender.tsx
│       ├── AIFileAnalyzer.tsx
│       ├── Golfbilkontroll.tsx
│       └── BookingKalender.tsx
├── components/
│   ├── Navbar.tsx
│   ├── Footer.tsx
│   ├── ContactForm.tsx
│   └── GraphicFiller.tsx
├── App.tsx                      # Router & layout
├── App.css                      # Globale stiler
└── config/
    └── companyConfig.ts         # Bedriftskonfigurasjon
```

## Ruteoversikt

### Hoved-sider
| URL | Komponent | Beskrivelse |
|-----|-----------|-------------|
| `/` | Home.tsx | Forside |
| `/about` | About.tsx | Om oss (klassisk) |
| `/about-us` | AboutUs.tsx | Om oss (ny detaljside) |
| `/services` | Services.tsx | Alle tjenester |
| `/projects` | Projects.tsx | Prosjekter |
| `/contact` | Contact.tsx | Kontaktskjema |
| `/terms` | Terms.tsx | Vilkår og betingelser |
| `/2026` | Club2026.tsx | 2026-kampanje |
| `/apps` | AppsIntegrations.tsx | Apps & integrasjoner |

### Produkter
| URL | Komponent | Beskrivelse |
|-----|-----------|-------------|
| `/products/workspace` | Workspace.tsx | Google Workspace Business (hoved) |
| `/products/workspace-nonprofit` | WorkspaceNonprofit.tsx | Google Workspace Non-profit pakker |
| `/products/workspace-tools` | WorkspaceTools.tsx | 10 Google Workspace-verktøy |
| `/products/workspace-migration` | WorkspaceMigration.tsx | Migrering fra Outlook/Office |
| `/products/clubsitecms` | ClubsiteCMS.tsx | ClubsiteCMS drift & integrasjon |
| `/products/golfbox` | GolfBox.tsx | GolfBox automatisering |
| `/products/signage` | Signage.tsx | Digital skilting |

### Apps
| URL | Komponent | Beskrivelse |
|-----|-----------|-------------|
| `/apps/soknadsportalen` | Soknadsportalen.tsx | Søknadsportal |
| `/apps/golfteam-time` | GolfTeamTime.tsx | GolfTeam Time |
| `/apps/frivillig-kalender` | FrivilligKalender.tsx | Frivillig kalender |
| `/apps/ai-file-analyzer` | AIFileAnalyzer.tsx | AI File Analyzer |
| `/apps/golfbilkontroll` | Golfbilkontroll.tsx | Golfbil-kontroll |
| `/apps/booking-kalender` | BookingKalender.tsx | Booking kalender |

## Nøkkelfunksjoner

### Google Workspace (4-siders struktur)
**Mål:** SEO-optimalisert med separate sider for hver intent
- **Hoved** (`/products/workspace`) - Business Edition, prismodell, CTA
- **Non-profit** (`/products/workspace-nonprofit`) - Gratis/rabattert pakker, søknadsprosess
- **Tools** (`/products/workspace-tools`) - 10 verktøy med expandable cards, sammenligningstabel
- **Migration** (`/products/workspace-migration`) - 4-stegs prosess, sikkerhet, FAQ

**Intern linking:** Alle sider lenker til hverandre for bedre SEO

### Mobile-first Design
- 2x2 grids for 4 bokser (ikke 3+1)
- Responsive CSS Grid med `repeat(auto-fit, minmax())`
- Touch-friendly knapper og ikoner
- Expandable modals for detaljer

### Ryddig Forside
- Fjernet kontaktskjema fra Home.tsx
- 4 produkt-bokser i 2x2 grid
- Egen `/contact` side for kontaktskjema
- Egen `/about-us` side for detaljert om oss
- Egen `/terms` side for vilkår

## Google Workspace - Content Detaljer

### Non-profit Pakker
- **Gratis (Nonprofit Starter):** 0 kr/bruker/måned, 30 GB lagring
- **Business Standard (75% rabatt):** ~2,70 EUR/bruker/måned, ubegrenset lagring
- **Business Plus (75% rabatt):** ~4,50 EUR/bruker/måned, 5 TB + Vault

### 10 Verktøy
1. Gmail Business (@dinklub.no)
2. Google Drive (ubegrenset)
3. Google Meet (100-250 deltakere)
4. Shared Drives (for styret)
5. Google Calendar (felles)
6. Google Docs/Sheets (sanntids samarbeid)
7. Google Forms (påmeldinger)
8. Google Sites (intranet)
9. Admin Console (brukerstyring)
10. Sikkerhet & GDPR

## Deployment

### Bygging
```bash
npm run build
```
Genererer optimalisert build i `dist/` folder

### Deployment til Firebase Hosting
```bash
firebase deploy --only hosting
```

### Deployment av Functions (hvis nødvendig)
```bash
firebase deploy --only functions
```

## Miljøvariabler

Se `src/config/companyConfig.ts` for:
- E-post
- Telefonnummer
- Andre bedriftskonfigurasjoner

## GitHub Pages Dokumentasjon

**Organisasjon:** Golfklubb-IT  
**GitHub URL:** https://github.com/Golfklubb-IT  
**Nettside GitHub Pages:** https://golfklubb-it.github.io/gkit-website

### Repositories
1. **gkit-website** (dette prosjektet) - Hoved-nettside
2. **GreenView-Infrastructure-Golf** - Infrastruktur for golfbaner
3. **GolfChart-MultiClub** - Multi-klubb booking system
4. **GKIT-DigitalSignage-APP** - Digital skilting app
5. **workspace-setup-gkit** - Dokumentasjon for Workspace-oppsett
6. **soknadsportalen** - Søknadsportal
7. **GolfbilUtleie** - Golfbil-utleiesystem
8. **ClubsiteCMS** - CMS for klubbsider

## SEO Optimalisering

### Nøkkelteknikker
- ✅ Separate URLs for hver produktkategori
- ✅ Intern linking mellom relaterte sider
- ✅ Mobile-first responsive design
- ✅ Meta descriptions (legacy - kan forbedres)
- ✅ Semantic HTML5
- ✅ Fast loading (Vite optimisering)

### Områder for forbedring
- [ ] Legg til meta descriptions i hver side
- [ ] Implementer structured data (JSON-LD)
- [ ] Sitemap.xml generering
- [ ] Open Graph meta tags for social sharing

## Styling & Design System

### Farger
- Primær grønn: `#4CAF50` (var(--color-gkit-green))
- Bakgrunn mørk: `#1a1a1a` (var(--color-bg-dark))
- Tekst grå: `#b0b0b0` (var(--color-gray-light))

### Komponenter
- `.service-card` - Produkt/feature bokser
- `.btn.btn-primary` - Primær CTA
- `.btn.btn-secondary` - Sekundær CTA
- `.hero` - Hero section
- `.contact` - Kontakt seksjon
- `.services-grid` - Grid med produkter

## Vedlikehold & Oppdateringer

### Regelmessige oppgaver
1. Oppdater produktbeskrivelser basert på partner-data
2. Hold priser oppdatert (Google Workspace, GolfBox, etc.)
3. Legg til case studies fra nye klubber
4. Oppdater support/FAQ seksjonene

### Testing
- Test responsive layout på mobil/tablet/desktop
- Sjekk alle interne lenker
- Test kontaktskjema
- Verify Firebase deployment

## Admin Panel (Innholdsstyring)

**URL:** https://golfklubb-it-website.web.app/admin

### Teknologi
- Custom React admin panel (ingen external CMS)
- Firebase Authentication (Google Sign-in)
- Firestore for data storage
- Serverless - ingen backend

### Autentisering
- **Primær admin:** `owe-admin@golfklubb-it.com` (via Google Sign-in)
- **Framtidig:** Invitation system for tilleggsadmins
- Sign-in ved besøk på `/admin` URL

### OAuth 2.0 Setup
**Status:** Scripts ready, manual configuration required

**Automated setup:**
```bash
# Display configuration guide
node scripts/configure-oauth.mjs

# Advanced setup with gcloud detection
node scripts/setup-oauth-auto.mjs
```

**Manual configuration required:**
1. Go to: https://console.cloud.google.com/apis/credentials?project=golfklubb-it-website
2. Add 3 redirect URIs to OAuth client:
   - `https://golfklubb-it-website.web.app/__/auth/handler`
   - `https://golfklubb-it-website.web.app/`
   - `http://localhost:5173/`
3. Go to: https://console.cloud.google.com/apis/consent/screen?project=golfklubb-it-website
4. Add test user: `owe-admin@golfklubb-it.com`
5. Wait 5-10 minutes for propagation
6. Test login at admin panel

**Reference files:**
- `OAUTH_CONFIGURATION_STEPS.md` - Full step-by-step guide
- `scripts/configure-oauth.mjs` - Configuration display script
- `scripts/setup-oauth-auto.mjs` - Advanced setup with gcloud detection

### Collections (Firestore)
```
home/          - Forside data (hero, tagline, features)
solutions/     - Produkter og løsninger
apps/          - App-katalog og integrasjoner
blog/          - Nyheter og artikler
admins/        - Admin brukerdata
invitations/   - Invite tokens for nye admins (kommende)
```

## Kontakt & Support

**GitHub Org:** https://github.com/Golfklubb-IT  
**E-post:** Se `companyConfig.ts`  
**Telefon:** Se `companyConfig.ts`

---

*Sist oppdatert: December 27, 2025*
