import type { HTMLAttributes } from "react"

import { FaRegStar, FaStar } from "react-icons/fa"

import { Container, Assessments, Tags } from "./styles"

interface NoteProps extends HTMLAttributes<HTMLDivElement> {
  title: string
  rating: number
  description: string
  tags: Array<{
    id: number
    name: string
  }>
}

export function Note({ title, rating, description, tags, ...rest }: NoteProps) {
  const start = Array.from({ length: 5 }, (_, index) => {
    if (index < rating) {
      return <FaStar key={index} />
    } else {
      return <FaRegStar key={index} />
    }
  })

  return (
    <Container {...rest}>
      <h1>{title}</h1>

      <Assessments>{start}</Assessments>

      <p>{description}</p>

      <footer>
        {tags.map((tag) => (
          <Tags key={tag.id}>{tag.name}</Tags>
        ))}
      </footer>
    </Container>
  )
}
