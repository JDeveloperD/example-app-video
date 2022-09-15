import styled, { css } from 'styled-components'

export type SizeAvatar = 'sm' | 'md' | 'lg' | undefined

const getSize = (size: SizeAvatar = 'md') => ({
  sm: css`
    width: 30px;
    height: 30px;
  `,
  md: css`
    width: 50px;
    height: 50px;
  `,
  lg: css`
    width: 75px;
    height: 75px;
  `
}[size])

const Wrapper = styled.div<{size: SizeAvatar}>`
  position: relative;
  ${({ size }) => getSize(size)}
  
  img {
    border-radius: 50%;
  }

  &::before {
    content: '';
    display: block;
    width: 120%;
    height: 120%;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    border-radius: 50%;
    border: 1px solid ${({ theme }) => theme.colors.light};
  }
`

const Verified = styled.span`
  background-color: ${({ theme }) => theme.colors.primary};
  position: absolute;
  bottom: -0.26rem;
  right: -0.26rem;
  width: 1rem;
  height: 1rem;
  border-radius: 50%;
  font-size: 8px;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 2px solid ${({ theme }) => theme.colors.secondary};
`

export {
  Wrapper,
  Verified
}
