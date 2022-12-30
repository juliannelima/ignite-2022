import styled from 'styled-components';

export const ButtonContainer = styled.button`
  width: 100px;
  height: 40px;
  border-radius: 4px;
  border: 0;
  margin: 8px;

  background-color: ${props => props.theme['green-500']};
  color: ${props => props.theme.white};
`