import { useState } from 'react'
import { contact } from '../data/content'
import { FaMobileAlt, FaEnvelope, FaInstagram, FaCheckCircle } from 'react-icons/fa'
import { useScrollAnimation } from '../hooks/useScrollAnimation'
import emailjs from '@emailjs/browser'

// EmailJS Configuration
const EMAILJS_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY || 'YOUR_PUBLIC_KEY'
const EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID || 'YOUR_SERVICE_ID'
const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID || 'YOUR_TEMPLATE_ID'

function Contact() {
  const [form, setForm] = useState({ name: '', phone: '', cargo: '' })
  const [sent, setSent] = useState(false)
  const [sending, setSending] = useState(false)
  const [error, setError] = useState('')
  const [sectionRef, isVisible] = useScrollAnimation()

  const update = (field: keyof typeof form) => (value: string) => {
    setForm((current) => ({ ...current, [field]: value }))
    setSent(false)
    setError('')
  }

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault()
    setSending(true)
    setError('')

    try {
      // Initialize EmailJS if not already initialized
      if (EMAILJS_PUBLIC_KEY !== 'YOUR_PUBLIC_KEY') {
        emailjs.init(EMAILJS_PUBLIC_KEY)
      }

      // Send email using EmailJS
      const templateParams = {
        from_name: form.name,
        phone: form.phone,
        cargo: form.cargo,
        to_email: contact.email,
      }

      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        templateParams
      )

      setSent(true)
      setForm({ name: '', phone: '', cargo: '' })
    } catch (err) {
      console.error('Error sending email:', err)
      setError('Erro ao enviar. Por favor, tente novamente ou chame no WhatsApp.')
    } finally {
      setSending(false)
    }
  }

  return (
    <section className="contact" id="contato" ref={sectionRef}>
      <div className="container contact__inner">
        <div className={`contact__info animate-on-scroll ${isVisible ? 'visible' : ''}`}>
          <h2>Peça seu orçamento</h2>
          <p>
            Conte o que precisa transportar e a nossa equipe retorna com a melhor
            solução logística para a sua necessidade.
          </p>

          <ul className="contact__list">
            <li>
              <FaMobileAlt aria-hidden="true" />
              <a href={contact.whatsapp} target="_blank" rel="noreferrer">
                {contact.phone}
              </a>
            </li>
            <li>
              <FaEnvelope aria-hidden="true" />
              <a href={`mailto:${contact.email}`}>{contact.email}</a>
            </li>
            <li>
              <FaInstagram aria-hidden="true" />
              <a href={contact.instagramUrl} target="_blank" rel="noreferrer">
                {contact.instagram}
              </a>
            </li>
          </ul>
        </div>

        <form
          className={`contact__form animate-on-scroll stagger-1 ${isVisible ? 'visible' : ''}`}
          onSubmit={handleSubmit}
        >
          <label htmlFor="nome">Nome</label>
          <input
            id="nome"
            required
            placeholder="Como podemos te chamar?"
            value={form.name}
            onChange={(event) => update('name')(event.target.value)}
            disabled={sending}
          />

          <label htmlFor="telefone">Telefone / WhatsApp</label>
          <input
            id="telefone"
            type="tel"
            required
            placeholder="(21) 90000-0000"
            value={form.phone}
            onChange={(event) => update('phone')(event.target.value)}
            disabled={sending}
          />

          <label htmlFor="carga">O que precisa transportar?</label>
          <textarea
            id="carga"
            rows={4}
            required
            placeholder="Tipo de material, origem, destino e prazo"
            value={form.cargo}
            onChange={(event) => update('cargo')(event.target.value)}
            disabled={sending}
          />

          <button
            type="submit"
            className="button button--primary button--block"
            disabled={sending}
          >
            {sending ? 'Enviando...' : 'Enviar solicitação'}
          </button>
          <p className="contact__note" role="status">
            {error ? (
              <span style={{ color: 'var(--red-500)' }}>{error}</span>
            ) : sent ? (
              <>
                <FaCheckCircle aria-hidden="true" /> Recebemos sua solicitação! Em breve entramos em contato.
              </>
            ) : (
              `Prefere falar agora? Chame no WhatsApp ${contact.phone}.`
            )}
          </p>
        </form>
      </div>
    </section>
  )
}

export default Contact
