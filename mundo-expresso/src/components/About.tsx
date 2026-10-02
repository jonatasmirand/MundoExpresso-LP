import { pillars } from '../data/content'
import { FaBullseye, FaHeart, FaGlobeAmericas } from 'react-icons/fa'
import { useScrollAnimation } from '../hooks/useScrollAnimation'

const iconMap = {
  '🎯': <FaBullseye />,
  '🤍': <FaHeart />,
  '🌎': <FaGlobeAmericas />,
}

function About() {
  const [sectionRef, isVisible] = useScrollAnimation()

  return (
    <section className="section section--surface" id="empresa" ref={sectionRef}>
      <div className="container">
        <header className={`section__head animate-on-scroll ${isVisible ? 'visible' : ''}`}>
          <h2>A empresa</h2>
          <p>
            Missão, valores e propósito que orientam cada entrega do Mundo Expresso.
          </p>
        </header>

        <div className="pillars">
          {pillars.map((pillar, index) => (
            <article
              className={`pillar animate-on-scroll stagger-${index + 1} ${isVisible ? 'visible' : ''}`}
              key={pillar.id}
            >
              <span className="pillar__icon" aria-hidden="true">
                {iconMap[pillar.emoji as keyof typeof iconMap] || pillar.emoji}
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
