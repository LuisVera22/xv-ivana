export function LocationSection({ title, venue, address }) {
  return (
    <section className="location-section" aria-label="Ubicacion">
      <h2>{title}</h2>
      <p className="venue">{venue}</p>
      <p className="address">{address}</p>
    </section>
  )
}
