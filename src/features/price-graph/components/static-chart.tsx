import { useRef } from 'react'
import styles from '../price-graph.module.scss'
import { ChartPoint } from '../types'
import { useStaticChartInit } from '../hooks/use-static-chart-init'

interface Props {
  chartData: ChartPoint[]
  isPercentScale?: boolean
}
export const StaticChart: React.FC<Props> = ({
  chartData,
  isPercentScale = false
}) => {
  /** to create and define width and height of the chart */
  const chartContainerRef = useRef<HTMLDivElement | null>(null)

  useStaticChartInit(chartData, chartContainerRef, isPercentScale)

  return (
    <div
      ref={chartContainerRef}
      className={styles.chart}
    />
  )
}
