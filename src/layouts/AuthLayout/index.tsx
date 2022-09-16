import { FC, ReactNode } from 'react'
// import { Col, Container, Row } from '@components'

const AuthLayout: FC<{
  children: ReactNode
}> = ({ children }) => {
  return (
    <>
      {children}
    </>
  )
}

export default AuthLayout
