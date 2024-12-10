import { RadixColorType, Maybe, GameStateEnum } from 'shared/types'

export function getTimerColor(gameState: Maybe<GameStateEnum>) {
  const colorName: RadixColorType =
    gameState === Inprogress
      ? 'yellow'
      : gameState === Open
      ? 'green'
      : gameState === Pending
      ? 'pink'
      : 'yellow'

  return `var(--${colorName})` as const
}

const { Open, Inprogress, Pending } = GameStateEnum
