import { useState } from 'react'
import type { FormEvent, ChangeEvent } from 'react'
import { collection, addDoc, serverTimestamp } from 'firebase/firestore'
import { db } from '../firebase'
import companyConfig from '../config/companyConfig'
import '../App.css'

interface FormData {
    firstName: string
    lastName: string
    mobile: string
    email: string
    golfboxId: string
}

interface FormErrors {
    firstName?: string
    lastName?: string
    mobile?: string
    email?: string
}

const validateEmail = (email: string): boolean => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return re.test(email)
}

const validateMobile = (mobile: string): boolean => {
    const re = /^(\+47)?[4-9]\d{7}$/
    return re.test(mobile.replace(/\s/g, ''))
}

const validateForm = (data: FormData): FormErrors => {
    const errors: FormErrors = {}
    if (!data.firstName.trim() || data.firstName.length < 2) {
        errors.firstName = 'Fornavn må være minst 2 tegn'
    }
    if (!data.lastName.trim() || data.lastName.length < 2) {
        errors.lastName = 'Etternavn må være minst 2 tegn'
    }
    if (!data.mobile.trim()) {
        errors.mobile = 'Mobilnummer er påkrevd'
    } else if (!validateMobile(data.mobile)) {
        errors.mobile = 'Ugyldig mobilnummer'
    }
    if (!data.email.trim()) {
        errors.email = 'E-post er påkrevd'
    } else if (!validateEmail(data.email)) {
        errors.email = 'Ugyldig e-postadresse'
    }
    return errors
}

const ContactForm = () => {
    const [formData, setFormData] = useState<FormData>({
        firstName: '',
        lastName: '',
        mobile: '',
        email: '',
        golfboxId: ''
    })

    const [loading, setLoading] = useState(false)
    const [submitted, setSubmitted] = useState(false)
    const [errors, setErrors] = useState<FormErrors>({})

    const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value } = e.target
        setFormData({ ...formData, [name]: value })
        if (errors[name as keyof FormErrors]) {
            setErrors({ ...errors, [name]: undefined })
        }
    }

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault()

        const formErrors = validateForm(formData)
        if (Object.keys(formErrors).length > 0) {
            setErrors(formErrors)
            return
        }

        setLoading(true)

        try {
            await addDoc(collection(db, 'leads'), {
                firstName: formData.firstName,
                lastName: formData.lastName,
                mobile: formData.mobile,
                email: formData.email,
                golfboxId: formData.golfboxId || null,
                status: 'new',
                createdAt: serverTimestamp()
            })

            setSubmitted(true)
            setFormData({
                firstName: '',
                lastName: '',
                mobile: '',
                email: '',
                golfboxId: ''
            })
            setErrors({})
        } catch (err: unknown) {
            const msg = err instanceof Error ? err.message : 'Ukjent feil'
            console.error('Error submitting form:', err)
            setErrors({
                email: `Det oppsto en feil (${msg}). Prøv igjen eller send e-post til ${companyConfig.email}`
            })
        } finally {
            setLoading(false)
        }
    }

    if (submitted) {
        return (
            <div className="glass" style={{ padding: '3rem', textAlign: 'center', maxWidth: '600px', margin: '0 auto', borderRadius: '12px' }}>
                <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>✅</div>
                <h3 style={{ color: 'var(--color-gkit-green)', marginBottom: '1rem', fontSize: '1.5rem' }}>Takk for din henvendelse!</h3>
                <p style={{ marginBottom: '2rem', color: 'var(--color-gray-light)' }}>Vi har mottatt din melding og kontakter deg snart.</p>
                <button onClick={() => setSubmitted(false)} className="btn btn-secondary">
                    Send ny henvendelse
                </button>
            </div>
        )
    }

    return (
        <form onSubmit={handleSubmit} className="contact-form glass" style={{ padding: '2rem', borderRadius: '12px' }}>
            {/* Name Row - Side by side on web, stacked on mobile */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem', marginBottom: '1.5rem' }}>
                <div className="form-group" style={{ marginBottom: 0 }}>
                    <label htmlFor="firstName" style={{ fontWeight: 600, marginBottom: '0.5rem', display: 'block', color: '#fff' }}>
                        Fornavn <span style={{ color: '#ff6b6b' }}>*</span>
                    </label>
                    <input
                        type="text"
                        id="firstName"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleChange}
                        placeholder="Fornavn"
                        disabled={loading}
                        style={{
                            width: '100%',
                            padding: '0.75rem',
                            background: 'rgba(255, 255, 255, 0.05)',
                            border: errors.firstName ? '2px solid #ff6b6b' : '1px solid rgba(76, 175, 80, 0.3)',
                            borderRadius: '8px',
                            color: '#fff',
                            fontSize: '0.95rem',
                            cursor: loading ? 'not-allowed' : 'auto'
                        }}
                    />
                    {errors.firstName && <span style={{ color: '#ff6b6b', fontSize: '0.8rem', marginTop: '0.25rem', display: 'block' }}>⚠️ {errors.firstName}</span>}
                </div>

                <div className="form-group" style={{ marginBottom: 0 }}>
                    <label htmlFor="lastName" style={{ fontWeight: 600, marginBottom: '0.5rem', display: 'block', color: '#fff' }}>
                        Etternavn <span style={{ color: '#ff6b6b' }}>*</span>
                    </label>
                    <input
                        type="text"
                        id="lastName"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleChange}
                        placeholder="Etternavn"
                        disabled={loading}
                        style={{
                            width: '100%',
                            padding: '0.75rem',
                            background: 'rgba(255, 255, 255, 0.05)',
                            border: errors.lastName ? '2px solid #ff6b6b' : '1px solid rgba(76, 175, 80, 0.3)',
                            borderRadius: '8px',
                            color: '#fff',
                            fontSize: '0.95rem',
                            cursor: loading ? 'not-allowed' : 'auto'
                        }}
                    />
                    {errors.lastName && <span style={{ color: '#ff6b6b', fontSize: '0.8rem', marginTop: '0.25rem', display: 'block' }}>⚠️ {errors.lastName}</span>}
                </div>
            </div>

            {/* Mobile */}
            <div className="form-group" style={{ marginBottom: '1.5rem' }}>
                <label htmlFor="mobile" style={{ fontWeight: 600, marginBottom: '0.5rem', display: 'block', color: '#fff' }}>
                    Mobilnummer <span style={{ color: '#ff6b6b' }}>*</span>
                </label>
                <input
                    type="tel"
                    id="mobile"
                    name="mobile"
                    value={formData.mobile}
                    onChange={handleChange}
                    placeholder="+47 xxx xx xxx"
                    disabled={loading}
                    style={{
                        width: '100%',
                        padding: '0.75rem',
                        background: 'rgba(255, 255, 255, 0.05)',
                        border: errors.mobile ? '2px solid #ff6b6b' : '1px solid rgba(76, 175, 80, 0.3)',
                        borderRadius: '8px',
                        color: '#fff',
                        fontSize: '0.95rem',
                        cursor: loading ? 'not-allowed' : 'auto'
                    }}
                />
                {errors.mobile && <span style={{ color: '#ff6b6b', fontSize: '0.8rem', marginTop: '0.25rem', display: 'block' }}>⚠️ {errors.mobile}</span>}
            </div>

            {/* Email */}
            <div className="form-group" style={{ marginBottom: '1.5rem' }}>
                <label htmlFor="email" style={{ fontWeight: 600, marginBottom: '0.5rem', display: 'block', color: '#fff' }}>
                    E-postadresse <span style={{ color: '#ff6b6b' }}>*</span>
                </label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="din@email.no"
                    disabled={loading}
                    style={{
                        width: '100%',
                        padding: '0.75rem',
                        background: 'rgba(255, 255, 255, 0.05)',
                        border: errors.email ? '2px solid #ff6b6b' : '1px solid rgba(76, 175, 80, 0.3)',
                        borderRadius: '8px',
                        color: '#fff',
                        fontSize: '0.95rem',
                        cursor: loading ? 'not-allowed' : 'auto'
                    }}
                />
                {errors.email && <span style={{ color: '#ff6b6b', fontSize: '0.8rem', marginTop: '0.25rem', display: 'block' }}>⚠️ {errors.email}</span>}
            </div>

            {/* GolfBox ID (Optional) */}
            <div className="form-group" style={{ marginBottom: '2rem' }}>
                <label htmlFor="golfboxId" style={{ fontWeight: 600, marginBottom: '0.5rem', display: 'block', color: '#fff' }}>
                    GolfBox ID <span style={{ color: '#888', fontWeight: 400, fontSize: '0.85rem' }}>(valgfritt)</span>
                </label>
                <input
                    type="text"
                    id="golfboxId"
                    name="golfboxId"
                    value={formData.golfboxId}
                    onChange={handleChange}
                    placeholder="Din GolfBox ID (hvis aktuelt)"
                    disabled={loading}
                    style={{
                        width: '100%',
                        padding: '0.75rem',
                        background: 'rgba(255, 255, 255, 0.05)',
                        border: '1px solid rgba(76, 175, 80, 0.3)',
                        borderRadius: '8px',
                        color: '#fff',
                        fontSize: '0.95rem',
                        cursor: loading ? 'not-allowed' : 'auto'
                    }}
                />
            </div>

            {/* Submit Button */}
            <button
                type="submit"
                className="btn btn-primary"
                disabled={loading}
                style={{
                    width: '100%',
                    padding: '1rem',
                    background: loading ? '#666' : 'linear-gradient(90deg, #4CAF50 0%, #66BB6A 100%)',
                    color: 'white',
                    border: 'none',
                    borderRadius: '8px',
                    fontWeight: 700,
                    fontSize: '1rem',
                    cursor: loading ? 'not-allowed' : 'pointer',
                    transition: 'all 0.3s ease'
                }}
            >
                {loading ? '📤 Sender...' : 'Send'}
            </button>

            <p style={{ fontSize: '0.8rem', color: '#888', marginTop: '1rem', textAlign: 'center' }}>
                * Påkrevde felt
            </p>
        </form>
    )
}

export default ContactForm

