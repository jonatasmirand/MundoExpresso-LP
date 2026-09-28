import heroImg from '../assets/hero.png'

function Hero() {
  return (
    <section className="hero" id="topo">
      <div className="container hero__inner">
        <div className="hero__content">
          <span className="pill">Semana do importado · até 50% OFF</span>
          <h1>
            Tudo o que você quer, <span className="gradient-text">entregue expresso</span>
          </h1>
          <p>
            Eletrônicos, casa, beleza e muito mais com preço de importador, nota fiscal
            e entrega rastreada para todo o Brasil.
          </p>
          <div className="hero__cta">
            <a className="button button--primary" href="#ofertas">
              Ver ofertas do dia
            </a>
            <a className="button button--ghost" href="#categorias">
              Explorar categorias
            </a>
          </div>
          <dl className="hero__stats">
            <div>
              <dt>+120 mil</dt>
              <dd>pedidos entregues</dd>
            </div>
            <div>
              <dt>4.8/5</dt>
              <dd>avaliação média</dd>
            </div>
            <div>
              <dt>2 a 7 dias</dt>
              <dd>prazo médio de entrega</dd>
            </div>
          </dl>
        </div>

        <div className="hero__art">
          <img src={heroImg} alt="Destaque de produtos do Mundo Expresso" />
          <div className="hero__float hero__float--a">
            <strong>-50%</strong>
            <span>Eletrônicos</span>
          </div>
          <div className="hero__float hero__float--b">
            <strong>Frete grátis</strong>
            <span>acima de R$199</span>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
