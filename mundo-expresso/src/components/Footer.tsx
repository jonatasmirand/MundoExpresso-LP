const columns = [
  {
    title: 'Institucional',
    links: ['Quem somos', 'Trabalhe conosco', 'Política de privacidade', 'Termos de uso'],
  },
  {
    title: 'Ajuda',
    links: ['Central de atendimento', 'Rastrear pedido', 'Trocas e devoluções', 'Prazos de entrega'],
  },
  {
    title: 'Categorias',
    links: ['Eletrônicos', 'Casa & Cozinha', 'Beleza', 'Games'],
  },
]

const payments = ['Pix', 'Boleto', 'Visa', 'Mastercard', 'Elo', 'Amex']

const currentYear = new Date().getFullYear()

const socials = [
  { label: 'Instagram', emoji: '📷' },
  { label: 'TikTok', emoji: '🎵' },
  { label: 'YouTube', emoji: '▶️' },
  { label: 'WhatsApp', emoji: '💬' },
]

function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__grid">
        <div className="footer__brand">
          <a className="logo logo--light" href="#topo">
            <span className="logo__mark" aria-hidden="true">
              ME
            </span>
            <span className="logo__text">
              Mundo <strong>Expresso</strong>
            </span>
          </a>
          <p>
            Importados e ofertas com nota fiscal, garantia de 12 meses e entrega
            rastreada para todo o Brasil.
          </p>
          <div className="footer__socials">
            {socials.map((social) => (
              <a key={social.label} href="#topo" aria-label={social.label}>
                <span aria-hidden="true">{social.emoji}</span>
              </a>
            ))}
          </div>
        </div>

        {columns.map((column) => (
          <nav className="footer__col" key={column.title} aria-label={column.title}>
            <h3>{column.title}</h3>
            <ul>
              {column.links.map((link) => (
                <li key={link}>
                  <a href="#topo">{link}</a>
                </li>
              ))}
            </ul>
          </nav>
        ))}

        <div className="footer__col">
          <h3>Formas de pagamento</h3>
          <div className="footer__payments">
            {payments.map((payment) => (
              <span className="badge-pay" key={payment}>
                {payment}
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className="container footer__bottom">
        <p>
          Mundo Expresso Comércio Digital LTDA · CNPJ 12.345.678/0001-90 · Av. das
          Américas, 1000 — São Paulo/SP
        </p>
        <p>© {currentYear} Mundo Expresso. Todos os direitos reservados.</p>
      </div>
    </footer>
  )
}

export default Footer
