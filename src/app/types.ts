export interface AppConfig {
  readonly auth: {
    isWalletAllowed: boolean
    isSignUpByEmailAllowed: boolean
    isTwitterAllowed: boolean
    isDiscordAllowed: boolean
    isAuthRequired: boolean
  }
  readonly tokenMintAllowed: boolean
  readonly mobile: {
    upDown: boolean
    oneVsOne: boolean
    bullsEye: boolean
    setups: boolean
    rewards: boolean
  }
}

export enum Stand {
  beta = 'beta',
  dev = 'dev',
  prod = 'prod',
  mainnet = 'mainnet'
}
