import styled from 'styled-components'

const SendContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  border-radius: 1rem;
  padding: 0.5rem;
  background: ${({ theme }) => {
    return theme.mode === 'light'
    ? theme.colors.light
    : theme.colors.secondary
  }};
`

const TextAreaController = styled.textarea`
  resize: none;
  width: 100%;
  background: transparent;
  border: none;
  color: ${({ theme }) => {
    return theme.mode === 'light'
    ? theme.colors.secondary
    : theme.colors.light
  }};
`

export {
  SendContainer,
  TextAreaController
}
