import { useState } from 'react'
import { Link } from 'react-router-dom'
import mainLogo from '../assets/logos/Golfklubb-it-Main-logo.png'
import '../App.css'

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen)
    }

    const closeMenu = () => {
        setIsMenuOpen(false)
    }

    return (
        <nav className="nav container">
            <div className="logo">
                <Link to="/" onClick={closeMenu}>
                    <img src={mainLogo} alt="Golfklubbens IT Logo" style={{ height: '60px', width: 'auto' }} />
                </Link>
            </div>

            <div className="hamburger" onClick={toggleMenu}>
                <span className={`bar ${isMenuOpen ? 'active' : ''}`}></span>
                <span className={`bar ${isMenuOpen ? 'active' : ''}`}></span>
                <span className={`bar ${isMenuOpen ? 'active' : ''}`}></span>
            </div>

            <ul className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
                <li><Link to="/services" onClick={closeMenu}>Tjenester</Link></li>
                <li><Link to="/projects" onClick={closeMenu}>Prosjekter</Link></li>
                <li><Link to="/about" onClick={closeMenu}>Om oss</Link></li>
                <li><a href="#kontakt" onClick={closeMenu}>Kontakt</a></li>
            </ul>
        </nav>
    )
}

export default Navbar
