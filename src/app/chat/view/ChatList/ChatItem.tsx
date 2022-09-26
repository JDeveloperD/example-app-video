import { BsCheck2All, Typography } from '@components'
import { formatToTime } from '@utils'
import Image from 'next/image'
import { FC } from 'react'
import { useTheme } from 'styled-components'
import { ChatInfo, ChatItemBody, ChatItemHeadDetail, ChatItemPhoto, ChatItemWraper, CheckValidation } from './styled'

type ChatItemProps = {
  isPrivateChat: boolean
  chat: object
  onClick: () => void
  isActive: boolean
}

const ChatItem: FC<ChatItemProps> = ({
  isPrivateChat,
  chat,
  onClick,
  isActive
}) => {
  const { mode } = useTheme()
  const messageIsCurrentUser = chat.recentMessage.sentBy === 'user-uuid-1'
  const recentMessageIsReaded = messageIsCurrentUser && chat.recentMessage.readBy.filter(u => u.userId !== 'user-uuid-1').length > 0

  const user = chat.members.filter((m: any) => m.id !== 'user-uuid-1')[0]

  const photo = isPrivateChat && user ? user.avatar : chat.figure

  const title = isPrivateChat && user ? user.nickname : chat.name

  return (
    <ChatItemWraper
      active={isActive}
      onClick={onClick}
    >
      <ChatItemPhoto active={true}>
        <Image
          src={photo || '/img/avatar/avatar1.png'}
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
            fontWeight={400}>{title}</Typography>
          <Typography variant='small' as='time'>{formatToTime(chat.recentMessage.sentAt)}</Typography>
        </ChatItemHeadDetail>
        <ChatItemBody>
          {messageIsCurrentUser && (
            <CheckValidation isCheck={recentMessageIsReaded}>
              <BsCheck2All />
            </CheckValidation>
          )}
          <Typography variant='small' className='text-nowrap text-truncate'>
            {!messageIsCurrentUser && (
              'You: '
            )}
            {chat.recentMessage.messageText}
          </Typography>
        </ChatItemBody>
      </ChatInfo>
    </ChatItemWraper>
  )
}

export default ChatItem
