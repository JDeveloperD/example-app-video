import { Fragment } from 'react'
import { BsGithub, Button, Card, Col, Divider, FcGoogle, Row, Typography } from '@components'
import { AuthLayout } from '@layouts'
import { NextPageWithLayout } from '@pages/_app'
import { AuthFormSignIn } from '@app/auth/view'
import { useTheme } from 'styled-components'

const SignInPage: NextPageWithLayout = () => {
  const { mode } = useTheme()

  return (
    <Fragment>
      <Card>
        <div className="py-4">
          <Typography
            variant='small'
            fontWeight={600}
            className='text-center mb-3'
            color={mode === 'light' ? 'textBody' : 'light'}
          >
            Iniciar sesión con
          </Typography>
          <div className='d-flex gap-3 justify-content-center'>
            <Button variant='contained' color='light'>
              <BsGithub />
              <Typography color='black' variant='small' fontWeight={500}>GITHUB</Typography>
            </Button>
            <Button variant='contained' color='light'>
              <FcGoogle />
              <Typography color='black' variant='small' fontWeight={500}>GOOGLE</Typography>
            </Button>
          </div>
        </div>
        <Divider />
        <div className="py-4">
          <Typography
            variant='small'
            fontWeight={600}
            className='text-center mb-3'
            color={mode === 'light' ? 'textBody' : 'light'}
          >
            O iniciar sesión con credenciales
          </Typography>
          <AuthFormSignIn />
        </div>
      </Card>
      <div className="w-100 px-3">
        <Row>
          <Col xs={7}>
            <Typography
              as='a'
              variant='small'
              color={mode === 'light' ? 'primary' : 'light'}
              fontWeight={300}
            >
              Recuperar contraseña?
            </Typography>
          </Col>
          <Col xs={5}
            className='text-end'
          >
            <Typography
              as='a'
              variant='small'
              color={mode === 'light' ? 'primary' : 'light'}
              fontWeight={300}
            >
              Crear cuenta
            </Typography>
          </Col>
        </Row>
      </div>
    </Fragment>
  )
}

SignInPage.layout = AuthLayout

export default SignInPage
