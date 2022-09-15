import { FC, ReactNode } from 'react'
import { Col, Container, Row } from '@components'
import AppBar from './AppBar'
import AppSidebar from './AppSidebar'

const AppLayout: FC<{
  children: ReactNode
}> = ({ children }) => {
  return (
    <>
      <AppBar />
      <main>
        <Container>
          <Row>
            <Col md={3} xl={2}>
              <AppSidebar />
            </Col>
            <Col md={9} xl={10}>
              {children}
            </Col>
          </Row>
        </Container>
      </main>
    </>
  )
}

export default AppLayout
