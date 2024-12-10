import { gql } from '__generated__'

export const ASSET_PAYLOAD = gql(`
  query assetPayload($data: AssetPricesInput!) {
    assetPrices(data: $data) {
      payload
    }
  }
`)