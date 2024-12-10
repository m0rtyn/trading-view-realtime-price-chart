import { FC } from 'react'
import { Flex, Heading } from '@radix-ui/themes'
import { DataTestIDs } from 'shared/constants'
import { AssetId } from 'shared/types'
import { getAssetIconById } from 'shared/utils/get-asset-icon-by-id'

interface Props {
  assetId: AssetId
  withAssetId?: boolean
  dataTestID?: DataTestIDs | ''
}
export const PriceGraphAssetIcon: FC<Props> = ({
  assetId,
  withAssetId = true,
  dataTestID = ''
}) => {
  const AssetIcon = getAssetIconById(assetId as AssetId)
  const iconSize = 40

  return (
    <Flex
      gap='3'
      align='center'
    >
      <AssetIcon
        width={iconSize}
        height={iconSize}
      />

      {withAssetId && (
        <Heading
          size={{ initial: '4', sm: '6' }}
          weight={'medium'}
          data-testid={dataTestID}
        >
          {assetId}
        </Heading>
      )}
    </Flex>
  )
}
