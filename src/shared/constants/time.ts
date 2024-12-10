// TODO: extract constants to separate files

import { Milliseconds, Minutes, Seconds } from 'shared/types'

export const MS_IN_SEC = 1000 as Milliseconds

export const SECS_IN_MIN = 60 as Seconds
export const MS_IN_MIN = (SECS_IN_MIN * MS_IN_SEC) as Milliseconds

export const MINS_IN_HOUR = 60 as Minutes
export const SECS_IN_HOUR = (SECS_IN_MIN * MINS_IN_HOUR) as Seconds
export const MS_IN_HOUR = (MINS_IN_HOUR * MS_IN_MIN) as Milliseconds

export const HOURS_IN_DAY = 24
export const MINS_IN_DAY = (HOURS_IN_DAY * MINS_IN_HOUR) as Minutes
export const SECS_IN_DAY = (SECS_IN_MIN * MINS_IN_DAY) as Seconds
export const MS_IN_DAY = (MS_IN_SEC * SECS_IN_DAY) as Milliseconds

export const MAX_DATE = new Date('2050-01-01')
export const TOAST_DURATION = 5 * MS_IN_SEC
