import { products } from '../data/products'
import ProductCard from './ProductCard'

function ProductGrid() {
  return (
    <section className="section" id="ofertas">
      <div className="container">
        <header className="section__head">
          <h2>Ofertas do dia</h2>
          <p>Preços válidos enquanto durarem os estoques. Envio em até 24h.</p>
        </header>

        <div className="products">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        <div className="section__foot">
          <a className="button button--ghost" href="#categorias">
            Ver todos os produtos
          </a>
        </div>
      </div>
    </section>
  )
}

export default ProductGrid
