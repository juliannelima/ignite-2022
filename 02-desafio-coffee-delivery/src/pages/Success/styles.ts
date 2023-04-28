import styled from 'styled-components'

export const SuccessContainer = styled.div`
  width: 100%;

  display: flex;
  gap: 3rem;

  padding-top: 5rem;
`

export const SuccessInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  h1 {
    font-size: 2rem;
    font-family: 'Baloo 2';
    font-weight: 800;

    color: ${(props) => props.theme['yellow-dark']};
  }

  span {
    font-size: 1.25rem;

    color: ${(props) => props.theme['base-subtitle']};
  }
`
export const SuccessCards = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;

  padding: 2.5rem;

  /* border-width: 3px;
  border-style: solid;
  border-image: linear-gradient(102.89deg, #dbac2c 2.61%, #8047f8 98.76%); */

  border-radius: 6px 36px;
`
export const SuccessCard = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;

  div {
    display: flex;
    flex-direction: column;
  }

  div span {
    font-size: 1rem;
    color: ${(props) => props.theme['base-text']};
  }
`
