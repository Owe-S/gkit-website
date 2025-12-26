import { Link } from 'react-router-dom'
import Navbar from '../../components/Navbar'
import '../../App.css'
import SEOMeta from '../../components/SEOMeta'
import { softwareApplicationSchema } from '../../utils/seoSchemas'

const ClubsiteCMS = () => {
    const breadcrumbs = [
        { name: 'Hjem', url: 'https://golfklubb-it-website.web.app/' },
        { name: 'Produkter', url: 'https://golfklubb-it-website.web.app/products' },
        { name: 'ClubsiteCMS', url: 'https://golfklubb-it-website.web.app/products/clubsite-cms' },
    ]

    return (
        <div className="app">
            <SEOMeta
                title="ClubsiteCMS - Profesjonell nettside for golfklubber"
                description="ClubsiteCMS av Scangolf - enkelt redaksjonssystem for klubbnettstedet. Integrert med GolfBox, betaling, events og media. 45+ norske klubber på plattformen."
                keywords="ClubsiteCMS, golfklubb nettside, Scangolf, CMS system, golfklubb website"
                url="https://golfklubb-it-website.web.app/products/clubsite-cms"
                schema={softwareApplicationSchema(
                    'ClubsiteCMS',
                    'Profesjonell nettside og CMS-system for golfklubber fra Scangolf',
                    'https://golfklubb-it-website.web.app/products/clubsite-cms',
                    'BusinessApplication',
                    'https://golfklubb-it-website.web.app/clubsite-image.png'
                )}
                breadcrumbs={breadcrumbs}
            />
            <header className="header">
                <Navbar />
            </header>

            <section className="hero" style={{ minHeight: '60vh' }}>
                <div className="hero-content fade-in-up">
                    <h1>
                        <span className="text-gradient-green">ClubsiteCMS</span><br />
                        Implementering, integrasjon og drift
                    </h1>
                    <p style={{ fontSize: '1.3rem', color: 'var(--color-gray-light)', maxWidth: '800px', margin: '2rem auto' }}>
                        Vi implementerer og drifter ClubsiteCMS for golfklubber. 45+ klubber på løsningen. Rask oppstart (2–4 dager) med norsk support.
                    </p>
                    <div className="hero-cta">
                        <a href="#kontakt" className="btn btn-primary">Kontakt oss – vi setter opp alt</a>
                        <a href="#referanser" className="btn btn-secondary">Se referanser</a>
                    </div>
                </div>
            </section>

            <section className="container section-padding">
                <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
                    <img
                        src="/path/to/clubsite_cms.png"
                        alt="ClubsiteCMS Dashboard"
                        style={{ maxWidth: '100%', borderRadius: '12px', boxShadow: '0 8px 24px rgba(0,0,0,0.3)' }}
                    />
                </div>
            </section>

            <section className="container section-padding" style={{ background: 'rgba(76, 175, 80, 0.02)' }}>
                <h2 style={{ textAlign: 'center', marginBottom: '1.5rem' }}>Hva vi tilbyr</h2>
                <div style={{ maxWidth: '1000px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '1rem', marginBottom: '2rem' }}>
                    <div className="service-card glass" style={{ padding: '1.2rem' }}>
                        <div className="service-icon">🌐</div>
                        <h3>Drift & Vedlikehold</h3>
                        <p>Vi sørger for at nettsiden din alltid er oppdatert og fungerer optimalt i partnerskap med Scangolf.</p>
                    </div>
                    <div className="service-card glass" style={{ padding: '1.2rem' }}>
                        <div className="service-icon">🔗</div>
                        <h3>Sømløs Integrasjon</h3>
                        <p>Vi kobler nettsiden mot GolfBox, kalendere og andre systemer for automatisk oppdatering av innhold.</p>
                    </div>
                    <div className="service-card glass" style={{ padding: '1.2rem' }}>
                        <div className="service-icon">🛠️</div>
                        <h3>Skreddersøm</h3>
                        <p>Vi bygger tilpassede moduler og funksjonalitet som dekker klubbens unike behov og ønsker.</p>
                    </div>
                    <div className="service-card glass" style={{ padding: '1.2rem' }}>
                        <div className="service-icon">🤝</div>
                        <h3>Support & Rådgivning</h3>
                        <p>Teknisk bistand og strategisk rådgivning for redaktører og administratorer i klubben.</p>
                    </div>
                </div>

                <h3 style={{ textAlign: 'center', marginBottom: '1.5rem', marginTop: '3rem' }}>Moduler (valgfrie)</h3>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1rem' }}>
                    <div className="service-card glass" style={{ padding: '1.1rem' }}>
                        <div className="service-icon">📰</div>
                        <h4>Nettside/CMS</h4>
                        <p>Nyheter, artikler, dokumentarkiv, roller/rettigheter, enkel editor.</p>
                    </div>
                    <div className="service-card glass" style={{ padding: '1.1rem' }}>
                        <div className="service-icon">⛳</div>
                        <h4>GolfBox embed</h4>
                        <p>Tee-times, startlister og resultater fra GolfBox – alltid oppdatert.</p>
                    </div>
                    <div className="service-card glass" style={{ padding: '1.1rem' }}>
                        <div className="service-icon">📅</div>
                        <h4>Kalender/Arrangementer</h4>
                        <p>Kurs, turneringer, styremøter. Synk til Google Calendar ved behov.</p>
                    </div>
                    <div className="service-card glass" style={{ padding: '1.1rem' }}>
                        <div className="service-icon">📸</div>
                        <h4>Media/Galleri</h4>
                        <p>Responsivt galleri, automatisk bildekomprimering, video-embed.</p>
                    </div>
                    <div className="service-card glass" style={{ padding: '1.1rem' }}>
                        <div className="service-icon">💳</div>
                        <h4>Påmelding & Betaling</h4>
                        <p>Påmeldingsskjema m/betaling (Vipps/Stripe/Netaxept) for kurs og arrangementer.</p>
                    </div>
                    <div className="service-card glass" style={{ padding: '1.1rem' }}>
                        <div className="service-icon">🧩</div>
                        <h4>Integrasjoner</h4>
                        <p>Signage/Display, Søknadsportalen, Google Workspace, e-postgrupper.</p>
                    </div>
                </div>
            </section>

            <section className="container section-padding">
                <h2 style={{ textAlign: 'center', marginBottom: '3rem' }}>Scangolf Partnership</h2>
                <p style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto 2rem', fontSize: '1.1rem', color: 'var(--color-gray-light)' }}>
                    ClubsiteCMS utvikles av Scangolf, Norges ledende golf IT-leverandør. Vi er autorisert partner og implementerer løsningen for golfklubber.
                </p>

                <div style={{ maxWidth: '900px', margin: '0 auto' }}>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '1.5rem' }}>
                        <div style={{ padding: '2rem', background: 'rgba(76, 175, 80, 0.05)', borderRadius: '12px' }}>
                            <h4 style={{ color: 'var(--color-gkit-green)', marginBottom: '1rem' }}>Scangolf</h4>
                            <ul style={{ fontSize: '0.95rem', color: 'var(--color-gray-light)', lineHeight: '1.8', listStyle: 'none', padding: 0 }}>
                                <li>✅ Utvikler og drifter ClubsiteCMS</li>
                                <li>✅ Tilbyr lisens, hosting, support</li>
                                <li>✅ Har 20+ år erfaring i golf IT</li>
                                <li>✅ Arbeider med 200+ klubber globalt</li>
                            </ul>
                            <p style={{ marginTop: '1rem', fontSize: '0.9rem' }}>
                                <strong>Kontakt Scangolf:</strong><br />
                                ☎️ +47 415 20 802<br />
                                📧 post@scangolf.no
                            </p>
                        </div>

                        <div style={{ padding: '2rem', background: 'rgba(76, 175, 80, 0.05)', borderRadius: '12px' }}>
                            <h4 style={{ color: 'var(--color-gkit-green)', marginBottom: '1rem' }}>Golfklubbens IT</h4>
                            <ul style={{ fontSize: '0.95rem', color: 'var(--color-gray-light)', lineHeight: '1.8', listStyle: 'none', padding: 0 }}>
                                <li>✅ Autorisert implementasjonspartner</li>
                                <li>✅ Håndterer oppsett og migrering</li>
                                <li>✅ Tilbyr integrering med andre systemer</li>
                                <li>✅ Gir norsk support og vedlikehold</li>
                            </ul>
                            <p style={{ marginTop: '1rem', fontSize: '0.9rem' }}>
                                <strong>Kontakt oss:</strong><br />
                                📧 Gjennom kontaktskjemaet<br />
                                💬 Vi respons innen 24 timer
                            </p>
                        </div>
                    </div>

                    <div style={{ marginTop: '2rem', padding: '2rem', background: 'var(--color-bg-light)', borderLeft: '4px solid var(--color-gkit-green)', borderRadius: '8px' }}>
                        <p style={{ marginBottom: '0.5rem' }}>
                            <strong>💡 Hvordan fungerer det?</strong> Du valger Scangolf som leverandør og oss som implementasjonspartner. Vi jobber sammen for å sikre en vellykket implementering.
                        </p>
                    </div>
                </div>
            </section>

            <section className="container section-padding" style={{ background: 'rgba(76, 175, 80, 0.02)' }}>
                <h2 style={{ textAlign: 'center', marginBottom: '3rem' }}>Integrasjon med GKIT-løsninger</h2>
                <p style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto 2rem', fontSize: '1.1rem', color: 'var(--color-gray-light)' }}>
                    ClubsiteCMS integreres perfekt med andre GKIT-systemer:
                </p>

                <div style={{ maxWidth: '900px', margin: '0 auto' }}>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '1.5rem' }}>
                        <div style={{ padding: '2rem', background: 'rgba(76, 175, 80, 0.05)', borderRadius: '12px', borderTop: '4px solid var(--color-gkit-green)' }}>
                            <h4 style={{ color: 'var(--color-gkit-green)', marginBottom: '1rem' }}>GolfBox</h4>
                            <ul style={{ fontSize: '0.9rem', color: 'var(--color-gray-light)', lineHeight: '1.8', listStyle: 'none', padding: 0 }}>
                                <li>✓ Embed tee-times på nettside</li>
                                <li>✓ Vise startlister og resultater</li>
                                <li>✓ Automatisk oppdatering av handicap</li>
                                <li>✓ Integrer medlemsdatabase</li>
                            </ul>
                        </div>

                        <div style={{ padding: '2rem', background: 'rgba(76, 175, 80, 0.05)', borderRadius: '12px', borderTop: '4px solid var(--color-gkit-green)' }}>
                            <h4 style={{ color: 'var(--color-gkit-green)', marginBottom: '1rem' }}>Booking Kalender</h4>
                            <ul style={{ fontSize: '0.9rem', color: 'var(--color-gray-light)', lineHeight: '1.8', listStyle: 'none', padding: 0 }}>
                                <li>✓ Synk arrangementer til nettsiden</li>
                                <li>✓ Online påmelding og betaling</li>
                                <li>✓ Google Calendar integrasjon</li>
                                <li>✓ Automatiske e-postvarsler</li>
                            </ul>
                        </div>

                        <div style={{ padding: '2rem', background: 'rgba(76, 175, 80, 0.05)', borderRadius: '12px', borderTop: '4px solid var(--color-gkit-green)' }}>
                            <h4 style={{ color: 'var(--color-gkit-green)', marginBottom: '1rem' }}>Google Workspace</h4>
                            <ul style={{ fontSize: '0.9rem', color: 'var(--color-gray-light)', lineHeight: '1.8', listStyle: 'none', padding: 0 }}>
                                <li>✓ Delte Google Drive for innhold</li>
                                <li>✓ Brukerstyring via Google Admin</li>
                                <li>✓ E-postgrupper for nyheter</li>
                                <li>✓ Google Sheets for rapporter</li>
                            </ul>
                        </div>

                        <div style={{ padding: '2rem', background: 'rgba(76, 175, 80, 0.05)', borderRadius: '12px', borderTop: '4px solid var(--color-gkit-green)' }}>
                            <h4 style={{ color: 'var(--color-gkit-green)', marginBottom: '1rem' }}>Digital Signage</h4>
                            <ul style={{ fontSize: '0.9rem', color: 'var(--color-gray-light)', lineHeight: '1.8', listStyle: 'none', padding: 0 }}>
                                <li>✓ Push innhold til displayer</li>
                                <li>✓ Starte TV, monitor på klubben</li>
                                <li>✓ Vise nyheter fra nettsiden</li>
                                <li>✓ Sanntid oppdatering av info</li>
                            </ul>
                        </div>

                        <div style={{ padding: '2rem', background: 'rgba(76, 175, 80, 0.05)', borderRadius: '12px', borderTop: '4px solid var(--color-gkit-green)' }}>
                            <h4 style={{ color: 'var(--color-gkit-green)', marginBottom: '1rem' }}>Søknadsportalen</h4>
                            <ul style={{ fontSize: '0.9rem', color: 'var(--color-gray-light)', lineHeight: '1.8', listStyle: 'none', padding: 0 }}>
                                <li>✓ Embed søknadskjema på nettsiden</li>
                                <li>✓ Automatisk saksbehandling</li>
                                <li>✓ Status oppslag for søkere</li>
                                <li>✓ Rapportering til styret</li>
                            </ul>
                        </div>

                        <div style={{ padding: '2rem', background: 'rgba(76, 175, 80, 0.05)', borderRadius: '12px', borderTop: '4px solid var(--color-gkit-green)' }}>
                            <h4 style={{ color: 'var(--color-gkit-green)', marginBottom: '1rem' }}>API-automatiseringer</h4>
                            <ul style={{ fontSize: '0.9rem', color: 'var(--color-gray-light)', lineHeight: '1.8', listStyle: 'none', padding: 0 }}>
                                <li>✓ Automatiser arbeidsflyten</li>
                                <li>✓ Integrer med egne systemer</li>
                                <li>✓ Sende data til analyse</li>
                                <li>✓ Og mye mer...</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            <section className="container section-padding" id="referanser">
                <h2 style={{ textAlign: 'center', marginBottom: '2rem' }}>45+ Norske Golfklubber</h2>
                <p style={{ textAlign: 'center', color: 'var(--color-gray-light)', maxWidth: '900px', margin: '0 auto 3rem' }}>
                    Losby, Bærum, Asker, Vestfold, Grimstad, Hauger, Kristiansand, Drøbak, Ski, Grini, Haga, Kjekstad m.fl.
                </p>
                <div style={{ maxWidth: '900px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '0.8rem' }}>
                    <div style={{ padding: '0.9rem', background: 'rgba(76, 175, 80, 0.05)', borderRadius: '8px' }}>Losby • Bærum • Asker</div>
                    <div style={{ padding: '0.9rem', background: 'rgba(76, 175, 80, 0.05)', borderRadius: '8px' }}>Vestfold • Grimstad • Hauger</div>
                    <div style={{ padding: '0.9rem', background: 'rgba(76, 175, 80, 0.05)', borderRadius: '8px' }}>Kristiansand • Drøbak • Ski</div>
                    <div style={{ padding: '0.9rem', background: 'rgba(76, 175, 80, 0.05)', borderRadius: '8px' }}>Grini • Haga • Kjekstad</div>
                </div>
                <p style={{ textAlign: 'center', marginTop: '1.5rem' }}>
                    <a href="https://clubsite.no/referanser" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--color-gkit-green)' }}>Se alle 45+ referanseklubber →</a>
                </p>
            </section>

            <section className="container section-padding">
                <h2 style={{ textAlign: 'center', marginBottom: '3rem' }}>Fordeler</h2>

                <div style={{ maxWidth: '800px', margin: '0 auto' }}>
                    <div className="why-list">
                        <div style={{ padding: '1.5rem', marginBottom: '1rem', background: 'rgba(76, 175, 80, 0.05)', borderLeft: '4px solid var(--color-gkit-green)', borderRadius: '8px' }}>
                            <h4>✨ Enkelt å Bruke</h4>
                            <p>Hvis du kan bruke Word, kan du oppdatere nettsiden. Ingen koding nødvendig.</p>
                        </div>

                        <div style={{ padding: '1.5rem', marginBottom: '1rem', background: 'rgba(76, 175, 80, 0.05)', borderLeft: '4px solid var(--color-gkit-green)', borderRadius: '8px' }}>
                            <h4>📱 Mobilvennlig</h4>
                            <p>Perfekt visning på mobil, nettbrett og PC. Responsivt design som standard.</p>
                        </div>

                        <div style={{ padding: '1.5rem', marginBottom: '1rem', background: 'rgba(76, 175, 80, 0.05)', borderLeft: '4px solid var(--color-gkit-green)', borderRadius: '8px' }}>
                            <h4>🔒 Sikker & Rask</h4>
                            <p>Hostet på Microsoft Azure. GDPR-kompatibel. Daglig backup. Lynrask lastetid.</p>
                        </div>

                        <div style={{ padding: '1.5rem', marginBottom: '1rem', background: 'rgba(76, 175, 80, 0.05)', borderLeft: '4px solid var(--color-gkit-green)', borderRadius: '8px' }}>
                            <h4>🛠️ Full Support</h4>
                            <p>Telefon- og e-poststøtte. Vi fikser problemer, oppdaterer systemet, og utvikler nye funksjoner.</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="container section-padding" style={{ background: 'rgba(76, 175, 80, 0.02)' }}>
                <h2 style={{ textAlign: 'center', marginBottom: '3rem' }}>Ofte Stilte Spørsmål</h2>

                <div style={{ maxWidth: '800px', margin: '0 auto' }}>
                    <div style={{ padding: '1.5rem', marginBottom: '1rem', background: 'var(--color-bg-dark)', borderRadius: '8px' }}>
                        <h4 style={{ color: 'var(--color-gkit-green)', marginBottom: '0.5rem' }}>Hvem utvikler ClubsiteCMS?</h4>
                        <p>ClubsiteCMS utvikles av <strong>Scangolf</strong>. Golfklubbens IT leverer implementasjon, integrasjoner og drift for klubber.</p>
                    </div>

                    <div style={{ padding: '1.5rem', marginBottom: '1rem', background: 'var(--color-bg-dark)', borderRadius: '8px' }}>
                        <h4 style={{ color: 'var(--color-gkit-green)', marginBottom: '0.5rem' }}>Hvor raskt kan vi gå live?</h4>
                        <p>Typisk 2–4 dager uten migrering. Med migrering av innhold/filer: 1–2 uker avhengig av omfang.</p>
                    </div>

                    <div style={{ padding: '1.5rem', marginBottom: '1rem', background: 'var(--color-bg-dark)', borderRadius: '8px' }}>
                        <h4 style={{ color: 'var(--color-gkit-green)', marginBottom: '0.5rem' }}>Hva koster det?</h4>
                        <p>Lisens prises av Scangolf (kontakt <a href="tel:+4741520802" style={{ color: 'var(--color-gkit-green)' }}>415 20 802</a> / <a href="mailto:post@scangolf.no" style={{ color: 'var(--color-gkit-green)' }}>post@scangolf.no</a>). Vi fakturerer timer/fastpris for implementasjon, integrasjoner og løpende drift/support.</p>
                    </div>

                    <div style={{ padding: '1.5rem', marginBottom: '1rem', background: 'var(--color-bg-dark)', borderRadius: '8px' }}>
                        <h4 style={{ color: 'var(--color-gkit-green)', marginBottom: '0.5rem' }}>Kan dere migrere gammel nettside?</h4>
                        <p>Ja. Vi håndterer flytting av innhold, dokumenter og media, og rydder i strukturen samtidig.</p>
                    </div>

                    <div style={{ padding: '1.5rem', marginBottom: '1rem', background: 'var(--color-bg-dark)', borderRadius: '8px' }}>
                        <h4 style={{ color: 'var(--color-gkit-green)', marginBottom: '0.5rem' }}>Får vi norsk support?</h4>
                        <p>Ja, Golfklubbens IT leverer norsk support, feilretting og endringer. Vi koordinerer med Scangolf ved behov.</p>
                    </div>
                </div>
            </section>

            <section className="contact" id="kontakt" style={{ background: 'var(--color-bg-dark)', padding: '4rem 0' }}>
                <div className="container" style={{ textAlign: 'center' }}>
                    <h2 style={{ marginBottom: '1rem' }}>Trenger dere integrasjoner?</h2>
                    <p style={{ fontSize: '1.2rem', color: 'var(--color-gray-light)', marginBottom: '2rem' }}>
                        Vi hjelper klubber med ClubsiteCMS-integrasjoner og konsulentbistand.
                    </p>
                    <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
                        <Link to="/#kontakt" className="btn btn-primary" style={{ fontSize: '1.2rem', padding: '1rem 2rem' }}>
                            Kontakt oss
                        </Link>
                        <a href="https://clubsite.no" target="_blank" rel="noopener noreferrer" className="btn btn-secondary" style={{ fontSize: '1.2rem', padding: '1rem 2rem' }}>
                            Besøk clubsite.no
                        </a>
                    </div>
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

export default ClubsiteCMS
