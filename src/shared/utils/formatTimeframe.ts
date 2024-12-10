import {
  HOURS_IN_DAY,
  MINS_IN_HOUR,
  SECS_IN_DAY,
  SECS_IN_HOUR,
  SECS_IN_MIN
} from 'shared/constants'
import { Seconds } from 'shared/types'

export const formatTimeframe = (timeframe: Seconds) => {
  const isTimeframeLessThanHour = timeframe < SECS_IN_HOUR
  const isTimeframeLessThanDay = timeframe < SECS_IN_DAY

  const timeframeInMinutes = Number(timeframe) / SECS_IN_MIN
  const timeframeInHours = timeframeInMinutes / MINS_IN_HOUR
  const timeframeInDays = timeframeInHours / HOURS_IN_DAY

  return (
    isTimeframeLessThanHour ? `${Math.round(timeframeInMinutes)}m`
    : isTimeframeLessThanDay ? `${Math.round(timeframeInHours)}h`
    : `${Math.round(timeframeInDays)}d`
  )
}
