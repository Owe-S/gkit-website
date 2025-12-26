import { Link } from 'react-router-dom'
import Navbar from '../../components/Navbar'
import '../../App.css'

const SpleisIntegration = () => {
    return (
        <div className="app">
            <header className="header">
                <Navbar />
            </header>

            <section className="hero" style={{ minHeight: '60vh' }}>
                <div className="hero-content fade-in-up">
                    <h1>
                        <span className="text-gradient-green">Spleis</span><br />
                        Crowdfunding for klubb-arrangementer
                    </h1>
                    <p style={{ fontSize: '1.3rem', color: 'var(--color-gray-light)', maxWidth: '800px', margin: '2rem auto' }}>
                        Samle inn penger fra medlemmer og sponsorer for turneringer, investeringer og arrangementer via Spleis-kampanjer.
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
                        <div className="service-icon">💰</div>
                        <h3>Kampanje-Styring</h3>
                        <p>Opprett og administrer Spleis-kampanjer direkte fra klub-administrasjonen.</p>
                    </div>

                    <div className="service-card glass">
                        <div className="service-icon">🎯</div>
                        <h3>Målbasert Innsamling</h3>
                        <p>Sett mål for innsamling og se progresjon i sanntid.</p>
                    </div>

                    <div className="service-card glass">
                        <div className="service-icon">📱</div>
                        <h3>Enkel Deling</h3>
                        <p>Medlemmer deler kampanjen på sosiale medier. Viral potensial.</p>
                    </div>

                    <div className="service-card glass">
                        <div className="service-icon">✅</div>
                        <h3>Automatisk Oppgjør</h3>
                        <p>Innsamlede penger overføres automatisk til klubbens konto.</p>
                    </div>
                </div>
            </section>

            <section className="container section-padding">
                <h2 style={{ textAlign: 'center', marginBottom: '3rem' }}>Brukstilfeller</h2>

                <div style={{ maxWidth: '900px', margin: '0 auto' }}>
                    <div style={{ padding: '1.5rem', marginBottom: '1rem', background: 'rgba(76, 175, 80, 0.05)', borderRadius: '8px' }}>
                        <h4 style={{ color: 'var(--color-gkit-green)' }}>🏌️ Junior-Turnering</h4>
                        <p>Samle inn penger for å sende klubbens junior-lag til internasjonal turnering.</p>
                    </div>

                    <div style={{ padding: '1.5rem', marginBottom: '1rem', background: 'rgba(76, 175, 80, 0.05)', borderRadius: '8px' }}>
                        <h4 style={{ color: 'var(--color-gkit-green)' }}>🏗️ Infrastruktur</h4>
                        <p>Innsamling for ny bane, greenkeeper-utstyr eller klubb-lokale oppussing.</p>
                    </div>

                    <div style={{ padding: '1.5rem', marginBottom: '1rem', background: 'rgba(76, 175, 80, 0.05)', borderRadius: '8px' }}>
                        <h4 style={{ color: 'var(--color-gkit-green)' }}>👥 Dugnad</h4>
                        <p>Innsamling for dugnad-arbeid eller veldedighet som klubben støtter.</p>
                    </div>

                    <div style={{ padding: '1.5rem', marginBottom: '1rem', background: 'rgba(76, 175, 80, 0.05)', borderRadius: '8px' }}>
                        <h4 style={{ color: 'var(--color-gkit-green)' }}>🎉 Arrangement</h4>
                        <p>Innsamling for spesielle arrangementer, jubileum eller medlems-kamp.</p>
                    </div>
                </div>
            </section>

            <section className="container section-padding">
                <h2 style={{ textAlign: 'center', marginBottom: '3rem' }}>Fordeler</h2>

                <div style={{ maxWidth: '800px', margin: '0 auto' }}>
                    <div style={{ padding: '1.5rem', marginBottom: '1rem', background: 'rgba(76, 175, 80, 0.05)', borderLeft: '4px solid var(--color-gkit-green)', borderRadius: '8px' }}>
                        <h4>💰 Åpent og gjennomsiktigt</h4>
                        <p>Alle ser hvor mye som er samlet inn og hvor pengene går. Økt tillit.</p>
                    </div>

                    <div style={{ padding: '1.5rem', marginBottom: '1rem', background: 'rgba(76, 175, 80, 0.05)', borderLeft: '4px solid var(--color-gkit-green)', borderRadius: '8px' }}>
                        <h4>🌍 Sosial Deling</h4>
                        <p>Spleis gjør det lett for medlemmer å dele på Facebook, Instagram og andre kanaler.</p>
                    </div>

                    <div style={{ padding: '1.5rem', marginBottom: '1rem', background: 'rgba(76, 175, 80, 0.05)', borderLeft: '4px solid var(--color-gkit-green)', borderRadius: '8px' }}>
                        <h4>🎯 Motivering</h4>
                        <p>Å se progresjon mot mål motiverer medlemmer til å bidra mer. Spilleffekt.</p>
                    </div>

                    <div style={{ padding: '1.5rem', marginbottom: '1rem', background: 'rgba(76, 175, 80, 0.05)', borderLeft: '4px solid var(--color-gkit-green)', borderRadius: '8px' }}>
                        <h4>📊 Enkel Rapport</h4>
                        <p>Detaljert rapport over bidragsytere og beløp. Nyttig for sponsorregnskap.</p>
                    </div>
                </div>
            </section>

            <section className="container section-padding" style={{ background: 'rgba(76, 175, 80, 0.02)' }}>
                <h2 style={{ textAlign: 'center', marginBottom: '3rem' }}>Eksempel: Innsamling for junior-lag</h2>

                <div style={{ maxWidth: '800px', margin: '0 auto' }}>
                    <div style={{ padding: '1.5rem', marginBottom: '1rem', background: 'var(--color-bg-dark)', borderRadius: '8px' }}>
                        <h4 style={{ color: 'var(--color-gkit-green)' }}>Scenario</h4>
                        <p>Klubbens junior-lag har blitt invitert til internasjonal turnering i Sverige. Trenger 50 000 kr for reise og opphold.</p>
                    </div>

                    <div style={{ padding: '1.5rem', marginBottom: '1rem', background: 'var(--color-bg-dark)', borderRadius: '8px' }}>
                        <h4 style={{ color: 'var(--color-gkit-green)' }}>1. Opprett kampanjen</h4>
                        <p>Vi setter opp Spleis-kampanjen med mål på 50 000 kr, dato og beskrivelse.</p>
                    </div>

                    <div style={{ padding: '1.5rem', marginBottom: '1rem', background: 'var(--color-bg-dark)', borderRadius: '8px' }}>
                        <h4 style={{ color: 'var(--color-gkit-green)' }}>2. Promoter</h4>
                        <p>Kampanjen deles på klubbens nettsider, Facebook og e-postsystem. Medlemmer mottar link.</p>
                    </div>

                    <div style={{ padding: '1.5rem', marginBottom: '1rem', background: 'var(--color-bg-dark)', borderRadius: '8px' }}>
                        <h4 style={{ color: 'var(--color-gkit-green)' }}>3. Bidrag innkommer</h4>
                        <p>Medlemmer og sponsorer bidrar via Spleis. Progresjon vises i sanntid.</p>
                    </div>

                    <div style={{ padding: '1.5rem', marginbottom: '1rem', background: 'var(--color-bg-dark)', borderRadius: '8px' }}>
                        <h4 style={{ color: 'var(--color-gkit-green)' }}>4. Mål nådd</h4>
                        <p>50 000 kr samlet inn. Penger overføres til klubb. Kampanjen lukkes og takk-melding sendes.</p>
                    </div>
                </div>
            </section>

            <section className="container section-padding" style={{ background: 'rgba(76, 175, 80, 0.02)' }}>
                <h2 style={{ textAlign: 'center', marginBottom: '3rem' }}>Ofte Stilte Spørsmål</h2>

                <div style={{ maxWidth: '800px', margin: '0 auto' }}>
                    <div style={{ padding: '1.5rem', marginbottom: '1rem', background: 'var(--color-bg-dark)', borderRadius: '8px' }}>
                        <h4 style={{ color: 'var(--color-gkit-green)', marginBottom: '0.5rem' }}>Hva koster det?</h4>
                        <p>Spleis tar vanligvis 5% av innsamlet beløp + betalingsgebyr. Transparente kostnader.</p>
                    </div>

                    <div style={{ padding: '1.5rem', marginbottom: '1rem', background: 'var(--color-bg-dark)', borderRadius: '8px' }}>
                        <h4 style={{ color: 'var(--color-gkit-green)', marginBottom: '0.5rem' }}>Hvor lang tid før penger kommer?</h4>
                        <p>Typisk 1-2 virkedager etter kampanjen slutter. Avhengig av bank.</p>
                    </div>

                    <div style={{ padding: '1.5rem', marginbottom: '1rem', background: 'var(--color-bg-dark)', borderRadius: '8px' }}>
                        <h4 style={{ color: 'var(--color-gkit-green)', marginBottom: '0.5rem' }}>Kan vi se hvem som bidro?</h4>
                        <p>Ja, detaljert rapport viser navn og beløp (hvis bidragsyter tillater det).</p>
                    </div>

                    <div style={{ padding: '1.5rem', marginbottom: '1rem', background: 'var(--color-bg-dark)', borderRadius: '8px' }}>
                        <h4 style={{ color: 'var(--color-gkit-green)', marginBottom: '0.5rem' }}>Kan vi ha flere kampanjer parallelt?</h4>
                        <p>Ja, men vi anbefaler å fokusere på en kampanje av gangen for best resultat.</p>
                    </div>
                </div>
            </section>

            <section className="contact" id="kontakt" style={{ background: 'var(--color-bg-dark)', padding: '4rem 0' }}>
                <div className="container" style={{ textAlign: 'center' }}>
                    <h2 style={{ marginBottom: '1rem' }}>Starte innsamling i dag</h2>
                    <p style={{ fontSize: '1.2rem', color: 'var(--color-gray-light)', marginBottom: '2rem' }}>
                        Vi setter opp Spleis-kampanjen for klubben og integrerer den på nettstedet og e-post.
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

export default SpleisIntegration
