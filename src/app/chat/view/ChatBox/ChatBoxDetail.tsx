import { MessageGroup, MessageGroupWithAvatar } from '../MessageChat'
import { ChatBoxDetailBackground } from './styled'
import { groupMatriz } from '@utils'
import { FC } from 'react'
import { Typography } from '@components'
import { UserId } from '@app/users'

type Message = {
  type: 'TEXT' | 'IMAGE' | 'VIDEO' | 'FILE',
  content: any
  sentAt: Date
  sentBy: UserId
}

type BoxDetailChatProps = {
  type: 'GROUP' | 'PRIVATE'
  messages: Message[]
}

const BoxDetailChat: FC<BoxDetailChatProps> = ({ type, messages }) => {
  const messagesGroupFormat = groupMatriz<Message>(messages, 'sentBy')
  const userLogged = 'user-uuid-1'

  if (messagesGroupFormat.length === 0) {
    return (
      <Typography>Iniciar conversación</Typography>
    )
  }

  if (type === 'GROUP') {
    return (
      <ChatBoxDetailBackground>

      </ChatBoxDetailBackground>
    )
  }

  return (
    <ChatBoxDetailBackground>
      {messagesGroupFormat.map((messages, i) => {
        return (
          <MessageGroup
            key={`msg-item${i}`}
            messages={messages}
            isPrimary={messages[0].sentBy === userLogged}
          />
        )
      })}
      {/*
      <MessageGroup
        userName='Kiguk'
        isPrimary={true}
        messages={[
          {
            type: 'TEXT',
            content: 'Pellentesque in ipsum id orci porta dapibus. Sed porttitor lectus nibh.',
            sentAt: new Date(Date.UTC(2022, 10, 25, 12, 45, 3))
          },
          {
            type: 'IMAGE',
            content: 'https://cdn.pixabay.com/photo/2021/04/18/13/35/flowers-6188414_960_720.jpg',
            sentAt: new Date(Date.UTC(2022, 10, 25, 12, 45, 3))
          },
          {
            type: 'TEXT',
            content: 'Pellentesque in ipsum id orci porta dapibus. Sed porttitor lectus nibh.',
            sentAt: new Date(Date.UTC(2022, 10, 25, 12, 45, 3))
          },
          {
            type: 'TEXT',
            content: 'Pellentesque in ipsum id orci porta dapibus. Sed porttitor lectus nibh.',
            sentAt: new Date(Date.UTC(2022, 10, 25, 12, 45, 3))
          }
        ]}
      />
      <MessageGroupWithAvatar
        className='mb-3'
        userPhoto='/img/avatar/avatar1.png'
        userName='Kiguk'
        messages={[
          {
            type: 'TEXT',
            content: 'Pellentesque in ipsum id orci porta dapibus. Sed porttitor lectus nibh.',
            sentAt: new Date(Date.UTC(2022, 10, 25, 12, 45, 3))
          },
          {
            type: 'TEXT',
            content: 'Pellentesque in ipsum id orci porta dapibus. Sed porttitor lectus nibh.',
            sentAt: new Date(Date.UTC(2022, 10, 25, 12, 45, 3))
          },
          {
            type: 'TEXT',
            content: 'Pellentesque in ipsum id orci porta dapibus. Sed porttitor lectus nibh.',
            sentAt: new Date(Date.UTC(2022, 10, 25, 12, 45, 3))
          },
          {
            type: 'TEXT',
            content: 'Pellentesque in ipsum id orci porta dapibus. Sed porttitor lectus nibh.',
            sentAt: new Date(Date.UTC(2022, 10, 25, 12, 45, 3))
          }
        ]}
      />
      <MessageGroup
        userName='Kiguk'
        isPrimary={true}
        messages={[
          {
            type: 'TEXT',
            content: 'Pellentesque in ipsum id orci porta dapibus. Sed porttitor lectus nibh.',
            sentAt: new Date(Date.UTC(2022, 10, 25, 12, 45, 3))
          },
          {
            type: 'IMAGE',
            content: 'https://cdn.pixabay.com/photo/2021/04/18/13/35/flowers-6188414_960_720.jpg',
            sentAt: new Date(Date.UTC(2022, 10, 25, 12, 45, 3))
          },
          {
            type: 'TEXT',
            content: 'Pellentesque in ipsum id orci porta dapibus. Sed porttitor lectus nibh.',
            sentAt: new Date(Date.UTC(2022, 10, 25, 12, 45, 3))
          },
          {
            type: 'TEXT',
            content: 'Pellentesque in ipsum id orci porta dapibus. Sed porttitor lectus nibh.',
            sentAt: new Date(Date.UTC(2022, 10, 25, 12, 45, 3))
          }
        ]}
      /> */}
    </ChatBoxDetailBackground>
  )
}

export default BoxDetailChat
