import { useState } from 'react'
import { contact } from '../data/content'

function Contact() {
  const [form, setForm] = useState({ name: '', phone: '', cargo: '' })
  const [sent, setSent] = useState(false)

  const update = (field: keyof typeof form) => (value: string) => {
    setForm((current) => ({ ...current, [field]: value }))
    setSent(false)
  }

  return (
    <section className="contact" id="contato">
      <div className="container contact__inner">
        <div className="contact__info">
          <h2>Peça seu orçamento</h2>
          <p>
            Conte o que precisa transportar e a nossa equipe retorna com a melhor
            solução logística para a sua necessidade.
          </p>

          <ul className="contact__list">
            <li>
              <span aria-hidden="true">📱</span>
              <a href={contact.whatsapp} target="_blank" rel="noreferrer">
                {contact.phone}
              </a>
            </li>
            <li>
              <span aria-hidden="true">✉️</span>
              <a href={`mailto:${contact.email}`}>{contact.email}</a>
            </li>
            <li>
              <span aria-hidden="true">📷</span>
              <a href={contact.instagramUrl} target="_blank" rel="noreferrer">
                {contact.instagram}
              </a>
            </li>
          </ul>
        </div>

        <form
          className="contact__form"
          onSubmit={(event) => {
            event.preventDefault()
            setSent(true)
          }}
        >
          <label htmlFor="nome">Nome</label>
          <input
            id="nome"
            required
            placeholder="Como podemos te chamar?"
            value={form.name}
            onChange={(event) => update('name')(event.target.value)}
          />

          <label htmlFor="telefone">Telefone / WhatsApp</label>
          <input
            id="telefone"
            type="tel"
            required
            placeholder="(21) 90000-0000"
            value={form.phone}
            onChange={(event) => update('phone')(event.target.value)}
          />

          <label htmlFor="carga">O que precisa transportar?</label>
          <textarea
            id="carga"
            rows={4}
            required
            placeholder="Tipo de material, origem, destino e prazo"
            value={form.cargo}
            onChange={(event) => update('cargo')(event.target.value)}
          />

          <button type="submit" className="button button--primary button--block">
            Enviar solicitação
          </button>
          <p className="contact__note" role="status">
            {sent
              ? '✅ Recebemos sua solicitação! Em breve entramos em contato.'
              : `Prefere falar agora? Chame no WhatsApp ${contact.phone}.`}
          </p>
        </form>
      </div>
    </section>
  )
}

export default Contact
