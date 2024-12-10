import { ApolloError, useSubscription } from '@apollo/client'
import { AssetPriceChangedSubscription } from '__generated__/graphql'
import { SUBSCRIPTION_ASSET_PRICE_CHANGED } from 'api/prices/subscription-asset-price-changed'
import { useResponsive } from './use-responsive'

// TODO: inspect the error on a try to use state inside subscription: useState, useRef, useReactiveVar
export const useBtcPriceSubscription = () => {
  const [isMobile] = useResponsive('xs')

  const { data } = useSubscription<AssetPriceChangedSubscription>(
    SUBSCRIPTION_ASSET_PRICE_CHANGED,
    {
      variables: { assetId: 'BTC' },
      // TODO: Remove this solution when we'll fix problem with IOS power-saving mode.
      // Now we just reload the page and this fix prevent this message to be shown to user before reload
      onError: console.error
    }
  )

  const btcPrice = data?.assetPriceChanged?.formattedValue
  return Number(btcPrice)
}