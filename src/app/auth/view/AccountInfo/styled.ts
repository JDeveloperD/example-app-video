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
  position: relative;
`

const DropDownContainer = styled.div`
  position: absolute;
  top: 100%;
  right: 0;
  z-index: 2;
  background: ${({ theme }) => theme.colors.light};
  border-radius: 1.5rem;
  min-width: 14rem;
  overflow: hidden;
  box-shadow: rgb(112 144 176 / 18%) 14px 17px 40px 4px;
  transform-origin: top right;
  animation: scale 0.3s;

  @keyframes scale {
    0% {
      transform: scale(0);
    }

    100% {
      transform: scale(1);
    }
  }
`

const Options = styled.div`
  padding: 10px;
  width: 100%;
`

const Option = styled.button`
  border-style: none;
  background-color: transparent;
  display: flex;
  white-space: nowrap;
  padding: 0.4rem 0.85rem;
  text-decoration: none;
  color: ${({ theme }) => theme.colors.textBody};
  font-size: 13px;
`

export {
  AccountWrapper,
  ButtonToggle,
  DropDownContainer,
  Options,
  Option
}
