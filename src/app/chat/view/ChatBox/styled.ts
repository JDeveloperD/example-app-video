import styled from 'styled-components'

const ChatBoxHeaderBackground = styled.div`
  background: ${({ theme }) => {
    return theme.mode === 'light'
    ? theme.colors.light
    : theme.colors.secondary
  }};
  padding: 0.5rem 1rem;
  border-radius: 1rem;
  display: flex;
  justify-content: space-between;
`

const ChatBoxInputPanelBackground = styled.div`
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

const ChatBoxDetailBackground = styled.div`
  height: 100%;
  overflow: auto;
  padding-left: 0.25rem;
  padding-right: 0.25rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`

export {
  ChatBoxHeaderBackground,
  ChatBoxInputPanelBackground,
  ChatBoxDetailBackground
}
