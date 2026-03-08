export function EventDateSection({ month, weekday, day, time, year }) {
  return (
    <section className="event-date-section" aria-label="Fecha del evento" data-reveal style={{ '--reveal-delay': '0ms' }}>
      <p className="event-date-section__month" data-reveal style={{ '--reveal-delay': '40ms' }}>
        {month}
      </p>

      <div className="event-date-section__ornament" aria-hidden="true" data-reveal style={{ '--reveal-delay': '80ms' }}>
        <span className="event-date-section__line" />
      </div>

      <div className="event-date-section__main" data-reveal style={{ '--reveal-delay': '120ms' }}>
        <p className="event-date-section__weekday">{weekday}</p>
        <p className="event-date-section__day">{day}</p>
        <p className="event-date-section__time">{time}</p>
      </div>

      <div
        className="event-date-section__ornament event-date-section__ornament--bottom"
        aria-hidden="true"
        data-reveal
        style={{ '--reveal-delay': '160ms' }}
      >
        <span className="event-date-section__line" />
      </div>

      <p className="event-date-section__year" data-reveal style={{ '--reveal-delay': '200ms' }}>
        {year}
      </p>
    </section>
  )
}
