import {
  Avatar,
  BiChevronDown,
  Typography,
  BsBellFill,
  Badge
} from '@components'
import { AccountWrapper, ButtonToggle } from './styled'

const AccountInfo = () => {
  return (
    <AccountWrapper>
      <ButtonToggle>
        <Avatar size='sm' />
        <Typography variant="small">Thomas</Typography>
        <div>
          <BiChevronDown />
        </div>
      </ButtonToggle>

      <Badge
        color="danger"
        variant='dot'
        as='button'
        textColor="gray"
        >
          <BsBellFill />
      </Badge>
    </AccountWrapper>
  )
}

export default AccountInfo
