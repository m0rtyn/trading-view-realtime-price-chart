import { Asset, Maybe } from '__generated__/graphql'

export const getAssetByFeedId = (feedId: string, assets: Maybe<Asset[]>) => {
  if (!assets) return

  return assets.find(({ feedId: assetFeedId }) => feedId === assetFeedId)
}