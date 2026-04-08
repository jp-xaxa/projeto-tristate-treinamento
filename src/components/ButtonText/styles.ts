import styled from "styled-components"

export const Container = styled.button`
  display: flex;
  align-items: center;

  background-color: transparent;
  border: none;

  font-size: 1rem;
  color: ${({ theme }) => theme.COLORS.PINK};

  > svg {
    margin-right: 0.875rem;
    color: ${({ theme }) => theme.COLORS.PINK};
  }
`
