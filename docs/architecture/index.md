# Arkitektur Oversikt

Teknisk oversikt over GKIT Website arkitekturen.

## Systemarkitektur

GKIT Website er bygget som en moderne single-page application (SPA) med følgende komponenter:

### Frontend

- **React 19** - UI-rammeverk
- **TypeScript** - Type-sikkerhet
- **Vite** - Build-tool og dev-server
- **React Router** - Navigasjon og routing

### Backend

- **Firebase Functions** - Serverless backend
- **Firestore** - NoSQL database
- **Firebase Hosting** - Static hosting

### Analytics

- **Google Analytics 4** - Brukeranalyse via `react-ga4`

## Mappestruktur

```text
gkit-website/
├── src/
│   ├── components/      # React-komponenter
│   ├── pages/           # Sider og routes
│   ├── assets/          # Statiske filer
│   ├── firebase.ts      # Firebase-konfigurasjon
│   ├── App.tsx          # Hovedkomponent
│   └── main.tsx         # Entry point
├── functions/           # Firebase Functions
│   ├── src/
│   └── lib/
├── public/              # Public assets
├── docs/                # MkDocs-dokumentasjon
├── firebase.json        # Firebase-konfigurasjon
├── firestore.rules      # Firestore-regler
├── vite.config.ts       # Vite-konfigurasjon
└── package.json         # Avhengigheter
```

## Komponenter

### Navigasjon

`Navbar.tsx` - Hovednavigasjon med responsive meny.

### Skjemaer

`ContactForm.tsx` - Kontaktskjema med Firebase-integrasjon.

### Grafiske elementer

`GraphicFiller.tsx` - Dekorative grafiske elementer.

## Sider

Alle sider ligger i `src/pages/`:

- `Home.tsx` - Forside
- `Services.tsx` - Tjenester
- `Projects.tsx` - Prosjektoversikt
- `About.tsx` - Om GKIT
- `Club2026.tsx` - Club 2026 initiativ

### Produktsider

Egne sider for produkter i `src/pages/products/`:

- `ClubsiteCMS.tsx`
- `GolfBox.tsx`
- `Signage.tsx`
- `Workspace.tsx`

### App-sider

Egne sider for apps i `src/pages/apps/`:

- `AIFileAnalyzer.tsx`
- `BookingKalender.tsx`
- `FrivilligKalender.tsx`
- `Golfbilkontroll.tsx`
- `GolfTeamTime.tsx`
- `Soknadsportalen.tsx`

## Dataflyt

1. Bruker navigerer til siden.
2. React Router laster riktig side-komponent.
3. **Firestore CMS**: Forsiden (`Home.tsx`) henter dynamisk innhold fra Firestore-samlingen `content/home`. Hvis Firestore er utilgjengelig, brukes lokale fallback-filer (`src/config/homeContent.ts`).
4. Firebase Functions håndterer server-side logikk (f.eks. e-postvarsling ved nye leads).
5. Google Analytics tracker brukeraktivitet

## Deployment

Deployment skjer via Firebase Hosting:

```bash
npm run build
firebase deploy
```

Build-prosessen:

1. TypeScript kompileres til JavaScript
2. Vite bygger optimalisert produksjonsbuild
3. Output genereres i `dist/`
4. Firebase deployer `dist/` til hosting

## Sikkerhet

- Firestore-regler definert i `firestore.rules`
- Firebase Functions kjører i sikret miljø
- HTTPS enforced på alle endepunkter

## Neste steg

Se [Diagrammer](diagrams.md) for visuell representasjon av arkitekturen.
