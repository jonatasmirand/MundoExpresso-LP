import { reasons } from '../data/content'
import { useScrollAnimation } from '../hooks/useScrollAnimation'

function Reasons() {
  const [sectionRef, isVisible] = useScrollAnimation()

  return (
    <section className="section" id="diferenciais" ref={sectionRef}>
      <div className="container">
        <header className={`section__head animate-on-scroll ${isVisible ? 'visible' : ''}`}>
          <h2>Por que nos contratar?</h2>
          <p>Três motivos que fazem a diferença na sua operação.</p>
        </header>

        <div className="reasons">
          {reasons.map((reason, index) => (
            <article
              className={`reason animate-on-scroll stagger-${index + 1} ${isVisible ? 'visible' : ''}`}
              key={reason.number}
            >
              <span className="reason__number" aria-hidden="true">
                {reason.number}
              </span>
              <div>
                <h3>{reason.title}</h3>
                <p>{reason.text}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Reasons
