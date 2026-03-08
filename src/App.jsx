import { useEffect, useRef, useState } from 'react'
import { invitationData } from './data/invitationData'
import { useCountdown } from './hooks/useCountdown'
import { CountdownSection } from './components/invitation/CountdownSection'
import { DressCodeSection } from './components/invitation/DressCodeSection'
import { EventDateSection } from './components/invitation/EventDateSection'
import { HeroSection } from './components/invitation/HeroSection'
import { LocationSection } from './components/invitation/LocationSection'
import { RsvpSection } from './components/invitation/RsvpSection'
import './components/invitation/invitation.css'

function App() {
  const [showLoader, setShowLoader] = useState(true)
  const [loaderVisible, setLoaderVisible] = useState(true)
  const [isMusicPlaying, setIsMusicPlaying] = useState(false)
  const [hasStartedInvitation, setHasStartedInvitation] = useState(false)
  const [isEntryClosing, setIsEntryClosing] = useState(false)
  const audioRef = useRef(null)
  const entryExitTimerRef = useRef(null)
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

  const handleMusicToggle = async () => {
    const audioElement = audioRef.current

    if (!audioElement) {
      return
    }

    if (isMusicPlaying) {
      audioElement.pause()
      return
    }

    try {
      await audioElement.play()
      setIsMusicPlaying(true)
    } catch {
      setIsMusicPlaying(false)
    }
  }

  const handleMusicEnded = () => {
    setIsMusicPlaying(false)
  }

  const handleMusicPlay = () => {
    setIsMusicPlaying(true)
  }

  const handleMusicPause = () => {
    setIsMusicPlaying(false)
  }

  const handleStartInvitation = async (playWithMusic) => {
    if (isEntryClosing) {
      return
    }

    const audioElement = audioRef.current

    if (audioElement) {
      if (playWithMusic) {
        try {
          await audioElement.play()
          setIsMusicPlaying(true)
        } catch {
          setIsMusicPlaying(false)
        }
      } else {
        audioElement.pause()
        audioElement.currentTime = 0
        setIsMusicPlaying(false)
      }
    }

    setIsEntryClosing(true)
    entryExitTimerRef.current = window.setTimeout(() => {
      setHasStartedInvitation(true)
      setIsEntryClosing(false)
    }, 360)
  }

  useEffect(() => {
    return () => {
      if (entryExitTimerRef.current) {
        window.clearTimeout(entryExitTimerRef.current)
      }
    }
  }, [])

  useEffect(() => {
    if (!hasStartedInvitation) {
      return
    }

    const revealItems = Array.from(document.querySelectorAll('[data-reveal]'))

    if (!revealItems.length) {
      return
    }

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      revealItems.forEach((item) => item.classList.add('is-revealed'))
      return
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-revealed')
            return
          }

          entry.target.classList.remove('is-revealed')
        })
      },
      {
        threshold: 0.05,
        rootMargin: '0px 0px 12% 0px',
      }
    )

    revealItems.forEach((item) => observer.observe(item))

    return () => observer.disconnect()
  }, [hasStartedInvitation])

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

      <audio
        ref={audioRef}
        src="/music/André Rieu - The Second Waltz (Classic Album Selection [5CD]).mp3"
        onPlay={handleMusicPlay}
        onPause={handleMusicPause}
        onEnded={handleMusicEnded}
        preload="metadata"
        loop
      />

      <main
        className={`invite-page invite-page--invitation ${hasStartedInvitation ? '' : 'invite-page--preloading'} ${isMusicPlaying ? 'music-on' : 'music-off'}`.trim()}
        aria-hidden={!hasStartedInvitation}
      >
        <section className="invite-card" aria-label="Invitacion de quinceanero">
          <button
            type="button"
            className={`music-toggle ${isMusicPlaying ? 'is-playing' : ''}`}
            onClick={handleMusicToggle}
            aria-pressed={isMusicPlaying}
            aria-label={isMusicPlaying ? 'Pausar musica' : 'Reproducir musica'}
          >
            <span className="music-toggle__glow" aria-hidden="true" />
            <span className="music-toggle__icon" aria-hidden="true">&#9835;</span>
          </button>
          <HeroSection
            date={invitationData.event.dateDisplay}
            name={invitationData.event.name}
            message={invitationData.event.message}
            parents={invitationData.event.parents}
            secondMessage={invitationData.event.secondMessage}
          />
          <EventDateSection
            month={invitationData.eventSchedule.month}
            weekday={invitationData.eventSchedule.weekday}
            day={invitationData.eventSchedule.day}
            time={invitationData.eventSchedule.time}
            year={invitationData.eventSchedule.year}
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

      {!hasStartedInvitation && (
        <main className="invite-page invite-page--entry">
          <section className={`invite-entry-card ${isEntryClosing ? 'is-closing' : ''}`} aria-label="Eleccion de musica">
            <p className="invite-entry-card__eyebrow">Bienvenidos a la invitación de</p>
            <div className="invite-entry-card__name-block" aria-hidden="true">
              <div className="invite-entry-card__ornament invite-entry-card__ornament--top">
                <span className="invite-entry-card__ornament-piece" />
                <span className="invite-entry-card__ornament-piece invite-entry-card__ornament-piece--mirror" />
              </div>
            </div>
            <h2 className="invite-entry-card__title">{invitationData.event.name.toUpperCase()}</h2>
            <div className="invite-entry-card__name-block" aria-hidden="true">
              <div className="invite-entry-card__ornament invite-entry-card__ornament--bottom">
                <span className="invite-entry-card__ornament-piece" />
                <span className="invite-entry-card__ornament-piece invite-entry-card__ornament-piece--mirror" />
              </div>
            </div>
            <p className="invite-entry-card__subtitle">La música de fondo es parte de la experiencia</p>
            <div className="invite-entry-card__actions">
              <button
                type="button"
                className="invite-entry-card__button invite-entry-card__button--music"
                onClick={() => handleStartInvitation(true)}
                disabled={isEntryClosing}
              >
                Ingresar con música
              </button>
              <button
                type="button"
                className="invite-entry-card__button invite-entry-card__button--silent"
                onClick={() => handleStartInvitation(false)}
                disabled={isEntryClosing}
              >
                Ingresar sin música
              </button>
            </div>
          </section>
        </main>
      )}
    </>
  )
}

export default App
