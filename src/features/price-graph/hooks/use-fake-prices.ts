import { useState } from 'react'
import { UTCTimestamp } from 'lightweight-charts'
import { useInterval } from 'shared/hooks/use-interval'
import { AssetId, Maybe } from 'shared/types'
import { DATA_MULTIPLIER, QUERY_DATA_SIZE } from '../constants'
import { ChartData, ChartPoint } from '../types'

export const useFakePrices = () => {
  const date = new Date()
  const increment =
    (QUERY_DATA_SIZE + date.getMinutes() + date.getSeconds()) / 100
  const [price, setPrice] = useState<number>(
    getRandomBTCPrice(QUERY_DATA_SIZE, increment)
  )

  useInterval(() => {
    setPrice(getRandomBTCPrice(QUERY_DATA_SIZE, increment))
  }, 1000)

  return {
    assetId: 'BTC' as AssetId,
    timestamp: Date.now(),
    price
  }
}

export function getFakeChartPrices(len = QUERY_DATA_SIZE) {
  const now = Math.round(Date.now() / 1000)

  return {
    assetId: 'BTC' as AssetId,
    prices: new Array(len).fill(null).map((_, i) => ({
      time: (Math.round(now / 1000) -
        (len - i + 1) / DATA_MULTIPLIER) as UTCTimestamp,
      value: getRandomBTCPrice(DATA_MULTIPLIER, i / 10)
    }))
  }
}

export const getRandomBTCPrice = (divider = 1, increment = 0) =>
  60000 + (60000 * (Math.random() - 0.5) * 0.005) / divider + increment
