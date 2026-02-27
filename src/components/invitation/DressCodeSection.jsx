export function DressCodeSection({ title, labels, forbidden }) {
  return (
    <section className="dress-section" aria-label="Dress code">
      <h2>{title}</h2>

      <div className="dress-row">
        <p>{labels.ladies}</p>
        <p className="dress-forbidden">{forbidden}</p>
        <p>{labels.gentlemen}</p>
      </div>
      <div className="dress-not-allowed" aria-label={forbidden}>
        <div className="dress-swatches" aria-hidden="true">
          <span className="swatch-gold" />
          <span className="swatch-black" />
        </div>
      </div>
    </section>
  )
}
