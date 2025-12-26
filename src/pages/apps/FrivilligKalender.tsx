import { Link } from 'react-router-dom'
import Navbar from '../../components/Navbar'
import '../../App.css'
import SEOMeta from '../../components/SEOMeta'
import { softwareApplicationSchema } from '../../utils/seoSchemas'

const FrivilligKalender = () => {
    const breadcrumbs = [
        { name: 'Hjem', url: 'https://golfklubb-it-website.web.app/' },
        { name: 'Apper', url: 'https://golfklubb-it-website.web.app/apps' },
        { name: 'Frivillig-Kalender', url: 'https://golfklubb-it-website.web.app/apps/frivillig-kalender' },
    ]

    return (
        <div className="app">
            <SEOMeta
                title="Frivillig-Kalender - Digital frivilligplanlegging for golfklubber"
                description="Erstatt Excel-lister og e-posttråder. Frivillige melder seg på vakter, får automatiske påminnelser, og tjener bonuspoeng. Integrasjon med GolfBox."
                keywords="frivillig kalender, skiftplanlegging, frivillighetsapp, golfklubb frivillige, digital dugnads"
                url="https://golfklubb-it-website.web.app/apps/frivillig-kalender"
                schema={softwareApplicationSchema(
                    'Frivillig-Kalender',
                    'Digital planlegging og varsling for frivillig arbeidskraft på golfklubber',
                    'https://golfklubb-it-website.web.app/apps/frivillig-kalender',
                    'BusinessApplication',
                    'https://golfklubb-it-website.web.app/frivillig-kalender-image.png'
                )}
                breadcrumbs={breadcrumbs}
            />
            <header className="header">
                <Navbar />
            </header>

            <section className="hero" style={{ minHeight: '60vh' }}>
                <div className="hero-content fade-in-up">
                    <h1>
                        <span className="text-gradient-green">Frivillig-Kalender</span><br />
                        Digital planlegging av frivillig arbeidskraft
                    </h1>
                    <p style={{ fontSize: '1.3rem', color: 'var(--color-gray-light)', maxWidth: '800px', margin: '2rem auto' }}>
                        Erstatt Excel-lister og lange e-posttråder. Frivillige melder seg på vakter og får automatiske påminnelser.
                    </p>
                    <div className="hero-cta">
                        <a href="mailto:kontakt@golfklubb-it.com" className="btn btn-primary">Bestill demo</a>
                        <Link to="/#kontakt" className="btn btn-secondary">Kontakt oss</Link>
                    </div>
                </div>
            </section>

            <section className="container section-padding">
                <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
                    <img
                        src="/images/apps/frivillig-kalender.png"
                        alt="Frivillig-kalender Interface"
                        style={{ maxWidth: '100%', borderRadius: '12px', boxShadow: '0 8px 24px rgba(0,0,0,0.3)' }}
                    />
                </div>
            </section>

            <section className="container section-padding">
                <h2 style={{ textAlign: 'center', marginBottom: '3rem' }}>Nøkkelfunksjoner</h2>

                <div className="services-grid">
                    <div className="service-card glass">
                        <div className="service-icon">📅</div>
                        <h3>Skiftlister</h3>
                        <p>Lag skiftlister for turneringer og arrangementer. Frivillige velger tidspunkter som passer.</p>
                    </div>

                    <div className="service-card glass">
                        <div className="service-icon">🔔</div>
                        <h3>Varsling</h3>
                        <p>Automatiske SMS- og e-postvarsler reduserer no-shows. Frivillige får påminnelser før vakten.</p>
                    </div>

                    <div className="service-card glass">
                        <div className="service-icon">🏌️</div>
                        <h3>GolfBox-Integrasjon</h3>
                        <p>Henter turneringsdata automatisk fra GolfBox. Arrangementene er alltid oppdatert.</p>
                    </div>

                    <div className="service-card glass">
                        <div className="service-icon">🎁</div>
                        <h3>Belønningssystem</h3>
                        <p>Tildel bonuspoeng som kan byttes i gaver eller greenfee. Motiverer frivillige til innsats.</p>
                    </div>
                </div>
            </section>

            <section className="container section-padding">
                <h2 style={{ textAlign: 'center', marginBottom: '3rem' }}>Fordeler</h2>

                <div style={{ maxWidth: '800px', margin: '0 auto' }}>
                    <div style={{ padding: '1.5rem', marginBottom: '1rem', background: 'rgba(76, 175, 80, 0.05)', borderLeft: '4px solid var(--color-gkit-green)', borderRadius: '8px' }}>
                        <h4>⏱️ Spar Tid</h4>
                        <p>Administrasjonen sparer 5-10 timer per måned. Fri fra Excel-ark og e-postfølging.</p>
                    </div>

                    <div style={{ padding: '1.5rem', marginBottom: '1rem', background: 'rgba(76, 175, 80, 0.05)', borderLeft: '4px solid var(--color-gkit-green)', borderRadius: '8px' }}>
                        <h4>🙌 Enklere for Frivillige</h4>
                        <p>Frivillige velger vakter som passer. Ingen masete telefoner eller lange e-posttråder.</p>
                    </div>

                    <div style={{ padding: '1.5rem', marginBottom: '1rem', background: 'rgba(76, 175, 80, 0.05)', borderLeft: '4px solid var(--color-gkit-green)', borderRadius: '8px' }}>
                        <h4>✅ Bedre Oppmøte</h4>
                        <p>Påminnelser og enkel oversikt sikrer at folk møter opp når de skal. Ingen «glemmebortse».</p>
                    </div>

                    <div style={{ padding: '1.5rem', marginBottom: '1rem', background: 'rgba(76, 175, 80, 0.05)', borderLeft: '4px solid var(--color-gkit-green)', borderRadius: '8px' }}>
                        <h4>💪 Økt Engasjement</h4>
                        <p>Belønningssystemet motiverer frivillige. Mer frivillighet = sterkere klubb.</p>
                    </div>
                </div>
            </section>

            <section className="container section-padding" style={{ background: 'rgba(76, 175, 80, 0.02)' }}>
                <h2 style={{ textAlign: 'center', marginBottom: '3rem' }}>Eksempel: Turnerings-Frivilligjøring</h2>

                <div style={{ maxWidth: '800px', margin: '0 auto' }}>
                    <p style={{ textAlign: 'center', color: 'var(--color-gray-light)', marginBottom: '2rem' }}>
                        Slik bruker klubben Frivillig-Kalender for en større turnering:
                    </p>

                    <div style={{ padding: '1.5rem', marginBottom: '1rem', background: 'var(--color-bg-dark)', borderRadius: '8px' }}>
                        <h4 style={{ color: 'var(--color-gkit-green)' }}>1. Admin setter opp turnering</h4>
                        <p>Turnering opprettes i GolfBox. Frivillig-Kalender importerer data automatisk.</p>
                    </div>

                    <div style={{ padding: '1.5rem', marginBottom: '1rem', background: 'var(--color-bg-dark)', borderRadius: '8px' }}>
                        <h4 style={{ color: 'var(--color-gkit-green)' }}>2. Skiftlister opprettes</h4>
                        <p>Admin lager skiftlister: registrering, resultat, catering, parkeringsvakt.</p>
                    </div>

                    <div style={{ padding: '1.5rem', marginBottom: '1rem', background: 'var(--color-bg-dark)', borderRadius: '8px' }}>
                        <h4 style={{ color: 'var(--color-gkit-green)' }}>3. Frivillige melder seg på</h4>
                        <p>Medlemmer ser lister på app/web og melder seg på. De velger vakter som passer.</p>
                    </div>

                    <div style={{ padding: '1.5rem', marginBottom: '1rem', background: 'var(--color-bg-dark)', borderRadius: '8px' }}>
                        <h4 style={{ color: 'var(--color-gkit-green)' }}>4. Påminnelser sendes</h4>
                        <p>48 timer før og 2 timer før turnering mottar frivillige SMS-påminnelse.</p>
                    </div>

                    <div style={{ padding: '1.5rem', marginBottom: '1rem', background: 'var(--color-bg-dark)', borderRadius: '8px' }}>
                        <h4 style={{ color: 'var(--color-gkit-green)' }}>5. Belønning gis</h4>
                        <p>Frivillige som gjennomfører, får bonuspoeng. Poengene kan byttes mot gaver.</p>
                    </div>
                </div>
            </section>

            <section className="container section-padding" style={{ background: 'rgba(76, 175, 80, 0.02)' }}>
                <h2 style={{ textAlign: 'center', marginBottom: '3rem' }}>Ofte Stilte Spørsmål</h2>

                <div style={{ maxWidth: '800px', margin: '0 auto' }}>
                    <div style={{ padding: '1.5rem', marginBottom: '1rem', background: 'var(--color-bg-dark)', borderRadius: '8px' }}>
                        <h4 style={{ color: 'var(--color-gkit-green)', marginBottom: '0.5rem' }}>Hvordan varsles frivillige?</h4>
                        <p>Automatiske påminnelser via SMS og e-post 24 timer før vakt. Frivillige kan også abonnere på varslinger via app.</p>
                    </div>

                    <div style={{ padding: '1.5rem', marginBottom: '1rem', background: 'var(--color-bg-dark)', borderRadius: '8px' }}>
                        <h4 style={{ color: 'var(--color-gkit-green)', marginBottom: '0.5rem' }}>Kan vi se statistikk over frivillig innsats?</h4>
                        <p>Ja! Dashboard viser hvem som bidrar mest, totalt antall timer, og historikk. Perfekt for å tildele priser og anerkjennelse.</p>
                    </div>

                    <div style={{ padding: '1.5rem', marginBottom: '1rem', background: 'var(--color-bg-dark)', borderRadius: '8px' }}>
                        <h4 style={{ color: 'var(--color-gkit-green)', marginBottom: '0.5rem' }}>Fungerer det med mobile telefoner?</h4>
                        <p>Ja! Frivillig-Kalender har egen iOS- og Android-app. Frivillige kan melde seg på, se påminnelser og sjekke poengene sine.</p>
                    </div>

                    <div style={{ padding: '1.5rem', marginBottom: '1rem', background: 'var(--color-bg-dark)', borderRadius: '8px' }}>
                        <h4 style={{ color: 'var(--color-gkit-green)', marginBottom: '0.5rem' }}>Hva koster det?</h4>
                        <p>Frivillig-Kalender er en del av GKIT-pakken for klubber. Ta kontakt for prisdetaljer basert på klubbens størrelse og behov.</p>
                    </div>

                    <div style={{ padding: '1.5rem', marginBottom: '1rem', background: 'var(--color-bg-dark)', borderRadius: '8px' }}>
                        <h4 style={{ color: 'var(--color-gkit-green)', marginBottom: '0.5rem' }}>Kan vi integrere med vårt eksisterende bookingsystem?</h4>
                        <p>Ja, hvis klubben har GolfBox eller andre systemer, kan vi integrere Frivillig-Kalender slik at data synkroniseres automatisk.</p>
                    </div>

                    <div style={{ padding: '1.5rem', marginBottom: '1rem', background: 'var(--color-bg-dark)', borderRadius: '8px' }}>
                        <h4 style={{ color: 'var(--color-gkit-green)', marginBottom: '0.5rem' }}>Hvordan opprettes en skiftliste?</h4>
                        <p>Admin legger inn vakter (f.eks. "Registrering 8-10", "Catering 10-14"). Frivillige velger selv hvilke vakter de vil påta seg.</p>
                    </div>
                </div>
            </section>

            <section className="container section-padding">
                <h2 style={{ textAlign: 'center', marginBottom: '3rem' }}>Integrering med Andre Systemer</h2>

                <div style={{ maxWidth: '900px', margin: '0 auto' }}>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '1.5rem' }}>
                        <div style={{ padding: '2rem', background: 'rgba(76, 175, 80, 0.05)', borderRadius: '12px', borderLeft: '4px solid var(--color-gkit-green)' }}>
                            <h4 style={{ color: 'var(--color-gkit-green)', marginBottom: '1rem' }}>GolfBox</h4>
                            <p style={{ fontSize: '0.95rem', color: 'var(--color-gray-light)' }}>
                                Turnerings- og arrangementsdata hentes automatisk fra GolfBox. Skiftlister oppdateres automatisk.
                            </p>
                        </div>

                        <div style={{ padding: '2rem', background: 'rgba(76, 175, 80, 0.05)', borderRadius: '12px', borderLeft: '4px solid var(--color-gkit-green)' }}>
                            <h4 style={{ color: 'var(--color-gkit-green)', marginBottom: '1rem' }}>Google Workspace</h4>
                            <p style={{ fontSize: '0.95rem', color: 'var(--color-gray-light)' }}>
                                Frivillige logges inn med Google-konto. Arrangementer synkroniseres til Google Calendar.
                            </p>
                        </div>

                        <div style={{ padding: '2rem', background: 'rgba(76, 175, 80, 0.05)', borderRadius: '12px', borderLeft: '4px solid var(--color-gkit-green)' }}>
                            <h4 style={{ color: 'var(--color-gkit-green)', marginBottom: '1rem' }}>SMS/E-post</h4>
                            <p style={{ fontSize: '0.95rem', color: 'var(--color-gray-light)' }}>
                                Automatiske påminnelser sendes via SMS eller e-post. Konfiger tidspunkt og melding etter behov.
                            </p>
                        </div>

                        <div style={{ padding: '2rem', background: 'rgba(76, 175, 80, 0.05)', borderRadius: '12px', borderLeft: '4px solid var(--color-gkit-green)' }}>
                            <h4 style={{ color: 'var(--color-gkit-green)', marginBottom: '1rem' }}>ClubsiteCMS</h4>
                            <p style={{ fontSize: '0.95rem', color: 'var(--color-gray-light)' }}>
                                Skiftlister kan vises på klubbens nettside. Frivillige kan melde seg på direkte fra ClubsiteCMS.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="contact" id="kontakt" style={{ background: 'var(--color-bg-dark)', padding: '4rem 0' }}>
                <div className="container" style={{ textAlign: 'center' }}>
                    <h2 style={{ marginBottom: '1rem' }}>Organiser dugnaden bedre?</h2>
                    <p style={{ fontSize: '1.2rem', color: 'var(--color-gray-light)', marginBottom: '2rem' }}>
                        Ta kontakt for en uforpliktende prat.
                    </p>
                    <Link to="/#kontakt" className="btn btn-primary" style={{ fontSize: '1.2rem', padding: '1rem 2rem' }}>
                        Kontakt oss
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

export default FrivilligKalender
