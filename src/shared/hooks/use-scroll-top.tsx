import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

export const useScrollTop = (ref: React.RefObject<HTMLDivElement>) => {
  const { pathname } = useLocation()

  useEffect(() => {
    if (!ref?.current) return

    ref.current?.scrollTo(0, 0)
  }, [pathname, ref])
}
