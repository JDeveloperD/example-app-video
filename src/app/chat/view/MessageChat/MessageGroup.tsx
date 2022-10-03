import { FC } from 'react'
import MessageText from './MessageText'
import { MessagesList } from './styled'
import MessageImage from './MessageImage'
import { UserId } from '@app/users'

type MessageGroupProps = {
  className?: string
  userName?: string
  isPrimary: boolean
  messages: {
    type: 'TEXT' | 'IMAGE' | 'VIDEO' | 'FILE',
    content: string | any
    sentAt: Date
    sentBy: UserId
  }[]
}

const MessageGroup: FC<MessageGroupProps> = ({
  className,
  userName,
  isPrimary,
  messages
}) => {
  if (messages.length === 0) {
    return null
  }

  return (
    <MessagesList isPrimary={isPrimary} className={className}>
      {messages.map((message, i) => {
        if (message.type === 'IMAGE') {
          return (
            <MessageImage
              key={`msg-chat-${i}`}
              date={new Date(Date.UTC(2022, 10, 25, 12, 45, 3))}
              isPrimary={isPrimary}
              src={message.content}
            />
          )
        }

        return (
          <MessageText
            key={`msg-chat-${i}`}
            sentByName={i === 0 ? userName : undefined}
            date={message.sentAt}
            text={message.content}
            isPrimary={isPrimary}
          />
        )
      })}
    </MessagesList>
  )
}

export default MessageGroup
