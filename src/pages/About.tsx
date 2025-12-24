import Navbar from '../components/Navbar'
import GraphicFiller from '../components/GraphicFiller'
import Footer from '../components/Footer'
import '../App.css'

const About = () => {
    return (
        <div className="app">
            <header className="header">
                <Navbar />
            </header>

            <section className="hero" style={{ minHeight: '60vh' }}>
                <div className="hero-content fade-in-up">
                    <h1>Om <span className="text-gradient-green">Golfklubbens IT</span></h1>
                    <p style={{ fontSize: '1.5rem', color: 'var(--color-gray-light)', maxWidth: '800px', margin: '0 auto' }}>
                        Vi er bindeleddet mellom golfen og teknologien.
                    </p>
                </div>
            </section>

            <section className="container section-padding">
                <div className="fade-in">
                    <h2 style={{ marginBottom: '2rem' }}>Hvem er vi?</h2>
                    <p style={{ fontSize: '1.2rem', lineHeight: '1.8', marginBottom: '2rem' }}>
                        Golfklubbens IT ble etablert med en enkel visjon: Å profesjonalisere IT-hverdagen til norske golfklubber.
                        Vi så at mange klubber satt på enorme mengder data og gode systemer, men manglet tid og kompetanse
                        til å få dem til å snakke sammen.
                    </p>
                    <p style={{ fontSize: '1.2rem', lineHeight: '1.8', marginBottom: '2rem' }}>
                        Vi er ikke bare utviklere; vi er golfere. Vi forstår utfordringene med starttider som ikke synker,
                        frivillige som ikke får tilgang til e-post, og nettsider som er vanskelige å oppdatere.
                        Derfor bygger vi løsninger som løser faktiske problemer.
                    </p>

                    <div style={{ marginTop: '4rem' }}>
                        <h2>Hvorfor velge <span className="text-gradient-green">Golfklubbens IT?</span></h2>
                        <ul className="why-list" style={{ maxWidth: '800px', margin: '2rem auto', textAlign: 'left' }}>
                            <li style={{ padding: '1.5rem', marginBottom: '1rem', background: 'rgba(76, 175, 80, 0.05)', borderLeft: '4px solid var(--color-gkit-green)', borderRadius: '8px' }}>
                                <strong>Spisskompetanse på norske golfklubber</strong> – Vi kjenner bransjen innenfra og vet hva som fungerer for norske klubber.
                            </li>
                            <li style={{ padding: '1.5rem', marginBottom: '1rem', background: 'rgba(76, 175, 80, 0.05)', borderLeft: '4px solid var(--color-gkit-green)', borderRadius: '8px' }}>
                                <strong>Dyp erfaring med tekniske systemer</strong> – GolfBox, ClubsiteCMS, Google Workspace – vi har jobbet med dem alle i mange år.
                            </li>
                            <li style={{ padding: '1.5rem', marginBottom: '1rem', background: 'rgba(76, 175, 80, 0.05)', borderLeft: '4px solid var(--color-gkit-green)', borderRadius: '8px' }}>
                                <strong>Profesjonell drift og leveransekvalitet</strong> – Vi tar ansvar for at systemene fungerer, slik at dere kan fokusere på banen.
                            </li>
                            <li style={{ padding: '1.5rem', marginBottom: '1rem', background: 'rgba(76, 175, 80, 0.05)', borderLeft: '4px solid var(--color-gkit-green)', borderRadius: '8px' }}>
                                <strong>Effektive automasjoner</strong> – Vi sparer klubber tid og penger ved å automatisere kjedelige og manuelle oppgaver.
                            </li>
                            <li style={{ padding: '1.5rem', marginBottom: '1rem', background: 'rgba(76, 175, 80, 0.05)', borderLeft: '4px solid var(--color-gkit-green)', borderRadius: '8px' }}>
                                <strong>Strategisk partner</strong> – Vi er ikke bare en leverandør, men en partner som hjelper dere å nå deres mål.
                            </li>
                        </ul>
                    </div>

                    <GraphicFiller index={0} />

                    <div style={{ marginTop: '4rem' }}>
                        <h2>Våre Partnere & Plattformkompetanse</h2>
                        <p style={{ marginBottom: '2rem' }}>Vi jobber tett med de ledende aktørene i bransjen for å sikre at våre løsninger alltid spiller på lag med systemene dere allerede har.</p>

                        <div className="partners-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '2rem', alignItems: 'center', textAlign: 'center' }}>
                            <div className="partner-card glass" style={{ padding: '2rem' }}>
                                <h3 style={{ color: '#fff' }}>GolfBox</h3>
                                <p style={{ fontSize: '0.9rem', color: '#aaa' }}>Integrasjonseksperter</p>
                            </div>
                            <div className="partner-card glass" style={{ padding: '2rem' }}>
                                <h3 style={{ color: '#4285F4' }}>Google</h3>
                                <p style={{ fontSize: '0.9rem', color: '#aaa' }}>Workspace Partner</p>
                            </div>
                            <div className="partner-card glass" style={{ padding: '2rem' }}>
                                <h3 style={{ color: '#fff' }}>ClubsiteCMS</h3>
                                <p style={{ fontSize: '0.9rem', color: '#aaa' }}>Sertifisert Utvikler</p>
                            </div>
                            <div className="partner-card glass" style={{ padding: '2rem' }}>
                                <h3 style={{ color: 'var(--color-gkit-green)' }}>NextJS / React</h3>
                                <p style={{ fontSize: '0.9rem', color: '#aaa' }}>Moderne Webteknologi</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    )
}

export default About
