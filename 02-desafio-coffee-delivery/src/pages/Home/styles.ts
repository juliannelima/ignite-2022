import styled from 'styled-components'

import { defaultTheme } from '../../styles/themes/default'

export const HomeContainer = styled.main`
  width: 100%;
  padding: 0 1rem;

  &.section {
    margin-top: 5rem;

    h2 {
      font-size: 2rem;
      color: ${(props) => props.theme['base-subtitle']};
    }
  }
`

export const Banner = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
`

export const Info = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  h1 {
    font-size: 3rem;
    font-family: 'Baloo 2';

    color: ${(props) => props.theme['base-title']};
  }

  span {
    font-size: 1.25rem;

    color: ${(props) => props.theme['base-subtitle']};
  }
`

export const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;

  margin-top: 4.75rem;
`
interface ItemProps {
  variant: keyof typeof defaultTheme
  color: keyof typeof defaultTheme
}

export const Item = styled.div<ItemProps>`
  width: 100%;

  display: flex;
  align-items: center;
  gap: 1rem;

  div {
    width: 2rem;
    height: 2rem;

    display: flex;
    align-items: center;
    justify-content: center;

    background: ${(props) => props.theme[props.variant]};
    color: ${(props) => props.theme[props.color]};
    border-radius: 1000px;
  }

  span {
    font-size: 1rem;
    color: ${(props) => props.theme['base-text']};
  }
`

export const CoffeeList = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1rem;

  margin-top: 4.75rem;
`

export const CoffeeCard = styled.div`
  background: ${(props) => props.theme['base-card']};
  border-radius: 6px 36px;

  display: flex;
  flex-direction: column;
  gap: 1rem;

  padding: 0 1.25rem;

  header {
    display: flex;
    align-items: center;
    flex-direction: column;
    gap: 1rem;

    margin-top: -20px;
  }

  main {
    display: flex;
    align-items: center;
    flex-direction: column;
    gap: 1rem;

    strong {
      font-size: 1.25rem;
      color: ${(props) => props.theme['base-title']};
    }

    span {
      text-align: center;
      font-size: 0.875rem;
      color: ${(props) => props.theme['base-label']};
    }
  }
`
export const TagList = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  span {
    background: ${(props) => props.theme['yellow-light']};
    border-radius: 100px;
    padding: 0.5rem;

    text-transform: uppercase;
    font-size: 0.625rem;
    font-weight: bold;

    color: ${(props) => props.theme['yellow-dark']};
  }
`

export const CoffeeBuy = styled.footer`
  padding: 0.5rem 1rem;

  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1.75rem;

  section {
    span {
      font-size: 0.875rem;
      font-weight: normal;
      color: ${(props) => props.theme['base-text']};
    }

    strong {
      font-size: 1.25rem;
      color: ${(props) => props.theme['base-text']};
    }
  }

  div {
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }
`

export const CounterBuy = styled.div`
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

export const ButtonBuy = styled.div`
  border: 0;
  border-radius: 6px;
  padding: 0.5rem;

  display: flex;
  align-items: center;
  justify-content: center;

  color: ${(props) => props.theme.white};
  background: ${(props) => props.theme['purple-dark']};
`
