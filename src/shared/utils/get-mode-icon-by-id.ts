import { FC, SVGProps } from 'react'
import { GameType } from '__generated__/graphql'
import {
  BullsEyeNavIcon,
  OneVsOneIcon,
  OneVsOneNavIcon,
  SetupsIcon,
  SetupsNavIcon,
  UnknownAssetIcon,
  UpDownNavIcon
} from 'shared/icons'
import { GameModeType } from 'shared/types'

const GAME_MODE_ID_TO_ICON_MAP: Record<
  GameModeType,
  FC<SVGProps<SVGSVGElement>>
> = {
  bullsEye: BullsEyeNavIcon,
  oneVsOne: OneVsOneIcon,
  setups: SetupsIcon,
  upDown: UpDownNavIcon
}
export const getIconByModeId = (gameMode: GameModeType) => {
  const Icon = GAME_MODE_ID_TO_ICON_MAP[gameMode] || UnknownAssetIcon
  if (!Icon) console.error(`Asset icon for ${gameMode} not found`)
  return Icon
}

const GAME_ID_TO_ICON_MAP: Record<GameType, FC<SVGProps<SVGSVGElement>>> = {
  [GameType.Bullseye]: BullsEyeNavIcon,
  [GameType.Onevsone]: OneVsOneNavIcon,
  [GameType.Setup]: SetupsNavIcon,
  [GameType.Updown]: UpDownNavIcon
}

export const getIconByGameId = (gameId: GameType) => {
  const Icon = GAME_ID_TO_ICON_MAP[gameId] || UnknownAssetIcon
  if (!Icon) console.error(`Asset icon for ${gameId} not found`)
  return Icon
}
