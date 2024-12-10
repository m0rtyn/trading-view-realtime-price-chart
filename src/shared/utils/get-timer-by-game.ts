import { differenceInSeconds } from 'date-fns'
import { GameStateEnum, Milliseconds, Seconds } from 'shared/types'

export function getTimerByGameState(
  gameState: GameStateEnum | null,
  stopPredictAt: number | null,
  endAt: number | null
) {
  if (!endAt || !stopPredictAt) return null

  if (gameState === Open) {
    return getTimeUntilStageEnd(stopPredictAt as Milliseconds)
  }

  if (gameState === Inprogress) {
    return getTimeUntilStageEnd(endAt as Milliseconds)
  }

  return null
}

function getTimeUntilStageEnd(stageEndTime: Milliseconds) {
  const diff = differenceInSeconds(stageEndTime, Date.now()) as Seconds
  return diff > 0 ? diff : null
}

const { Open, Inprogress } = GameStateEnum
