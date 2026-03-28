import { useState } from "react"

import { Link } from "react-router-dom"

import { FiMail, FiLock, FiUser } from "react-icons/fi"
import { LuArrowLeft } from "react-icons/lu"

import { Input } from "../../components/Input"
import { Button } from "../../components/Button"

import { Container, Form, BackgroundImg } from "./styles"

export function SignUp() {
  const [name, setName] = useState<string>("")
  const [email, setEmail] = useState<string>("")
  const [password, setPassword] = useState<string>("")

  function handleSignUp() {
    console.log("Nome : ", name)
    console.log("E-mail: ", email)
    console.log("Senha: ", password)
  }
  return (
    <Container>
      <Form>
        <h1>RocketMoives</h1>

        <p>Aplicação para acompanhar tudo que assistir.</p>

        <h2>Crie sua conta</h2>

        <Input
          placeholder="Nome"
          icon={FiUser}
          onChange={(e) => setName(e.target.value)}
        />

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

        <Button title="Cadastrar" onClick={() => handleSignUp()} />

        <Link to="/">
          <LuArrowLeft /> Voltar para o login
        </Link>
      </Form>

      <BackgroundImg />
    </Container>
  )
}
