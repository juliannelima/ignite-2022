import styled from 'styled-components'

export const CounterContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 0.5rem;
  border-radius: 6px;

  background: ${(props) => props.theme['base-button']};

  button {
    border: 0;
    background: transparent;

    color: ${(props) => props.theme['purple-main']};
  }
`
