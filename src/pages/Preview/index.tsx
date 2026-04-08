import { useNavigate } from "react-router-dom"

import avatarPlaceholder from "../../assets/avatar_placeholder.svg"

import { FiArrowLeft, FiClock } from "react-icons/fi"
import { FaRegStar, FaStar } from "react-icons/fa"

import { Header } from "../../components/Header"
import { Input } from "../../components/Input"
import { ButtonText } from "../../components/ButtonText"

import { Container, Content, Assessments } from "./styles"

export function Preview() {
  const navigate = useNavigate()

  const start = Array.from({ length: 5 }, (_, index) => {
    if (index < 4) {
      return <FaStar key={index} />
    } else {
      return <FaRegStar key={index} />
    }
  })

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
          <section>
            <h1>Título da Nota Salva</h1>

            <Assessments>{start}</Assessments>
          </section>

          <section>
            <div>
              <img src={avatarPlaceholder} alt="Avatar" />

              <p>João</p>
            </div>

            <div>
              <FiClock />

              <p>10/05/2024 às 08:00</p>
            </div>
          </section>

          <section className="tags">
            <p>Tag 1</p>
            <p>Tag 2</p>
            <p>Tag 3</p>
          </section>

          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quisquam
            nihil ad hic cum obcaecati veritatis quam necessitatibus corrupti.
            Distinctio explicabo, magnam deleniti reiciendis ipsa dignissimos
            optio voluptas cum maiores facere.
            <br />
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quisquam
            nihil ad hic cum obcaecati veritatis quam necessitatibus corrupti.
            Distinctio explicabo, magnam deleniti reiciendis ipsa dignissimos
            optio voluptas cum maiores facere.
            <br />
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quisquam
            nihil ad hic cum obcaecati veritatis quam necessitatibus corrupti.
            Distinctio explicabo, magnam deleniti reiciendis ipsa dignissimos
            optio voluptas cum maiores facere.
            <br />
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quisquam
            nihil ad hic cum obcaecati veritatis quam necessitatibus corrupti.
            Distinctio explicabo, magnam deleniti reiciendis ipsa dignissimos
            optio voluptas cum maiores facere.
            <br />
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quisquam
            nihil ad hic cum obcaecati veritatis quam necessitatibus corrupti.
            Distinctio explicabo, magnam deleniti reiciendis ipsa dignissimos
            optio voluptas cum maiores facere.
            <br />
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quisquam
            nihil ad hic cum obcaecati veritatis quam necessitatibus corrupti.
            Distinctio explicabo, magnam deleniti reiciendis ipsa dignissimos
            optio voluptas cum maiores facere.
            <br />
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quisquam
            nihil ad hic cum obcaecati veritatis quam necessitatibus corrupti.
            Distinctio explicabo, magnam deleniti reiciendis ipsa dignissimos
            optio voluptas cum maiores facere.
          </p>
        </div>
      </Content>
    </Container>
  )
}
