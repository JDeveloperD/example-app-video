import MessageTypeDefault from './Message'
import MessageTypeImage from './Message/Image'
import { List } from './styled'

const ListChats = ({
  messages = []
}) => {
  return (
    <List>
      {messages.length > 0 && messages.map((m, index) => {
        if (m.type === 'IMAGE') {
          return (
            <MessageTypeImage
              key={`messa-1-${index}`}
              src={m.src}
              text={m.messageText}
              isMessageFromTheLoggedInUser={m.sentBy === 'user-uuid-1'}
            />
          )
        }

        return (
          <MessageTypeDefault
            key={`messa-1-${index}`}
            text={m.messageText}
            isMessageFromTheLoggedInUser={m.sentBy === 'user-uuid-1'}
          />
        )
      })}
    </List>
  )
}

export default ListChats
