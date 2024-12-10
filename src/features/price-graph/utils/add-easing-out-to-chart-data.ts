import { ChartPoint } from '../types'

/**
 * Applies an easing effect to the given chart data on the Y-axis.
 * @param chartData - The original chart data.
 * @param easingType
 * @returns The chart data with the easing-out effect applied to the Y-axis.
 */
// eslint-disable-next-line max-statements
export function addEasing(
  points: ChartPoint[],
  easingType: 'ease-out' | 'ease-in-out'
) {
  const easedPoints = []
  const total = points.length
  const firstPoint = points[0]
  const getEasingFactorByType = easingType === 'ease-out' ? easeOut : easeInOut

  for (let i = 0; i < total; i++) {
    const easedFactor = getEasingFactorByType(total, i)
    const valueDelta = points[total - 1].value - firstPoint.value
    const timeDelta = points[total - 1].time - firstPoint.time
    const value = firstPoint.value + valueDelta * easedFactor
    const time = (firstPoint.time +
      timeDelta * easedFactor) as ChartPoint['time']

    easedPoints.push({
      value,
      time
    })
  }

  return easedPoints
}

/**
 * Easing-in-out function based on a cubic curve.
 * @param total - length of original data array
 * @param index
 * @returns The eased value.
 */
function easeInOut(total: number, index: number): number {
  const interpolationFactor = index / (total - 1)
  const f = interpolationFactor
  if (f < 0 || f > 1) throw Error()
  if (f < 0.5) return 2 * f * f
  const easing = 1 - Math.pow(-2 * f + 2, 3) / 2
  return easing
}

/**
 * Easing-out function based on a cubic curve.
 * @param interpolationFactor - A value between 0 and 1.
 * @returns The eased value.
 */
function easeOut(interpolationFactor: number) {
  return 1 - Math.pow(1 - interpolationFactor, 2)
}
