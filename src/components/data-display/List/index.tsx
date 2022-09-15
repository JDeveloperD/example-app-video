import styled, { css } from 'styled-components'
import Typography from '../Typography'

const Icon = styled.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0.7rem;
  border-radius: 1rem;
  background-color: rgba(0,0,0,0.25);
  font-size: 1.2rem;
`

const Button = styled.a<{ active?:boolean }>`
  text-decoration: none;
  display: flex;
  align-items: center;
  gap: 1rem;
  color: ${({ theme }) => theme.colors.gray};

  ${({ active, theme }) => active && css`

    ${Typography} {
      font-weight: 600;
      color: white;
    }

    ${Icon} {
      color: white;
      background: ${theme.colors.primary};
    }
  `}
`

const Item = styled.li``

const List = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
`

export default {
  Button,
  List,
  Icon,
  Item
}
