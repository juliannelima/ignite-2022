import styled from 'styled-components'

export const HeaderContainer = styled.header`
  width: 100%;
  padding: 2rem 1rem;

  display: flex;
  align-items: center;
  justify-content: space-between;

  div {
    display: flex;
    align-items: center;

    gap: 0.75rem;
  }
`

export const Location = styled.div`
  padding: 0.5rem;
  border-radius: 6px;

  font-size: 0.875rem;

  background: ${(props) => props.theme['purple-light']};
  color: ${(props) => props.theme['purple-dark']};

  display: flex;
  align-items: center;
  gap: 0.25rem;
`

export const Card = styled.button`
  padding: 0.5rem;
  border-radius: 6px;

  background: ${(props) => props.theme['yellow-light']};
  color: ${(props) => props.theme['yellow-dark']};

  border: 0;
  height: 2.375rem;
`
