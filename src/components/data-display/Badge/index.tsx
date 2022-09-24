import { Color } from '@styles/styled'
import { FC, ReactNode } from 'react'
import { Wrapper, Symbol } from './styled'

export type BadgeProps = {
  children?: ReactNode,
  color?: Color,
  textColor?: Color,
  anchorOrigin?: {
    horizontal: 'left' | 'right',
    vertical: 'top' | 'bottom'
  },
  badgeContent?: string | number,
  variant?: 'dot'
  as?: 'button'
}

const Badge:FC<BadgeProps> = ({
  anchorOrigin,
  badgeContent,
  children,
  color,
  textColor,
  variant,
  ...props
}) => {
  return (
    <Wrapper {...props} textColor={textColor}>
      {children}
      <Symbol
        variant={variant}
        color={color}
      >
        {badgeContent}
      </Symbol >
    </Wrapper>
  )
}

export default Badge
