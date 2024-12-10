import { MS_IN_SEC } from 'shared/constants'
import { Milliseconds } from 'shared/types'

/** CHART INIT STAGE
 * 30 points with 1000ms time diff = 30sec
 * 30sec * 30 updates per second = 33.3ms framerate
 */
const DATA_FREQ_MS = 1000 as Milliseconds
/** how many points request for the initial chart */
export const QUERY_DATA_SIZE = 30
/** To ensure equality of the data density and the data update frequency, should be more than 900 */
export const DATA_MULTIPLIER = 33

/** CHART UPDATING STAGE
 * the array size should be approximately equal to the frame rate per second
 * To ensure that all points are added before new price framerate should be lower than 60
 */
/** minimum time delta per RAF tick (Aproximately equals to 16ms * 2) */
export const MIN_MS_PER_FRAME = 30 as Milliseconds
const FRAME_BUFFER = 0
const MIN_FRAME_RATE_PER_SECOND = MS_IN_SEC / MIN_MS_PER_FRAME - FRAME_BUFFER

/** how many times per second the new data came from backend (baseline: two times per second) */
const DATA_FREQ_PER_SEC = MS_IN_SEC / DATA_FREQ_MS
export const DATA_ARRAY_SIZE = MIN_FRAME_RATE_PER_SECOND / DATA_FREQ_PER_SEC

// TODO: find a way to decrease the number of points to ignore without skipping the new points
const IGNORANCE_PERCENT = 0.3
export const MAX_POINTS_TO_IGNORE = DATA_ARRAY_SIZE * IGNORANCE_PERCENT
