import ChatContentInfoBar from './InfoBar'
import ListChats from './ListChats'
import ChatContentSendBar from './SendBar'
import { Content, Wrapper } from './styled'

const ChatContent = ({
  messages
}) => {
  console.log(messages)
  return (
    <Wrapper>
      <ChatContentInfoBar />
        <Content>
          <ListChats messages={messages} />
        </Content>
      <ChatContentSendBar />
    </Wrapper>
  )
}

export default ChatContent
