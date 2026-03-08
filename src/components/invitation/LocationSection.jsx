import { SectionTitle } from './SectionTitle'

export function LocationSection({ title, venue, address, mapEmbedUrl }) {
  return (
    <section className="location-section" aria-label="Ubicacion" data-reveal style={{ '--reveal-delay': '0ms' }}>
      <SectionTitle className="section-heading--light" data-reveal style={{ '--reveal-delay': '40ms' }}>
        {title}
      </SectionTitle>
      <p className="venue" data-reveal style={{ '--reveal-delay': '90ms' }}>
        {venue}
      </p>
      <p className="address" data-reveal style={{ '--reveal-delay': '130ms' }}>
        {address}
      </p>
      <div className="map-frame" data-reveal style={{ '--reveal-delay': '180ms' }}>
        <iframe
          src={mapEmbedUrl}
          title="Mapa de la ubicacion del evento"
          loading="lazy"
          allowFullScreen
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
    </section>
  )
}
