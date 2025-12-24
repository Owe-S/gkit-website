/**
 * Landing Page Content Configuration
 * Edit this file to change text, icons, and links on the home page.
 */

export const homeContent = {
    hero: {
        tagline: "DIGITALE LØSNINGER FOR GOLF",
        title: "Moderniser Klubbdriften Din",
        description: "Reduser driftskostnader med 40%, automatiser medlemsadministrasjon, og integrer alle systemene dine på én moderne plattform brukt av 50+ golfklubber i Norge.",
        primaryCta: "Bestill Demo",
        secondaryCta: "Utforsk Apper",
        stats: [
            "✓ 50+ klubber stoler på oss",
            "✓ Norsk support 24/7",
            "✓ Enterprise sikkerhet"
        ]
    },
    challenges: {
        title: "Utfordringene",
        description: "Golfklubber sløser tid og penger på fragmenterte systemer. Vi undersøkte 100+ klubber og fant disse kritiske problemene:",
        items: [
            { title: "40% Tidslekkasje", desc: "Gamle systemer drener operasjonell tid", linkText: "Les casestudie →", link: "#" },
            { title: "Datasisloer", desc: "Frakoplede plattformer skaper fragmentering", linkText: "Les mer →", link: "#" },
            { title: "Manuelle Prosesser", desc: "Trege arbeidsflyten begrenser klubbveksten", linkText: "Se løsninger →", link: "#" },
            { title: "Dårlig UX", desc: "Ingen enhetlig administrasjonsdashboard", linkText: "Se demo →", link: "#" }
        ]
    },
    solutions: {
        title: "Vår Integrerte Løsning",
        description: "GKIT leverer IT-drift, integrasjoner og teknologiutvikling for norske golfklubber – alt fra GolfBox til ClubsiteCMS og Google Workspace.",
        items: [
            { icon: "⚙️", title: "GolfBox-automatisering", desc: "Sømløs integrasjon og automatisering av klubbens GolfBox-system for effektiv drift.", link: "/products/golfbox" },
            { icon: "☁️", title: "Google Workspace", desc: "Komplett oppsett og forvaltning av Google Workspace skreddersydd for golfklubber.", link: "/products/workspace" },
            { icon: "🌐", title: "ClubsiteCMS Drift", desc: "Drift av klubbens nettside gjennom ClubsiteCMS, Norges ledende golfplattform.", link: "/products/clubsite" },
            { icon: "🔌", title: "API & Automasjon", desc: "Skreddersydde API-er og automatiserte arbeidsflyter som binder sammen ulike systemer.", link: "/services" }
        ]
    },
    apps: {
        title: "Live Applikasjoner",
        description: "6 produksjonsklar systemer i bruk på ledende golfklubber",
        items: [
            { icon: '📝', name: 'Søknadsportalen', status: '✅ Live', url: '/apps/soknadsportalen', desc: 'Digitaliser innsending, behandling og oppfølging av søknader.' },
            { icon: '⏱️', name: 'GolfTeam-Time', status: '✅ Live', url: '/apps/golfteam-time', desc: 'Personalplanlegging og timeføring for klubbansatte.' },
            { icon: '📺', name: 'Loftlogic Display', status: '✅ Live', url: '/products/signage', desc: 'Sanntidsoppdaterte infoskjermer for klubbhus og range.' },
            { icon: '🤝', name: 'Sponsor Dugnad', status: '✅ Live', url: '/apps/sponsor-dugnad', desc: 'Organiser sponsoravtaler og dugnader med påmelding.' },
            { icon: '📊', name: 'GolfChart MultiClub', status: '✅ Live', url: '/apps/golfchart', desc: 'Deling av golfdata på tvers av klubber for medlemmer.' },
            { icon: '☁️', name: 'Workspace Setup', status: '🟡 Beta', url: '/products/workspace', desc: 'Oppsettverktøy og guide for Google Workspace i golfklubber.' }
        ]
    },
    benefits: {
        title: "Hvorfor Velge Golfklubbens IT",
        description: "Bli med 50+ klubber som stoler på oss",
        items: [
            { icon: '⛳', title: 'Golfekspertise', desc: 'Bygget av golffolk som forstår klubboperasjoner' },
            { icon: '🔐', title: 'Enterprise Sikkerhet', desc: 'SOC2 sertifisert, GDPR godkjent, datakryptering' },
            { icon: '💰', title: '40% Kostnadsreduksjon', desc: 'Reduser overhead gjennom automatisering og integrering' },
            { icon: '🇳🇴', title: 'Norsk Support', desc: 'Norsktalende eksperter, åpningstidssvar, din tidssone' }
        ]
    }
};
