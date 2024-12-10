import { Card } from '@radix-ui/themes'
import classnames from 'classnames'
import styles from '../price-graph.module.scss'

interface WrapperProps {
  children: React.ReactNode
  withPadding: boolean
  isDark?: boolean
}
export const GraphWrapper: React.FC<WrapperProps> = ({
  children,
  withPadding,
  isDark = false
}) => {
  return (
    <Card
      variant='classic'
      className={classnames(styles.graphWrapper, {
        [styles.withPadding]: withPadding,
        [styles.bgBlack]: isDark
      })}
    >
      {children}
    </Card>
  )
}
