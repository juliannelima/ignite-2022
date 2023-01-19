import styled from 'styled-components'

export const HeaderContainer = styled.header`
  background: ${(props) => props.theme['gray-900']};
  padding: 2.5rem 0 7.5rem;
`

export const HeaderContent = styled.div`
  width: 100%;
  max-width: 70rem;
  margin: 0 auto;
  padding: 0 1.5rem;

  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const NewTransactionButton = styled.button`
  height: 3.125rem;
  padding: 0 1.25rem;

  border: 0;
  border-radius: 6px;

  font-size: 0.875;
  font-weight: bold;

  color: ${(props) => props.theme.white};
  background: ${(props) => props.theme['green-500']};

  cursor: pointer;

  &:hover {
    background: ${(props) => props.theme['green-300']};
    transition: background-color 0.2s;
  }
`
