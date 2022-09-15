import { ThemeColor } from '@styles/styled'
import styled, { css } from 'styled-components'

export type VariantBadge = 'dot' | 'default'

const Wrapper = styled.div<{textColor?: ThemeColor}>`
  position: relative;
  display: inline-flex;
  vertical-align: middle;
  flex-shrink: 0;
  padding: 0.2rem;
  background: transparent;
  border: none;
  color: ${({ theme, textColor }) => textColor ? theme.colors[textColor] : theme.colors.primary};
`

const getVariant = (variant: VariantBadge = 'default') => ({
  dot: css`
    width: 8px;
    height: 8px;
  `,
  default: css`
    font-size: 0.75rem;
    color: white;
    align-items: center;
    justify-content: center;
    min-width: 20px;
    height: 20px;
    padding: 0 6px;
    line-height: 1;
  `
}[variant])

const Symbol = styled.span<{
  color?: ThemeColor,
  variant?: VariantBadge
}>`
  background: ${({ theme, color }) => color ? theme.colors[color] : theme.colors.primary};
  display: flex;
  border-radius: 10px;
  position: absolute;
  top: 0px;
  right: 0px;
  transform: scale(1) translate(30%, -30%);
  transform-origin: 100% 0%;

  ${({ variant }) => getVariant(variant)}
`

export {
  Wrapper,
  Symbol
}
