import {
  OneVsOneExactPriceGame,
  OneVsOneGame,
  SetupGame,
  UpDownGame
} from '__generated__/graphql'

export type OneVsOneGameCustomType = OneVsOneExactPriceGame

export type GameClientType =
  | OneVsOneGame
  | SetupGame
  | UpDownGame
  | OneVsOneGameCustomType

export type GameClientTypeDeprecated = OneVsOneGame | SetupGame | UpDownGame

export type GameModeType = 'oneVsOne' | 'setups' | 'upDown' | 'bullsEye'

export enum GameStateEnum {
  Open = 'OPEN',
  Inprogress = 'INPROGRESS',
  Pending = 'PENDING'
}

export enum GameModes {
  oneVsOne = 'oneVsOne',
  setups = 'setups',
  upDown = 'upDown',
  bullsEye = 'bullsEye'
}
