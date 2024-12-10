import { ElementRef, forwardRef } from 'react'
import { Code } from '@radix-ui/themes'
import classnames from 'classnames'

interface Props extends React.ComponentPropsWithoutRef<typeof Code> {
  isWhite: boolean
  className?: string
  isBlack?: boolean
}
export const Numeral = forwardRef<ElementRef<typeof Code>, Props>(
  ({ children, isBlack, isWhite, className, ...props }, ref) => {
    const classNames = classnames(className, {
      'color-white': isWhite && !isBlack,
      'color-black': isBlack
    })

    return (
      <Code
        ref={ref}
        className={classNames}
        variant='ghost'
        {...props}
      >
        {children}
      </Code>
    )
  }
)
