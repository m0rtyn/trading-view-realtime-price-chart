export type FieldType = 'email' | 'username' | 'password' | 'number'

export type AssetId =
  | 'BTC'
  | 'ETH'
  | 'BNB'
  | 'XRP'
  | 'ADA'
  | 'DOGE'
  | 'SOL'
  | 'TRX'
  | 'DOT'
  | 'MATIC'
  | 'LTC'
  | 'AVAX'
  | 'XLM'
  | 'LINK'
  | 'UNI'
  | 'XMR'
  | 'FIL'
  | 'ATOM'
  | 'APT'
  | 'NEAR'

export type OnboardingStep = {
  title: string
  description: string
  image: string
}

export type User = {
  name: string
  avatar: string
}

export interface AssetPrice {
  assetId: AssetId
  price: number
  timestamp: number
}

export type BetDirection = 'UP' | 'DOWN'
