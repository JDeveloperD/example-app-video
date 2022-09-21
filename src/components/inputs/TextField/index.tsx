import { Typography } from '@components/data-display'
import { FC, InputHTMLAttributes, ReactNode } from 'react'
import Input from '../Input'
import { WrapperField, WrapperIcon, WrapperInput } from './styled'

type TextFieldProps = InputHTMLAttributes<HTMLInputElement> & {
  icon: ReactNode
  className: string
  error?: boolean
  helperText?: string
}

const TextField: FC<TextFieldProps> = ({
  icon,
  className,
  error,
  helperText,
  ...props
}) => {
  return (
    <WrapperField className={className}>
      <WrapperInput>
        <WrapperIcon>
          {icon}
        </WrapperIcon>
        <Input {...props} invalid={error} />
      </WrapperInput>
      {helperText && error && (
        <Typography
          className='mt-2 ps-3'
          color='danger'
          variant='small'>{helperText}</Typography>
      )}
    </WrapperField>
  )
}

export default TextField
