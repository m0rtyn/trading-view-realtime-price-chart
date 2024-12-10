import { DataTestIDs } from 'shared/constants'
import { useVisibilityChange } from 'shared/hooks/use-visibility-change'
import { Maybe, AssetId } from 'shared/types'
import { getFakeChartPrices } from '../hooks/use-fake-prices'
import { ChartAnnotations } from '../types'
import { DynamicChart } from './dynamic-chart'
import { EmptyGraph } from './empty-graph'
import { GraphWrapper } from './graph-wrapper'
import { PriceGraphHeader } from './price-graph-header'

interface Props {
  assetId?: Maybe<AssetId>
  annotations?: Maybe<ChartAnnotations>
  withHeader?: boolean
  withPadding?: boolean
  isDark?: boolean
  startPrice?: Maybe<number>
  assetNameDataTestID?: DataTestIDs | ''
  priceAmountDataTestID?: DataTestIDs | ''
}
export const PriceGraph: React.FC<Props> = ({
  assetId,
  startPrice,
  annotations = null,
  withHeader = false,
  withPadding = true,
  isDark = false,
  assetNameDataTestID = '',
  priceAmountDataTestID = ''
}) => {
  // WARN: temp
  // const { loading, chartData } = useGraphDataLoader(QUERY_DATA_SIZE, assetId)
  const chartData = getFakeChartPrices()
  const loading = false

  const isAppVisible = useVisibilityChange()

  // TODO: add chart type switcher
  // const [chartType, setChartType] = useState<ChartType>('baseline')

  if (loading || !isAppVisible || !chartData) {
    return (
      <GraphWrapper
        withPadding={withPadding}
        isDark={isDark}
      >
        <EmptyGraph loading={loading} />
      </GraphWrapper>
    )
  }

  return (
    <GraphWrapper
      withPadding={withPadding}
      isDark={isDark}
    >
      {withHeader ?
        <PriceGraphHeader
          startPrice={startPrice}
          assetNameDataTestID={assetNameDataTestID}
          priceAmountDataTestID={priceAmountDataTestID}
        />
      : null}

      <DynamicChart
        chartData={chartData}
        annotations={annotations}
      />
    </GraphWrapper>
  )
}
