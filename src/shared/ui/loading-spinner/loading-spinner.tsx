import React from 'react'
import { Box } from '@radix-ui/themes'
import classnames from 'classnames'
import { TheToken } from '../the-token'
import styles from './loading-spinner.module.scss'

interface Props {
  iconSize?: '0' | '6' | '7' | '8' | '9' | '100%'
  variant?: 'dark' | 'light'
}
export const LoadingSpinner: React.FC<Props> = ({
  iconSize = '100%',
  variant = 'light'
}) => {
  return (
    <Box
      className={classnames(styles.loadingAnimation, {
        [styles.dark]: variant === 'dark'
      })}
      width={iconSize}
      height={iconSize}
    >
      <TheToken
        size={'100%'}
        color='white'
      />
    </Box>
  )
}
