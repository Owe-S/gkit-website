import { Link } from 'react-router-dom'
import Navbar from '../../components/Navbar'
import '../../App.css'
import SEOMeta from '../../components/SEOMeta'
import { softwareApplicationSchema, breadcrumbSchema } from '../../utils/seoSchemas'

const GolfBox = () => {
    const breadcrumbs = [
        { name: 'Hjem', url: 'https://golfklubb-it-website.web.app/' },
        { name: 'Produkter', url: 'https://golfklubb-it-website.web.app/products' },
        { name: 'GolfBox', url: 'https://golfklubb-it-website.web.app/products/golfbox' },
    ]

    return (
        <div className="app">
            <SEOMeta
                title="GolfBox Automatisering - Automatiser oppgaver for golfklubber"
                description="Automatiser repeterende oppgaver i GolfBox. Synkroniser data feilfritt, øk medlemstilfredshet og spar tid. Integrasjon med Workspace, ClubsiteCMS og mer."
                keywords="GolfBox automatisering, golf system, golfklubb automatisering, Norwegisch golf software"
                url="https://golfklubb-it-website.web.app/products/golfbox"
                schema={softwareApplicationSchema(
                    'GolfBox Automatisering',
                    'Automatiser repeterende oppgaver i GolfBox. Synkroniser data og øk medlemstilfredshet.',
                    'https://golfklubb-it-website.web.app/products/golfbox',
                    'BusinessApplication',
                    'https://golfklubb-it-website.web.app/golfbox-image.png'
                )}
                breadcrumbs={breadcrumbs}
            />
            <header className="header">
                <Navbar />
            </header>

            {/* Hero Section */}
            <section className="hero" style={{ minHeight: '60vh' }}>
                <div className="hero-content fade-in-up">
                    <h1>
                        <span className="text-gradient-green">GolfBox Automatisering</span><br />
                        Spar tid. Unngå feil. Øk medlemstilfredshet.
                    </h1>
                    <p style={{ fontSize: '1.3rem', color: 'var(--color-gray-light)', maxWidth: '800px', margin: '2rem auto' }}>
                        Automatiser repeterende oppgaver, synkroniser data feilfritt, og gi medlemmene en sømløs digital opplevelse.
                    </p>
                    <div className="hero-cta">
                        <a href="#kontakt" className="btn btn-primary">Be om demo</a>
                        <Link to="/services" className="btn btn-secondary">Se alle tjenester</Link>
                    </div>
                </div>
            </section>

            {/* Product Image */}
            <section className="container section-padding">
                <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
                    <img
                        src="/images/products/golfbox_automation.png"
                        alt="GolfBox Automatisering Dashboard"
                        style={{ maxWidth: '100%', borderRadius: '12px', boxShadow: '0 8px 24px rgba(0,0,0,0.3)' }}
                    />
                </div>
            </section>

            {/* Features Section */}
            <section className="container section-padding" style={{ background: 'rgba(76, 175, 80, 0.02)' }}>
                <h2 style={{ textAlign: 'center', marginBottom: '3rem' }}>Hva vi tilbyr</h2>

                <div className="services-grid">
                    <div className="service-card glass">
                        <div className="service-icon">⚙️</div>
                        <h3>Oppsett & Optimalisering</h3>
                        <p>Vi hjelper klubben med å sette opp GolfBox riktig fra start, og optimaliserer eksisterende oppsett for bedre flyt.</p>
                    </div>

                    <div className="service-card glass">
                        <div className="service-icon">🔗</div>
                        <h3>Sømløs Integrasjon</h3>
                        <p>Vi kobler GolfBox mot regnskap, CRM, nettside og andre systemer slik at data flyter automatisk.</p>
                    </div>

                    <div className="service-card glass">
                        <div className="service-icon">🤖</div>
                        <h3>Automatisering</h3>
                        <p>Automatisering av medlemskommunikasjon, fakturering og repeterende oppgaver. Spar tid og unngå manuelle feil.</p>
                    </div>

                    <div className="service-card glass">
                        <div className="service-icon">🎓</div>
                        <h3>Opplæring & Support</h3>
                        <p>Vi gir ansatte og frivillige den nødvendige opplæringen for å bruke systemet effektivt, og tilbyr løpende support.</p>
                    </div>
                </div>
            </section>

            {/* Benefits Section */}
            <section className="container section-padding">
                <h2 style={{ textAlign: 'center', marginBottom: '3rem' }}>Hvorfor GolfBox-automatisering?</h2>

                <div style={{ maxWidth: '800px', margin: '0 auto' }}>
                    <div className="why-list">
                        <div style={{ padding: '1.5rem', marginBottom: '1rem', background: 'rgba(76, 175, 80, 0.05)', borderLeft: '4px solid var(--color-gkit-green)', borderRadius: '8px' }}>
                            <h4>⏱️ Spar 10+ timer i måneden</h4>
                            <p>Automatiser repeterende oppgaver som bekreftelser, påminnelser og rapportering.</p>
                        </div>

                        <div style={{ padding: '1.5rem', marginBottom: '1rem', background: 'rgba(76, 175, 80, 0.05)', borderLeft: '4px solid var(--color-gkit-green)', borderRadius: '8px' }}>
                            <h4>✅ Null manuelle feil</h4>
                            <p>Data oppdateres automatisk. Ingen dobbeltregistrering. Alltid konsistent.</p>
                        </div>

                        <div style={{ padding: '1.5rem', marginBottom: '1rem', background: 'rgba(76, 175, 80, 0.05)', borderLeft: '4px solid var(--color-gkit-green)', borderRadius: '8px' }}>
                            <h4>😊 Bedre medlemsopplevelse</h4>
                            <p>Raske bekreftelser, oppdaterte nettsider, proff kommunikasjon.</p>
                        </div>

                        <div style={{ padding: '1.5rem', marginBottom: '1rem', background: 'rgba(76, 175, 80, 0.05)', borderLeft: '4px solid var(--color-gkit-green)', borderRadius: '8px' }}>
                            <h4>📈 Skalerbart</h4>
                            <p>Fra 200 til 2000 medlemmer. Systemet vokser med klubben.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="contact" id="kontakt" style={{ background: 'var(--color-bg-dark)', padding: '4rem 0' }}>
                <div className="container" style={{ textAlign: 'center' }}>
                    <h2 style={{ marginBottom: '1rem' }}>Klar for å automatisere?</h2>
                    <p style={{ fontSize: '1.2rem', color: 'var(--color-gray-light)', marginBottom: '2rem' }}>
                        Vi setter opp en demo tilpasset din klubbs behov.
                    </p>
                    <Link to="/#kontakt" className="btn btn-primary" style={{ fontSize: '1.2rem', padding: '1rem 2rem' }}>
                        Kontakt oss for demo
                    </Link>
                </div>
            </section>

            <footer className="footer">
                <div className="container">
                    <p>© 2025 Golfklubbens IT. Stabil drift. Smarte systemer.</p>
                </div>
            </footer>
        </div>
    )
}

export default GolfBox
