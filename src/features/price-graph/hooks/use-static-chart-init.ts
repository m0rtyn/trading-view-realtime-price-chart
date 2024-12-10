import { IChartApi, ISeriesApi, Time, createChart } from 'lightweight-charts'
import { useEffect, useRef } from 'react'
import { format } from 'date-fns'
import {
  STATIC_CHART_OPTIONS,
  STATIC_SERIES_OPTIONS,
  TIME_SCALE_OPTIONS
} from '../constants'
import { ChartPoint } from '../types'

export const useStaticChartInit = (
  chartData: ChartPoint[],
  chartContainerRef: React.MutableRefObject<HTMLDivElement | null>,
  isPercentScale: boolean
) => {
  /** to add series, clean the chart or rescale after updating */
  const chartInstanceRef = useRef<IChartApi | null>(null)
  /** to update the chart */
  const seriesInstanceRef = useRef<ISeriesApi<'Area', Time> | null>(null)

  const percentPriceFormatter = (price: number) => {
    return price.toFixed(2) + '%'
  }

  useEffect(() => {
    const isPricesNotExist = !chartData || chartData.length === 0
    const isChartAlreadyCreated = chartInstanceRef.current !== null
    const chartContainer = chartContainerRef?.current
    if (isChartAlreadyCreated || !chartContainer || isPricesNotExist) return

    chartInstanceRef.current = createChart(chartContainer, {
      ...STATIC_CHART_OPTIONS,
      timeScale: {
        ...TIME_SCALE_OPTIONS,
        tickMarkFormatter: (time: number) => format(time * 1000, 'dd MMM')
      },
      localization: {
        priceFormatter: isPercentScale ? percentPriceFormatter : undefined
      }
    })
    seriesInstanceRef.current = chartInstanceRef.current.addAreaSeries(
      STATIC_SERIES_OPTIONS
    )
    chartInstanceRef.current.timeScale().fitContent()
    seriesInstanceRef?.current?.setData(chartData) // NOTE: set data without last element
  }, [chartContainerRef, chartData, isPercentScale])
}
