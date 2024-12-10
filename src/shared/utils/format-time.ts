import { formatDuration, intervalToDuration } from 'date-fns'
import { MS_IN_DAY, MS_IN_HOUR, MS_IN_SEC } from 'shared/constants'

// eslint-disable-next-line complexity, max-statements
export const formatTime = (time: number, isFullTime = false) => {
  if (time < 1) return 'Done'

  const duration = intervalToDuration({ start: 0, end: time })
  const isMonthsInclude = time > MS_IN_DAY * 30
  const isDaysInclude = time > MS_IN_DAY && !isMonthsInclude
  const isHoursInclude = time > MS_IN_HOUR && !isDaysInclude
  const isMinutesInclude = time > MS_IN_SEC && !isHoursInclude

  const format =
    (isMonthsInclude && ['months', 'days']) ||
    (isDaysInclude && ['days', 'hours']) ||
    (isHoursInclude && ['hours', 'minutes']) ||
    (isMinutesInclude && ['minutes', 'seconds']) ||
    []

  const formattedDuration = formatDuration(duration, {
    format
  })

  if (isFullTime) return formattedDuration

  return formattedDuration
    .replace(' months', 'M')
    .replace(' month', 'M')
    .replace(' days', 'd')
    .replace(' day', 'd')
    .replace(' hours', 'h')
    .replace(' hour', 'h')
    .replace(' minutes', 'm')
    .replace(' minute', 'm')
    .replace(' seconds', 's')
    .replace(' second', 's')
}
