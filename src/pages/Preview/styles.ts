import styled from "styled-components"

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  display: grid;
  grid-template-areas:
    "header"
    "content";

  align-content: flex-start;
`

export const Content = styled.div`
  grid-area: content;

  width: 100%;
  padding: 3.125rem 7.75rem;

  > div {
    width: 100%;

    display: flex;
    flex-direction: column;
    gap: 2.5rem;

    margin-top: 2.5rem;

    > section {
      display: flex;
      align-items: center;
      gap: 1rem;

      > div {
        display: flex;
        align-items: center;
        gap: 1rem;

        > img {
          width: 1rem;
          height: 1rem;
          border-radius: 50%;
        }

        > p {
          font-size: 1rem;
          color: ${({ theme }) => theme.COLORS.WHITE};
        }

        > svg {
          font-size: 1rem;
          color: ${({ theme }) => theme.COLORS.PINK};
        }
      }

      > p {
        font-size: 1rem;
        color: ${({ theme }) => theme.COLORS.WHITE};
      }

      > svg {
        font-size: 1rem;
        color: ${({ theme }) => theme.COLORS.PINK};
      }

      &.tags {
        display: flex;
        align-items: center;
        gap: 1rem;

        margin: 2.5rem 0;

        > p {
          font-size: 1rem;
          color: ${({ theme }) => theme.COLORS.WHITE};
          text-align: justify;

          padding: 0.5rem 1rem;
          background-color: ${({ theme }) => theme.COLORS.PINK_OPACITY};
          border-radius: 0.5rem;
        }
      }
    }

    > p {
      font-size: 1rem;
      color: ${({ theme }) => theme.COLORS.WHITE};
      text-align: justify;
    }
  }
`

export const Assessments = styled.div`
  display: flex;
  align-items: center;
  gap: 0.25rem;
  font-size: 0.625rem;

  font-size: 1.25rem;
  color: ${({ theme }) => theme.COLORS.PINK};
`
