import { AssetPricesQuery } from '__generated__/graphql'
import { UTCTimestamp } from 'lightweight-charts'
import { ChartPoint } from '../types'

export const transformToChartData = (data?: AssetPricesQuery): ChartPoint[] => {
  if (!data?.assetPrices) return []

  return data.assetPrices
    .map(d => ({
      time: (d.timestamp / 1000) as UTCTimestamp,
      value: d.formattedValue
    }))
    .reverse()
}
