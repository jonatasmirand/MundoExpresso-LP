import { useEffect, useState } from 'react'
import { discountPercent, formatBRL, products } from '../data/products'

const SALE_DURATION = 6 * 60 * 60 * 1000

const getRemaining = (deadline: number) => Math.max(0, deadline - Date.now())

const pad = (value: number) => String(value).padStart(2, '0')

function FlashSale() {
  const [deadline] = useState(() => Date.now() + SALE_DURATION)
  const [remaining, setRemaining] = useState(() => getRemaining(deadline))

  useEffect(() => {
    const id = setInterval(() => setRemaining(getRemaining(deadline)), 1000)
    return () => clearInterval(id)
  }, [deadline])

  const totalSeconds = Math.floor(remaining / 1000)
  const hours = Math.floor(totalSeconds / 3600)
  const minutes = Math.floor((totalSeconds % 3600) / 60)
  const seconds = totalSeconds % 60

  const deal = products[5]
  const discount = discountPercent(deal.price, deal.oldPrice)

  return (
    <section className="flash" id="relampago">
      <div className="container flash__inner">
        <div className="flash__content">
          <span className="pill pill--light">⚡ Oferta relâmpago</span>
          <h2>{deal.name}</h2>
          <p>
            Só hoje com <strong>{discount}% de desconto</strong> e frete grátis para
            todo o Brasil. Restam poucas unidades em estoque.
          </p>

          <div className="flash__prices">
            <s>{formatBRL(deal.oldPrice)}</s>
            <strong>{formatBRL(deal.price)}</strong>
          </div>

          <div className="countdown" role="timer" aria-live="off">
            <div className="countdown__box">
              <strong>{pad(hours)}</strong>
              <small>horas</small>
            </div>
            <span aria-hidden="true">:</span>
            <div className="countdown__box">
              <strong>{pad(minutes)}</strong>
              <small>min</small>
            </div>
            <span aria-hidden="true">:</span>
            <div className="countdown__box">
              <strong>{pad(seconds)}</strong>
              <small>seg</small>
            </div>
          </div>

          <a className="button button--light" href="#ofertas">
            Aproveitar agora
          </a>
        </div>

        <div className="flash__art" aria-hidden="true">
          <span>{deal.emoji}</span>
          <div className="flash__stock">
            <div className="flash__bar">
              <span style={{ width: '22%' }} />
            </div>
            <small>Restam 22% do estoque</small>
          </div>
        </div>
      </div>
    </section>
  )
}

export default FlashSale
