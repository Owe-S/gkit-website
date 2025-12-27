import { Link } from 'react-router-dom'
import SEOMeta from '../../components/SEOMeta'
import { softwareApplicationSchema, breadcrumbSchema } from '../../utils/seoSchemas'
import Navbar from '../../components/Navbar'
import '../../App.css'

const WorkspaceNonprofit = () => {
    const breadcrumbs = [
        { name: 'Home', path: '/' },
        { name: 'Produkter', path: '/products' },
        { name: 'Workspace Nonprofit', path: '/products/workspace-nonprofit' }
    ]

    return (
        <SEOMeta
            title="Workspace Nonprofit | Gratis Google Workspace for ideelle organisasjoner"
            description="Gratis Google Workspace for ideelle organisasjoner og golfklubber. E-post, lagringsplass, samarbeid - alt gratis for nonprofit."
            keywords={['workspace', 'nonprofit', 'ideell', 'gratis', 'golfklubb']}
            ogImage="/images/og-image.jpg"
            schemas={[
                softwareApplicationSchema({
                    name: 'Workspace Nonprofit',
                    description: 'Gratis Google Workspace for ideelle organisasjoner',
                    url: 'https://golfklubb-it-website.web.app/products/workspace-nonprofit'
                }),
                breadcrumbSchema(breadcrumbs)
            ]}
            breadcrumbs={breadcrumbs}
        >
        <div className="app">
            <header className="header">
                <Navbar />
            </header>

            {/* Hero Section */}
            <section className="hero" style={{ minHeight: '60vh' }}>
                <div className="hero-content fade-in-up">
                    <h1>
                        <span className="text-gradient-green">Google Workspace</span><br />
                        Gratis eller 75% Rabatt for Ideelle Golfklubber
                    </h1>
                    <p style={{ fontSize: '1.3rem', color: 'var(--color-gray-light)', maxWidth: '800px', margin: '2rem auto' }}>
                        Kvalifiserer klubben din? Få Google Workspace Business gratis (opptil 2.000 brukere) eller med 75% rabatt.
                    </p>
                    <div className="hero-cta">
                        <a href="#kontakt" className="btn btn-primary">Sjekk kvalifikasjon</a>
                        <a href="#soknad" className="btn btn-secondary">Vi hjelper med søknaden</a>
                    </div>
                </div>
            </section>

            <img src="/images/products/google_workspace.png" alt="Google Workspace" loading="lazy" style={{ maxWidth: '90%', height: 'auto', borderRadius: '12px', boxShadow: '0 8px 24px rgba(0,0,0,0.3)', maxHeight: '500px', display: 'block', margin: '2rem auto 4rem' }} />

            {/* What is Google for Nonprofits */}
            <section className="container section-padding">
                <div style={{ maxWidth: '900px', margin: '0 auto', textAlign: 'center' }}>
                    <h2 style={{ marginBottom: '2rem' }}>Hva er Google for Nonprofits?</h2>
                    <p style={{ fontSize: '1.2rem', color: 'var(--color-gray-light)', lineHeight: '1.8' }}>
                        Google for Nonprofits gir ideelle organisasjoner gratis eller sterkt rabatterte Google-tjenester. 
                        Norske golfklubber som er registrert som frivillige lag og foreninger kan kvalifisere.
                    </p>
                </div>
            </section>

            {/* Pricing Tiers */}
            <section className="container section-padding" style={{ background: 'rgba(76, 175, 80, 0.02)' }}>
                <h2 style={{ textAlign: 'center', marginBottom: '3rem' }}>Hva får du?</h2>

                <div className="services-grid" style={{ gridTemplateColumns: 'repeat(3, 1fr)', gap: '1.5rem' }}>
                    <div className="service-card glass" style={{ borderTop: '4px solid var(--color-gkit-green)' }}>
                        <div className="service-icon">🎁</div>
                        <h3>Workspace for Nonprofits</h3>
                        <ul style={{ textAlign: 'left', fontSize: '0.9rem', lineHeight: '1.8' }}>
                            <li>Gmail Business (@dinklub.no)</li>
                            <li>30 GB lagring per bruker</li>
                            <li>Google Meet (100 deltakere)</li>
                            <li>Google Docs, Sheets, Slides</li>
                            <li>Google Calendar</li>
                            <li>Shared Drives</li>
                        </ul>
                        <div style={{ marginTop: '1.5rem', padding: '1rem', background: 'rgba(76, 175, 80, 0.15)', borderRadius: '8px' }}>
                            <strong style={{ fontSize: '2rem', color: 'var(--color-gkit-green)' }}>$0 USD</strong>
                            <p style={{ fontSize: '0.9rem', color: 'var(--color-gray-light)', marginTop: '0.5rem' }}>
                                per bruker/måned<br/>
                                <strong>100% GRATIS</strong>
                            </p>
                        </div>
                    </div>

                    <div className="service-card glass" style={{ borderTop: '4px solid var(--color-gkit-green)' }}>
                        <div className="service-icon">💼</div>
                        <h3>Business Standard</h3>
                        <ul style={{ textAlign: 'left', fontSize: '0.9rem', lineHeight: '1.8' }}>
                            <li>Alt i gratis-pakken +</li>
                            <li><strong>2 TB lagring per bruker</strong></li>
                            <li>Google Meet (150 deltakere)</li>
                            <li>Meet opptak</li>
                            <li>Admin Console</li>
                            <li>Premium support</li>
                        </ul>
                        <div style={{ marginTop: '1.5rem', padding: '1rem', background: 'rgba(76, 175, 80, 0.1)', borderRadius: '8px' }}>
                            <strong style={{ fontSize: '1.8rem', color: 'var(--color-gkit-green)' }}>$3.50 USD</strong>
                            <p style={{ fontSize: '0.9rem', color: 'var(--color-gray-light)', marginTop: '0.5rem' }}>
                                per bruker/måned<br/>
                                <strong>75% rabatt</strong> (ca. 40 kr/mnd)
                            </p>
                        </div>
                    </div>

                    <div className="service-card glass" style={{ borderTop: '4px solid var(--color-gkit-green)' }}>
                        <div className="service-icon">🔒</div>
                        <h3>Business Plus</h3>
                        <ul style={{ textAlign: 'left', fontSize: '0.9rem', lineHeight: '1.8' }}>
                            <li>Alt i Business Standard +</li>
                            <li><strong>5 TB lagring per bruker</strong></li>
                            <li>Meet (500 deltakere)</li>
                            <li>Google Vault (e-arkiv)</li>
                            <li>Avansert DLP-sikkerhet</li>
                            <li>eDiscovery</li>
                        </ul>
                        <div style={{ marginTop: '1.5rem', padding: '1rem', background: 'rgba(76, 175, 80, 0.1)', borderRadius: '8px' }}>
                            <strong style={{ fontSize: '1.8rem', color: 'var(--color-gkit-green)' }}>$6.16 USD</strong>
                            <p style={{ fontSize: '0.9rem', color: 'var(--color-gray-light)', marginTop: '0.5rem' }}>
                                per bruker/måned<br/>
                                <strong>72% rabatt</strong> (ca. 70 kr/mnd)
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Qualification Requirements */}
            <section className="container section-padding">
                <h2 style={{ textAlign: 'center', marginBottom: '3rem' }}>Kvalifikasjonskrav</h2>

                <div style={{ maxWidth: '800px', margin: '0 auto' }}>
                    <div style={{ display: 'grid', gap: '1rem' }}>
                        <div style={{ padding: '1.5rem', background: 'rgba(76, 175, 80, 0.1)', borderLeft: '4px solid var(--color-gkit-green)', borderRadius: '8px' }}>
                            <h4>✅ Registrert som frivillig organisasjon/idrettslag</h4>
                        </div>
                        <div style={{ padding: '1.5rem', background: 'rgba(76, 175, 80, 0.1)', borderLeft: '4px solid var(--color-gkit-green)', borderRadius: '8px' }}>
                            <h4>✅ Non-profit formål (ikke kommersiell drift)</h4>
                        </div>
                        <div style={{ padding: '1.5rem', background: 'rgba(76, 175, 80, 0.1)', borderLeft: '4px solid var(--color-gkit-green)', borderRadius: '8px' }}>
                            <h4>✅ Har org.nummer og BankID</h4>
                        </div>
                        <div style={{ padding: '1.5rem', background: 'rgba(76, 175, 80, 0.1)', borderLeft: '4px solid var(--color-gkit-green)', borderRadius: '8px' }}>
                            <h4>✅ Har eget domene (dinklub.no)</h4>
                        </div>
                    </div>

                    <div style={{ display: 'grid', gap: '1rem', marginTop: '2rem' }}>
                        <div style={{ padding: '1.5rem', background: 'rgba(220, 53, 69, 0.1)', borderLeft: '4px solid #dc3545', borderRadius: '8px' }}>
                            <h4>❌ Ikke for kommersielle golfselskaper/AS</h4>
                        </div>
                        <div style={{ padding: '1.5rem', background: 'rgba(220, 53, 69, 0.1)', borderLeft: '4px solid #dc3545', borderRadius: '8px' }}>
                            <h4>❌ Ikke for statlige/kommunale organisasjoner</h4>
                        </div>
                    </div>
                </div>
            </section>

            {/* Application Process */}
            <section className="container section-padding" style={{ background: 'rgba(76, 175, 80, 0.02)' }} id="soknad">
                <h2 style={{ textAlign: 'center', marginBottom: '3rem' }}>Søknadsprosess</h2>

                <div className="services-grid" style={{ gridTemplateColumns: 'repeat(2, 1fr)' }}>
                    <div className="service-card glass">
                        <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>1️⃣</div>
                        <h3>Verifisering</h3>
                        <p>Registrer organisasjonen hos Google for Nonprofits. Vi hjelper med dokumentasjon.</p>
                    </div>

                    <div className="service-card glass">
                        <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>2️⃣</div>
                        <h3>Godkjenning</h3>
                        <p>Google verifiserer non-profit status. Tar typisk 1-2 uker.</p>
                    </div>

                    <div className="service-card glass">
                        <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>3️⃣</div>
                        <h3>Aktivering</h3>
                        <p>Vi setter opp Workspace med rabattkode og konfigurerer alle tjenester.</p>
                    </div>

                    <div className="service-card glass">
                        <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>4️⃣</div>
                        <h3>Opplæring</h3>
                        <p>Vi guider administratorer gjennom systemet og gir brukeropplæring.</p>
                    </div>
                </div>

                <div style={{ textAlign: 'center', marginTop: '3rem' }}>
                    <p style={{ fontSize: '1.1rem', color: 'var(--color-gray-light)' }}>
                        <strong>Estimert tid:</strong> 2-4 uker fra søknad til livegang
                    </p>
                </div>
            </section>

            {/* What We Help With */}
            <section className="container section-padding">
                <h2 style={{ textAlign: 'center', marginBottom: '3rem' }}>Hva hjelper vi med?</h2>

                <div style={{ maxWidth: '800px', margin: '0 auto' }}>
                    <div className="why-list">
                        <div style={{ padding: '1.5rem', marginBottom: '1rem', background: 'rgba(76, 175, 80, 0.05)', borderLeft: '4px solid var(--color-gkit-green)', borderRadius: '8px' }}>
                            <h4>✅ Søknadshjelp og dokumentasjon</h4>
                            <p>Vi fyller ut skjema og samler nødvendig dokumentasjon.</p>
                        </div>
                        <div style={{ padding: '1.5rem', marginBottom: '1rem', background: 'rgba(76, 175, 80, 0.05)', borderLeft: '4px solid var(--color-gkit-green)', borderRadius: '8px' }}>
                            <h4>✅ Verifisering av non-profit status</h4>
                            <p>Vi sikrer at klubben oppfyller alle krav før søknad.</p>
                        </div>
                        <div style={{ padding: '1.5rem', marginBottom: '1rem', background: 'rgba(76, 175, 80, 0.05)', borderLeft: '4px solid var(--color-gkit-green)', borderRadius: '8px' }}>
                            <h4>✅ Oppsett av Workspace med rabatt</h4>
                            <p>Vi aktiverer rabattkode og setter opp alle tjenester.</p>
                        </div>
                        <div style={{ padding: '1.5rem', marginBottom: '1rem', background: 'rgba(76, 175, 80, 0.05)', borderLeft: '4px solid var(--color-gkit-green)', borderRadius: '8px' }}>
                            <h4>✅ Domenekonfigurasjon og migrering</h4>
                            <p>Vi flytter e-post og data fra gammelt system.</p>
                        </div>
                        <div style={{ padding: '1.5rem', marginBottom: '1rem', background: 'rgba(76, 175, 80, 0.05)', borderLeft: '4px solid var(--color-gkit-green)', borderRadius: '8px' }}>
                            <h4>✅ Opplæring og support</h4>
                            <p>Veiledning til administratorer og brukere.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQ */}
            <section className="container section-padding" style={{ background: 'rgba(76, 175, 80, 0.02)' }}>
                <h2 style={{ textAlign: 'center', marginBottom: '3rem' }}>Ofte stilte spørsmål</h2>

                <div style={{ maxWidth: '900px', margin: '0 auto' }}>
                    <div style={{ marginBottom: '2rem', padding: '2rem', background: 'var(--color-bg-light)', borderRadius: '12px' }}>
                        <h4 style={{ marginBottom: '1rem', color: 'var(--color-gkit-green)' }}>
                            Må vi kvalifisere på nytt hvert år?
                        </h4>
                        <p style={{ color: 'var(--color-gray-light)' }}>
                            Nei, når klubben er godkjent beholder dere statusen så lenge dere oppfyller kravene.
                        </p>
                    </div>

                    <div style={{ marginBottom: '2rem', padding: '2rem', background: 'var(--color-bg-light)', borderRadius: '12px' }}>
                        <h4 style={{ marginBottom: '1rem', color: 'var(--color-gkit-green)' }}>
                            Hva skjer hvis vi vokser over 2.000 brukere?
                        </h4>
                        <p style={{ color: 'var(--color-gray-light)' }}>
                            Dere kan oppgradere til Business Standard med 75% rabatt.
                        </p>
                    </div>

                    <div style={{ marginBottom: '2rem', padding: '2rem', background: 'var(--color-bg-light)', borderRadius: '12px' }}>
                        <h4 style={{ marginBottom: '1rem', color: 'var(--color-gkit-green)' }}>
                            Kan vi kombinere gratis og betalte brukere?
                        </h4>
                        <p style={{ color: 'var(--color-gray-light)' }}>
                            Ja, f.eks. gratis for tillitsvalgte og rabattert Business Standard for ansatte.
                        </p>
                    </div>

                    <div style={{ marginBottom: '2rem', padding: '2rem', background: 'var(--color-bg-light)', borderRadius: '12px' }}>
                        <h4 style={{ marginBottom: '1rem', color: 'var(--color-gkit-green)' }}>
                            Hva hvis vi mister non-profit status?
                        </h4>
                        <p style={{ color: 'var(--color-gray-light)' }}>
                            Google vil varsle dere 30 dager før rabattene fjernes. Dere kan da konvertere til ordinær betaling.
                        </p>
                    </div>

                    <div style={{ marginBottom: '2rem', padding: '2rem', background: 'var(--color-bg-light)', borderRadius: '12px' }}>
                        <h4 style={{ marginBottom: '1rem', color: 'var(--color-gkit-green)' }}>
                            Finnes det andre Google-tjenester vi kan få rabatt på?
                        </h4>
                        <p style={{ color: 'var(--color-gray-light)' }}>
                            Ja! Google for Nonprofits gir også rabatt på Google Cloud, Analytics, Ad Grants, og flere tjenester.
                        </p>
                    </div>
                </div>
            </section>

            {/* Useful Links */}
            <section className="container section-padding">
                <h2 style={{ textAlign: 'center', marginBottom: '3rem' }}>Nyttige Ressurser</h2>

                <div style={{ maxWidth: '900px', margin: '0 auto' }}>
                    <div style={{ marginBottom: '2rem' }}>
                        <h3 style={{ color: 'var(--color-gkit-green)', marginBottom: '1rem' }}>Google for Nonprofits - Offisiell Info</h3>
                        <div style={{ display: 'grid', gap: '0.75rem' }}>
                            <a href="https://www.google.com/nonprofits/" target="_blank" rel="noopener noreferrer" className="btn btn-secondary" style={{ textAlign: 'left', textDecoration: 'none' }}>
                                📌 Google Nonprofits Hovedportal (engelsk)
                            </a>
                            <a href="https://support.google.com/nonprofits/?hl=no" target="_blank" rel="noopener noreferrer" className="btn btn-secondary" style={{ textAlign: 'left', textDecoration: 'none' }}>
                                📌 Google Nonprofits Hjelpesenter (norsk)
                            </a>
                        </div>
                    </div>

                    <div style={{ marginBottom: '2rem' }}>
                        <h3 style={{ color: 'var(--color-gkit-green)', marginBottom: '1rem' }}>Søknad & Kvalifikasjon</h3>
                        <div style={{ display: 'grid', gap: '0.75rem' }}>
                            <a href="https://support.google.com/nonprofits/answer/3215869?hl=no" target="_blank" rel="noopener noreferrer" className="btn btn-secondary" style={{ textAlign: 'left', textDecoration: 'none' }}>
                                ✅ Kvalifikasjonskrav for norske organisasjoner
                            </a>
                            <a href="https://support.google.com/nonprofits/answer/12172927?hl=no" target="_blank" rel="noopener noreferrer" className="btn btn-secondary" style={{ textAlign: 'left', textDecoration: 'none' }}>
                                📊 Hvordan finne skattemyndighetenes ID
                            </a>
                            <a href="https://support.google.com/nonprofits/answer/3367223?hl=no" target="_blank" rel="noopener noreferrer" className="btn btn-secondary" style={{ textAlign: 'left', textDecoration: 'none' }}>
                                📝 Steg-for-steg søknadsprosess
                            </a>
                        </div>
                    </div>

                    <div style={{ marginBottom: '2rem' }}>
                        <h3 style={{ color: 'var(--color-gkit-green)', marginBottom: '1rem' }}>Verifisering (Goodstack)</h3>
                        <div style={{ display: 'grid', gap: '0.75rem' }}>
                            <a href="https://support.google.com/nonprofits/answer/12016036?hl=no" target="_blank" rel="noopener noreferrer" className="btn btn-secondary" style={{ textAlign: 'left', textDecoration: 'none' }}>
                                🔐 Goodstack-verifiseringsprosess
                            </a>
                            <a href="https://support.google.com/nonprofits/answer/1614637?hl=no" target="_blank" rel="noopener noreferrer" className="btn btn-secondary" style={{ textAlign: 'left', textDecoration: 'none' }}>
                                ⏳ Sjekk søknadsstatus
                            </a>
                            <a href="https://goodstack.org/" target="_blank" rel="noopener noreferrer" className="btn btn-secondary" style={{ textAlign: 'left', textDecoration: 'none' }}>
                                🌐 Goodstack - Verifiseringsteknologi
                            </a>
                        </div>
                    </div>

                    <div style={{ marginBottom: '2rem' }}>
                        <h3 style={{ color: 'var(--color-gkit-green)', marginBottom: '1rem' }}>Workspace Aktivering & Guider</h3>
                        <div style={{ display: 'grid', gap: '0.75rem' }}>
                            <a href="https://support.google.com/nonprofits/answer/3367631?hl=no" target="_blank" rel="noopener noreferrer" className="btn btn-secondary" style={{ textAlign: 'left', textDecoration: 'none' }}>
                                📚 Offisiell 5-stegs aktiveringsveiledning
                            </a>
                            <a href="https://support.google.com/workspace/answer/11340911?hl=no" target="_blank" rel="noopener noreferrer" className="btn btn-secondary" style={{ textAlign: 'left', textDecoration: 'none' }}>
                                🎓 Google Workspace Læringssenter
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="contact" id="kontakt" style={{ background: 'var(--color-bg-dark)', padding: '4rem 0' }}>
                <div className="container" style={{ textAlign: 'center' }}>
                    <h2 style={{ marginBottom: '1rem' }}>Klar for å søke?</h2>
                    <p style={{ fontSize: '1.2rem', color: 'var(--color-gray-light)', marginBottom: '2rem' }}>
                        Vi hjelper deg gjennom hele prosessen.
                    </p>
                    <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
                        <Link to="/#kontakt" className="btn btn-primary" style={{ fontSize: '1.2rem', padding: '1rem 2rem' }}>
                            Kontakt oss for søknadshjelp
                        </Link>
                        <Link to="/products/workspace" className="btn btn-secondary" style={{ fontSize: '1.2rem', padding: '1rem 2rem' }}>
                            Tilbake til hovedside
                        </Link>
                    </div>
                </div>
            </section>

            <footer className="footer">
                <div className="container">
                    <p>© 2025 Golfklubbens IT. Stabil drift. Smarte systemer.</p>
                </div>
            </footer>
        </div>

        </SEOMeta>
    )
}

export default WorkspaceNonprofit
