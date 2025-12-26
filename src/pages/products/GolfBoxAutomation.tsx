import { Link } from 'react-router-dom'
import Navbar from '../../components/Navbar'
import '../../App.css'

const GolfBoxAutomation = () => {
    return (
        <div className="app">
            <header className="header">
                <Navbar />
            </header>

            <section className="hero" style={{ minHeight: '60vh' }}>
                <div className="hero-content fade-in-up">
                    <h1>
                        <span className="text-gradient-green">GolfBox Automatisering</span><br />
                        Sømløs integrasjon og effektiv drift
                    </h1>
                    <p style={{ fontSize: '1.3rem', color: 'var(--color-gray-light)', maxWidth: '800px', margin: '2rem auto' }}>
                        Vi tar ansvar for hele GolfBox-installasjonen og automatiserer gjentakende oppgaver. Spar 10+ timer per måned og gi medlemmene en bedre opplevelse.
                    </p>
                    <div className="hero-cta">
                        <a href="mailto:kontakt@golfklubb-it.com" className="btn btn-primary">Be om demo</a>
                        <Link to="/#kontakt" className="btn btn-secondary">Kontakt oss</Link>
                    </div>
                </div>
            </section>

            <section className="container section-padding">
                <h2 style={{ textAlign: 'center', marginBottom: '3rem' }}>Hva vi tilbyr</h2>

                <div className="services-grid">
                    <div className="service-card glass">
                        <div className="service-icon">⚙️</div>
                        <h3>Oppsett og Optimalisering</h3>
                        <p>Vi tar ansvar for hele GolfBox-installasjonen, fra oppsett og datamigrering til konfigurering av alle moduler.</p>
                    </div>

                    <div className="service-card glass">
                        <div className="service-icon">🔗</div>
                        <h3>Sømløs Integrasjon</h3>
                        <p>GolfBox integreres med ClubsiteCMS, digital skilting, Vipps/Nets Easy og andre løsninger slik at data flyter automatisk.</p>
                    </div>

                    <div className="service-card glass">
                        <div className="service-icon">📧</div>
                        <h3>Automatisert Kommunikasjon</h3>
                        <p>Vi setter opp automatiske e-poster og SMS for medlemskommunikasjon, fakturering og påminnelser.</p>
                    </div>

                    <div className="service-card glass">
                        <div className="service-icon">⚡</div>
                        <h3>Automatiserte Arbeidsflyter</h3>
                        <p>Gjentakende oppgaver som fakturering, rapportgenerering og oppdatering av startlister automatiseres.</p>
                    </div>

                    <div className="service-card glass">
                        <div className="service-icon">🎓</div>
                        <h3>Opplæring og Support</h3>
                        <p>GKIT tilbyr kurs og løpende support til ansatte og frivillige som skal bruke systemet.</p>
                    </div>

                    <div className="service-card glass">
                        <div className="service-icon">📊</div>
                        <h3>Rapporter og Oversikter</h3>
                        <p>Ferdige rapporter som viser medlemsoversikt, inntekter, bookinger og andre nøkkeltall for ledelsen.</p>
                    </div>
                </div>
            </section>

            <section className="container section-padding" style={{ background: 'rgba(76, 175, 80, 0.02)' }}>
                <h2 style={{ textAlign: 'center', marginBottom: '3rem' }}>Fordeler</h2>

                <div style={{ maxWidth: '900px', margin: '0 auto' }}>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '2rem' }}>
                        <div style={{ padding: '1.5rem', background: 'rgba(76, 175, 80, 0.05)', borderLeft: '4px solid var(--color-gkit-green)', borderRadius: '8px' }}>
                            <h4>⏰ Spar 10+ timer per måned</h4>
                            <p>Automatisering av rutineoppgaver frigjør tiden din for viktigere arbeid.</p>
                        </div>

                        <div style={{ padding: '1.5rem', background: 'rgba(76, 175, 80, 0.05)', borderLeft: '4px solid var(--color-gkit-green)', borderRadius: '8px' }}>
                            <h4>✅ Eliminer manuelle feil</h4>
                            <p>Automatiserte prosesser reduserer risikoen for feilregistreringer og misforståelser.</p>
                        </div>

                        <div style={{ padding: '1.5rem', background: 'rgba(76, 175, 80, 0.05)', borderLeft: '4px solid var(--color-gkit-green)', borderRadius: '8px' }}>
                            <h4>😊 Bedre medlemsopplevelse</h4>
                            <p>Medlemmer får raskere bekreftelser, korrekte startlister og påminnelser – alt automatisert.</p>
                        </div>

                        <div style={{ padding: '1.5rem', background: 'rgba(76, 175, 80, 0.05)', borderLeft: '4px solid var(--color-gkit-green)', borderRadius: '8px' }}>
                            <h4>📈 Skalerbar løsning</h4>
                            <p>GolfBox-automatisering tilpasses klubber i alle størrelser, fra små til store klubber.</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="container section-padding">
                <h2 style={{ textAlign: 'center', marginBottom: '3rem' }}>Eksempel: Automatisert medlemskommunikasjon</h2>

                <div style={{ maxWidth: '800px', margin: '0 auto', padding: '2rem', background: 'var(--color-bg-dark)', borderRadius: '8px' }}>
                    <h4 style={{ color: 'var(--color-gkit-green)', marginBottom: '1rem' }}>Booking → Automatisk e-post til medlemmer:</h4>
                    <ol style={{ color: 'var(--color-gray-light)', lineHeight: '1.8' }}>
                        <li>📅 Medlem booker runde i GolfBox</li>
                        <li>✉️ Automatisk bekreftings-e-post sendes umiddelbart</li>
                        <li>📍 Påminnelse sendt dagen før (SMS eller e-post)</li>
                        <li>📊 Resultat lagres automatisk når runde er spilt</li>
                        <li>🏌️ Handicap oppdateres og medlem får beskjed</li>
                    </ol>
                </div>
            </section>

            <section className="container section-padding" style={{ background: 'rgba(76, 175, 80, 0.02)' }}>
                <h2 style={{ textAlign: 'center', marginBottom: '3rem' }}>Moduler vi kan automatisere</h2>

                <div style={{ maxWidth: '800px', margin: '0 auto' }}>
                    <ul style={{ color: 'var(--color-gray-light)', lineHeight: '2', listStyle: 'none' }}>
                        <li>✓ Booking- og teetime-system</li>
                        <li>✓ Turneringer og ligaer</li>
                        <li>✓ Medlemsregister og fagkort</li>
                        <li>✓ ProPlanner (instruktør- og pro-booking)</li>
                        <li>✓ Betaling og fakturering</li>
                        <li>✓ Startkort og resultater</li>
                        <li>✓ Handicap-oppdatering</li>
                        <li>✓ Statistikk og rapporter</li>
                    </ul>
                </div>
            </section>

            <section className="container section-padding" style={{ background: 'rgba(76, 175, 80, 0.02)' }}>
                <h2 style={{ textAlign: 'center', marginBottom: '3rem' }}>Ofte Stilte Spørsmål</h2>

                <div style={{ maxWidth: '800px', margin: '0 auto' }}>
                    <div style={{ padding: '1.5rem', marginBottom: '1rem', background: 'var(--color-bg-dark)', borderRadius: '8px' }}>
                        <h4 style={{ color: 'var(--color-gkit-green)', marginBottom: '0.5rem' }}>Hvor lang tid tar implementeringen?</h4>
                        <p>Typisk 2-4 uker avhengig av klubbens kompleksitet og eksisterende datasett.</p>
                    </div>

                    <div style={{ padding: '1.5rem', marginBottom: '1rem', background: 'var(--color-bg-dark)', borderRadius: '8px' }}>
                        <h4 style={{ color: 'var(--color-gkit-green)', marginBottom: '0.5rem' }}>Hva hvis vi har egne tilpassinger i GolfBox?</h4>
                        <p>Ingen problem! Vi kartlegger alle dine tilpassinger og sikrer at automatiseringen respekterer dem.</p>
                    </div>

                    <div style={{ padding: '1.5rem', marginBottom: '1rem', background: 'var(--color-bg-dark)', borderRadius: '8px' }}>
                        <h4 style={{ color: 'var(--color-gkit-green)', marginBottom: '0.5rem' }}>Får vi løpende support etter lansering?</h4>
                        <p>Ja, vi tilbyr 24/7 support og gjør regelmessige optimiseringer basert på klubbens behov.</p>
                    </div>

                    <div style={{ padding: '1.5rem', marginBottom: '1rem', background: 'var(--color-bg-dark)', borderRadius: '8px' }}>
                        <h4 style={{ color: 'var(--color-gkit-green)', marginBottom: '0.5rem' }}>Hvor mye koster det?</h4>
                        <p>Kontakt GKIT for skreddersydd prising basert på antall moduler og graden av automatisering.</p>
                    </div>
                </div>
            </section>

            <section className="contact" id="kontakt" style={{ background: 'var(--color-bg-dark)', padding: '4rem 0' }}>
                <div className="container" style={{ textAlign: 'center' }}>
                    <h2 style={{ marginBottom: '1rem' }}>Klar for automatisering?</h2>
                    <p style={{ fontSize: '1.2rem', color: 'var(--color-gray-light)', marginBottom: '2rem' }}>
                        La oss vise hvordan vi kan spare klubben for tid og penger med GolfBox automatisering.
                    </p>
                    <Link to="/#kontakt" className="btn btn-primary" style={{ fontSize: '1.2rem', padding: '1rem 2rem' }}>
                        Be om uforpliktende demo
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

export default GolfBoxAutomation
