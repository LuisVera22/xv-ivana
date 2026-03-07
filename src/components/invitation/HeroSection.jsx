export function HeroSection({ name, message, parents, secondMessage }) {
  return (
    <header className="hero">
      <div className="name-block">
        <div className="name-ornament name-ornament--top" aria-hidden="true">
          <span className="name-ornament__piece" />
          <span className="name-ornament__piece name-ornament__piece--mirror" />
        </div>
        <h1 className="name">{name}</h1>
        <div className="name-ornament name-ornament--bottom" aria-hidden="true">
          <span className="name-ornament__piece" />
          <span className="name-ornament__piece name-ornament__piece--mirror" />
        </div>
      </div>
      <p className="message">{message}</p>
      {parents ? <p className="parents">{parents}</p> : null}
      {secondMessage ? <p className="message">{secondMessage}</p> : null}
    </header>
  )
}
