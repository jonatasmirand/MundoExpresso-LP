import { testimonials } from '../data/content'
import Rating from './Rating'

function Testimonials() {
  return (
    <section className="section" id="depoimentos">
      <div className="container">
        <header className="section__head">
          <h2>Quem compra, recomenda</h2>
          <p>Mais de 18 mil avaliações verificadas de clientes reais.</p>
        </header>

        <div className="testimonials">
          {testimonials.map((testimonial) => (
            <figure className="testimonial" key={testimonial.name}>
              <Rating value={testimonial.rating} />
              <blockquote>{testimonial.text}</blockquote>
              <figcaption>
                <span className="testimonial__avatar" aria-hidden="true">
                  {testimonial.avatar}
                </span>
                <span>
                  <strong>{testimonial.name}</strong>
                  <small>{testimonial.city}</small>
                </span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonials
