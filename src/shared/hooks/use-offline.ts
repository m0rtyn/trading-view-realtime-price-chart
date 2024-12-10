import { useEffect, useState } from 'react'
import { isOfflineDialogOpenVar } from 'shared/store/dialogs'

export const useOffline = () => {
  const [isOffline, setIsOffline] = useState(false)

  useEffect(() => {
    if (isOffline) {
      isOfflineDialogOpenVar(true)
      return
    }

    isOfflineDialogOpenVar(false)
  }, [isOffline])

  useEffect((): (() => void) => {
    const handleOffline = (): void => {
      setIsOffline(true)
    }
    const handleOnline = (): void => {
      setIsOffline(false)
    }
    window.addEventListener('offline', handleOffline)
    window.addEventListener('online', handleOnline)
    return (): void => {
      window.removeEventListener('offline', handleOffline)
      window.removeEventListener('online', handleOnline)
    }
  }, [])
}
