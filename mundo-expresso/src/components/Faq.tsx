import { useState } from 'react'
import { faqs } from '../data/content'

function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <section className="section" id="faq">
      <div className="container container--narrow">
        <header className="section__head">
          <h2>Perguntas frequentes</h2>
          <p>Ainda com dúvida? Fale com a gente pelo WhatsApp.</p>
        </header>

        <div className="faq">
          {faqs.map((faq, index) => {
            const open = openIndex === index
            return (
              <div className={`faq__item ${open ? 'faq__item--open' : ''}`} key={faq.question}>
                <button
                  type="button"
                  className="faq__question"
                  aria-expanded={open}
                  onClick={() => setOpenIndex(open ? null : index)}
                >
                  <span>{faq.question}</span>
                  <span className="faq__chevron" aria-hidden="true">
                    ⌄
                  </span>
                </button>
                {open && <p className="faq__answer">{faq.answer}</p>}
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Faq
