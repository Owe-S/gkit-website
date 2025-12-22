import { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
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
        <div style={{ 
            minHeight: '100vh', 
            backgroundColor: '#FFFFFF',
            color: '#111827'
        }}>
            <style>{`
                body { background-color: #FFFFFF !important; }
                .app { background-color: #FFFFFF !important; }
                section { background-color: #FFFFFF !important; }
                .header { background: linear-gradient(to bottom, rgba(255,255,255,0.95), rgba(255,255,255,0.9)) !important; border-bottom: 1px solid #E5E7EB !important; }
            `}</style>
            {/* Header */}
            <header style={{
                position: 'sticky',
                top: 0,
                zIndex: 100,
                backgroundColor: '#FFFFFF',
                borderBottom: '1px solid #E5E7EB',
                padding: '1rem 0'
            }}>
                <Navbar />
            </header>

            {/* ==================== SECTION 1: HERO ==================== */}
            <section style={{
                backgroundColor: '#FFFFFF',
                padding: '5rem 1.5rem',
                textAlign: 'center',
                minHeight: 'auto'
            }}>
                <div style={{ maxWidth: '48rem', margin: '0 auto' }}>
                    <p style={{
                        fontSize: '0.75rem',
                        textTransform: 'uppercase',
                        letterSpacing: '0.25em',
                        color: '#9CA3AF',
                        marginBottom: '1rem'
                    }}>
                        {{TAGLINE_PLACEHOLDER}}
                    </p>
                    <h1 style={{
                        fontSize: 'clamp(1.875rem, 5vw, 2.25rem)',
                        fontWeight: 'bold',
                        color: '#111827',
                        marginBottom: '1rem'
                    }}>
                        {{HERO_TITLE}}
                    </h1>
                    <p style={{
                        fontSize: 'clamp(1rem, 2vw, 1.125rem)',
                        color: '#4B5563',
                        marginBottom: '2rem'
                    }}>
                        {{HERO_SUBTITLE}}
                    </p>
                    <div style={{
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '1rem',
                        justifyContent: 'center',
                        flexWrap: 'wrap',
                        '@media (min-width: 640px)': {
                            flexDirection: 'row'
                        }
                    }}>
                        <button style={{
                            padding: '0.75rem 1.5rem',
                            backgroundColor: '#0057D9',
                            color: '#FFFFFF',
                            borderRadius: '0.5rem',
                            border: 'none',
                            fontSize: '0.875rem',
                            fontWeight: '500',
                            cursor: 'pointer',
                            transition: 'background-color 0.2s'
                        }}
                        onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#0047B3'}
                        onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#0057D9'}
                        >
                            {{CTA_PRIMARY}}
                        </button>
                        <button style={{
                            padding: '0.75rem 1.5rem',
                            backgroundColor: '#FFFFFF',
                            color: '#0057D9',
                            borderRadius: '0.5rem',
                            border: '1px solid #0057D9',
                            fontSize: '0.875rem',
                            fontWeight: '500',
                            cursor: 'pointer',
                            transition: 'background-color 0.2s'
                        }}
                        onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#F0F9FF'}
                        onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#FFFFFF'}
                        >
                            {{CTA_SECONDARY}}
                        </button>
                    </div>
                </div>
            </section>

            {/* ==================== SECTION 2: SERVICE CARDS ==================== */}
            <section style={{
                backgroundColor: '#FFFFFF',
                padding: '4rem 1.5rem',
                borderTop: '1px solid #E5E7EB'
            }}>
                <div style={{ maxWidth: '80rem', margin: '0 auto' }}>
                    <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
                        <h2 style={{
                            fontSize: '1.875rem',
                            fontWeight: '600',
                            color: '#111827',
                            marginBottom: '0.5rem'
                        }}>
                            {{SECTION2_HEADING}}
                        </h2>
                        <p style={{
                            fontSize: '1rem',
                            color: '#4B5563'
                        }}>
                            {{SECTION2_SUBTEXT}}
                        </p>
                    </div>

                    <div style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                        gap: '1.5rem'
                    }}>
                        {/* Card 1 */}
                        <div style={{
                            padding: '1.5rem',
                            borderRadius: '0.75rem',
                            border: '1px solid #E5E7EB',
                            backgroundColor: '#FFFFFF',
                            boxShadow: '0 1px 2px rgba(0,0,0,0.05)'
                        }}>
                            <div style={{
                                width: '2.5rem',
                                height: '2.5rem',
                                borderRadius: '50%',
                                backgroundColor: '#F0F4FF',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                marginBottom: '1rem',
                                color: '#0057D9',
                                fontSize: '1.25rem'
                            }}>
                                🔷
                            </div>
                            <h3 style={{
                                fontSize: '1.125rem',
                                fontWeight: '600',
                                color: '#111827',
                                marginBottom: '0.5rem'
                            }}>
                                {{CARD1_TITLE}}
                            </h3>
                            <p style={{
                                fontSize: '0.875rem',
                                color: '#4B5563',
                                lineHeight: '1.5'
                            }}>
                                {{CARD1_TEXT}}
                            </p>
                        </div>

                        {/* Card 2 */}
                        <div style={{
                            padding: '1.5rem',
                            borderRadius: '0.75rem',
                            border: '1px solid #E5E7EB',
                            backgroundColor: '#FFFFFF',
                            boxShadow: '0 1px 2px rgba(0,0,0,0.05)'
                        }}>
                            <div style={{
                                width: '2.5rem',
                                height: '2.5rem',
                                borderRadius: '50%',
                                backgroundColor: '#F0F4FF',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                marginBottom: '1rem',
                                color: '#0057D9',
                                fontSize: '1.25rem'
                            }}>
                                🔷
                            </div>
                            <h3 style={{
                                fontSize: '1.125rem',
                                fontWeight: '600',
                                color: '#111827',
                                marginBottom: '0.5rem'
                            }}>
                                {{CARD2_TITLE}}
                            </h3>
                            <p style={{
                                fontSize: '0.875rem',
                                color: '#4B5563',
                                lineHeight: '1.5'
                            }}>
                                {{CARD2_TEXT}}
                            </p>
                        </div>

                        {/* Card 3 */}
                        <div style={{
                            padding: '1.5rem',
                            borderRadius: '0.75rem',
                            border: '1px solid #E5E7EB',
                            backgroundColor: '#FFFFFF',
                            boxShadow: '0 1px 2px rgba(0,0,0,0.05)'
                        }}>
                            <div style={{
                                width: '2.5rem',
                                height: '2.5rem',
                                borderRadius: '50%',
                                backgroundColor: '#F0F4FF',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                marginBottom: '1rem',
                                color: '#0057D9',
                                fontSize: '1.25rem'
                            }}>
                                🔷
                            </div>
                            <h3 style={{
                                fontSize: '1.125rem',
                                fontWeight: '600',
                                color: '#111827',
                                marginBottom: '0.5rem'
                            }}>
                                {{CARD3_TITLE}}
                            </h3>
                            <p style={{
                                fontSize: '0.875rem',
                                color: '#4B5563',
                                lineHeight: '1.5'
                            }}>
                                {{CARD3_TEXT}}
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* ==================== SECTION 3: BENEFITS LIST ==================== */}
            <section style={{
                backgroundColor: '#F7F9FC',
                padding: '4rem 1.5rem'
            }}>
                <div style={{ maxWidth: '64rem', margin: '0 auto' }}>
                    <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
                        <h2 style={{
                            fontSize: '1.875rem',
                            fontWeight: '600',
                            color: '#111827',
                            marginBottom: '0.5rem'
                        }}>
                            {{SECTION3_HEADING}}
                        </h2>
                        <p style={{
                            fontSize: '1rem',
                            color: '#4B5563'
                        }}>
                            {{SECTION3_SUBTEXT}}
                        </p>
                    </div>

                    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                        {/* Row 1 */}
                        <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'flex-start' }}>
                            <div style={{
                                width: '2rem',
                                height: '2rem',
                                borderRadius: '50%',
                                backgroundColor: '#FFFFFF',
                                border: '1px solid #E5E7EB',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                marginTop: '0.25rem',
                                color: '#0057D9',
                                fontSize: '0.875rem',
                                flexShrink: 0
                            }}>
                                ✓
                            </div>
                            <div>
                                <h3 style={{
                                    fontSize: '0.875rem',
                                    fontWeight: '600',
                                    color: '#111827',
                                    marginBottom: '0.25rem'
                                }}>
                                    {{BENEFIT1_TITLE}}
                                </h3>
                                <p style={{
                                    fontSize: '0.875rem',
                                    color: '#4B5563'
                                }}>
                                    {{BENEFIT1_TEXT}}
                                </p>
                            </div>
                        </div>

                        {/* Row 2 */}
                        <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'flex-start' }}>
                            <div style={{
                                width: '2rem',
                                height: '2rem',
                                borderRadius: '50%',
                                backgroundColor: '#FFFFFF',
                                border: '1px solid #E5E7EB',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                marginTop: '0.25rem',
                                color: '#0057D9',
                                fontSize: '0.875rem',
                                flexShrink: 0
                            }}>
                                ✓
                            </div>
                            <div>
                                <h3 style={{
                                    fontSize: '0.875rem',
                                    fontWeight: '600',
                                    color: '#111827',
                                    marginBottom: '0.25rem'
                                }}>
                                    {{BENEFIT2_TITLE}}
                                </h3>
                                <p style={{
                                    fontSize: '0.875rem',
                                    color: '#4B5563'
                                }}>
                                    {{BENEFIT2_TEXT}}
                                </p>
                            </div>
                        </div>

                        {/* Row 3 */}
                        <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'flex-start' }}>
                            <div style={{
                                width: '2rem',
                                height: '2rem',
                                borderRadius: '50%',
                                backgroundColor: '#FFFFFF',
                                border: '1px solid #E5E7EB',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                marginTop: '0.25rem',
                                color: '#0057D9',
                                fontSize: '0.875rem',
                                flexShrink: 0
                            }}>
                                ✓
                            </div>
                            <div>
                                <h3 style={{
                                    fontSize: '0.875rem',
                                    fontWeight: '600',
                                    color: '#111827',
                                    marginBottom: '0.25rem'
                                }}>
                                    {{BENEFIT3_TITLE}}
                                </h3>
                                <p style={{
                                    fontSize: '0.875rem',
                                    color: '#4B5563'
                                }}>
                                    {{BENEFIT3_TEXT}}
                                </p>
                            </div>
                        </div>

                        {/* Row 4 */}
                        <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'flex-start' }}>
                            <div style={{
                                width: '2rem',
                                height: '2rem',
                                borderRadius: '50%',
                                backgroundColor: '#FFFFFF',
                                border: '1px solid #E5E7EB',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                marginTop: '0.25rem',
                                color: '#0057D9',
                                fontSize: '0.875rem',
                                flexShrink: 0
                            }}>
                                ✓
                            </div>
                            <div>
                                <h3 style={{
                                    fontSize: '0.875rem',
                                    fontWeight: '600',
                                    color: '#111827',
                                    marginBottom: '0.25rem'
                                }}>
                                    {{BENEFIT4_TITLE}}
                                </h3>
                                <p style={{
                                    fontSize: '0.875rem',
                                    color: '#4B5563'
                                }}>
                                    {{BENEFIT4_TEXT}}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ==================== SECTION 4: CASE CARDS ==================== */}
            <section style={{
                backgroundColor: '#FFFFFF',
                padding: '4rem 1.5rem',
                borderTop: '1px solid #E5E7EB'
            }}>
                <div style={{ maxWidth: '80rem', margin: '0 auto' }}>
                    <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
                        <h2 style={{
                            fontSize: '1.875rem',
                            fontWeight: '600',
                            color: '#111827',
                            marginBottom: '0.5rem'
                        }}>
                            {{SECTION4_HEADING}}
                        </h2>
                        <p style={{
                            fontSize: '1rem',
                            color: '#4B5563'
                        }}>
                            {{SECTION4_SUBTEXT}}
                        </p>
                    </div>

                    <div style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                        gap: '1.5rem'
                    }}>
                        {/* Case 1 */}
                        <div style={{
                            padding: '1.5rem',
                            borderRadius: '0.75rem',
                            border: '1px solid #E5E7EB',
                            backgroundColor: '#FFFFFF',
                            boxShadow: '0 1px 2px rgba(0,0,0,0.05)',
                            display: 'flex',
                            flexDirection: 'column',
                            gap: '0.75rem'
                        }}>
                            <div style={{
                                width: '100%',
                                height: '7rem',
                                borderRadius: '0.5rem',
                                backgroundColor: '#F3F4F6',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                color: '#9CA3AF',
                                fontSize: '0.75rem'
                            }}>
                                [IMAGE PLACEHOLDER]
                            </div>
                            <h3 style={{
                                fontSize: '1.125rem',
                                fontWeight: '600',
                                color: '#111827'
                            }}>
                                {{CASE1_TITLE}}
                            </h3>
                            <p style={{
                                fontSize: '0.875rem',
                                color: '#4B5563',
                                lineHeight: '1.5'
                            }}>
                                {{CASE1_TEXT}}
                            </p>
                        </div>

                        {/* Case 2 */}
                        <div style={{
                            padding: '1.5rem',
                            borderRadius: '0.75rem',
                            border: '1px solid #E5E7EB',
                            backgroundColor: '#FFFFFF',
                            boxShadow: '0 1px 2px rgba(0,0,0,0.05)',
                            display: 'flex',
                            flexDirection: 'column',
                            gap: '0.75rem'
                        }}>
                            <div style={{
                                width: '100%',
                                height: '7rem',
                                borderRadius: '0.5rem',
                                backgroundColor: '#F3F4F6',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                color: '#9CA3AF',
                                fontSize: '0.75rem'
                            }}>
                                [IMAGE PLACEHOLDER]
                            </div>
                            <h3 style={{
                                fontSize: '1.125rem',
                                fontWeight: '600',
                                color: '#111827'
                            }}>
                                {{CASE2_TITLE}}
                            </h3>
                            <p style={{
                                fontSize: '0.875rem',
                                color: '#4B5563',
                                lineHeight: '1.5'
                            }}>
                                {{CASE2_TEXT}}
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* ==================== SECTION 5: PRODUCTS LIST ==================== */}
            <section style={{
                backgroundColor: '#FFFFFF',
                padding: '4rem 1.5rem',
                borderTop: '1px solid #E5E7EB'
            }}>
                <div style={{ maxWidth: '64rem', margin: '0 auto' }}>
                    <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
                        <h2 style={{
                            fontSize: '1.875rem',
                            fontWeight: '600',
                            color: '#111827',
                            marginBottom: '0.5rem'
                        }}>
                            {{SECTION5_HEADING}}
                        </h2>
                        <p style={{
                            fontSize: '1rem',
                            color: '#4B5563'
                        }}>
                            {{SECTION5_SUBTEXT}}
                        </p>
                    </div>

                    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                        {/* Product 1 */}
                        <div style={{
                            display: 'flex',
                            gap: '0.75rem',
                            padding: '1rem',
                            borderRadius: '0.5rem',
                            border: '1px solid #E5E7EB',
                            backgroundColor: '#FFFFFF'
                        }}>
                            <div style={{
                                width: '2.25rem',
                                height: '2.25rem',
                                borderRadius: '0.375rem',
                                backgroundColor: '#F0F4FF',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                color: '#0057D9',
                                fontSize: '1rem',
                                flexShrink: 0
                            }}>
                                📦
                            </div>
                            <div>
                                <h3 style={{
                                    fontSize: '0.875rem',
                                    fontWeight: '600',
                                    color: '#111827',
                                    marginBottom: '0.25rem'
                                }}>
                                    {{PRODUCT1_NAME}}
                                </h3>
                                <p style={{
                                    fontSize: '0.875rem',
                                    color: '#4B5563'
                                }}>
                                    {{PRODUCT1_TEXT}}
                                </p>
                            </div>
                        </div>

                        {/* Product 2 */}
                        <div style={{
                            display: 'flex',
                            gap: '0.75rem',
                            padding: '1rem',
                            borderRadius: '0.5rem',
                            border: '1px solid #E5E7EB',
                            backgroundColor: '#FFFFFF'
                        }}>
                            <div style={{
                                width: '2.25rem',
                                height: '2.25rem',
                                borderRadius: '0.375rem',
                                backgroundColor: '#F0F4FF',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                color: '#0057D9',
                                fontSize: '1rem',
                                flexShrink: 0
                            }}>
                                📦
                            </div>
                            <div>
                                <h3 style={{
                                    fontSize: '0.875rem',
                                    fontWeight: '600',
                                    color: '#111827',
                                    marginBottom: '0.25rem'
                                }}>
                                    {{PRODUCT2_NAME}}
                                </h3>
                                <p style={{
                                    fontSize: '0.875rem',
                                    color: '#4B5563'
                                }}>
                                    {{PRODUCT2_TEXT}}
                                </p>
                            </div>
                        </div>

                        {/* Product 3 */}
                        <div style={{
                            display: 'flex',
                            gap: '0.75rem',
                            padding: '1rem',
                            borderRadius: '0.5rem',
                            border: '1px solid #E5E7EB',
                            backgroundColor: '#FFFFFF'
                        }}>
                            <div style={{
                                width: '2.25rem',
                                height: '2.25rem',
                                borderRadius: '0.375rem',
                                backgroundColor: '#F0F4FF',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                color: '#0057D9',
                                fontSize: '1rem',
                                flexShrink: 0
                            }}>
                                📦
                            </div>
                            <div>
                                <h3 style={{
                                    fontSize: '0.875rem',
                                    fontWeight: '600',
                                    color: '#111827',
                                    marginBottom: '0.25rem'
                                }}>
                                    {{PRODUCT3_NAME}}
                                </h3>
                                <p style={{
                                    fontSize: '0.875rem',
                                    color: '#4B5563'
                                }}>
                                    {{PRODUCT3_TEXT}}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ==================== SECTION 6: CONTACT FOOTER ==================== */}
            <footer style={{
                backgroundColor: '#F7F9FC',
                padding: '3rem 1.5rem',
                borderTop: '1px solid #E5E7EB'
            }}>
                <div style={{ maxWidth: '80rem', margin: '0 auto' }}>
                    <div style={{
                        display: 'grid',
                        gridTemplateColumns: '1fr 1fr',
                        gap: '1.5rem',
                        marginBottom: '2rem',
                        '@media (max-width: 768px)': {
                            gridTemplateColumns: '1fr'
                        }
                    }}>
                        {/* Left */}
                        <div>
                            <h2 style={{
                                fontSize: '1.125rem',
                                fontWeight: '600',
                                color: '#111827',
                                marginBottom: '0.25rem'
                            }}>
                                {{FOOTER_HEADING}}
                            </h2>
                            <p style={{
                                fontSize: '0.875rem',
                                color: '#4B5563'
                            }}>
                                {{FOOTER_SUBTEXT}}
                            </p>
                        </div>

                        {/* Right */}
                        <div style={{
                            display: 'flex',
                            gap: '0.75rem',
                            flexDirection: 'column',
                            '@media (min-width: 640px)': {
                                flexDirection: 'row',
                                alignItems: 'center',
                                justifyContent: 'flex-end'
                            }
                        }}>
                            <button style={{
                                padding: '0.625rem 1.25rem',
                                backgroundColor: '#0057D9',
                                color: '#FFFFFF',
                                borderRadius: '0.5rem',
                                border: 'none',
                                fontSize: '0.875rem',
                                fontWeight: '500',
                                cursor: 'pointer'
                            }}>
                                {{FOOTER_CTA}}
                            </button>
                            <a href="#" style={{
                                fontSize: '0.875rem',
                                color: '#4B5563',
                                textDecoration: 'underline',
                                textDecorationOffset: '0.25rem'
                            }}>
                                {{FOOTER_LINK}}
                            </a>
                        </div>
                    </div>

                    {/* Bottom */}
                    <div style={{
                        display: 'grid',
                        gridTemplateColumns: '1fr 1fr',
                        gap: '1rem',
                        paddingTop: '1.5rem',
                        borderTop: '1px solid #E5E7EB',
                        '@media (max-width: 768px)': {
                            gridTemplateColumns: '1fr'
                        }
                    }}>
                        <p style={{
                            fontSize: '0.75rem',
                            color: '#6B7280'
                        }}>
                            {{FOOTER_COPYRIGHT}}
                        </p>
                        <div style={{
                            display: 'flex',
                            gap: '1rem',
                            fontSize: '0.75rem',
                            '@media (max-width: 768px)': {
                                justifyContent: 'flex-start'
                            }
                        }}>
                            <a href="#" style={{ color: '#6B7280', textDecoration: 'none' }}>
                                {{FOOTER_LINK1}}
                            </a>
                            <a href="#" style={{ color: '#6B7280', textDecoration: 'none' }}>
                                {{FOOTER_LINK2}}
                            </a>
                            <a href="#" style={{ color: '#6B7280', textDecoration: 'none' }}>
                                {{FOOTER_LINK3}}
                            </a>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    )
}

export default Home
