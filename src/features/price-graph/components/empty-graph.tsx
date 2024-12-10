import { Flex, Heading, Text } from '@radix-ui/themes'
import cn from 'classnames'
import { ChartWithBgIcon } from 'shared/icons'
import { LoadingSpinner } from 'shared/ui/loading-spinner'
import styles from '../price-graph.module.scss'

const ICON_SIZE = '6rem'

interface Props {
  title?: string
  secondaryText?: string
  loading?: boolean
  customChartBGClassname?: string
}
export const EmptyGraph: React.FC<Props> = ({
  loading,
  title,
  secondaryText,
  customChartBGClassname
}) => {
  const currentTitle = title ? title : 'Reload page to see graph'
  // const currentSecondaryText =
  //   secondaryText ? secondaryText : (
  //     'Choose a cryptocurrency token (e.g., Bitcoin).'
  //   )
  return (
    <Flex
      align='center'
      height='100%'
      width='100%'
      justify='center'
      className={cn(
        styles.emptyGraph,
        customChartBGClassname ? customChartBGClassname : ''
      )}
    >
      <Flex className={styles.emptyGraphLabel}>
        {loading ?
          <LoadingSpinner iconSize='9' />
        : <ChartWithBgIcon
            width={ICON_SIZE}
            height={ICON_SIZE}
          />
        }

        <Heading
          size={'5'}
          mt={'2'}
        >
          {loading ? 'Loading...' : currentTitle}
        </Heading>

        {/* {!loading && <Text size='2'>{currentSecondaryText}</Text>} */}
      </Flex>
    </Flex>
  )
}
