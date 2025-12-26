import { Link } from 'react-router-dom'
import Navbar from '../../components/Navbar'
import '../../App.css'

const Signage = () => {
    return (
        <div className="app">
            <header className="header">
                <Navbar />
            </header>

            <section className="hero" style={{ minHeight: '60vh' }}>
                <div className="hero-content fade-in-up">
                    <h1>
                        <span className="text-gradient-green">Digital Signage</span><br />
                        Infoskjermer som oppdateres automatisk fra GolfBox
                    </h1>
                    <p style={{ fontSize: '1.3rem', color: 'var(--color-gray-light)', maxWidth: '800px', margin: '2rem auto' }}>
                        Vi setter opp professionelle infoskjermer i klubbhus, på driving range og i proshop. Skjermene viser tee-tider, resultater og sponsorinformasjon – alt automatisk oppdatert.
                    </p>
                    <div className="hero-cta">
                        <a href="mailto:kontakt@golfklubb-it.com" className="btn btn-primary">Bestill demo</a>
                        <Link to="/#kontakt" className="btn btn-secondary">Kontakt oss</Link>
                    </div>
                </div>
            </section>

            <section className="container section-padding">
                <h2 style={{ textAlign: 'center', marginBottom: '3rem' }}>Nøkkelfunksjoner</h2>

                <div className="services-grid">
                    <div className="service-card glass">
                        <div className="service-icon">🖥️</div>
                        <h3>Oppsett & Drift</h3>
                        <p>Vi setter opp og drifter infoskjermer. Alt fra hardware, installasjon til daglig vedlikehold.</p>
                    </div>

                    <div className="service-card glass">
                        <div className="service-icon">⚙️</div>
                        <h3>GolfBox-Integrasjon</h3>
                        <p>Tee-tider, startlister, resultater og turneringsinformasjon hentes automatisk fra GolfBox i sanntid.</p>
                    </div>

                    <div className="service-card glass">
                        <div className="service-icon">🎯</div>
                        <h3>Skreddersydd Design</h3>
                        <p>Vi designer maler i klubbens farger og logo. Profesjonell utseende som matcher klubbidentiteten.</p>
                    </div>

                    <div className="service-card glass">
                        <div className="service-icon">💰</div>
                        <h3>Sponsorinntekter</h3>
                        <p>Generer inntekter ved å selge skjermplasser til sponsorer. Automatisk veksling mellom annonser.</p>
                    </div>
                </div>
            </section>

            <section className="container section-padding">
                <h2 style={{ textAlign: 'center', marginBottom: '3rem' }}>Hva du kan vise</h2>

                <div style={{ maxWidth: '900px', margin: '0 auto' }}>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '2rem' }}>
                        <div style={{ padding: '1.5rem', background: 'rgba(76, 175, 80, 0.05)', borderRadius: '8px' }}>
                            <h4 style={{ color: 'var(--color-gkit-green)' }}>⏰ Live Tee-Tider</h4>
                            <p>Tee-timeoversikt oppdatert fra GolfBox hver time.</p>
                        </div>

                        <div style={{ padding: '1.5rem', background: 'rgba(76, 175, 80, 0.05)', borderRadius: '8px' }}>
                            <h4 style={{ color: 'var(--color-gkit-green)' }}>📊 Leaderboards</h4>
                            <p>Live resultater fra turneringer og kampserie.</p>
                        </div>

                        <div style={{ padding: '1.5rem', background: 'rgba(76, 175, 80, 0.05)', borderRadius: '8px' }}>
                            <h4 style={{ color: 'var(--color-gkit-green)' }}>🌤️ Værmelding</h4>
                            <p>Lokalt værvarselet for de neste timene.</p>
                        </div>

                        <div style={{ padding: '1.5rem', background: 'rgba(76, 175, 80, 0.05)', borderRadius: '8px' }}>
                            <h4 style={{ color: 'var(--color-gkit-green)' }}>📢 Driftsmeldinger</h4>
                            <p>Stengt bane, arrangementer, dugnad og viktige meldinger.</p>
                        </div>

                        <div style={{ padding: '1.5rem', background: 'rgba(76, 175, 80, 0.05)', borderRadius: '8px' }}>
                            <h4 style={{ color: 'var(--color-gkit-green)' }}>🎯 Sponsor-Reklame</h4>
                            <p>Automatisk visning av sponsorlogoer og tilbud.</p>
                        </div>

                        <div style={{ padding: '1.5rem', background: 'rgba(76, 175, 80, 0.05)', borderRadius: '8px' }}>
                            <h4 style={{ color: 'var(--color-gkit-green)' }}>📸 Bilder & Video</h4>
                            <p>Foto fra turneringer, tidsplaner, og markedsføringskampanjer.</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="container section-padding">
                <h2 style={{ textAlign: 'center', marginBottom: '3rem' }}>Fordeler</h2>

                <div style={{ maxWidth: '800px', margin: '0 auto' }}>
                    <div style={{ padding: '1.5rem', marginbottom: '1rem', background: 'rgba(76, 175, 80, 0.05)', borderLeft: '4px solid var(--color-gkit-green)', borderRadius: '8px' }}>
                        <h4>💰 Sponsor-Inntekter</h4>
                        <p>Generer inntekter ved å selge skjermplasser. Sponsorer får økt synlighet.</p>
                    </div>

                    <div style={{ padding: '1.5rem', marginbottom: '1rem', background: 'rgba(76, 175, 80, 0.05)', borderLeft: '4px solid var(--color-gkit-green)', borderRadius: '8px' }}>
                        <h4>📈 Brukerengasjement</h4>
                        <p>Medlemmer ser sitt navn og resultater på skjerm. Økt deltakelse i turneringer.</p>
                    </div>

                    <div style={{ padding: '1.5rem', marginbottom: '1rem', background: 'rgba(76, 175, 80, 0.05)', borderLeft: '4px solid var(--color-gkit-green)', borderRadius: '8px' }}>
                        <h4>🎯 Profesjonell Profil</h4>
                        <p>Klubben fremstår moderne og godt organisert. Positive inntrykk fra medlemmer og sponsorer.</p>
                    </div>

                    <div style={{ padding: '1.5rem', marginbottom: '1rem', background: 'rgba(76, 175, 80, 0.05)', borderLeft: '4px solid var(--color-gkit-green)', borderRadius: '8px' }}>
                        <h4>⏰ Tidsbesparende</h4>
                        <p>Ingen manuell oppdatering. Alt kjører automatisk fra GolfBox. Admin sparer timer hver uke.</p>
                    </div>
                </div>
            </section>

            <section className="container section-padding" style={{ background: 'rgba(76, 175, 80, 0.02)' }}>
                <h2 style={{ textAlign: 'center', marginBottom: '3rem' }}>Mulige Skjerm-Plasseringer</h2>

                <div style={{ maxWidth: '800px', margin: '0 auto' }}>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '1rem' }}>
                        <div style={{ padding: '1rem', background: 'var(--color-bg-dark)', borderRadius: '8px', textAlign: 'center', color: 'var(--color-gray-light)' }}>
                            📍 <strong>Klubbhuset:</strong> Inngang, restaurant, bar
                        </div>
                        <div style={{ padding: '1rem', background: 'var(--color-bg-dark)', borderRadius: '8px', textAlign: 'center', color: 'var(--color-gray-light)' }}>
                            📍 <strong>Driving Range:</strong> Prisekart og tips
                        </div>
                        <div style={{ padding: '1rem', background: 'var(--color-bg-dark)', borderRadius: '8px', textAlign: 'center', color: 'var(--color-gray-light)' }}>
                            📍 <strong>Pro-Shop:</strong> Kampanjer og nyheter
                        </div>
                        <div style={{ padding: '1rem', background: 'var(--color-bg-dark)', borderRadius: '8px', textAlign: 'center', color: 'var(--color-gray-light)' }}>
                            📍 <strong>Første hull:</strong> Startliste
                        </div>
                    </div>
                </div>
            </section>

            <section className="container section-padding" style={{ background: 'rgba(76, 175, 80, 0.02)' }}>
                <h2 style={{ textAlign: 'center', marginBottom: '3rem' }}>Ofte Stilte Spørsmål</h2>

                <div style={{ maxWidth: '800px', margin: '0 auto' }}>
                    <div style={{ padding: '1.5rem', marginbottom: '1rem', background: 'var(--color-bg-dark)', borderRadius: '8px' }}>
                        <h4 style={{ color: 'var(--color-gkit-green)', marginBottom: '0.5rem' }}>Hvilken hardware trenger vi?</h4>
                        <p>TV-er eller skjermer pluss billige mini-PC-er eller Chromecasts. Vi hjelper deg velge og installere alt.</p>
                    </div>

                    <div style={{ padding: '1.5rem', marginbottom: '1rem', background: 'var(--color-bg-dark)', borderRadius: '8px' }}>
                        <h4 style={{ color: 'var(--color-gkit-green)', marginBottom: '0.5rem' }}>Hva hvis internetten blir dårlig?</h4>
                        <p>Systemet har backup og kan kjøre lokalt innhold til internett er tilbake. Ingen oppetidsproblemer.</p>
                    </div>

                    <div style={{ padding: '1.5rem', marginbottom: '1rem', background: 'var(--color-bg-dark)', borderRadius: '8px' }}>
                        <h4 style={{ color: 'var(--color-gkit-green)', marginBottom: '0.5rem' }}>Kan vi lage egne templates?</h4>
                        <p>Ja! Vi designer skreddersydde templates basert på klubbens farger, logoer og design-ønsker.</p>
                    </div>

                    <div style={{ padding: '1.5rem', marginbottom: '1rem', background: 'var(--color-bg-dark)', borderRadius: '8px' }}>
                        <h4 style={{ color: 'var(--color-gkit-green)', marginBottom: '0.5rem' }}>Hvor mye koster det?</h4>
                        <p>Setup + design fra 15k. Månedlig drift fra 2k. Priser justeres basert på kompleksitet og antall skjermer.</p>
                    </div>
                </div>
            </section>

            <section className="contact" id="kontakt" style={{ background: 'var(--color-bg-dark)', padding: '4rem 0' }}>
                <div className="container" style={{ textAlign: 'center' }}>
                    <h2 style={{ marginBottom: '1rem' }}>Moderniser klubbkommunikasjonen</h2>
                    <p style={{ fontSize: '1.2rem', color: 'var(--color-gray-light)', marginBottom: '2rem' }}>
                        Vi hjelper deg med alt fra hardware-valg til design og installasjon.
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

export default Signage