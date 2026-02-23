export function CountdownSection({ title, timeLeft }) {
  return (
    <section className="countdown-section" aria-label="Cuenta regresiva">
      <p className="section-title">{title}</p>
      <div className="countdown" role="timer" aria-live="polite">
        <span>{timeLeft.days}</span>
        <span className="separator">:</span>
        <span>{timeLeft.hours}</span>
        <span className="separator">:</span>
        <span>{timeLeft.minutes}</span>
        <span className="separator">:</span>
        <span>{timeLeft.seconds}</span>
      </div>
    </section>
  )
}
