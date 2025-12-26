import { Link } from 'react-router-dom'
import Navbar from '../../components/Navbar'
import '../../App.css'

const GolfChartMultiClub = () => {
    return (
        <div className="app">
            <header className="header">
                <Navbar />
            </header>

            <section className="hero" style={{ minHeight: '60vh' }}>
                <div className="hero-content fade-in-up">
                    <h1>
                        <span className="text-gradient-green">GolfChart MultiClub</span><br />
                        Deling av golfdata på tvers av klubber
                    </h1>
                    <p style={{ fontSize: '1.3rem', color: 'var(--color-gray-light)', maxWidth: '800px', margin: '2rem auto' }}>
                        Flerklubb-system som kobler flere klubbdatabaser og gir medlemmer tilgang til statistikk, baneguider og turneringsresultater fra alle sine klubber.
                    </p>
                    <div className="hero-cta">
                        <a href="mailto:kontakt@golfklubb-it.com" className="btn btn-primary">Be om demo</a>
                        <Link to="/#kontakt" className="btn btn-secondary">Kontakt oss</Link>
                    </div>
                </div>
            </section>

            <section className="container section-padding">
                <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
                    <img
                        src="/images/apps/golfchart.png"
                        alt="GolfChart MultiClub Interface"
                        style={{ maxWidth: '100%', borderRadius: '12px', boxShadow: '0 8px 24px rgba(0,0,0,0.3)' }}
                        onError={(e) => e.target.style.display = 'none'}
                    />
                </div>
            </section>

            <section className="container section-padding" style={{ background: 'rgba(76, 175, 80, 0.02)' }}>
                <h2 style={{ textAlign: 'center', marginBottom: '3rem' }}>Nøkkelfunksjoner</h2>

                <div className="services-grid">
                    <div className="service-card glass">
                        <div className="service-icon">🔗</div>
                        <h3>Datautveksling</h3>
                        <p>Kobler flere klubbdatabaser slik at statistikk og banedata kan deles mellom klubber for bedre innsikt i baneutvikling og spilletendenser.</p>
                    </div>

                    <div className="service-card glass">
                        <div className="service-icon">📱</div>
                        <h3>Medlemsapp</h3>
                        <p>Spillere får tilgang til golfstatistikk, baneguider, turneringsinfo og resultater med push-varsler om nye arrangementer.</p>
                    </div>

                    <div className="service-card glass">
                        <div className="service-icon">⚙️</div>
                        <h3>Adminpanel</h3>
                        <p>Full kontroll over data, brukere og baner. Opprett og rediger banedata, turneringsoppsett, medlemskapstyper og rapportering.</p>
                    </div>

                    <div className="service-card glass">
                        <div className="service-icon">🔌</div>
                        <h3>Utvikler API</h3>
                        <p>Åpent API for utviklere som ønsker å integrere GolfChart-data inn i egne systemer, nettsider eller resultatskjermer.</p>
                    </div>
                </div>
            </section>

            <section className="container section-padding">
                <h2 style={{ textAlign: 'center', marginBottom: '3rem' }}>Fordeler for klubber</h2>

                <div style={{ maxWidth: '800px', margin: '0 auto' }}>
                    <div className="why-list">
                        <div style={{ padding: '1.5rem', marginBottom: '1rem', background: 'rgba(76, 175, 80, 0.05)', borderLeft: '4px solid var(--color-gkit-green)', borderRadius: '8px' }}>
                            <h4>📊 Bedre Beslutningsgrunnlag</h4>
                            <p>Deling av data på tvers av klubber gir dypere innsikt i spill, banestyring og medlemspreferanser.</p>
                        </div>

                        <div style={{ padding: '1.5rem', marginBottom: '1rem', background: 'rgba(76, 175, 80, 0.05)', borderLeft: '4px solid var(--color-gkit-green)', borderRadius: '8px' }}>
                            <h4>📈 Skalerbar Modell</h4>
                            <p>Systemet passer for små, mellomstore og store klubber og kan utvides med nye moduler ved behov.</p>
                        </div>

                        <div style={{ padding: '1.5rem', marginBottom: '1rem', background: 'rgba(76, 175, 80, 0.05)', borderLeft: '4px solid var(--color-gkit-green)', borderRadius: '8px' }}>
                            <h4>☁️ Kostnadseffektiv Drift</h4>
                            <p>Webapp-teknologi gjør at klubben slipper å investere i dyr lokal infrastruktur; alt kjører i skyen.</p>
                        </div>

                        <div style={{ padding: '1.5rem', marginBottom: '1rem', background: 'rgba(76, 175, 80, 0.05)', borderLeft: '4px solid var(--color-gkit-green)', borderRadius: '8px' }}>
                            <h4>🎯 Medlemstilfredshet</h4>
                            <p>Medlemmer ser sitt spill og statistikk på tvers av klubber, noe som øker engasjementet og retensjon.</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="container section-padding" style={{ background: 'rgba(76, 175, 80, 0.02)' }}>
                <h2 style={{ textAlign: 'center', marginBottom: '3rem' }}>Ofte Stilte Spørsmål</h2>

                <div style={{ maxWidth: '800px', margin: '0 auto' }}>
                    <div style={{ padding: '1.5rem', marginBottom: '1rem', background: 'var(--color-bg-dark)', borderRadius: '8px' }}>
                        <h4 style={{ color: 'var(--color-gkit-green)', marginBottom: '0.5rem' }}>Hvilke golfplattformer integreres?</h4>
                        <p>GolfChart MultiClub integreres primært med GolfBox, men kan også kobles til andre systemer via API.</p>
                    </div>

                    <div style={{ padding: '1.5rem', marginBottom: '1rem', background: 'var(--color-bg-dark)', borderRadius: '8px' }}>
                        <h4 style={{ color: 'var(--color-gkit-green)', marginBottom: '0.5rem' }}>Hvor store databaser kan håndteres?</h4>
                        <p>Systemet er skalerbar og kan håndtere klubber med tusenvis av medlemmer og historiske data fra flere år.</p>
                    </div>

                    <div style={{ padding: '1.5rem', marginBottom: '1rem', background: 'var(--color-bg-dark)', borderRadius: '8px' }}>
                        <h4 style={{ color: 'var(--color-gkit-green)', marginBottom: '0.5rem' }}>Hvordan sikres dataprinsippene?</h4>
                        <p>Data deles under streng kontroll med GDPR-kompatible rutiner. Hver klubb setter tilgangsrettigheter for sine medlemmer.</p>
                    </div>

                    <div style={{ padding: '1.5rem', marginBottom: '1rem', background: 'var(--color-bg-dark)', borderRadius: '8px' }}>
                        <h4 style={{ color: 'var(--color-gkit-green)', marginBottom: '0.5rem' }}>Hva koster GolfChart MultiClub?</h4>
                        <p>Kontakt GKIT for skreddersydd prising basert på antall klubber, medlemmer og integrasjoner du trenger.</p>
                    </div>
                </div>
            </section>

            <section className="contact" id="kontakt" style={{ background: 'var(--color-bg-dark)', padding: '4rem 0' }}>
                <div className="container" style={{ textAlign: 'center' }}>
                    <h2 style={{ marginBottom: '1rem' }}>Klar for flerklubbdata?</h2>
                    <p style={{ fontSize: '1.2rem', color: 'var(--color-gray-light)', marginBottom: '2rem' }}>
                        Vi viser hvordan GolfChart MultiClub kan forbedre driften og medlemsopplevelsen.
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

export default GolfChartMultiClub
