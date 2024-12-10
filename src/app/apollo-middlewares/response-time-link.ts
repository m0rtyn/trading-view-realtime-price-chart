import { ApolloLink } from '@apollo/client'
import { Milliseconds } from 'shared/types'

const MAX_RESPONSE_TIME = 5000 as Milliseconds
const TIME_UPDATE_OPERATION_NAME = 'subscription'
const FIRST_LOAD_OPERATION_IGNORE_LIST = ['getAssetPrices']

export const responseTimeLink = new ApolloLink((operation, forward) => {
  let startTime = Date.now()

  return forward(operation).map(response => {
    const endTime = Date.now()
    const responseTime = endTime - startTime

    if (
      // @ts-expect-error <There is no error, value always exists>
      operation.query?.definitions?.[0]?.operation ===
      TIME_UPDATE_OPERATION_NAME
    ) {
      startTime = endTime
    }

    if (
      responseTime > MAX_RESPONSE_TIME &&
      !FIRST_LOAD_OPERATION_IGNORE_LIST.includes(operation.operationName)
    ) {
      console.error(
        `Request latency: ${responseTime}ms! Please try again in a few seconds or check your connection`
      )
    }

    return response
  })
})
