import styled from 'styled-components'

const CbxWrapper = styled.label`
  user-select: none;
  cursor: pointer;
  padding: 0.5rem 0;
  border-radius: 6px;
  overflow: hidden;
  transition: all 0.2s ease;

  &:not(:last-child) {
    margin-right: 6px;
  }

  &:hover {
    background: rgba(0,119,255,0.06);
  }

  & span {
    float: left;
    vertical-align: middle;
    transform: translate3d(0, 0, 0);
  }

  & span:first-child {
    position: relative;
    width: 18px;
    height: 18px;
    border-radius: 4px;
    transform: scale(1);
    border: 1px solid ${({ theme }) => theme.colors.gray};
    transition: all 0.2s ease;
    box-shadow: 0 1px 1px rgba(0,16,75,0.05);
  }

  & span:first-child svg {
    position: absolute;
    top: 3px;
    left: 2px;
    fill: none;
    stroke: #fff;
    stroke-width: 2;
    stroke-linecap: round;
    stroke-linejoin: round;
    stroke-dasharray: 16px;
    stroke-dashoffset: 16px;
    transition: all 0.3s ease;
    transition-delay: 0.1s;
    transform: translate3d(0, 0, 0);
  }

  & span:last-child {
    padding-left: 8px;
    line-height: 18px;
  }

  &:hover span:first-child {
    border-color: #07f;
  }
`

const InputWrapper = styled.input.attrs({
  type: 'checkbox'
})`
  & {
    position: absolute;
    visibility: hidden;
  }
  &:checked + ${CbxWrapper} span:first-child {
    background: ${({ theme }) => theme.colors.primary};
    border-color: ${({ theme }) => theme.colors.primary};
    animation: wave 0.4s ease;
  }
  &:checked + ${CbxWrapper} span:first-child svg {
    stroke-dashoffset: 0;
  }
`

export {
  CbxWrapper,
  InputWrapper
}
