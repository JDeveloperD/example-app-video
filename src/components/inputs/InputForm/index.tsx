import { FC, ReactNode } from 'react'
import { Button, Form, Input } from './styled'

type InputFormProps = {
  iconButton: ReactNode,
  inputType?: string,
  onSubmit?: any,
  placeholder?: string,
  className?: string
}

const InputForm: FC<InputFormProps> = ({
  iconButton,
  inputType = 'text',
  onSubmit,
  placeholder,
  className,
  ...props
}) => {
  return (
    <Form onSubmit={onSubmit} className={className}>
      <Input type={inputType} placeholder={placeholder} />
      <Button>
        {iconButton}
      </Button>
    </Form>
  )
}

export default InputForm
