import { useEffect, useState } from 'react'

const messages = [
  '🚚 Frete grátis em compras acima de R$199',
  '🔥 Até 50% OFF em eletrônicos importados',
  '💳 Pix com 10% de desconto ou 12x sem juros',
]

function Topbar() {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((current) => (current + 1) % messages.length)
    }, 4000)
    return () => clearInterval(id)
  }, [])

  return (
    <div className="topbar">
      <div className="container topbar__inner">
        <button
          type="button"
          className="topbar__arrow"
          aria-label="Aviso anterior"
          onClick={() =>
            setIndex((current) => (current - 1 + messages.length) % messages.length)
          }
        >
          ‹
        </button>
        <p className="topbar__message" key={index} aria-live="polite">
          {messages[index]}
        </p>
        <button
          type="button"
          className="topbar__arrow"
          aria-label="Próximo aviso"
          onClick={() => setIndex((current) => (current + 1) % messages.length)}
        >
          ›
        </button>
      </div>
    </div>
  )
}

export default Topbar
