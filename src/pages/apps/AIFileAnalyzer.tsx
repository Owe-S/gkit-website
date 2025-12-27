import { Link } from 'react-router-dom'
import SEOMeta from '../../components/SEOMeta'
import { softwareApplicationSchema, breadcrumbSchema } from '../../utils/seoSchemas'
import Navbar from '../../components/Navbar'
import '../../App.css'

const AIFileAnalyzer = () => {
    const breadcrumbs = [
        { name: 'Home', path: '/' },
        { name: 'Apps', path: '/apps' },
        { name: 'AI File Analyzer', path: '/apps/ai-file-analyzer' }
    ]

    return (
        <SEOMeta
            title="AI File Analyzer | Automatisk analyse av klubbdokumenter"
            description="AI-drevet fil- og dokumentanalyse for golfklubber. Ekstrasser data, skaper sammendrag og organiserer informasjon automatisk."
            keywords={['ai', 'analyse', 'dokumenter', 'automatisering', 'golfklubb']}
            ogImage="/images/og-image.jpg"
            schemas={[
                softwareApplicationSchema({
                    name: 'AI File Analyzer',
                    description: 'AI-drevet fil- og dokumentanalyse for golfklubber',
                    url: 'https://golfklubb-it-website.web.app/apps/ai-file-analyzer'
                }),
                breadcrumbSchema(breadcrumbs)
            ]}
            breadcrumbs={breadcrumbs}
        >
        <div className="app">
            <header className="header">
                <Navbar />
            </header>

            <section className="hero" style={{ minHeight: '60vh' }}>
                <div className="hero-content fade-in-up">
                    <h1>
                        <span className="text-gradient-green">AI File Analyzer</span><br />
                        Smart dokumentanalyse med kunstig intelligens
                    </h1>
                    <p style={{ fontSize: '1.3rem', color: 'var(--color-gray-light)', maxWidth: '800px', margin: '2rem auto' }}>
                        Last opp dokumenter og få automatiske oppsummeringer. Spar tid på møteprotokoll, kontrakter og rapporter.
                    </p>
                    <div className="hero-cta">
                        <a href="mailto:kontakt@golfklubb-it.com" className="btn btn-primary">Prøv gratis</a>
                        <Link to="/#kontakt" className="btn btn-secondary">Kontakt oss</Link>
                    </div>
                </div>
            </section>

            <section className="container section-padding">
                <img src="/images/apps/ai-file-analyzer.png" alt="AI File Analyzer" loading="lazy" style={{ maxWidth: '90%', height: 'auto', borderRadius: '12px', boxShadow: '0 8px 24px rgba(0,0,0,0.3)', maxHeight: '500px', display: 'block', margin: '0 auto 4rem' }} />

                <h2 style={{ textAlign: 'center', marginBottom: '3rem' }}>Nøkkelfunksjoner</h2>

                <div className="services-grid">
                    <div className="service-card glass">
                        <div className="service-icon">🤖</div>
                        <h3>Automatisk Analyse</h3>
                        <p>Last opp PDF, Word, Excel eller Google-dokumenter. AI analyserer innholdet umiddelbart.</p>
                    </div>

                    <div className="service-card glass">
                        <div className="service-icon">📝</div>
                        <h3>Oppsummeringer</h3>
                        <p>AI identifiserer sentrale punkter: datoer, beslutninger, beløp, og lager kort referat.</p>
                    </div>

                    <div className="service-card glass">
                        <div className="service-icon">☁️</div>
                        <h3>Google Drive-integrasjon</h3>
                        <p>Dokumenter hentes direkte fra klubbens Google Drive. Ingen nedlasting av filer nødvendig.</p>
                    </div>

                    <div className="service-card glass">
                        <div className="service-icon">🔒</div>
                        <h3>Sikker og Privat</h3>
                        <p>Data lagres ikke permanent. Tilgang kontrolleres via Google Workspace-innstillinger.</p>
                    </div>
                </div>
            </section>

            <section className="container section-padding">
                <h2 style={{ textAlign: 'center', marginBottom: '3rem' }}>Fordeler</h2>

                <div style={{ maxWidth: '800px', margin: '0 auto' }}>
                    <div style={{ padding: '1.5rem', marginbottom: '1rem', background: 'rgba(76, 175, 80, 0.05)', borderLeft: '4px solid var(--color-gkit-green)', borderRadius: '8px' }}>
                        <h4>⏱️ Tidsbesparelse</h4>
                        <p>Slipper å lese gjennom lange dokumenter. AI gir rask oversikt over viktige data.</p>
                    </div>

                    <div style={{ padding: '1.5rem', marginbottom: '1rem', background: 'rgba(76, 175, 80, 0.05)', borderLeft: '4px solid var(--color-gkit-green)', borderRadius: '8px' }}>
                        <h4>✅ Bedre Beslutninger</h4>
                        <p>Rask innsikt i kontrakter, møteprotokoll og rapporter gjør at styret tar bedre avgjørelser.</p>
                    </div>

                    <div style={{ padding: '1.5rem', marginbottom: '1rem', background: 'rgba(76, 175, 80, 0.05)', borderLeft: '4px solid var(--color-gkit-green)', borderRadius: '8px' }}>
                        <h4>🔗 Integrert i Arbeidsflyten</h4>
                        <p>Fungerer sømløst med Google Workspace. Ingen nye apper å lære.</p>
                    </div>

                    <div style={{ padding: '1.5rem', marginbottom: '1rem', background: 'rgba(76, 175, 80, 0.05)', borderLeft: '4px solid var(--color-gkit-green)', borderRadius: '8px' }}>
                        <h4>🔐 GDPR-Sikker</h4>
                        <p>All databehandling skjer i samsvar med personvernforordningen.</p>
                    </div>
                </div>
            </section>

            <section className="container section-padding" style={{ background: 'rgba(76, 175, 80, 0.02)' }}>
                <h2 style={{ textAlign: 'center', marginBottom: '3rem' }}>Brukstilfeller</h2>

                <div style={{ maxWidth: '900px', margin: '0 auto' }}>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '2rem' }}>
                        <div style={{ padding: '1.5rem', background: 'var(--color-bg-dark)', borderRadius: '8px' }}>
                            <h4 style={{ color: 'var(--color-gkit-green)', marginBottom: '0.5rem' }}>📋 Møteprotokoller</h4>
                            <p>Last opp styremøte-protokoll. AI gir rask oversikt over vedtak og ansvarsfordeling.</p>
                        </div>

                        <div style={{ padding: '1.5rem', background: 'var(--color-bg-dark)', borderRadius: '8px' }}>
                            <h4 style={{ color: 'var(--color-gkit-green)', marginBottom: '0.5rem' }}>📜 Kontrakter</h4>
                            <p>Analyser sponsorkontrakter og avtaler. Se vilkår, beløp og forfall på sekunder.</p>
                        </div>

                        <div style={{ padding: '1.5rem', background: 'var(--color-bg-dark)', borderRadius: '8px' }}>
                            <h4 style={{ color: 'var(--color-gkit-green)', marginBottom: '0.5rem' }}>📊 Rapporter</h4>
                            <p>Analyser årsrapporter og årsregnskap. Få oversikt over budsjetter og kostnader.</p>
                        </div>

                        <div style={{ padding: '1.5rem', background: 'var(--color-bg-dark)', borderRadius: '8px' }}>
                            <h4 style={{ color: 'var(--color-gkit-green)', marginBottom: '0.5rem' }}>📝 Søknader</h4>
                            <p>Analyser innkomne søknader for tilskudd eller medlemskap. Få raskt oversikt.</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="container section-padding" style={{ background: 'rgba(76, 175, 80, 0.02)' }}>
                <h2 style={{ textAlign: 'center', marginBottom: '3rem' }}>Ofte Stilte Spørsmål</h2>

                <div style={{ maxWidth: '800px', margin: '0 auto' }}>
                    <div style={{ padding: '1.5rem', marginbottom: '1rem', background: 'var(--color-bg-dark)', borderRadius: '8px' }}>
                        <h4 style={{ color: 'var(--color-gkit-green)', marginBottom: '0.5rem' }}>Hvilke filformater støttes?</h4>
                        <p>PDF, Word (.docx), Excel (.xlsx), Google Docs, Google Sheets, og OpenDocument-formater.</p>
                    </div>

                    <div style={{ padding: '1.5rem', marginbottom: '1rem', background: 'var(--color-bg-dark)', borderRadius: '8px' }}>
                        <h4 style={{ color: 'var(--color-gkit-green)', marginBottom: '0.5rem' }}>Er det sikret?</h4>
                        <p>Ja, fullt sikret. Data lagres ikke permanent, og tilgang kontrolleres via Google Workspace.</p>
                    </div>

                    <div style={{ padding: '1.5rem', marginbottom: '1rem', background: 'var(--color-bg-dark)', borderRadius: '8px' }}>
                        <h4 style={{ color: 'var(--color-gkit-green)', marginBottom: '0.5rem' }}>Hva koster det?</h4>
                        <p>Beta-versjon er gratis for utvalgte klubber. Kontakt oss for tilgang.</p>
                    </div>

                    <div style={{ padding: '1.5rem', marginbottom: '1rem', background: 'var(--color-bg-dark)', borderRadius: '8px' }}>
                        <h4 style={{ color: 'var(--color-gkit-green)', marginBottom: '0.5rem' }}>Hvor nøyaktig er AI-en?</h4>
                        <p>Svært nøyaktig for faktaekstraksjon. Vi anbefaler å sjekke viktige beslutninger manuelt.</p>
                    </div>
                </div>
            </section>

            <section className="contact" id="kontakt" style={{ background: 'var(--color-bg-dark)', padding: '4rem 0' }}>
                <div className="container" style={{ textAlign: 'center' }}>
                    <h2 style={{ marginBottom: '1rem' }}>Spar tid på dokumentanalyse</h2>
                    <p style={{ fontSize: '1.2rem', color: 'var(--color-gray-light)', marginBottom: '2rem' }}>
                        Bli pilotklubb og få gratis tilgang til AI File Analyzer.
                    </p>
                    <Link to="/#kontakt" className="btn btn-primary" style={{ fontSize: '1.2rem', padding: '1rem 2rem' }}>
                        Prøv gratis
                    </Link>
                </div>
            </section>

            <footer className="footer">
                <div className="container">
                    <p>© 2025 GKIT. Stabil drift. Smarte systemer.</p>
                </div>
            </footer>
        </div>
        </SEOMeta>
    )
}

export default AIFileAnalyzer
