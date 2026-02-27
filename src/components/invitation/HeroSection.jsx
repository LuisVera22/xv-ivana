export function HeroSection({ date, name, message, parents, secondMessage }) {
  return (
    <header className="hero">
      <p className="event-date">{date}</p>
      <h1 className="name">{name}</h1>
      <p className="message">{message}</p>
      {parents ? <p className="parents">{parents}</p> : null}
      {secondMessage ? <p className="message">{secondMessage}</p> : null}
    </header>
  )
}
