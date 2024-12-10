import { useNavigate } from 'react-router-dom'
import { RouterPathes } from 'shared/constants'

export const useProfileRedirect = (
  userId?: string,
  preventRedirect = false
) => {
  const navigate = useNavigate()
  if (!userId) return null

  const profileRedirect = () => {
    if (preventRedirect) return

    navigate(`${RouterPathes.profile}/${userId}`)
  }

  return profileRedirect
}
