import { FC } from 'react'
import { Code, Flex, Text } from '@radix-ui/themes'

import styles from '../price-graph.module.scss'

interface Props {
  assetChange: string
}

export const PriceGraphAssetChange: FC<Props> = ({ assetChange }) => {
  const isPositive = Number(assetChange) > 0

  return assetChange ?
      <Flex direction={'column'}>
        <Text
          weight={'medium'}
          className={styles.headerLabel}
        >
          Change
        </Text>
        <Code
          size={{ initial: '4', sm: '6' }}
          color={isPositive ? 'green' : 'red'}
          weight={'medium'}
          variant='ghost'
          className={styles.currentHeaderPrice}
        >
          {isPositive ? '+' : ''}
          {assetChange}%
        </Code>
      </Flex>
    : null
}
