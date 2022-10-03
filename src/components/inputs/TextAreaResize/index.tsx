import { ChangeEventHandler, FC, TextareaHTMLAttributes, useEffect, useRef } from 'react'
import styled from 'styled-components'

const TextAreaController = styled.textarea`
  resize: none;
  width: 100%;
  background: transparent;
  border: none;
  color: ${({ theme }) => {
    return theme.mode === 'light'
    ? theme.colors.secondary
    : theme.colors.light
  }};
`

type TextAreaReziseProps = TextareaHTMLAttributes<HTMLTextAreaElement> & {
}

const TextAreaRezise: FC<TextAreaReziseProps> = ({ onChange, ...props }) => {
  const taRef = useRef<HTMLTextAreaElement>(null)

  const calculateAutosize = () => {
    if (taRef.current) {
      taRef.current.style.height = 'auto'

      const scHeight = taRef.current.scrollHeight
      taRef.current.style.height = `${scHeight}px`
    }
  }

  const handleOnChange: ChangeEventHandler<HTMLTextAreaElement> | undefined = (e) => {
    calculateAutosize()
    if (onChange) onChange(e)
  }

  useEffect(() => {
    calculateAutosize()
  }, [])

  return (
    <TextAreaController
      ref= {taRef}
      onChange={handleOnChange}
      {...props}
    />
  )
}

export default TextAreaRezise
