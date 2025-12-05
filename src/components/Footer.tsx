import companyConfig from '../config/companyConfig'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem', marginBottom: '3rem' }}>
          {/* Firma info */}
          <div>
            <h4 style={{ color: 'var(--color-gkit-green)', marginBottom: '1rem' }}>
              <span className="text-gradient-green">{companyConfig.shortName}</span> – {companyConfig.name}
            </h4>
            <p style={{ color: 'var(--color-gray-light)', fontSize: '0.9rem', lineHeight: '1.6' }}>
              {companyConfig.tagline}
            </p>
          </div>

          {/* Kontakt */}
          <div>
            <h4 style={{ color: 'var(--color-gkit-green)', marginBottom: '1rem' }}>Kontakt</h4>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
              <li style={{ marginBottom: '0.5rem' }}>
                <a href={`mailto:${companyConfig.email}`} style={{ color: 'var(--color-gray-light)', textDecoration: 'none' }}>
                  {companyConfig.email}
                </a>
              </li>
              <li style={{ marginBottom: '0.5rem' }}>
                <a href={`tel:${companyConfig.phone.replace(/\s/g, '')}`} style={{ color: 'var(--color-gray-light)', textDecoration: 'none' }}>
                  {companyConfig.phone}
                </a>
              </li>
              <li style={{ color: 'var(--color-gray-light)', fontSize: '0.9rem', marginBottom: '0.5rem' }}>
                {companyConfig.address}
              </li>
              <li style={{ color: 'var(--color-gray-light)', fontSize: '0.9rem' }}>
                Org.nr: {companyConfig.organizationNumber}
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 style={{ color: 'var(--color-gkit-green)', marginBottom: '1rem' }}>Support</h4>
            <p style={{ color: 'var(--color-gray-light)', fontSize: '0.9rem' }}>
              Kundesupport: <strong>{companyConfig.supportHours}</strong>
            </p>
            <p style={{ color: 'var(--color-gray-light)', fontSize: '0.9rem', marginTop: '1rem' }}>
              Vi hjelper deg med alt fra setup, teknisk support, til langsiktig vedlikehold.
            </p>
          </div>
        </div>

        {/* Copyright */}
        <div style={{ borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: '2rem', textAlign: 'center' }}>
          <p style={{ color: 'var(--color-gray-light)', fontSize: '0.85rem' }}>
            © {companyConfig.copyrightYear} {companyConfig.name}. {companyConfig.tagline}
          </p>
          <p style={{ color: 'var(--color-gray-light)', fontSize: '0.75rem', marginTop: '0.5rem' }}>
            Golfklubbens IT-partner
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
