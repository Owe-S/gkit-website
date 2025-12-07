# TODO - Avsender-Notifikasjoner

**Status:** Planlagt for Desember 2025  
**Prioritet:** Høy  
**Estimert innsats:** 4-6 timer

## Oversikt
Implementere automatisk bekreftelse/notifikasjon til personen som fyller ut kontaktskjemaet.

## Oppsett
- [ ] **Lag ny Cloud Function:** `sendConfirmationToSender`
  - Trigger: Samme som `sendLeadNotification` (Firestore document.create på `leads/{leadId}`)
  - Region: `europe-west1` (GDPR-compliant)
  - Funksjonalitet: Sende HTML e-post til `leadData.email`

- [ ] **Lag e-postmal** for avsender
  - Standard mal: "Takk for din henvendelse, vi kontakter deg snart"
  - Tilgjengelig som template i `functions/templates/senderConfirmation.html`
  - Inkludere Lead ID for referanse

- [ ] **Oppdater skjema** med opsjonal checkbox
  ```typescript
  // ContactForm.tsx
  const [sendConfirmation, setSendConfirmation] = useState(true);
  // Checkbox: "Send meg bekreftelse på e-post"
  ```

- [ ] **Oppdater Firestore lead**
  ```typescript
  interface Lead {
    firstName: string;
    lastName: string;
    mobile: string;
    email: string;
    golfboxId?: string;
    sendConfirmation: boolean;  // NYT felt
    createdAt: Timestamp;
  }
  ```

- [ ] **Implementer logikk i sendConfirmationToSender**
  ```typescript
  if (!leadData.sendConfirmation) {
    console.log("Sender har ikke ønsket bekreftelse");
    return;
  }
  // Send e-post til leadData.email
  ```

## E-post Innhold (Forslag)

```
Subject: Takk for din henvendelse - Golfklubbens IT
From: Golfklubbens IT <owe-admin@golfklubb-it.com>
To: [avsender e-post]

Innhold:
- Takk-melding
- Lead ID for referanse
- "Vi kontakter deg innen 24 timer"
- Kontaktinformasjon
- Footer med link til nettside
```

## Testing

- [ ] Fyll ut skjema med `sendConfirmation=true`
- [ ] Sjekk at bekreftelse kommer til avsender-epost
- [ ] Fyll ut skjema med `sendConfirmation=false`
- [ ] Verifiser at ingen bekreftelse sendes
- [ ] Sjekk Cloud Function logs for feil

## Deployment

```bash
cd functions
npm run build
cd ..
firebase deploy --only functions
```

## Dokumentasjon

- [ ] Oppdater `docs/index.md` under "E-post Notifikasjoner"
- [ ] Legg til "Avsender-bekreftelse" i "Nylige Oppdateringer"
- [ ] Dokumenter hvordan tilpasse e-postmalene

## Notater

- Begge e-poster bruker samme SMTP-konto (`owe-admin@golfklubb-it.com`)
- Firestore trigger vil utløse begge functions samtidig
- Bruk `console.log` for debug, sjekk via `firebase functions:log`
- Vurder retry-logikk hvis e-post feiler
