import styled from "styled-components"

export const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;

  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_800};
  color: ${({ theme }) => theme.COLORS.GRAY_300};

  padding: 1rem 0;
  margin-bottom: 0.5rem;
  border-radius: 0.625rem;

  > input {
    width: 100%;

    margin-left: 1rem;

    color: ${({ theme }) => theme.COLORS.WHITE};
    background-color: transparent;
    border: none;
  }

  > svg {
    margin-left: 1rem;
    font-size: 1.25rem;

    cursor: pointer;

    &.controlPassword {
      margin-right: 1rem;
    }
  }
`
