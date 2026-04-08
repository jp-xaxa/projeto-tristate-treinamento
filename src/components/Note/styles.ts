import styled from "styled-components"

export const Container = styled.div`
  width: 100%;

  background-color: ${({ theme }) => theme.COLORS.PINK_OPACITY};
  border: none;
  border-radius: 1rem;

  padding: 2rem;

  cursor: pointer;

  > h1 {
    margin-bottom: 0.5rem;

    font-size: 1.5rem;
    color: ${({ theme }) => theme.COLORS.WHITE};
  }

  > p {
    font-size: 1rem;
    color: ${({ theme }) => theme.COLORS.GRAY_200};
    text-align: justify;

    margin: 1rem 0;
  }

  > footer {
    display: flex;
    gap: 0.5rem;
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

export const Tags = styled.div`
  font-size: 0.75rem;
  padding: 0.375rem 0.875rem;
  border-radius: 0.5rem;
  margin-right: 0.375rem;

  color: ${({ theme }) => theme.COLORS.GRAY};
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_700};
`
