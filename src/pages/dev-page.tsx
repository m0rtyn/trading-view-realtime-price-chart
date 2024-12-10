import { Flex, Grid } from '@radix-ui/themes'
import PriceGraph from 'features/price-graph'

export const DevPage: React.FC = () => {
  return (
    <>
      <Flex
        height={'100%'}
        width={'100%'}
        direction='column'
      >
        <PriceGraph assetId={'BTC'} />
      </Flex>
    </>
  )
}
