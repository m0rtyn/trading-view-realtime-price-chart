export type RadixColorType =
  | 'tomato'
  | 'red'
  | 'crimson'
  | 'pink'
  | 'plum'
  | 'purple'
  | 'violet'
  | 'indigo'
  | 'blue'
  | 'cyan'
  | 'teal'
  | 'green'
  | 'grass'
  | 'brown'
  | 'orange'
  | 'sky'
  | 'mint'
  | 'lime'
  | 'yellow'
  | 'amber'
  | 'gold'
  | 'bronze'
  | 'gray'

export type RadixSize =
  | 'auto'
  | 'min-content'
  | 'max-content'
  | '100%'
  | '0'
  | '1'
  | '2'
  | '3'
  | '4'
  | '5'
  | '6'
  | '7'
  | '8'
  | '9'

export type Banner = {
  heading: string
  callToAction: string
  text: string
  path: string
  buttonText: string
  buttonColor?: RadixColorType
  cssClass?: string
}

export type HeroBannerType =
  | 'bullsEye'
  | 'twitter'
  | 'discord'
  | 'setups'
  | 'upDown'
  | 'addSetup'
  | 'allModes'
  | 'help'
  | 'web3'
  | 'chainlink'
