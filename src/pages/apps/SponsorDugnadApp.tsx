import { Link } from 'react-router-dom'
import Navbar from '../../components/Navbar'
import '../../App.css'

const SponsorDugnad = () => {
    return (
        <div className="app">
            <header className="header">
                <Navbar />
            </header>

            <section className="hero" style={{ minHeight: '60vh' }}>
                <div className="hero-content fade-in-up">
                    <h1>
                        <span className="text-gradient-green">Sponsor & Dugnad</span><br />
                        Administrering av sponsorer og frivillighet
                    </h1>
                    <p style={{ fontSize: '1.3rem', color: 'var(--color-gray-light)', maxWidth: '800px', margin: '2rem auto' }}>
                        Komplett løsning for å administrere sponsoravtaler, dugnadsarbeid og frivillige timer. Øk inntektene og styrk frivilligheten.
                    </p>
                    <div className="hero-cta">
                        <a href="mailto:kontakt@golfklubb-it.com" className="btn btn-primary">Be om demo</a>
                        <Link to="/#kontakt" className="btn btn-secondary">Kontakt oss</Link>
                    </div>
                </div>
            </section>

            <section className="container section-padding">
                <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
                    <div style={{ 
                        padding: '3rem', 
                        background: 'linear-gradient(135deg, rgba(76,175,80,0.1), rgba(76,175,80,0.05))', 
                        borderRadius: '12px',
                        fontSize: '4rem'
                    }}>
                        🤝
                    </div>
                </div>
            </section>

            <section className="container section-padding" style={{ background: 'rgba(76, 175, 80, 0.02)' }}>
                <h2 style={{ textAlign: 'center', marginBottom: '3rem' }}>Nøkkelfunksjoner</h2>

                <div className="services-grid">
                    <div className="service-card glass">
                        <div className="service-icon">💼</div>
                        <h3>Sponsorstyring</h3>
                        <p>Hold oversikt over alle sponsoravtaler, kontraktsperioder, gjenytelser og kontaktpersoner på ett sted.</p>
                    </div>

                    <div className="service-card glass">
                        <div className="service-icon">📅</div>
                        <h3>Dugnadsplanlegging</h3>
                        <p>Lag dugnadsplaner med dato, oppgaver og frivillige. Frivillige melder seg på direkte i appen.</p>
                    </div>

                    <div className="service-card glass">
                        <div className="service-icon">⏱️</div>
                        <h3>Tidsregistrering</h3>
                        <p>Frivillige timer registreres og rapporteres. Belønne innsatsen med greenfee eller andre fordeler.</p>
                    </div>

                    <div className="service-card glass">
                        <div className="service-icon">📊</div>
                        <h3>Rapportering</h3>
                        <p>Innebygde rapporter viser sponsorinntekter, frivillige timer og andre nøkkelmetrikker for ledelsen.</p>
                    </div>
                </div>
            </section>

            <section className="container section-padding">
                <h2 style={{ textAlign: 'center', marginBottom: '3rem' }}>Fordeler for klubber</h2>

                <div style={{ maxWidth: '800px', margin: '0 auto' }}>
                    <div className="why-list">
                        <div style={{ padding: '1.5rem', marginBottom: '1rem', background: 'rgba(76, 175, 80, 0.05)', borderLeft: '4px solid var(--color-gkit-green)', borderRadius: '8px' }}>
                            <h4>📋 Komplett Ryggdekning</h4>
                            <p>Alt fra avtaler til gjennomført dugnadsarbeid dokumenteres digitalt. Klubben overholder alltid lover og avtaler.</p>
                        </div>

                        <div style={{ padding: '1.5rem', marginBottom: '1rem', background: 'rgba(76, 175, 80, 0.05)', borderLeft: '4px solid var(--color-gkit-green)', borderRadius: '8px' }}>
                            <h4>📢 Effektiv Kommunikasjon</h4>
                            <p>Sponsorer og frivillige får automatiske påminnelser og statusoppdateringer. Ingen glemmebørte avtaler eller oppgaver.</p>
                        </div>

                        <div style={{ padding: '1.5rem', marginBottom: '1rem', background: 'rgba(76, 175, 80, 0.05)', borderLeft: '4px solid var(--color-gkit-green)', borderRadius: '8px' }}>
                            <h4>💰 Økte Inntekter</h4>
                            <p>Bedre sponsoroppfølging gir høyere sponsorinntekter. Systematisk tilgang til potensielle partnere.</p>
                        </div>

                        <div style={{ padding: '1.5rem', marginBottom: '1rem', background: 'rgba(76, 175, 80, 0.05)', borderLeft: '4px solid var(--color-gkit-green)', borderRadius: '8px' }}>
                            <h4>🎯 Styrket Frivillighet</h4>
                            <p>Frivillige får anerkjennelse for arbeidet sitt. Belønningssystemet øker motivasjonen og retensjon av aktive.</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="container section-padding" style={{ background: 'rgba(76, 175, 80, 0.02)' }}>
                <h2 style={{ textAlign: 'center', marginBottom: '3rem' }}>Eksempel: Dugnadsplanlegging</h2>

                <div style={{ maxWidth: '800px', margin: '0 auto', padding: '2rem', background: 'var(--color-bg-dark)', borderRadius: '8px' }}>
                    <h4 style={{ color: 'var(--color-gkit-green)', marginBottom: '1rem' }}>Slik fungerer det:</h4>
                    <ol style={{ color: 'var(--color-gray-light)', lineHeight: '1.8' }}>
                        <li>🗓️ <strong>Planlegg:</strong> Admin oppretter dugnader med dato, tidspunkt, oppgaver og antall frivillige needed</li>
                        <li>📲 <strong>Inviter:</strong> SMS/e-post sendes automatisk til frivillige</li>
                        <li>✅ <strong>Påmelding:</strong> Frivillige melder seg på direkte i appen</li>
                        <li>⏱️ <strong>Registrer:</strong> Timer registreres når dugnad er gjennomført</li>
                        <li>🏆 <strong>Belohn:</strong> Frivillige får poeng som kan byttes i greenfee eller gaver</li>
                    </ol>
                </div>
            </section>

            <section className="container section-padding" style={{ background: 'rgba(76, 175, 80, 0.02)' }}>
                <h2 style={{ textAlign: 'center', marginBottom: '3rem' }}>Ofte Stilte Spørsmål</h2>

                <div style={{ maxWidth: '800px', margin: '0 auto' }}>
                    <div style={{ padding: '1.5rem', marginBottom: '1rem', background: 'var(--color-bg-dark)', borderRadius: '8px' }}>
                        <h4 style={{ color: 'var(--color-gkit-green)', marginBottom: '0.5rem' }}>Hvordan håndteres betaling til frivillige?</h4>
                        <p>Timer registreres i systemet. Klubben kan gi belønninger via greenfee, årskort, eller andre fordeler du bestemmer.</p>
                    </div>

                    <div style={{ padding: '1.5rem', marginBottom: '1rem', background: 'var(--color-bg-dark)', borderRadius: '8px' }}>
                        <h4 style={{ color: 'var(--color-gkit-green)', marginBottom: '0.5rem' }}>Kan vi eksportere rapporter?</h4>
                        <p>Ja, alle rapporter kan eksporteres til Excel eller PDF for videre analyse eller regnskap.</p>
                    </div>

                    <div style={{ padding: '1.5rem', marginBottom: '1rem', background: 'var(--color-bg-dark)', borderRadius: '8px' }}>
                        <h4 style={{ color: 'var(--color-gkit-green)', marginBottom: '0.5rem' }}>Integreres det med GolfBox?</h4>
                        <p>Ja, Sponsor & Dugnad integreres med GolfBox slik at frivillige timer kan påvirke rabatter eller fordeler.</p>
                    </div>

                    <div style={{ padding: '1.5rem', marginBottom: '1rem', background: 'var(--color-bg-dark)', borderRadius: '8px' }}>
                        <h4 style={{ color: 'var(--color-gkit-green)', marginBottom: '0.5rem' }}>Hva koster appen?</h4>
                        <p>Kontakt GKIT for skreddersydd prising basert på antall frivillige og ditt bruk av systemet.</p>
                    </div>
                </div>
            </section>

            <section className="contact" id="kontakt" style={{ background: 'var(--color-bg-dark)', padding: '4rem 0' }}>
                <div className="container" style={{ textAlign: 'center' }}>
                    <h2 style={{ marginBottom: '1rem' }}>Klar for å styrke frivilligheten?</h2>
                    <p style={{ fontSize: '1.2rem', color: 'var(--color-gray-light)', marginBottom: '2rem' }}>
                        La oss vise hvordan Sponsor & Dugnad kan modernisere klubbens frivillighetsarbeid.
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

export default SponsorDugnad
