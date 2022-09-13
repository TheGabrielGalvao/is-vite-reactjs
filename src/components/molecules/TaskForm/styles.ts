import styled from 'styled-components'

export const Containerform = styled.div`
  display: flex;
  align-items: center;
  column-gap: 10rem;

  padding: 16px;
  border-radius: 0 6px 6px 0;
  background: ${({ theme }) => theme.colors.info};

  input {
    border: none;
    padding: 1rem 1rem;
    width: 20rem;
    font-weight: 700;
    font-size: 1rem;
  }

  button {
    border: none;
    padding: 1rem 2rem;
    font-size: 1rem;
    font-weight: 600;
    background: ${({ theme }) => theme.colors.success};
    color: ${({ theme }) => theme.colors.textSecond};
  }
`
