import { FC, ReactNode } from 'react'
import {
  AuthWrapper,
  LeftSection,
  RightSection
} from './styled'

const AuthLayout: FC<{
  children: ReactNode
}> = ({ children }) => {
  return (
    <AuthWrapper>
      <LeftSection>
        <div>{children}</div>
      </LeftSection>
      <RightSection>

      </RightSection>
    </AuthWrapper>
  )
}

export default AuthLayout
