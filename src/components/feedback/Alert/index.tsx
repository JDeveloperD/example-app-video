import { Typography } from '@components/data-display'
import { BiErrorAlt, IoMdClose } from '@components/icons'
import { Color } from '@styles/styled'
import { AlertButton, AlertIcon, AlertWrapper } from './styled'

type AlertProps = {
  color?: Color
  className?: string
  message: string
  closeFn: () => void
}

const Alert = ({ color, message, closeFn, className }: AlertProps) => {
  return (
    <AlertWrapper color={color} className={className}>
      <AlertIcon color={color}>
        <BiErrorAlt />
      </AlertIcon>
      <Typography variant='small' color={color}>{message}</Typography>
      <AlertButton color={color} onClick={closeFn}>
        <IoMdClose />
      </AlertButton>
    </AlertWrapper>
  )
}

export default Alert
