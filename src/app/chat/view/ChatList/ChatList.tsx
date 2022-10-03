import ChatItem from './ChatItem'
import * as ChatStyled from './styled'
import { Typography } from '@components'
import { useEffect, useState } from 'react'
import { getChatsOfUser } from '@app/chat/data'

const ChatList = () => {
  const [chats, setChats] = useState<Array<any>>([])

  useEffect(() => {
    getChatsOfUser('user-uuid-1')
      .then((chats) => setChats(chats))
  }, [])

  if (chats.length === 0) {
    return (
      <div className="d-flex align-items-center">
        <Typography>Iniciar una conversación</Typography>
      </div>
    )
  }

  return (
    <ChatStyled.List>
      {/* {chats.map(chat => {
        return (
          <ChatStyled.Item key={chat.id}>
            <ChatItem
              isPrivateChat={chat.type === 'PRIVATE'}
              chat={chat}
              onClick={() => {}}
              isActive={false}
            />
          </ChatStyled.Item>
        )
      })} */}
    </ChatStyled.List>
  )
}

export default ChatList
