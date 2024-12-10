import { useRef } from 'react'
import { Maybe } from '__generated__/graphql'
import { ISeriesApi, Time } from 'lightweight-charts'
import { useAnimationFrame } from '../hooks/use-animation-frame'
import { useChartAnnotations } from '../hooks/use-chart-annotations'
import { useChartHistoricalData } from '../hooks/use-chart-historical-data'
import { useChartUpdating } from '../hooks/use-chart-updating'
import { useDynamicChartInit } from '../hooks/use-dynamic-chart-init'
import { useFakePrices as useFakePrices } from '../hooks/use-fake-prices'
import { ChartAnnotations, ChartData, ChartPoint, RAFCallback } from '../types'
import styles from '../price-graph.module.scss'

interface Props {
  annotations: Maybe<ChartAnnotations>
  chartData: ChartData
}
// eslint-disable-next-line max-statements
export const DynamicChart: React.FC<Props> = ({
  chartData,
  annotations = null
}) => {
  /** to create and define width and height of the chart */
  const chartContainerRef = useRef<HTMLDivElement | null>(null)
  /** to update the chart */
  const seriesInstanceRef = useRef<ISeriesApi<'Area', Time> | null>(null)
  /** to interpolate the points coordinates between an penultimate and last points */
  const lastPriceRef = useRef<ChartPoint | null>(null)
  /** to update new animation frames of the chart */
  const updateChartFrameRef = useRef<RAFCallback | null>(null)

  // WARN: temp
  // const newPriceSubscr = useReactiveVar(assetLastPriceVar)
  const newPriceSubscr = useFakePrices()

  const { chartInstanceRef } = useDynamicChartInit(
    chartData,
    chartContainerRef,
    seriesInstanceRef,
    lastPriceRef
  )

  useChartUpdating(
    newPriceSubscr,
    seriesInstanceRef,
    lastPriceRef,
    updateChartFrameRef
  )

  useAnimationFrame(updateChartFrameRef?.current)

  // useChartHistoricalData(chartInstanceRef, seriesInstanceRef, chartData.assetId)

  useChartAnnotations(chartInstanceRef, seriesInstanceRef, annotations)

  return (
    <div
      ref={chartContainerRef}
      className={styles.chart}
    />
  )
}
