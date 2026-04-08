import avatarPlaceholder from "../../assets/avatar_placeholder.svg"

import { Container, Profile } from "./styles"

interface HeaderProps {
  children: React.ReactNode
}

export function Header({ children }: HeaderProps) {
  return (
    <Container>
      <h1>RocketMovies</h1>

      {children}

      <Profile>
        <div>
          <button>João</button>
          <button>sair</button>
        </div>

        <img src={avatarPlaceholder} alt="Imagem de perfil" />
      </Profile>
    </Container>
  )
}
