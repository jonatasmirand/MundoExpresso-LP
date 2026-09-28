import { pillars } from '../data/content'

function About() {
  return (
    <section className="section section--surface" id="empresa">
      <div className="container">
        <header className="section__head">
          <h2>A empresa</h2>
          <p>
            Missão, valores e propósito que orientam cada entrega do Mundo Expresso.
          </p>
        </header>

        <div className="pillars">
          {pillars.map((pillar) => (
            <article className="pillar" key={pillar.id}>
              <span className="pillar__icon" aria-hidden="true">
                {pillar.emoji}
              </span>
              <h3>{pillar.title}</h3>
              <p>{pillar.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default About
