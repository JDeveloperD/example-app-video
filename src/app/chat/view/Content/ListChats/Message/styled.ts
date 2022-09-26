import styled, { css } from 'styled-components'

const MessageContent = styled.li<{
  isPrimary: boolean
}>`
  display: flex;
  justify-content: space-between;
  margin-bottom: 4px;
  gap: 0.5rem;
  padding: 10px;
  width: fit-content;
  max-width: 400px;

  ${({ isPrimary, theme }) => {
    if (isPrimary) {
      return css`
        margin-left: auto;
        border-radius: 0.75rem 0.75rem 0rem 0.75rem;

      `
    } else {
      return css`
        border-radius: 0.75rem 0.75rem 0.75rem 0rem;
      `
    }
  }}

  background: ${({ isPrimary, theme }) => {
    return isPrimary
    ? theme.colors.primary
    : theme.mode === 'light'
      ? theme.colors.light
      : theme.colors.secondary
  }};
`

export {
  MessageContent
}
