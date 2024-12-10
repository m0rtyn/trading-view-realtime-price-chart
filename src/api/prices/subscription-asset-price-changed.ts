import { gql } from '@apollo/client'

export const SUBSCRIPTION_ASSET_PRICE_CHANGED = gql`
  subscription assetPriceChanged($assetId: String!) {
    assetPriceChanged(assetId: $assetId) {
      assetId
      formattedValue
      timestamp
    }
  }
`
