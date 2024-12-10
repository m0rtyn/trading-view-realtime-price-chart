import {
  HOURS_IN_DAY,
  MINS_IN_HOUR,
  MS_IN_DAY,
  MS_IN_HOUR,
  MS_IN_MIN,
  MS_IN_SEC,
  SECS_IN_DAY,
  SECS_IN_MIN
} from 'shared/constants'
import { Maybe, Milliseconds } from 'shared/types'

/**
 * @description Formats milliseconds to remaining time in the format HH:MM:SS.
 * @param ms The number of milliseconds to format.
 * @returns The formatted remaining time string.
 * @example formatMillisToRemainingTime(1000) // '00:01'
 * @example formatMillisToRemainingTime(10000000) // '02:46:40'
 */
// eslint-disable-next-line max-statements
export function formatMillisToRemainingTime(ms: Maybe<Milliseconds>) {
  if (!ms || ms < 0) return '00:00'

  const seconds = Math.floor((ms / MS_IN_SEC) % SECS_IN_MIN)
  const minutes = Math.floor((ms / MS_IN_MIN) % MINS_IN_HOUR)
  const hours = Math.floor((ms / MS_IN_HOUR) % HOURS_IN_DAY)
  const days = Math.floor(ms / MS_IN_DAY)

  const formattedSeconds = seconds.toString().padStart(2, '0')
  const formattedMinutes = minutes.toString().padStart(2, '0')
  const formattedHours = hours.toString().padStart(2, '0')

  if (days > 0) {
    const formattedDays = days.toString()
    return `${formattedDays}:${formattedHours}:${formattedMinutes}:${formattedSeconds}`
  } else if (hours > 0) {
    return `${formattedHours}:${formattedMinutes}:${formattedSeconds}`
  }

  return `${formattedMinutes}:${formattedSeconds}`
}
