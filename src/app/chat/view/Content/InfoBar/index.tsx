import { Avatar, BsThreeDotsVertical, Button, FiSearch, Typography } from '@components'
import { useTheme } from 'styled-components'
import { Wrapper } from './styled'

const ChatContentInfoBar = () => {
  const { mode } = useTheme()
  return (
    <Wrapper>
      <div className="d-inline-flex gap-2 align-items-center">
        <Avatar size="sm" />
        <div>
          <Typography
            fontWeight={600}
            variant="small"
            color={mode === 'light' ? 'secondary' : 'light'}
          >Design Review Chat</Typography>
          <Typography variant="small" color="gray">5 members</Typography>
        </div>
      </div>
      <div>
        <Button variant="icon" color="gray">
          <FiSearch />
        </Button>
        <Button variant="icon" color="gray">
          <BsThreeDotsVertical />
        </Button>
      </div>
    </Wrapper>
  )
}

export default ChatContentInfoBar
