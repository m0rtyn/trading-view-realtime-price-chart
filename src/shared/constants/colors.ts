/**
 * NOTE: colors which are connot be setted via css variables
 * @see colors in src/shared/styles/colors.css
 */
import { AssetId } from 'shared/types'

export const COLOR_GREEN = '#5df4ab' // var(--c-a-green)
export const COLOR_GREEN_LIGHT = '#8df7c4' // var(--green-12)
export const COLOR_GREEN_DARK = '#0ec46c' // var(--green-5)
export const COLOR_PINK = '#ff80f2' // var(--c-a-pink)
export const COLOR_PINK_LIGHT = '#ff99f5' // var(--pink-12)
export const COLOR_PINK_DARK = '#ff33eb' // var(--pink-7)
export const COLOR_RED = '#fea490' // var(--c-a-red)
export const COLOR_BLUE_LIGHT = '#D2FFFE' // var(--c-a-snow)
export const COLOR_YELLOW = '#ccf994' // var(--c-a-yellow)

export const COLOR_GRAY = '#767a98' // var(--gray-8)
export const COLOR_GRAY_70 = '#524e60' // var(--gray-6)
export const COLOR_BLACK = '#201e27' // var(--gray-4), var(--color-panel)

export const POSITIVE_COLOR_CSS_VAR = 'var(--green)'
export const NEGATIVE_COLOR_CSS_VAR = 'var(--pink)'

export const DEFAULT_SKELETON_COLOR = 'var(--gray-3)'
export const DEFAULT_SKELETON_HIGHLIGHT_COLOR = 'var(--gray-5)'

export const ASSET_ID_TO_COLOR_MAP: Record<AssetId, string> = {
  ETH: '#627EEB',
  BTC: '#F7931A',
  LINK: '#2A5ADA',
  XRP: '#25A6F7',
  BNB: '#F0B90B',
  DOT: '#E6007A',
  ADA: '#1C347A',
  LTC: '#BEBEBE',
  XLM: '#000',
  TRX: '#D9012C',
  XMR: '#FF6600',
  DOGE: '#C3A634',
  SOL: '#00B5E2',
  MATIC: '#8247E5',
  APT: '#FF6600',
  ATOM: '#2E3148',
  AVAX: '#E84142',
  FIL: '#00C8FF',
  UNI: '#FF007A',
  NEAR: '#000'
}
