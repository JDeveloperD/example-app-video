import styled, { css } from 'styled-components'
import Typography from '../Typography'

const Icon = styled.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0.5rem;
  border-radius: 0.75rem;
  font-size: 1.2rem;
`

const Button = styled.a<{ active?:boolean }>`
  text-decoration: none;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: ${({ theme }) => theme.colors.gray};

  &:hover {
    color: ${({ theme }) => {
      return theme.mode === 'light'
        ? theme.colors.primary
        : theme.colors.light
      }
    };
  }

  ${({ active, theme }) => active && css`

    ${Typography} {
      color: ${({ theme }) => {
        return theme.mode === 'light'
          ? theme.colors.primary
          : theme.colors.light
        }
      };
      font-weight: 600;
    }

    ${Icon} {
      color: ${({ theme }) => theme.colors.light};
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
