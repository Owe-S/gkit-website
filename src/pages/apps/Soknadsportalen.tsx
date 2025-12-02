import { Link } from 'react-router-dom'
import Navbar from '../../components/Navbar'
import '../../App.css'

const Soknadsportalen = () => {
    return (
        <div className="app">
            <header className="header">
                <Navbar />
            </header>

            <section className="hero" style={{ minHeight: '60vh' }}>
                <div className="hero-content fade-in-up">
                    <h1>
                        <span className="text-gradient-green">Søknadsportalen</span><br />
                        Digitalisert medlemshåndtering
                    </h1>
                    <p style={{ fontSize: '1.3rem', color: 'var(--color-gray-light)', maxWidth: '800px', margin: '2rem auto' }}>
                        Nettportal for håndtering av søknader, støtteordninger og medlemskap via brukervennlig webgrensesnitt.
                    </p>
                    <div className="hero-cta">
                        <a href="https://soknadsportalen.web.app/" target="_blank" rel="noopener noreferrer" className="btn btn-primary">Åpne portalen</a>
                        <a href="#kontakt" className="btn btn-secondary">Be om demo</a>
                    </div>
                </div>
            </section>

            <section className="container section-padding">
                <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
                    <img
                        src="/images/apps/soknadsportalen.png"
                        alt="Søknadsportalen Interface"
                        style={{ maxWidth: '100%', borderRadius: '12px', boxShadow: '0 8px 24px rgba(0,0,0,0.3)' }}
                    />
                </div>
            </section>

            <section className="container section-padding" style={{ background: 'rgba(76, 175, 80, 0.02)' }}>
                <h2 style={{ textAlign: 'center', marginBottom: '3rem' }}>Funksjoner</h2>

                <div className="services-grid">
                    <div className="service-card glass">
                        <div className="service-icon">📝</div>
                        <h3>Digitale Søknader</h3>
                        <p>Medlemmer søker om tilskudd, støtte og medlemskap direkte i portalen. Automatisk validering og behandling.</p>
                    </div>

                    <div className="service-card glass">
                        <div className="service-icon">📊</div>
                        <h3>Saksbehandling</h3>
                        <p>Styret håndterer søknader digitalt. Oversikt, status-tracking og automatiske varsler.</p>
                    </div>

                    <div className="service-card glass">
                        <div className="service-icon">📄</div>
                        <h3>Dokumentarkiv</h3>
                        <p>Alle søknader og vedlegg arkiveres automatisk. Søkbart, sikkert og GDPR-kompatibelt.</p>
                    </div>

                    <div className="service-card glass">
                        <div className="service-icon">✅</div>
                        <h3>Automatisk Godkjenning</h3>
                        <p>Sett opp regler for automatisk godkjenning av enkle søknader. Spar tid på administrasjon.</p>
                    </div>
                </div>
            </section>

            <section className="container section-padding">
                <h2 style={{ textAlign: 'center', marginBottom: '3rem' }}>Fordeler</h2>

                <div style={{ maxWidth: '800px', margin: '0 auto' }}>
                    <div className="why-list">
                        <div style={{ padding: '1.5rem', marginBottom: '1rem', background: 'rgba(76, 175, 80, 0.05)', borderLeft: '4px solid var(--color-gkit-green)', borderRadius: '8px' }}>
                            <h4>⚡ Raskere Saksbehandling</h4>
                            <p>Behandle søknader 10x raskere enn manuell behandling. Automatisering reduserer saksbehandlingstiden drastisk.</p>
                        </div>

                        <div style={{ padding: '1.5rem', marginBottom: '1rem', background: 'rgba(76, 175, 80, 0.05)', borderLeft: '4px solid var(--color-gkit-green)', borderRadius: '8px' }}>
                            <h4>📱 Medlemsvennlig</h4>
                            <p>Søk fra mobil, nettbrett eller PC. Enkelt grensesnitt som alle forstår.</p>
                        </div>

                        <div style={{ padding: '1.5rem', marginBottom: '1rem', background: 'rgba(76, 175, 80, 0.05)', borderLeft: '4px solid var(--color-gkit-green)', borderRadius: '8px' }}>
                            <h4>🔐 Sikker Lagring</h4>
                            <p>Personopplysninger og dokumenter lagres kryptert i Google Cloud. GDPR-kompatibel.</p>
                        </div>

                        <div style={{ padding: '1.5rem', marginBottom: '1rem', background: 'rgba(76, 175, 80, 0.05)', borderLeft: '4px solid var(--color-gkit-green)', borderRadius: '8px' }}>
                            <h4>📈 Full Sporbarhet</h4>
                            <p>Se hvem som har behandlet hva og når. Komplett logg for revisjon og etterlevelse.</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="container section-padding" style={{ background: 'rgba(76, 175, 80, 0.02)' }}>
                <h2 style={{ textAlign: 'center', marginBottom: '3rem' }}>Ofte Stilte Spørsmål</h2>

                <div style={{ maxWidth: '800px', margin: '0 auto' }}>
                    <div style={{ padding: '1.5rem', marginBottom: '1rem', background: 'var(--color-bg-dark)', borderRadius: '8px' }}>
                        <h4 style={{ color: 'var(--color-gkit-green)', marginBottom: '0.5rem' }}>Hvordan kommer medlemmer inn i portalen?</h4>
                        <p>Medlemmer logger inn via Google-konto eller klubbens SSO-system. Tilgangsstyring håndteres av administratorer.</p>
                    </div>

                    <div style={{ padding: '1.5rem', marginBottom: '1rem', background: 'var(--color-bg-dark)', borderRadius: '8px' }}>
                        <h4 style={{ color: 'var(--color-gkit-green)', marginBottom: '0.5rem' }}>Hva slags søknader kan behandles?</h4>
                        <p>Medlemskap, støtteordninger, junior-stipend, banevedlikehold-tillatelser, turneringspåmelding med mer. Systemet er fleksibelt og tilpasses dine behov.</p>
                    </div>

                    <div style={{ padding: '1.5rem', marginBottom: '1rem', background: 'var(--color-bg-dark)', borderRadius: '8px' }}>
                        <h4 style={{ color: 'var(--color-gkit-green)', marginBottom: '0.5rem' }}>Hva koster Søknadsportalen?</h4>
                        <p>Kontakt oss for skreddersydd tilbud basert på antall brukere og funksjoner. Vi tilbyr fleksible prismodeller.</p>
                    </div>

                    <div style={{ padding: '1.5rem', marginBottom: '1rem', background: 'var(--color-bg-dark)', borderRadius: '8px' }}>
                        <h4 style={{ color: 'var(--color-gkit-green)', marginBottom: '0.5rem' }}>Er det GDPR-kompatibelt?</h4>
                        <p>Ja, all data lagres kryptert i Google Cloud med norsk datalagring. Full sporbarhet og slettemekanismer er på plass.</p>
                    </div>
                </div>
            </section>

            <section className="contact" id="kontakt" style={{ background: 'var(--color-bg-dark)', padding: '4rem 0' }}>
                <div className="container" style={{ textAlign: 'center' }}>
                    <h2 style={{ marginBottom: '1rem' }}>Klar for digitalisering?</h2>
                    <p style={{ fontSize: '1.2rem', color: 'var(--color-gray-light)', marginBottom: '2rem' }}>
                        Vi demonstrerer Søknadsportalen for din klubb.
                    </p>
                    <Link to="/#kontakt" className="btn btn-primary" style={{ fontSize: '1.2rem', padding: '1rem 2rem' }}>
                        Be om demo
                    </Link>
                </div>
            </section>

            <footer className="footer">
                <div className="container">
                    <p>© 2025 GKIT. Stabil drift. Smarte systemer.</p>
                </div>
            </footer>
        </div>
    )
}

export default Soknadsportalen
