import { UTCTimestamp } from 'lightweight-charts'
import { MS_IN_SEC } from 'shared/constants'
import { AssetPrice } from 'shared/types'
import { ChartPoint } from '../types'

export const transformPriceToChartPoint = (
  newPriceSubscr: AssetPrice
): ChartPoint => ({
  value: newPriceSubscr?.price,
  time: (newPriceSubscr?.timestamp / MS_IN_SEC) as UTCTimestamp,
  customValues: {
    assetId: newPriceSubscr?.assetId
  }
})
