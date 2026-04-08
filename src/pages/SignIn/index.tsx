import { useState } from "react"

import { Link, useNavigate } from "react-router-dom"

import { FiMail, FiLock } from "react-icons/fi"

import { Input } from "../../components/Input"
import { Button } from "../../components/Button"

import { Container, Form, BackgroundImg } from "./styles"

export function SignIn() {
  const [email, setEmail] = useState<string>("")
  const [password, setPassword] = useState<string>("")

  const navigate = useNavigate()

  function handleSignIn() {
    console.log("E-mail: ", email)
    console.log("Senha: ", password)
    navigate("/home")
  }

  return (
    <Container>
      <Form>
        <h1>RocketMoives</h1>

        <p>Aplicação para acompanhar tudo que assistir.</p>

        <h2>Faça o login</h2>

        <Input
          placeholder="E-mail"
          icon={FiMail}
          onChange={(e) => setEmail(e.target.value)}
        />

        <Input
          placeholder="Senha"
          icon={FiLock}
          type="password"
          onChange={(e) => setPassword(e.target.value)}
        />

        <Button title="Entrar" onClick={() => handleSignIn()} />

        <Link to="/register">Criar conta</Link>
      </Form>

      <BackgroundImg />
    </Container>
  )
}
