import { ASSET_ID_TO_COLOR_MAP } from 'shared/constants'
import { AssetId } from 'shared/types'

export const getAssetColorById = (assetId: AssetId) => {
  return ASSET_ID_TO_COLOR_MAP?.[assetId] || 'var(--gray)'
}
