import { loadDevMessages, loadErrorMessages } from '@apollo/client/dev'
import { __DEV__ } from '@apollo/client/utilities/globals'
import { Theme } from '@radix-ui/themes'
import { ErrorPage } from 'pages/error'
import { ErrorBoundary } from 'react-error-boundary'
import { AppRoutes } from './app-routes'
import { SKELETON_CONFIG, THEME_CONFIG } from './constants'
import '@radix-ui/themes/styles.css'
import 'shared/styles/global.scss'
// TODO: this import doesn't work, investigate
import 'react-loading-skeleton/dist/skeleton.css'

const App: React.FC = () => {
  return (
    <Theme {...THEME_CONFIG}>
      <ErrorBoundary FallbackComponent={ErrorPage}>
        <AppRoutes />

        {/* TODO: move modals and overlays to main layout */}
      </ErrorBoundary>
    </Theme>
  )
}

export default App
