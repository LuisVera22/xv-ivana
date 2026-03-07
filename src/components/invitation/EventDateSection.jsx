export function EventDateSection({ month, weekday, day, time, year }) {
  return (
    <section className="event-date-section" aria-label="Fecha del evento">
      <p className="event-date-section__month">{month}</p>

      <div className="event-date-section__ornament" aria-hidden="true">
        <span className="event-date-section__line" />
      </div>

      <div className="event-date-section__main">
        <p className="event-date-section__weekday">{weekday}</p>
        <p className="event-date-section__day">{day}</p>
        <p className="event-date-section__time">{time}</p>
      </div>

      <div className="event-date-section__ornament event-date-section__ornament--bottom" aria-hidden="true">
        <span className="event-date-section__line" />
      </div>

      <p className="event-date-section__year">{year}</p>
    </section>
  )
}
