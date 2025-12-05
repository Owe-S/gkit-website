import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'
import GraphicFiller from '../components/GraphicFiller'
import Footer from '../components/Footer'
import '../App.css'

const Services = () => {
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
                        Vi leverer ikke bare programvare – vi leverer en enklere hverdag.
                        Fra automatisering av GolfBox til komplette driftsløsninger.
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
                            GolfBox er hjertet i norske golfklubber, men mange bruker mye tid på manuelle prosesser.
                            Golfklubbens IT er eksperter på GolfBox-APIet og kan automatisere dataflyten din.
                        </p>
                        <ul className="feature-list">
                            <li><strong>Automatisk synkronisering:</strong> Hold medlemslister oppdatert i nyhetsbrevsystemer (MailChimp, etc.) og regnskapssystemer helt automatisk.</li>
                            <li><strong>Starttids-analyser:</strong> Få skreddersydde rapporter på belegg, no-show og bookingmønstre som GolfBox ikke gir deg standard.</li>
                            <li><strong>Turneringsvisning:</strong> Vis live resultater og startlister på infoskjermer og nettsider med eget design, uten iframes som knekker.</li>
                            <li><strong>Custom Booking:</strong> Trenger du egne regler for booking av simulator eller pro-timer? Vi bygger skreddersydde bookingløsninger på toppen av GolfBox.</li>
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
                        <h2>Digital Skilting / Infoskjermer</h2>
                        <p className="lead">Kommuniser med medlemmene der de er.</p>
                        <p>
                            Glem USB-pinner og manuelle oppdateringer. Vår løsning for infoskjermer er skybasert,
                            alltid oppdatert, og krever ingen dyr hardware.
                        </p>
                        <ul className="feature-list">
                            <li><strong>Hardware-uavhengig:</strong> Bruk hvilken som helst Smart-TV eller skjerm med nettleser. Ingen dyre bokser nødvendig.</li>
                            <li><strong>Sanntidsdata:</strong> Vis ledige starttider, dagens vær, banestatus (åpen/stengt) og turneringsresultater live.</li>
                            <li><strong>Enkel administrasjon:</strong> Oppdater innholdet fra mobilen, uansett hvor du er.</li>
                            <li><strong>Sponsorplass:</strong> Dedikerte soner for sponsorer gir en ny inntektskilde for klubben.</li>
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
                        <h2>Google Workspace for Golfklubber</h2>
                        <p className="lead">En proff digital arbeidsplass for administrasjon og styre.</p>
                        <p>
                            Mange klubber sliter med blanding av private e-poster, mistede dokumenter ved styrebytter,
                            og dårlig datasikkerhet. Vi setter opp og drifter en profesjonell Google Workspace-løsning.
                        </p>
                        <ul className="feature-list">
                            <li><strong>Profesjonell E-post:</strong> `post@dinklubb.no` og personlige adresser til ansatte. Ser proft ut, og sikrer at e-posten kommer frem.</li>
                            <li><strong>Felles Disk (Shared Drives):</strong> Sikre at dokumenter eies av klubben, ikke privatpersoner. Gjør overganger i styret sømløse.</li>
                            <li><strong>Samhandling:</strong> Bruk Google Meet, Chat og Kalender for effektiv kommunikasjon mellom administrasjon, pro, greenkeepere og styret.</li>
                            <li><strong>Sikkerhet:</strong> Vi setter opp 2-faktor autentisering og sikkerhetsregler så klubbens data er trygge.</li>
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
                        <h2>ClubsiteCMS & Webutvikling</h2>
                        <p className="lead">Vi kjenner plattformen din.</p>
                        <p>
                            Som sertifisert partner på ClubsiteCMS hjelper vi deg å utnytte plattformen maksimalt.
                            Vi bygger også moderne tilleggsapplikasjoner som integreres sømløst.
                        </p>
                        <ul className="feature-list">
                            <li><strong>Drift og Vedlikehold:</strong> Vi sørger for at nettsiden din alltid er oppdatert og fungerer.</li>
                            <li><strong>Innholdsproduksjon:</strong> Vi hjelper med tekst og bilder som selger klubben.</li>
                            <li><strong>Skreddersøm:</strong> Trenger du en funksjon Clubsite ikke har? Vi bygger den som en "widget" og integrerer den.</li>
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
