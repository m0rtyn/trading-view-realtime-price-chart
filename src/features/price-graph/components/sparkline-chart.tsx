import { FC, useEffect, useRef } from 'react'
import { sparkline } from '@fnando/sparkline'
import {
  NEGATIVE_COLOR_CSS_VAR,
  POSITIVE_COLOR_CSS_VAR
} from 'shared/constants'

interface Props {
  chartData: number[]
  className: string
}
// TODO: extract to shared components
export const SparklineChart: FC<Props> = ({ chartData }) => {
  const sparklineRef = useRef<SVGSVGElement | null>(null)

  useEffect(() => {
    if (chartData.length === 0 || !sparklineRef.current) return
    const normalizedData = normalizeData(chartData)

    sparkline(sparklineRef.current, normalizedData, {})
  }, [chartData])

  if (chartData.length === 0) return null

  const sparklineColor =
    chartData[0] > chartData[chartData.length - 1] ?
      NEGATIVE_COLOR_CSS_VAR
    : POSITIVE_COLOR_CSS_VAR

  return (
    <svg
      width='80'
      height='24'
      ref={sparklineRef}
      strokeWidth='3'
      strokeLinejoin='round'
      strokeLinecap='round'
      stroke={sparklineColor}
      fill='none'
    ></svg>
  )
}

/** NOTE: normalize numbers to positive values */
function normalizeData(data: number[]) {
  const max = Math.max(...data)
  const min = Math.min(...data)

  if (max === min) return data

  const delta = max - min
  return data.map(n => (n - min) / delta)
}
