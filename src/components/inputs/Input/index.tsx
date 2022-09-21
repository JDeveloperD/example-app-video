import styled, { css } from 'styled-components'

const Input = styled.input<{
  invalid?: boolean
}>`
  width: 100%;
  background: transparent;
  border-style: none;
  background: ${({ theme }) => {
    return theme.mode === 'light'
    ? theme.colors.light
    : theme.colors.black
  }};
  border: 2px solid transparent;
  padding: 12px 1rem;
  border-radius: 10px;
  color: ${({ theme }) => theme.colors.textBody};

  &::placeholder {
    color: ${({ theme }) => theme.colors.textBody};
  }

  &:focus {
    border-color: ${({ theme }) => theme.colors.primary};
  }

  ${({ theme, invalid }) => invalid && css`
    border-color: ${theme.colors.danger};
  `}
`

export default Input
