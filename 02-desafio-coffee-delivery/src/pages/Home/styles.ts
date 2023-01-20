import styled from 'styled-components'

import { defaultTheme } from '../../styles/themes/default'

export const HomeContainer = styled.main`
  width: 100%;
  padding: 0 1rem;

  diplay: flex;
  align-items: center;
`

export const Banner = styled.div`
  width: 100%;

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
