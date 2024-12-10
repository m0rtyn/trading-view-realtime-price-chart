import { interpolate } from 'd3-interpolate'
import { UTCTimestamp } from 'lightweight-charts'
import { ChartPoint } from '../types'

const ROUNDING_FACTOR = 1000

// TODO: add flag for the interpolated points
// eslint-disable-next-line max-statements
export const interpolateBetweenTwoPoints = (
  startPoint: ChartPoint,
  endPoint: ChartPoint,
  frames: number
) => {
  if (!startPoint || !endPoint) return []
  if (startPoint.time === endPoint.time || endPoint.time === 0)
    return [startPoint]
  if (startPoint.time === 0) return [endPoint]

  const valueInterpolator = interpolate(startPoint.value, endPoint.value)
  const timeInterpolator = interpolate(startPoint.time, endPoint.time)

  const increment = Math.floor((1 / frames) * ROUNDING_FACTOR) / ROUNDING_FACTOR

  const interpolatedData = []
  for (let i = 0; i <= 1; i += increment) {
    interpolatedData.push({
      value: valueInterpolator(i),
      time: timeInterpolator(i) as UTCTimestamp
    })
  }

  return interpolatedData
}
