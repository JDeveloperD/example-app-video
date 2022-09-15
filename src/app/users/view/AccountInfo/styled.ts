import { RESET_BUTTON } from '@styles/mixins'
import styled from 'styled-components'

const AccountWrapper = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 1rem;
`

const ButtonToggle = styled.button`
  ${RESET_BUTTON}
  padding-left: 0;
  padding-right: 0;
`

export {
  AccountWrapper,
  ButtonToggle
}
