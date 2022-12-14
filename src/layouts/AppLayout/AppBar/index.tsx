import {
  Typography,
  InputForm,
  FiSearch,
  Container,
  FaBars,
  Row,
  Col,
  Button
} from '@components'
import { HeadWrapper } from './styled'
import { useTheme } from 'styled-components'
import { AuthAccountInfo } from '@app/auth/view'

type AppBarProps = {
  onClickButtonSidebar: () => void
}

const AppBar = ({ onClickButtonSidebar }: AppBarProps) => {
  const { mode } = useTheme()

  return (
    <HeadWrapper>
      <Container>
        <Row className="align-items-center g-3">
          <Col xs={12} md={3} xl={2}>
            <Row className='justify-content-between align-items-center'>
              <Col xs={4} md={12}>
                <Typography
                  color={mode === 'light' ? 'primary' : 'light' }
                  variant="lead"
                  fontWeight={600}>skateboard
                </Typography>
              </Col>
              <Col xs={8} className='text-end d-md-none'>
                <AuthAccountInfo />
              </Col>
            </Row>
          </Col>
          <Col xs={12} md={6} xl={7}>
            <Row className='align-items-center'>
              <Col xs={2} lg={1}>
                <Button
                  variant='icon'
                  color={mode === 'light' ? 'primary' : 'light' }
                  onClick={onClickButtonSidebar}>
                  <FaBars />
                </Button>
              </Col>
              <Col>
                <InputForm
                  inputType='text'
                  onSubmit={() => console.log('SUMIT')}
                  placeholder='Buscar videos...'
                  iconButton={<FiSearch/>}
                />
              </Col>
            </Row>
          </Col>
          <Col className='d-none d-md-block text-end'>
            <AuthAccountInfo />
          </Col>
        </Row>
      </Container>
    </HeadWrapper>
  )
}

export default AppBar
