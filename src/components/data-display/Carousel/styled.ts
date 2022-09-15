import styled, { css } from 'styled-components'

const Wrapper = styled.div`
  position: relative;

  .swiper-pagination-bullet {
    background: transparent;
    border: 1px solid ${({ theme }) => theme.colors.light};
    opacity: 1;
  }

  .swiper-pagination-bullet-active {
    background: ${({ theme }) => theme.colors.primary};
  }
`

const Button = styled.button<{
  left?: boolean
  right?: boolean
}>`
  background: rgba(255, 255, 255, 0.4 );
  border-style: none;
  color: #242730;
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

  &:hover {
    background: white;
  }

  ${({ left }) => left && css`
    left: -10px;
  `}
  ${({ right }) => right && css`
    right: -10px;
  `}
`

export {
  Wrapper,
  Button
}
