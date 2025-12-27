import { Link } from 'react-router-dom'
import SEOMeta from '../../components/SEOMeta'
import { softwareApplicationSchema, breadcrumbSchema } from '../../utils/seoSchemas'
import Navbar from '../../components/Navbar'
import '../../App.css'

const GolfTeamTime = () => {
    const breadcrumbs = [
        { name: 'Home', path: '/' },
        { name: 'Apps', path: '/apps' },
        { name: 'GolfTeam-Time', path: '/apps/golfteam-time' }
    ]

    return (
        <SEOMeta
            title="GolfTeam-Time | Digital tidregistrering for golfklubb"
            description="Digital tidregistrering og oppgaveplanlegging for klubbens ansatte og frivillige. Integrert med lønnssystemer."
            keywords={['tidregistrering', 'GolfTeam', 'lønn', 'oppgaver', 'golfklubb']}
            ogImage="/images/og-image.jpg"
            schemas={[
                softwareApplicationSchema({
                    name: 'GolfTeam-Time',
                    description: 'Digital tidregistrering og oppgaveplanlegging for golfklubb',
                    url: 'https://golfklubb-it-website.web.app/apps/golfteam-time'
                }),
                breadcrumbSchema(breadcrumbs)
            ]}
            breadcrumbs={breadcrumbs}
        >
        <div className="app">
            <header className="header">
                <Navbar />
            </header>

            <section className="hero" style={{ minHeight: '60vh' }}>
                <div className="hero-content fade-in-up">
                    <h1>
                        <span className="text-gradient-green">GolfTeam-Time</span><br />
                        Digital tidregistrering for klubbens ansatte og frivillige
                    </h1>
                    <p style={{ fontSize: '1.3rem', color: 'var(--color-gray-light)', maxWidth: '800px', margin: '2rem auto' }}>
                        Registrer arbeidstimer, planlegg oppgaver og få oversikt over ressurser. Sømløst integrert med lønnssystemer.
                    </p>
                    <div className="hero-cta">
                        <a href="mailto:kontakt@golfklubb-it.com" className="btn btn-primary">Bestill beta-tilgang</a>
                        <Link to="/#kontakt" className="btn btn-secondary">Kontakt oss</Link>
                    </div>
                </div>
            </section>

            <section className="container section-padding">
                <img src="/images/apps/golfteam-time.png" alt="GolfTeam-Time" loading="lazy" style={{ maxWidth: '90%', height: 'auto', borderRadius: '12px', boxShadow: '0 8px 24px rgba(0,0,0,0.3)', maxHeight: '500px', display: 'block', margin: '0 auto 4rem' }} />

                <h2 style={{ textAlign: 'center', marginBottom: '3rem' }}>Nøkkelfunksjoner</h2>

                <div className="services-grid">
                    <div className="service-card glass">
                        <div className="service-icon">⏱️</div>
                        <h3>Tidsregistrering</h3>
                        <p>Ansatte og frivillige registrerer arbeidstimer enkelt via web eller mobil. Data eksporteres til lønnssystem.</p>
                    </div>

                    <div className="service-card glass">
                        <div className="service-icon">📋</div>
                        <h3>Oppgavehåndtering</h3>
                        <p>Admin tildeler oppgaver (proshop, banearbeid, klubbhusservice). Brukere bekrefter at oppgaver er utført.</p>
                    </div>

                    <div className="service-card glass">
                        <div className="service-icon">👥</div>
                        <h3>Ressursoversikt</h3>
                        <p>Dashboard viser bemanning og oppgaver i sanntid. Ledelsen ser raskt hvor det trengs flere folk.</p>
                    </div>

                    <div className="service-card glass">
                        <div className="service-icon">📱</div>
                        <h3>Mobilvennlig</h3>
                        <p>Fullt responsiv webapp som fungerer perfekt på mobil, tablet og PC. Ingen app-download nødvendig.</p>
                    </div>
                </div>
            </section>

            <section className="container section-padding">
                <h2 style={{ textAlign: 'center', marginBottom: '3rem' }}>Fordeler</h2>

                <div style={{ maxWidth: '800px', margin: '0 auto' }}>
                    <div style={{ padding: '1.5rem', marginBottom: '1rem', background: 'rgba(76, 175, 80, 0.05)', borderLeft: '4px solid var(--color-gkit-green)', borderRadius: '8px' }}>
                        <h4>🎯 Full Kontroll</h4>
                        <p>Få full oversikt over timebruk og kostnader knyttet til banevedlikehold, drift og arrangementer.</p>
                    </div>

                    <div style={{ padding: '1.5rem', marginBottom: '1rem', background: 'rgba(76, 175, 80, 0.05)', borderLeft: '4px solid var(--color-gkit-green)', borderRadius: '8px' }}>
                        <h4>⚡ Effektivitet</h4>
                        <p>Eliminerer manuelle timekonti. Lønnskjøring og rapporter genereres automatisk med få klikk.</p>
                    </div>

                    <div style={{ padding: '1.5rem', marginBottom: '1rem', background: 'rgba(76, 175, 80, 0.05)', borderLeft: '4px solid var(--color-gkit-green)', borderRadius: '8px' }}>
                        <h4>🤝 Bedre Samarbeid</h4>
                        <p>Tydelig kommunikasjon om oppgaver og ansvar gir et mer effektivt og motivert team.</p>
                    </div>

                    <div style={{ padding: '1.5rem', marginBottom: '1rem', background: 'rgba(76, 175, 80, 0.05)', borderLeft: '4px solid var(--color-gkit-green)', borderRadius: '8px' }}>
                        <h4>📊 Rapportering</h4>
                        <p>Detaljerte rapporter til lønnskjøring, styremøter og budsjettplanlegging. All data på ett sted.</p>
                    </div>
                </div>
            </section>

            <section className="container section-padding" style={{ background: 'rgba(76, 175, 80, 0.02)' }}>
                <h2 style={{ textAlign: 'center', marginBottom: '3rem' }}>Typiske Brukstilfeller</h2>

                <div style={{ maxWidth: '900px', margin: '0 auto' }}>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '2rem' }}>
                        <div style={{ padding: '1.5rem', background: 'var(--color-bg-dark)', borderRadius: '8px' }}>
                            <h4 style={{ color: 'var(--color-gkit-green)', marginBottom: '0.5rem' }}>🌱 Banevedlikehold</h4>
                            <p>Greenkeeper registrerer vedlikeholdstimer. Leder planlegger arbeid og ser kostnad per bane.</p>
                        </div>

                        <div style={{ padding: '1.5rem', background: 'var(--color-bg-dark)', borderRadius: '8px' }}>
                            <h4 style={{ color: 'var(--color-gkit-green)', marginBottom: '0.5rem' }}>🏪 Proshop</h4>
                            <p>Proshopansatte registrerer vakter. Sjef ser bemanning og kan justere skiftplaner.</p>
                        </div>

                        <div style={{ padding: '1.5rem', background: 'var(--color-bg-dark)', borderRadius: '8px' }}>
                            <h4 style={{ color: 'var(--color-gkit-green)', marginBottom: '0.5rem' }}>🍽️ Restaurant/Bar</h4>
                            <p>Servitører registrerer timer. Sjef får oversikt og kan planlegge bemanning rundt arrangementer.</p>
                        </div>

                        <div style={{ padding: '1.5rem', background: 'var(--color-bg-dark)', borderRadius: '8px' }}>
                            <h4 style={{ color: 'var(--color-gkit-green)', marginBottom: '0.5rem' }}>🎯 Turneringer</h4>
                            <p>Frivillige timer til turneringer registreres og rapporteres for belønning eller takkeskjemaer.</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="container section-padding" style={{ background: 'rgba(76, 175, 80, 0.02)' }}>
                <h2 style={{ textAlign: 'center', marginBottom: '3rem' }}>Integrasjoner</h2>

                <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
                    <p style={{ color: 'var(--color-gray-light)', marginBottom: '2rem' }}>
                        GolfTeam-Time integreres med dine eksisterende systemer:
                    </p>

                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '1rem', color: 'var(--color-gray-light)' }}>
                        <div style={{ padding: '1rem', background: 'var(--color-bg-dark)', borderRadius: '8px' }}>💼 Lønnssystemer</div>
                        <div style={{ padding: '1rem', background: 'var(--color-bg-dark)', borderRadius: '8px' }}>📊 Regnskapssystemer</div>
                        <div style={{ padding: '1rem', background: 'var(--color-bg-dark)', borderRadius: '8px' }}>📈 Google Sheets</div>
                        <div style={{ padding: '1rem', background: 'var(--color-bg-dark)', borderRadius: '8px' }}>🔐 HR-systemer</div>
                    </div>
                </div>
            </section>

            <section className="container section-padding" style={{ background: 'rgba(76, 175, 80, 0.02)' }}>
                <h2 style={{ textAlign: 'center', marginBottom: '3rem' }}>Ofte Stilte Spørsmål</h2>

                <div style={{ maxWidth: '800px', margin: '0 auto' }}>
                    <div style={{ padding: '1.5rem', marginBottom: '1rem', background: 'var(--color-bg-dark)', borderRadius: '8px' }}>
                        <h4 style={{ color: 'var(--color-gkit-green)', marginBottom: '0.5rem' }}>Når lanseres GolfTeam-Time?</h4>
                        <p>Appen er under aktiv testing og lanseres i Q1 2025. Interesserte klubber kan bli med i pilot-programmet og påvirke funksjonaliteten.</p>
                    </div>

                    <div style={{ padding: '1.5rem', marginBottom: '1rem', background: 'var(--color-bg-dark)', borderRadius: '8px' }}>
                        <h4 style={{ color: 'var(--color-gkit-green)', marginBottom: '0.5rem' }}>Kan vi bruke det på mobil?</h4>
                        <p>Ja! Fullt responsiv webapp som fungerer perfekt på mobil, tablet og PC. Ansatte kan registrere timer direkte fra bananen.</p>
                    </div>

                    <div style={{ padding: '1.5rem', marginBottom: '1rem', background: 'var(--color-bg-dark)', borderRadius: '8px' }}>
                        <h4 style={{ color: 'var(--color-gkit-green)', marginBottom: '0.5rem' }}>Hvordan integrerer vi med lønnssystem?</h4>
                        <p>Vi har ferdige integrasjoner med populære lønnssystemer. Vi kan også lage custom integrasjoner eller eksportere til CSV.</p>
                    </div>

                    <div style={{ padding: '1.5rem', marginBottom: '1rem', background: 'var(--color-bg-dark)', borderRadius: '8px' }}>
                        <h4 style={{ color: 'var(--color-gkit-green)', marginBottom: '0.5rem' }}>Hva koster det?</h4>
                        <p>Prisingen er basert på antall brukere. Kontakt oss for en demo og tilpasset tilbud.</p>
                    </div>

                    <div style={{ padding: '1.5rem', marginBottom: '1rem', background: 'var(--color-bg-dark)', borderRadius: '8px' }}>
                        <h4 style={{ color: 'var(--color-gkit-green)', marginBottom: '0.5rem' }}>Kan vi spore hvem som gjør hva?</h4>
                        <p>Ja! Admin kan se hvem som registrerte timer, hvilke oppgaver som ble utført, og detaljer om vedlikehold og drift.</p>
                    </div>

                    <div style={{ padding: '1.5rem', marginBottom: '1rem', background: 'var(--color-bg-dark)', borderRadius: '8px' }}>
                        <h4 style={{ color: 'var(--color-gkit-green)', marginBottom: '0.5rem' }}>Blir timene koblet til GolfBox arrangementer?</h4>
                        <p>Ja! Frivillig-timer til turneringer og arrangementer kan merkes med GolfBox-arrangementet. Perfekt for kostnadssporing.</p>
                    </div>
                </div>
            </section>

            <section className="contact" id="kontakt" style={{ background: 'var(--color-bg-dark)', padding: '4rem 0' }}>
                <div className="container" style={{ textAlign: 'center' }}>
                    <h2 style={{ marginBottom: '1rem' }}>Bli med på beta-testen</h2>
                    <p style={{ fontSize: '1.2rem', color: 'var(--color-gray-light)', marginBottom: '2rem' }}>
                        GolfTeam-Time lanseres Q1 2025. Bli pilotklubb og påvirk utviklingen!
                    </p>
                    <Link to="/#kontakt" className="btn btn-primary" style={{ fontSize: '1.2rem', padding: '1rem 2rem' }}>
                        Bestill beta-tilgang
                    </Link>
                </div>
            </section>

            <footer className="footer">
                <div className="container">
                    <p>© 2025 GKIT. Stabil drift. Smarte systemer.</p>
                </div>
            </footer>
        </div>
        </SEOMeta>
    )
}

export default GolfTeamTime
