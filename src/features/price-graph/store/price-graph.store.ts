import { makeVar } from '@apollo/client'
import { AssetId, Maybe, Seconds } from 'shared/types'

export const priceGraphAssetIdVar = makeVar<Maybe<AssetId>>(null)
export const timerVar = makeVar<Seconds>(0 as Seconds)
