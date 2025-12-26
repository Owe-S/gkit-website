import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'
import GraphicFiller from '../components/GraphicFiller'
import Footer from '../components/Footer'
import '../App.css'
import SEOMeta from '../components/SEOMeta'
import { serviceSchema } from '../utils/seoSchemas'

const Services = () => {
    const breadcrumbs = [
        { name: 'Hjem', url: 'https://golfklubb-it-website.web.app/' },
        { name: 'Tjenester', url: 'https://golfklubb-it-website.web.app/services' },
    ]

    return (
        <>
            <SEOMeta
                title="Tjenester - IT løsninger for golfklubber | Golfklubbens IT"
                description="Vi tilbyr komplette IT tjenester for golfklubber: GolfBox automatisering, Google Workspace, ClubsiteCMS implementering, integrasjoner og digital modernisering."
                keywords="IT tjenester, golfklubb IT, GolfBox integrasjon, Google Workspace, ClubsiteCMS, IT konsultasjon"
                url="https://golfklubb-it-website.web.app/services"
                schema={serviceSchema(
                    'IT Tjenester for Golfklubber',
                    'Komplette IT løsninger og konsulentbistand for norske golfklubber',
                    'https://golfklubb-it-website.web.app/services',
                    '$$$'
                )}
                breadcrumbs={breadcrumbs}
            />
        </>
    )
}

function ServicesContent() {
    const services = [
        {
            icon: '⚙️',
            title: 'GolfBox-automatisering',
            description: 'Sømløs integrasjon og automatisering av GolfBox for effektiv drift.',
            link: '/products/golfbox',
            features: ['Auto-sync', 'Analytics', 'Live resultater']
        },
        {
            icon: '☁️',
            title: 'Google Workspace',
            description: 'Profesjonell digital arbeidsflate med e-post og samarbeid.',
            link: '/products/workspace',
            features: ['E-post @dinklubb.no', 'Google Drive', 'Meet & Calendar']
        },
        {
            icon: '🌐',
            title: 'ClubsiteCMS',
            description: 'Drift og integrasjoner for 45+ norske golfklubber.',
            link: '/products/clubsite',
            features: ['45+ klubber', 'Scangolf partner', 'Integrasjoner']
        },
        {
            icon: '📺',
            title: 'Digital skilting',
            description: 'Moderne løsninger for sanntidsoppdateringer på skjermer.',
            link: '/products/signage',
            features: ['Live tee-tider', 'Væroppdateringer', 'Sponsorannonser']
        },
        {
            icon: '🔌',
            title: 'API-utvikling',
            description: 'Skreddersydde API-er som kobler sammen systemer.',
            link: '#api-development',
            features: ['Custom APIs', 'System-integrasjon', 'Automatisering']
        },
        {
            icon: '🏆',
            title: 'Turneringsteknologi',
            description: 'Avanserte verktøy for turneringsadministrasjon.',
            link: '#tournament-tech',
            features: ['Live score', 'SoMe-publisering', 'Turneringsadmin']
        }
    ]

    return (
        <div className="app">
            <header className="header">
                <Navbar />
            </header>

            <section className="hero" style={{ minHeight: '50vh' }}>
                <div className="hero-content fade-in-up">
                    <h1>Våre <span className="text-gradient-green">Tjenester</span></h1>
                    <p style={{ fontSize: '1.2rem', color: 'var(--color-gray-light)', maxWidth: '700px', margin: '0 auto' }}>
                        GKIT leverer IT-drift, integrasjoner og teknologiutvikling for norske golfklubber. 
                        Vi tar ansvar for teknologien, slik at klubbens ansatte og frivillige kan bruke tiden på det som betyr mest.
                    </p>
                </div>
            </section>

            {/* Services Grid Overview */}
            <section className="container section-padding" style={{ background: 'var(--color-bg-dark)' }}>
                <div className="services-grid">
                    {services.map((service, index) => (
                        <div 
                            key={index} 
                            className="service-card card interactive-card fade-in" 
                            style={{ animationDelay: `${index * 0.1}s`, cursor: 'pointer' }}
                            onClick={() => window.location.href = service.link}
                        >
                            <div className="service-icon">{service.icon}</div>
                            <h3>{service.title}</h3>
                            <p>{service.description}</p>
                            <div className="card-hover-info">
                                <ul className="feature-chips">
                                    {service.features.map((feature, i) => (
                                        <li key={i}>{feature}</li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            <section className="container section-padding">

                {/* Service 1: GolfBox */}
                <div className="service-deep-dive fade-in">
                    <div className="service-content">
                        <div className="service-icon-large">⚙️</div>
                        <h2>GolfBox Automatisering & Integrasjon</h2>
                        <p className="lead">Få mer ut av systemet du bruker mest.</p>
                        <p>
                            Sømløs integrasjon og automatisering av klubbens GolfBox-system for effektiv drift. 
                            Vi kobler GolfBox med andre verktøy slik at man unngår dobbeltarbeid og sparer tid på 
                            håndtering av turneringsdata, starttider og resultater.
                        </p>
                        <ul className="feature-list">
                            <li><strong>Automatisk synkronisering:</strong> Hold medlemslister oppdatert i nyhetsbrevsystemer og regnskapssystemer helt automatisk.</li>
                            <li><strong>Live resultater:</strong> Vis live resultater og startlister på infoskjermer og nettsider med eget design.</li>
                            <li><strong>Betalingsintegrasjon:</strong> Koble GolfBox mot moderne betalingsløsninger som Nets Easy og Vipps.</li>
                            <li><strong>Custom Booking:</strong> Skreddersydde bookingløsninger for simulator, pro-timer og anlegg på toppen av GolfBox.</li>
                        </ul>
                        <Link to="/products/golfbox" className="btn btn-primary" style={{ marginTop: '1.5rem', display: 'inline-block' }}>
                            Les mer →
                        </Link>
                    </div>
                </div>

                <GraphicFiller index={1} style={{ margin: '4rem 0' }} />

                {/* Service 2: Digital Signage */}
                <div className="service-deep-dive fade-in">
                    <div className="service-content">
                        <div className="service-icon-large">📺</div>
                        <h2>Digital skilting og dataflyt</h2>
                        <p className="lead">Moderne løsninger for sanntidsoppdateringer på skjermer.</p>
                        <p>
                            Vi tilbyr Loftlogic Display, en webapp for sanntidsoppdaterte infoskjermer på anlegget. 
                            Dette gir medlemmer og gjester oppdatert informasjon (starttider, vær, kampanjer m.m.) 
                            på skjermer, helt automagisk.
                        </p>
                        <ul className="feature-list">
                            <li><strong>Sanntidsdata:</strong> Vis ledige starttider, dagens vær, banestatus og turneringsresultater live.</li>
                            <li><strong>Hardware-uavhengig:</strong> Bruk hvilken som helst Smart-TV eller skjerm med nettleser.</li>
                            <li><strong>Sponsorplass:</strong> Dedikerte soner for sponsorer gir en ny inntektskilde for klubben.</li>
                            <li><strong>Enkel administrasjon:</strong> Oppdater innholdet fra mobilen, uansett hvor du er.</li>
                        </ul>
                        <Link to="/products/signage" className="btn btn-primary" style={{ marginTop: '1.5rem', display: 'inline-block' }}>
                            Les mer →
                        </Link>
                    </div>
                </div>

                <GraphicFiller index={2} style={{ margin: '4rem 0' }} />

                {/* Service 3: Google Workspace */}
                <div className="service-deep-dive fade-in">
                    <div className="service-content">
                        <div className="service-icon-large">☁️</div>
                        <h2>Google Workspace for klubber</h2>
                        <p className="lead">Komplett oppsett og forvaltning skreddersydd for golfklubber.</p>
                        <p>
                            Vi sørger for profesjonell e-postdomene, delte kalendere og sikre filområder, 
                            slik at klubbens kommunikasjon og samarbeid flyter problemfritt mellom administrasjon og styre.
                        </p>
                        <ul className="feature-list">
                            <li><strong>Profesjonell e-post:</strong> E-postadresser med klubbens eget domene (@dinklubb.no).</li>
                            <li><strong>Sikkert samarbeid:</strong> Delte stasjoner for styre og administrasjon med kontrollert tilgang.</li>
                            <li><strong>Utrullingsverktøy:</strong> Vi bruker egne verktøy for rask og sikker utrulling av kontoer for nye klubber.</li>
                            <li><strong>Support:</strong> Norsk support for alle brukere i klubben.</li>
                        </ul>
                        <Link to="/products/workspace" className="btn btn-primary" style={{ marginTop: '1.5rem', display: 'inline-block' }}>
                            Les mer →
                        </Link>
                    </div>
                </div>

                <GraphicFiller index={3} style={{ margin: '4rem 0' }} />

                {/* Service 4: ClubsiteCMS */}
                <div className="service-deep-dive fade-in">
                    <div className="service-content">
                        <div className="service-icon-large">🌐</div>
                        <h2>ClubsiteCMS drift og integrasjoner</h2>
                        <p className="lead">Vi kjenner plattformen din.</p>
                        <p>
                            Drift av klubbens nettside gjennom ClubsiteCMS, Norges ledende golfplattform (benyttes av 45+ klubber). 
                            Vi integrerer klubbens webside med GolfBox og andre systemer, og tilpasser funksjonalitet etter klubbens behov 
                            – alt i partnerskap med Scangolf.
                        </p>
                        <ul className="feature-list">
                            <li><strong>Drift og Vedlikehold:</strong> Vi sørger for at nettsiden din alltid er oppdatert og fungerer i partnerskap med Scangolf.</li>
                            <li><strong>Sømløs integrasjon:</strong> Vi kobler nettsiden mot GolfBox, kalendere og andre systemer for automatisk oppdatering.</li>
                            <li><strong>Skreddersøm:</strong> Vi bygger tilpassede moduler og funksjonalitet som dekker klubbens unike behov.</li>
                            <li><strong>Support:</strong> Teknisk bistand og rådgivning for redaktører og administratorer.</li>
                        </ul>
                        <Link to="/products/clubsite" className="btn btn-primary" style={{ marginTop: '1.5rem', display: 'inline-block' }}>
                            Les mer →
                        </Link>
                    </div>
                </div>

            </section>

            <Footer />
        </div>
    )
}

export default Services
