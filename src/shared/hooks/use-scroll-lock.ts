import React, { MutableRefObject } from 'react'

// TODO: remove this hook after removing all usages
export const useScrollLock = (
  ref?: MutableRefObject<HTMLDivElement | null>
) => {
  const target = ref?.current || null

  const root = document.getElementsByTagName('html')[0]

  const lockScroll = React.useCallback(() => {
    if (target) {
      target.style.overflow = 'hidden'
      target.style.touchAction = 'none'

      root.style.overflow = 'hidden'
      root.style.touchAction = 'none'
    } else {
      document.body.style.overflow = 'hidden'
      document.body.style.touchAction = 'none'

      root.style.overflow = 'hidden'
      root.style.touchAction = 'none'
    }
  }, [target, root])

  const unlockScroll = React.useCallback(() => {
    if (target) {
      target.style.overflow = 'scroll'
      target.style.touchAction = 'unset'

      root.style.overflow = 'unset'
      root.style.touchAction = 'unset'
    } else {
      document.body.style.overflow = 'unset'
      document.body.style.touchAction = 'unset'

      root.style.overflow = 'unset'
      root.style.touchAction = 'unset'
    }
  }, [target, root])

  return [lockScroll, unlockScroll]
}
