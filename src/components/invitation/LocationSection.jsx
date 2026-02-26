export function LocationSection({ title, venue, address, mapEmbedUrl }) {
  return (
    <section className="location-section" aria-label="Ubicacion">
      <h2>{title}</h2>
      <p className="venue">{venue}</p>
      <p className="address">{address}</p>
      <div className="map-frame">
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
