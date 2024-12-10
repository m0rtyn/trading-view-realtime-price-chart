import { MutableRefObject, useEffect, useRef } from 'react'
import { IChartApi, IPriceLine, ISeriesApi, Time } from 'lightweight-charts'
import { COLOR_GRAY, COLOR_GRAY_70 } from 'shared/constants'
import { Maybe } from 'shared/types'
import { VertLine } from '../components/vertical-line.class'
import { ChartAnnotations } from '../types'
import {
  getAnnotationColorByKey,
  getAnnotationNameByKey
} from '../utils/get-annotation-by-key'

export const useChartAnnotations = (
  chartInstanceRef: MutableRefObject<IChartApi | null>,
  seriesInstanceRef: MutableRefObject<ISeriesApi<'Area', Time> | null>,
  chartAnnotations: Maybe<ChartAnnotations>
) => {
  const currentPriceLinesRef = useRef<Maybe<IPriceLine[]>>([])

  // NOTE: cleaning of the previous annotations
  useEffect(() => {
    return () => {
      const currentPriceLines = currentPriceLinesRef?.current
      if (!currentPriceLines?.length) return

      currentPriceLines?.forEach(priceLine => {
        seriesInstanceRef.current?.removePriceLine(priceLine)
      })
      currentPriceLinesRef.current = []
    }
  }, [chartAnnotations?.annotations])

  // NOTE: adding new horizontal annotations
  useEffect(() => {
    if (!seriesInstanceRef?.current || !chartAnnotations?.annotations?.[0])
      return

    const { type, annotations } = chartAnnotations

    if (type === 'horizontal') {
      annotations.forEach(({ name: key, value: price }) => {
        if (!key || !price) return

        const priceLine = seriesInstanceRef.current?.createPriceLine({
          price: Number(price),
          color: getAnnotationColorByKey(key),
          title: getAnnotationNameByKey(key),
          lineStyle: 2
        })

        priceLine && currentPriceLinesRef?.current?.push(priceLine)
      })
    }
  }, [chartAnnotations, seriesInstanceRef])

  // NOTE: adding new vertical annotations
  useEffect(() => {
    if (
      !chartInstanceRef?.current ||
      !seriesInstanceRef?.current ||
      !chartAnnotations?.annotations?.[0]
    )
      return

    const { type, annotations } = chartAnnotations
    if (type !== 'vertical') return

    const seriesInstance = seriesInstanceRef.current

    const time = seriesInstance?.data().at(-1)?.time || (0 as Time)

    annotations.forEach(({ name }) => {
      if (!chartInstanceRef?.current) return

      const verticalAnnotation = new VertLine(
        chartInstanceRef.current,
        seriesInstance,
        time,
        {
          showLabel: true,
          labelText: name,
          width: 1,
          color: COLOR_GRAY,
          labelBackgroundColor: COLOR_GRAY_70
        }
      )
      seriesInstanceRef.current?.attachPrimitive(verticalAnnotation)

      /** NOTE: bad mutation to remove the annotation from state after the attaching
       * prevents the reattaching after unmounting
       */
      annotations.shift()
    })
  }, [chartAnnotations, chartInstanceRef, seriesInstanceRef])
}
