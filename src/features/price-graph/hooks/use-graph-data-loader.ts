import { useEffect } from 'react'
import { useLazyQuery, useSubscription } from '@apollo/client'
import {
  AssetPriceChangedSubscription,
  AssetPricesQuery
} from '__generated__/graphql'
import { GET_ASSET_PRICES } from 'api/prices/get-asset-prices'
import { SUBSCRIPTION_ASSET_PRICE_CHANGED } from 'api/prices/subscription-asset-price-changed'
import { useResponsive } from 'shared/hooks/use-responsive'
import { assetLastPriceVar } from 'shared/store/price-graph-store'
import { AssetId, Maybe, Milliseconds } from 'shared/types'
import { transformToChartData } from '../utils/transform-to-chart-data'

export const useGraphDataLoader = (
  querySize: number,
  assetId?: Maybe<AssetId>
) => {
  const [isMobile] = useResponsive('xs')

  const [commitGetAssetPrices, { loading, error, data: getAssetPricesResp }] =
    useLazyQuery<AssetPricesQuery>(GET_ASSET_PRICES, {
      fetchPolicy: 'no-cache'
    })

  const { data: newPriceSubscription } =
    useSubscription<AssetPriceChangedSubscription>(
      SUBSCRIPTION_ASSET_PRICE_CHANGED,
      {
        variables: {
          assetId
        },
        skip: !assetId,
        onError: console.warn // NOTE: don't throw errors in case of nullable assetId
      }
    )

  useEffect(() => {
    if (!assetId) return

    const variables = {
      data: {
        assetId,
        take: querySize,
        skip: 0
      }
    }

    commitGetAssetPrices({
      variables,
      // TODO: Remove this solution when we'll fix problem with IOS power-saving mode.
      // Now we just reload the page and this fix prevent this message to be shown to user before reload
      onError: console.error
    })
  }, [assetId, commitGetAssetPrices, querySize])

  useEffect(() => {
    const assetPriceState = newPriceSubscription?.assetPriceChanged

    if (!assetPriceState) return
    const { assetId, formattedValue, timestamp } = assetPriceState

    const lastPrice = {
      timestamp: timestamp as Milliseconds,
      price: Number(formattedValue),
      assetId: assetId as AssetId
    }

    assetLastPriceVar(lastPrice)
  }, [assetId, newPriceSubscription?.assetPriceChanged])

  const chartData = assetId && {
    assetId,
    prices: transformToChartData(getAssetPricesResp)
  }

  return {
    chartData,
    loading,
    error
  }
}
