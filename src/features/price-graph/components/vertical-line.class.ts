import { CanvasRenderingTarget2D } from 'fancy-canvas'
import {
  Coordinate,
  IChartApi,
  ISeriesApi,
  ISeriesPrimitive,
  ISeriesPrimitiveAxisView,
  ISeriesPrimitivePaneRenderer,
  ISeriesPrimitivePaneView,
  SeriesOptionsMap,
  SeriesType,
  Time
} from 'lightweight-charts'
import { getCanvaLinePositions } from '../utils/get-canvas-positions'

export class VertLine implements ISeriesPrimitive<Time> {
  _chart: IChartApi
  _series: ISeriesApi<keyof SeriesOptionsMap>
  _time: Time
  _paneViews: VertLinePaneView[]
  _timeAxisViews: VertLineTimeAxisView[]

  constructor(
    chart: IChartApi,
    series: ISeriesApi<SeriesType>,
    time: Time,
    options?: Partial<VertLineOptions>
  ) {
    const vertLineOptions: VertLineOptions = {
      ...VERT_LINE_DEFAULT_OPTIONS,
      ...options
    }
    this._chart = chart
    this._series = series
    this._time = time
    this._paneViews = [new VertLinePaneView(this, vertLineOptions)]
    this._timeAxisViews = [new VertLineTimeAxisView(this, vertLineOptions)]
  }
  updateAllViews() {
    this._paneViews.forEach(pw => pw.update())
    this._timeAxisViews.forEach(tw => tw.update())
  }
  timeAxisViews() {
    return this._timeAxisViews
  }
  paneViews() {
    return this._paneViews
  }
}

class VertLinePaneRenderer implements ISeriesPrimitivePaneRenderer {
  _x: Coordinate | null = null
  _options: VertLineOptions
  constructor(x: Coordinate | null, options: VertLineOptions) {
    this._x = x
    this._options = options
  }
  draw(target: CanvasRenderingTarget2D) {
    target.useBitmapCoordinateSpace(scope => {
      if (this._x === null) return
      const ctx = scope.context
      const position = getCanvaLinePositions(
        this._x,
        scope.horizontalPixelRatio,
        this._options.width
      )
      ctx.strokeStyle = this._options.color
      ctx.setLineDash([10, 5]) /*dashes are 10px and spaces are 5px*/
      ctx.strokeRect(
        position.position,
        0,
        position.length,
        scope.bitmapSize.height
      )
    })
  }
}

class VertLinePaneView implements ISeriesPrimitivePaneView {
  _source: VertLine
  _x: Coordinate | null = null
  _options: VertLineOptions

  constructor(source: VertLine, options: VertLineOptions) {
    this._source = source
    this._options = options
  }
  update() {
    const timeScale = this._source._chart.timeScale()
    const timeCoordinate = timeScale.timeToCoordinate(this._source._time)
    this._x = timeCoordinate
  }
  renderer() {
    return new VertLinePaneRenderer(this._x, this._options)
  }
}

class VertLineTimeAxisView implements ISeriesPrimitiveAxisView {
  _source: VertLine
  _x: Coordinate | null = null
  _options: VertLineOptions

  constructor(source: VertLine, options: VertLineOptions) {
    this._source = source
    this._options = options
  }
  update() {
    const timeScale = this._source._chart.timeScale()
    this._x = timeScale.timeToCoordinate(this._source._time)
  }
  visible() {
    return this._options.showLabel
  }
  tickVisible() {
    return this._options.showLabel
  }
  coordinate() {
    return this._x ?? 0
  }
  text() {
    return this._options.labelText
  }
  textColor() {
    return this._options.labelTextColor
  }
  backColor() {
    return this._options.labelBackgroundColor
  }
}

export interface VertLineOptions {
  color: string
  labelText: string
  width: number
  labelBackgroundColor: string
  labelTextColor: string
  showLabel: boolean
}

const VERT_LINE_DEFAULT_OPTIONS: VertLineOptions = {
  color: 'green',
  labelText: '',
  width: 3,
  labelBackgroundColor: 'green',
  labelTextColor: 'white',
  showLabel: false
}
