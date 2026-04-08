import { useNavigate } from "react-router-dom"

import { IoAdd } from "react-icons/io5"

import { Header } from "../../components/Header"
import { Input } from "../../components/Input"
import { Button } from "../../components/Button"
import { Note } from "../../components/Note"

import { Container, Content } from "./styles"

export function Home() {
  const navigate = useNavigate()

  function handleAddMovie() {
    navigate("/create-movie")
  }

  return (
    <Container>
      <Header>
        <Input placeholder="Pesquisar pelo título" type="text" />
      </Header>

      <Content>
        <div>
          <h1>Meus filmes</h1>

          <Button
            title="Adicionar filme"
            icon={IoAdd}
            className="add-movie"
            onClick={handleAddMovie}
          />
        </div>

        <section>
          <Note
            title="O Poderoso Chefão"
            rating={1}
            description="Um drama crime americano de 1972 dirigido por Francis Ford Coppola."
            tags={[
              { id: 1, name: "Drama" },
              { id: 2, name: "Crime" },
            ]}
            onClick={() => navigate("/preview")}
          />

          <Note
            title="O Poderoso Chefão"
            rating={4}
            description="Um drama crime americano de 1972 dirigido por Francis Ford Coppola."
            tags={[
              { id: 1, name: "Drama" },
              { id: 2, name: "Crime" },
            ]}
            onClick={() => navigate("/preview")}
          />
        </section>
      </Content>
    </Container>
  )
}
