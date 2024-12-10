import { useEffect } from 'react'
import { BACKEND_URL } from 'app/constants'
import { isUserAccessDeniedVar } from 'shared/store/user'
import { UserMetadata } from 'shared/types'

export const useUserMetadata = () => {
  const getUserMetaData = async () => {
    const res = await fetch(`https://${BACKEND_URL}/api/user-metadata`)
    return res.json()
  }

  useEffect(() => {
    getUserMetaData().then((metadata: UserMetadata) => {
      const isAccessDenied = RESTRICTED_COUNTRIES.includes(
        metadata['cf-ipcountry']
      )
      if (isAccessDenied) {
        isUserAccessDeniedVar(true)
      }
    })
  }, [])
}

const RESTRICTED_COUNTRIES = ['US']
