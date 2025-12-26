import { Link } from 'react-router-dom'
import Navbar from '../../components/Navbar'
import '../../App.css'

const ScangolfIntegration = () => {
    return (
        <div className="app">
            <header className="header">
                <Navbar />
            </header>

            <section className="hero" style={{ minHeight: '60vh' }}>
                <div className="hero-content fade-in-up">
                    <h1>
                        <span className="text-gradient-green">Scangolf</span><br />
                        Elektronisk poengkort fra første slag
                    </h1>
                    <p style={{ fontSize: '1.3rem', color: 'var(--color-gray-light)', maxWidth: '800px', margin: '2rem auto' }}>
                        Klubbens medlemmer legger scores fra bananen med mobilen eller iPad. Ingen papirkort. Resultat i systemet umiddelbart.
                    </p>
                    <div className="hero-cta">
                        <a href="mailto:kontakt@golfklubb-it.com" className="btn btn-primary">Bestill demo</a>
                        <Link to="/#kontakt" className="btn btn-secondary">Kontakt oss</Link>
                    </div>
                </div>
            </section>

            <section className="container section-padding">
                <h2 style={{ textAlign: 'center', marginBottom: '3rem' }}>Nøkkelfunksjoner</h2>

                <div className="services-grid">
                    <div className="service-card glass">
                        <div className="service-icon">📱</div>
                        <h3>Mobil Scorecard</h3>
                        <p>Enter scores direkte fra bananen. Enkel UI som fungerer på alle enheter.</p>
                    </div>

                    <div className="service-card glass">
                        <div className="service-icon">⚡</div>
                        <h3>Sanntid Synkronisering</h3>
                        <p>Scores synkroniseres umiddelbart til GolfBox og clube-systemet. Ingen forsinkelse.</p>
                    </div>

                    <div className="service-card glass">
                        <div className="service-icon">🏌️</div>
                        <h3>Handicap-Beregning</h3>
                        <p>Automatisk handicap-oppdatering basert på nye poengkort og resultater.</p>
                    </div>

                    <div className="service-card glass">
                        <div className="service-icon">📊</div>
                        <h3>Live Resultater</h3>
                        <p>Leaderboards oppdateres i sanntid. Membres kan se hvor andre står.</p>
                    </div>
                </div>
            </section>

            <section className="container section-padding">
                <h2 style={{ textAlign: 'center', marginBottom: '3rem' }}>Fordeler</h2>

                <div style={{ maxWidth: '800px', margin: '0 auto' }}>
                    <div style={{ padding: '1.5rem', marginBottom: '1rem', background: 'rgba(76, 175, 80, 0.05)', borderLeft: '4px solid var(--color-gkit-green)', borderRadius: '8px' }}>
                        <h4>⚡ Effektivitet</h4>
                        <p>Papirkort eliminert. Scoring er raskt og feilfritt. Mindre administrativt arbeid.</p>
                    </div>

                    <div style={{ padding: '1.5rem', marginBottom: '1rem', background: 'rgba(76, 175, 80, 0.05)', borderLeft: '4px solid var(--color-gkit-green)', borderRadius: '8px' }}>
                        <h4>📈 Moderne Opplevelse</h4>
                        <p>Medlemmer får moderne golf-opplevelse. Økt engasjement i klubb og turneringer.</p>
                    </div>

                    <div style={{ padding: '1.5rem', marginBottom: '1rem', background: 'rgba(76, 175, 80, 0.05)', borderLeft: '4px solid var(--color-gkit-green)', borderRadius: '8px' }}>
                        <h4>✅ Pålitelighet</h4>
                        <p>Scangolf er godt integrert med GolfBox og brukt av mange norske klubber.</p>
                    </div>

                    <div style={{ padding: '1.5rem', marginBottom: '1rem', background: 'rgba(76, 175, 80, 0.05)', borderLeft: '4px solid var(--color-gkit-green)', borderRadius: '8px' }}>
                        <h4>🌍 Standardsystem</h4>
                        <p>Internasjonal standard. HCP-oppdateringer skjer automatisk og lovlig.</p>
                    </div>
                </div>
            </section>

            <section className="container section-padding" style={{ background: 'rgba(76, 175, 80, 0.02)' }}>
                <h2 style={{ textAlign: 'center', marginBottom: '3rem' }}>Hvordan det fungerer</h2>

                <div style={{ maxWidth: '800px', margin: '0 auto' }}>
                    <div style={{ padding: '1.5rem', marginBottom: '1rem', background: 'var(--color-bg-dark)', borderRadius: '8px' }}>
                        <h4 style={{ color: 'var(--color-gkit-green)' }}>1. Medlem starter turneringen</h4>
                        <p>Avslutter bookingen i GolfBox. Får link til Scangolf-appen.</p>
                    </div>

                    <div style={{ padding: '1.5rem', marginBottom: '1rem', background: 'var(--color-bg-dark)', borderRadius: '8px' }}>
                        <h4 style={{ color: 'var(--color-gkit-green)' }}>2. Enter scores underveis</h4>
                        <p>After each hole, medlem logger inn score på mobilen.</p>
                    </div>

                    <div style={{ padding: '1.5rem', marginBottom: '1rem', background: 'var(--color-bg-dark)', borderRadius: '8px' }}>
                        <h4 style={{ color: 'var(--color-gkit-green)' }}>3. Automatisk synkronisering</h4>
                        <p>Scores sendes til GolfBox og vises på leaderboards i real-time.</p>
                    </div>

                    <div style={{ padding: '1.5rem', marginBottom: '1rem', background: 'var(--color-bg-dark)', borderRadius: '8px' }}>
                        <h4 style={{ color: 'var(--color-gkit-green)' }}>4. Resultat er oppgjort</h4>
                        <p>Efter runden ferdig, resultat er offisiell. HCP oppdateres neste dag.</p>
                    </div>
                </div>
            </section>

            <section className="container section-padding" style={{ background: 'rgba(76, 175, 80, 0.02)' }}>
                <h2 style={{ textAlign: 'center', marginBottom: '3rem' }}>Ofte Stilte Spørsmål</h2>

                <div style={{ maxWidth: '800px', margin: '0 auto' }}>
                    <div style={{ padding: '1.5rem', marginBottom: '1rem', background: 'var(--color-bg-dark)', borderRadius: '8px' }}>
                        <h4 style={{ color: 'var(--color-gkit-green)', marginBottom: '0.5rem' }}>Trenger medlemmer egen app?</h4>
                        <p>Nei, Scangolf kjører i nettleseren. Bare besøk link fra booking-e-posten.</p>
                    </div>

                    <div style={{ padding: '1.5rem', marginBottom: '1rem', background: 'var(--color-bg-dark)', borderRadius: '8px' }}>
                        <h4 style={{ color: 'var(--color-gkit-green)', marginBottom: '0.5rem' }}>Hva hvis det ikke er internett på banen?</h4>
                        <p>Scangolf lagrer lokalt og synkroniserer når internett kommer tilbake.</p>
                    </div>

                    <div style={{ padding: '1.5rem', marginBottom: '1rem', background: 'var(--color-bg-dark)', borderRadius: '8px' }}>
                        <h4 style={{ color: 'var(--color-gkit-green)', marginBottom: '0.5rem' }}>Kan vi integrere med andre systemer?</h4>
                        <p>Ja, Scangolf kan integreres med API-er og tredjepartssystemer.</p>
                    </div>

                    <div style={{ padding: '1.5rem', marginbottom: '1rem', background: 'var(--color-bg-dark)', borderRadius: '8px' }}>
                        <h4 style={{ color: 'var(--color-gkit-green)', marginBottom: '0.5rem' }}>Hva med kostnad?</h4>
                        <p>Kontakt oss for prising. Vanligvis per medlem eller per turnering.</p>
                    </div>
                </div>
            </section>

            <section className="contact" id="kontakt" style={{ background: 'var(--color-bg-dark)', padding: '4rem 0' }}>
                <div className="container" style={{ textAlign: 'center' }}>
                    <h2 style={{ marginBottom: '1rem' }}>Moderniser scoring-prosessen din</h2>
                    <p style={{ fontSize: '1.2rem', color: 'var(--color-gray-light)', marginBottom: '2rem' }}>
                        Vi setter opp Scangolf-integrasjonen for din klubb og sikrer optimal GolfBox-kobling.
                    </p>
                    <Link to="/#kontakt" className="btn btn-primary" style={{ fontSize: '1.2rem', padding: '1rem 2rem' }}>
                        Bestill demo
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

export default ScangolfIntegration
