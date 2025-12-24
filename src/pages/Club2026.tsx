import { useEffect } from 'react'
import Footer from '../components/Footer'
import '../App.css'

function Club2026() {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return (
        <div className="app">
            {/* Header - Simplified for Landing Page */}
            <header className="header" style={{ background: 'rgba(26, 26, 26, 0.95)' }}>
                <nav className="nav container">
                    <div className="logo">
                        <img src="/logo.png" alt="GKIT Logo" style={{ height: '40px', width: 'auto' }} />
                    </div>
                    <ul className="nav-links">
                        <li><a href="/" style={{ color: 'var(--color-gray-light)' }}>← Tilbake til GKIT.no</a></li>
                    </ul>
                </nav>
            </header>

            {/* Hero Section */}
            <section className="hero" style={{ minHeight: '80vh', paddingTop: '120px' }}>
                <div className="hero-content fade-in-up">
                    <span style={{
                        background: 'rgba(255, 212, 59, 0.1)',
                        color: 'var(--color-gkit-green)',
                        padding: '0.5rem 1rem',
                        borderRadius: '2rem',
                        fontWeight: '600',
                        fontSize: '0.875rem',
                        marginBottom: '1.5rem',
                        display: 'inline-block',
                        border: '1px solid rgba(255, 212, 59, 0.3)'
                    }}>
                        EXCLUSIVE COMMUNITY
                    </span>
                    <h1 style={{ fontSize: '3.5rem', marginBottom: '1.5rem' }}>
                        Golf isn't changing.<br />
                        <span className="text-gradient-green">The way we run it is.</span>
                    </h1>
                    <p style={{ fontSize: '1.25rem', maxWidth: '800px', margin: '0 auto 2rem' }}>
                        Join <strong>The 2026 Club</strong>. An exclusive community for Golf Club Managers who are building the future, today.
                    </p>
                    <div className="hero-cta">
                        <a
                            href="https://docs.google.com/forms/d/e/1FAIpQLSfPlaceholder/viewform"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn btn-primary"
                            style={{ fontSize: '1.25rem', padding: '1rem 2.5rem', textDecoration: 'none', display: 'inline-block' }}
                        >
                            Apply for Access
                        </a>
                    </div>
                </div>
            </section>

            {/* 🍌 Nano Banana Injection: Manifesto Video Section */}
            <section style={{ padding: '0 0 4rem', background: 'linear-gradient(to bottom, var(--color-bg-dark), #111)' }}>
                <div className="container">
                    <div className="video-wrapper" style={{
                        position: 'relative',
                        paddingBottom: '56.25%', /* 16:9 Aspect Ratio */
                        height: 0,
                        background: '#000',
                        borderRadius: '20px',
                        overflow: 'hidden',
                        boxShadow: '0 20px 50px rgba(76, 175, 80, 0.2)',
                        border: '1px solid rgba(255, 255, 255, 0.1)'
                    }}>
                        <div style={{
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            width: '100%',
                            height: '100%',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            flexDirection: 'column'
                        }}>
                            <span style={{ fontSize: '4rem', marginBottom: '1rem' }}>▶️</span>
                            <h3 style={{ color: 'white', marginBottom: '0.5rem' }}>Watch the Manifesto</h3>
                            <p style={{ color: 'var(--color-gray-medium)' }}>The Vision for 2026 (0:45)</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* The 3 Pillars */}
            <section className="services" style={{ background: 'var(--color-bg-dark)' }}>
                <div className="container">
                    <div className="section-title fade-in">
                        <h2>The 3 Pillars of <span className="text-gradient-green">2026</span></h2>
                    </div>
                    <div className="services-grid">
                        <div className="service-card card">
                            <div className="service-icon">👻</div>
                            <h3>The Invisible Admin</h3>
                            <p>No more manual data entry. No more paper lists. Systems talk to systems automatically.</p>
                        </div>
                        <div className="service-card card">
                            <div className="service-icon">🌊</div>
                            <h3>The Member-First Flow</h3>
                            <p>Booking, paying, and playing is as easy as ordering an Uber. Frictionless experiences.</p>
                        </div>
                        <div className="service-card card">
                            <div className="service-icon">📊</div>
                            <h3>Data-Driven Decisions</h3>
                            <p>We don't guess. We know. Track revenue vs weather, member churn, and real utilization.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* The Proof */}
            <section className="about">
                <div className="container">
                    <div className="about-content">
                        <div className="section-title fade-in">
                            <h2>We don't just talk. <span className="text-gradient-green">We do.</span></h2>
                        </div>
                        <div className="card" style={{ padding: '2rem', marginTop: '2rem', borderLeft: '4px solid var(--color-gkit-green)' }}>
                            <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>The Ski GK Blueprint</h3>
                            <p style={{ fontSize: '1.125rem', color: 'var(--color-gray-light)', marginBottom: '1.5rem' }}>
                                "Look at Ski Golfklubb. They saved 200 admin hours in one season. They automated their golf cart fleet.
                                They moved their entire office to the cloud. This isn't sci-fi. It's standard operating procedure for The 2026 Club."
                            </p>
                            <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
                                <div style={{
                                    width: '60px',
                                    height: '60px',
                                    borderRadius: '50%',
                                    background: '#333',
                                    overflow: 'hidden',
                                    border: '2px solid var(--color-gkit-green)',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    fontSize: '1.5rem'
                                }}>
                                    🏌️
                                </div>
                                <div>
                                    <p style={{ fontWeight: '700', marginBottom: '0', fontSize: '1.1rem' }}>GKIT Team</p>
                                    <p style={{ fontSize: '0.875rem', color: 'var(--color-gkit-green)' }}>Golfklubb IT ENK</p>
                                </div>
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

export default Club2026
