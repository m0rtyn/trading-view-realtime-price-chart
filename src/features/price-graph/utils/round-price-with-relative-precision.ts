import { formatToUSD } from 'shared/utils/format-price'

export function roundPriceWithRelativePrecision(price: number) {
  if (price > 10000) return formatToUSD(price, 0)
  if (price > 1000) return formatToUSD(price, 1)
  if (price > 100) return formatToUSD(price, 2)
  if (price > 10) return formatToUSD(price, 3)
  if (price > 1) return formatToUSD(price, 4)
  if (price > 0.1) return formatToUSD(price, 5)
  if (price > 0.01) return formatToUSD(price, 6)
  if (price > 0.001) return formatToUSD(price, 7)

  return formatToUSD(price, 8)
}
