import styled from 'styled-components'

const Divider = styled.div`
  width: 100%;
  height: 1px;
  background-color: ${({ theme }) => {
    return theme.mode === 'light'
      ? theme.colors.gray
      : theme.colors.gray
  }};
`

export default Divider
