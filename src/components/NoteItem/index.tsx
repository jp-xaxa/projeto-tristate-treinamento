import type { InputHTMLAttributes } from "react"

import { FiPlus, FiX } from "react-icons/fi"

import { Container } from "./styles"

interface NoteItemProps extends InputHTMLAttributes<HTMLInputElement> {
  $isNew?: boolean
  value: string
  onClick: () => void
}

export function NoteItem({
  $isNew = false,
  value,
  onClick,
  ...rest
}: NoteItemProps) {
  return (
    <Container $isNew={$isNew}>
      <input type="text" value={value} readOnly={!$isNew} {...rest} />

      <button onClick={onClick} type="button">
        {$isNew ? <FiPlus /> : <FiX />}
      </button>
    </Container>
  )
}
