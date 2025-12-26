import { Link } from 'react-router-dom'
import Navbar from '../../components/Navbar'
import '../../App.css'

const GolfBoxModulesIntegration = () => {
    return (
        <div className="app">
            <header className="header">
                <Navbar />
            </header>

            <section className="hero" style={{ minHeight: '60vh' }}>
                <div className="hero-content fade-in-up">
                    <h1>
                        <span className="text-gradient-green">GolfBox Moduler</span><br />
                        Maksimer GolfBox-investeringen din
                    </h1>
                    <p style={{ fontSize: '1.3rem', color: 'var(--color-gray-light)', maxWidth: '800px', margin: '2rem auto' }}>
                        Mange klubber bruker bare en liten del av GolfBox. Vi hjelper deg aktivere alle moduler og skaffe medlemmer til å bruke dem.
                    </p>
                    <div className="hero-cta">
                        <a href="mailto:kontakt@golfklubb-it.com" className="btn btn-primary">Bestill gjennomgang</a>
                        <Link to="/#kontakt" className="btn btn-secondary">Kontakt oss</Link>
                    </div>
                </div>
            </section>

            <section className="container section-padding">
                <h2 style={{ textAlign: 'center', marginBottom: '3rem' }}>GolfBox Moduler vi aktiverer</h2>

                <div style={{ maxWidth: '900px', margin: '0 auto' }}>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '1.5rem' }}>
                        <div style={{ padding: '1.5rem', background: 'rgba(76, 175, 80, 0.05)', borderRadius: '8px' }}>
                            <h4 style={{ color: 'var(--color-gkit-green)' }}>📱 Medlemsapp</h4>
                            <p>iOS- og Android-app for medlemmer. Booking, score-entry, statistikk på mobilen.</p>
                        </div>

                        <div style={{ padding: '1.5rem', background: 'rgba(76, 175, 80, 0.05)', borderRadius: '8px' }}>
                            <h4 style={{ color: 'var(--color-gkit-green)' }}>🏌️ Turnering</h4>
                            <p>Komplette turneringsmodul med paring, resultat, priser og rapporter.</p>
                        </div>

                        <div style={{ padding: '1.5rem', background: 'rgba(76, 175, 80, 0.05)', borderRadius: '8px' }}>
                            <h4 style={{ color: 'var(--color-gkit-green)' }}>📊 Statistikk</h4>
                            <p>Detaljert statistikk over scores, handicaps, gjennomsnittresultater per bane.</p>
                        </div>

                        <div style={{ padding: '1.5rem', background: 'rgba(76, 175, 80, 0.05)', borderRadius: '8px' }}>
                            <h4 style={{ color: 'var(--color-gkit-green)' }}>💳 Billettmodul</h4>
                            <p>Billett/green fee-styring for turister og gjester med automativ betaling.</p>
                        </div>

                        <div style={{ padding: '1.5rem', background: 'rgba(76, 175, 80, 0.05)', borderRadius: '8px' }}>
                            <h4 style={{ color: 'var(--color-gkit-green)' }}>🎯 Handicap-Styring</h4>
                            <p>Offisiell handicap-beregning og -rapportering til NGF.</p>
                        </div>

                        <div style={{ padding: '1.5rem', background: 'rgba(76, 175, 80, 0.05)', borderRadius: '8px' }}>
                            <h4 style={{ color: 'var(--color-gkit-green)' }}>📧 E-post</h4>
                            <p>Automatisk e-post-varsler for booking, turnering, resultater og påminnelser.</p>
                        </div>

                        <div style={{ padding: '1.5rem', background: 'rgba(76, 175, 80, 0.05)', borderRadius: '8px' }}>
                            <h4 style={{ color: 'var(--color-gkit-green)' }}>🛍️ Shop/Merch</h4>
                            <p>Online shop for klubb-merchandise, ballmark og gaver.</p>
                        </div>

                        <div style={{ padding: '1.5rem', background: 'rgba(76, 175, 80, 0.05)', borderRadius: '8px' }}>
                            <h4 style={{ color: 'var(--color-gkit-green)' }}>💬 Forum</h4>
                            <p>Medlems-forum for diskusjon og sosialisering rundt golf.</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="container section-padding">
                <h2 style={{ textAlign: 'center', marginBottom: '3rem' }}>Hvordan vi jobber</h2>

                <div style={{ maxWidth: '800px', margin: '0 auto' }}>
                    <div style={{ padding: '1.5rem', marginBottom: '1rem', background: 'rgba(76, 175, 80, 0.05)', borderLeft: '4px solid var(--color-gkit-green)', borderRadius: '8px' }}>
                        <h4>🔍 Gjennomgang</h4>
                        <p>Vi kartlegger hvilke moduler som er aktivert, hvilke som er bruk-klar, og hvilke som er ubrukt.</p>
                    </div>

                    <div style={{ padding: '1.5rem', marginBottom: '1rem', background: 'rgba(76, 175, 80, 0.05)', borderLeft: '4px solid var(--color-gkit-green)', borderRadius: '8px' }}>
                        <h4>⚙️ Konfigurering</h4>
                        <p>Vi setter opp moduler som mangler, og optimaliserer eksisterende konfigurasjoner.</p>
                    </div>

                    <div style={{ padding: '1.5rem', marginBottom: '1rem', background: 'rgba(76, 175, 80, 0.05)', borderLeft: '4px solid var(--color-gkit-green)', borderRadius: '8px' }}>
                        <h4>📚 Opplæring</h4>
                        <p>Vi gir opplæring til admin-team og medlemmer i hvordan bruke hver modul.</p>
                    </div>

                    <div style={{ padding: '1.5rem', marginBottom: '1rem', background: 'rgba(76, 175, 80, 0.05)', borderLeft: '4px solid var(--color-gkit-green)', borderRadius: '8px' }}>
                        <h4>🚀 Landsetting</h4>
                        <p>Vi promoterer nye moduler til medlemmene og sørger for at de blir tatt i bruk.</p>
                    </div>
                </div>
            </section>

            <section className="container section-padding" style={{ background: 'rgba(76, 175, 80, 0.02)' }}>
                <h2 style={{ textAlign: 'center', marginBottom: '3rem' }}>Fordeler ved å aktivere moduler</h2>

                <div style={{ maxWidth: '800px', margin: '0 auto' }}>
                    <div style={{ padding: '1.5rem', marginBottom: '1rem', background: 'var(--color-bg-dark)', borderRadius: '8px' }}>
                        <h4 style={{ color: 'var(--color-gkit-green)' }}>💰 Bedre Verdi</h4>
                        <p>GolfBox-abonnementet ditt inneholder alt. Aktivering av moduler ingen ekstrakost.</p>
                    </div>

                    <div style={{ padding: '1.5rem', marginBottom: '1rem', background: 'var(--color-bg-dark)', borderRadius: '8px' }}>
                        <h4 style={{ color: 'var(--color-gkit-green)' }}>📱 Medlems-Engasjement</h4>
                        <p>Moderne app og funksjoner får medlemmer til å bruke systemet mer. Høyere medlems-tilfredshet.</p>
                    </div>

                    <div style={{ padding: '1.5rem', marginBottom: '1rem', background: 'var(--color-bg-dark)', borderRadius: '8px' }}>
                        <h4 style={{ color: 'var(--color-gkit-green)' }}>⚡ Effektivitet</h4>
                        <p>Moduler automatiserer prosesser. Mindre manuelt arbeid for admin.</p>
                    </div>

                    <div style={{ padding: '1.5rem', marginBottom: '1rem', background: 'var(--color-bg-dark)', borderRadius: '8px' }}>
                        <h4 style={{ color: 'var(--color-gkit-green)' }}>📊 Bedre Data</h4>
                        <p>Med moduler får du bedre og mer detaljert data om klubb-aktiviteter.</p>
                    </div>
                </div>
            </section>

            <section className="container section-padding" style={{ background: 'rgba(76, 175, 80, 0.02)' }}>
                <h2 style={{ textAlign: 'center', marginBottom: '3rem' }}>Eksempel: Fra inaktiv til aktiv</h2>

                <div style={{ maxWidth: '900px', margin: '0 auto' }}>
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem' }}>
                        <div>
                            <h4 style={{ color: 'var(--color-gkit-green)', marginBottom: '1rem' }}>Før aktivering</h4>
                            <ul style={{ color: 'var(--color-gray-light)' }}>
                                <li>✗ Medlemmer booker på telefon</li>
                                <li>✗ Admin registrerer poengkort manuelt</li>
                                <li>✗ Ingen member-app</li>
                                <li>✗ Turneringer planlegges manuelt</li>
                                <li>✗ Ingen statistikk-oversikt</li>
                            </ul>
                        </div>

                        <div>
                            <h4 style={{ color: 'var(--color-gkit-green)', marginBottom: '1rem' }}>Etter aktivering</h4>
                            <ul style={{ color: 'var(--color-gray-light)' }}>
                                <li>✓ Self-service booking på app/web</li>
                                <li>✓ Elektronisk poengkort med Scangolf</li>
                                <li>✓ Medlems-app med statistikk</li>
                                <li>✓ Turneringer administreres i GolfBox</li>
                                <li>✓ Detaljerte rapporter og statistikk</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            <section className="container section-padding" style={{ background: 'rgba(76, 175, 80, 0.02)' }}>
                <h2 style={{ textAlign: 'center', marginBottom: '3rem' }}>Ofte Stilte Spørsmål</h2>

                <div style={{ maxWidth: '800px', margin: '0 auto' }}>
                    <div style={{ padding: '1.5rem', marginBottom: '1rem', background: 'var(--color-bg-dark)', borderRadius: '8px' }}>
                        <h4 style={{ color: 'var(--color-gkit-green)', marginBottom: '0.5rem' }}>Må vi oppgradere GolfBox-abonnementet?</h4>
                        <p>Nei, alle moduler er inkludert i eksisterende abonnement. Vi aktiverer bare det som er tilgjengelig.</p>
                    </div>

                    <div style={{ padding: '1.5rem', marginBottom: '1rem', background: 'var(--color-bg-dark)', borderRadius: '8px' }}>
                        <h4 style={{ color: 'var(--color-gkit-green)', marginBottom: '0.5rem' }}>Hvor lang tid tar en gjennomgang?</h4>
                        <p>Typisk 2-3 timer for kartlegging, plus 1-2 uker for konfigurering og testing.</p>
                    </div>

                    <div style={{ padding: '1.5rem', marginBottom: '1rem', background: 'var(--color-bg-dark)', borderRadius: '8px' }}>
                        <h4 style={{ color: 'var(--color-gkit-green)', marginBottom: '0.5rem' }}>Kan vi aktivere moduler gradvis?</h4>
                        <p>Ja! Vi anbefaler å starte med de som gir mest verdi, og deretter legge til flere over tid.</p>
                    </div>

                    <div style={{ padding: '1.5rem', marginbottom: '1rem', background: 'var(--color-bg-dark)', borderRadius: '8px' }}>
                        <h4 style={{ color: 'var(--color-gkit-green)', marginBottom: '0.5rem' }}>Vil medlemmene godta endringer?</h4>
                        <p>Vi lager opplæringsmateriale og promotional-kampanjer for å sikre god adoptering. Fleste medlemmer elsker nye features.</p>
                    </div>
                </div>
            </section>

            <section className="contact" id="kontakt" style={{ background: 'var(--color-bg-dark)', padding: '4rem 0' }}>
                <div className="container" style={{ textAlign: 'center' }}>
                    <h2 style={{ marginBottom: '1rem' }}>Maksimer din GolfBox-investering</h2>
                    <p style={{ fontSize: '1.2rem', color: 'var(--color-gray-light)', marginBottom: '2rem' }}>
                        Vi gjennomgår din GolfBox-setup og aktiverer alle moduler som er tilgjengelig.
                    </p>
                    <Link to="/#kontakt" className="btn btn-primary" style={{ fontSize: '1.2rem', padding: '1rem 2rem' }}>
                        Bestill gjennomgang
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

export default GolfBoxModulesIntegration
