import { ApolloClient, ApolloLink, InMemoryCache } from '@apollo/client'
import { handleRequestErrors, link } from './apollo-middlewares'

const cache = new InMemoryCache({})

export const apolloClient = new ApolloClient({
  link: ApolloLink.from([handleRequestErrors, link]),
  connectToDevTools: true,
  cache
})
