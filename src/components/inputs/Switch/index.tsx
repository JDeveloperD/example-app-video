import { useId } from 'react'
import { SwitchWrapper, CheckBox, CheckBoxLabel } from './styled'

const Switch = ({ ...props }) => {
  const id = useId()

  return (
    <SwitchWrapper>
      <CheckBox id={id} {...props} />
      <CheckBoxLabel htmlFor={id} />
    </SwitchWrapper>
  )
}

export default Switch
