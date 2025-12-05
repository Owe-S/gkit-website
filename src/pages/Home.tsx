import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import ContactForm from '../components/ContactForm'
import companyConfig from '../config/companyConfig'
import '../App.css'

function Home() {
    const [scrolled, setScrolled] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50)
        }
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])



    return (
        <div className="app">
            {/* Header */}
            <header className={`header ${scrolled ? 'scrolled' : ''}`}>
                <Navbar />
            </header>

            {/* Hero Section */}
            <section className="hero" id="hjem" style={{ minHeight: '85vh' }}>
                <div className="hero-content fade-in-up">
                    <h1>
                        <span className="text-gradient-green">Stabil drift.</span><br />
                        <span className="text-gradient-green">Smarte systemer.</span><br />
                        Golfklubbens IT-partner.
                    </h1>
                    <p style={{ fontSize: '1.3rem', color: 'var(--color-gray-light)', maxWidth: '700px', margin: '2rem auto' }}>
                        Vi tar ansvar for teknologien, slik at dere kan bruke tiden på klubben, banen og medlemmene.
                    </p>
                    <div className="hero-cta" style={{ marginTop: '3rem', display: 'flex', gap: '1.5rem', justifyContent: 'center', flexWrap: 'wrap' }}>
                        <Link to="/services" className="btn btn-primary" style={{ fontSize: '1.1rem', padding: '1rem 2rem' }}>
                            Se våre tjenester →
                        </Link>
                        <Link to="/projects" className="btn btn-secondary" style={{ fontSize: '1.1rem', padding: '1rem 2rem' }}>
                            Utforsk prosjekter
                        </Link>
                    </div>
                </div>
            </section>

            {/* Quick Links Section */}
            <section className="services" style={{ background: 'var(--color-bg-dark)', padding: '4rem 0' }}>
                <div className="container">
                    <div className="section-title fade-in" style={{ marginBottom: '3rem' }}>
                        <h2>Hva kan vi <span className="text-gradient-green">løse for dere?</span></h2>
                        <p style={{ color: 'var(--color-gray-light)', maxWidth: '700px', margin: '1rem auto 0' }}>
                            Fra automatisering av kjedelige oppgaver til nye inntektsstrømmer via digitale flater.
                        </p>
                    </div>
                    <div className="services-grid">
                        <div className="service-card card fade-in" onClick={() => window.location.href = '/products/golfbox'}>
                            <div className="service-icon">⚙️</div>
                            <h3>GolfBox-automatisering</h3>
                            <p>Sømløs integrasjon og automatisering for effektiv drift.</p>
                        </div>
                        <div className="service-card card fade-in" onClick={() => window.location.href = '/products/workspace'}>
                            <div className="service-icon">☁️</div>
                            <h3>Google Workspace</h3>
                            <p>Profesjonell digital arbeidsflate for klubber.</p>
                        </div>
                        <div className="service-card card fade-in" onClick={() => window.location.href = '/products/clubsite'}>
                            <div className="service-icon">🌐</div>
                            <h3>ClubsiteCMS</h3>
                            <p>Drift og integrasjoner for 45+ norske klubber.</p>
                        </div>
                        <div className="service-card card fade-in" onClick={() => window.location.href = '/products/signage'}>
                            <div className="service-icon">📺</div>
                            <h3>Digital skilting</h3>
                            <p>Moderne løsninger for sanntidsoppdateringer.</p>
                        </div>
                    </div>
                    <div style={{ textAlign: 'center', marginTop: '3rem' }}>
                        <Link to="/services" className="btn btn-secondary">
                            Se alle tjenester →
                        </Link>
                    </div>
                </div>
            </section>

            {/* Value Proposition Section */}
            <section className="about" style={{ padding: '4rem 0' }}>
                <div className="container">
                    <div className="about-content">
                        <div className="section-title fade-in">
                            <h2>Hvorfor <span className="text-gradient-green">Golfklubbens IT?</span></h2>
                        </div>
                        <p style={{ fontSize: '1.2rem', color: 'var(--color-gray-light)', textAlign: 'center', maxWidth: '800px', margin: '0 auto 2rem' }}>
                            Vi er spesialisert IT-partner for norske golfklubber med dyp erfaring innen bransjen.
                        </p>
                        <div style={{ textAlign: 'center', marginTop: '2rem' }}>
                            <Link to="/about" className="btn btn-secondary">
                                Les mer om oss →
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* Contact Section */}
            <section className="contact" id="kontakt" style={{ background: 'var(--color-bg-dark)', padding: '4rem 0' }}>
                <div className="container">
                    <div className="section-title fade-in" style={{ marginBottom: '3rem' }}>
                        <h2>Klar til å komme <span className="text-gradient-green">i gang?</span></h2>
                        <p style={{ color: 'var(--color-gray-light)', maxWidth: '600px', margin: '0 auto' }}>
                            La oss snakke om hvordan vi kan hjelpe din klubb med teknologi og automatisering.
                        </p>
                    </div>
                    <div style={{ maxWidth: '700px', margin: '0 auto' }}>
                        <ContactForm />
                        <div className="contact-info" style={{ flexDirection: 'row', justifyContent: 'center', marginTop: '3rem', fontSize: '0.9rem' }}>
                            <div style={{ opacity: 0.7 }}>
                                <p>Eller send e-post direkte:</p>
                                <a href={`mailto:${companyConfig.email}`} style={{ color: 'var(--color-gkit-green)' }}>{companyConfig.email}</a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <Footer />
        </div>
    )
}

export default Home
