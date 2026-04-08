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
    justify-content: space-between;
    align-items: center;

    margin-bottom: 2.5rem;

    > h1 {
      font-size: 2rem;
      color: ${({ theme }) => theme.COLORS.WHITE};
    }
  }

  > section {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;

    /* height: 2000px;
    border: 1px solid red;

    overflow-y: auto; */
  }
`
