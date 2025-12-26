import { Link } from 'react-router-dom'
import Navbar from '../../components/Navbar'
import '../../App.css'

const APIAutomation = () => {
    return (
        <div className="app">
            <header className="header">
                <Navbar />
            </header>

            <section className="hero" style={{ minHeight: '60vh' }}>
                <div className="hero-content fade-in-up">
                    <h1>
                        <span className="text-gradient-green">API & Automasjon</span><br />
                        Skreddersydde integrasjoner for din klubb
                    </h1>
                    <p style={{ fontSize: '1.3rem', color: 'var(--color-gray-light)', maxWidth: '800px', margin: '2rem auto' }}>
                        Vi utvikler API-er og automatiserte arbeidsflyter som binder sammen alle klubbens systemer. Manuelle prosesser erstattes av intelligente automatiseringer.
                    </p>
                    <div className="hero-cta">
                        <a href="mailto:kontakt@golfklubb-it.com" className="btn btn-primary">Bestill kartlegging</a>
                        <Link to="/#kontakt" className="btn btn-secondary">Kontakt oss</Link>
                    </div>
                </div>
            </section>

            <section className="container section-padding">
                <h2 style={{ textAlign: 'center', marginBottom: '3rem' }}>Hva vi tilbyr</h2>

                <div className="services-grid">
                    <div className="service-card glass">
                        <div className="service-icon">🔌</div>
                        <h3>API-utvikling</h3>
                        <p>Vi bygger API-er som eksponerer data fra GolfBox, medlemsdatabaser og bookingsystemer for bruk i apper og dashboards.</p>
                    </div>

                    <div className="service-card glass">
                        <div className="service-icon">🤖</div>
                        <h3>Automatiserte Arbeidsflyter</h3>
                        <p>Oppsett av n8n- eller Zapier-løsninger for datadeling, e-postautomatisering, fakturering og filoverføring.</p>
                    </div>

                    <div className="service-card glass">
                        <div className="service-icon">📊</div>
                        <h3>Rapporter og Dashboards</h3>
                        <p>Integrasjon med analyseverktøy (Power BI, Databricks) for å visualisere klubbdata i sanntid.</p>
                    </div>

                    <div className="service-card glass">
                        <div className="service-icon">🎯</div>
                        <h3>Prosessrådgivning</h3>
                        <p>Vi hjelper deg å identifisere manuelle prosesser som kan automatiseres for å spare tid og minimere feil.</p>
                    </div>
                </div>
            </section>

            <section className="container section-padding" style={{ background: 'rgba(76, 175, 80, 0.02)' }}>
                <h2 style={{ textAlign: 'center', marginBottom: '3rem' }}>Eksempler på integrasjoner vi har laget</h2>

                <div style={{ maxWidth: '900px', margin: '0 auto' }}>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '2rem' }}>
                        <div style={{ padding: '1.5rem', background: 'var(--color-bg-dark)', borderRadius: '8px' }}>
                            <h4 style={{ color: 'var(--color-gkit-green)', marginBottom: '0.5rem' }}>GolfBox → Google Sheets</h4>
                            <p>Automatisk eksport av medlemsoversikt, bookinger og inntekter til delt Google-regneark for ledelsen.</p>
                        </div>

                        <div style={{ padding: '1.5rem', background: 'var(--color-bg-dark)', borderRadius: '8px' }}>
                            <h4 style={{ color: 'var(--color-gkit-green)', marginBottom: '0.5rem' }}>Booking → Slack varsling</h4>
                            <p>Ny booking i GolfBox? Admin får umiddelbar varsling i Slack-kanalen for oversight.</p>
                        </div>

                        <div style={{ padding: '1.5rem', background: 'var(--color-bg-dark)', borderRadius: '8px' }}>
                            <h4 style={{ color: 'var(--color-gkit-green)', marginBottom: '0.5rem' }}>Nettsted → CRM</h4>
                            <p>Kontaktskjemaer blir automatisk opprettet som leads i din CRM for oppfølging.</p>
                        </div>

                        <div style={{ padding: '1.5rem', background: 'var(--color-bg-dark)', borderRadius: '8px' }}>
                            <h4 style={{ color: 'var(--color-gkit-green)', marginBottom: '0.5rem' }}>Betaling → Regnskap</h4>
                            <p>Vipps- og Nets-betalinger bokføres automatisk i GolfBox og regnskapssystemet.</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="container section-padding">
                <h2 style={{ textAlign: 'center', marginBottom: '3rem' }}>Fordeler</h2>

                <div style={{ maxWidth: '800px', margin: '0 auto' }}>
                    <div style={{ padding: '1.5rem', marginBottom: '1rem', background: 'rgba(76, 175, 80, 0.05)', borderLeft: '4px solid var(--color-gkit-green)', borderRadius: '8px' }}>
                        <h4>⚡ Effektiv Drift</h4>
                        <p>Manuelle oppgaver erstattes av automatiske prosesser. Ansatte fokuserer på viktigere arbeid.</p>
                    </div>

                    <div style={{ padding: '1.5rem', marginBottom: '1rem', background: 'rgba(76, 175, 80, 0.05)', borderLeft: '4px solid var(--color-gkit-green)', borderRadius: '8px' }}>
                        <h4>✅ Feilreduksjon</h4>
                        <p>Data overføres nøyaktig fra et system til et annet uten manuelle mellomledd.</p>
                    </div>

                    <div style={{ padding: '1.5rem', marginBottom: '1rem', background: 'rgba(76, 175, 80, 0.05)', borderLeft: '4px solid var(--color-gkit-green)', borderRadius: '8px' }}>
                        <h4>🎯 Skreddersøm</h4>
                        <p>API-er tilpasses klubbens unike behov og kan utvides i takt med at klubben vokser.</p>
                    </div>

                    <div style={{ padding: '1.5rem', marginBottom: '1rem', background: 'rgba(76, 175, 80, 0.05)', borderLeft: '4px solid var(--color-gkit-green)', borderRadius: '8px' }}>
                        <h4>📈 Skalerbar Arkitektur</h4>
                        <p>Bygget for fremtidig vekst. Lett å legge til nye integrasjoner når behovet oppstår.</p>
                    </div>
                </div>
            </section>

            <section className="container section-padding" style={{ background: 'rgba(76, 175, 80, 0.02)' }}>
                <h2 style={{ textAlign: 'center', marginBottom: '3rem' }}>Systemer vi integrerer med</h2>

                <div style={{ maxWidth: '900px', margin: '0 auto' }}>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1rem', color: 'var(--color-gray-light)' }}>
                        <div>📊 GolfBox</div>
                        <div>🌐 ClubsiteCMS</div>
                        <div>☁️ Google Workspace</div>
                        <div>💳 Vipps</div>
                        <div>💰 Nets Easy</div>
                        <div>📱 Slack</div>
                        <div>📧 Gmail/Outlook</div>
                        <div>📈 Power BI</div>
                        <div>📋 Google Sheets</div>
                    </div>
                </div>
            </section>

            <section className="container section-padding" style={{ background: 'rgba(76, 175, 80, 0.02)' }}>
                <h2 style={{ textAlign: 'center', marginBottom: '3rem' }}>Prosess: Fra kartlegging til drift</h2>

                <div style={{ maxWidth: '800px', margin: '0 auto' }}>
                    <div style={{ padding: '1.5rem', marginBottom: '1rem', background: 'var(--color-bg-dark)', borderRadius: '8px' }}>
                        <h4 style={{ color: 'var(--color-gkit-green)' }}>1️⃣ Kartlegging (1-2 timer)</h4>
                        <p>Vi møter ditt team og dokumenterer alle manuelle prosesser og smertepunkter.</p>
                    </div>

                    <div style={{ padding: '1.5rem', marginBottom: '1rem', background: 'var(--color-bg-dark)', borderRadius: '8px' }}>
                        <h4 style={{ color: 'var(--color-gkit-green)' }}>2️⃣ Forslag (1 uke)</h4>
                        <p>Vi lager et detaljert forslag med prioritering og tidsestimat for hver integrasjon.</p>
                    </div>

                    <div style={{ padding: '1.5rem', marginBottom: '1rem', background: 'var(--color-bg-dark)', borderRadius: '8px' }}>
                        <h4 style={{ color: 'var(--color-gkit-green)' }}>3️⃣ Implementering (2-4 uker)</h4>
                        <p>Vi bygger, tester og integrerer løsningene. Du får oppdateringer hver uke.</p>
                    </div>

                    <div style={{ padding: '1.5rem', marginBottom: '1rem', background: 'var(--color-bg-dark)', borderRadius: '8px' }}>
                        <h4 style={{ color: 'var(--color-gkit-green)' }}>4️⃣ Landsetting (1 dag)</h4>
                        <p>Vi lanserer løsningene i produksjon og gir opplæring til ditt team.</p>
                    </div>

                    <div style={{ padding: '1.5rem', marginBottom: '1rem', background: 'var(--color-bg-dark)', borderRadius: '8px' }}>
                        <h4 style={{ color: 'var(--color-gkit-green)' }}>5️⃣ Drift og optimalisering</h4>
                        <p>Vi følger opp, optimaliserer og legger til nye integrasjoner etter behov.</p>
                    </div>
                </div>
            </section>

            <section className="container section-padding" style={{ background: 'rgba(76, 175, 80, 0.02)' }}>
                <h2 style={{ textAlign: 'center', marginBottom: '3rem' }}>Ofte Stilte Spørsmål</h2>

                <div style={{ maxWidth: '800px', margin: '0 auto' }}>
                    <div style={{ padding: '1.5rem', marginBottom: '1rem', background: 'var(--color-bg-dark)', borderRadius: '8px' }}>
                        <h4 style={{ color: 'var(--color-gkit-green)', marginBottom: '0.5rem' }}>Trenger vi tekniske ansatte for å drifte disse?</h4>
                        <p>Nei, vi setter alt opp slik at det kjører automatisk. Ditt team trenger bare å overvåke at alt funker som forventet.</p>
                    </div>

                    <div style={{ padding: '1.5rem', marginBottom: '1rem', background: 'var(--color-bg-dark)', borderRadius: '8px' }}>
                        <h4 style={{ color: 'var(--color-gkit-green)', marginBottom: '0.5rem' }}>Hva hvis en integrasjon feiler?</h4>
                        <p>Vi setter opp overvåking og varsling. Hvis noe feiler, blir du varslet, og vi fikser det umiddelbart.</p>
                    </div>

                    <div style={{ padding: '1.5rem', marginBottom: '1rem', background: 'var(--color-bg-dark)', borderRadius: '8px' }}>
                        <h4 style={{ color: 'var(--color-gkit-green)', marginBottom: '0.5rem' }}>Kan vi legge til nye integrasjoner senere?</h4>
                        <p>Ja! Vi setter alt opp slik at det er enkelt å legge til nye integrasjoner når behovet oppstår.</p>
                    </div>

                    <div style={{ padding: '1.5rem', marginBottom: '1rem', background: 'var(--color-bg-dark)', borderRadius: '8px' }}>
                        <h4 style={{ color: 'var(--color-gkit-green)', marginBottom: '0.5rem' }}>Hvor mye koster det?</h4>
                        <p>Kontakt oss for skreddersydd prising basert på antall integrasjoner og kompleksitet.</p>
                    </div>
                </div>
            </section>

            <section className="contact" id="kontakt" style={{ background: 'var(--color-bg-dark)', padding: '4rem 0' }}>
                <div className="container" style={{ textAlign: 'center' }}>
                    <h2 style={{ marginBottom: '1rem' }}>Klar for å automatisere?</h2>
                    <p style={{ fontSize: '1.2rem', color: 'var(--color-gray-light)', marginBottom: '2rem' }}>
                        Bestill en gratis kartlegging av dine prosesser og få konkrete forslag til automasjoner.
                    </p>
                    <Link to="/#kontakt" className="btn btn-primary" style={{ fontSize: '1.2rem', padding: '1rem 2rem' }}>
                        Bestill kartlegging
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

export default APIAutomation
