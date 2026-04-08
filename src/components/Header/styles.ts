import styled from "styled-components"

export const Container = styled.header`
  grid-area: "header";

  width: 100%;
  height: 7.25rem;

  padding: 1.5rem 7.75rem;

  display: flex;
  justify-content: center;
  align-items: center;
  gap: 4rem;

  border-bottom: 1px solid ${({ theme }) => theme.COLORS.BACKGROUND_700};

  > h1 {
    font-size: 1.5rem;
    color: ${({ theme }) => theme.COLORS.PINK};
  }
`

export const Profile = styled.div`
  display: flex;
  align-items: center;
  gap: 0.625rem;

  > div {
    display: flex;
    flex-direction: column;

    > button {
      background-color: transparent;
      border: none;

      font-size: 0.875rem;
      cursor: pointer;

      &:nth-child(1) {
        font-weight: 700;
        color: ${({ theme }) => theme.COLORS.WHITE};
        white-space: nowrap;
        margin-bottom: 0.75rem;
      }

      &:nth-child(2) {
        color: ${({ theme }) => theme.COLORS.GRAY_300};
        justify-content: end;
      }
    }
  }

  > img {
    width: 4rem;
    height: 4rem;
    border-radius: 50%;

    cursor: pointer;
  }
`
