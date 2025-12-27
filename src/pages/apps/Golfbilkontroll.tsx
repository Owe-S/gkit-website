import { Link } from 'react-router-dom'
import SEOMeta from '../../components/SEOMeta'
import { softwareApplicationSchema, breadcrumbSchema } from '../../utils/seoSchemas'
import Navbar from '../../components/Navbar'
import '../../App.css'

const Golfbilkontroll = () => {
    const breadcrumbs = [
        { name: 'Home', path: '/' },
        { name: 'Apps', path: '/apps' },
        { name: 'Golfbilkontroll', path: '/apps/golfbilkontroll' }
    ]

    return (
        <SEOMeta
            title="Golfbilkontroll | Køretøykontroll og vedlikehold"
            description="App for kontroll og vedlikehold av klubbens køretøyer. Registrer inspeksjoner, serviceoppdrag og sikkerhet."
            keywords={['golfbil', 'kontroll', 'vedlikehold', 'bil', 'golfklubb']}
            ogImage="/images/og-image.jpg"
            schemas={[
                softwareApplicationSchema({
                    name: 'Golfbilkontroll',
                    description: 'Køretøykontroll og vedliholdssystem for golfklubb',
                    url: 'https://golfklubb-it-website.web.app/apps/golfbilkontroll'
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
                        <span className="text-gradient-green">Golfbilkontroll</span><br />
                        Administrer og leie ut golfbiler
                    </h1>
                    <p style={{ fontSize: '1.3rem', color: 'var(--color-gray-light)', maxWidth: '800px', margin: '2rem auto' }}>
                        Medlemmer booker og betaler for golfbiler via app. Vedlikehold loggføres automatisk. Full kontrolloveroversikt.
                    </p>
                    <div className="hero-cta">
                        <a href="mailto:kontakt@golfklubb-it.com" className="btn btn-primary">Bestill demo</a>
                        <Link to="/#kontakt" className="btn btn-secondary">Kontakt oss</Link>
                    </div>
                </div>
            </section>

            <section className="container section-padding">
                <img src="/images/apps/golfbilkontroll.png" alt="Golfbilkontroll" loading="lazy" style={{ maxWidth: '90%', height: 'auto', borderRadius: '12px', boxShadow: '0 8px 24px rgba(0,0,0,0.3)', maxHeight: '500px', display: 'block', margin: '0 auto 4rem' }} />

                <h2 style={{ textAlign: 'center', marginBottom: '3rem' }}>Nøkkelfunksjoner</h2>

                <div className="services-grid">
                    <div className="service-card glass">
                        <div className="service-icon">🚗</div>
                        <h3>Flåtestatus</h3>
                        <p>Full oversikt over alle golfbiler. Se status (ledig, reservert, service), batterinivå og GPS-posisjon.</p>
                    </div>

                    <div className="service-card glass">
                        <div className="service-icon">📅</div>
                        <h3>Booking-System</h3>
                        <p>Medlemmer booker biler via nett eller app. Betaling med Vipps eller kort. Admin setter pris og tider.</p>
                    </div>

                    <div className="service-card glass">
                        <div className="service-icon">🔧</div>
                        <h3>Vedlikehoidslogg</h3>
                        <p>Alle hendelser loggføres: service, skader, batterisjekk. Påminnelser sendes ved neste service.</p>
                    </div>

                    <div className="service-card glass">
                        <div className="service-icon">💰</div>
                        <h3>Inntektsrapportering</h3>
                        <p>Se inntekter fra utleie, populære tidsintervaller og medlems-aktivitet.</p>
                    </div>
                </div>
            </section>

            <section className="container section-padding">
                <h2 style={{ textAlign: 'center', marginBottom: '3rem' }}>Fordeler</h2>

                <div style={{ maxWidth: '800px', margin: '0 auto' }}>
                    <div style={{ padding: '1.5rem', marginBottom: '1rem', background: 'rgba(76, 175, 80, 0.05)', borderLeft: '4px solid var(--color-gkit-green)', borderRadius: '8px' }}>
                        <h4>💰 Økt Inntekt</h4>
                        <p>Golfbilene genererer inntekter ved å være optimalt utnyttet. Automatisk booking øker etterspørselen.</p>
                    </div>

                    <div style={{ padding: '1.5rem', marginBottom: '1rem', background: 'rgba(76, 175, 80, 0.05)', borderLeft: '4px solid var(--color-gkit-green)', borderRadius: '8px' }}>
                        <h4>⚡ Lavere Vedlikeholdskostnader</h4>
                        <p>Preventivt vedlikehold forhindrer dyre reparasjoner. Alle hendelser dokumenteres.</p>
                    </div>

                    <div style={{ padding: '1.5rem', marginBottom: '1rem', background: 'rgba(76, 175, 80, 0.05)', borderLeft: '4px solid var(--color-gkit-green)', borderRadius: '8px' }}>
                        <h4>😊 Fornøyde Medlemmer</h4>
                        <p>Enkelt booking og betaling. Medlemmene slipper å ringe proshopen for hver turneringsdeltakelse.</p>
                    </div>

                    <div style={{ padding: '1.5rem', marginBottom: '1rem', background: 'rgba(76, 175, 80, 0.05)', borderLeft: '4px solid var(--color-gkit-green)', borderRadius: '8px' }}>
                        <h4>📊 Bedre Kontroll</h4>
                        <p>Dashboard gir oversikt over bilenes tilstand, vedlikeholdsbehov og bruk.</p>
                    </div>
                </div>
            </section>

            <section className="container section-padding" style={{ background: 'rgba(76, 175, 80, 0.02)' }}>
                <h2 style={{ textAlign: 'center', marginBottom: '3rem' }}>Brukstilfeller</h2>

                <div style={{ maxWidth: '900px', margin: '0 auto' }}>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '2rem' }}>
                        <div style={{ padding: '1.5rem', background: 'var(--color-bg-dark)', borderRadius: '8px' }}>
                            <h4 style={{ color: 'var(--color-gkit-green)', marginBottom: '0.5rem' }}>🎯 Turnerings-Utleie</h4>
                            <p>Medlemmer booker bil for turneringsdeltakelse. Betaling foregår automatisk. Admin ser inntekter per arrangement.</p>
                        </div>

                        <div style={{ padding: '1.5rem', background: 'var(--color-bg-dark)', borderRadius: '8px' }}>
                            <h4 style={{ color: 'var(--color-gkit-green)', marginBottom: '0.5rem' }}>🔧 Vedlikeholm-Planlegging</h4>
                            <p>Service loggføres (drivstoff, batteri, mekanisk). System reminder når neste service er forfalt.</p>
                        </div>

                        <div style={{ padding: '1.5rem', background: 'var(--color-bg-dark)', borderRadius: '8px' }}>
                            <h4 style={{ color: 'var(--color-gkit-green)', marginBottom: '0.5rem' }}>📊 Flåte-Analyse</h4>
                            <p>Se hvilke biler er mest brukte, beste tider for booking, inntektspotensial per bil.</p>
                        </div>

                        <div style={{ padding: '1.5rem', background: 'var(--color-bg-dark)', borderRadius: '8px' }}>
                            <h4 style={{ color: 'var(--color-gkit-green)', marginBottom: '0.5rem' }}>🚨 Hendelse-Registrering</h4>
                            <p>Skader eller funn registreres med foto. Admin varsles umiddelbart for reparasjon.</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="container section-padding" style={{ background: 'rgba(76, 175, 80, 0.02)' }}>
                <h2 style={{ textAlign: 'center', marginBottom: '3rem' }}>Ofte Stilte Spørsmål</h2>

                <div style={{ maxWidth: '800px', margin: '0 auto' }}>
                    <div style={{ padding: '1.5rem', marginBottom: '1rem', background: 'var(--color-bg-dark)', borderRadius: '8px' }}>
                        <h4 style={{ color: 'var(--color-gkit-green)', marginBottom: '0.5rem' }}>Når lanseres Golfbilkontroll?</h4>
                        <p>Appen er under testing. Lansering Q1 2025. Pilot-klubber kan påvirke funksjonaliteten. Kontakt oss.</p>
                    </div>

                    <div style={{ padding: '1.5rem', marginBottom: '1rem', background: 'var(--color-bg-dark)', borderRadius: '8px' }}>
                        <h4 style={{ color: 'var(--color-gkit-green)', marginBottom: '0.5rem' }}>Hvordan integreres betaling?</h4>
                        <p>Vi integrerer Vipps og Nets Easy. Betalinger bokføres automatisk i GolfBox og regnskap.</p>
                    </div>

                    <div style={{ padding: '1.5rem', marginBottom: '1rem', background: 'var(--color-bg-dark)', borderRadius: '8px' }}>
                        <h4 style={{ color: 'var(--color-gkit-green)', marginBottom: '0.5rem' }}>Trenger vi GPS?</h4>
                        <p>GPS er valgfritt. Gir ekstra sikkerhet og lett å finne biler. Vi tilbyr installasjon.</p>
                    </div>

                    <div style={{ padding: '1.5rem', marginBottom: '1rem', background: 'var(--color-bg-dark)', borderRadius: '8px' }}>
                        <h4 style={{ color: 'var(--color-gkit-green)', marginBottom: '0.5rem' }}>Hva koster det?</h4>
                        <p>Prismodellen baseres på antall biler og årlig booking-volum. Vi gir skreddersydd tilbud.</p>
                    </div>

                    <div style={{ padding: '1.5rem', marginBottom: '1rem', background: 'var(--color-bg-dark)', borderRadius: '8px' }}>
                        <h4 style={{ color: 'var(--color-gkit-green)', marginBottom: '0.5rem' }}>Kan vi se statistikk over bilbruk?</h4>
                        <p>Ja! Dashboard viser antall bookingerog inntekter. Detaljer om mest brukt bil, bestebooking-tider og medlems-aktivitet.</p>
                    </div>

                    <div style={{ padding: '1.5rem', marginBottom: '1rem', background: 'var(--color-bg-dark)', borderRadius: '8px' }}>
                        <h4 style={{ color: 'var(--color-gkit-green)', marginBottom: '0.5rem' }}>Blir bookinger synkronisert med Frivillig-Kalender?</h4>
                        <p>Ja! Golfbil-bookinger kan merkes med GolfBox-arrangement og vises i Frivillig-Kalender.</p>
                    </div>
                </div>
            </section>

            <section className="contact" id="kontakt" style={{ background: 'var(--color-bg-dark)', padding: '4rem 0' }}>
                <div className="container" style={{ textAlign: 'center' }}>
                    <h2 style={{ marginBottom: '1rem' }}>Moneter golfbilene dine</h2>
                    <p style={{ fontSize: '1.2rem', color: 'var(--color-gray-light)', marginBottom: '2rem' }}>
                        Vi setter opp komplett booking- og vedlikeholdssystem.
                    </p>
                    <Link to="/#kontakt" className="btn btn-primary" style={{ fontSize: '1.2rem', padding: '1rem 2rem' }}>
                        Bestill demo
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

export default Golfbilkontroll
