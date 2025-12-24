import { Link } from 'react-router-dom'
import Navbar from '../../components/Navbar'
import '../../App.css'

const Golfbilkontroll = () => {
    return (
        <div className="app">
            <header className="header">
                <Navbar />
            </header>

            <section className="hero" style={{ minHeight: '60vh' }}>
                <div className="hero-content fade-in-up">
                    <h1>
                        <span className="text-gradient-green">Golfbilkontroll</span>
                        <span style={{ display: 'inline-block', background: 'rgba(158, 158, 158, 0.2)', color: '#9E9E9E', padding: '0.3rem 0.8rem', borderRadius: '20px', fontSize: '0.8rem', marginLeft: '1rem', verticalAlign: 'middle' }}>Under testing</span>
                        <br />
                        Oversikt over golfbiler
                    </h1>
                    <p style={{ fontSize: '1.3rem', color: 'var(--color-gray-light)', maxWidth: '800px', margin: '2rem auto' }}>
                        Oversikt over klubbens golfbiler med booking- og vedlikeholdsstyring. Hold full kontroll på flåten, utleie og servicebehov.
                    </p>
                    <div className="hero-cta">
                        <a href="#kontakt" className="btn btn-primary">Be om demo</a>
                        <Link to="/services" className="btn btn-secondary">Alle tjenester</Link>
                    </div>
                </div>
            </section>

            <section className="container section-padding">
                <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
                    <img
                        src="/images/apps/golfbilkontroll.png"
                        alt="Golfbilkontroll Interface"
                        style={{ maxWidth: '100%', borderRadius: '12px', boxShadow: '0 8px 24px rgba(0,0,0,0.3)' }}
                    />
                </div>
            </section>

            <section className="container section-padding" style={{ background: 'rgba(76, 175, 80, 0.02)' }}>
                <h2 style={{ textAlign: 'center', marginBottom: '3rem' }}>Funksjoner</h2>

                <div className="services-grid">
                    <div className="service-card glass">
                        <div className="service-icon">🚗</div>
                        <h3>Flåtestyring</h3>
                        <p>Full oversikt over alle golfbiler. Se status, batterinivå og plassering (hvis GPS er installert).</p>
                    </div>

                    <div className="service-card glass">
                        <div className="service-icon">📅</div>
                        <h3>Booking</h3>
                        <p>Integrert booking for medlemmer og gjester. Unngå dobbeltbookinger.</p>
                    </div>

                    <div className="service-card glass">
                        <div className="service-icon">🔧</div>
                        <h3>Vedlikeholdslogg</h3>
                        <p>Hold oversikt over service og reparasjoner. Få varsel når det er tid for sjekk.</p>
                    </div>

                    <div className="service-card glass">
                        <div className="service-icon">🔑</div>
                        <h3>Utleie</h3>
                        <p>Enkel håndtering av utleie, nøkler og betaling.</p>
                    </div>
                </div>
            </section>

            <section className="container section-padding">
                <h2 style={{ textAlign: 'center', marginBottom: '3rem' }}>Fordeler</h2>

                <div style={{ maxWidth: '800px', margin: '0 auto' }}>
                    <div className="why-list">
                        <div style={{ padding: '1.5rem', marginBottom: '1rem', background: 'rgba(76, 175, 80, 0.05)', borderLeft: '4px solid var(--color-gkit-green)', borderRadius: '8px' }}>
                            <h4>💰 Økt Inntekt</h4>
                            <p>Bedre utnyttelse av bilparken gir høyere leieinntekter.</p>
                        </div>

                        <div style={{ padding: '1.5rem', marginBottom: '1rem', background: 'rgba(76, 175, 80, 0.05)', borderLeft: '4px solid var(--color-gkit-green)', borderRadius: '8px' }}>
                            <h4>🛠️ Lavere Kostnader</h4>
                            <p>Forebyggende vedlikehold reduserer dyre reparasjoner og nedetid.</p>
                        </div>

                        <div style={{ padding: '1.5rem', marginBottom: '1rem', background: 'rgba(76, 175, 80, 0.05)', borderLeft: '4px solid var(--color-gkit-green)', borderRadius: '8px' }}>
                            <h4>😊 Fornøyde Spillere</h4>
                            <p>Alltid fungerende biler tilgjengelig når de trengs.</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="container section-padding" style={{ background: 'rgba(76, 175, 80, 0.02)' }}>
                <h2 style={{ textAlign: 'center', marginBottom: '3rem' }}>Ofte Stilte Spørsmål</h2>

                <div style={{ maxWidth: '800px', margin: '0 auto' }}>
                    <div style={{ padding: '1.5rem', marginBottom: '1rem', background: 'var(--color-bg-dark)', borderRadius: '8px' }}>
                        <h4 style={{ color: 'var(--color-gkit-green)', marginBottom: '0.5rem' }}>Når lanseres Golfbilkontroll?</h4>
                        <p>Pilot-testing med utvalgte klubber pågår. Lansering planlagt Q2 2025. Bli med i pilot-programmet!</p>
                    </div>

                    <div style={{ padding: '1.5rem', marginBottom: '1rem', background: 'var(--color-bg-dark)', borderRadius: '8px' }}>
                        <h4 style={{ color: 'var(--color-gkit-green)', marginBottom: '0.5rem' }}>Må vi installere GPS på bilene?</h4>
                        <p>Nei, grunnfunksjoner fungerer uten GPS. GPS er et tilvalg for sanntids-sporing og geofencing.</p>
                    </div>

                    <div style={{ padding: '1.5rem', marginBottom: '1rem', background: 'var(--color-bg-dark)', borderRadius: '8px' }}>
                        <h4 style={{ color: 'var(--color-gkit-green)', marginBottom: '0.5rem' }}>Kan medlemmer booke selv?</h4>
                        <p>Ja! Medlemmer logger inn via app eller nettside og booker ledig bil. Automatisk betaling via Vipps eller kort.</p>
                    </div>

                    <div style={{ padding: '1.5rem', marginBottom: '1rem', background: 'var(--color-bg-dark)', borderRadius: '8px' }}>
                        <h4 style={{ color: 'var(--color-gkit-green)', marginBottom: '0.5rem' }}>Hva koster systemet?</h4>
                        <p>Kontakt oss for tilbud basert på antall biler og funksjoner. Pilot-klubber får spesielle betingelser.</p>
                    </div>
                </div>
            </section>

            <section className="contact" id="kontakt" style={{ background: 'var(--color-bg-dark)', padding: '4rem 0' }}>
                <div className="container" style={{ textAlign: 'center' }}>
                    <h2 style={{ marginBottom: '1rem' }}>Få kontroll på bilparken?</h2>
                    <p style={{ fontSize: '1.2rem', color: 'var(--color-gray-light)', marginBottom: '2rem' }}>
                        Vi viser deg hvordan Golfbilkontroll fungerer.
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

export default Golfbilkontroll
