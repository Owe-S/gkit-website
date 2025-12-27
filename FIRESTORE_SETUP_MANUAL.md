# Populate Firestore via Firebase Console

Du kan legge inn content manuelt i Firebase Console - det er enklest!

## Metode 1: Manuelt via Firebase Console (Anbefalt)

### 1. Åpne Firebase Console
1. Gå til: https://console.firebase.google.com/project/golfklubb-it-website/firestore
2. Klikk **+ Add collection**

### 2. Opprett "home" Collection

**Collection ID:** `home`

Klikk **Create**

Så add document:
- **Document ID:** `index`
- Legg til felt:
  - `title` (string): "Golfklubb-IT - Digital løsninger for golfklubber"
  - `tagline` (string): "Stabil drift. Smarte systemer."
  - `description` (string): "Vi tilbyr innovative digital løsninger spesialisert på golfklubber."

Click **Save**

### 3. Opprett "solutions" Collection

**Collection ID:** `solutions`

**Legg til disse dokumentene:**

#### 1. google-workspace
- `id`: "google-workspace"
- `title`: "Google Workspace"
- `description`: "Profesjonell e-post, samarbeid og lagring for hele klubben."
- `category`: "Collaboration"
- `price`: "Fra kr 29/bruker/måned"

#### 2. golfbox
- `id`: "golfbox"
- `title`: "GolfBox"
- `description`: "Fullstendig administrasjon av golfbane og medlemmer."
- `category`: "Management"
- `price`: "Fra kr 500/måned"

#### 3. clubsite-cms
- `id`: "clubsite-cms"
- `title`: "ClubsiteCMS"
- `description`: "Enkel webside-administrasjon for klubber."
- `category`: "Web"
- `price`: "Fra kr 199/måned"

#### 4. digital-signage
- `id`: "digital-signage"
- `title`: "Digital Skilting"
- `description`: "Moderne display for klubben: turnering, resultat, medlemstall."
- `category`: "Communication"
- `price`: "Fra kr 2.000"

### 4. Opprett "apps" Collection

**Collection ID:** `apps`

**Legg til disse dokumentene:**

#### 1. soknadsportalen
- `id`: "soknadsportalen"
- `name`: "Søknadsportalen"
- `description`: "Digital innlevering og behandling av søknader til klubben."
- `status`: "active"

#### 2. golfteam-time
- `id`: "golfteam-time"
- `name`: "GolfTeam Time"
- `description`: "Lagplanlegging, turnering-administrasjon og lagstatistikk."
- `status`: "active"

#### 3. booking-kalender
- `id`: "booking-kalender"
- `name`: "Booking Kalender"
- `description`: "Tee-time booking og reservasjon av greens."
- `status`: "active"

#### 4. frivillig-kalender
- `id`: "frivillig-kalender"
- `name`: "Frivillig Kalender"
- `description`: "Koordinering av frivillig arbeid og oppgaver."
- `status`: "beta"

#### 5. ai-file-analyzer
- `id`: "ai-file-analyzer"
- `name`: "AI File Analyzer"
- `description`: "Intelligent analyse av golfresultater og statistikk."
- `status`: "beta"

#### 6. golfbilkontroll
- `id`: "golfbilkontroll"
- `name`: "Golfbilkontroll"
- `description`: "Administrasjon av klubbens golfbiler og utleie."
- `status`: "planned"

## Metode 2: Bruke Admin Panel UI (Etter data er opprettet)

Når samlingene er opprettet i Firebase Console, kan du:

1. Gå til: https://golfklubb-it-website.web.app/admin
2. Login med Google (owe-admin@golfklubb-it.com)
3. Naviger til **Solutions** eller **Apps**
4. Klikk **+ New Item** for å legge til flere
5. Klikk **Edit** for å redigere eksisterende
6. Klikk **Delete** for å fjerne

## Tips

- Start med å legge inn 1-2 dokumenter per collection
- Test admin panelen - refresh og se om data dukker opp
- Når du er komfortabel, bruk admin panelet til å redigere og legge til mer

## Status

📍 Admin panel klar
📍 Google Auth fungerer
⏳ Firestore collections trenger data (gjør det nå via Firebase Console)
