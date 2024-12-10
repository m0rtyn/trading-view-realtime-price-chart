import { FC } from 'react'
import { EmptyGraph } from './empty-graph'
import { GraphWrapper } from './graph-wrapper'

interface Props {
  isDark?: boolean
}

export const PriceGraphStub: FC<Props> = ({ isDark = false }) => (
  <GraphWrapper
    withPadding
    isDark={isDark}
  >
    <EmptyGraph />
  </GraphWrapper>
)
