import { makeVar } from '@apollo/client'
import { Asset, Maybe } from '__generated__/graphql'

export const selectedAssetVar = makeVar<Maybe<Asset>>(null)
