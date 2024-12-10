import { VALUE_TO_COLOR_MAP, VALUE_TO_ICON_MAP } from 'shared/constants'

/**
 * @example 15m, 45m, 12h, 24h...
 */
const timeframeRegExp = /\d\d(m|h)/

export const getButtonColorByLabel = (value: string) => {
  const upperCaseValue = value.toUpperCase()

  const isPlainNumber = /^\d{1,3}$/.test(value)
  if (isPlainNumber) return 'black'

  const isTimeframe = timeframeRegExp.test(value)
  if (isTimeframe) return 'green'

  if (!(upperCaseValue in VALUE_TO_COLOR_MAP)) return 'gray'

  return VALUE_TO_COLOR_MAP[upperCaseValue]
}

export const getIconByButtonLabel = (value: string) => {
  const upperCaseValue = value.toUpperCase()
  return VALUE_TO_ICON_MAP?.[upperCaseValue] || null
}
