import styled from 'styled-components'

export const HomeContainer = styled.main`
  flex: 1;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;

  form {
    display: flex;
    align-items: center;
    flex-direction: column;
    gap: 3.5rem;
  }
`

export const BaseCountdowButton = styled.button`
  width: 100%;
  padding: 1rem;
  border: 0;
  border-radius: 8px;

  color: ${(props) => props.theme['gray-100']};

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;

  font-weight: bold;
  cursor: pointer;

  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }
`

export const StartCountdowButton = styled(BaseCountdowButton)`
  background: ${(props) => props.theme['green-500']};

  &:disabled {
    background: ${(props) => props.theme['green-700']};
  }

  &:not(:disabled):hover {
    background: ${(props) => props.theme['red-700']};
  }
`
export const StopCountdowButton = styled(BaseCountdowButton)`
  background: ${(props) => props.theme['red-500']};

  &:disabled {
    background: ${(props) => props.theme['red-700']};
  }

  &:not(:disabled):hover {
    background: ${(props) => props.theme['red-700']};
  }
`
