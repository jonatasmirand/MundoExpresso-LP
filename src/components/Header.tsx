import { useState } from 'react'
import logo from '../assets/logo.png'
import { contact } from '../data/content'
import { FaPhone, FaBars } from 'react-icons/fa'

const navLinks = [
  { href: '#servicos', label: 'Serviços' },
  { href: '#empresa', label: 'A empresa' },
  { href: '#objetivos', label: 'Objetivos' },
  { href: '#diferenciais', label: 'Por que nos contratar' },
  { href: '#faq', label: 'Dúvidas' },
  { href: '#contato', label: 'Contato' },
]

function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="header">
      <div className="container header__inner">
        <a className="logo" href="#topo">
          <img src={logo} alt="Mundo Expresso Transportadora" />
          <span className="logo__text">
            Mundo <strong>Expresso</strong>
            <small>Transportadora</small>
          </span>
        </a>

        <nav className={`nav ${menuOpen ? 'nav--open' : ''}`} aria-label="Principal">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} onClick={() => setMenuOpen(false)}>
              {link.label}
            </a>
          ))}
        </nav>

        <div className="header__actions">
          <a className="header__phone" href={contact.phoneHref}>
            <FaPhone aria-hidden="true" />
            {contact.phone}
          </a>
          <a
            className="button button--primary button--sm"
            href={contact.whatsapp}
            target="_blank"
            rel="noreferrer"
          >
            Pedir orçamento
          </a>
          <button
            type="button"
            className="menu-toggle"
            aria-expanded={menuOpen}
            aria-label="Abrir menu"
            onClick={() => setMenuOpen((open) => !open)}
          >
            <FaBars />
          </button>
        </div>
      </div>
    </header>
  )
}

export default Header
