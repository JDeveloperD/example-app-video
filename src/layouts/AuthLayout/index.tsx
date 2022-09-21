import { BsGithub, Col, Container, Divider, Row, Typography } from '@components'
import { AuthFooter, AuthHeader, AuthWrapper, AuthContent } from './styled'
import { FC, ReactNode } from 'react'
import { useTheme } from 'styled-components'
import { SwitchTheme } from '@styles'

const AuthLayout: FC<{
  children: ReactNode
}> = ({ children }) => {
  const { mode } = useTheme()

  return (
    <AuthWrapper>
      <Container>
        <AuthHeader>
          <Row>
            <Col>
              <Typography
                color={mode === 'light' ? 'primary' : 'light' }
                variant="lead"
                fontWeight={600}>skateboard
              </Typography>
            </Col>
            <Col className='text-end'>
              <SwitchTheme />
            </Col>
          </Row>
        </AuthHeader>
        <AuthContent>
          {children}
        </AuthContent>
        <Divider />
        <AuthFooter>
          <Row className='g-2'>
            <Col xs={12} className='text-center'>
              <Typography variant='small' as='span'>Copyright &copy; {new Date().getFullYear()} </Typography>
              <Typography
                variant='small'
                fontWeight={500}
                color={mode === 'light' ? 'primary' : 'light'}
                as='span'
              > Skateboard
              </Typography>
            </Col>
            <Col xs={12} className='text-center'>
              <div className="d-flex justify-content-center gap-4">
                <Typography
                  variant='small'
                  fontWeight={500}
                  color={mode === 'light' ? 'secondary' : 'light'}
                  as='a'
                  target='_blank'
                  href='https://github.com/JDeveloperD'
                >
                  Sobre mí
                </Typography>
                <Typography
                  variant='small'
                  fontWeight={500}
                  color={mode === 'light' ? 'secondary' : 'light'}
                  as='a'
                  target='_blank'
                  href='https://github.com/JDeveloperD'
                >
                  <BsGithub /> JDeveloperD
                </Typography>
              </div>
            </Col>
          </Row>
        </AuthFooter>
      </Container>
    </AuthWrapper>
  )
}

export default AuthLayout
