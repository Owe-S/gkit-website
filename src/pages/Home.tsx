import { useEffect, useState, useRef } from 'react'
import { Link } from 'react-router-dom'
import '../styles/wireframe-light.css'
import { homeContent as localHomeContent } from '../config/homeContent'
import { db } from '../firebase'
import { doc, getDoc } from 'firebase/firestore'
import SEOMeta from '../components/SEOMeta'
import { organizationSchema, serviceSchema } from '../utils/seoSchemas'

function Home() {
    const [activeIndex, setActiveIndex] = useState(0)
    const [contactForm, setContactForm] = useState({ name: '', email: '', message: '' })
    const [content, setContent] = useState(localHomeContent)
    const scrollContainerRef = useRef(null)

    useEffect(() => {
        document.documentElement.style.backgroundColor = '#FFFFFF'
        document.body.style.backgroundColor = '#FFFFFF'

        // Fetch dynamic content from Firestore
        const fetchContent = async () => {
            try {
                const docRef = doc(db, 'content', 'home');
                const docSnap = await getDoc(docRef);
                if (docSnap.exists()) {
                    setContent(docSnap.data() as typeof localHomeContent);
                }
            } catch (error) {
                console.error("Error fetching remote content, using local fallback:", error);
            }
        };
        fetchContent();
    }, [])

    const handleScroll = (e) => {
        const container = e.target
        const cardWidth = window.innerWidth
        const scrollLeft = container.scrollLeft
        const newIndex = Math.round(scrollLeft / cardWidth)
        setActiveIndex(newIndex)
    }

    const scrollToCard = (index) => {
        if (scrollContainerRef.current) {
            const cardWidth = window.innerWidth
            scrollContainerRef.current.scrollTo({
                left: index * cardWidth,
                behavior: 'smooth'
            })
        }
    }

    const handleContactSubmit = (e) => {
        e.preventDefault()
        console.log('Henvendelse:', contactForm)
        alert(`Takk, ${contactForm.name}! Vi kontakter deg på ${contactForm.email}`)
        setContactForm({ name: '', email: '', message: '' })
    }

    return (
        <div style={{ backgroundColor: '#FFFFFF', color: '#111827', fontFamily: 'Inter, Arial, sans-serif', minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
            <SEOMeta
                title="Golfklubbens IT"
                description="Din partner for digital modernisering av norske golfklubber. Vi leverer GolfBox automatisering, Google Workspace, ClubsiteCMS, og smarte digitale løsninger."
                keywords="golfklubb, IT løsninger, GolfBox, Workspace, ClubsiteCMS, digitalisering, golf system"
                url="https://golfklubb-it-website.web.app/"
                schema={organizationSchema}
            />
            <style>{`
                * { margin: 0; padding: 0; box-sizing: border-box; }
                html, body { background-color: #FFFFFF !important; color: #111827 !important; }
                body { font-family: Inter, Arial, sans-serif; }
                a { color: #4CAF50; text-decoration: none; transition: color 0.2s; }
                a:hover { color: #388E3C; text-decoration: underline; }
                button { transition: all 0.2s; }
                button:hover { transform: translateY(-2px); box-shadow: 0 6px 16px rgba(76,175,80,0.3) !important; }
                input, textarea { font-family: Inter, Arial, sans-serif; }
                .card-stack-container {
                    flex: 1;
                    width: 100vw;
                    overflow-x: auto;
                    overflow-y: hidden;
                    scroll-snap-type: x mandatory;
                    scroll-behavior: smooth;
                }
                .card-stack-container::-webkit-scrollbar { display: none; }
                .card-slide {
                    width: 100vw;
                    min-height: 100vh;
                    flex-shrink: 0;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    justify-content: center;
                    padding: 4rem 2rem;
                    scroll-snap-align: start;
                    overflow-y: auto;
                }
                .header {
                    position: sticky;
                    top: 0;
                    z-index: 100;
                    background: #FFFFFF;
                    border-bottom: 1px solid #E5E7EB;
                    padding: 1rem 2rem;
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    box-shadow: 0 1px 3px rgba(0,0,0,0.05);
                }
                .footer {
                    background: #111827;
                    color: #FFFFFF;
                    padding: 3rem 2rem 1rem;
                    margin-top: 2rem;
                    border-top: 1px solid #E5E7EB;
                }
                .footer a { color: #FFFFFF; }
                .footer a:hover { color: #4CAF50; }

                /* Mobile Adjustments */
                @media (max-width: 768px) {
                    .card-slide { padding: 2rem 1rem; justify-content: flex-start; }
                    .header { padding: 0.75rem 1rem; flex-direction: column; gap: 0.75rem; }
                    .header-nav { gap: 1rem !important; }
                    .hero-grid { grid-template-columns: 1fr !important; gap: 2rem !important; text-align: center; }
                    .hero-title { font-size: 2.25rem !important; }
                    .hero-desc { margin-right: 0 !important; font-size: 1rem !important; }
                    .hero-buttons { justify-content: center; flex-direction: column; }
                    .hero-stats { justify-content: center; flex-direction: column; gap: 0.5rem !important; }
                    .hero-image { min-height: 250px !important; font-size: 3rem !important; }
                    .grid-2col { grid-template-columns: 1fr !important; }
                    .grid-3col { grid-template-columns: 1fr !important; }
                    .footer-grid { grid-template-columns: 1fr 1fr !important; gap: 2rem !important; }
                    .footer-bottom { flex-direction: column; gap: 1rem; text-align: center; }
                    .section-title { font-size: 1.75rem !important; }
                    .section-desc { font-size: 1rem !important; margin-bottom: 2rem !important; }
                }
            `}</style>

            {/* HEADER */}
            <div className="header">
                <div style={{ fontSize: '1.5rem', fontWeight: '700', color: '#4CAF50' }}>Golfklubbens IT</div>
                <div className="header-nav" style={{ display: 'flex', gap: '2rem', alignItems: 'center' }}>
                    <button onClick={() => scrollToCard(0)} style={{ background: 'none', border: 'none', cursor: 'pointer', color: '#4CAF50', fontWeight: '600', fontSize: '0.9rem' }}>Hjem</button>
                    <button onClick={() => scrollToCard(2)} style={{ background: 'none', border: 'none', cursor: 'pointer', color: '#111827', fontWeight: '600', fontSize: '0.9rem' }}>Løsninger</button>
                    <button onClick={() => scrollToCard(3)} style={{ background: 'none', border: 'none', cursor: 'pointer', color: '#111827', fontWeight: '600', fontSize: '0.9rem' }}>Apper</button>
                    <button onClick={() => scrollToCard(4)} style={{ padding: '0.5rem 1rem', backgroundColor: '#4CAF50', color: '#FFFFFF', borderRadius: '0.5rem', border: 'none', cursor: 'pointer', fontWeight: '600', fontSize: '0.9rem' }}>Kontakt</button>
                </div>
            </div>

            {/* MAIN CARD STACK CONTAINER */}
            <div
                ref={scrollContainerRef}
                className="card-stack-container"
                onScroll={handleScroll}
                style={{ display: 'flex', flex: 1 }}
            >
                {/* CARD 1: HERO - ENGAGING */}
                <div className="card-slide" style={{ backgroundColor: '#FFFFFF' }}>
                    <div className="hero-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '3rem', alignItems: 'center', maxWidth: '72rem', width: '100%' }}>
                        <div>
                            <p style={{ fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.25em', marginBottom: '1rem', color: '#4CAF50', fontWeight: '700' }}>{content.hero.tagline}</p>
                            <h1 className="hero-title" style={{ fontSize: '3.5rem', fontWeight: '800', marginBottom: '1.5rem', lineHeight: 1.1, color: '#111827' }}>
                                {content.hero.title}
                            </h1>
                            <p className="hero-desc" style={{ fontSize: '1.125rem', marginBottom: '2rem', color: '#333333', lineHeight: 1.8, marginRight: '2rem' }}>
                                {content.hero.description}
                            </p>
                            <div className="hero-buttons" style={{ display: 'flex', gap: '1rem', marginBottom: '2rem' }}>
                                <button onClick={() => scrollToCard(4)} style={{ padding: '0.75rem 2rem', backgroundColor: '#4CAF50', color: '#FFFFFF', borderRadius: '0.5rem', border: 'none', fontSize: '1rem', fontWeight: '600', cursor: 'pointer', boxShadow: '0 4px 12px rgba(76,175,80,0.2)' }}>
                                    {content.hero.primaryCta}
                                </button>
                                <button onClick={() => scrollToCard(3)} style={{ padding: '0.75rem 2rem', backgroundColor: '#FFFFFF', color: '#4CAF50', borderRadius: '0.5rem', border: '2px solid #4CAF50', fontSize: '1rem', fontWeight: '600', cursor: 'pointer' }}>
                                    {content.hero.secondaryCta}
                                </button>
                            </div>
                            <div className="hero-stats" style={{ display: 'flex', gap: '2rem', fontSize: '0.9rem', color: '#333333', fontWeight: '500' }}>
                                {content.hero.stats.map((stat, i) => <div key={i}>{stat}</div>)}
                            </div>
                        </div>
                        <div className="hero-image" style={{ background: 'linear-gradient(135deg, #4CAF50 0%, #388E3C 100%)', borderRadius: '1rem', padding: '3rem', display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: '400px', color: '#FFFFFF', fontSize: '4rem' }}>
                            ⛳
                        </div>
                    </div>
                    <div style={{ position: 'absolute', bottom: '1rem', left: '50%', transform: 'translateX(-50%)', fontSize: '0.75rem', color: '#4CAF50', opacity: 0.6, fontWeight: '500' }}>
                        ← Bla for mer →
                    </div>
                </div>

                {/* CARD 2: PROBLEMS WITH LINKS */}
                <div className="card-slide" style={{ backgroundColor: '#FFFFFF' }}>
                    <div style={{ maxWidth: '56rem', width: '100%' }}>
                        <h2 className="section-title" style={{ fontSize: '2.5rem', fontWeight: '800', color: '#111827', marginBottom: '1rem', textAlign: 'center' }}>
                            {content.challenges.title}
                        </h2>
                        <p className="section-desc" style={{ fontSize: '1.125rem', color: '#333333', marginBottom: '3rem', textAlign: 'center', maxWidth: '42rem', margin: '0 auto 3rem' }}>
                            {content.challenges.description}
                        </p>
                        <div className="grid-2col" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem', marginBottom: '3rem' }}>
                            {content.challenges.items.map((item, i) => (
                                <div key={i} style={{ padding: '1.5rem', borderRadius: '0.75rem', backgroundColor: '#F5F5F5', borderLeft: '4px solid #4CAF50' }}>
                                    <h3 style={{ fontWeight: '700', marginBottom: '0.5rem', color: '#111827' }}>{item.title}</h3>
                                    <p style={{ fontSize: '0.9rem', color: '#333333', marginBottom: '1rem' }}>{item.desc}</p>
                                    <a href={item.link} style={{ fontSize: '0.85rem', fontWeight: '600' }}>{item.linkText}</a>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* CARD 3: SOLUTION SYMMETRIC 2x2 */}
                <div className="card-slide" style={{ backgroundColor: '#FFFFFF' }}>
                    <div style={{ maxWidth: '56rem', width: '100%' }}>
                        <h2 className="section-title" style={{ fontSize: '2.5rem', fontWeight: '800', color: '#111827', marginBottom: '1rem', textAlign: 'center' }}>
                            {content.solutions.title}
                        </h2>
                        <p className="section-desc" style={{ fontSize: '1.125rem', color: '#333333', marginBottom: '3rem', textAlign: 'center' }}>
                            {content.solutions.description}
                        </p>
                        <div className="grid-2col" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem' }}>
                            {content.solutions.items.map((item, i) => (
                                <div key={i} style={{ padding: '2rem', borderRadius: '0.75rem', border: '2px solid #4CAF50', backgroundColor: '#FFFFFF', textAlign: 'center' }}>
                                    <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>{item.icon}</div>
                                    <h3 style={{ fontSize: '1.1rem', fontWeight: '700', color: '#111827', marginBottom: '0.75rem' }}>{item.title}</h3>
                                    <p style={{ fontSize: '0.95rem', color: '#333333', marginBottom: '1.5rem', lineHeight: 1.6 }}>{item.desc}</p>
                                    <Link to={item.link} style={{ fontSize: '0.9rem', fontWeight: '600' }}>Les mer →</Link>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* CARD 4: LIVE APPS WITH LINKS SYMMETRIC */}
                <div className="card-slide" style={{ backgroundColor: '#FFFFFF' }}>
                    <div style={{ maxWidth: '60rem', width: '100%' }}>
                        <h2 className="section-title" style={{ fontSize: '2.5rem', fontWeight: '800', color: '#111827', marginBottom: '1rem', textAlign: 'center' }}>
                            {content.apps.title}
                        </h2>
                        <p className="section-desc" style={{ fontSize: '1.125rem', color: '#333333', marginBottom: '3rem', textAlign: 'center' }}>
                            {content.apps.description}
                        </p>
                        <div className="grid-3col" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1.5rem', marginBottom: '2rem' }}>
                            {content.apps.items.map((app, idx) => (
                                <Link key={idx} to={app.url} style={{ textDecoration: 'none' }}>
                                    <div style={{ padding: '1.5rem', borderRadius: '0.75rem', border: '1px solid #CCCCCC', backgroundColor: '#F5F5F5', textAlign: 'center', height: '100%', transition: 'all 0.2s', cursor: 'pointer' }} onMouseEnter={(e) => e.currentTarget.style.borderColor = '#4CAF50'} onMouseLeave={(e) => e.currentTarget.style.borderColor = '#CCCCCC'}>
                                        <div style={{ fontSize: '2.5rem', marginBottom: '0.5rem' }}>{app.icon}</div>
                                        <h3 style={{ fontSize: '0.9rem', fontWeight: '700', color: '#111827', marginBottom: '0.25rem' }}>{app.name}</h3>
                                        <p style={{ fontSize: '0.75rem', color: '#4CAF50', fontWeight: '600', marginBottom: '0.5rem' }}>{app.status}</p>
                                        <p style={{ fontSize: '0.8rem', color: '#333333' }}>{app.desc}</p>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>

                {/* CARD 5: BENEFITS + CONTACT FORM */}
                <div className="card-slide" style={{ backgroundColor: '#FFFFFF' }}>
                    <div style={{ maxWidth: '56rem', width: '100%' }}>
                        <h2 className="section-title" style={{ fontSize: '2.5rem', fontWeight: '800', color: '#111827', marginBottom: '1rem', textAlign: 'center' }}>
                            {content.benefits.title}
                        </h2>
                        <p className="section-desc" style={{ fontSize: '1.125rem', color: '#333333', marginBottom: '2rem', textAlign: 'center' }}>
                            {content.benefits.description}
                        </p>
                        <div className="grid-2col" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem', marginBottom: '3rem' }}>
                            {content.benefits.items.map((benefit, idx) => (
                                <div key={idx} style={{ padding: '1.5rem', borderRadius: '0.75rem', border: '2px solid #4CAF50', backgroundColor: '#FFFFFF' }}>
                                    <div style={{ fontSize: '2.5rem', marginBottom: '0.75rem' }}>{benefit.icon}</div>
                                    <h3 style={{ fontSize: '1rem', fontWeight: '700', color: '#111827', marginBottom: '0.5rem' }}>{benefit.title}</h3>
                                    <p style={{ fontSize: '0.9rem', color: '#333333' }}>{benefit.desc}</p>
                                </div>
                            ))}
                        </div>

                        <div style={{ backgroundColor: '#F1F8E9', padding: '2.5rem', borderRadius: '1rem', border: '2px solid #4CAF50' }}>
                            <h3 style={{ fontSize: '1.3rem', fontWeight: '700', color: '#111827', marginBottom: '1.5rem', textAlign: 'center' }}>Bestill Din Gratis Demo</h3>
                            <form onSubmit={handleContactSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                                <input
                                    type="text"
                                    placeholder="Ditt Navn"
                                    value={contactForm.name}
                                    onChange={(e) => setContactForm({...contactForm, name: e.target.value})}
                                    required
                                    style={{ padding: '0.75rem 1rem', borderRadius: '0.5rem', border: '1px solid #CCCCCC', fontSize: '0.95rem', color: '#111827' }}
                                />
                                <input
                                    type="email"
                                    placeholder="E-postadresse"
                                    value={contactForm.email}
                                    onChange={(e) => setContactForm({...contactForm, email: e.target.value})}
                                    required
                                    style={{ padding: '0.75rem 1rem', borderRadius: '0.5rem', border: '1px solid #CCCCCC', fontSize: '0.95rem', color: '#111827' }}
                                />
                                <textarea
                                    placeholder="Spørsmål eller spesielle behov?"
                                    value={contactForm.message}
                                    onChange={(e) => setContactForm({...contactForm, message: e.target.value})}
                                    rows="3"
                                    style={{ padding: '0.75rem 1rem', borderRadius: '0.5rem', border: '1px solid #CCCCCC', fontSize: '0.95rem', color: '#111827', fontFamily: 'Inter, Arial, sans-serif' }}
                                />
                                <button
                                    type="submit"
                                    style={{ padding: '0.75rem 2rem', backgroundColor: '#4CAF50', color: '#FFFFFF', borderRadius: '0.5rem', border: 'none', fontSize: '1rem', fontWeight: '600', cursor: 'pointer', boxShadow: '0 4px 12px rgba(76,175,80,0.2)' }}
                                >
                                    Send Henvendelse
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>

            {/* NAVIGATION DOTS */}
            <div style={{
                position: 'fixed',
                bottom: '2rem',
                left: '50%',
                transform: 'translateX(-50%)',
                display: 'flex',
                gap: '0.5rem',
                zIndex: 50,
                backgroundColor: 'rgba(0,0,0,0.2)',
                padding: '0.75rem 1rem',
                borderRadius: '2rem',
                backdropFilter: 'blur(10px)'
            }}>
                {[0,1,2,3,4].map((_, idx) => (
                    <button
                        key={idx}
                        onClick={() => scrollToCard(idx)}
                        style={{
                            width: idx === activeIndex ? '1.5rem' : '0.75rem',
                            height: '0.75rem',
                            borderRadius: '0.5rem',
                            border: 'none',
                            backgroundColor: idx === activeIndex ? '#4CAF50' : 'rgba(255,255,255,0.5)',
                            cursor: 'pointer',
                            transition: 'all 0.3s'
                        }}
                        aria-label={`Gå til kort ${idx + 1}`}
                    />
                ))}
            </div>

            {/* FOOTER */}
            <div className="footer">
                <div style={{ maxWidth: '80rem', margin: '0 auto', marginBottom: '2rem' }}>
                    <div className="footer-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '3rem', marginBottom: '2rem' }}>
                        <div>
                            <h4 style={{ fontWeight: '700', marginBottom: '1rem', fontSize: '0.95rem' }}>Produkt</h4>
                            <ul style={{ listStyle: 'none' }}>
                                <li style={{ marginBottom: '0.5rem' }}><a href="#">GolfBox Integrering</a></li>
                                <li style={{ marginBottom: '0.5rem' }}><a href="#">Google Workspace</a></li>
                                <li style={{ marginBottom: '0.5rem' }}><a href="#">Egendefinerte Apper</a></li>
                                <li><a href="#">Prising</a></li>
                            </ul>
                        </div>
                        <div>
                            <h4 style={{ fontWeight: '700', marginBottom: '1rem', fontSize: '0.95rem' }}>Bedrift</h4>
                            <ul style={{ listStyle: 'none' }}>
                                <li style={{ marginBottom: '0.5rem' }}><a href="#">Om Oss</a></li>
                                <li style={{ marginBottom: '0.5rem' }}><a href="#">Blogg</a></li>
                                <li style={{ marginBottom: '0.5rem' }}><a href="#">Casestudier</a></li>
                                <li><a href="#">Presse</a></li>
                            </ul>
                        </div>
                        <div>
                            <h4 style={{ fontWeight: '700', marginBottom: '1rem', fontSize: '0.95rem' }}>Support</h4>
                            <ul style={{ listStyle: 'none' }}>
                                <li style={{ marginBottom: '0.5rem' }}><a href="#">Hjelpesenter</a></li>
                                <li style={{ marginBottom: '0.5rem' }}><a href="#">Dokumentasjon</a></li>
                                <li style={{ marginBottom: '0.5rem' }}><a href="#">Kontakt Support</a></li>
                                <li><a href="#">Statusside</a></li>
                            </ul>
                        </div>
                        <div>
                            <h4 style={{ fontWeight: '700', marginBottom: '1rem', fontSize: '0.95rem' }}>Juridisk</h4>
                            <ul style={{ listStyle: 'none' }}>
                                <li style={{ marginBottom: '0.5rem' }}><a href="#">Privatlivspolicy</a></li>
                                <li style={{ marginBottom: '0.5rem' }}><a href="#">Bruksvilkår</a></li>
                                <li style={{ marginBottom: '0.5rem' }}><a href="#">Sikkerhet</a></li>
                                <li><a href="#">Compliance</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="footer-bottom" style={{ borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: '2rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <div style={{ fontSize: '0.85rem', opacity: 0.8 }}>© 2025 Golfklubbens IT. Alle rettigheter reservert.</div>
                        <div style={{ display: 'flex', gap: '1.5rem' }}>
                            <a href="#" style={{ fontSize: '1.2rem' }}>LinkedIn</a>
                            <a href="#" style={{ fontSize: '1.2rem' }}>Facebook</a>
                            <a href="#" style={{ fontSize: '1.2rem' }}>Twitter</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home

