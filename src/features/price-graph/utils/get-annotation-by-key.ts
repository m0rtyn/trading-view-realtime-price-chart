import { SeriesMarkerShape } from 'lightweight-charts'
import {
  COLOR_GREEN_DARK,
  COLOR_BLUE_LIGHT,
  COLOR_PINK_DARK,
  COLOR_YELLOW
} from 'shared/constants'
import { AnnotationLabel, AnnotationType } from '../types'

export function getAnnotationColorByKey(key: AnnotationType) {
  const colors: Record<AnnotationType, string> = {
    entryPoint: COLOR_BLUE_LIGHT,
    takeProfit: COLOR_GREEN_DARK,
    stopLoss: COLOR_PINK_DARK,
    '▶️ start game': COLOR_BLUE_LIGHT,
    '⏹️ end game': COLOR_PINK_DARK,
    '⏸️ stop predicts': COLOR_YELLOW
  }

  return colors?.[key] || 'white'
}

export function getAnnotationNameByKey(key: AnnotationType) {
  const colors: Record<AnnotationType, AnnotationLabel> = {
    entryPoint: 'EP',
    stopLoss: 'SL',
    takeProfit: 'TP',
    '▶️ start game': '▶️',
    '⏹️ end game': '⏹️',
    '⏸️ stop predicts': '⏸️'
  }

  return colors?.[key] || 'unknown'
}

export function getMarkerShapeByKey(
  key: string
): import('lightweight-charts').SeriesMarkerShape {
  const shapes: Record<string, SeriesMarkerShape> = {
    start: 'circle',
    stop: 'square'
  }

  return shapes?.[key] || 'arrowUp'
}
