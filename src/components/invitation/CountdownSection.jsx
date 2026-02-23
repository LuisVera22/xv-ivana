export function CountdownSection({ title, timeLeft }) {
  const items = [
    { value: timeLeft.days, label: 'dias' },
    { value: timeLeft.hours, label: 'hs' },
    { value: timeLeft.minutes, label: 'min' },
    { value: timeLeft.seconds, label: 'seg' },
  ]

  return (
    <section className="countdown-section" aria-label="Cuenta regresiva">
      <p className="section-title">{title}</p>
      <div className="countdown" role="timer" aria-live="polite">
        {items.map((item) => (
          <div className="countdown-item" key={item.label}>
            <span className="countdown-value">{item.value}</span>
            <span className="countdown-label">{item.label}</span>
          </div>
        ))}
      </div>
    </section>
  )
}
