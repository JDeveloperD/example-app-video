import { Typography } from '@components/data-display'
import Input from '../Input'
import { WrapperField, WrapperIcon, WrapperInput } from './styled'
import React, { FC, forwardRef, InputHTMLAttributes, ReactNode } from 'react'

type TextFieldProps = InputHTMLAttributes<HTMLInputElement> & {
  icon: ReactNode
  className: string
  error?: boolean
  helperText?: string
}

const TextField: FC<TextFieldProps> = forwardRef(
  function TextField ({
    icon,
    className,
    error,
    helperText,
    ...props
  }: TextFieldProps, ref) {
    return (
      <WrapperField className={className}>
       <WrapperInput>
         <WrapperIcon>
           {icon}
         </WrapperIcon>
         <Input {...props} invalid={error} ref={ref} />
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
)

export default TextField
