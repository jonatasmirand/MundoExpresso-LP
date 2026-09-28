import { contact } from '../data/content'

function Objectives() {
  return (
    <section className="objectives" id="objetivos">
      <div className="container objectives__inner">
        <div>
          <span className="pill pill--light">Principais objetivos</span>
          <h2>
            Queremos ser referência no segmento de transporte nos próximos anos
          </h2>
          <p>
            Apesar de estarmos iniciando no segmento, planejamos todos os objetivos
            com o intuito de entregar qualidade e eficiência para os nossos clientes.
            Esperamos não ser apenas uma empresa, mas sim a referência no segmento de
            transporte.
          </p>
          <a
            className="button button--light"
            href={contact.whatsapp}
            target="_blank"
            rel="noreferrer"
          >
            Falar com a equipe
          </a>
        </div>

        <ul className="objectives__list">
          <li>
            <strong>Qualidade</strong>
            <span>Entregar qualidade e eficiência em cada solicitação.</span>
          </li>
          <li>
            <strong>Fidelidade</strong>
            <span>Conquistar a confiança e a fidelidade dos clientes.</span>
          </li>
          <li>
            <strong>Crescimento</strong>
            <span>
              Nos tornar uma das maiores empresas de transporte e logística.
            </span>
          </li>
        </ul>
      </div>
    </section>
  )
}

export default Objectives
