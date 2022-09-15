import { rgba } from 'polished'
import styled from 'styled-components'

const Form = styled.form`
  position: relative;
  width: 100%;
`

const Input = styled.input`
  width: 100%;
  background: transparent;
  border-style: none;
  background: ${rgba(64, 72, 82, 0.5)};
  padding: 12px 1rem;
  border-radius: 10px;
  color: white;

  &[type="search"] {
    &:not(:placeholder-shown) + button {
      display: none;
    }
  }
`

const Button = styled.button.attrs({
  type: 'submit'
})`
  position: absolute;
  right: 0;
  bottom: 50%;
  transform: translateY(50%);
  padding: 0.5rem 1rem;
  border-style: none;
  background: transparent;
  color: #808191;
`

export {
  Form,
  Input,
  Button
}
