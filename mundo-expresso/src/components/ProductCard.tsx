import { discountPercent, formatBRL, type Product } from '../data/products'
import Rating from './Rating'

type ProductCardProps = {
  product: Product
}

function ProductCard({ product }: ProductCardProps) {
  const discount = discountPercent(product.price, product.oldPrice)
  const installment = product.price / 12

  return (
    <article className="card">
      <div className="card__media">
        <span className="card__discount">-{discount}%</span>
        {product.tag && <span className="card__tag">{product.tag}</span>}
        <span className="card__emoji" role="img" aria-label={product.category}>
          {product.emoji}
        </span>
      </div>

      <div className="card__body">
        <small className="card__category">{product.category}</small>
        <h3 className="card__title">{product.name}</h3>
        <Rating value={product.rating} reviews={product.reviews} />

        <p className="card__prices">
          <s>{formatBRL(product.oldPrice)}</s>
          <strong>{formatBRL(product.price)}</strong>
          <span>ou 12x de {formatBRL(installment)} sem juros</span>
        </p>

        <button type="button" className="button button--primary button--block">
          Comprar
        </button>
      </div>
    </article>
  )
}

export default ProductCard
