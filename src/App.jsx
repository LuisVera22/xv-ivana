import { useEffect, useState } from 'react'
import { invitationData } from './data/invitationData'
import { useCountdown } from './hooks/useCountdown'
import { CountdownSection } from './components/invitation/CountdownSection'
import { DressCodeSection } from './components/invitation/DressCodeSection'
import { HeroSection } from './components/invitation/HeroSection'
import { LocationSection } from './components/invitation/LocationSection'
import { RsvpSection } from './components/invitation/RsvpSection'
import './components/invitation/invitation.css'

function App() {
  const [showLoader, setShowLoader] = useState(true)
  const [loaderVisible, setLoaderVisible] = useState(true)
  const timeLeft = useCountdown(invitationData.countdown.targetDate)

  useEffect(() => {
    let isMounted = true
    let minDelayMet = false
    let pageReady = document.readyState === 'complete'
    let fadeOutTimer

    const tryHideLoader = () => {
      if (!isMounted || !minDelayMet || !pageReady) {
        return
      }

      setLoaderVisible(false)
      fadeOutTimer = window.setTimeout(() => {
        if (isMounted) {
          setShowLoader(false)
        }
      }, 420)
    }

    const minDelayTimer = window.setTimeout(() => {
      minDelayMet = true
      tryHideLoader()
    }, 900)

    const onWindowLoad = () => {
      pageReady = true
      tryHideLoader()
    }

    if (!pageReady) {
      window.addEventListener('load', onWindowLoad, { once: true })
    } else {
      tryHideLoader()
    }

    return () => {
      isMounted = false
      window.clearTimeout(minDelayTimer)
      if (fadeOutTimer) {
        window.clearTimeout(fadeOutTimer)
      }
      window.removeEventListener('load', onWindowLoad)
    }
  }, [])

  return (
    <>
      {showLoader && (
        <div
          className={`page-loader ${loaderVisible ? 'is-visible' : 'is-hiding'}`}
          role="status"
          aria-live="polite"
          aria-label="Cargando invitacion"
        >
          <div className="page-loader__mark">
            <span className="page-loader__ring" aria-hidden="true" />
            <svg
              className="page-loader__heart"
              viewBox="0 0 24 24"
              aria-hidden="true"
              focusable="false"
            >
              <path d="M12 21.35 10.55 20.03C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09A6 6 0 0 1 16.5 3C19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54z" />
            </svg>
          </div>
        </div>
      )}

      <main className="invite-page">
        <section className="invite-card" aria-label="Invitacion de quinceanero">
          <HeroSection
            date={invitationData.event.dateDisplay}
            name={invitationData.event.name}
            message={invitationData.event.message}
            parents={invitationData.event.parents}
            secondMessage={invitationData.event.secondMessage}
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
    </>
  )
}

export default App
