import { ReactNode } from 'react'
import { Container } from './styles'

interface TemplateProps {
  children?: ReactNode
}

export const TodoTemplate = ({ children }: TemplateProps) => {
  return <Container>{children}</Container>
}
