import { categories } from '../data/content'

function Categories() {
  return (
    <section className="section" id="categorias">
      <div className="container">
        <header className="section__head">
          <h2>Compre por categoria</h2>
          <p>Mais de 5 mil produtos selecionados e prontos para envio.</p>
        </header>

        <div className="categories">
          {categories.map((category) => (
            <a className="category" href="#ofertas" key={category.id}>
              <span className="category__icon" aria-hidden="true">
                {category.emoji}
              </span>
              <strong>{category.name}</strong>
              <small>{category.items} produtos</small>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Categories
