import { Link } from 'react-router-dom'
import Navbar from '../../components/Navbar'
import '../../App.css'

const VippsIntegration = () => {
    return (
        <div className="app">
            <header className="header">
                <Navbar />
            </header>

            <section className="hero" style={{ minHeight: '60vh' }}>
                <div className="hero-content fade-in-up">
                    <h1>
                        <span className="text-gradient-green">Vipps</span><br />
                        Enkel betaling for medlemmer og medlemskap
                    </h1>
                    <p style={{ fontSize: '1.3rem', color: 'var(--color-gray-light)', maxWidth: '800px', margin: '2rem auto' }}>
                        Medlemmer betaler kontingent, bookinger og gebyrer direkte med Vipps. Automatisk inntekt i bankkonto.
                    </p>
                    <div className="hero-cta">
                        <a href="mailto:kontakt@golfklubb-it.com" className="btn btn-primary">Bestill integrasjon</a>
                        <Link to="/#kontakt" className="btn btn-secondary">Kontakt oss</Link>
                    </div>
                </div>
            </section>

            <section className="container section-padding">
                <h2 style={{ textAlign: 'center', marginBottom: '3rem' }}>Nøkkelfunksjoner</h2>

                <div className="services-grid">
                    <div className="service-card glass">
                        <div className="service-icon">💳</div>
                        <h3>Kontingent-Betaling</h3>
                        <p>Medlemmer betaler årlig/månedlig kontingent med Vipps. Automatisk purring for forfalte betalinger.</p>
                    </div>

                    <div className="service-card glass">
                        <div className="service-icon">🏌️</div>
                        <h3>Booking-Betaling</h3>
                        <p>Betaling for turnering/kurs gjøres automatisk når booking bekreftes.</p>
                    </div>

                    <div className="service-card glass">
                        <div className="service-icon">💰</div>
                        <h3>Inntekt-Automatisering</h3>
                        <p>Penger går direkte til klubbens bankkonto. Avstemming med GolfBox automatisk.</p>
                    </div>

                    <div className="service-card glass">
                        <div className="service-icon">📱</div>
                        <h3>Mobil-Venlig</h3>
                        <p>Vipps er norges mest populære betalingsmetode. Medlemmer forventer det.</p>
                    </div>
                </div>
            </section>

            <section className="container section-padding">
                <h2 style={{ textAlign: 'center', marginBottom: '3rem' }}>Fordeler</h2>

                <div style={{ maxWidth: '800px', margin: '0 auto' }}>
                    <div style={{ padding: '1.5rem', marginBottom: '1rem', background: 'rgba(76, 175, 80, 0.05)', borderLeft: '4px solid var(--color-gkit-green)', borderRadius: '8px' }}>
                        <h4>⚡ Enkel Betaling</h4>
                        <p>Medlemmer foretrekker Vipps. Høyere konvertering enn andre metoder.</p>
                    </div>

                    <div style={{ padding: '1.5rem', marginBottom: '1rem', background: 'rgba(76, 175, 80, 0.05)', borderLeft: '4px solid var(--color-gkit-green)', borderRadius: '8px' }}>
                        <h4>💰 Raskere Inntekt</h4>
                        <p>Penger på konto neste dag. Mindre kostnader sammenlignet med andre metoder.</p>
                    </div>

                    <div style={{ padding: '1.5rem', marginBottom: '1rem', background: 'rgba(76, 175, 80, 0.05)', borderLeft: '4px solid var(--color-gkit-green)', borderRadius: '8px' }}>
                        <h4>📊 Automatisk Bokføring</h4>
                        <p>Betalinger registreres automatisk. Mindre manuelt arbeid for sekretæren.</p>
                    </div>

                    <div style={{ padding: '1.5rem', marginBottom: '1rem', background: 'rgba(76, 175, 80, 0.05)', borderLeft: '4px solid var(--color-gkit-green)', borderRadius: '8px' }}>
                        <h4>🔒 Sikker</h4>
                        <p>Vipps er sikker og PCI-sertifisert. Medlem-data lagres ikke.</p>
                    </div>
                </div>
            </section>

            <section className="container section-padding" style={{ background: 'rgba(76, 175, 80, 0.02)' }}>
                <h2 style={{ textAlign: 'center', marginBottom: '3rem' }}>Integrering med GolfBox</h2>

                <div style={{ maxWidth: '800px', margin: '0 auto' }}>
                    <div style={{ padding: '1.5rem', marginBottom: '1rem', background: 'var(--color-bg-dark)', borderRadius: '8px' }}>
                        <h4 style={{ color: 'var(--color-gkit-green)' }}>1. Kontingent-Automatisering</h4>
                        <p>Vipps-integrasjon oppretter regninger automatisk hver måned for hver medlem.</p>
                    </div>

                    <div style={{ padding: '1.5rem', marginBottom: '1rem', background: 'var(--color-bg-dark)', borderRadius: '8px' }}>
                        <h4 style={{ color: 'var(--color-gkit-green)' }}>2. Booking-Betalinger</h4>
                        <p>Når medlem booker turnering, blir betalingslink sendt automatisk via SMS eller e-post.</p>
                    </div>

                    <div style={{ padding: '1.5rem', marginBottom: '1rem', background: 'var(--color-bg-dark)', borderRadius: '8px' }}>
                        <h4 style={{ color: 'var(--color-gkit-green)' }}>3. Automatisk Bokføring</h4>
                        <p>Innbetaling registreres automatisk i GolfBox og bokføringssystemet.</p>
                    </div>

                    <div style={{ padding: '1.5rem', marginBottom: '1rem', background: 'var(--color-bg-dark)', borderRadius: '8px' }}>
                        <h4 style={{ color: 'var(--color-gkit-green)' }}>4. Purring</h4>
                        <p>Automatisk purre-SMS til medlemmer med forfalte betalinger.</p>
                    </div>
                </div>
            </section>

            <section className="container section-padding" style={{ background: 'rgba(76, 175, 80, 0.02)' }}>
                <h2 style={{ textAlign: 'center', marginBottom: '3rem' }}>Ofte Stilte Spørsmål</h2>

                <div style={{ maxWidth: '800px', margin: '0 auto' }}>
                    <div style={{ padding: '1.5rem', marginBottom: '1rem', background: 'var(--color-bg-dark)', borderRadius: '8px' }}>
                        <h4 style={{ color: 'var(--color-gkit-green)', marginBottom: '0.5rem' }}>Hva er Vipps-gebyrene?</h4>
                        <p>Vanligvis 1-2% av hver transaksjon. Vi hjelper deg forhandle beste priser.</p>
                    </div>

                    <div style={{ padding: '1.5rem', marginBottom: '1rem', background: 'var(--color-bg-dark)', borderRadius: '8px' }}>
                        <h4 style={{ color: 'var(--color-gkit-green)', marginBottom: '0.5rem' }}>Hva med andre betalingsmetoder?</h4>
                        <p>Vi kan integrere Nets Easy, Stripe eller andre betalingsleverandører parallelt.</p>
                    </div>

                    <div style={{ padding: '1.5rem', marginBottom: '1rem', background: 'var(--color-bg-dark)', borderRadius: '8px' }}>
                        <h4 style={{ color: 'var(--color-gkit-green)', marginBottom: '0.5rem' }}>Kan vi fakturere medlemmer som ikke betaler?</h4>
                        <p>Ja, Vipps-integrasjonen skjuler SMS-purringer og ringer heller enn bare en gangs-purring.</p>
                    </div>

                    <div style={{ padding: '1.5rem', marginbottom: '1rem', background: 'var(--color-bg-dark)', borderRadius: '8px' }}>
                        <h4 style={{ color: 'var(--color-gkit-green)', marginBottom: '0.5rem' }}>Hvor lang tid tar oppsettet?</h4>
                        <p>Typisk 1-2 uker fra signering til live-gang. Vi hjelper med alt teknisk.</p>
                    </div>
                </div>
            </section>

            <section className="contact" id="kontakt" style={{ background: 'var(--color-bg-dark)', padding: '4rem 0' }}>
                <div className="container" style={{ textAlign: 'center' }}>
                    <h2 style={{ marginBottom: '1rem' }}>Få betalinger på plass</h2>
                    <p style={{ fontSize: '1.2rem', color: 'var(--color-gray-light)', marginBottom: '2rem' }}>
                        Vi setter opp komplett Vipps-integrasjon for kontingent, bookinger og gebyrer.
                    </p>
                    <Link to="/#kontakt" className="btn btn-primary" style={{ fontSize: '1.2rem', padding: '1rem 2rem' }}>
                        Bestill integrasjon
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

export default VippsIntegration
