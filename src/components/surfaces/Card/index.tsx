import { Color } from '@styles/styled'
import styled from 'styled-components'

const Card = styled.div<{ color?: Color }>`
  border-radius: 0.5rem;
  padding: 1rem;
  width: 100%;
  background: ${({ theme, color }) => color && theme.colors[color]}
`

const CardHeader = styled.header``

const CardFooter = styled.footer``

export {
  Card,
  CardHeader,
  CardFooter
}
