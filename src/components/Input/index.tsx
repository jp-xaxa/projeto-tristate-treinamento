import { useState, useEffect } from "react"

import type { InputHTMLAttributes } from "react"
import type { IconType } from "react-icons/lib"

import { TbEye, TbEyeClosed } from "react-icons/tb"

import { Container } from "./styles"

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  icon?: IconType | null
}

export function Input({ icon: Icon, ...rest }: InputProps) {
  const [controlViewPassword, setControlViewPassword] = useState<boolean>(false)
  const [controlTypeInput, setControlTypeInput] = useState<string>("")

  function handleControlPassword() {
    setControlViewPassword(!controlViewPassword)
  }
  
  useEffect(() => {
    if (controlViewPassword && rest.type === "password") {
      setControlTypeInput("text")
    } else {
      setControlTypeInput(rest.type ?? "text")
    }
  }, [controlTypeInput, rest.type])

  return (
    <Container>
      {Icon && <Icon />}

      <input type={controlTypeInput} {...rest} />

      {rest.type === "password" &&
        (controlViewPassword ? (
          <TbEyeClosed onClick={handleControlPassword} />
        ) : (
          <TbEye onClick={handleControlPassword} />
        ))}
    </Container>
  )
}
