// import { GRAY_SCALE, RESET_BUTTON, TRANSITIONS } from '@styles';
// import { ThemeColors } from '@styles/styled';
import { GRAY_SCALE, TRANSITIONS } from '@styles/constants'
import { RESET_BUTTON } from '@styles/mixins'
import { Color } from '@styles/styled'
import { darken, rgba } from 'polished'
import { ButtonHTMLAttributes } from 'react'
import styled, { css, DefaultTheme } from 'styled-components'

export type VariantButton = 'contained' | 'outlined' | 'text' | 'icon' | undefined

export type SizeButton = 'sm' | 'md' | 'lg' | undefined

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: VariantButton
  size?: SizeButton
  color?: Color
  block?: boolean
}

const variantStyles = (
  theme: DefaultTheme,
  variant: VariantButton = 'text',
  color: Color = 'primary'
) => (
  {
    contained: css`
      background: ${theme.colors[color]};
      color: white;
      box-shadow: rgb(0 0 0 / 20%) 0px 3px 1px -2px, rgb(0 0 0 / 14%) 0px 2px 2px 0px, rgb(0 0 0 / 12%) 0px 1px 5px 0px;
      border-color: ${theme.colors[color]};

      &:hover {
        background: ${darken(0.1, theme.colors[color])};
        border-color: ${darken(0.1, theme.colors[color])};
        color: white;
      }

      &:disabled {
        background: ${GRAY_SCALE[500]};
        border-color: ${GRAY_SCALE[500]};
      }
    `,
    outlined: css`
      border-color: ${theme.colors[color]};
      color: ${theme.colors[color]};

      &:hover {
        background: ${rgba(theme.colors[color], 0.1)};
        color: ${theme.colors[color]};
      }

      &:disabled {
        border-color: ${GRAY_SCALE[500]};
        color: ${GRAY_SCALE[500]};
      }
    `,
    text: css`
      color: ${theme.colors[color]};

      &:hover {
        background: ${rgba(theme.colors[color], 0.1)};
        color: ${theme.colors[color]};
      }

      &:disabled {
        color: ${GRAY_SCALE[500]};
      }
    `,
    icon: css`
      color: ${theme.colors[color]};
      padding: 0.6rem;
      border-radius: 50%;
      font-size: 1.2rem;
      
      &:hover {
        background: ${rgba(theme.colors[color], 0.1)};
      }

      &:disabled {
        color: ${GRAY_SCALE[500]};
      }

      &::after {
        content: '';
        width: 100%;
        height: 100%;
        background: ${rgba(theme.colors[color], 0.1)};
        position: absolute;
        border-radius: inherit;
        transform: scale(0);
        transition: 0.3s cubic-bezier(0.69, 0.05, 0, 0.88);
      }

      &:active {
        &:after {
          transform: scale(1.2);
        }
      }
    `
  }[variant]
)

const sizeStyles = (size: SizeButton = 'md') => (
  {
    sm: css`
      padding: 0.35rem 0.7rem;
      font-size: 0.8rem;
    `,
    md: css`
      padding: 0.4rem 1rem;
    `,
    lg: css`
      padding: 0.5rem 1.3rem;
      font-size: 1.2rem;
    `
  }[size]
)

const Button = styled.button<ButtonProps>`
  ${RESET_BUTTON}
  border-radius: 0.25rem;
  transition: background ${TRANSITIONS.base};
  cursor: pointer;
  position: relative;
  
  ${({ block }) => block && css`
    display: block;
    width: 100%;
  `};

  ${({ size }) => sizeStyles(size)}

  ${({ theme, variant, color }) => variantStyles(theme, variant, color)}

  &:disabled {
    pointer-events: none;
    opacity: 0.7;
  }

  &:active {
    transform: scale(1.02);
  }
`

export default Button
