import { MutableRefObject, useEffect, useRef, useState } from 'react'
import { useReactiveVar } from '@apollo/client'
import { ISeriesApi, Time, UTCTimestamp } from 'lightweight-charts'
import { useInterval } from 'shared/hooks/use-interval'
import { assetLastPriceVar } from 'shared/store/price-graph-store'
import { AssetId, AssetPrice, Maybe } from 'shared/types'
import { DATA_ARRAY_SIZE, MAX_POINTS_TO_IGNORE } from '../constants'
import { ChartPoint, RAFCallback } from '../types'
import { addEasing } from '../utils/add-easing-out-to-chart-data'
import { getChartLineColorByPriceDiff } from '../utils/get-chart-line-color'
import { interpolateBetweenTwoPoints } from '../utils/interpolate-between-two-numbers'
import { transformPriceToChartPoint } from '../utils/transform-price-to-chart-point'

export const useChartUpdating = (
  newPriceSubscr: Maybe<AssetPrice>,
  seriesInstanceRef: MutableRefObject<ISeriesApi<'Area', Time> | null>,
  lastPriceRef: MutableRefObject<ChartPoint | null>,
  updateChartFrameRef: MutableRefObject<RAFCallback | null>
) => {
  const easedPointsRef = useRef<ChartPoint[]>([])

  const asset = useReactiveVar(assetLastPriceVar)

  // eslint-disable-next-line max-statements
  useEffect(() => {
    if (easedPointsRef?.current?.length > MAX_POINTS_TO_IGNORE) return

    const seriesInstance = seriesInstanceRef.current
    const currentChartData = seriesInstance?.data() as ChartPoint[]
    if (!(currentChartData && newPriceSubscr)) return

    // NOTE: Make copies of the prices to prevent updating of object refs
    const lastChartPrice = { ...lastPriceRef.current } as ChartPoint
    const nextToLastChartPrice = { ...currentChartData.at(-1) } as ChartPoint
    const isPriceDataAvailable = nextToLastChartPrice && lastChartPrice
    if (!isPriceDataAvailable) return

    const lastPriceAssetId = lastChartPrice?.customValues?.assetId
    const isPriceAssetIdChanged =
      lastPriceAssetId && lastPriceAssetId !== newPriceSubscr?.assetId
    const isTimeCollision = nextToLastChartPrice?.time >= lastChartPrice?.time

    /** NOTE:
     * prevent updating of the chart if the asset has changed
     * prevent chart errors with a points' time collisions
     * prevent chart freezing if the price is not updated
     */
    if (isPriceAssetIdChanged || isTimeCollision) {
      lastPriceRef.current = transformPriceToChartPoint(newPriceSubscr)
      return
    }

    const priceLineColor = getChartLineColorByPriceDiff(
      lastChartPrice?.value,
      nextToLastChartPrice?.value
    )
    seriesInstance?.applyOptions({
      priceLineColor
    })

    const interpolatedPoints = interpolateBetweenTwoPoints(
      nextToLastChartPrice,
      lastChartPrice,
      DATA_ARRAY_SIZE
    )
    easedPointsRef.current = addEasing(interpolatedPoints, 'ease-in-out')

    updateChartFrameRef.current = getUpdatingChartSeriesCallback(
      seriesInstanceRef,
      easedPointsRef
    )

    lastPriceRef.current = transformPriceToChartPoint(newPriceSubscr)
  }, [
    asset?.assetId,
    newPriceSubscr?.timestamp,
    seriesInstanceRef,
    newPriceSubscr,
    lastPriceRef,
    updateChartFrameRef
  ])
}

const getUpdatingChartSeriesCallback = (
  seriesInstanceRef: MutableRefObject<ISeriesApi<'Area'> | null>,
  easedPointsRef: MutableRefObject<ChartPoint[]>
): Maybe<RAFCallback> => {
  return () => {
    if (!seriesInstanceRef.current) return

    // NOTE: if the chart has time to process the points before the new price
    if (easedPointsRef.current.length === 0) return

    const newPoint = easedPointsRef.current.shift() as ChartPoint

    try {
      seriesInstanceRef.current.update(newPoint)
    } catch (error) {
      console.info('collision:', error)
      return
    }
  }
}
