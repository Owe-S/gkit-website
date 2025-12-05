import { Link } from 'react-router-dom'
import Navbar from '../../components/Navbar'
import '../../App.css'

const ClubsiteCMS = () => {
    return (
        <div className="app">
            <header className="header">
                <Navbar />
            </header>

            <section className="hero" style={{ minHeight: '60vh' }}>
                <div className="hero-content fade-in-up">
                    <h1>
                        <span className="text-gradient-green">ClubsiteCMS</span><br />
                        Integrasjoner & Support
                    </h1>
                    <p style={{ fontSize: '1.3rem', color: 'var(--color-gray-light)', maxWidth: '800px', margin: '2rem auto' }}>
                        Vi integrerer med ClubsiteCMS fra Scangolf og tilbyr konsulentbistand for golfklubber. 45+ klubber bruker systemet.
                    </p>
                    <div className="hero-cta">
                        <a href="https://clubsite.no" target="_blank" rel="noopener noreferrer" className="btn btn-primary">Besøk clubsite.no</a>
                        <a href="#referanser" className="btn btn-secondary">Se referanser</a>
                    </div>
                </div>
            </section>

            <section className="container section-padding">
                <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
                    <img
                        src="/path/to/clubsite_cms.png"
                        alt="ClubsiteCMS Dashboard"
                        style={{ maxWidth: '100%', borderRadius: '12px', boxShadow: '0 8px 24px rgba(0,0,0,0.3)' }}
                    />
                </div>
            </section>

            <section className="container section-padding" style={{ background: 'rgba(76, 175, 80, 0.02)' }}>
                <h2 style={{ textAlign: 'center', marginBottom: '3rem' }}>Hva kan systemet?</h2>

                <div className="services-grid">
                    <div className="service-card glass">
                        <div className="service-icon">📰</div>
                        <h3>Nyheter & Artikler</h3>
                        <p>Publiser nyheter, turneringsresultater, og kunngjøringer. Enkel editor, ingen teknisk kunnskap nødvendig.</p>
                    </div>

                    <div className="service-card glass">
                        <div className="service-icon">📸</div>
                        <h3>Bildegalleri</h3>
                        <p>Last opp bilder fra turneringer og arrangementer. Automatisk bildekomprimering og responsivt galleri.</p>
                    </div>

                    <div className="service-card glass">
                        <div className="service-icon">📅</div>
                        <h3>Arrangementskalender</h3>
                        <p>Oversikt over turneringer, kurs, og styremøter. Synkroniseres med Google Calendar.</p>
                    </div>

                    <div className="service-card glass">
                        <div className="service-icon">🔗</div>
                        <h3>GolfBox Integrasjon</h3>
                        <p>Automatisk visning av tee-tider, starttider, og resultatlister. Alltid oppdatert fra GolfBox.</p>
                    </div>
                </div>
            </section>

            <section className="container section-padding" id="referanser">
                <h2 style={{ textAlign: 'center', marginBottom: '2rem' }}>45+ Norske Golfklubber</h2>
                <p style={{ textAlign: 'center', color: 'var(--color-gray-light)', maxWidth: '900px', margin: '0 auto 3rem' }}>
                    Klubber som bruker ClubsiteCMS inkluderer:
                </p>
                <div style={{ maxWidth: '900px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1rem' }}>
                    <div style={{ padding: '1rem', background: 'rgba(76, 175, 80, 0.05)', borderRadius: '8px' }}>Losby GK • Bærum GK • Asker GK</div>
                    <div style={{ padding: '1rem', background: 'rgba(76, 175, 80, 0.05)', borderRadius: '8px' }}>Vestfold GK • Grimstad GK • Hauger GK</div>
                    <div style={{ padding: '1rem', background: 'rgba(76, 175, 80, 0.05)', borderRadius: '8px' }}>Kristiansand GK • Drøbak GK • Ski GK</div>
                    <div style={{ padding: '1rem', background: 'rgba(76, 175, 80, 0.05)', borderRadius: '8px' }}>Grini GK • Haga GK • Kjekstad GK</div>
                </div>
                <p style={{ textAlign: 'center', marginTop: '2rem' }}>
                    <a href="https://clubsite.no/referanser" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--color-gkit-green)' }}>Se alle 45+ referanseklubber →</a>
                </p>
            </section>

            <section className="container section-padding">
                <h2 style={{ textAlign: 'center', marginBottom: '3rem' }}>Fordeler</h2>

                <div style={{ maxWidth: '800px', margin: '0 auto' }}>
                    <div className="why-list">
                        <div style={{ padding: '1.5rem', marginBottom: '1rem', background: 'rgba(76, 175, 80, 0.05)', borderLeft: '4px solid var(--color-gkit-green)', borderRadius: '8px' }}>
                            <h4>✨ Enkelt å Bruke</h4>
                            <p>Hvis du kan bruke Word, kan du oppdatere nettsiden. Ingen koding nødvendig.</p>
                        </div>

                        <div style={{ padding: '1.5rem', marginBottom: '1rem', background: 'rgba(76, 175, 80, 0.05)', borderLeft: '4px solid var(--color-gkit-green)', borderRadius: '8px' }}>
                            <h4>📱 Mobilvennlig</h4>
                            <p>Perfekt visning på mobil, nettbrett og PC. Responsivt design som standard.</p>
                        </div>

                        <div style={{ padding: '1.5rem', marginBottom: '1rem', background: 'rgba(76, 175, 80, 0.05)', borderLeft: '4px solid var(--color-gkit-green)', borderRadius: '8px' }}>
                            <h4>🔒 Sikker & Rask</h4>
                            <p>Hostet på Microsoft Azure. GDPR-kompatibel. Daglig backup. Lynrask lastetid.</p>
                        </div>

                        <div style={{ padding: '1.5rem', marginBottom: '1rem', background: 'rgba(76, 175, 80, 0.05)', borderLeft: '4px solid var(--color-gkit-green)', borderRadius: '8px' }}>
                            <h4>🛠️ Full Support</h4>
                            <p>Telefon- og e-poststøtte. Vi fikser problemer, oppdaterer systemet, og utvikler nye funksjoner.</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="container section-padding" style={{ background: 'rgba(76, 175, 80, 0.02)' }}>
                <h2 style={{ textAlign: 'center', marginBottom: '3rem' }}>Ofte Stilte Spørsmål</h2>

                <div style={{ maxWidth: '800px', margin: '0 auto' }}>
                    <div style={{ padding: '1.5rem', marginBottom: '1rem', background: 'var(--color-bg-dark)', borderRadius: '8px' }}>
                        <h4 style={{ color: 'var(--color-gkit-green)', marginBottom: '0.5rem' }}>Hvem utvikler ClubsiteCMS?</h4>
                        <p>ClubsiteCMS er utviklet av <strong>Scangolf</strong>. Golfklubb-IT tilbyr integrasjoner og konsulentbistand for klubber som bruker systemet.</p>
                    </div>

                    <div style={{ padding: '1.5rem', marginBottom: '1rem', background: 'var(--color-bg-dark)', borderRadius: '8px' }}>
                        <h4 style={{ color: 'var(--color-gkit-green)', marginBottom: '0.5rem' }}>Hvor mange klubber bruker ClubsiteCMS?</h4>
                        <p>45+ norske golfklubber bruker ClubsiteCMS, inkludert Losby, Bærum, Asker, Vestfold, Grimstad og mange flere.</p>
                    </div>

                    <div style={{ padding: '1.5rem', marginBottom: '1rem', background: 'var(--color-bg-dark)', borderRadius: '8px' }}>
                        <h4 style={{ color: 'var(--color-gkit-green)', marginBottom: '0.5rem' }}>Hva koster ClubsiteCMS?</h4>
                        <p>For prising, kontakt Scangolf direkte på <a href="tel:+4741520802" style={{ color: 'var(--color-gkit-green)' }}>415 20 802</a> eller <a href="mailto:post@scangolf.no" style={{ color: 'var(--color-gkit-green)' }}>post@scangolf.no</a>.</p>
                    </div>

                    <div style={{ padding: '1.5rem', marginBottom: '1rem', background: 'var(--color-bg-dark)', borderRadius: '8px' }}>
                        <h4 style={{ color: 'var(--color-gkit-green)', marginBottom: '0.5rem' }}>Kan Golfklubbens IT hjelpe oss med ClubsiteCMS?</h4>
                        <p>Ja! Vi tilbyr integrasjoner mellom ClubsiteCMS og våre egne løsninger som Søknadsportalen, Display/Signage, og booking-systemer.</p>
                    </div>

                    <div style={{ padding: '1.5rem', marginBottom: '1rem', background: 'var(--color-bg-dark)', borderRadius: '8px' }}>
                        <h4 style={{ color: 'var(--color-gkit-green)', marginBottom: '0.5rem' }}>Hva er CS Booking?</h4>
                        <p>CS Booking er Scangolfs spesialtilpassede bookingsystem for simulatorer og instruktører. 15+ sentre bruker systemet med 61 simulatorer og 36 instruktører.</p>
                    </div>
                </div>
            </section>

            <section className="contact" id="kontakt" style={{ background: 'var(--color-bg-dark)', padding: '4rem 0' }}>
                <div className="container" style={{ textAlign: 'center' }}>
                    <h2 style={{ marginBottom: '1rem' }}>Trenger dere integrasjoner?</h2>
                    <p style={{ fontSize: '1.2rem', color: 'var(--color-gray-light)', marginBottom: '2rem' }}>
                        Vi hjelper klubber med ClubsiteCMS-integrasjoner og konsulentbistand.
                    </p>
                    <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
                        <Link to="/#kontakt" className="btn btn-primary" style={{ fontSize: '1.2rem', padding: '1rem 2rem' }}>
                            Kontakt oss
                        </Link>
                        <a href="https://clubsite.no" target="_blank" rel="noopener noreferrer" className="btn btn-secondary" style={{ fontSize: '1.2rem', padding: '1rem 2rem' }}>
                            Besøk clubsite.no
                        </a>
                    </div>
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

export default ClubsiteCMS
