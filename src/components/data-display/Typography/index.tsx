import { MEDIA_BREAKPOINTS } from '@styles/constants'
import { Color } from '@styles/styled'
import styled, { css } from 'styled-components'

export type VariantTipography = 'display' | 'headline' | 'small' | 'lead' | 'default'

export type FontWheightTipography = 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800
| 900 | 'bold' | 'lighter' | 'normal'

const getVariant = (variant: VariantTipography = 'default', size = 1) => ({
  default: css`
    font-size: 16px;
    line-height: 24px;
  `,
  display: () => {
    switch (size) {
      case 1:
        return css`
          ${MEDIA_BREAKPOINTS.tablet} {
            font-size: 80px;
            line-height: 120px;
          }
        `
      case 2:
        return css`
          ${MEDIA_BREAKPOINTS.tablet} {
            font-size: 72px;
            line-height: 108px;
          }
        `
      case 3:
        return css`
          ${MEDIA_BREAKPOINTS.tablet} {
            font-size: 64px;
            line-height: 96px;
          }
        `
      case 4:
        return css`
          ${MEDIA_BREAKPOINTS.tablet} {
            font-size: 56px;
            line-height: 84px;
          }
        `
      case 5:
        return css`
          ${MEDIA_BREAKPOINTS.tablet} {
            font-size: 48px;
            line-height: 72px;
          }
        `
      default:
        return css`
          ${MEDIA_BREAKPOINTS.tablet} {
            font-size: 40px;
            line-height: 60px;
          }
        `
    }
  },
  headline: () => {
    switch (size) {
      case 1:
        return css`
        ${MEDIA_BREAKPOINTS.tablet} {
          font-size: 36px;
          line-height: 54px;
        }
        `
      case 2:
        return css`
        ${MEDIA_BREAKPOINTS.tablet} {
          font-size: 32px;
          line-height: 48px;
        }
        `
      case 3:
        return css`
        ${MEDIA_BREAKPOINTS.tablet} {
          font-size: 28px;
          line-height: 42px;
        }
        `
      case 4:
        return css`
        ${MEDIA_BREAKPOINTS.tablet} {
          font-size: 24px;
          line-height: 36px;
        }
        `
      default:
        return css`
        ${MEDIA_BREAKPOINTS.tablet} {
          font-size: 20px;
          line-height: 30px;
        }
        `
    }
  },
  lead: css`
    ${MEDIA_BREAKPOINTS.tablet} {
      font-weight: 300;
      font-size: 20px;
      line-height: 30px;
    }
  `,
  small: css`
    font-size: 13px;
    line-height: 20px;
  `
}[variant])

export type TypographyProp = {
  variant?: VariantTipography,
  size?: number,
  fontWeight?: FontWheightTipography,
  color?: Color
}

const Typography = styled.p<TypographyProp>`
  font-weight: ${({ fontWeight }) => {
    return fontWeight
      ? `${fontWeight} !important`
      : 400
  }};
  color: ${({ theme, color }) => {
    return color
      ? theme.colors[color]
      : theme.colors.gray
  }};
  margin-bottom: 0;
  text-decoration: none;
  ${({ variant, size }) => getVariant(variant, size)}
`

export default Typography
