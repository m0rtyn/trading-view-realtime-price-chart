import { UTCTimestamp } from 'lightweight-charts'
import { DATA_MULTIPLIER } from '../constants/chart-animation'
import { ChartPoint } from '../types'
import { interpolateArray } from './interpolate-number-array'

// NOTE: function for linear interpolation
export const interpolateChartData = (assetPrices: ChartPoint[]) => {
  const prices = assetPrices.map(el => el.value)
  const times = assetPrices.map(el => el.time)
  const desiredLenght = prices.length * DATA_MULTIPLIER
  const interpolatedPrices = interpolateArray(prices, desiredLenght)
  const interpolatedTimes = interpolateArray(times, desiredLenght)

  const interpolatedChartData = interpolatedPrices.map((price, i) => {
    return {
      value: price,
      time: interpolatedTimes[i] as UTCTimestamp
    }
  })

  return interpolatedChartData
}
