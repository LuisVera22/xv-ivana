export function HeroSection({ name, message, parents, secondMessage }) {
  return (
    <header className="hero" data-reveal style={{ '--reveal-delay': '0ms' }}>
      <div className="name-block" data-reveal style={{ '--reveal-delay': '80ms' }}>
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
      <p className="message" data-reveal style={{ '--reveal-delay': '120ms' }}>
        {message}
      </p>
      {parents ? (
        <p className="parents" data-reveal style={{ '--reveal-delay': '170ms' }}>
          {parents}
        </p>
      ) : null}
      {secondMessage ? (
        <p className="message" data-reveal style={{ '--reveal-delay': '220ms' }}>
          {secondMessage}
        </p>
      ) : null}
    </header>
  )
}
