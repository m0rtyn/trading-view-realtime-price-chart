import React, { useCallback, useEffect, useState } from 'react'

const CAN_USE_DOM = typeof window !== 'undefined'

/**
 * NOTE: {@link file://./../styles/breakpoints.scss} see original breakpoints
 */
const BREAKPOINTS = {
  xs: '(min-width: 300px) and (max-width: 520px)', // Phones (portrait)
  sm: '(min-width: 520px) and (max-width: 768px)', // Tablets (portrait)
  md: '(min-width: 768px) and (max-width: 1024px)', // Tablets (landscape)
  lg: '(min-width: 1024px) and (max-width: 1280px)', // Laptops, HD
  xl: '(min-width: 1280px) and (max-width: 1640px)', // Desktops
  xxl: '(min-width: 1640px) and (max-width: 1920px)', // Wide displays, FullHD
  xxxl: '(min-width: 1920px) and (max-width: 2560px)' // QuadHD or 2K
} as const

type Query = keyof typeof BREAKPOINTS

export const useResponsive = (query: Query | Query[]) => {
  const [isInitialRenderPassed, setIsInitialRenderPassed] = useState(false)
  const [isQueryMatching, setIsQueryMatching] = React.useState(
    isMatching(query)
  )
  const result = isInitialRenderPassed ? isQueryMatching : null

  const isMatchingQuery = useCallback(
    (query: Query | Query[]) => {
      return isInitialRenderPassed && isMatching(query)
    },
    [isInitialRenderPassed]
  )

  const onWindowResize = useCallback(() => {
    setIsQueryMatching(isMatching(query))
  }, [query])

  useEffect(() => {
    window.addEventListener('resize', onWindowResize)
    return function cleanup() {
      window.removeEventListener('resize', onWindowResize)
    }
  }, [isQueryMatching, onWindowResize])

  useEffect(() => {
    setIsInitialRenderPassed(true)
  }, [])

  return [result, isMatchingQuery] as const
}

const isMatching = (query: Query | Query[]) => {
  let array

  if (Array.isArray(query)) {
    array = query.map(
      item =>
        CAN_USE_DOM && Boolean(window.matchMedia(BREAKPOINTS[item]).matches)
    )
    return array.some(o => o)
  }

  return CAN_USE_DOM && Boolean(window.matchMedia(BREAKPOINTS[query]).matches)
}
