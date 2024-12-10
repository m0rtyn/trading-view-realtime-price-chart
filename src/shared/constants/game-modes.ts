import {
  BullsEyeCardLogo,
  OneVsOneCardLogo,
  SetupsCardLogo,
  UpDownCardLogo,
  X1000CardLogo
} from 'shared/icons'

export const GAME_MODES = {
  X1000: {
    title: 'x1000',
    color: 'var(--c-a-sky)',
    logo: X1000CardLogo
  },
  BULLS_EYE: {
    title: 'Bull’s eye',
    color: 'var(--c-bulls-eye)',
    logo: BullsEyeCardLogo
  },
  SETUPS: {
    title: 'Setup',
    color: 'var(--c-setups)',
    logo: SetupsCardLogo
  },
  UP_DOWN: {
    title: 'Up / Down',
    color: 'var(--c-up-down)',
    logo: UpDownCardLogo
  },
  ONE_VS_ONE: {
    title: '1 VS 1',
    color: 'var(--c-one-vs-one)',
    logo: OneVsOneCardLogo
  }
}

export const MIN_BET_AMOUNT = 1
export const MAX_BET_AMOUNT = 50000
