import { FLEX_CENTER } from '@styles/mixins'
import { Color } from '@styles/styled'
import { lighten } from 'polished'
import styled from 'styled-components'

const AlertWrapper = styled.div<{
  color?: Color
}>`
  display: flex;
  align-items: center;
  border-radius: 0.5rem;
  background: ${({ theme, color }) => {
    return lighten(0.35, theme.colors[color || 'info'])
  }};
  border: 2px solid ${({ theme, color }) => {
    return theme.colors[color || 'info']
  }};
  
  p {
    width: calc(100% - 80px);
    padding: 0.5rem 1rem 0.5rem 0;
  }
`

const AlertButton = styled.button<{
  color?: Color
}>`
  ${FLEX_CENTER}
  background-color: transparent;
  border: none;
  width: 40px;
  height: 40px;
  color: ${({ theme, color }) => {
    return theme.colors[color || 'info']
  }}
`

const AlertIcon = styled.span<{
  color?: Color
}>`
  ${FLEX_CENTER}
  width: 40px;
  height: 40px;
  color: ${({ theme, color }) => {
    return theme.colors[color || 'info']
  }}
`

export {
  AlertButton,
  AlertIcon,
  AlertWrapper
}
