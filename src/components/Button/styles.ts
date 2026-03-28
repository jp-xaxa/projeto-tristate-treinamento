import styled from "styled-components"

export const Container = styled.button`
  width: 100%;
  height: 3.5rem;

  background-color: ${({ theme }) => theme.COLORS.PINK};
  color: ${({ theme }) => theme.COLORS.WHITE};

  border: none;
  border-radius: 0.625rem;
  padding: 0 1rem;
  font-size: 1rem;
  font-weight: 700;
  margin-top: 1rem;

  display: flex;
  align-items: center;
  justify-content: center;

  &:disabled {
    opacity: 0.5;
  }
`
