import { useEffect } from 'react'
import { SkeletonStyleProps } from 'react-loading-skeleton'
import {
  createRoutesFromChildren,
  matchRoutes,
  useLocation,
  useNavigationType
} from 'react-router-dom'
import {
  DEFAULT_SKELETON_COLOR,
  DEFAULT_SKELETON_HIGHLIGHT_COLOR
} from 'shared/constants'
import { AppConfig, Stand } from './types'

export const STAND = import.meta.env.VITE_STAND as Stand

export const BACKEND_URL = import.meta.env.VITE_BACKEND_URL
export const BACKEND_GRAPHQL_URL = `https://${BACKEND_URL}/graphql`
export const SUBSCRIPTION_URL = `wss://${BACKEND_URL}/subscription`

export const MAINNET_FLAGS: AppConfig = {
  auth: {
    isDiscordAllowed: true,
    isSignUpByEmailAllowed: true,
    isTwitterAllowed: true,
    isWalletAllowed: true,
    isAuthRequired: true
  },
  tokenMintAllowed: false,
  mobile: {
    upDown: false,
    oneVsOne: false,
    bullsEye: false,
    setups: false,
    rewards: false
  }
}

export const PROD_FLAGS: AppConfig = {
  auth: {
    isDiscordAllowed: true,
    isSignUpByEmailAllowed: true,
    isTwitterAllowed: true,
    isWalletAllowed: true,
    isAuthRequired: true
  },
  tokenMintAllowed: true,
  mobile: {
    upDown: false,
    oneVsOne: false,
    bullsEye: false,
    setups: false,
    rewards: false
  }
}

export const DEV_FLAGS: AppConfig = {
  auth: {
    isDiscordAllowed: true,
    isSignUpByEmailAllowed: true,
    isTwitterAllowed: true,
    isWalletAllowed: true,
    isAuthRequired: true
  },
  tokenMintAllowed: true,
  mobile: {
    upDown: false,
    oneVsOne: false,
    bullsEye: false,
    setups: false,
    rewards: false
  }
}

export const THEME_CONFIG = {
  accentColor: 'sky' as const,
  radius: 'full' as const,
  hasBackground: true, // NOTE: to inject Radix CSS variables into a <body/>
  grayColor: 'gray' as const,
  appearance: 'dark' as const,
  panelBackground: 'solid' as const,
  scaling: '100%' as const
}

export const SKELETON_CONFIG: SkeletonStyleProps = {
  baseColor: DEFAULT_SKELETON_COLOR,
  highlightColor: DEFAULT_SKELETON_HIGHLIGHT_COLOR,
  borderRadius: '2rem'
}

export const THIRD_WEB_API_KEY = import.meta.env.VITE_THIRD_WEB_API_KEY
export const WSS_PROVIDER_URL = import.meta.env.VITE_WSS_PROVIDER
export const UNAUTHORIZED = 'Unauthorized'
