import { FC, ReactNode } from 'react'
import { LoadingSpinner } from './loading-spinner'

interface Props {
  children: ReactNode
  loading: boolean
  variant?: 'light' | 'dark'
  iconSize?: '0' | '6' | '7' | '8' | '9'
}
export const Loading: FC<Props> = ({
  loading,
  children,
  variant = 'light',
  iconSize = '0'
}) => {
  return loading ?
      <LoadingSpinner
        variant={variant}
        iconSize={iconSize}
      />
    : children
}
