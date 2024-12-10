import { makeVar } from '@apollo/client'
import { Maybe } from '__generated__/graphql'
import { AssetPrice } from 'shared/types'

export const assetLastPriceVar = makeVar<Maybe<AssetPrice>>(null)
