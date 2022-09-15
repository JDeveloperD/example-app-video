import { ReactNode } from 'react'
import { Container as BsContainer } from 'react-bootstrap'

type ContainerProps = {
  children: ReactNode
}

const Container = ({ children, ...props }: ContainerProps) => {
  return (
    <BsContainer fluid="xxl" {...props}>
      {children}
    </BsContainer>
  )
}

export default Container
