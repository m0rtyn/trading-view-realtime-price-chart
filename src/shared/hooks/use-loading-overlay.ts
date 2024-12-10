import { useEffect } from 'react'
import { useReactiveVar } from '@apollo/client'
import {
  globalOverlayAllowanceLoadingVar,
  globalOverlayAssetsLoadingVar,
  globalOverlayBalanceLoadingVar,
  globalOverlayLoadingVar,
  globalOverlayUserLoadingVar
} from 'shared/store/global-overlay-state-store'

export const useLoadingOverlay = () => {
  const globalOverlayBalanceLoading = useReactiveVar(
    globalOverlayBalanceLoadingVar
  )
  const globalOverlayAllowanceLoading = useReactiveVar(
    globalOverlayAllowanceLoadingVar
  )
  const globalOverlayUserLoading = useReactiveVar(globalOverlayUserLoadingVar)
  const globalOverlayAssetsLoading = useReactiveVar(
    globalOverlayAssetsLoadingVar
  )

  useEffect(() => {
    if (
      globalOverlayBalanceLoading ||
      globalOverlayAllowanceLoading ||
      globalOverlayUserLoading ||
      globalOverlayAssetsLoading
    )
      return

    globalOverlayLoadingVar(false)
  }, [
    globalOverlayBalanceLoading,
    globalOverlayAllowanceLoading,
    globalOverlayUserLoading,
    globalOverlayAssetsLoading
  ])
}
