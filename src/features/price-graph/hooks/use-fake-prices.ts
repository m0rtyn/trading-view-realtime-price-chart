import { useState } from 'react'
import { UTCTimestamp } from 'lightweight-charts'
import { useInterval } from 'shared/hooks/use-interval'
import { AssetId } from 'shared/types'
import { DATA_MULTIPLIER, QUERY_DATA_SIZE } from '../constants'

export const useFakePrices = () => {
  const date = new Date()
  const increment =
    (QUERY_DATA_SIZE * DATA_MULTIPLIER +
      date.getMinutes() +
      date.getSeconds()) /
    10
  const [price, setPrice] = useState<number>(
    getRandomBTCPrice(DATA_MULTIPLIER, increment)
  )

  useInterval(() => {
    setPrice(getRandomBTCPrice(DATA_MULTIPLIER, increment))
  }, 1000)

  return {
    assetId: 'BTC' as AssetId,
    timestamp: Date.now(),
    price
  }
}

export function getFakeChartPrices() {
  const now = Date.now()
  const len = DATA_MULTIPLIER * QUERY_DATA_SIZE

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
  60000 + (60000 * (Math.random() - 0.5) * 0.01) / divider + increment
