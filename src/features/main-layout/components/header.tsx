import { Flex } from '@radix-ui/themes'
import { HeaderInfo } from './header-info'
import styles from '../header.module.scss'

interface Props {
  children?: React.ReactNode
}
export const Header: React.FC<Props> = ({ children }) => {
  return (
    <header className={styles.header}>
      <HeaderInfo />
      <Flex
        ml={'auto'}
        align={'center'}
        gap={{ initial: '3', md: '7' }}
      >
        {children}
      </Flex>
    </header>
  )
}
