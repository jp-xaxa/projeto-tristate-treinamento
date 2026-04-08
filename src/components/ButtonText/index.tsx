import type { ButtonHTMLAttributes } from "react"
import type { IconType } from "react-icons"

import { Container } from "./styles"

interface ButtonTextProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  title: string
  icon?: IconType
}

export function ButtonText({ title, icon: Icon, ...rest }: ButtonTextProps) {
  return (
    <Container {...rest}>
      {Icon && <Icon />}
      {title}
    </Container>
  )
}
