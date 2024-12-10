import { useEffect } from 'react'
import { useQuery } from '@apollo/client'
import { ListAssetsQuery, Asset } from '__generated__/graphql'
import { LIST_ASSETS } from 'api/list-assets'
import { assetsGlobalVar } from 'shared/store/assets-store'
import { globalOverlayAssetsLoadingVar } from 'shared/store/global-overlay-state-store'

export const useLoadAssets = () => {
  const { data, error, loading } = useQuery<ListAssetsQuery>(LIST_ASSETS)

  useEffect(() => {
    assetsGlobalVar(data ? (data.listAssets as Asset[]) : [])
  }, [data])

  useEffect(() => {
    globalOverlayAssetsLoadingVar(loading && !error)
  }, [loading, error])

  return {
    assets: data?.listAssets,
    error,
    loading
  }
}
