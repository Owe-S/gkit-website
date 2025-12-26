import { Link } from 'react-router-dom'
import Navbar from '../../components/Navbar'
import '../../App.css'

const DigitalSignage = () => {
    return (
        <div className="app">
            <header className="header">
                <Navbar />
            </header>

            <section className="hero" style={{ minHeight: '60vh' }}>
                <div className="hero-content fade-in-up">
                    <h1>
                        <span className="text-gradient-green">Digital Signage</span><br />
                        Profesjonell innholdsstyring for all signage
                    </h1>
                    <p style={{ fontSize: '1.3rem', color: 'var(--color-gray-light)', maxWidth: '800px', margin: '2rem auto' }}>
                        Styre skjermer, bannere og informasjonstavler fra et enkelt panel. Automatisert sponsorinnhold, kampschemadisplay og driftsmeldinger.
                    </p>
                    <div className="hero-cta">
                        <a href="mailto:kontakt@golfklubb-it.com" className="btn btn-primary">Bestill demo</a>
                        <Link to="/#kontakt" className="btn btn-secondary">Kontakt oss</Link>
                    </div>
                </div>
            </section>

            <section className="container section-padding">
                <h2 style={{ textAlign: 'center', marginBottom: '3rem' }}>Hva du kan vise</h2>

                <div className="services-grid">
                    <div className="service-card glass">
                        <div className="service-icon">⏰</div>
                        <h3>Live Kamp-Schema</h3>
                        <p>Automatisk oppdatert turnering-, kamp- og reservasjonskalender direkte fra GolfBox.</p>
                    </div>

                    <div className="service-card glass">
                        <div className="service-icon">🎯</div>
                        <h3>Sponsorinntekter</h3>
                        <p>Rull automatisk gjeldende sponsorlogoer og tilbud. Bytt innhold basert på tidsplan.</p>
                    </div>

                    <div className="service-card glass">
                        <div className="service-icon">📊</div>
                        <h3>Leaderboards</h3>
                        <p>Live resultater og rangeringer fra turneringer og kampserier.</p>
                    </div>

                    <div className="service-card glass">
                        <div className="service-icon">📢</div>
                        <h3>Driftsmeldinger</h3>
                        <p>Prioriter viktige beskjeder: stengt bane, værvarsel, arrangementer, dugnad.</p>
                    </div>
                </div>
            </section>

            <section className="container section-padding">
                <h2 style={{ textAlign: 'center', marginBottom: '3rem' }}>Skreddersydd Design</h2>

                <div style={{ maxWidth: '900px', margin: '0 auto' }}>
                    <p style={{ textAlign: 'center', color: 'var(--color-gray-light)', marginBottom: '2rem' }}>
                        Vi designer signage-maler basert på klubbens identitet. Valg av farger, logoer, fonter og layout.
                    </p>

                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '2rem' }}>
                        <div style={{ padding: '2rem', background: 'rgba(76, 175, 80, 0.05)', borderRadius: '8px', textAlign: 'center' }}>
                            <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>🎨</div>
                            <h4>Moderne Hjemmeside</h4>
                            <p style={{ color: 'var(--color-gray-light)' }}>Responsive design som ser bra ut på TV-er, tablets og mobiler.</p>
                        </div>

                        <div style={{ padding: '2rem', background: 'rgba(76, 175, 80, 0.05)', borderRadius: '8px', textAlign: 'center' }}>
                            <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>⚙️</div>
                            <h4>Lett Administrasjon</h4>
                            <p style={{ color: 'var(--color-gray-light)' }}>Intuitiv admin-panel uten tekniske kunnskaper påkrevd.</p>
                        </div>

                        <div style={{ padding: '2rem', background: 'rgba(76, 175, 80, 0.05)', borderRadius: '8px', textAlign: 'center' }}>
                            <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>📱</div>
                            <h4>Mobil Kontroll</h4>
                            <p style={{ color: 'var(--color-gray-light)' }}>Oppdater innhold fra mobilen når som helst, hvor som helst.</p>
                        </div>

                        <div style={{ padding: '2rem', background: 'rgba(76, 175, 80, 0.05)', borderRadius: '8px', textAlign: 'center' }}>
                            <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>🔄</div>
                            <h4>Auto-Oppdatering</h4>
                            <p style={{ color: 'var(--color-gray-light)' }}>Data fra GolfBox oppdateres automatisk på skjermene.</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="container section-padding" style={{ background: 'rgba(76, 175, 80, 0.02)' }}>
                <h2 style={{ textAlign: 'center', marginBottom: '3rem' }}>Eksempel: Turnerings-Setup</h2>

                <div style={{ maxWidth: '900px', margin: '0 auto' }}>
                    <p style={{ textAlign: 'center', color: 'var(--color-gray-light)', marginBottom: '2rem' }}>
                        Fra og med 6 timer før turnering til resultat er klart:
                    </p>

                    <div style={{ padding: '1.5rem', marginBottom: '1rem', background: 'var(--color-bg-dark)', borderRadius: '8px' }}>
                        <h4 style={{ color: 'var(--color-gkit-green)' }}>Før turneringen</h4>
                        <p>Skjermen viser startlister med golfere og tider. Automatisk oppdatert fra GolfBox.</p>
                    </div>

                    <div style={{ padding: '1.5rem', marginBottom: '1rem', background: 'var(--color-bg-dark)', borderRadius: '8px' }}>
                        <h4 style={{ color: 'var(--color-gkit-green)' }}>Under turneringen</h4>
                        <p>Live poengstillinger vises med 5 min forsinkelse fra GolfBox-systemet.</p>
                    </div>

                    <div style={{ padding: '1.5rem', marginBottom: '1rem', background: 'var(--color-bg-dark)', borderRadius: '8px' }}>
                        <h4 style={{ color: 'var(--color-gkit-green)' }}>Etter turneringen</h4>
                        <p>Sluttresultat med utdelingsinformasjon. Sponsor-reklame vises mellom resultatene.</p>
                    </div>

                    <div style={{ padding: '1.5rem', marginBottom: '1rem', background: 'var(--color-bg-dark)', borderRadius: '8px' }}>
                        <h4 style={{ color: 'var(--color-gkit-green)' }}>Sponsor-innhold</h4>
                        <p>Automatisk veksling mellom sponsor A, B og C hver 10. sekund. Bilder og tekst fra admin-panel.</p>
                    </div>
                </div>
            </section>

            <section className="container section-padding">
                <h2 style={{ textAlign: 'center', marginBottom: '3rem' }}>Fordeler</h2>

                <div style={{ maxWidth: '800px', margin: '0 auto' }}>
                    <div style={{ padding: '1.5rem', marginBottom: '1rem', background: 'rgba(76, 175, 80, 0.05)', borderLeft: '4px solid var(--color-gkit-green)', borderRadius: '8px' }}>
                        <h4>💰 Sponsor-Inntekter</h4>
                        <p>Generer inntekter ved å selge skjermplasser til sponsorer. Vi hjelper deg med prising.</p>
                    </div>

                    <div style={{ padding: '1.5rem', marginBottom: '1rem', background: 'rgba(76, 175, 80, 0.05)', borderLeft: '4px solid var(--color-gkit-green)', borderRadius: '8px' }}>
                        <h4>📈 Brukerengasjement</h4>
                        <p>Medlemmer ser sitt navn og resultater på skjerm. Økt deltakelse og engagement.</p>
                    </div>

                    <div style={{ padding: '1.5rem', marginBottom: '1rem', background: 'rgba(76, 175, 80, 0.05)', borderLeft: '4px solid var(--color-gkit-green)', borderRadius: '8px' }}>
                        <h4>🎯 Profesjonell Inntrykk</h4>
                        <p>Viser at klubben er moderne og godt organisert. Positive medlemmerinner og sponsor-goodwill.</p>
                    </div>

                    <div style={{ padding: '1.5rem', marginBottom: '1rem', background: 'rgba(76, 175, 80, 0.05)', borderLeft: '4px solid var(--color-gkit-green)', borderRadius: '8px' }}>
                        <h4>⏰ Tidsbesparende</h4>
                        <p>Ingen manuell oppdatering. Alt kjører automatisk fra GolfBox og admin-panel.</p>
                    </div>
                </div>
            </section>

            <section className="container section-padding" style={{ background: 'rgba(76, 175, 80, 0.02)' }}>
                <h2 style={{ textAlign: 'center', marginBottom: '3rem' }}>Mulige Skjerm-Plasseringer</h2>

                <div style={{ maxWidth: '900px', margin: '0 auto' }}>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '1rem', color: 'var(--color-gray-light)' }}>
                        <div style={{ padding: '1rem', background: 'var(--color-bg-dark)', borderRadius: '8px' }}>📍 <strong>Clubhuset:</strong> Inngangsområde, restaurant, bar</div>
                        <div style={{ padding: '1rem', background: 'var(--color-bg-dark)', borderRadius: '8px' }}>📍 <strong>Driving Range:</strong> Priser og tips</div>
                        <div style={{ padding: '1rem', background: 'var(--color-bg-dark)', borderRadius: '8px' }}>📍 <strong>Pro-Shop:</strong> Kampanjer og nyheter</div>
                        <div style={{ padding: '1rem', background: 'var(--color-bg-dark)', borderRadius: '8px' }}>📍 <strong>Banens første hull:</strong> Startliste</div>
                    </div>
                </div>
            </section>

            <section className="container section-padding" style={{ background: 'rgba(76, 175, 80, 0.02)' }}>
                <h2 style={{ textAlign: 'center', marginBottom: '3rem' }}>Ofte Stilte Spørsmål</h2>

                <div style={{ maxWidth: '800px', margin: '0 auto' }}>
                    <div style={{ padding: '1.5rem', marginBottom: '1rem', background: 'var(--color-bg-dark)', borderRadius: '8px' }}>
                        <h4 style={{ color: 'var(--color-gkit-green)', marginBottom: '0.5rem' }}>Hvilken hardware trenger vi?</h4>
                        <p>Du trenger TV-er eller skjermer og billige mini-PC-er (eller Chromecasts). Vi hjelper deg å sette det opp.</p>
                    </div>

                    <div style={{ padding: '1.5rem', marginBottom: '1rem', background: 'var(--color-bg-dark)', borderRadius: '8px' }}>
                        <h4 style={{ color: 'var(--color-gkit-green)', marginBottom: '0.5rem' }}>Hva hvis internetten går ned?</h4>
                        <p>Systemet har backup og kan kjøre lokal innhold til internett er tilbake. Ingen oppetid-problem.</p>
                    </div>

                    <div style={{ padding: '1.5rem', marginBottom: '1rem', background: 'var(--color-bg-dark)', borderRadius: '8px' }}>
                        <h4 style={{ color: 'var(--color-gkit-green)', marginBottom: '0.5rem' }}>Kan vi lage egne templates?</h4>
                        <p>Ja! Vi designer egne templates basert på klubbens farger, logoer og design-ønsker.</p>
                    </div>

                    <div style={{ padding: '1.5rem', marginbottom: '1rem', background: 'var(--color-bg-dark)', borderRadius: '8px' }}>
                        <h4 style={{ color: 'var(--color-gkit-green)', marginBottom: '0.5rem' }}>Hvor mye koster det?</h4>
                        <p>Setup + design fra 15k. Månedlig drift fra 2k. Priser justeres basert på kompleksitet.</p>
                    </div>
                </div>
            </section>

            <section className="contact" id="kontakt" style={{ background: 'var(--color-bg-dark)', padding: '4rem 0' }}>
                <div className="container" style={{ textAlign: 'center' }}>
                    <h2 style={{ marginBottom: '1rem' }}>Klar for profesjonell digital signage?</h2>
                    <p style={{ fontSize: '1.2rem', color: 'var(--color-gray-light)', marginBottom: '2rem' }}>
                        Vi hjelper deg med alt fra hardware-valg til design og oppsett.
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
    )
}

export default DigitalSignage
