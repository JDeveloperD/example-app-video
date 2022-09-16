import styled from 'styled-components'

const SwitchWrapper = styled.div`
  position: relative;
`
const CheckBoxLabel = styled.label`
  position: absolute;
  top: 0;
  left: 0;
  width: 42px;
  height: 24px;
  border-radius: 15px;
  background: ${({ theme }) => theme.colors.gray};
  cursor: pointer;

  &::after {
    content: "";
    display: block;
    border-radius: 50%;
    width: 20px;
    height: 20px;
    margin: 2px;
    background: ${({ theme }) => theme.colors.white};
    transition: 0.2s;
  }
`
const CheckBox = styled.input.attrs({
  type: 'checkbox'
})`
  opacity: 0;
  z-index: 1;
  border-radius: 15px;
  width: 42px;
  height: 24px;

  &:checked + ${CheckBoxLabel} {
    background: ${({ theme }) => theme.colors.primary};

    &::after {
      content: "";
      display: block;
      border-radius: 50%;
      width: 20px;
      height: 20px;
      margin-left: 21px;
      transition: 0.2s;
    }
  }
`

export {
  SwitchWrapper,
  CheckBox,
  CheckBoxLabel
}
