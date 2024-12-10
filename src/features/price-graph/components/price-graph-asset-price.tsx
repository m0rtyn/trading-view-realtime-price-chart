import { FC } from 'react'
import { Code, Flex, Text } from '@radix-ui/themes'
import classnames from 'classnames'
import Skeleton from 'react-loading-skeleton'
import { DataTestIDs } from 'shared/constants'
import { formatToUSD } from 'shared/utils/format-price'
import styles from '../price-graph.module.scss'

interface Props {
  price?: number
  dataTestID?: DataTestIDs | ''
}
export const PriceGraphAssetPrice: FC<Props> = ({ price, dataTestID = '' }) => {
  const formattedPrice = formatToUSD(price, 2)

  return (
    <Flex
      className={styles.assetPrice}
      direction='column'
    >
      <Text
        className={styles.headerLabel}
        weight={'medium'}
      >
        Current price
      </Text>
      <Code
        size={{ initial: '4', sm: '6' }}
        weight={'medium'}
        variant='ghost'
        className={classnames(styles.currentHeaderPrice, 'color-white')}
        data-testid={dataTestID}
      >
        {formattedPrice || <Skeleton width={'17rem'} />}
      </Code>
    </Flex>
  )
}
