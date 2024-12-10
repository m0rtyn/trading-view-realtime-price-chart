import { SingleValueData, UTCTimestamp } from 'lightweight-charts'
import { AssetId, Milliseconds } from 'shared/types'

export type ChartType = 'baseline' | 'candlestick'
export type ChartPoint = SingleValueData<UTCTimestamp>

export type RAFCallback = (timeProps: TimeProps) => void
export interface TimeProps {
  timestamp: Milliseconds
  delta: Milliseconds
}

export type AnnotationType =
  | 'entryPoint'
  | 'stopLoss'
  | 'takeProfit'
  | '▶️ start game'
  | '⏹️ end game'
  | '⏸️ stop predicts'
export type AnnotationLabel =
  | 'EP'
  | 'SL'
  | 'TP'
  | '🎯'
  | '↕️'
  | '▶️'
  | '⏸️'
  | '⏹️'
export type ModeChartAnnotations = {
  name: AnnotationType
  value: number
}

export interface ChartAnnotations {
  type: 'vertical' | 'horizontal'
  annotations: ModeChartAnnotations[]
}

export type ChartData = {
  assetId: AssetId
  prices: ChartPoint[]
}