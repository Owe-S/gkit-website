# GKIT Firma-Informasjon - Implementasjonsveiledning

## 📋 Oversikt

Vi har sentralisert all firma-informasjon for GKIT slik at du bare trenger å oppdatere ett sted, og endringene blir reflektert overalt.

## 📂 Filer

### 1. **`src/config/companyConfig.ts`** (Lokal bruk)

Brukes internt i denne React-applikasjonen.

```typescript
import companyConfig from '../config/companyConfig'

// Bruk slik:
<a href={`mailto:${companyConfig.email}`}>{companyConfig.email}</a>
```

### 2. **`gkit-config.ts`** (Deling til andre apps)

Plasser denne filen i **root** av alle dine andre GKIT-applikasjoner.

```typescript
import GKIT_CONFIG from './gkit-config'

// Bruk slik:
<a href={GKIT_CONFIG.urls.website}>{GKIT_CONFIG.company.name}</a>
```

### 3. **`src/components/Footer.tsx`** (Reusable Footer-komponent)

En universell footer som automatisk bruker firma-informasjonen.

```typescript
import Footer from './components/Footer'

// Bruk slik:
<Footer />
```

---

## 🔧 Hvordan oppdatere firma-informasjonen

Hvis du trenger å endre adresse, telefon, e-post, osv., gjør du det **ett sted**:

### Alternatif 1: Lokal React-app

Rediger `src/config/companyConfig.ts`:

```typescript
export const companyConfig = {
  name: 'Golfklubb IT ENK',
  email: 'kontakt-oss@golfklubb-it.com',
  phone: '472 65 100',
  address: 'Sloraveien 10, 1405 Langhus',
  // ... osv
}
```

### Alternatif 2: Andre GKIT-apper

Rediger `gkit-config.ts` i **root** av appen:

```typescript
export const GKIT_CONFIG = {
  company: {
    name: 'Golfklubb IT ENK',
    // ...
  },
  contact: {
    email: 'kontakt-oss@golfklubb-it.com',
    // ...
  },
  // ... osv
}
```

---

## ✅ Hva er allerede implementert

### `gkit-website` (denne appen)

- ✅ `ContactForm.tsx` - bruker `companyConfig.email`
- ✅ `Home.tsx` - bruker `companyConfig.email` og footer-info
- ✅ Ny `Footer.tsx`-komponent er tilgjengelig

### Andre apper

Kopier `gkit-config.ts` til root av hver app og importer den.

---

## 📝 Implementerings-checklist for nye apper

Når du starter en ny GKIT-app:

- [ ] Kopier `gkit-config.ts` til **root** av prosjektet
- [ ] Importer `GKIT_CONFIG` der du trenger firma-info
- [ ] Bytt ut hardkodet firma-info med `GKIT_CONFIG.contact.email`, etc.
- [ ] Lag en `Footer.tsx`-komponent basert på denne malen (eller kopier)
- [ ] Test at alle lenker fungerer

---

## 🎯 Eksempler

### E-post-lenke

```typescript
import GKIT_CONFIG from './gkit-config'

<a href={GKIT_CONFIG.urls.website}>Besøk GKIT</a>
<a href={GKIT_CONFIG.getMailtoLink()}>Kontakt oss</a>
<a href={GKIT_CONFIG.getTelLink()}>Ring oss</a>
```

### Footer

```typescript
import GKIT_CONFIG from './gkit-config'

<footer>
  <p>© {GKIT_CONFIG.meta.copyrightYear} {GKIT_CONFIG.company.name}</p>
  <p>Email: {GKIT_CONFIG.contact.email}</p>
  <p>Telefon: {GKIT_CONFIG.contact.phone}</p>
</footer>
```

### Kontakt-informasjon

```typescript
import GKIT_CONFIG from './gkit-config'

<div>
  <h3>{GKIT_CONFIG.company.name}</h3>
  <p>{GKIT_CONFIG.contact.address}, {GKIT_CONFIG.contact.country}</p>
  <p>Support: {GKIT_CONFIG.support.hours}</p>
</div>
```

---

## 📞 Nå du trenger å oppdatere

| Felt | Hvor | Verdi |
|------|------|-------|
| **Firma** | `company.name` | Golfklubb IT ENK |
| **Org.nr** | `company.organizationNumber` | 936 634 966 NO |
| **E-post** | `contact.email` | `kontakt-oss@golfklubb-it.com` |
| **Telefon** | `contact.phone` | 472 65 100 |
| **Adresse** | `contact.address` | Sloraveien 10, 1405 Langhus |
| **Support** | `support.hours` | E.A. |

---

## 📦 Neste steg

1. **Commit disse filene til Git** og push
2. **Test lokalt** at alt fungerer som det skal
3. **Lær teamet ditt** om denne strukturen
4. **Appliser til nye apper** når du bygger dem

---

## 📅 Versjon

Last updated: December 5, 2025

