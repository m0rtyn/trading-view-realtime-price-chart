import { useEffect, useRef } from 'react'
import { useReactiveVar } from '@apollo/client'
import { Flex } from '@radix-ui/themes'
import { DataTestIDs } from 'shared/constants'
import { assetLastPriceVar } from 'shared/store/price-graph-store'
import { AssetId, Maybe } from 'shared/types'
import { isNotNullOrUndef } from 'shared/utils/is-not-null-or-undef'
import { priceGraphAssetIdVar } from '../store/price-graph.store'
import { PriceGraphAssetChange } from './price-graph-asset-change'
import { PriceGraphAssetIcon } from './price-graph-asset-icon'
import { PriceGraphAssetPrice } from './price-graph-asset-price'
import styles from '../price-graph.module.scss'

interface Props {
  startPrice?: Maybe<number>
  assetNameDataTestID?: DataTestIDs | ''
  priceAmountDataTestID?: DataTestIDs | ''
  // setChartType: React.Dispatch<React.SetStateAction<ChartType>>
}
// eslint-disable-next-line max-statements
export const PriceGraphHeader: React.FC<Props> = ({
  startPrice,
  assetNameDataTestID = '',
  priceAmountDataTestID = ''
  // setChartType
}) => {
  const lastAssetPriceRef = useRef<Maybe<number>>(null)

  const assetNow = useReactiveVar(assetLastPriceVar)
  const [assetId, price] = [assetNow?.assetId, assetNow?.price]

  priceGraphAssetIdVar(assetId || null)

  useEffect(() => {
    if (!price || price === lastAssetPriceRef.current) return

    return () => {
      lastAssetPriceRef.current = price
    }
  }, [assetNow?.price, price])

  const lastAssetPrice = lastAssetPriceRef?.current || 0

  const assetChange =
    isNotNullOrUndef(assetNow) && isNotNullOrUndef(startPrice) ?
      (((assetNow.price - startPrice) / startPrice) * 100).toFixed(2)
    : null

  return (
    <Flex
      justify='between'
      align='center'
      gap='1'
      height={'100%'}
      width={'100%'}
      className={styles.priceGraphHeader}
    >
      <Flex
        align='center'
        gap='6'
      >
        {Boolean(assetId) && (
          <PriceGraphAssetIcon
            assetId={assetId as AssetId}
            dataTestID={assetNameDataTestID}
          />
        )}

        <PriceGraphAssetPrice
          price={lastAssetPrice}
          dataTestID={priceAmountDataTestID}
        />

        {assetChange && <PriceGraphAssetChange assetChange={assetChange} />}
      </Flex>

      {/* // TODO: complete this component */}
      {/* <PriceGraphTypeSwitcher /> */}
    </Flex>
  )
}
