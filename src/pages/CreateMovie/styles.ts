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

    > h1 {
      font-size: 2.25rem;
      color: ${({ theme }) => theme.COLORS.WHITE};
    }

    > div {
      display: flex;
      align-items: center;
      gap: 2.5rem;
    }
  }
`

export const Section = styled.section`
  > h1 {
    font-size: 1.25rem;
    color: ${({ theme }) => theme.COLORS.GRAY_200};

    margin-bottom: 1rem;
  }

  > div {
    width: 100%;
    padding: 1rem;

    display: flex;
    align-items: center;
    gap: 1rem;

    flex-wrap: wrap;

    background-color: ${({ theme }) => theme.COLORS.BLACK};

    border-radius: 0.625rem;
  }
`
