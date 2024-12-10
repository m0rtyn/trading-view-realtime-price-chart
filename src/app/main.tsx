// NOTE: Sentry should be initialized as early as possible in the app's lifecycle
import { StrictMode } from 'react'
import { ApolloProvider } from '@apollo/client'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import App from 'app/app'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { apolloClient } from './apollo-client'

// TODO: Return this once the app is ready for production
// registerSW()

const container = document.querySelector('#root')
if (container) {
  const root = createRoot(container)
  const queryClient = new QueryClient()

  root.render(
    <StrictMode>
      <ApolloProvider client={apolloClient}>
        <QueryClientProvider client={queryClient}>
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </QueryClientProvider>
      </ApolloProvider>
    </StrictMode>
  )
}
