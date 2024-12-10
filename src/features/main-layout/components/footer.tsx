import { Flex, Grid, Text } from '@radix-ui/themes'
import styles from '../main-layout.module.scss'

export const Footer: React.FC = () => (
  <footer className={styles.footer}>
    <Flex
      align={'center'}
      gap={'3'}
    >
      <Flex
        p='1'
        align='center'
        justify={'center'}
      ></Flex>
    </Flex>
  </footer>
)
