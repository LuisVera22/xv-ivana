import { SectionTitle } from './SectionTitle'

export function DressCodeSection({ title, labels, forbidden }) {
  return (
    <section className="dress-section" aria-label="Dress code" data-reveal style={{ '--reveal-delay': '0ms' }}>
      <SectionTitle className="section-heading--dress" data-reveal style={{ '--reveal-delay': '40ms' }}>
        {title}
      </SectionTitle>

      <div className="dress-row" data-reveal style={{ '--reveal-delay': '100ms' }}>
        <p>{labels.ladies}</p>
        <p className="dress-forbidden">{forbidden}</p>
        <p>{labels.gentlemen}</p>
      </div>
      <div className="dress-icons-row" data-reveal style={{ '--reveal-delay': '150ms' }}>
        <img
          className="dress-icon"
          src="/icons/ic-tacon.png"
          alt="Icono de tacon para damas"
          loading="lazy"
          decoding="async"
        />
        <div className="dress-swatches" aria-hidden="true">
          <span className="swatch-gold" />
          <span className="swatch-black" />
        </div>
        <img
          className="dress-icon"
          src="/icons/ic-corbata.png"
          alt="Icono de corbata para caballeros"
          loading="lazy"
          decoding="async"
        />
      </div>
    </section>
  )
}
