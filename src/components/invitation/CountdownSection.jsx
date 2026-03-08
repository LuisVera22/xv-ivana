export function CountdownSection({ title, timeLeft }) {
  const items = [
    { value: timeLeft.days, label: 'dias' },
    { value: timeLeft.hours, label: 'hs' },
    { value: timeLeft.minutes, label: 'min' },
    { value: timeLeft.seconds, label: 'seg' },
  ]

  return (
    <section className="countdown-section" aria-label="Cuenta regresiva" data-reveal style={{ '--reveal-delay': '0ms' }}>
      <div className="countdown-title-wrap" data-reveal style={{ '--reveal-delay': '40ms' }}>
        <p className="countdown-title">{title}</p>
      </div>
      <div className="countdown" role="timer" aria-live="polite">
        {items.map((item, index) => (
          <div className="countdown-item" key={item.label} data-reveal style={{ '--reveal-delay': `${90 + index * 45}ms` }}>
            <span className="countdown-value" key={`${item.label}-${item.value}`}>
              {item.value}
            </span>
            <span className="countdown-label">{item.label}</span>
          </div>
        ))}
      </div>
    </section>
  )
}
