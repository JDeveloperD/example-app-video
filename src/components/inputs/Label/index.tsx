import { Color } from '@styles/styled'
import styled from 'styled-components'

const Label = styled.label<{
  color?: Color
}>`
  color: ${({ theme, color }) => color && theme.colors[color]};
  display: flex;
  align-items: center;
  gap: 0.5rem;
`

export default Label
