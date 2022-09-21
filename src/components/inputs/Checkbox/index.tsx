import { FC } from 'react'
import { CbxWrapper, InputWrapper } from './styled'

type CheckboxProps = {
  id: string
  label?: string
  name?: string
  className?: string
}

const Checkbox: FC<CheckboxProps> = ({ id, label, name, className, ...props }) => {
  return (
    <div className={className}>
      <InputWrapper id={id} name={name} {...props} />
      <CbxWrapper htmlFor={id}>
        <span>
          <svg width="12px" height="10px" viewBox="0 0 12 10">
            <polyline points="1.5 6 4.5 9 10.5 1"></polyline>
          </svg>
        </span>
        {label && (<span>{label}</span>)}
      </CbxWrapper>
    </div>
  )
}

export default Checkbox
