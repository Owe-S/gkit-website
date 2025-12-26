import { Link } from 'react-router-dom'
import Navbar from '../../components/Navbar'
import '../../App.css'

const GrasrotandelenIntegration = () => {
    return (
        <div className="app">
            <header className="header">
                <Navbar />
            </header>

            <section className="hero" style={{ minHeight: '60vh' }}>
                <div className="hero-content fade-in-up">
                    <h1>
                        <span className="text-gradient-green">Grasrotandelen</span><br />
                        Lag sponsorpenger fra tipping og lotteri
                    </h1>
                    <p style={{ fontSize: '1.3rem', color: 'var(--color-gray-light)', maxWidth: '800px', margin: '2rem auto' }}>
                        Medlemmer tipsere og spiller lotteri. Klubben mottar andel av inntekten automatisk hver uke.
                    </p>
                    <div className="hero-cta">
                        <a href="mailto:kontakt@golfklubb-it.com" className="btn btn-primary">Bestill registrering</a>
                        <Link to="/#kontakt" className="btn btn-secondary">Kontakt oss</Link>
                    </div>
                </div>
            </section>

            <section className="container section-padding">
                <h2 style={{ textAlign: 'center', marginBottom: '3rem' }}>Hvordan det fungerer</h2>

                <div className="services-grid">
                    <div className="service-card glass">
                        <div className="service-icon">🎰</div>
                        <h3>Tippekonkurranser</h3>
                        <p>Medlemmer tipserer Fleng eller andre tippekonkurranser via Grasrotandelen.</p>
                    </div>

                    <div className="service-card glass">
                        <div className="service-icon">🎲</div>
                        <h3>Lotteri</h3>
                        <p>Deltakelse i nasjonale lotterier. Medlemmer kjøper lottokuponger.</p>
                    </div>

                    <div className="service-card glass">
                        <div className="service-icon">💰</div>
                        <h3>Klubben Mottar Andel</h3>
                        <p>Klubben får automatisk 6-10% av hver innsats som sendes inn via Grasrotandelen.</p>
                    </div>

                    <div className="service-card glass">
                        <div className="service-icon">📊</div>
                        <h3>Rapporter</h3>
                        <p>Detaljerte rapporter over inntekter hver uke. Transparent accounting.</p>
                    </div>
                </div>
            </section>

            <section className="container section-padding">
                <h2 style={{ textAlign: 'center', marginBottom: '3rem' }}>Fordeler</h2>

                <div style={{ maxWidth: '800px', margin: '0 auto' }}>
                    <div style={{ padding: '1.5rem', marginBottom: '1rem', background: 'rgba(76, 175, 80, 0.05)', borderLeft: '4px solid var(--color-gkit-green)', borderRadius: '8px' }}>
                        <h4>💰 Passiv Inntekt</h4>
                        <p>Klubben mottar penger hver uke uten å gjøre noe spesielt. Automatisk og passiv.</p>
                    </div>

                    <div style={{ padding: '1.5rem', marginBottom: '1rem', background: 'rgba(76, 175, 80, 0.05)', borderLeft: '4px solid var(--color-gkit-green)', borderRadius: '8px' }}>
                        <h4>🤝 Medlems-Engasjement</h4>
                        <p>Medlemmer tipserer eller spiller lotteri. Søker sammen om gevinster og lag. Økt kameratskap.</p>
                    </div>

                    <div style={{ padding: '1.5rem', marginBottom: '1rem', background: 'rgba(76, 175, 80, 0.05)', borderLeft: '4px solid var(--color-gkit-green)', borderRadius: '8px' }}>
                        <h4>📱 Enkel Integrasjon</h4>
                        <p>Link fra klubbens nettsider. Medlemmer klikker og starter tippekonkurranser.</p>
                    </div>

                    <div style={{ padding: '1.5rem', marginbottom: '1rem', background: 'rgba(76, 175, 80, 0.05)', borderLeft: '4px solid var(--color-gkit-green)', borderRadius: '8px' }}>
                        <h4>✅ Godkjent og Lisensiert</h4>
                        <p>Grasrotandelen er godkjent av norske myndigheter. Alt er lovlig og transparent.</p>
                    </div>
                </div>
            </section>

            <section className="container section-padding" style={{ background: 'rgba(76, 175, 80, 0.02)' }}>
                <h2 style={{ textAlign: 'center', marginBottom: '3rem' }}>Eksempel: År-Inntekt</h2>

                <div style={{ maxWidth: '800px', margin: '0 auto' }}>
                    <div style={{ padding: '2rem', background: 'var(--color-bg-dark)', borderRadius: '8px', textAlign: 'center' }}>
                        <h4 style={{ color: 'var(--color-gkit-green)', marginBottom: '1rem' }}>Antakelse: 100 medlemmer tiperer gjennomsnittlig 200 kr/uke</h4>
                        <p style={{ color: 'var(--color-gray-light)', marginBottom: '1rem' }}>100 medlemmer × 200 kr × 52 uker = 1 040 000 kr totalt</p>
                        <p style={{ color: 'var(--color-gray-light)', marginBottom: '1rem' }}>Klubben mottar 8% andel = <strong style={{ color: 'var(--color-gkit-green)' }}>83 200 kr/år</strong></p>
                        <p style={{ color: 'var(--color-gray-light)' }}>Eller ~7 000 kr/måned</p>
                    </div>

                    <div style={{ marginTop: '2rem', padding: '1rem', background: 'rgba(76, 175, 80, 0.05)', borderRadius: '8px' }}>
                        <p style={{ color: 'var(--color-gray-light)', fontSize: '0.9rem' }}>
                            <strong>Merk:</strong> Eksemplet er basert på antakelser. Faktiske tall avhenger av antall medlemmer og deres deltakelse.
                        </p>
                    </div>
                </div>
            </section>

            <section className="container section-padding" style={{ background: 'rgba(76, 175, 80, 0.02)' }}>
                <h2 style={{ textAlign: 'center', marginBottom: '3rem' }}>Hvordan vi hjelper</h2>

                <div style={{ maxWidth: '800px', margin: '0 auto' }}>
                    <div style={{ padding: '1.5rem', marginBottom: '1rem', background: 'var(--color-bg-dark)', borderRadius: '8px' }}>
                        <h4 style={{ color: 'var(--color-gkit-green)' }}>1. Registrering</h4>
                        <p>Vi registrerer klubben hos Grasrotandelen og setter opp avtalen.</p>
                    </div>

                    <div style={{ padding: '1.5rem', marginbottom: '1rem', background: 'var(--color-bg-dark)', borderRadius: '8px' }}>
                        <h4 style={{ color: 'var(--color-gkit-green)' }}>2. Integrasjon</h4>
                        <p>Vi legger til Grasrotandelen-link på klubbens nettside og promoterer det.</p>
                    </div>

                    <div style={{ padding: '1.5rem', marginbottom: '1rem', background: 'var(--color-bg-dark)', borderRadius: '8px' }}>
                        <h4 style={{ color: 'var(--color-gkit-green)' }}>3. Kommunikasjon</h4>
                        <p>Vi hjelper med e-postkampanjer og SMS for å informere medlemmer om muligheten.</p>
                    </div>

                    <div style={{ padding: '1.5rem', marginbottom: '1rem', background: 'var(--color-bg-dark)', borderRadius: '8px' }}>
                        <h4 style={{ color: 'var(--color-gkit-green)' }}>4. Rapportering</h4>
                        <p>Vi setter opp rapportering slik at klubb-ledelsen ser inntekter og statistikk.</p>
                    </div>
                </div>
            </section>

            <section className="container section-padding" style={{ background: 'rgba(76, 175, 80, 0.02)' }}>
                <h2 style={{ textAlign: 'center', marginBottom: '3rem' }}>Ofte Stilte Spørsmål</h2>

                <div style={{ maxWidth: '800px', margin: '0 auto' }}>
                    <div style={{ padding: '1.5rem', marginbottom: '1rem', background: 'var(--color-bg-dark)', borderRadius: '8px' }}>
                        <h4 style={{ color: 'var(--color-gkit-green)', marginBottom: '0.5rem' }}>Trenger vi gjøre noe manuelt?</h4>
                        <p>Nei, alt er automatisk. Medlemmer velger selv å tipere eller spille. Klubben mottar penger automatisk.</p>
                    </div>

                    <div style={{ padding: '1.5rem', marginbottom: '1rem', background: 'var(--color-bg-dark)', borderRadius: '8px' }}>
                        <h4 style={{ color: 'var(--color-gkit-green)', marginBottom: '0.5rem' }}>Hvordan blir medlemmene informert?</h4>
                        <p>Vi lager email-kampanjer, puts banner på nettstedet, og kan sende SMS-påminnelser.</p>
                    </div>

                    <div style={{ padding: '1.5rem', marginbottom: '1rem', background: 'var(--color-bg-dark)', borderRadius: '8px' }}>
                        <h4 style={{ color: 'var(--color-gkit-green)', marginBottom: '0.5rem' }}>Hva koster det?</h4>
                        <p>Kostnadsfritt for klubben. Grasrotandelen tar sin andel fra medlemmenes innsatser.</p>
                    </div>

                    <div style={{ padding: '1.5rem', marginbottom: '1rem', background: 'var(--color-bg-dark)', borderRadius: '8px' }}>
                        <h4 style={{ color: 'var(--color-gkit-green)', marginBottom: '0.5rem' }}>Når kommer pengene?</h4>
                        <p>Klubben mottar innbetalinger hver uke direkte til bankkonto. Rapporter tilgjengelig i Grasrotandelen-portalen.</p>
                    </div>
                </div>
            </section>

            <section className="contact" id="kontakt" style={{ background: 'var(--color-bg-dark)', padding: '4rem 0' }}>
                <div className="container" style={{ textAlign: 'center' }}>
                    <h2 style={{ marginBottom: '1rem' }}>Lag passiv inntekt for klubben</h2>
                    <p style={{ fontSize: '1.2rem', color: 'var(--color-gray-light)', marginBottom: '2rem' }}>
                        Vi registrerer klubben hos Grasrotandelen og promoterer det til medlemmene.
                    </p>
                    <Link to="/#kontakt" className="btn btn-primary" style={{ fontSize: '1.2rem', padding: '1rem 2rem' }}>
                        Bestill registrering
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

export default GrasrotandelenIntegration
