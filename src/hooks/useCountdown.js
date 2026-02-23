import { useEffect, useMemo, useState } from 'react'

const ZERO_TIME = {
  days: '00',
  hours: '00',
  minutes: '00',
  seconds: '00',
}

function getTimeLeft(targetDate) {
  const now = Date.now()
  const targetTime = targetDate.getTime()
  const diff = targetTime - now

  if (diff <= 0) {
    return ZERO_TIME
  }

  const totalSeconds = Math.floor(diff / 1000)
  const days = Math.floor(totalSeconds / 86400)
  const hours = Math.floor((totalSeconds % 86400) / 3600)
  const minutes = Math.floor((totalSeconds % 3600) / 60)
  const seconds = totalSeconds % 60

  return {
    days: String(days).padStart(2, '0'),
    hours: String(hours).padStart(2, '0'),
    minutes: String(minutes).padStart(2, '0'),
    seconds: String(seconds).padStart(2, '0'),
  }
}

export function useCountdown(targetDateIso) {
  const targetDate = useMemo(() => new Date(targetDateIso), [targetDateIso])
  const [timeLeft, setTimeLeft] = useState(() => getTimeLeft(targetDate))

  useEffect(() => {
    const timerId = window.setInterval(() => {
      setTimeLeft(getTimeLeft(targetDate))
    }, 1000)

    return () => {
      window.clearInterval(timerId)
    }
  }, [targetDate])

  return timeLeft
}
