import { gql } from '@apollo/client'

export const LIST_ASSETS = gql`
  query listAssets {
    listAssets {
      id
      name
      precision
      feedId
      price {
        formattedValue
        payload
      }
      last7days {
        formattedValue
        timestamp
      }
      price24h {
        formattedValue
        timestamp
      }
    }
  }
`
