function WhatsAppIcon() {
  return (
    <svg
      className="whatsapp-icon"
      viewBox="0 0 24 24"
      role="img"
      aria-label="WhatsApp"
    >
      <path
        fill="currentColor"
        d="M12 2a10 10 0 0 0-8.7 14.93L2 22l5.25-1.37A10 10 0 1 0 12 2m0 18.2a8.2 8.2 0 0 1-4.2-1.15l-.3-.18-3.11.81.83-3.04-.2-.31A8.2 8.2 0 1 1 12 20.2m4.5-6.16c-.25-.13-1.45-.72-1.67-.8s-.38-.12-.55.12-.63.8-.77.96-.29.17-.54.04a6.7 6.7 0 0 1-1.96-1.2 7.3 7.3 0 0 1-1.36-1.7c-.14-.25 0-.38.11-.51.12-.12.25-.3.38-.45s.17-.25.25-.42a.47.47 0 0 0-.02-.44c-.07-.13-.55-1.33-.75-1.82-.2-.48-.4-.41-.55-.42h-.47a.9.9 0 0 0-.66.3c-.23.25-.88.86-.88 2.1s.9 2.44 1.02 2.62 1.76 2.7 4.26 3.79c.6.26 1.08.42 1.45.54.61.2 1.16.17 1.6.1.48-.07 1.45-.6 1.65-1.18.2-.58.2-1.07.14-1.18s-.23-.16-.47-.29"
      />
    </svg>
  )
}

export function RsvpSection({ title, contacts }) {
  return (
    <section className="rsvp-section" aria-label="Confirmar asistencia">
      <h2>{title}</h2>
      <div className="contacts">
        {contacts.map((contact) => (
          <article className="contact-item" key={contact.phone}>
            <WhatsAppIcon />
            <p>
              {contact.name}
              <span>{contact.phone}</span>
            </p>
          </article>
        ))}
      </div>
    </section>
  )
}
