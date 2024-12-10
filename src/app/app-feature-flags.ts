import { STAND, PROD_FLAGS, DEV_FLAGS, MAINNET_FLAGS } from './constants'
import { AppConfig, Stand } from './types'

export const featureFlags = resolveStandConfig()

function resolveStandConfig(): AppConfig {
  if (STAND === Stand.mainnet) {
    return MAINNET_FLAGS
  }

  if (STAND === Stand.prod) {
    return PROD_FLAGS
  }

  return DEV_FLAGS
}
