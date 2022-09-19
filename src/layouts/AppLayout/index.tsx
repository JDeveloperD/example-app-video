import { FC, ReactNode } from 'react'
import { Col, Container, Row } from '@components'
import AppBar from './AppBar'
import AppSidebar from './AppSidebar'
import { useToggle } from '@hooks'

const AppLayout: FC<{
  children: ReactNode
}> = ({ children }) => {
  const [openSidebar, toggleOpensidebar] = useToggle()
  return (
    <>
      <AppBar onClickButtonSidebar={toggleOpensidebar} />
      <main>
        <Container>
          <Row>
            <Col
              md={3}
              xl={2}
              className={openSidebar ? '' : 'w-0 p-0'}
            >
              <AppSidebar toggleSidebar={openSidebar} />
            </Col>
            <Col
              md={openSidebar ? 9 : 12 }
              xl={openSidebar ? 10 : 12 }
            >
              {children}
            </Col>
          </Row>
        </Container>
      </main>
    </>
  )
}

export default AppLayout
