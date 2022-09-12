import styled from 'styled-components'

export const Container = styled.li`
  display: flex;
  align-items: center;
  column-gap: 10rem;

  padding: 16px;
  border-radius: 0 6px 6px 0;
  border-left: 5px solid #c23;
  background: ${({ theme }) => theme.colors.info};

  & span {
    font-weight: bold;
  }

  & button {
    color: #c23;

    border: 0;
    opacity: 0.7;
    background: transparent;
    transition: all 0.2s;
  }

  & button:hover {
    color: var(--secondary);
    border-color: var(--secondary);
    opacity: 1;
  }
`
