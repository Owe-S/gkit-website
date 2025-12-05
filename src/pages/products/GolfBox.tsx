import { Link } from 'react-router-dom'
import Navbar from '../../components/Navbar'
import '../../App.css'

const GolfBox = () => {
    return (
        <div className="app">
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
                <h2 style={{ textAlign: 'center', marginBottom: '3rem' }}>Hva gjør vi?</h2>

                <div className="services-grid">
                    <div className="service-card glass">
                        <div className="service-icon">📧</div>
                        <h3>E-post Automatisering</h3>
                        <p>Automatiske bekreftelser, påminnelser og oppfølginger direkte fra GolfBox. Spar timer hver uke.</p>
                    </div>

                    <div className="service-card glass">
                        <div className="service-icon">🔄</div>
                        <h3>Data-synkronisering</h3>
                        <p>Hold medlemsdata, betalinger og bookinger synkronisert mellom GolfBox, nettside og regnskapssystem.</p>
                    </div>

                    <div className="service-card glass">
                        <div className="service-icon">📊</div>
                        <h3>Rapportering</h3>
                        <p>Automatiske rapporter til styret: økonomi, medlemsutvikling, baneutlastning. Alltid oppdatert.</p>
                    </div>

                    <div className="service-card glass">
                        <div className="service-icon">🔐</div>
                        <h3>Sikker Integrasjon</h3>
                        <p>Google Cloud-basert. GDPR-kompatibel. Alltid kryptert. Ingen data lagres lokalt.</p>
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
