import { useState } from 'react'

const navLinks = [
  { href: '#ofertas', label: 'Ofertas' },
  { href: '#categorias', label: 'Categorias' },
  { href: '#relampago', label: 'Oferta relâmpago' },
  { href: '#depoimentos', label: 'Depoimentos' },
  { href: '#faq', label: 'Dúvidas' },
]

function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [query, setQuery] = useState('')

  return (
    <header className="header">
      <div className="container header__inner">
        <a className="logo" href="#topo">
          <span className="logo__mark" aria-hidden="true">
            ME
          </span>
          <span className="logo__text">
            Mundo <strong>Expresso</strong>
          </span>
        </a>

        <form
          className="search"
          role="search"
          onSubmit={(event) => event.preventDefault()}
        >
          <label className="sr-only" htmlFor="busca">
            Buscar produtos
          </label>
          <input
            id="busca"
            type="search"
            placeholder="Busque por fone, air fryer, smartwatch..."
            value={query}
            onChange={(event) => setQuery(event.target.value)}
          />
          <button type="submit" aria-label="Buscar">
            🔍
          </button>
        </form>

        <div className="header__actions">
          <a className="icon-button" href="#newsletter">
            <span aria-hidden="true">👤</span>
            <span className="icon-button__label">Minha conta</span>
          </a>
          <a className="icon-button" href="#ofertas">
            <span aria-hidden="true">🛒</span>
            <span className="icon-button__label">Carrinho</span>
            <span className="badge">3</span>
          </a>
          <button
            type="button"
            className="menu-toggle"
            aria-expanded={menuOpen}
            aria-label="Abrir menu de categorias"
            onClick={() => setMenuOpen((open) => !open)}
          >
            ☰
          </button>
        </div>
      </div>

      <nav className={`nav ${menuOpen ? 'nav--open' : ''}`} aria-label="Categorias">
        <div className="container nav__inner">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} onClick={() => setMenuOpen(false)}>
              {link.label}
            </a>
          ))}
        </div>
      </nav>
    </header>
  )
}

export default Header
