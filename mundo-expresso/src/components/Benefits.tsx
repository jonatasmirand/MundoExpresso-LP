import { benefits } from '../data/content'

function Benefits() {
  return (
    <section className="benefits" aria-label="Vantagens de contratar o Mundo Expresso">
      <div className="container benefits__grid">
        {benefits.map((benefit) => (
          <div className="benefit" key={benefit.title}>
            <span className="benefit__icon" aria-hidden="true">
              {benefit.emoji}
            </span>
            <div>
              <h3>{benefit.title}</h3>
              <p>{benefit.text}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Benefits
