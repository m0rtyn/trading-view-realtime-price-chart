import { act, renderHook } from '@testing-library/react'
import { useMediaQuery } from 'shared/hooks/use-media-query'

const MIN_WITDH = 600
const BELOW_MIN_WIDTH = MIN_WITDH - 1

describe('useMediaQuery', () => {
  it('renders', () => {
    window.resizeTo(BELOW_MIN_WIDTH, 0)
    // eslint-disable-next-line max-nested-callbacks
    const { result } = renderHook(() =>
      useMediaQuery(`(min-width: ${MIN_WITDH}px)`)
    )
    expect(result.current).toBeFalsy()

    // eslint-disable-next-line max-nested-callbacks
    act(() => window.resizeTo(MIN_WITDH, 0))

    expect(result.current).toBeTruthy()
  })
})
