import { MEDIA_BREAKPOINTS } from '@styles/constants'
import { rgba } from 'polished'
import styled, { css } from 'styled-components'

const Wrapper = styled.div<{
  pagination?: boolean
}>`
  position: relative;

  .swiper-pagination-bullet {
    background: transparent;
    border: 1px solid ${({ theme }) => {
      return theme.mode === 'dark'
        ? theme.colors.light
        : theme.colors.textBody
    }};
    opacity: 1;
    width: 12px;
    height: 12px;
  }

  .swiper-pagination-bullet-active {
    background: ${({ theme }) => theme.colors.primary};
    border-color: ${({ theme }) => theme.colors.primary};
  }

  .swiper {
    padding-bottom: ${({ pagination }) => pagination && '2.5rem'};
  }
`

const Button = styled.button<{
  left?: boolean
  right?: boolean
}>`
  border-style: none;
  border-radius: 12px;
  width: 38px;
  height: 38px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  z-index: 10;
  top: 50%;
  transform: translateY(-50%);
  cursor: pointer;
  background: ${({ theme }) => {
    return theme.mode === 'light'
    ? rgba(theme.colors.primary, 0.5)
    : rgba(theme.colors.light, 0.5)
  }};
  color: ${({ theme }) => {
    return theme.mode === 'light'
    ? theme.colors.white
    : theme.colors.secondary
  }};

  &:hover {
    background: ${({ theme }) => {
    return theme.mode === 'light'
    ? theme.colors.primary
    : theme.colors.light
  }};
  }

  ${({ left }) => left && css`
    left: -10px;

    ${MEDIA_BREAKPOINTS.laptop} {
      left: -1rem;
    }
  `}
  ${({ right }) => right && css`
    right: -10px;

    ${MEDIA_BREAKPOINTS.laptop} {
      right: -1rem;
    }
  `}
`

export {
  Wrapper,
  Button
}
