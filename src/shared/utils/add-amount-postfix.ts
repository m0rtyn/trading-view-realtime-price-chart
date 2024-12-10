/**
  Rounds a number to the "k" or "M" format.
  @param {number} number - The number to round.
  @returns {string} - The rounded number with the specified format.
*/

export const addAmountPostfix = (number: number, isInteger = false) => {
  if (number >= 1000000) return (number / 1000000).toFixed(1) + 'kk'
  if (number >= 1000) return (number / 1000).toFixed(1) + 'k'
  return number.toFixed(isInteger ? 0 : 2).toString()
}
