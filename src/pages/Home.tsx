import { useEffect } from 'react'

function Home() {
    useEffect(() => {
        document.documentElement.style.backgroundColor = '#FFFFFF'
        document.body.style.backgroundColor = '#FFFFFF'
    }, [])

    const containerStyle = { minHeight: '100vh', backgroundColor: '#FFFFFF', color: '#111827', fontFamily: 'Inter, Arial, sans-serif' }
    const sectionWhiteStyle = { backgroundColor: '#FFFFFF', padding: '4rem 1.5rem', borderTop: '1px solid #E5E7EB' }
    const sectionGrayStyle = { backgroundColor: '#F7F9FC', padding: '4rem 1.5rem' }
    const maxWidthStyle = { maxWidth: '80rem', margin: '0 auto' }
    const headingStyle = { fontSize: '1.875rem', fontWeight: '600', color: '#111827', marginBottom: '0.5rem' }
    const subheadingStyle = { fontSize: '1rem', color: '#4B5563' }
    const buttonPrimaryStyle = { padding: '0.75rem 1.5rem', backgroundColor: '#0057D9', color: '#FFFFFF', borderRadius: '0.5rem', border: 'none', fontSize: '0.875rem', fontWeight: '500', cursor: 'pointer' }
    const buttonSecondaryStyle = { padding: '0.75rem 1.5rem', backgroundColor: '#FFFFFF', color: '#0057D9', borderRadius: '0.5rem', border: '1px solid #0057D9', fontSize: '0.875rem', fontWeight: '500', cursor: 'pointer' }

    return (
        <div style={containerStyle}>
            <style>{`
                * { margin: 0; padding: 0; box-sizing: border-box; }
                html, body { background-color: #FFFFFF !important; color: #111827 !important; }
                body { font-family: Inter, Arial, sans-serif; }
            `}</style>

            {/* Header */}
            <header style={{ position: 'sticky', top: 0, zIndex: 100, backgroundColor: '#FFFFFF', borderBottom: '1px solid #E5E7EB', padding: '1rem 1.5rem' }}>
                <div style={{ maxWidth: '80rem', margin: '0 auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <div style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#0057D9' }}>GKIT</div>
                    <nav style={{ display: 'flex', gap: '2rem' }}>
                        <a href="#" style={{ color: '#111827', textDecoration: 'none', fontSize: '0.875rem' }}>Home</a>
                        <a href="#" style={{ color: '#111827', textDecoration: 'none', fontSize: '0.875rem' }}>Services</a>
                        <a href="#" style={{ color: '#111827', textDecoration: 'none', fontSize: '0.875rem' }}>Contact</a>
                    </nav>
                </div>
            </header>

            {/* SECTION 1: HERO */}
            <section style={{ ...sectionWhiteStyle, borderTop: 'none', paddingTop: '5rem', paddingBottom: '5rem', textAlign: 'center' }}>
                <div style={{ maxWidth: '48rem', margin: '0 auto' }}>
                    <p style={{ fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.25em', color: '#9CA3AF', marginBottom: '1rem' }}>{{TAGLINE_PLACEHOLDER}}</p>
                    <h1 style={{ fontSize: 'clamp(1.875rem, 5vw, 2.25rem)', fontWeight: 'bold', color: '#111827', marginBottom: '1rem' }}>{{HERO_TITLE}}</h1>
                    <p style={{ fontSize: 'clamp(1rem, 2vw, 1.125rem)', color: '#4B5563', marginBottom: '2rem' }}>{{HERO_SUBTITLE}}</p>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', justifyContent: 'center' }}>
                        <button style={buttonPrimaryStyle}>{{CTA_PRIMARY}}</button>
                        <button style={buttonSecondaryStyle}>{{CTA_SECONDARY}}</button>
                    </div>
                </div>
            </section>

            {/* SECTION 2: SERVICE CARDS */}
            <section style={sectionWhiteStyle}>
                <div style={maxWidthStyle}>
                    <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
                        <h2 style={headingStyle}>{{SECTION2_HEADING}}</h2>
                        <p style={subheadingStyle}>{{SECTION2_SUBTEXT}}</p>
                    </div>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.5rem' }}>
                        <div style={{ padding: '1.5rem', borderRadius: '0.75rem', border: '1px solid #E5E7EB', backgroundColor: '#FFFFFF', boxShadow: '0 1px 2px rgba(0,0,0,0.05)' }}>
                            <div style={{ width: '2.5rem', height: '2.5rem', borderRadius: '50%', backgroundColor: '#F0F4FF', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1rem', color: '#0057D9', fontSize: '1.25rem' }}>🔷</div>
                            <h3 style={{ fontSize: '1.125rem', fontWeight: '600', color: '#111827', marginBottom: '0.5rem' }}>{{CARD1_TITLE}}</h3>
                            <p style={{ fontSize: '0.875rem', color: '#4B5563', lineHeight: '1.5' }}>{{CARD1_TEXT}}</p>
                        </div>
                        <div style={{ padding: '1.5rem', borderRadius: '0.75rem', border: '1px solid #E5E7EB', backgroundColor: '#FFFFFF', boxShadow: '0 1px 2px rgba(0,0,0,0.05)' }}>
                            <div style={{ width: '2.5rem', height: '2.5rem', borderRadius: '50%', backgroundColor: '#F0F4FF', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1rem', color: '#0057D9', fontSize: '1.25rem' }}>🔷</div>
                            <h3 style={{ fontSize: '1.125rem', fontWeight: '600', color: '#111827', marginBottom: '0.5rem' }}>{{CARD2_TITLE}}</h3>
                            <p style={{ fontSize: '0.875rem', color: '#4B5563', lineHeight: '1.5' }}>{{CARD2_TEXT}}</p>
                        </div>
                        <div style={{ padding: '1.5rem', borderRadius: '0.75rem', border: '1px solid #E5E7EB', backgroundColor: '#FFFFFF', boxShadow: '0 1px 2px rgba(0,0,0,0.05)' }}>
                            <div style={{ width: '2.5rem', height: '2.5rem', borderRadius: '50%', backgroundColor: '#F0F4FF', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1rem', color: '#0057D9', fontSize: '1.25rem' }}>🔷</div>
                            <h3 style={{ fontSize: '1.125rem', fontWeight: '600', color: '#111827', marginBottom: '0.5rem' }}>{{CARD3_TITLE}}</h3>
                            <p style={{ fontSize: '0.875rem', color: '#4B5563', lineHeight: '1.5' }}>{{CARD3_TEXT}}</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* SECTION 3: BENEFITS LIST */}
            <section style={sectionGrayStyle}>
                <div style={{ maxWidth: '64rem', margin: '0 auto' }}>
                    <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
                        <h2 style={headingStyle}>{{SECTION3_HEADING}}</h2>
                        <p style={subheadingStyle}>{{SECTION3_SUBTEXT}}</p>
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                        <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'flex-start' }}>
                            <div style={{ width: '2rem', height: '2rem', borderRadius: '50%', backgroundColor: '#FFFFFF', border: '1px solid #E5E7EB', display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: '0.25rem', color: '#0057D9', fontSize: '0.875rem', flexShrink: 0 }}>✓</div>
                            <div><h3 style={{ fontSize: '0.875rem', fontWeight: '600', color: '#111827', marginBottom: '0.25rem' }}>{{BENEFIT1_TITLE}}</h3><p style={{ fontSize: '0.875rem', color: '#4B5563' }}>{{BENEFIT1_TEXT}}</p></div>
                        </div>
                        <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'flex-start' }}>
                            <div style={{ width: '2rem', height: '2rem', borderRadius: '50%', backgroundColor: '#FFFFFF', border: '1px solid #E5E7EB', display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: '0.25rem', color: '#0057D9', fontSize: '0.875rem', flexShrink: 0 }}>✓</div>
                            <div><h3 style={{ fontSize: '0.875rem', fontWeight: '600', color: '#111827', marginBottom: '0.25rem' }}>{{BENEFIT2_TITLE}}</h3><p style={{ fontSize: '0.875rem', color: '#4B5563' }}>{{BENEFIT2_TEXT}}</p></div>
                        </div>
                        <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'flex-start' }}>
                            <div style={{ width: '2rem', height: '2rem', borderRadius: '50%', backgroundColor: '#FFFFFF', border: '1px solid #E5E7EB', display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: '0.25rem', color: '#0057D9', fontSize: '0.875rem', flexShrink: 0 }}>✓</div>
                            <div><h3 style={{ fontSize: '0.875rem', fontWeight: '600', color: '#111827', marginBottom: '0.25rem' }}>{{BENEFIT3_TITLE}}</h3><p style={{ fontSize: '0.875rem', color: '#4B5563' }}>{{BENEFIT3_TEXT}}</p></div>
                        </div>
                        <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'flex-start' }}>
                            <div style={{ width: '2rem', height: '2rem', borderRadius: '50%', backgroundColor: '#FFFFFF', border: '1px solid #E5E7EB', display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: '0.25rem', color: '#0057D9', fontSize: '0.875rem', flexShrink: 0 }}>✓</div>
                            <div><h3 style={{ fontSize: '0.875rem', fontWeight: '600', color: '#111827', marginBottom: '0.25rem' }}>{{BENEFIT4_TITLE}}</h3><p style={{ fontSize: '0.875rem', color: '#4B5563' }}>{{BENEFIT4_TEXT}}</p></div>
                        </div>
                    </div>
                </div>
            </section>

            {/* SECTION 4: CASE CARDS */}
            <section style={sectionWhiteStyle}>
                <div style={maxWidthStyle}>
                    <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
                        <h2 style={headingStyle}>{{SECTION4_HEADING}}</h2>
                        <p style={subheadingStyle}>{{SECTION4_SUBTEXT}}</p>
                    </div>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.5rem' }}>
                        <div style={{ padding: '1.5rem', borderRadius: '0.75rem', border: '1px solid #E5E7EB', backgroundColor: '#FFFFFF', boxShadow: '0 1px 2px rgba(0,0,0,0.05)', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                            <div style={{ width: '100%', height: '7rem', borderRadius: '0.5rem', backgroundColor: '#F3F4F6', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#9CA3AF', fontSize: '0.75rem' }}>[IMAGE PLACEHOLDER]</div>
                            <h3 style={{ fontSize: '1.125rem', fontWeight: '600', color: '#111827' }}>{{CASE1_TITLE}}</h3>
                            <p style={{ fontSize: '0.875rem', color: '#4B5563', lineHeight: '1.5' }}>{{CASE1_TEXT}}</p>
                        </div>
                        <div style={{ padding: '1.5rem', borderRadius: '0.75rem', border: '1px solid #E5E7EB', backgroundColor: '#FFFFFF', boxShadow: '0 1px 2px rgba(0,0,0,0.05)', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                            <div style={{ width: '100%', height: '7rem', borderRadius: '0.5rem', backgroundColor: '#F3F4F6', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#9CA3AF', fontSize: '0.75rem' }}>[IMAGE PLACEHOLDER]</div>
                            <h3 style={{ fontSize: '1.125rem', fontWeight: '600', color: '#111827' }}>{{CASE2_TITLE}}</h3>
                            <p style={{ fontSize: '0.875rem', color: '#4B5563', lineHeight: '1.5' }}>{{CASE2_TEXT}}</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* SECTION 5: PRODUCTS LIST */}
            <section style={sectionWhiteStyle}>
                <div style={{ maxWidth: '64rem', margin: '0 auto' }}>
                    <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
                        <h2 style={headingStyle}>{{SECTION5_HEADING}}</h2>
                        <p style={subheadingStyle}>{{SECTION5_SUBTEXT}}</p>
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                        <div style={{ display: 'flex', gap: '0.75rem', padding: '1rem', borderRadius: '0.5rem', border: '1px solid #E5E7EB', backgroundColor: '#FFFFFF' }}>
                            <div style={{ width: '2.25rem', height: '2.25rem', borderRadius: '0.375rem', backgroundColor: '#F0F4FF', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#0057D9', fontSize: '1rem', flexShrink: 0 }}>📦</div>
                            <div><h3 style={{ fontSize: '0.875rem', fontWeight: '600', color: '#111827', marginBottom: '0.25rem' }}>{{PRODUCT1_NAME}}</h3><p style={{ fontSize: '0.875rem', color: '#4B5563' }}>{{PRODUCT1_TEXT}}</p></div>
                        </div>
                        <div style={{ display: 'flex', gap: '0.75rem', padding: '1rem', borderRadius: '0.5rem', border: '1px solid #E5E7EB', backgroundColor: '#FFFFFF' }}>
                            <div style={{ width: '2.25rem', height: '2.25rem', borderRadius: '0.375rem', backgroundColor: '#F0F4FF', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#0057D9', fontSize: '1rem', flexShrink: 0 }}>📦</div>
                            <div><h3 style={{ fontSize: '0.875rem', fontWeight: '600', color: '#111827', marginBottom: '0.25rem' }}>{{PRODUCT2_NAME}}</h3><p style={{ fontSize: '0.875rem', color: '#4B5563' }}>{{PRODUCT2_TEXT}}</p></div>
                        </div>
                        <div style={{ display: 'flex', gap: '0.75rem', padding: '1rem', borderRadius: '0.5rem', border: '1px solid #E5E7EB', backgroundColor: '#FFFFFF' }}>
                            <div style={{ width: '2.25rem', height: '2.25rem', borderRadius: '0.375rem', backgroundColor: '#F0F4FF', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#0057D9', fontSize: '1rem', flexShrink: 0 }}>📦</div>
                            <div><h3 style={{ fontSize: '0.875rem', fontWeight: '600', color: '#111827', marginBottom: '0.25rem' }}>{{PRODUCT3_NAME}}</h3><p style={{ fontSize: '0.875rem', color: '#4B5563' }}>{{PRODUCT3_TEXT}}</p></div>
                        </div>
                    </div>
                </div>
            </section>

            {/* SECTION 6: CONTACT FOOTER */}
            <footer style={{ ...sectionGrayStyle, marginTop: '2rem' }}>
                <div style={maxWidthStyle}>
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem', marginBottom: '2rem' }}>
                        <div>
                            <h2 style={{ fontSize: '1.125rem', fontWeight: '600', color: '#111827', marginBottom: '0.25rem' }}>{{FOOTER_HEADING}}</h2>
                            <p style={{ fontSize: '0.875rem', color: '#4B5563' }}>{{FOOTER_SUBTEXT}}</p>
                        </div>
                        <div style={{ display: 'flex', gap: '0.75rem', flexDirection: 'column', justifyContent: 'center' }}>
                            <button style={buttonPrimaryStyle}>{{FOOTER_CTA}}</button>
                            <a href="#" style={{ fontSize: '0.875rem', color: '#4B5563', textDecoration: 'underline', textDecorationOffset: '0.25rem' }}>{{FOOTER_LINK}}</a>
                        </div>
                    </div>
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', paddingTop: '1.5rem', borderTop: '1px solid #E5E7EB' }}>
                        <p style={{ fontSize: '0.75rem', color: '#6B7280' }}>{{FOOTER_COPYRIGHT}}</p>
                        <div style={{ display: 'flex', gap: '1rem', fontSize: '0.75rem' }}>
                            <a href="#" style={{ color: '#6B7280', textDecoration: 'none' }}>{{FOOTER_LINK1}}</a>
                            <a href="#" style={{ color: '#6B7280', textDecoration: 'none' }}>{{FOOTER_LINK2}}</a>
                            <a href="#" style={{ color: '#6B7280', textDecoration: 'none' }}>{{FOOTER_LINK3}}</a>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    )
}

export default Home
