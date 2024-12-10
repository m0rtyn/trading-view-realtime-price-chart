import { split } from '@apollo/client'
import { setContext } from '@apollo/client/link/context'
import { GraphQLWsLink } from '@apollo/client/link/subscriptions'
import { getMainDefinition } from '@apollo/client/utilities'
import { createUploadLink } from 'apollo-upload-client'
import { BACKEND_GRAPHQL_URL, SUBSCRIPTION_URL } from 'app/constants'
import { createClient } from 'graphql-ws'

const CLOSE_CODE_TO_RECONNECT = 4001

let wsConnection: WebSocket | undefined

const wsLink = new GraphQLWsLink(
  createClient({
    url: SUBSCRIPTION_URL,
    shouldRetry: () => true,
    on: {
      opened: (socket: unknown) => {
        wsConnection = socket as WebSocket
      }
    }
  })
)

const httpLink = createUploadLink({
  uri: BACKEND_GRAPHQL_URL,
  fetchOptions: {
    credentials: 'include'
  }
})

const authLink = setContext((_, { headers }) => {
  return {
    headers
  }
})

export const link = split(
  ({ query }) => {
    const definition = getMainDefinition(query)
    return (
      definition.kind === 'OperationDefinition' &&
      definition.operation === 'subscription'
    )
  },
  wsLink,
  authLink.concat(httpLink)
)

export function reconnectWs() {
  if (wsConnection) {
    wsConnection.close(CLOSE_CODE_TO_RECONNECT, 'auth')
  }
}
