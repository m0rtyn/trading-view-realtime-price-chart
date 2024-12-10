import { MutableRefObject, useEffect, useRef } from 'react'
import { LazyQueryExecFunction, useLazyQuery } from '@apollo/client'
import { PriceRangeQuery, QueryPriceRangeArgs } from '__generated__/graphql'
import { GET_PRICES_RANGE } from 'api/prices/price-range'
import {
  AreaData,
  IChartApi,
  ISeriesApi,
  Time,
  UTCTimestamp,
  WhitespaceData
} from 'lightweight-charts'
import { MS_IN_SEC } from 'shared/constants'
import { AssetId } from 'shared/types'
import { transformChartPointsToSmoothCurve } from '../utils/transform-chart-data-to-curve'

export const useChartHistoricalData = (
  chartInstanceRef: MutableRefObject<IChartApi | null>,
  seriesInstanceRef: MutableRefObject<ISeriesApi<'Area', Time> | null>,
  assetId: AssetId
) => {
  const timer = useRef<NodeJS.Timeout | null>(null)

  const [commitGetPriceRange, { loading, error }] =
    useLazyQuery(GET_PRICES_RANGE)

  useEffect(() => {
    const timeScale = chartInstanceRef.current?.timeScale()

    timeScale?.subscribeVisibleTimeRangeChange(() => {
      const currentChartData = seriesInstanceRef.current?.data() || []

      if (timer.current !== null) return
      if (loading || error) return

      timer.current = setTimeout(async () => {
        const logicalRange = timeScale.getVisibleLogicalRange()
        if (logicalRange === null) return

        const barsInfo =
          seriesInstanceRef.current?.barsInLogicalRange(logicalRange)

        if (barsInfo?.barsBefore && barsInfo.barsBefore < 10) {
          const historicalPrices = await getHistoricalPrices(
            assetId,
            currentChartData,
            commitGetPriceRange
          )

          seriesInstanceRef.current?.setData(historicalPrices)
        }

        timer.current = null
      }, 500)
    })
  }, [])
}

async function getHistoricalPrices(
  assetId: string,
  currentChartData: readonly (AreaData<Time> | WhitespaceData<Time>)[],
  commitGetPriceRange: LazyQueryExecFunction<
    PriceRangeQuery,
    QueryPriceRangeArgs
  >
) {
  const variables = getPriceRangeQueryVariables(assetId, currentChartData)

  const { data: newData } =
    (await commitGetPriceRange({
      variables
    })) || {}

  const newAssetPrices = mapChartDataToChartPoints(newData?.priceRange)
  const newAssetPricesInterpolated =
    transformChartPointsToSmoothCurve(newAssetPrices)

  return [...newAssetPricesInterpolated, ...currentChartData]
}

function mapChartDataToChartPoints(newData?: PriceRangeQuery['priceRange']) {
  return (
    newData?.map(item => ({
      time: (item.timestamp / MS_IN_SEC) as UTCTimestamp,
      value: item.formattedValue
    })) || []
  )
}

function getPriceRangeQueryVariables(
  assetId: string,
  currentChartData: readonly (AreaData<Time> | WhitespaceData<Time>)[]
) {
  const lastPointTime = currentChartData[0]?.time as UTCTimestamp
  const startDate = (lastPointTime - 100) as UTCTimestamp
  const endDate = lastPointTime

  return {
    data: {
      assetId,
      startDate: new Date(startDate * MS_IN_SEC).toISOString(),
      endDate: new Date(endDate * MS_IN_SEC).toISOString()
    }
  }
}
