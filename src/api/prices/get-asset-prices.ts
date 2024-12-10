import { gql } from '__generated__'

export const GET_ASSET_PRICES = gql(`
  query assetPrices($data: AssetPricesInput!) {
    assetPrices(data: $data) {
      assetId
      feedId
      formattedValue
      timestamp
    }
  }
`)
