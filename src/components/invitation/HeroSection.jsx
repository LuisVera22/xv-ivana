export function HeroSection({ date, name, message }) {
  return (
    <header className="hero">
      <p className="event-date">{date}</p>
      <h1 className="name">{name}</h1>
      <p className="message">{message}</p>
    </header>
  )
}
