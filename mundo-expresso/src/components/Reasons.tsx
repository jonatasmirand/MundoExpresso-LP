import { reasons } from '../data/content'

function Reasons() {
  return (
    <section className="section" id="diferenciais">
      <div className="container">
        <header className="section__head">
          <h2>Por que nos contratar?</h2>
          <p>Três motivos que fazem a diferença na sua operação.</p>
        </header>

        <div className="reasons">
          {reasons.map((reason) => (
            <article className="reason" key={reason.number}>
              <span className="reason__number" aria-hidden="true">
                {reason.number}
              </span>
              <div>
                <h3>{reason.title}</h3>
                <p>{reason.text}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Reasons
