import {
  ChartOptions,
  ColorType,
  DeepPartial,
  AreaSeriesPartialOptions,
  LastPriceAnimationMode
} from 'lightweight-charts'
import {
  COLOR_GRAY,
  COLOR_GRAY_70,
  COLOR_GREEN,
  COLOR_BLUE_LIGHT,
  COLOR_RED
} from 'shared/constants'
import { roundPriceWithRelativePrecision } from '../utils/round-price-with-relative-precision'

export const MIN_HEIGHT = 300
export const COLORS = {
  greenStart: COLOR_GREEN,
  redStart: COLOR_RED,
  text: COLOR_GRAY,
  background: 'transparent',
  end: 'transparent'
}

export const TIME_SCALE_OPTIONS: DeepPartial<ChartOptions['timeScale']> = {
  borderVisible: false,
  visible: true,
  rightOffset: 100
}

export const CHART_OPTIONS: DeepPartial<ChartOptions> = {
  layout: {
    background: { type: ColorType.Solid, color: COLORS.background },
    textColor: COLORS.text,
    fontFamily: 'poppins'
  },
  crosshair: {
    mode: 0,
    horzLine: {
      style: 2
    },
    vertLine: {
      style: 2
    }
  },
  grid: {
    vertLines: {
      visible: false
    },
    horzLines: {
      color: COLOR_GRAY_70,
      style: 3
    }
  },
  rightPriceScale: {
    borderVisible: false,
    entireTextOnly: true,
    ticksVisible: false
  },
  timeScale: TIME_SCALE_OPTIONS,
  localization: {
    priceFormatter: roundPriceWithRelativePrecision
  },
  autoSize: true,
  handleScale: true,
  handleScroll: {
    mouseWheel: true,
    pressedMouseMove: true,
    horzTouchDrag: false,
    vertTouchDrag: false
  }
}

export const DYNAMIC_SERIES_OPTIONS: AreaSeriesPartialOptions = {
  baseLineStyle: 1,
  lastPriceAnimation: LastPriceAnimationMode.OnDataUpdate,
  lineType: 0,
  topColor: COLOR_GREEN,
  bottomColor: COLORS.end,
  baseLineColor: COLOR_GRAY,
  priceLineColor: COLOR_GREEN,
  lineColor: COLOR_GREEN,
  priceFormat: {
    minMove: 0.00001
  }
}

export const STATIC_SERIES_OPTIONS = {
  baseLineStyle: 1,
  lineType: 0,
  topColor: COLOR_BLUE_LIGHT,
  bottomColor: 'transparent',
  baseLineColor: COLOR_BLUE_LIGHT,
  lineColor: COLOR_BLUE_LIGHT
}

export const STATIC_CHART_OPTIONS = {
  ...CHART_OPTIONS,
  timeScale: TIME_SCALE_OPTIONS,
  height: 500
}
