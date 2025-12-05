import { Link } from 'react-router-dom'
import Navbar from '../../components/Navbar'
import '../../App.css'

const Workspace = () => {
    return (
        <div className="app">
            <header className="header">
                <Navbar />
            </header>

            <section className="hero" style={{ minHeight: '60vh' }}>
                <div className="hero-content fade-in-up">
                    <h1>
                        <span className="text-gradient-green">Google Workspace</span><br />
                        E-post. Samarbeid. Sikkerhet.
                    </h1>
                    <p style={{ fontSize: '1.3rem', color: 'var(--color-gray-light)', maxWidth: '800px', margin: '2rem auto' }}>
                        Profesjonell e-post (@dinklub.no), delte dokumenter, og videokonferanser. Alt i ett system.
                    </p>
                    <div className="hero-cta">
                        <a href="https://owe-s.github.io/workspace-setup-gkit/" target="_blank" rel="noopener noreferrer" className="btn btn-primary">Les dokumentasjon</a>
                        <a href="#kontakt" className="btn btn-secondary">Kom i gang</a>
                    </div>
                </div>
            </section>

            <section className="container section-padding">
                <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
                    <img
                        src="/images/products/google_workspace.png"
                        alt="Google Workspace for Golf Clubs"
                        style={{ maxWidth: '100%', borderRadius: '12px', boxShadow: '0 8px 24px rgba(0,0,0,0.3)' }}
                    />
                </div>
            </section>

            <section className="container section-padding" style={{ background: 'rgba(76, 175, 80, 0.02)' }}>
                <h2 style={{ textAlign: 'center', marginBottom: '3rem' }}>Hva får dere?</h2>

                <div className="services-grid">
                    <div className="service-card glass">
                        <div className="service-icon">📧</div>
                        <h3>Profesjonell E-post</h3>
                        <p>@dinklub.no for alle ansatte. Ingen annonser, ubegrenset lagring, mobiltilgang.</p>
                    </div>

                    <div className="service-card glass">
                        <div className="service-icon">📁</div>
                        <h3>Google Drive</h3>
                        <p>Delte dokumenter, regneark, presentasjoner. Samarbeid i sanntid, ingen versjonskonflikter.</p>
                    </div>

                    <div className="service-card glass">
                        <div className="service-icon">📅</div>
                        <h3>Google Calendar</h3>
                        <p>Felles kalendere for styremøter, arrangementer, og banevedlikehold. Synkronisert på alle enheter.</p>
                    </div>

                    <div className="service-card glass">
                        <div className="service-icon">🎥</div>
                        <h3>Google Meet</h3>
                        <p>Videokonferanser med opptil 100 deltakere. Perfekt for hybrid styremøter og kurs.</p>
                    </div>
                </div>
            </section>

            <section className="container section-padding">
                <h2 style={{ textAlign: 'center', marginBottom: '3rem' }}>Hvorfor Google Workspace?</h2>

                <div style={{ maxWidth: '800px', margin: '0 auto' }}>
                    <div className="why-list">
                        <div style={{ padding: '1.5rem', marginBottom: '1rem', background: 'rgba(76, 175, 80, 0.05)', borderLeft: '4px solid var(--color-gkit-green)', borderRadius: '8px' }}>
                            <h4>🔐 Sikkerhet i Verdensklasse</h4>
                            <p>2-faktor autentisering, GDPR-kompatibel, automatisk backup. Googles sikkerhetsteam jobber for deg.</p>
                        </div>

                        <div style={{ padding: '1.5rem', marginBottom: '1rem', background: 'rgba(76, 175, 80, 0.05)', borderLeft: '4px solid var(--color-gkit-green)', borderRadius: '8px' }}>
                            <h4>💪 Alltid Tilgjengelig</h4>
                            <p>99,9% oppetid. Tilgang fra PC, mobil, nettbrett. Jobb hjemmefra eller på kontoret.</p>
                        </div>

                        <div style={{ padding: '1.5rem', marginBottom: '1rem', background: 'rgba(76, 175, 80, 0.05)', borderLeft: '4px solid var(--color-gkit-green)', borderRadius: '8px' }}>
                            <h4>💼 Profesjonelt Uttrykk</h4>
                            <p>@dinklub.no ser mer profesjonelt ut enn @gmail.com. Bedre merkevarebygging.</p>
                        </div>

                        <div style={{ padding: '1.5rem', marginBottom: '1rem', background: 'rgba(76, 175, 80, 0.05)', borderLeft: '4px solid var(--color-gkit-green)', borderRadius: '8px' }}>
                            <h4>🤝 Vi Leverer Alt</h4>
                            <p>Oppsett, migrering, brukerstøtte, og opplæring. Dere slipper teknisk hodebry.</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="container section-padding" style={{ background: 'rgba(76, 175, 80, 0.02)' }}>
                <h2 style={{ textAlign: 'center', marginBottom: '3rem' }}>Ofte Stilte Spørsmål</h2>

                <div style={{ maxWidth: '800px', margin: '0 auto' }}>
                    <div style={{ padding: '1.5rem', marginBottom: '1rem', background: 'var(--color-bg-dark)', borderRadius: '8px' }}>
                        <h4 style={{ color: 'var(--color-gkit-green)', marginBottom: '0.5rem' }}>Hva koster Google Workspace?</h4>
                        <p>Fra 69 kr/bruker/måned for Business Starter. Vi hjelper deg med å velge riktig pakke for klubben.</p>
                    </div>

                    <div style={{ padding: '1.5rem', marginBottom: '1rem', background: 'var(--color-bg-dark)', borderRadius: '8px' }}>
                        <h4 style={{ color: 'var(--color-gkit-green)', marginBottom: '0.5rem' }}>Hvor lang tid tar oppsettet?</h4>
                        <p>1-3 dager fra bestilling til dere kan logge inn. Inkluderer domene-oppsett, brukerkontoer og grunnleggende opplæring.</p>
                    </div>

                    <div style={{ padding: '1.5rem', marginBottom: '1rem', background: 'var(--color-bg-dark)', borderRadius: '8px' }}>
                        <h4 style={{ color: 'var(--color-gkit-green)', marginBottom: '0.5rem' }}>Kan vi migrere eksisterende e-poster?</h4>
                        <p>Ja! Vi migrerer e-post, kontakter og kalender fra Outlook, Gmail eller andre systemer. Ingen e-poster går tapt.</p>
                    </div>

                    <div style={{ padding: '1.5rem', marginBottom: '1rem', background: 'var(--color-bg-dark)', borderRadius: '8px' }}>
                        <h4 style={{ color: 'var(--color-gkit-green)', marginBottom: '0.5rem' }}>Får vi support etter oppsettet?</h4>
                        <p>Ja, vi tilbyr løpende support via e-post og telefon. Opplæring av nye brukere inkludert.</p>
                    </div>

                    <div style={{ padding: '1.5rem', marginBottom: '1rem', background: 'var(--color-bg-dark)', borderRadius: '8px' }}>
                        <h4 style={{ color: 'var(--color-gkit-green)', marginBottom: '0.5rem' }}>Trenger vi egen IT-person?</h4>
                        <p>Nei! Google Workspace er skybasert og krever minimal administrasjon. Vi hjelper med det dere ikke får til selv.</p>
                    </div>
                </div>
            </section>

            <section className="contact" id="kontakt" style={{ background: 'var(--color-bg-dark)', padding: '4rem 0' }}>
                <div className="container" style={{ textAlign: 'center' }}>
                    <h2 style={{ marginBottom: '1rem' }}>Klar for Google Workspace?</h2>
                    <p style={{ fontSize: '1.2rem', color: 'var(--color-gray-light)', marginBottom: '2rem' }}>
                        Vi hjelper dere med alt fra A til Å.
                    </p>
                    <Link to="/#kontakt" className="btn btn-primary" style={{ fontSize: '1.2rem', padding: '1rem 2rem' }}>
                        Kontakt oss
                    </Link>
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

export default Workspace
