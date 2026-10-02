import { benefits } from '../data/content'
import { FaBolt, FaShieldAlt, FaClock, FaHandshake } from 'react-icons/fa'
import { useScrollAnimation } from '../hooks/useScrollAnimation'

const iconMap = {
  '⚡': <FaBolt />,
  '🛡️': <FaShieldAlt />,
  '🕒': <FaClock />,
  '🤝': <FaHandshake />,
}

function Benefits() {
  const [sectionRef, isVisible] = useScrollAnimation()

  return (
    <section className="benefits" aria-label="Vantagens de contratar o Mundo Expresso" ref={sectionRef}>
      <div className="container benefits__grid">
        {benefits.map((benefit, index) => (
          <div
            className={`benefit animate-on-scroll stagger-${index + 1} ${isVisible ? 'visible' : ''}`}
            key={benefit.title}
          >
            <span className="benefit__icon" aria-hidden="true">
              {iconMap[benefit.emoji as keyof typeof iconMap] || benefit.emoji}
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
