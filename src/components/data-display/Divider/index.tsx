import { darken } from 'polished'
import styled from 'styled-components'

const Divider = styled.div`
  width: 100%;
  height: 1px;
  background-color: ${({ theme }) => {
    return theme.mode === 'light'
      ? darken(0.1, theme.colors.light)
      : theme.colors.gray
  }};
`

export default Divider
