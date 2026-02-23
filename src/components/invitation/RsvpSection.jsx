export function RsvpSection({ title, contacts }) {
  return (
    <section className="rsvp-section" aria-label="Confirmar asistencia">
      <h2>{title}</h2>
      <div className="contacts">
        {contacts.map((contact) => (
          <p key={contact.phone}>
            {contact.name}
            <span>{contact.phone}</span>
          </p>
        ))}
      </div>
    </section>
  )
}
