import styled from 'styled-components'

export const CheckoutContainer = styled.main`
  width: 100%;

  display: flex;
  align-items: flex-start;
  gap: 2rem;
`

export const CheckoutInfo = styled.div`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  gap: 0.75rem;

  header {
    font-size: 1.125rem;
    font-weight: bold;
    font-family: 'Baloo 2';
    line-height: 1.5rem;

    color: ${(props) => props.theme['base-subtitle']};
  }
`

export const Address = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 2.5rem;
  gap: 2.5rem;

  border-radius: 6px;
  background: ${(props) => props.theme['base-card']};

  div {
    display: flex;
    align-items: flex-start;
    gap: 0.5rem;

    svg {
      color: ${(props) => props.theme['yellow-dark']};
    }

    div {
      display: flex;
      flex-direction: column;

      span:first-child {
        color: ${(props) => props.theme['base-subtitle']};
      }

      span:last-child {
        color: ${(props) => props.theme['base-text']};
      }
    }
  }

  form {
    display: flex;
    flex-direction: column;
    gap: 1rem;

    input {
      padding: 0.75rem;

      border: 1px solid ${(props) => props.theme['base-button']};
      border-radius: 4px;
      background: ${(props) => props.theme['base-input']};
      color: ${(props) => props.theme['base-text']};

      &::placeholder {
        color: ${(props) => props.theme['base-text']};
      }
    }
  }
`

export const InputComplemento = styled.input`
  flex: 1;
`

export const InputUF = styled.input`
  width: 3.75rem;
`

export const Pay = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 2rem;

  padding: 2.5rem;

  border-radius: 6px;
  background: ${(props) => props.theme['base-card']};
`

export const PayHeader = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 0.5rem;

  svg {
    color: ${(props) => props.theme['purple-main']};
  }

  div {
    display: flex;
    flex-direction: column;

    span:first-child {
      color: ${(props) => props.theme['base-subtitle']};
    }

    span:last-child {
      color: ${(props) => props.theme['base-text']};
    }
  }
`

export const PayCards = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 0.75rem;

  button {
    display: flex;
    align-items: center;
    gap: 0.75rem;

    border: 0;
    border-radius: 6px;
    padding: 1rem;
    background: ${(props) => props.theme['base-button']};

    svg {
      color: ${(props) => props.theme['purple-main']};
    }

    span {
      font-size: 0.75rem;

      text-transform: uppercase;
      color: ${(props) => props.theme['base-text']};
    }

    &:hover {
      background: ${(props) => props.theme['base-hover']};
    }

    &:selected {
      background: ${(props) => props.theme['purple-light']};
      color: ${(props) => props.theme['purple-main']};
    }
  }
`

export const CheckoutCoffeCard = styled.div`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  gap: 0.75rem;

  color: ${(props) => props.theme['base-text']};

  header {
    font-size: 1.125rem;
    font-weight: bold;
    font-family: 'Baloo 2';
    line-height: 1.5rem;

    color: ${(props) => props.theme['base-subtitle']};
  }

  section {
    display: flex;
    flex-direction: column;
    gap: 1rem;

    padding: 2.5rem;

    border-radius: 6px;
    background: ${(props) => props.theme['base-card']};

    button:last-child {
    }
  }
`

export const CoffeCardCart = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 3rem;

  padding: 0.5rem 0.25rem;

  border-bottom: 1px solid ${(props) => props.theme['base-button']};
`

export const InfoCart = styled.div`
  div {
    display: flex;
    align-items: center;
    gap: 0.5rem;

    button {
      display: flex;
      align-item: center;
      justify-content: center;
      padding: 0.5rem;
      gap: 0.25rem;

      border: 0;
      border-radius: 6px;
      background: ${(props) => props.theme['base-button']};
    }
  }
`

export const CoffeCardSummary = styled.table`
  tr {
    td {
      padding: 0.5rem;

      &:last-child {
        text-align: right;
      }
    }

    &:last-child {
      color: ${(props) => props.theme['base-subtitle']};
      font-size: 1.25rem;
      font-weight: bold;
    }
  }
`

export const CoffeCardButton = styled.button`
  padding: 0.75rem 0.5rem;

  border: 0;
  border-radius: 6px;
  background: ${(props) => props.theme['yellow-main']};
  color: ${(props) => props.theme.white};

  font-weight: bold;
`
