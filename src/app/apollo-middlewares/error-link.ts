import { NextLink, Operation } from '@apollo/client'
import { onError } from '@apollo/client/link/error'
import { GraphQLError } from 'graphql'

export const handleRequestErrors = onError(
  ({ graphQLErrors, networkError, operation, forward }) => {
    if (graphQLErrors) {
      for (const error of graphQLErrors) {
        resolveError(error, operation, forward)
      }
    }

    if (networkError) {
      console.error('Network error:', networkError)
    }
  }
)

const resolveError = (
  error: GraphQLError,
  operation: Operation,
  forward: NextLink
) => {
  if (error.message === 'Unauthorized') return forward(operation)

  if (error.message === 'INTERNAL_SERVER_ERROR') {
    if (error?.extensions?.originalError?.message === 'Unauthorized')
      return forward(operation)

    // notifyOnUnknownError(error?.extensions?.originalError)
    return
  }

  console.error('Request error', error, operation)
}
