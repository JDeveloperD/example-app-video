import { Typography } from '@components'
import Image from 'next/image'
import { useTheme } from 'styled-components'
import { ChatInfo, ChatItemBody, ChatItemHeadDetail, ChatItemPhoto, ChatItemWraper } from './styled'

const ChatItem = () => {
  const { mode } = useTheme()
  return (
    <ChatItemWraper>
      <ChatItemPhoto active={true}>
        <Image
          src='/img/avatar/avatar1.png'
          objectFit='cover'
          layout='fill'
        />
      </ChatItemPhoto>
      <ChatInfo>
        <ChatItemHeadDetail>
          <Typography
            variant='small'
            as='h5'
            color={mode === 'light' ? 'secondary' : 'light'}
            fontWeight={400}>James David Sandoval Bartra Herrera</Typography>
          <Typography variant='small' as='time'>24:32 PM</Typography>
        </ChatItemHeadDetail>
        <ChatItemBody>
          <Typography variant='small'>
            You: lets do this quick
          </Typography>
        </ChatItemBody>
      </ChatInfo>
    </ChatItemWraper>
  )
}

export default ChatItem
