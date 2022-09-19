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
import { AccountInfo } from '@app/users'
import { HeadWrapper } from './styled'
import { useTheme } from 'styled-components'

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
              <Col xs={6} md={12}>
                <Typography
                  color={mode === 'light' ? 'primary' : 'light' }
                  variant="lead"
                  fontWeight={600}>skateboard
                </Typography>
              </Col>
              <Col xs={6} className='text-end d-md-none'>
                <AccountInfo />
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
                  placeholder='Buscar'
                  iconButton={<FiSearch/>}
                />
              </Col>
            </Row>
          </Col>
          <Col className='d-none d-md-block text-end'>
            <AccountInfo />
          </Col>
        </Row>
      </Container>
    </HeadWrapper>
  )
}

export default AppBar
