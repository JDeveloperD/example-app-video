import ChatLeateral from '@app/chat/view/Lateral'
import { Col, Container, Row } from '@components'
import AppLayout from '@layouts/AppLayout'
import { FC, ReactNode } from 'react'

type ChatLayoutProps = {
  children: ReactNode
}

const ChatLayout: FC<ChatLayoutProps> = ({ children }) => {
  return (
    <AppLayout>
      <Container>
        <Row>
          <Col lg={4}>
            <ChatLeateral />
          </Col>
          <Col lg={8}>
            {children}
          </Col>
        </Row>
      </Container>
    </AppLayout>
  )
}

export default ChatLayout
