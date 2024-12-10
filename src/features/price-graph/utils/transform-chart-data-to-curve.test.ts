/* eslint-disable max-statements */
import { UTCTimestamp } from 'lightweight-charts'
import { ChartPoint } from '../types'
import { transformChartPointsToSmoothCurve } from './transform-chart-data-to-curve'

describe('transformChartPointsToSmoothCurve', () => {
  it('should return an empty array if no points are provided', () => {
    const points = [] as ChartPoint[]
    const result = transformChartPointsToSmoothCurve(points)
    expect(result).toEqual([])
  })

  it('should return the same points if only one point is provided', () => {
    const points = [{ time: 0 as UTCTimestamp, value: 0 }]
    const result = transformChartPointsToSmoothCurve(points)

    expect(result).toEqual(points)
  })

  it('should return a smooth curve with the specified granularity', () => {
    const points = [
      { time: 0 as UTCTimestamp, value: 0 },
      { time: 1 as UTCTimestamp, value: 1 },
      { time: 2 as UTCTimestamp, value: 2 },
      { time: 3 as UTCTimestamp, value: 3 }
    ]
    const granularity = 10
    const result = transformChartPointsToSmoothCurve(points, granularity)

    expect.hasAssertions()
    expect(result.length).toBe(10)
    expect(result[0].time).toBe(1)
    expect(result[1].time).toBe(1.1)
    expect(result[2].time).toBe(1.2)
    expect(result[3].time).toBe(1.3)
    expect(result[4].time).toBe(1.4)
    expect(result[5].time).toBe(1.5)
    expect(result[6].time).toBe(1.6)
    expect(result[7].time).toBe(1.7)
    expect(result[8].time).toBeCloseTo(1.8)
    expect(result[9].time).toBe(1.9)
  })

  it('should handle non-integer granularity correctly', () => {
    const points = [
      { time: 0 as UTCTimestamp, value: 0 },
      { time: 1 as UTCTimestamp, value: 1 },
      { time: 2 as UTCTimestamp, value: 1 },
      { time: 3 as UTCTimestamp, value: 1 }
    ]
    const granularity = 0.5

    expect(() =>
      transformChartPointsToSmoothCurve(points, granularity)
    ).toThrowError()
  })

  it('should handle a large number of points correctly', () => {
    const points = Array.from({ length: 1000 }, (_, i) => ({
      time: i as UTCTimestamp,
      value: i
    }))
    const granularity = 10
    const result = transformChartPointsToSmoothCurve(points, granularity)

    expect(result.length).toBe(9970)
  })
})
