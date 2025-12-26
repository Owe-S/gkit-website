import { Link } from 'react-router-dom'
import Navbar from '../../components/Navbar'
import '../../App.css'
import SEOMeta from '../../components/SEOMeta'
import { softwareApplicationSchema, breadcrumbSchema } from '../../utils/seoSchemas'

const Workspace = () => {
    const breadcrumbs = [
        { name: 'Hjem', url: 'https://golfklubb-it-website.web.app/' },
        { name: 'Produkter', url: 'https://golfklubb-it-website.web.app/products' },
        { name: 'Google Workspace', url: 'https://golfklubb-it-website.web.app/products/workspace' },
    ]

    return (
        <div className="app">
            <SEOMeta
                title="Google Workspace for Golfklubber - E-post, Drive, Meet"
                description="Profesjonell e-post, ubegrenset lagring, videomøter for 250+ deltakere. Gratis for norske golfklubber som non-profit. Oppsett, migrering og support inkludert."
                keywords="Google Workspace, Gmail, Google Drive, Google Meet, golfklubb e-post, cloud løsning"
                url="https://golfklubb-it-website.web.app/products/workspace"
                schema={softwareApplicationSchema(
                    'Google Workspace',
                    'Profesjonell e-post, Drive, Meet og samarbeidsverktøy for golfklubber',
                    'https://golfklubb-it-website.web.app/products/workspace',
                    'BusinessApplication',
                    'https://golfklubb-it-website.web.app/workspace-image.png'
                )}
                breadcrumbs={breadcrumbs}
            />
            <header className="header">
                <Navbar />
            </header>

            {/* Hero Section */}
            <section className="hero" style={{ minHeight: '60vh' }}>
                <div className="hero-content fade-in-up">
                    <h1>
                        <span className="text-gradient-green">Google Workspace Business</span><br />
                        for Golfklubber
                    </h1>
                    <p style={{ fontSize: '1.3rem', color: 'var(--color-gray-light)', maxWidth: '800px', margin: '2rem auto' }}>
                        Profesjonell e-post, ubegrenset lagring, videomøter med 250 deltakere. Alt klubben trenger for moderne drift.
                    </p>
                    <div className="hero-cta">
                        <a href="#kontakt" className="btn btn-primary">Be om tilbud</a>
                        <Link to="/products/workspace-nonprofit" className="btn btn-secondary">Se non-profit rabatt</Link>
                    </div>
                </div>
            </section>

            {/* Value Props */}
            <section className="container section-padding">
                <h2 style={{ textAlign: 'center', marginBottom: '3rem' }}>Hva vi leverer</h2>

                <div className="services-grid" style={{ gridTemplateColumns: 'repeat(2, 1fr)' }}>
                    <div className="service-card glass">
                        <div className="service-icon">🛠️</div>
                        <h3>Oppsett & Administrasjon</h3>
                        <p>Vi setter opp og administrerer Google Workspace for klubben, inkludert domeneoppsett og brukerhåndtering.</p>
                    </div>

                    <div className="service-card glass">
                        <div className="service-icon">🚚</div>
                        <h3>Sømløs Migrering</h3>
                        <p>Vi flytter e-post og data fra deres nåværende systemer til Google Workspace uten nedetid eller tap av data.</p>
                    </div>

                    <div className="service-card glass">
                        <div className="service-icon">🛡️</div>
                        <h3>Sikkerhet & Tilgang</h3>
                        <p>Vi sørger for riktig sikkerhetsoppsett og tilgangsstyring, slik at klubbens data er trygg og kun tilgjengelig for de rette personene.</p>
                    </div>

                    <div className="service-card glass">
                        <div className="service-icon">🎓</div>
                        <h3>Opplæring & Support</h3>
                        <p>Vi gir ansatte og frivillige opplæring i bruk av Google Drive, Docs, Sheets og Meet for mer effektivt samarbeid.</p>
                    </div>
                </div>
            </section>

            {/* What's Included */}
            <section className="container section-padding" style={{ background: 'rgba(76, 175, 80, 0.02)' }}>
                <h2 style={{ textAlign: 'center', marginBottom: '3rem' }}>Hva inkluderer pakken?</h2>

                <div style={{ maxWidth: '900px', margin: '0 auto' }}>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '1.5rem' }}>
                        <div style={{ padding: '1.5rem', background: 'rgba(76, 175, 80, 0.05)', borderRadius: '12px' }}>
                            <div style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>📧</div>
                            <h4>Gmail Business</h4>
                            <p style={{ fontSize: '0.95rem', color: 'var(--color-gray-light)' }}>
                                Profesjonell e-post med søk og organisering
                            </p>
                        </div>

                        <div style={{ padding: '1.5rem', background: 'rgba(76, 175, 80, 0.05)', borderRadius: '12px' }}>
                            <div style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>💾</div>
                            <h4>Google Drive</h4>
                            <p style={{ fontSize: '0.95rem', color: 'var(--color-gray-light)' }}>
                                Ubegrenset lagringsplass i skyen
                            </p>
                        </div>

                        <div style={{ padding: '1.5rem', background: 'rgba(76, 175, 80, 0.05)', borderRadius: '12px' }}>
                            <div style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>📹</div>
                            <h4>Google Meet</h4>
                            <p style={{ fontSize: '0.95rem', color: 'var(--color-gray-light)' }}>
                                Videomøter for opptil 250 deltakere
                            </p>
                        </div>

                        <div style={{ padding: '1.5rem', background: 'rgba(76, 175, 80, 0.05)', borderRadius: '12px' }}>
                            <div style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>📅</div>
                            <h4>Google Calendar</h4>
                            <p style={{ fontSize: '0.95rem', color: 'var(--color-gray-light)' }}>
                                Felles kalendere for styret og grupper
                            </p>
                        </div>

                        <div style={{ padding: '1.5rem', background: 'rgba(76, 175, 80, 0.05)', borderRadius: '12px' }}>
                            <div style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>📄</div>
                            <h4>Google Docs/Sheets</h4>
                            <p style={{ fontSize: '0.95rem', color: 'var(--color-gray-light)' }}>
                                Dokumenter og regneark med sanntidssamarbeid
                            </p>
                        </div>

                        <div style={{ padding: '1.5rem', background: 'rgba(76, 175, 80, 0.05)', borderRadius: '12px' }}>
                            <div style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>⚙️</div>
                            <h4>Admin Console</h4>
                            <p style={{ fontSize: '0.95rem', color: 'var(--color-gray-light)' }}>
                                Enkel brukerstyring og sikkerhetskontroll
                            </p>
                        </div>
                    </div>

                    <div style={{ textAlign: 'center', marginTop: '3rem' }}>
                        <Link to="/products/workspace-tools" className="btn btn-secondary" style={{ fontSize: '1.1rem' }}>
                            Se alle verktøy og funksjoner →
                        </Link>
                    </div>
                </div>
            </section>

            {/* Pricing */}
            <section className="container section-padding">
                <h2 style={{ textAlign: 'center', marginBottom: '1rem' }}>Prismodell</h2>
                <p style={{ textAlign: 'center', fontSize: '1.2rem', color: 'var(--color-gkit-green)', fontWeight: 'bold', marginBottom: '3rem' }}>
                    💡 Alle norske golfklubber kvalifiserer som non-profit
                </p>

                <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
                    <div className="services-grid" style={{ gridTemplateColumns: 'repeat(3, 1fr)', gap: '1.5rem' }}>
                        <div className="service-card glass" style={{ borderTop: '4px solid var(--color-gkit-green)' }}>
                            <h3 style={{ color: 'var(--color-gkit-green)', marginBottom: '0.5rem' }}>Workspace for Nonprofits</h3>
                            <div style={{ fontSize: '3rem', fontWeight: 'bold', margin: '1.5rem 0', color: 'var(--color-gkit-green)' }}>
                                $0
                            </div>
                            <p style={{ fontSize: '0.9rem', color: 'var(--color-gray-light)', marginBottom: '1.5rem' }}>
                                per bruker/måned<br/>
                                <strong>GRATIS for golfklubber</strong>
                            </p>
                            <ul style={{ textAlign: 'left', fontSize: '0.9rem', lineHeight: '1.8' }}>
                                <li>30 GB lagring per bruker</li>
                                <li>Gmail + Calendar</li>
                                <li>Docs, Sheets, Slides</li>
                                <li>Meet (100 deltakere)</li>
                                <li>Shared Drives</li>
                            </ul>
                        </div>

                        <div className="service-card glass" style={{ borderTop: '4px solid var(--color-gkit-green)' }}>
                            <h3 style={{ color: 'var(--color-gkit-green)', marginBottom: '0.5rem' }}>Business Standard</h3>
                            <div style={{ fontSize: '2.5rem', fontWeight: 'bold', margin: '1.5rem 0', color: 'var(--color-gkit-green)' }}>
                                $3.50
                            </div>
                            <p style={{ fontSize: '0.9rem', color: 'var(--color-gray-light)', marginBottom: '0.5rem' }}>
                                per bruker/måned<br/>
                                <strong>75% rabatt</strong>
                            </p>
                            <p style={{ fontSize: '0.8rem', color: 'var(--color-gray-light)', marginBottom: '1.5rem' }}>
                                (ca. 40 kr/bruker/mnd)
                            </p>
                            <ul style={{ textAlign: 'left', fontSize: '0.9rem', lineHeight: '1.8' }}>
                                <li>2 TB lagring per bruker</li>
                                <li>Meet (150 deltakere)</li>
                                <li>Meet opptak</li>
                                <li>Avansert sikkerhet</li>
                                <li>Admin Console</li>
                            </ul>
                        </div>

                        <div className="service-card glass" style={{ borderTop: '4px solid var(--color-gkit-green)' }}>
                            <h3 style={{ color: 'var(--color-gkit-green)', marginBottom: '0.5rem' }}>Business Plus</h3>
                            <div style={{ fontSize: '2.5rem', fontWeight: 'bold', margin: '1.5rem 0', color: 'var(--color-gkit-green)' }}>
                                $6.16
                            </div>
                            <p style={{ fontSize: '0.9rem', color: 'var(--color-gray-light)', marginBottom: '0.5rem' }}>
                                per bruker/måned<br/>
                                <strong>72% rabatt</strong>
                            </p>
                            <p style={{ fontSize: '0.8rem', color: 'var(--color-gray-light)', marginBottom: '1.5rem' }}>
                                (ca. 70 kr/bruker/mnd)
                            </p>
                            <ul style={{ textAlign: 'left', fontSize: '0.9rem', lineHeight: '1.8' }}>
                                <li>5 TB lagring per bruker</li>
                                <li>Meet (500 deltakere)</li>
                                <li>Google Vault (arkiv)</li>
                                <li>Avansert DLP-sikkerhet</li>
                                <li>eDiscovery</li>
                            </ul>
                        </div>
                    </div>

                    <div style={{ textAlign: 'center', marginTop: '3rem', padding: '2rem', background: 'rgba(76, 175, 80, 0.1)', borderRadius: '12px' }}>
                        <p style={{ fontSize: '1.1rem', marginBottom: '1rem' }}>
                            <strong>Eksempel Nonprofits (gratis):</strong> 10 brukere = $0/år 🎉
                        </p>
                        <p style={{ fontSize: '1.1rem', marginBottom: '1rem' }}>
                            <strong>Eksempel Business Standard:</strong> 10 brukere = $420/år (ca. 4.800 kr/år)
                        </p>
                        <p style={{ fontSize: '1.1rem', marginBottom: '1.5rem' }}>
                            <strong>Eksempel Business Plus:</strong> 10 brukere = $739/år (ca. 8.400 kr/år)
                        </p>
                        <Link to="/products/workspace-nonprofit" className="btn btn-primary">
                            Les mer om Google for Nonprofits →
                        </Link>
                    </div>
                </div>
            </section>

            {/* Goodstack Verification Support */}
            <section className="container section-padding">
                <h2 style={{ textAlign: 'center', marginBottom: '3rem' }}>Verifisering med Goodstack</h2>
                <p style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto 2rem', fontSize: '1.1rem', color: 'var(--color-gray-light)' }}>
                    For å få gratis Google Workspace må klubben verifiseres som godkjent non-profit. Vi hjelper deg gjennom hele prosessen.
                </p>

                <div style={{ maxWidth: '900px', margin: '0 auto' }}>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '1.5rem' }}>
                        <div style={{ padding: '2rem', background: 'rgba(76, 175, 80, 0.05)', borderRadius: '12px' }}>
                            <div style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>📋</div>
                            <h4>1. Dokumentasjon</h4>
                            <p style={{ fontSize: '0.95rem', color: 'var(--color-gray-light)' }}>
                                Vi sjekker at klubben har korrekt dokumentasjon og skattemyndighetenes ID.
                            </p>
                        </div>

                        <div style={{ padding: '2rem', background: 'rgba(76, 175, 80, 0.05)', borderRadius: '12px' }}>
                            <div style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>🔐</div>
                            <h4>2. Goodstack-verifisering</h4>
                            <p style={{ fontSize: '0.95rem', color: 'var(--color-gray-light)' }}>
                                Vi søker gjennom Goodstack-plattformen (2-4 uker).
                            </p>
                        </div>

                        <div style={{ padding: '2rem', background: 'rgba(76, 175, 80, 0.05)', borderRadius: '12px' }}>
                            <div style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>✅</div>
                            <h4>3. Godkjenning</h4>
                            <p style={{ fontSize: '0.95rem', color: 'var(--color-gray-light)' }}>
                                Når klubben er godkjent får dere non-profit status hos Google.
                            </p>
                        </div>

                        <div style={{ padding: '2rem', background: 'rgba(76, 175, 80, 0.05)', borderRadius: '12px' }}>
                            <div style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>🚀</div>
                            <h4>4. Aktivering</h4>
                            <p style={{ fontSize: '0.95rem', color: 'var(--color-gray-light)' }}>
                                Vi setter opp gratis Workspace og migrerer eksisterende data.
                            </p>
                        </div>
                    </div>

                    <div style={{ marginTop: '2rem', padding: '2rem', background: 'var(--color-bg-light)', borderLeft: '4px solid var(--color-gkit-green)', borderRadius: '8px' }}>
                        <p style={{ marginBottom: '0.5rem' }}>
                            <strong>💡 Viktig:</strong> Alle norske idretts- og frivillighetsklubber kvalifiserer automatisk som non-profit! Du trenger bare riktig dokumentasjon.
                        </p>
                    </div>
                </div>
            </section>

            {/* Integration Examples */}
            <section className="container section-padding" style={{ background: 'rgba(76, 175, 80, 0.02)' }}>
                <h2 style={{ textAlign: 'center', marginBottom: '3rem' }}>Integrasjon med GKIT</h2>
                <p style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto 2rem', fontSize: '1.1rem', color: 'var(--color-gray-light)' }}>
                    Google Workspace fungerer perfekt sammen med andre GKIT-løsninger:
                </p>

                <div style={{ maxWidth: '900px', margin: '0 auto' }}>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '1.5rem' }}>
                        <div style={{ padding: '2rem', background: 'rgba(76, 175, 80, 0.05)', borderRadius: '12px', borderTop: '4px solid var(--color-gkit-green)' }}>
                            <h4 style={{ color: 'var(--color-gkit-green)', marginBottom: '1rem' }}>ClubsiteCMS + Workspace</h4>
                            <p style={{ fontSize: '0.95rem', color: 'var(--color-gray-light)' }}>
                                Delte Google Drives for klubbwebsiten innhold. Administrasjon gjennom Google Docs og Sheets.
                            </p>
                        </div>

                        <div style={{ padding: '2rem', background: 'rgba(76, 175, 80, 0.05)', borderRadius: '12px', borderTop: '4px solid var(--color-gkit-green)' }}>
                            <h4 style={{ color: 'var(--color-gkit-green)', marginBottom: '1rem' }}>GolfBox + Workspace</h4>
                            <p style={{ fontSize: '0.95rem', color: 'var(--color-gray-light)' }}>
                                Automatisk e-post fra GolfBox, delte spreadsheets for rapporter, Google Sheets integrasjoner.
                            </p>
                        </div>

                        <div style={{ padding: '2rem', background: 'rgba(76, 175, 80, 0.05)', borderRadius: '12px', borderTop: '4px solid var(--color-gkit-green)' }}>
                            <h4 style={{ color: 'var(--color-gkit-green)', marginBottom: '1rem' }}>Booking + Workspace</h4>
                            <p style={{ fontSize: '0.95rem', color: 'var(--color-gray-light)' }}>
                                Automatisk kalender-synkronisering, avtaler i Google Calendar, e-post varsler.
                            </p>
                        </div>

                        <div style={{ padding: '2rem', background: 'rgba(76, 175, 80, 0.05)', borderRadius: '12px', borderTop: '4px solid var(--color-gkit-green)' }}>
                            <h4 style={{ color: 'var(--color-gkit-green)', marginBottom: '1rem' }}>Søknadsportal + Workspace</h4>
                            <p style={{ fontSize: '0.95rem', color: 'var(--color-gray-light)' }}>
                                Automatiserte e-poster, Google Forms for søknader, Google Sheets for rapporter.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Why Choose Us */}
            <section className="container section-padding" style={{ background: 'rgba(76, 175, 80, 0.02)' }}>
                <h2 style={{ textAlign: 'center', marginBottom: '3rem' }}>Hvorfor velge oss?</h2>

                <div style={{ maxWidth: '800px', margin: '0 auto' }}>
                    <div className="why-list">
                        <div style={{ padding: '1.5rem', marginBottom: '1rem', background: 'rgba(76, 175, 80, 0.05)', borderLeft: '4px solid var(--color-gkit-green)', borderRadius: '8px' }}>
                            <h4>✅ Komplett oppsett</h4>
                            <p>Domenekonfigurasjon, brukeropprettelse, sikkerhet. Vi setter opp alt.</p>
                        </div>

                        <div style={{ padding: '1.5rem', marginBottom: '1rem', background: 'rgba(76, 175, 80, 0.05)', borderLeft: '4px solid var(--color-gkit-green)', borderRadius: '8px' }}>
                            <h4>✅ Non-profit verifisering</h4>
                            <p>Vi hjelper med hele Goodstack-prosessen for å få gratis Google Workspace.</p>
                        </div>

                        <div style={{ padding: '1.5rem', marginBottom: '1rem', background: 'rgba(76, 175, 80, 0.05)', borderLeft: '4px solid var(--color-gkit-green)', borderRadius: '8px' }}>
                            <h4>✅ Migrering fra Outlook/Office</h4>
                            <p>Vi flytter e-post, kontakter og kalender. Ingen nedetid.</p>
                        </div>

                        <div style={{ padding: '1.5rem', marginBottom: '1rem', background: 'rgba(76, 175, 80, 0.05)', borderLeft: '4px solid var(--color-gkit-green)', borderRadius: '8px' }}>
                            <h4>✅ Opplæring</h4>
                            <p>Veiledning til administratorer og brukere.</p>
                        </div>

                        <div style={{ padding: '1.5rem', marginBottom: '1rem', background: 'rgba(76, 175, 80, 0.05)', borderLeft: '4px solid var(--color-gkit-green)', borderRadius: '8px' }}>
                            <h4>✅ Support</h4>
                            <p>Norsk support ved behov.</p>
                        </div>
                    </div>

                    <div style={{ textAlign: 'center', marginTop: '2rem' }}>
                        <Link to="/products/workspace-migration" className="btn btn-secondary">
                            Les mer om migrering og oppsett →
                        </Link>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="contact" id="kontakt" style={{ background: 'var(--color-bg-dark)', padding: '4rem 0' }}>
                <div className="container" style={{ textAlign: 'center' }}>
                    <h2 style={{ marginBottom: '1rem' }}>Klar for å modernisere?</h2>
                    <p style={{ fontSize: '1.2rem', color: 'var(--color-gray-light)', marginBottom: '2rem' }}>
                        Vi lager et tilpasset tilbud for din klubb.
                    </p>
                    <Link to="/#kontakt" className="btn btn-primary" style={{ fontSize: '1.2rem', padding: '1rem 2rem' }}>
                        Kontakt oss for tilbud
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
