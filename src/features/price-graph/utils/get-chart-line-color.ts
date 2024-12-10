import { COLOR_GREEN_LIGHT, COLOR_PINK_LIGHT } from 'shared/constants'

export const getChartLineColorByPriceDiff = (
  lastChartPrice: number,
  nextToLastChartPrice: number
) =>
  lastChartPrice > nextToLastChartPrice ? COLOR_GREEN_LIGHT : COLOR_PINK_LIGHT
