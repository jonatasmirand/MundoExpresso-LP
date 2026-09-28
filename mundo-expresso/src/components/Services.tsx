import { services } from '../data/content'

function Services() {
  return (
    <section className="section" id="servicos">
      <div className="container">
        <header className="section__head">
          <h2>Transportes e serviços</h2>
          <p>
            Nossa logística é especializada em pequenas, médias e grandes distâncias,
            com veículos adaptados ao que cada cliente precisa.
          </p>
        </header>

        <div className="cards">
          {services.map((service) => (
            <article className="card" key={service.id}>
              <span className="card__icon" aria-hidden="true">
                {service.emoji}
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
