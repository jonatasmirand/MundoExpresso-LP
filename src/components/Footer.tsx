import logo from '../assets/logo.png'
import { contact, services } from '../data/content'

const currentYear = new Date().getFullYear()

const links = [
  { href: '#servicos', label: 'Serviços' },
  { href: '#empresa', label: 'A empresa' },
  { href: '#objetivos', label: 'Objetivos' },
  { href: '#diferenciais', label: 'Por que nos contratar' },
  { href: '#faq', label: 'Dúvidas frequentes' },
]

function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__grid">
        <div className="footer__brand">
          <a className="logo logo--light" href="#topo">
            <img src={logo} alt="Mundo Expresso Transportadora" />
            <span className="logo__text">
              Mundo <strong>Expresso</strong>
              <small>Transportadora</small>
            </span>
          </a>
          <p>
            Transporte de todos os tipos de materiais de forma segura, rápida,
            eficiente, pontual e responsável.
          </p>
        </div>

        <nav className="footer__col" aria-label="Navegação">
          <h3>Navegue</h3>
          <ul>
            {links.map((link) => (
              <li key={link.href}>
                <a href={link.href}>{link.label}</a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="footer__col">
          <h3>Serviços</h3>
          <ul>
            {services.slice(0, 4).map((service) => (
              <li key={service.id}>
                <a href="#servicos">{service.title}</a>
              </li>
            ))}
          </ul>
        </div>

        <div className="footer__col">
          <h3>Contato</h3>
          <ul>
            <li>
              <a href={contact.whatsapp} target="_blank" rel="noreferrer">
                WhatsApp {contact.phone}
              </a>
            </li>
            <li>
              <a href={`mailto:${contact.email}`}>{contact.email}</a>
            </li>
            <li>
              <a href={contact.instagramUrl} target="_blank" rel="noreferrer">
                Instagram {contact.instagram}
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="container footer__bottom">
        <p>© {currentYear} Mundo Expresso Transportadora. Todos os direitos reservados.</p>
        <a href={contact.whatsapp} target="_blank" rel="noreferrer">
          Solicitar orçamento
        </a>
      </div>
    </footer>
  )
}

export default Footer
