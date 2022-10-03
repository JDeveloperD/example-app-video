import Avatar from '@components/data-display/Avatar'
import { FC } from 'react'
import MessageChatGroup from './MessageGroup'
import { MessageListWithUser } from './styled'

type MessageGroupWithAvatarProps = {
  className?: string
  userPhoto: string
  userName: string
  messages: {
    type: 'TEXT' | 'IMAGE' | 'VIDEO' | 'FILE',
    content: string | any
    sentAt: Date
  }[]
}

const MessageGroupWithAvatar: FC<MessageGroupWithAvatarProps> = ({
  className,
  userPhoto,
  userName,
  messages = []
}) => {
  if (messages.length === 0) {
    return null
  }

  return (
    <MessageListWithUser className={className}>
      <Avatar
        size='sm'
        src={userPhoto}
      />
      <MessageChatGroup
        userName={userName}
        messages={messages}
        isPrimary={false}
      />
    </MessageListWithUser>
  )
}

export default MessageGroupWithAvatar
