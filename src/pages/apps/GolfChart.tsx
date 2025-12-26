import { Link } from 'react-router-dom'
import Navbar from '../../components/Navbar'
import '../../App.css'

const GolfChart = () => {
    return (
        <div className="app">
            <header className="header">
                <Navbar />
            </header>

            <section className="hero" style={{ minHeight: '60vh' }}>
                <div className="hero-content fade-in-up">
                    <h1>
                        <span className="text-gradient-green">GolfChart MultiClub</span><br />
                        Deling av golfdata på tvers av klubber
                    </h1>
                    <p style={{ fontSize: '1.3rem', color: 'var(--color-gray-light)', maxWidth: '800px', margin: '2rem auto' }}>
                        Et flerklubb-system for deling av golfdata på tvers av klubber. Inneholder en medlems-app for spillere og et admin-panel for klubbledelse.
                    </p>
                    <div className="hero-cta">
                        <a href="https://GolfChart-MultiClub.web.app" target="_blank" rel="noopener noreferrer" className="btn btn-primary">Åpne medlems-app</a>
                        <a href="https://GolfChart-MultiClub.web.app/admin/" target="_blank" rel="noopener noreferrer" className="btn btn-secondary">Admin Panel</a>
                    </div>
                </div>
            </section>

            <section className="container section-padding">
                <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
                    <img
                        src="/images/apps/golfchart.png"
                        alt="GolfChart MultiClub Interface"
                        style={{ maxWidth: '100%', borderRadius: '12px', boxShadow: '0 8px 24px rgba(0,0,0,0.3)' }}
                    />
                </div>
            </section>

            <section className="container section-padding" style={{ background: 'rgba(76, 175, 80, 0.02)' }}>
                <h2 style={{ textAlign: 'center', marginBottom: '3rem' }}>Nøkkelfunksjoner</h2>

                <div className="services-grid">
                    <div className="service-card glass">
                        <div className="service-icon">📊</div>
                        <h3>Flerklubb-System</h3>
                        <p>Sømløs deling av banedata og spillerinformasjon på tvers av samarbeidende klubber.</p>
                    </div>

                    <div className="service-card glass">
                        <div className="service-icon">📱</div>
                        <h3>Medlems-App</h3>
                        <p>Brukervennlig app for spillere med baneguider, statistikk, turneringer og klubbinformasjon.</p>
                    </div>

                    <div className="service-card glass">
                        <div className="service-icon">🛠️</div>
                        <h3>Admin-Panel</h3>
                        <p>Kraftig administrasjonsverktøy for banedata, brukerledelse og driftsanalyse.</p>
                    </div>

                    <div className="service-card glass">
                        <div className="service-icon">🔗</div>
                        <h3>API & Integrasjon</h3>
                        <p>Åpen GitHub-kode og REST API for integrasjon med GolfBox, medlemssystemer og andre løsninger.</p>
                    </div>
                </div>
            </section>

            <section className="container section-padding">
                <h2 style={{ textAlign: 'center', marginBottom: '3rem' }}>Fordeler</h2>

                <div style={{ maxWidth: '800px', margin: '0 auto' }}>
                    <div style={{ padding: '1.5rem', marginBottom: '1rem', background: 'rgba(76, 175, 80, 0.05)', borderLeft: '4px solid var(--color-gkit-green)', borderRadius: '8px' }}>
                        <h4>🌐 Samarbeid på Tvers av Klubber</h4>
                        <p>Spillere ser egen statistikk og progresjon uavhengig av hvilken klubb de spiller på. Ingen duplikatdata.</p>
                    </div>

                    <div style={{ padding: '1.5rem', marginBottom: '1rem', background: 'rgba(76, 175, 80, 0.05)', borderLeft: '4px solid var(--color-gkit-green)', borderRadius: '8px' }}>
                        <h4>📈 Bedre Datakvalitet</h4>
                        <p>Sentralisert banedata reduserer duplikater og sikrer konsistens på tvers av klubber.</p>
                    </div>

                    <div style={{ padding: '1.5rem', marginBottom: '1rem', background: 'rgba(76, 175, 80, 0.05)', borderLeft: '4px solid var(--color-gkit-green)', borderRadius: '8px' }}>
                        <h4>💡 Åpen for Utvikling</h4>
                        <p>GitHub-kode lar klubber tilpasse og videreutvikle systemet. API-er muliggjør integrasjon med eksisterende systemer.</p>
                    </div>

                    <div style={{ padding: '1.5rem', marginBottom: '1rem', background: 'rgba(76, 175, 80, 0.05)', borderLeft: '4px solid var(--color-gkit-green)', borderRadius: '8px' }}>
                        <h4>🔄 Sentralisert Admin</h4>
                        <p>Administrer alt fra ett sted. Endre banedata og se det oppdatert øyeblikkelig i alle medlems-apper.</p>
                    </div>
                </div>
            </section>

            <section className="container section-padding" style={{ background: 'rgba(76, 175, 80, 0.02)' }}>
                <h2 style={{ textAlign: 'center', marginBottom: '3rem' }}>Typiske Brukstilfeller</h2>

                <div style={{ maxWidth: '800px', margin: '0 auto' }}>
                    <div style={{ padding: '1.5rem', marginBottom: '1rem', background: 'var(--color-bg-dark)', borderRadius: '8px' }}>
                        <h4 style={{ color: 'var(--color-gkit-green)', marginBottom: '0.5rem' }}>Flerklubb-Allianser</h4>
                        <p>Flere klubber som samarbeider om felles baneinformasjon og spillerstatistikk. Hver klubb har sitt admin-panel.</p>
                    </div>

                    <div style={{ padding: '1.5rem', marginBottom: '1rem', background: 'var(--color-bg-dark)', borderRadius: '8px' }}>
                        <h4 style={{ color: 'var(--color-gkit-green)', marginBottom: '0.5rem' }}>Regionalt Samarbeid</h4>
                        <p>Regionale forbund som koordinerer data for alle tilsluttede klubber. Sentralisert banedatabase.</p>
                    </div>

                    <div style={{ padding: '1.5rem', marginBottom: '1rem', background: 'var(--color-bg-dark)', borderRadius: '8px' }}>
                        <h4 style={{ color: 'var(--color-gkit-green)', marginBottom: '0.5rem' }}>Utviklerklubb</h4>
                        <p>Klubber som ønsker å tilpasse og videreutvikle systemet sine egne behov. Åpen kildekode på GitHub.</p>
                    </div>

                    <div style={{ padding: '1.5rem', marginBottom: '1rem', background: 'var(--color-bg-dark)', borderRadius: '8px' }}>
                        <h4 style={{ color: 'var(--color-gkit-green)', marginBottom: '0.5rem' }}>GolfBox-Integrasjon</h4>
                        <p>Klubber som ønsker å knytte GolfChart til sitt GolfBox-system for automatisert datautveksling.</p>
                    </div>
                </div>
            </section>

            <section className="container section-padding" style={{ background: 'rgba(76, 175, 80, 0.02)' }}>
                <h2 style={{ textAlign: 'center', marginBottom: '3rem' }}>Ofte Stilte Spørsmål</h2>

                <div style={{ maxWidth: '800px', margin: '0 auto' }}>
                    <div style={{ padding: '1.5rem', marginBottom: '1rem', background: 'var(--color-bg-dark)', borderRadius: '8px' }}>
                        <h4 style={{ color: 'var(--color-gkit-green)', marginBottom: '0.5rem' }}>Hva er en flerklubb-bruker?</h4>
                        <p>En spiller som er medlem av flere samarbeidende klubber. GolfChart følger spilleren på tvers av klubber.</p>
                    </div>

                    <div style={{ padding: '1.5rem', marginBottom: '1rem', background: 'var(--color-bg-dark)', borderRadius: '8px' }}>
                        <h4 style={{ color: 'var(--color-gkit-green)', marginBottom: '0.5rem' }}>Hvordan fungerer GitHub-integrasjonen?</h4>
                        <p>Koden er åpen på GitHub. Klubber kan klone, tilpasse og kjøre sitt eget GolfChart-system basert på koden vår.</p>
                    </div>

                    <div style={{ padding: '1.5rem', marginBottom: '1rem', background: 'var(--color-bg-dark)', borderRadius: '8px' }}>
                        <h4 style={{ color: 'var(--color-gkit-green)', marginBottom: '0.5rem' }}>Kan vi koble til GolfBox?</h4>
                        <p>Ja. Vi tilbyr API-er og integrasjon med GolfBox for automatisert oppdatering av baneinformasjon.</p>
                    </div>

                    <div style={{ padding: '1.5rem', marginBottom: '1rem', background: 'var(--color-bg-dark)', borderRadius: '8px' }}>
                        <h4 style={{ color: 'var(--color-gkit-green)', marginBottom: '0.5rem' }}>Hva koster GolfChart?</h4>
                        <p>Kontakt oss for tilbud. Prisen avhenger av antall klubber og brukere i samarbeidet.</p>
                    </div>
                </div>
            </section>

            <section className="contact" id="kontakt" style={{ background: 'var(--color-bg-dark)', padding: '4rem 0' }}>
                <div className="container" style={{ textAlign: 'center' }}>
                    <h2 style={{ marginBottom: '1rem' }}>Interessert i GolfChart?</h2>
                    <p style={{ fontSize: '1.2rem', color: 'var(--color-gray-light)', marginBottom: '2rem' }}>
                        Vi hjelper deg med oppsett og tilpasning for din klubb eller klubbgruppe.
                    </p>
                    <Link to="/#kontakt" className="btn btn-primary" style={{ fontSize: '1.2rem', padding: '1rem 2rem' }}>
                        Kontakt oss
                    </Link>
                </div>
            </section>
        </div>
    )
}

export default GolfChart
