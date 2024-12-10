export const roundNumberWithRelativePrecision = (price: number) => {
  if (price > 10000) return Number(price.toFixed(0))
  if (price > 1000) return Number(price.toFixed(1))
  if (price > 100) return Number(price.toFixed(2))
  if (price > 10) return Number(price.toFixed(3))
  if (price > 1) return Number(price.toFixed(4))
  if (price > 0.1) return Number(price.toFixed(5))
  if (price > 0.01) return Number(price.toFixed(6))

  return price
}
