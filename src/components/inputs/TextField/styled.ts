import styled from 'styled-components'

const WrapperField = styled.div``

const WrapperInput = styled.div<{
  error?: boolean
}>`
  position: relative;

  div + input {
    padding-right: 55px;
  }
`

const WrapperIcon = styled.div`
  position: absolute;
  top: 45%;
  right: 0;
  transform: translateY(-50%);
  padding: 0 1rem;
`

export {
  WrapperField,
  WrapperIcon,
  WrapperInput
}
