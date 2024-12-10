import { UTCTimestamp } from 'lightweight-charts'
import { ChartPoint } from '../types'

/**
 * Calculates a point on a Catmull-Rom curve based on the given interpolation coefficient and control points.
 * Abount Catmull-Rom formula {@link https://en.wikipedia.org/wiki/Centripetal_Catmull%E2%80%93Rom_spline}
 * Tests {@link file://./transform-chart-data-to-curve.test.ts}
 *
 * @param interpolationCoefficient - The interpolation coefficient between 0 and 1.
 * @param p0 - The first control point.
 * @param p1 - The second control point.
 * @param p2 - The third control point.
 * @param p3 - The fourth control point.
 * @returns The calculated point on the curve.
 */
const calculateCatmullRomPoint = (
  interpolationCoefficient: number,
  p0: ChartPoint,
  p1: ChartPoint,
  p2: ChartPoint,
  p3: ChartPoint
): ChartPoint => {
  const previousValue = (p2.value - p0.value) * 0.5
  const nextValue = (p3.value - p1.value) * 0.5
  const cubicCoefficient = interpolationCoefficient ** 2
  const quadraticCoefficient = interpolationCoefficient ** 3

  const time = (p1.time +
    (p2.time - p1.time) * interpolationCoefficient) as UTCTimestamp

  const value =
    (2 * p1.value - 2 * p2.value + previousValue + nextValue) *
      quadraticCoefficient +
    (-3 * p1.value + 3 * p2.value - 2 * previousValue - nextValue) *
      cubicCoefficient +
    previousValue * interpolationCoefficient +
    p1.value

  return { time, value }
}

/**
 * Transforms an array of chart points into a smooth curve using Catmull-Rom interpolation.
 * @param points - The array of chart points to transform.
 * @param granularity - The granularity of the curve. Defaults to 18.
 * @returns The transformed array of chart points representing the smooth curve.
 */
// eslint-disable-next-line max-statements
export const transformChartPointsToSmoothCurve = (
  points: ChartPoint[],
  granularity = 18
): ChartPoint[] => {
  if (granularity < 1) throw new Error('Granularity cannot be less than 1')
  if (points.length === 0) return []
  if (points.length < 4) return points

  const smoothedPoints: ChartPoint[] = []

  points.forEach((p0, i) => {
    if (i < points.length - 3) {
      const p1 = points[i + 1]
      const p2 = points[i + 2]
      const p3 = points[i + 3]

      Array.from({ length: granularity }).forEach((_, j) => {
        const interpolationCoefficient = j / granularity
        const smoothedPoint = calculateCatmullRomPoint(
          interpolationCoefficient,
          p0,
          p1,
          p2,
          p3
        )

        smoothedPoints.push(smoothedPoint)
      })
    }
  })

  return smoothedPoints
}
