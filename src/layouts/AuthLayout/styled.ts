import styled from 'styled-components'

const AuthWrapper = styled.div`
  background-image: url('/img/register_bg_2.png');
  background-repeat: no-repeat;
  background-size: contain;
  width: 100%;
  min-height: 100vh;
`

const AuthHeader = styled.header`
  padding: 1rem 0;
`

const AuthFooter = styled.footer`
  width: 100%;
  padding: 1rem 0;
`

const AuthContent = styled.main`
  width: 100%;
  min-height: calc(100vh - 180px);
  display: flex;
  flex-direction: column;
  justify-content: center;
`

export {
  AuthHeader,
  AuthWrapper,
  AuthFooter,
  AuthContent
}
