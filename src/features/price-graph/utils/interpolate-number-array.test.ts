import { interpolateArray } from './interpolate-number-array'

describe('interpolateArray', () => {
  // eslint-disable-next-line max-statements
  it('should interpolate an array of numbers', () => {
    const data1 = [1, 5, 3]
    const data2 = [1, 4, 2]
    const data3 = [1.5, 5.1, 3.3]
    const fitCount = 5
    const result1 = interpolateArray(data1, fitCount)
    const result2 = interpolateArray(data2, fitCount * 2)
    const result3 = interpolateArray(data3, fitCount)

    expect(result1).toEqual([1, 3, 5, 4, 3])
    expect(result2).toEqual([1, 1.67, 2.33, 3, 3.67, 3.78, 3.33, 2.89, 2.44, 2])
    expect(result3).toEqual([1.5, 3.3, 5.1, 4.2, 3.3])
  })

  // it('should return the same array if fitCount is equal to data length', () => {
  //   const data = [1, 2, 3, 4, 5]
  //   const fitCount = 5
  //   const result = interpolateArray(data, fitCount)
  //   expect(result).toEqual(data)
  // })

  // it('should return an empty array if data is empty', () => {
  //   const data: number[] = []
  //   const fitCount = 10
  //   const result = interpolateArray(data, fitCount)
  //   expect(result).toEqual([])
  // })
})
