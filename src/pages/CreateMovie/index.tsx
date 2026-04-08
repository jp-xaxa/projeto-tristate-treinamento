import { useState } from "react"
import { useNavigate } from "react-router-dom"

import { FiArrowLeft } from "react-icons/fi"

import { Header } from "../../components/Header"
import { Input } from "../../components/Input"
import { ButtonText } from "../../components/ButtonText"
import { Textarea } from "../../components/Textarea"
import { NoteItem } from "../../components/NoteItem"
import { Button } from "../../components/Button"

import { Container, Content, Section } from "./styles"

export function CreateMovie() {
  const [description, setDescription] = useState<string>("")
  const [newTag, setNewTag] = useState<string>("")

  const navigate = useNavigate()

  function handleBack() {
    navigate(-1)
  }

  return (
    <Container>
      <Header>
        <Input placeholder="Pesquisar pelo título" type="text" />
      </Header>

      <Content>
        <ButtonText title="voltar" icon={FiArrowLeft} onClick={handleBack} />

        <div>
          <h1>Novo filme</h1>

          <div>
            <Input placeholder="Título" type="text" />
            <Input placeholder="Sua nota (de 0 a 5)" type="number" />
          </div>

          <Textarea
            placeholder="Descrição"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />

          <Section>
            <h1>Marcadores</h1>

            <div>
              <NoteItem
                value="Ficção Científica"
                onClick={() => alert("Deletar marcador")}
              />

              <NoteItem
                placeholder="Novo marcador"
                value={newTag}
                onChange={(e) => setNewTag(e.target.value)}
                onClick={() => alert("Adicionar marcador")}
                $isNew
              />
            </div>
          </Section>

          <Button title="Salvar" />
        </div>
      </Content>
    </Container>
  )
}
