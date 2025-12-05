import { useState } from 'react'
import type { FormEvent, ChangeEvent } from 'react'
import { collection, addDoc, serverTimestamp } from 'firebase/firestore'
import { db } from '../firebase'
import companyConfig from '../config/companyConfig'
import '../App.css'

interface FormData {
    name: string
    email: string
    club: string
    interest: string
    message: string
}

interface FormErrors {
    name?: string
    email?: string
    club?: string
    interest?: string
}

const validateEmail = (email: string): boolean => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return re.test(email)
}

const validateForm = (data: FormData): FormErrors => {
    const errors: FormErrors = {}
    if (!data.name.trim() || data.name.length < 2) {
        errors.name = 'Navn må være minst 2 tegn'
    }
    if (!data.email.trim()) {
        errors.email = 'E-post er påkrevd'
    } else if (!validateEmail(data.email)) {
        errors.email = 'Ugyldig e-postadresse'
    }
    if (!data.club.trim()) {
        errors.club = 'Klubb/Bedrift er påkrevd'
    }
    if (!data.interest) {
        errors.interest = 'Vennligst velg et interesseområde'
    }
    return errors
}

const ContactForm = () => {
    const interests = [
        'GolfBox Automatisering',
        'Google Workspace',
        'ClubsiteCMS drift',
        'Digital Signage',
        'Golfbilkontroll',
        'Booking & Kalender',
        'Annet'
    ]

    const [formData, setFormData] = useState<FormData>({
        name: '',
        email: '',
        club: '',
        interest: 'GolfBox Automatisering',
        message: ''
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
                name: formData.name,
                email: formData.email,
                club: formData.club,
                interest: formData.interest,
                message: formData.message,
                status: 'new',
                createdAt: serverTimestamp()
            })

            setSubmitted(true)
            setFormData({
                name: '',
                email: '',
                club: '',
                interest: 'GolfBox Automatisering',
                message: ''
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
            <div className="glass" style={{ padding: '3rem', textAlign: 'center', maxWidth: '600px', margin: '0 auto' }}>
                <h3 style={{ color: 'var(--color-gkit-green)', marginBottom: '1rem' }}>✅ Takk!</h3>
                <p style={{ marginBottom: '2rem' }}>Vi har mottatt din henvendelse og kontakter deg snart.</p>
                <button onClick={() => setSubmitted(false)} className="btn btn-secondary">
                    Send ny henvendelse
                </button>
            </div>
        )
    }

    return (
        <form onSubmit={handleSubmit} className="contact-form glass">
            <div className="form-group">
                <label htmlFor="name">Navn *</label>
                <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Ditt navn"
                    disabled={loading}
                    style={{
                        borderColor: errors.name ? '#ff6b6b' : undefined,
                        backgroundColor: errors.name ? 'rgba(255, 107, 107, 0.05)' : undefined,
                        cursor: loading ? 'not-allowed' : 'auto'
                    }}
                />
                {errors.name && <span style={{ color: '#ff6b6b', fontSize: '0.85rem', marginTop: '0.25rem', display: 'block' }}>⚠️ {errors.name}</span>}
            </div>

            <div className="form-group">
                <label htmlFor="email">E-post *</label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="din@email.no"
                    disabled={loading}
                    style={{
                        borderColor: errors.email ? '#ff6b6b' : undefined,
                        backgroundColor: errors.email ? 'rgba(255, 107, 107, 0.05)' : undefined,
                        cursor: loading ? 'not-allowed' : 'auto'
                    }}
                />
                {errors.email && <span style={{ color: '#ff6b6b', fontSize: '0.85rem', marginTop: '0.25rem', display: 'block' }}>⚠️ {errors.email}</span>}
            </div>

            <div className="form-group">
                <label htmlFor="club">Klubb / Bedrift *</label>
                <input
                    type="text"
                    id="club"
                    name="club"
                    value={formData.club}
                    onChange={handleChange}
                    placeholder="Din golfklubb eller bedrift"
                    disabled={loading}
                    style={{
                        borderColor: errors.club ? '#ff6b6b' : undefined,
                        backgroundColor: errors.club ? 'rgba(255, 107, 107, 0.05)' : undefined,
                        cursor: loading ? 'not-allowed' : 'auto'
                    }}
                />
                {errors.club && <span style={{ color: '#ff6b6b', fontSize: '0.85rem', marginTop: '0.25rem', display: 'block' }}>⚠️ {errors.club}</span>}
            </div>

            <div className="form-group">
                <label htmlFor="interest">Hva er du interessert i? *</label>
                <select
                    id="interest"
                    name="interest"
                    value={formData.interest}
                    onChange={handleChange}
                    disabled={loading}
                    style={{
                        borderColor: errors.interest ? '#ff6b6b' : undefined,
                        backgroundColor: errors.interest ? 'rgba(255, 107, 107, 0.05)' : undefined,
                        cursor: loading ? 'not-allowed' : 'pointer'
                    }}
                >
                    {interests.map((int) => (
                        <option key={int} value={int}>
                            {int}
                        </option>
                    ))}
                </select>
                {errors.interest && <span style={{ color: '#ff6b6b', fontSize: '0.85rem', marginTop: '0.25rem', display: 'block' }}>⚠️ {errors.interest}</span>}
            </div>

            <div className="form-group">
                <label htmlFor="message">Melding (valgfritt)</label>
                <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Fortell oss mer om dine behov..."
                    rows={4}
                    disabled={loading}
                    style={{ cursor: loading ? 'not-allowed' : 'auto' }}
                />
            </div>

            <button
                type="submit"
                className="btn btn-primary"
                disabled={loading}
                style={{
                    width: '100%',
                    opacity: loading ? 0.6 : 1,
                    cursor: loading ? 'not-allowed' : 'pointer'
                }}
            >
                {loading ? '📤 Sender...' : 'Send henvendelse'}
            </button>

            <p style={{ fontSize: '0.85rem', color: 'var(--color-gray-light)', marginTop: '1rem', textAlign: 'center' }}>
                * Påkrevde felt
            </p>
        </form>
    )
}

export default ContactForm

