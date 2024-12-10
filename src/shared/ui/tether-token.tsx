import { FC } from 'react'
import { RadixColorType } from 'shared/types'

interface Props {
  className?: string
  size?: string
  color?: RadixColorType | 'black'
}
export const TetherToken: FC<Props> = ({ className, size = '2rem', color }) => {
  const colorCssValue = color ? `var(--${color})` : 'currentColor'
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      viewBox='0 0 339 295'
      width={size}
      height={size}
      className={className}
    >
      <path
        fill={colorCssValue}
        fillRule='evenodd'
        d='M191 145a331 331 0 0 1-43 0c-42-2-74-9-74-18s32-17 74-18v28a320 320 0 0 0 43 0v-28c43 1 74 9 74 18s-31 16-74 18Zm0-39V80h59V40H89v40h59v26c-48 2-84 11-84 23s36 21 84 23v83h43v-83c48-2 84-12 84-23s-36-21-84-23Zm0 0Z'
      />
    </svg>
  )
}
