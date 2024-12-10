/* eslint-disable max-lines */
import { FC } from 'react'
import { Cross1Icon, PlusCircledIcon } from '@radix-ui/react-icons'
import {
  BalanceOperationType,
  GameSetupResult,
  GameStatus,
  GameType,
  PredictStatus
} from '__generated__/graphql'
import {
  SetupsCardLogo,
  BullsEyeCardLogo,
  OneVsOneCardLogo,
  UpDownCardLogo,
  tickBoxIconPath,
  crossBoxIconPath,
  alertBoxIconPath,
  RoundedTickIcon,
  DepositIcon,
  WithdrawIcon,
  ClockFilledIcon,
  TickFilledIcon,
  CrossFilledIcon,
  MinusFilledIcon,
  HotIcon,
  PlusIcon,
  CupIcon,
  WarningTriangleIcon,
  CoinsIcon
} from 'shared/icons'
import { TheToken } from 'shared/ui/the-token'
import { DownIcon, UpIcon } from '../icons'
import { RadixColorType, GameModeType } from '../types'
import { RouterPathes } from './router-paths'

export const AVATAR_FALLBACK_DEFAULT = 'X'
export const NAME_FALLBACK_DEFAULT = 'X'
export const HIDDEN_PROFILE_TOOLTIP_TEXT = 'User profile is unknown'

export const NOTIFICATION_TOAST_INIT_TITLE = 'INIT'

export const MAIN_LAYOUT_SCROLL_VIEW_ID = 'main-layout-scroll-view'

export const VALUE_TO_COLOR_MAP: Record<string, RadixColorType> = {
  // TODO: extend to other values
  UP: 'green',
  DOWN: 'pink'
}

export const VALUE_TO_ICON_MAP: Record<string, React.FC> = {
  // TODO: extend to other values
  UP: UpIcon,
  DOWN: DownIcon,
  TP: UpIcon,
  SL: DownIcon,
  THE_TOKEN: TheToken
}

export const MODES: GameModeType[] = [
  'bullsEye',
  'oneVsOne',
  'setups',
  'upDown'
]

export const LEADERS_TABLE_VALUE_BADGES = {
  PERCENT: '%',
  THOUSAND_BADGE: 'k'
}

export enum MY_BETS_TYPES {
  ACTIVE = 'Active',
  COMPLETED = 'Completed'
}

export const MY_BETS_MODES: Record<
  GameType,
  {
    name: string
    icon: FC
    link: RouterPathes
  }
> = {
  [GameType.Bullseye]: {
    name: "Bull's Eye",
    icon: BullsEyeCardLogo,
    link: RouterPathes.bullsEye
  },
  [GameType.Onevsone]: {
    name: '1 VS 1',
    icon: OneVsOneCardLogo,
    link: RouterPathes.oneVsOne
  },
  [GameType.Setup]: {
    name: 'Setups',
    icon: SetupsCardLogo,
    link: RouterPathes.setups
  },
  [GameType.Updown]: {
    name: 'Up / Down',
    icon: UpDownCardLogo,
    link: RouterPathes.upDown
  }
}

export const GAME_NOTIFICATION_STATUS_FIELDS: Record<
  PredictStatus,
  { notificationText: string; notificationIcon: string }
> = {
  [PredictStatus.Won]: {
    notificationText: `$gameName is over. Congratulations, you won!`,
    notificationIcon: tickBoxIconPath
  },
  [PredictStatus.Loss]: {
    notificationText: `$gameName is over. Unfortunally, you lost!`,
    notificationIcon: crossBoxIconPath
  },
  [PredictStatus.Reject]: {
    notificationText: `$gameName game was rejected.`,
    notificationIcon: alertBoxIconPath
  },
  [PredictStatus.Open]: {
    notificationText: `$gameName is over. Congratulations, you won!`,
    notificationIcon: tickBoxIconPath
  }
}

// TODO: Change icons and titles for some items when proper design will be provided
export const BALANCE_CHANGE_ITEM_TYPE_VARIATIONS: Record<
  BalanceOperationType,
  { icon: FC; title: string; color: string }
> = {
  [BalanceOperationType.UserWon]: {
    icon: RoundedTickIcon,
    title: 'Victory',
    color: 'var(--green)'
  },
  [BalanceOperationType.UserLose]: {
    icon: Cross1Icon,
    title: 'Defeat',
    color: 'var(--pink)'
  },
  [BalanceOperationType.UserAddBet]: {
    icon: PlusCircledIcon,
    title: '',
    color: 'var(--yellow)'
  },
  [BalanceOperationType.UserRejectedBet]: {
    icon: WarningTriangleIcon,
    title: 'Rejected',
    color: 'var(--yellow)'
  },
  [BalanceOperationType.GameResolve]: {
    icon: RoundedTickIcon,
    title: 'Resolved',
    color: 'var(--green)'
  },
  [BalanceOperationType.Hold]: {
    icon: ClockFilledIcon,
    title: 'Balance hold',
    color: 'var(--cyan)'
  },
  [BalanceOperationType.HourlyFee]: {
    icon: MinusFilledIcon,
    title: 'Hourly fee',
    color: 'var(--cyan)'
  },
  [BalanceOperationType.NetworkFee]: {
    icon: MinusFilledIcon,
    title: 'Network fee',
    color: 'var(--cyan)'
  },
  [BalanceOperationType.NotDefined]: {
    icon: WarningTriangleIcon,
    title: 'Not Defined',
    color: 'var(--yellow)'
  },
  [BalanceOperationType.Unhold]: {
    icon: CoinsIcon,
    title: 'Balance unhold',
    color: 'var(--cyan)'
  },
  [BalanceOperationType.UserDeposit]: {
    icon: DepositIcon,
    title: 'Deposit',
    color: 'var(--cyan)'
  },
  [BalanceOperationType.UserWithdraw]: {
    icon: WithdrawIcon,
    title: 'Withdrawal',
    color: 'var(--cyan)'
  },
  [BalanceOperationType.Bonus]: {
    icon: CupIcon,
    title: 'Reward',
    color: 'var(--green)'
  },
  [BalanceOperationType.BonusRemoved]: {
    icon: MinusFilledIcon,
    title: 'Reward',
    color: 'var(--pink)'
  }
}

export const WELCOME_QUERY_NAME = 'welcome'

type BadgeProps = {
  label: string
  color: RadixColorType
  icon: React.FC
}

const pendingProps: BadgeProps = {
  label: 'Pending',
  color: 'cyan',
  icon: ClockFilledIcon
}

const rejectedProps: BadgeProps = {
  label: 'Cancel',
  color: 'gray',
  icon: MinusFilledIcon
}

export const RESULT_TO_BADGE_MAP: Record<
  GameStatus | PredictStatus | GameSetupResult | 'Exact',
  BadgeProps
> = {
  [PredictStatus.Won]: {
    label: 'Won',
    color: 'green',
    icon: TickFilledIcon
  },
  [PredictStatus.Loss]: {
    label: 'Lost',
    color: 'pink',
    icon: CrossFilledIcon
  },

  [PredictStatus.Open]: {
    label: 'Open',
    color: 'green',
    icon: ClockFilledIcon
  },

  [PredictStatus.Reject]: rejectedProps,
  [GameSetupResult.Rejected]: rejectedProps,

  [GameSetupResult.TakeProfit]: {
    label: 'TP',
    color: 'green',
    icon: PlusIcon
  },
  [GameSetupResult.StopLoss]: {
    label: 'SL',
    color: 'pink',
    icon: MinusFilledIcon
  },

  ['Exact']: {
    label: 'Exact',
    color: 'orange',
    icon: HotIcon
  },

  // [GameStatus.Open]: pendingProps,
  [GameStatus.Close]: {
    label: 'Finished',
    color: 'pink',
    icon: TickFilledIcon
  }
  // [GameStatus.Reject]: rejectedProps
}

export const PREDICT_STATUS_TO_BADGE_MAP = {
  [PredictStatus.Won]: {
    label: 'Won',
    color: 'green',
    icon: TickFilledIcon
  },
  [PredictStatus.Loss]: {
    label: 'Lost',
    color: 'pink',
    icon: CrossFilledIcon
  },
  [PredictStatus.Open]: pendingProps,
  [PredictStatus.Reject]: rejectedProps
}

export enum WalletStateStatus {
  signInToPlay = 'signInToPlay',
  connectWallet = 'connectWallet',
  switchChain = 'switchChain'
}

export const CANCEL_RESULT_TOOLTIP_TEXT =
  'This game was cancelled due to the empty opposite pool.'
