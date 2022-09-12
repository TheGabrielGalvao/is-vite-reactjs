import styled from 'styled-components'

export const Container = styled.footer`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  row-gap: 6px;

  & h6 {
    font-weight: 400;
    font-size: 18px;
    padding: 12px;
    border-radius: 4px;
    background: var(--background-light);
  }

  & h6 span {
    font-weight: 600;
    margin-left: 4px;
    padding: 2px 4px;
    border-radius: 2px;
  }
`
