import { makeVar } from '@apollo/client'
import { GameResultNotification } from '__generated__/graphql'

export const notificationListVar = makeVar<GameResultNotification[]>([])

export const notificationsSkipAmountVar = makeVar<number>(0)
