import { getMessagesOfChat } from '@app/chat/data/getMessagesOfChat'
import { ChatBox, ChatLateral } from '@app/chat/view'
import { Col, Container, Row } from '@components'
import AppLayout from '@layouts/AppLayout'
import { MEDIA_BREAKPOINTS } from '@styles/constants'
import { FC, ReactNode, useEffect, useState } from 'react'
import styled from 'styled-components'

const ChatWrapper = styled(Row)`
  height: calc(100vh - 155px);

  ${MEDIA_BREAKPOINTS.tablet} {
    height: calc(100vh - 90px);
  }
`

type ChatLayoutProps = {
  children: ReactNode
}

const ChatLayout: FC<ChatLayoutProps> = ({ children }) => {
  const [messages, setMessages] = useState([])

  useEffect(() => {
    getMessagesOfChat('group-uuid-2')
      .then(messages => setMessages(messages))
  }, [])

  return (
    <AppLayout>
      <Container className='px-0'>
        <ChatWrapper>
          <Col xs={12} md={5} lg={4} xxl={3} className='h-100'>
            <ChatLateral className='h-100' />
          </Col>
          <Col xs={12} md={7} lg={8} xxl={9} className='h-100'>
            <ChatBox />
          </Col>
        </ChatWrapper>
      </Container>
    </AppLayout>
  )
}

export default ChatLayout
