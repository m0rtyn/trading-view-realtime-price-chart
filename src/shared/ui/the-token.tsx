import { FC } from 'react'
import { RadixColorType } from 'shared/types'

interface Props {
  color?: RadixColorType | 'black' | 'white'
  size?: string
  className?: string
}
export const TheToken: FC<Props> = ({ color, size = '3rem', className }) => {
  return (
    <svg
      width={size}
      height={size}
      color={color && `var(--${color})`}
      xmlns='http://www.w3.org/2000/svg'
      viewBox='0 0 24 24'
      fill='none'
      className={className}
    >
      <path
        d='M6 18L18 6M6 6l12 12'
        stroke='currentColor'
        strokeWidth='4'
        fill='currentColor'
      />
    </svg>
  )
}
