import { SetupsPredictFragment } from '__generated__/graphql'

export interface UserMetadata {
  host: string
  'accept-encoding': string
  'x-forwarded-for': string
  'cf-ray': string
  'x-forwarded-proto': string
  'cf-visitor': string
  'sec-ch-ua': string
  dnt: string
  'sec-ch-ua-mobile': string
  'user-agent': string
  'sec-ch-ua-platform': string
  accept: string
  origin: string
  'sec-fetch-site': string
  'sec-fetch-mode': string
  'sec-fetch-dest': string
  referer: string
  'accept-language': string
  'if-none-match': string
  priority: string
  'cf-connecting-ip': string
  'cdn-loop': string
  'cf-ipcity': string
  'cf-ipcontinent': string
  'cf-ipcountry': string
  'cf-iplatitude': string
  'cf-iplongitude': string
  'cf-region': string
  'cf-region-code': string
  'cf-timezone': string
  'x-envoy-external-address': string
  'x-request-id': string
  'x-envoy-decorator-operation': string
  'x-envoy-peer-metadata-id': string
  'x-envoy-peer-metadata': string
  'x-envoy-attempt-count': string
  'apollo-require-preflight': string
  'x-b3-traceid': string
  'x-b3-spanid': string
  'x-b3-sampled': string
}

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

export type WinnerModalParticipantsList = readonly SetupsPredictFragment[]

export type BetDirection = 'UP' | 'DOWN'