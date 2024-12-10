import {
  OneVsOneUpDownPredict,
  OneVsOneExactPricePredict
} from '__generated__/graphql'

export enum BetDirectionType {
  UP = 'UP',
  DOWN = 'DOWN'
}

export enum BetModeType {
  TP = 'TP',
  SL = 'SL'
}

export type BullsEyeBetPartial = {
  address: string
  amount: number
}

export type OneVsOnePredict = OneVsOneUpDownPredict & OneVsOneExactPricePredict
