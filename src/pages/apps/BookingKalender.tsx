import { Link } from 'react-router-dom'
import Navbar from '../../components/Navbar'
import '../../App.css'

const BookingKalender = () => {
    return (
        <div className="app">
            <header className="header">
                <Navbar />
            </header>

            <section className="hero" style={{ minHeight: '60vh' }}>
                <div className="hero-content fade-in-up">
                    <h1>
                        <span className="text-gradient-green">Booking & Kalender</span>
                        <span style={{ display: 'inline-block', background: 'rgba(255, 193, 7, 0.2)', color: '#ffc107', padding: '0.3rem 0.8rem', borderRadius: '20px', fontSize: '0.8rem', marginLeft: '1rem', verticalAlign: 'middle' }}>Under testing</span>
                        <br />
                        For simulator og instruktør
                    </h1>
                    <p style={{ fontSize: '1.3rem', color: 'var(--color-gray-light)', maxWidth: '800px', margin: '2rem auto' }}>
                        Systemer for simulator, instruktør og frivillige timeplanlegging.
                    </p>
                    <div className="hero-cta">
                        <a href="#kontakt" className="btn btn-primary">Kom i gang</a>
                        <Link to="/services" className="btn btn-secondary">Alle tjenester</Link>
                    </div>
                </div>
            </section>

            <section className="container section-padding">
                <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
                    <img
                        src="/images/apps/booking-kalender.png"
                        alt="Booking & Kalender Interface"
                        style={{ maxWidth: '100%', borderRadius: '12px', boxShadow: '0 8px 24px rgba(0,0,0,0.3)' }}
                    />
                </div>
            </section>

            <section className="container section-padding" style={{ background: 'rgba(76, 175, 80, 0.02)' }}>
                <h2 style={{ textAlign: 'center', marginBottom: '3rem' }}>Funksjoner</h2>

                <div className="services-grid">
                    <div className="service-card glass">
                        <div className="service-icon">🏌️</div>
                        <h3>Simulator-booking</h3>
                        <p>La medlemmer booke simulatortimer selv, døgnet rundt. Integrert med betaling og adgangskontroll.</p>
                    </div>

                    <div className="service-card glass">
                        <div className="service-icon">🎓</div>
                        <h3>Pro-timer</h3>
                        <p>Kalender for instruktører. Medlemmer booker timer, kurs og pakketilbud direkte.</p>
                    </div>

                    <div className="service-card glass">
                        <div className="service-icon">🏢</div>
                        <h3>Møterom & Selskapslokaler</h3>
                        <p>Administrer utleie av klubbhus og møterom. Hold oversikt over arrangementer.</p>
                    </div>

                    <div className="service-card glass">
                        <div className="service-icon">🔗</div>
                        <h3>Integrasjoner</h3>
                        <p>Synkroniser med GolfBox, Google Calendar og regnskapssystem.</p>
                    </div>
                </div>
            </section>

            <section className="container section-padding">
                <h2 style={{ textAlign: 'center', marginBottom: '3rem' }}>Fordeler</h2>

                <div style={{ maxWidth: '800px', margin: '0 auto' }}>
                    <div className="why-list">
                        <div style={{ padding: '1.5rem', marginBottom: '1rem', background: 'rgba(76, 175, 80, 0.05)', borderLeft: '4px solid var(--color-gkit-green)', borderRadius: '8px' }}>
                            <h4>📈 Økt Belegg</h4>
                            <p>Enkel booking senker terskelen for å bestille. Fyll opp ledig kapasitet.</p>
                        </div>

                        <div style={{ padding: '1.5rem', marginBottom: '1rem', background: 'rgba(76, 175, 80, 0.05)', borderLeft: '4px solid var(--color-gkit-green)', borderRadius: '8px' }}>
                            <h4>⏱️ Mindre Administrasjon</h4>
                            <p>Slipp telefoner og e-poster. Alt skjer automatisk.</p>
                        </div>

                        <div style={{ padding: '1.5rem', marginBottom: '1rem', background: 'rgba(76, 175, 80, 0.05)', borderLeft: '4px solid var(--color-gkit-green)', borderRadius: '8px' }}>
                            <h4>💳 Sikker Betaling</h4>
                            <p>Ta betalt ved booking. Reduser "no-shows" og tapte inntekter.</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="container section-padding" style={{ background: 'rgba(76, 175, 80, 0.02)' }}>
                <h2 style={{ textAlign: 'center', marginBottom: '3rem' }}>Ofte Stilte Spørsmål</h2>

                <div style={{ maxWidth: '800px', margin: '0 auto' }}>
                    <div style={{ padding: '1.5rem', marginBottom: '1rem', background: 'var(--color-bg-dark)', borderRadius: '8px' }}>
                        <h4 style={{ color: 'var(--color-gkit-green)', marginBottom: '0.5rem' }}>Når kan vi ta i bruk systemet?</h4>
                        <p>Beta-testing med pilot-klubber pågår. Lansering Q1-Q2 2025. Kontakt oss for tidlig tilgang.</p>
                    </div>

                    <div style={{ padding: '1.5rem', marginBottom: '1rem', background: 'var(--color-bg-dark)', borderRadius: '8px' }}>
                        <h4 style={{ color: 'var(--color-gkit-green)', marginBottom: '0.5rem' }}>Hva er forskjellen på GKIT Booking og CS Booking?</h4>
                        <p>CS Booking fra Scangolf er et etablert system med 15+ sentre. GKIT Booking er vår egen løsning med tettere integrasjon mot våre andre systemer (Søknadsportalen, Display, etc.).</p>
                    </div>

                    <div style={{ padding: '1.5rem', marginBottom: '1rem', background: 'var(--color-bg-dark)', borderRadius: '8px' }}>
                        <h4 style={{ color: 'var(--color-gkit-green)', marginBottom: '0.5rem' }}>Kan vi integrere med betalingssystemer?</h4>
                        <p>Ja! Vipps, Stripe, og Nets er støttet. Automatisk betaling ved booking eller fakturering til medlemskonto.</p>
                    </div>

                    <div style={{ padding: '1.5rem', marginBottom: '1rem', background: 'var(--color-bg-dark)', borderRadius: '8px' }}>
                        <h4 style={{ color: 'var(--color-gkit-green)', marginBottom: '0.5rem' }}>Fungerer det med GolfBox?</h4>
                        <p>Ja, vi integrerer med GolfBox for medlemsdata og automatisk oppdatering av tilganger.</p>
                    </div>

                    <div style={{ padding: '1.5rem', marginBottom: '1rem', background: 'var(--color-bg-dark)', borderRadius: '8px' }}>
                        <h4 style={{ color: 'var(--color-gkit-green)', marginBottom: '0.5rem' }}>Hvilken løsning passer best for oss?</h4>
                        <p>Kontakt oss for en gjennomgang! Vi hjelper deg med å velge mellom GKIT Booking og CS Booking basert på dine behov.</p>
                    </div>
                </div>
            </section>

            <section className="contact" id="kontakt" style={{ background: 'var(--color-bg-dark)', padding: '4rem 0' }}>
                <div className="container" style={{ textAlign: 'center' }}>
                    <h2 style={{ marginBottom: '1rem' }}>Trenger dere bedre booking?</h2>
                    <p style={{ fontSize: '1.2rem', color: 'var(--color-gray-light)', marginBottom: '2rem' }}>
                        Vi skreddersyr en løsning for din klubb.
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

export default BookingKalender
