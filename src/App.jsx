import { invitationData } from './data/invitationData'
import { useCountdown } from './hooks/useCountdown'
import { CountdownSection } from './components/invitation/CountdownSection'
import { DressCodeSection } from './components/invitation/DressCodeSection'
import { HeroSection } from './components/invitation/HeroSection'
import { LocationSection } from './components/invitation/LocationSection'
import { RsvpSection } from './components/invitation/RsvpSection'
import './components/invitation/invitation.css'

function App() {
  const timeLeft = useCountdown(invitationData.countdown.targetDate)

  return (
    <main className="invite-page">
      <section className="invite-card" aria-label="Invitacion de quinceanero">
        <HeroSection
          date={invitationData.event.dateDisplay}
          name={invitationData.event.name}
          message={invitationData.event.message}
        />
        <CountdownSection title={invitationData.countdown.title} timeLeft={timeLeft} />
        <LocationSection
          title={invitationData.location.title}
          venue={invitationData.location.venue}
          address={invitationData.location.address}
          mapEmbedUrl={invitationData.location.mapEmbedUrl}
        />
      </section>

      <DressCodeSection
        title={invitationData.dressCode.title}
        labels={invitationData.dressCode.labels}
        forbidden={invitationData.dressCode.forbidden}
      />

      <RsvpSection title={invitationData.rsvp.title} contacts={invitationData.rsvp.contacts} />
    </main>
  )
}

export default App
