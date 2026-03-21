import styled from "styled-components"
import background from "../../assets/background.png"

export const Container = styled.main`
  height: 100vh;

  display: flex;
  align-items: stretch;
`

export const Form = styled.form`
  padding: 0 8.5rem;

  display: flex;
  flex-direction: column;
  justify-content: center;

  > h1 {
    font-size: 3rem;
    color: ${({ theme }) => theme.COLORS.PINK};
  }

  > h2 {
    font-size: 1.5rem;
    margin: 3rem 0;
    color: ${({ theme }) => theme.COLORS.WHITE};
  }

  > p {
    font-size: 0.875rem;
    color: ${({ theme }) => theme.COLORS.GRAY_100};
  }

  > a {
    color: ${({ theme }) => theme.COLORS.PINK};
    text-align: center;
    margin-top: 2.625rem;
  }
`

export const BackgroundImg = styled.div`
  flex: 1;
  background: url(${background}) no-repeat center center;
  background-size: cover;
`
