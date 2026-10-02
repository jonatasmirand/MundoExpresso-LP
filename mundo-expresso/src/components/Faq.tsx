import { useState } from 'react'
import { faqs } from '../data/content'
import { FaChevronDown } from 'react-icons/fa'
import { useScrollAnimation } from '../hooks/useScrollAnimation'

function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)
  const [sectionRef, isVisible] = useScrollAnimation()

  return (
    <section className="section" id="faq" ref={sectionRef}>
      <div className="container container--narrow">
        <header className={`section__head animate-on-scroll ${isVisible ? 'visible' : ''}`}>
          <h2>Perguntas frequentes</h2>
          <p>Ainda com dúvida? Fale com a gente pelo WhatsApp.</p>
        </header>

        <div className="faq">
          {faqs.map((faq, index) => {
            const open = openIndex === index
            return (
              <div
                className={`faq__item animate-on-scroll stagger-${index + 1} ${isVisible ? 'visible' : ''} ${open ? 'faq__item--open' : ''}`}
                key={faq.question}
              >
                <button
                  type="button"
                  className="faq__question"
                  aria-expanded={open}
                  onClick={() => setOpenIndex(open ? null : index)}
                >
                  <span>{faq.question}</span>
                  <span className="faq__chevron" aria-hidden="true">
                    <FaChevronDown />
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
