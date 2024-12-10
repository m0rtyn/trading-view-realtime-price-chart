import { gql } from '__generated__'

export const GET_PRICES_RANGE = gql(`
  query priceRange($data: AssetPricesRangeInput!) {
    priceRange(data: $data) {
      assetId
      feedId
      formattedValue
      timestamp
    }
  }
`)
