// eslint-disable-next-line max-statements
export function interpolateArray(data: number[], fitCount: number) {
  const linearInterpolate = function (
    before: number,
    after: number,
    atPoint: number
  ) {
    return Math.round((before + (after - before) * atPoint) * 100) / 100
  }

  const newData = []
  const springFactor = new Number((data.length - 1) / (fitCount - 1)) as number
  newData[0] = data[0] // for new allocation

  for (let i = 1; i < fitCount - 1; i++) {
    const tmp = i * springFactor
    const before = Number(new Number(Math.floor(tmp)).toFixed())
    const after = Number(new Number(Math.ceil(tmp)).toFixed())
    const atPoint = tmp - before
    newData[i] = linearInterpolate(data[before], data[after], atPoint)
  }

  newData[fitCount - 1] = Math.round(data[data.length - 1] * 100) / 100 //

  return newData
}
