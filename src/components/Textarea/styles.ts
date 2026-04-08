import styled from "styled-components"

export const Container = styled.textarea`
  width: 100%;
  height: 17.125rem;

  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_800};
  color: ${({ theme }) => theme.COLORS.WHITE};

  border-radius: 0.625rem;
  border: none;
  resize: none;
  padding: 0.75rem;

  &::placeholder {
    color: ${({ theme }) => theme.COLORS.GRAY_300};
  }
`
