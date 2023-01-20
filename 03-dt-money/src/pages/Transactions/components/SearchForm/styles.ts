import styled from 'styled-components'

export const SearchFormContainer = styled.form`
  display: flex;
  gap: 1rem;

  input {
    flex: 1;
    padding: 1rem;

    border: 0;
    border-radius: 6px;

    color: ${(props) => props.theme['gray-300']};
    background: ${(props) => props.theme['gray-900']};
  }

  button {
    display: flex;
    align-items: center;
    gap: 0.75rem;

    border: 1px solid ${(props) => props.theme['green-300']};
    border-radius: 6px;

    padding: 1rem;

    color: ${(props) => props.theme['green-300']};
    background: transparent;

    &:hover {
      color: ${(props) => props.theme.white};
      background: ${(props) => props.theme['green-500']};
      border-color: ${(props) => props.theme['green-500']};
      transition: background-color 0.2s, color 0.2s, border-color 0.2s;
    }
  }
`
