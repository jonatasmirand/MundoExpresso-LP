import { useState } from 'react'

function Newsletter() {
  const [email, setEmail] = useState('')
  const [sent, setSent] = useState(false)

  return (
    <section className="newsletter" id="newsletter">
      <div className="container newsletter__inner">
        <div>
          <h2>Receba as ofertas antes de todo mundo</h2>
          <p>
            Cadastre seu e-mail e ganhe <strong>R$20 de desconto</strong> na primeira
            compra acima de R$150.
          </p>
        </div>

        <form
          className="newsletter__form"
          onSubmit={(event) => {
            event.preventDefault()
            setSent(true)
          }}
        >
          <label className="sr-only" htmlFor="email">
            Seu melhor e-mail
          </label>
          <input
            id="email"
            type="email"
            required
            placeholder="seu@email.com.br"
            value={email}
            onChange={(event) => {
              setEmail(event.target.value)
              setSent(false)
            }}
          />
          <button type="submit" className="button button--primary">
            Quero meu cupom
          </button>
          <p className="newsletter__note" role="status">
            {sent
              ? '✅ Pronto! Enviamos o cupom para o seu e-mail.'
              : 'Sem spam. Você pode cancelar quando quiser.'}
          </p>
        </form>
      </div>
    </section>
  )
}

export default Newsletter
