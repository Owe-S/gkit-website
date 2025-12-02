import { Link } from 'react-router-dom'
import Navbar from '../../components/Navbar'
import '../../App.css'

const GolfTeamTime = () => {
    return (
        <div className="app">
            <header className="header">
                <Navbar />
            </header>

            <section className="hero" style={{ minHeight: '60vh' }}>
                <div className="hero-content fade-in-up">
                    <h1>
                        <span className="text-gradient-green">GolfTeam-Time</span>
                        <span style={{ display: 'inline-block', background: 'rgba(255, 193, 7, 0.2)', color: '#ffc107', padding: '0.3rem 0.8rem', borderRadius: '20px', fontSize: '0.8rem', marginLeft: '1rem', verticalAlign: 'middle' }}>Under testing</span>
                        <br />
                        Tidregistrering for klubben
                    </h1>
                    <p style={{ fontSize: '1.3rem', color: 'var(--color-gray-light)', maxWidth: '800px', margin: '2rem auto' }}>
                        Enkel tidregistrering og oppgavehåndtering for golfklubbens personale og frivillige team.
                    </p>
                    <div className="hero-cta">
                        <a href="https://golfteam-time-eur.web.app" target="_blank" rel="noopener noreferrer" className="btn btn-primary">Åpne appen</a>
                        <a href="#kontakt" className="btn btn-secondary">Kom i gang</a>
                    </div>
                </div>
            </section>

            <section className="container section-padding">
                <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
                    <img
                        src="/images/apps/golfteam-time.png"
                        alt="GolfTeam-Time Interface"
                        style={{ maxWidth: '100%', borderRadius: '12px', boxShadow: '0 8px 24px rgba(0,0,0,0.3)' }}
                    />
                </div>
            </section>

            <section className="container section-padding" style={{ background: 'rgba(76, 175, 80, 0.02)' }}>
                <h2 style={{ textAlign: 'center', marginBottom: '3rem' }}>Funksjoner</h2>

                <div className="services-grid">
                    <div className="service-card glass">
                        <div className="service-icon">⏱️</div>
                        <h3>Enkel Timeregistrering</h3>
                        <p>Ansatte og frivillige registrerer timer enkelt fra mobilen. Full oversikt over tidsbruk på ulike prosjekter.</p>
                    </div>

                    <div className="service-card glass">
                        <div className="service-icon">📋</div>
                        <h3>Oppgavestyring</h3>
                        <p>Tildel oppgaver til teamet. Følg fremdrift og få beskjed når jobben er gjort.</p>
                    </div>

                    <div className="service-card glass">
                        <div className="service-icon">👥</div>
                        <h3>Team-oversikt</h3>
                        <p>Se hvem som er på jobb, hvem som har ferie, og planlegg bemanningen effektivt.</p>
                    </div>

                    <div className="service-card glass">
                        <div className="service-icon">📱</div>
                        <h3>Mobilapp</h3>
                        <p>Alt fungerer sømløst på mobil. Ingen behov for PC ute på banen.</p>
                    </div>
                </div>
            </section>

            <section className="container section-padding">
                <h2 style={{ textAlign: 'center', marginBottom: '3rem' }}>Fordeler</h2>

                <div style={{ maxWidth: '800px', margin: '0 auto' }}>
                    <div className="why-list">
                        <div style={{ padding: '1.5rem', marginBottom: '1rem', background: 'rgba(76, 175, 80, 0.05)', borderLeft: '4px solid var(--color-gkit-green)', borderRadius: '8px' }}>
                            <h4>🎯 Full Kontroll</h4>
                            <p>Få full oversikt over timebruk og kostnader knyttet til banevedlikehold og drift.</p>
                        </div>

                        <div style={{ padding: '1.5rem', marginBottom: '1rem', background: 'rgba(76, 175, 80, 0.05)', borderLeft: '4px solid var(--color-gkit-green)', borderRadius: '8px' }}>
                            <h4>🤝 Bedre Samarbeid</h4>
                            <p>Tydelig kommunikasjon om oppgaver og ansvar gir et mer effektivt team.</p>
                        </div>

                        <div style={{ padding: '1.5rem', marginBottom: '1rem', background: 'rgba(76, 175, 80, 0.05)', borderLeft: '4px solid var(--color-gkit-green)', borderRadius: '8px' }}>
                            <h4>📊 Rapportering</h4>
                            <p>Ta ut rapporter til lønnskjøring og styremøter med få klikk.</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="container section-padding" style={{ background: 'rgba(76, 175, 80, 0.02)' }}>
                <h2 style={{ textAlign: 'center', marginBottom: '3rem' }}>Ofte Stilte Spørsmål</h2>

                <div style={{ maxWidth: '800px', margin: '0 auto' }}>
                    <div style={{ padding: '1.5rem', marginBottom: '1rem', background: 'var(--color-bg-dark)', borderRadius: '8px' }}>
                        <h4 style={{ color: 'var(--color-gkit-green)', marginBottom: '0.5rem' }}>Når lanseres GolfTeam-Time?</h4>
                        <p>Appen er under aktiv testing. Vi lanserer i 2025 Q1. Interesserte klubber kan bli med i pilot-programmet.</p>
                    </div>

                    <div style={{ padding: '1.5rem', marginBottom: '1rem', background: 'var(--color-bg-dark)', borderRadius: '8px' }}>
                        <h4 style={{ color: 'var(--color-gkit-green)', marginBottom: '0.5rem' }}>Fungerer det på mobil?</h4>
                        <p>Ja, fullt responsiv webapp som fungerer perfekt på mobil, nettbrett og PC. Ingen app-nedlasting nødvendig.</p>
                    </div>

                    <div style={{ padding: '1.5rem', marginBottom: '1rem', background: 'var(--color-bg-dark)', borderRadius: '8px' }}>
                        <h4 style={{ color: 'var(--color-gkit-green)', marginBottom: '0.5rem' }}>Kan vi integrere med lønnssystem?</h4>
                        <p>Ja, vi kan eksportere data til de fleste lønnssystemer. Kontakt oss for detaljer om din leverandør.</p>
                    </div>
                </div>
            </section>

            <section className="contact" id="kontakt" style={{ background: 'var(--color-bg-dark)', padding: '4rem 0' }}>
                <div className="container" style={{ textAlign: 'center' }}>
                    <h2 style={{ marginBottom: '1rem' }}>Få kontroll på tiden?</h2>
                    <p style={{ fontSize: '1.2rem', color: 'var(--color-gray-light)', marginBottom: '2rem' }}>
                        Vi hjelper dere i gang med GolfTeam-Time.
                    </p>
                    <Link to="/#kontakt" className="btn btn-primary" style={{ fontSize: '1.2rem', padding: '1rem 2rem' }}>
                        Kontakt oss
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

export default GolfTeamTime
