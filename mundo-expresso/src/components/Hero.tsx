import logo from '../assets/logo.png'
import { contact } from '../data/content'

function Hero() {
  return (
    <section className="hero" id="topo">
      <div className="container hero__inner">
        <div className="hero__content">
          <span className="pill animate-fade-in-up">Transporte e logística</span>
          <h1 className="animate-fade-in-up stagger-1">
            Sua carga entregue de forma{' '}
            <span className="highlight-text">segura, rápida e pontual</span>
          </h1>
          <p className="animate-fade-in-up stagger-2">
            Transportamos todos os tipos de materiais com eficiência e
            responsabilidade, superando as expectativas dos nossos clientes em
            pequenas, médias e grandes distâncias.
          </p>
          <div className="hero__cta animate-fade-in-up stagger-3">
            <a
              className="button button--primary"
              href={contact.whatsapp}
              target="_blank"
              rel="noreferrer"
            >
              Solicitar orçamento
            </a>
            <a className="button button--ghost" href="#servicos">
              Conhecer os serviços
            </a>
          </div>
          <dl className="hero__stats animate-fade-in-up stagger-4">
            <div>
              <dt>Todo tipo</dt>
              <dd>de material, pequeno e médio porte</dd>
            </div>
            <div>
              <dt>Veículos</dt>
              <dd>adaptados a cada solicitação</dd>
            </div>
            <div>
              <dt>Emergência</dt>
              <dd>sempre atendida</dd>
            </div>
          </dl>
        </div>

        <div className="hero__art animate-scale-in stagger-2">
          <img src={logo} alt="Logo Mundo Expresso Transportadora" />
        </div>
      </div>
    </section>
  )
}

export default Hero
