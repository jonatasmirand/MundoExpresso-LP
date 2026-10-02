import { services } from '../data/content'
import { FaBox, FaTruck, FaMapMarkedAlt, FaAmbulance, FaSyncAlt, FaClipboardList } from 'react-icons/fa'
import { useScrollAnimation } from '../hooks/useScrollAnimation'

const iconMap = {
  '📦': <FaBox />,
  '🚐': <FaTruck />,
  '🗺️': <FaMapMarkedAlt />,
  '🚨': <FaAmbulance />,
  '🔄': <FaSyncAlt />,
  '📋': <FaClipboardList />,
}

function Services() {
  const [sectionRef, isVisible] = useScrollAnimation()

  return (
    <section className="section" id="servicos" ref={sectionRef}>
      <div className="container">
        <header className={`section__head animate-on-scroll ${isVisible ? 'visible' : ''}`}>
          <h2>Transportes e serviços</h2>
          <p>
            Nossa logística é especializada em pequenas, médias e grandes distâncias,
            com veículos adaptados ao que cada cliente precisa.
          </p>
        </header>

        <div className="cards">
          {services.map((service, index) => (
            <article
              className={`card animate-on-scroll stagger-${index + 1} ${isVisible ? 'visible' : ''}`}
              key={service.id}
            >
              <span className="card__icon" aria-hidden="true">
                {iconMap[service.emoji as keyof typeof iconMap] || service.emoji}
              </span>
              <h3>{service.title}</h3>
              <p>{service.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services
