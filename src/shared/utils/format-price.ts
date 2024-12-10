import { Maybe } from 'shared/types'

const amountShort = new Intl.NumberFormat('en-US', {
  style: 'decimal',
  maximumFractionDigits: 0
})

const amountLong = new Intl.NumberFormat('en-US', {
  style: 'decimal',
  maximumFractionDigits: 2
})

export type AMOUNT_FORMAT = 'long' | 'short'

export function formatAmountLong(amount?: number | string | null) {
  return formatAmount(amount, 'long')
}

export function formatAmount(
  amount?: number | string | null,
  format: AMOUNT_FORMAT = 'short'
) {
  const value = amount ? Number(amount) : 0

  if (format === 'short') {
    return amountShort.format(value)
  }

  return amountLong.format(value)
}

export const formatToUSD = (price?: Maybe<number>, precision = 1) => {
  if (price === 0) return '0.00'
  if (!price) return null

  return Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    maximumFractionDigits: precision
  }).format(price)
}

export const formatToTether = (price?: Maybe<number>, precision = 1) => {
  if (price === 0) return '0.00'
  if (!price) return null

  return Intl.NumberFormat('en-US', {
    style: 'decimal',
    maximumFractionDigits: precision
  }).format(price)
}