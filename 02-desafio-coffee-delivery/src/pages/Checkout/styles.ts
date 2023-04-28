import styled from 'styled-components'

import { defaultTheme } from '../../styles/themes/default'

export const CheckoutContainer = styled.main`
  width: 100%;

  display: flex;
  align-items: flex-start;
  gap: 2rem;
`

export const CheckoutCard = styled.section`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  gap: 0.75rem;
`

export const Title = styled.header`
  font-size: 1.125rem;
  font-weight: bold;
  font-family: 'Baloo 2';
  line-height: 1.5rem;

  color: ${(props) => props.theme['base-subtitle']};
`
interface SubtitleProps {
  variant: keyof typeof defaultTheme
}

export const Subtitle = styled.div<SubtitleProps>`
  display: flex;
  align-items: flex-start;
  gap: 0.5rem;

  svg {
    color: ${(props) => props.theme[props.variant]};
  }

  div {
    display: flex;
    flex-direction: column;

    span:first-child {
      color: ${(props) => props.theme['base-subtitle']};
    }

    span:last-child {
      font-size: 0.875rem;
      color: ${(props) => props.theme['base-text']};
    }
  }
`

export const BaseCard = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 2.5rem;
  gap: 2rem;

  border-radius: 6px;
  background: ${(props) => props.theme['base-card']};
`

export const CheckoutAddressCard = styled(BaseCard)`
  form {
    display: grid;
    flex-direction: 1fr 2fr 2fr;
    gap: 1rem;

    input {
      padding: 0.75rem;

      border: 1px solid ${(props) => props.theme['base-button']};
      border-radius: 4px;

      background: ${(props) => props.theme['base-input']};

      color: ${(props) => props.theme['base-text']};

      &::placeholder {
        color: ${(props) => props.theme['base-label']};
      }
    }
  }
`

export const CheckoutPayCard = styled(BaseCard)``

export const PayCards = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 0.75rem;

  button {
    display: flex;
    align-items: center;
    gap: 0.75rem;

    padding: 1rem;

    border: 1px solid transparent;
    border-radius: 6px;
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
      transition: 0.2s;
    }

    &:select {
      background: ${(props) => props.theme['purple-light']};
      border: 1px solid ${(props) => props.theme['purple-main']};
      transition: 0.2s;
    }
  }
`

export const CheckoutCoffeeCard = styled(BaseCard)`
  border-radius: 6px 44px;

  table {
    tbody {
      tr {
        font-size: 0.875rem;
        color: ${(props) => props.theme['base-text']};

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

  div section {
    display: flex;
    gap: 0.5rem;
  }

  div section div {
    display: flex;
    gap: 0.5rem;
  }
`

export const ButtonDelete = styled.button`
  display: flex;
  align-items: center;
  gap: 0.25rem;

  padding: 0 0.5rem;

  border: 1px solid transparent;
  border-radius: 6px;
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
    transition: 0.2s;
  }

  &:select {
    background: ${(props) => props.theme['purple-light']};
    border: 1px solid ${(props) => props.theme['purple-main']};
    transition: 0.2s;
  }
`

export const ConfirmOrder = styled.button`
  background: ${(props) => props.theme['yellow-main']};
  color: ${(props) => props.theme.white};

  font-size: 0.875rem;
  font-weight: 700;
  text-transform: uppercase;

  padding: 0.75rem 0.5rem;

  border: 1px solid transparent;
  border-radius: 6px;
`
