export function DressCodeSection({ title, labels, forbidden }) {
  return (
    <section className="dress-section" aria-label="Dress code">
      <h2>{title}</h2>

      <div className="dress-columns">
        <p>{labels.ladies}</p>
        <p>{labels.gentlemen}</p>
      </div>

      <div className="dress-not-allowed">
        <p>{forbidden}</p>
        <div className="dress-swatches" aria-hidden="true">
          <span className="swatch-gold" />
          <span className="swatch-black" />
        </div>
      </div>
    </section>
  )
}
