import { Link } from 'react-router-dom'
import Navbar from '../../components/Navbar'
import '../../App.css'

const NetsIntegration = () => {
    return (
        <div className="app">
            <header className="header">
                <Navbar />
            </header>

            <section className="hero" style={{ minHeight: '60vh' }}>
                <div className="hero-content fade-in-up">
                    <h1>
                        <span className="text-gradient-green">Nets Easy</span><br />
                        Kortbetaling på nettside og terminaler
                    </h1>
                    <p style={{ fontSize: '1.3rem', color: 'var(--color-gray-light)', maxWidth: '800px', margin: '2rem auto' }}>
                        Medlemmer betaler med kort på nettstedet eller med terminal i pro-shop. Full integrasjon med GolfBox og bokføring.
                    </p>
                    <div className="hero-cta">
                        <a href="mailto:kontakt@golfklubb-it.com" className="btn btn-primary">Bestill tilbud</a>
                        <Link to="/#kontakt" className="btn btn-secondary">Kontakt oss</Link>
                    </div>
                </div>
            </section>

            <section className="container section-padding">
                <h2 style={{ textAlign: 'center', marginBottom: '3rem' }}>Nøkkelfunksjoner</h2>

                <div className="services-grid">
                    <div className="service-card glass">
                        <div className="service-icon">🌐</div>
                        <h3>Online Kortbetaling</h3>
                        <p>Sikker kortbetaling på nettside. PCI Level 1 sertifisert.</p>
                    </div>

                    <div className="service-card glass">
                        <div className="service-icon">🏪</div>
                        <h3>Fysisk Terminal</h3>
                        <p>Terminal i pro-shop for kort- og mobil-betaling (kontaktløs).</p>
                    </div>

                    <div className="service-card glass">
                        <div className="service-icon">🌍</div>
                        <h3>Internasjonale Kort</h3>
                        <p>Tar VISA, Mastercard og andre internasjonale kort. Perfekt for turistgolfer.</p>
                    </div>

                    <div className="service-card glass">
                        <div className="service-icon">📊</div>
                        <h3>Rapport og Analyse</h3>
                        <p>Detaljerte rapporter over betalinger. Dashboard for daglig oppfølging.</p>
                    </div>
                </div>
            </section>

            <section className="container section-padding">
                <h2 style={{ textAlign: 'center', marginBottom: '3rem' }}>Fordeler</h2>

                <div style={{ maxWidth: '800px', margin: '0 auto' }}>
                    <div style={{ padding: '1.5rem', marginBottom: '1rem', background: 'rgba(76, 175, 80, 0.05)', borderLeft: '4px solid var(--color-gkit-green)', borderRadius: '8px' }}>
                        <h4>🌍 Internasjonalt</h4>
                        <p>Tar alle typer internasjonale kort. Utvider markedet til utenlandske golfer.</p>
                    </div>

                    <div style={{ padding: '1.5rem', marginBottom: '1rem', background: 'rgba(76, 175, 80, 0.05)', borderLeft: '4px solid var(--color-gkit-green)', borderRadius: '8px' }}>
                        <h4>🔒 Sikker og Sertifisert</h4>
                        <p>PCI Level 1 sikkerhet. Medlem-data lagres ikke på klubbens servere.</p>
                    </div>

                    <div style={{ padding: '1.5rem', marginBottom: '1rem', background: 'rgba(76, 175, 80, 0.05)', borderLeft: '4px solid var(--color-gkit-green)', borderRadius: '8px' }}>
                        <h4>💰 Lave Gebyrer</h4>
                        <p>Konkurranse-dyktig prising. Vanligvis 1.5-2% per transaksjon.</p>
                    </div>

                    <div style={{ padding: '1.5rem', marginBottom: '1rem', background: 'rgba(76, 175, 80, 0.05)', borderLeft: '4px solid var(--color-gkit-green)', borderRadius: '8px' }}>
                        <h4>📱 Kontaktløs Betaling</h4>
                        <p>Terminal støtter kontaktløs og mobilbetaling. Moderne og hygienic.</p>
                    </div>
                </div>
            </section>

            <section className="container section-padding" style={{ background: 'rgba(76, 175, 80, 0.02)' }}>
                <h2 style={{ textAlign: 'center', marginBottom: '3rem' }}>Brukstilfeller</h2>

                <div style={{ maxWidth: '900px', margin: '0 auto' }}>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '2rem' }}>
                        <div style={{ padding: '1.5rem', background: 'var(--color-bg-dark)', borderRadius: '8px' }}>
                            <h4 style={{ color: 'var(--color-gkit-green)', marginBottom: '0.5rem' }}>🌐 Nettsidet</h4>
                            <p>Medlemmer betaler booking og kontingent med kort. Automatisk GolfBox-oppdatering.</p>
                        </div>

                        <div style={{ padding: '1.5rem', background: 'var(--color-bg-dark)', borderRadius: '8px' }}>
                            <h4 style={{ color: 'var(--color-gkit-green)', marginBottom: '0.5rem' }}>🏪 Pro-Shop</h4>
                            <p>Terminal ved kassen. Utsalgsting, leie-utstyr, mat og drikke.</p>
                        </div>

                        <div style={{ padding: '1.5rem', background: 'var(--color-bg-dark)', borderRadius: '8px' }}>
                            <h4 style={{ color: 'var(--color-gkit-green)', marginBottom: '0.5rem' }}>🎯 Turneringer</h4>
                            <p>Startavgift betales med kort direkte på banen. IPad eller tablet.</p>
                        </div>

                        <div style={{ padding: '1.5rem', background: 'var(--color-bg-dark)', borderRadius: '8px' }}>
                            <h4 style={{ color: 'var(--color-gkit-green)', marginBottom: '0.5rem' }}>👥 Green Fee</h4>
                            <p>Besøkende turister betaler grønngebyr med kort. Enkel prosess.</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="container section-padding" style={{ background: 'rgba(76, 175, 80, 0.02)' }}>
                <h2 style={{ textAlign: 'center', marginBottom: '3rem' }}>Nets Easy + GolfBox</h2>

                <div style={{ maxWidth: '800px', margin: '0 auto' }}>
                    <div style={{ padding: '1.5rem', marginBottom: '1rem', background: 'var(--color-bg-dark)', borderRadius: '8px' }}>
                        <h4 style={{ color: 'var(--color-gkit-green)' }}>Automatisk synkronisering</h4>
                        <p>Betalinger fra Nets Easy synkroniseres direkte til GolfBox. Fagerpersoner blir frigjort automatisk.</p>
                    </div>

                    <div style={{ padding: '1.5rem', marginBottom: '1rem', background: 'var(--color-bg-dark)', borderRadius: '8px' }}>
                        <h4 style={{ color: 'var(--color-gkit-green)' }}>Fullautomatisk bokføring</h4>
                        <p>Integrering med Fiken eller annet regnskap. Ingen manuell posting.</p>
                    </div>

                    <div style={{ padding: '1.5rem', marginBottom: '1rem', background: 'var(--color-bg-dark)', borderRadius: '8px' }}>
                        <h4 style={{ color: 'var(--color-gkit-green)' }}>Rapporter og dashboards</h4>
                        <p>Oversikt over alle betalinger fra GolfBox, nettsted og terminal på ett sted.</p>
                    </div>
                </div>
            </section>

            <section className="container section-padding" style={{ background: 'rgba(76, 175, 80, 0.02)' }}>
                <h2 style={{ textAlign: 'center', marginBottom: '3rem' }}>Ofte Stilte Spørsmål</h2>

                <div style={{ maxWidth: '800px', margin: '0 auto' }}>
                    <div style={{ padding: '1.5rem', marginBottom: '1rem', background: 'var(--color-bg-dark)', borderRadius: '8px' }}>
                        <h4 style={{ color: 'var(--color-gkit-green)', marginBottom: '0.5rem' }}>Hva er kostnaden for terminal?</h4>
                        <p>Terminal leases vanligvis for 300-500 kr/måned. Alternativt one-time kjøp.</p>
                    </div>

                    <div style={{ padding: '1.5rem', marginBottom: '1rem', background: 'var(--color-bg-dark)', borderRadius: '8px' }}>
                        <h4 style={{ color: 'var(--color-gkit-green)', marginBottom: '0.5rem' }}>Kan vi bruke flere terminaler?</h4>
                        <p>Ja, du kan ha terminaler på flere steder: pro-shop, restaurant, og ved første hull.</p>
                    </div>

                    <div style={{ padding: '1.5rem', marginBottom: '1rem', background: 'var(--color-bg-dark)', borderRadius: '8px' }}>
                        <h4 style={{ color: 'var(--color-gkit-green)', marginBottom: '0.5rem' }}>Hvor lang tid til oppgjør?</h4>
                        <p>Penger på konto samme dag eller neste dag. Avhengig av avtale.</p>
                    </div>

                    <div style={{ padding: '1.5rem', marginbottom: '1rem', background: 'var(--color-bg-dark)', borderRadius: '8px' }}>
                        <h4 style={{ color: 'var(--color-gkit-green)', marginBottom: '0.5rem' }}>Hva hvis terminalen er offline?</h4>
                        <p>Terminal lagrer transaksjonene lokalt og synkroniserer når du er online igjen.</p>
                    </div>
                </div>
            </section>

            <section className="contact" id="kontakt" style={{ background: 'var(--color-bg-dark)', padding: '4rem 0' }}>
                <div className="container" style={{ textAlign: 'center' }}>
                    <h2 style={{ marginBottom: '1rem' }}>Modernisere betalinger med Nets</h2>
                    <p style={{ fontSize: '1.2rem', color: 'var(--color-gray-light)', marginBottom: '2rem' }}>
                        Vi setter opp online kortbetaling og fysisk terminal, integrert med GolfBox.
                    </p>
                    <Link to="/#kontakt" className="btn btn-primary" style={{ fontSize: '1.2rem', padding: '1rem 2rem' }}>
                        Bestill tilbud
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

export default NetsIntegration
