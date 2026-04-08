import styled from "styled-components"

interface ContainerProps {
  $isNew: boolean
}

export const Container = styled.div<ContainerProps>`
  display: inline-block;
  align-items: center;

  background-color: ${({ theme, $isNew }) =>
    $isNew ? "transparent" : theme.COLORS.BACKGROUND_800};
  color: ${({ theme }) => theme.COLORS.WHITE};

  border: ${({ theme, $isNew }) =>
    $isNew ? `2px dashed ${theme.COLORS.GRAY_300}` : "none"};

  border-radius: 0.625rem;
  padding: 1rem;

  > button {
    border: none;
    background: none;
    color: ${({ theme }) => theme.COLORS.PINK};
    font-size: 1.25rem;
  }

  > input {
    height: 3.5rem;

    padding: 0.75rem;

    background: transparent;
    color: ${({ theme }) => theme.COLORS.WHITE};

    border: none;

    &::placeholder {
      color: ${({ theme }) => theme.COLORS.GRAY_300};
    }
  }
`
