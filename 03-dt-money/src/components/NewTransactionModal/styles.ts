import styled from 'styled-components'

import * as Dialog from '@radix-ui/react-dialog'
import * as RadioGroup from '@radix-ui/react-radio-group'

export const Overlay = styled(Dialog.Overlay)`
  position: fixed;
  width: 100vw;
  height: 100vh;
  inset: 0;
  background: rgba(0, 0, 0, 0.75);
`

export const Content = styled(Dialog.Content)`
  min-width: 32rem;
  border-radius: 6px;
  padding: 2.5rem 3rem;
  background: ${(props) => props.theme['gray-800']};

  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  form {
    margin-top: 2rem;

    display: flex;
    flex-direction: column;
    gap: 1rem;

    input {
      border: 0;
      border-radius: 6px;

      padding: 1rem;

      color: ${(props) => props.theme['gray-300']};
      background: ${(props) => props.theme['gray-900']};

      &::placeholder {
        color: ${(props) => props.theme['gray-500']};
      }
    }

    button[type='submit'] {
      margin-top: 1.5rem;

      height: 3.625rem;
      padding: 0 1.25rem;

      font-weight: bold;
      color: ${(props) => props.theme.white};
      background: ${(props) => props.theme['green-500']};

      border: 0;
      border-radius: 6px;

      &:hover {
        background: ${(props) => props.theme['green-300']};
        transition: background-color 0.2s;
      }
    }
  }
`

export const ColseButton = styled(Dialog.Close)`
  position: absolute;
  background: transparent;

  border: 0;
  color: ${(props) => props.theme['gray-500']};

  top: 1.5rem;
  right: 1.5rem;
  line-height: 0;
  cursor: pointer;
`

export const TransactionType = styled(RadioGroup.Root)`
  margin-top: 0.5rem;

  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
`

interface TransactionTypeButtonProps {
  variant: 'income' | 'outcome'
}

export const TransactionTypeButton = styled(
  RadioGroup.Item,
)<TransactionTypeButtonProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;

  border: 0;
  border-radius: 6px;
  padding: 1rem;

  color: ${(props) => props.theme['gray-300']};
  background: ${(props) => props.theme['gray-700']};

  cursor: pointer;

  svg {
    color: ${(props) =>
      props.variant === 'income'
        ? props.theme['green-300']
        : props.theme['red-300']};
  }

  &[data-state='unchecked']:hover {
    transition: background-color 0.2s;
    background: ${(props) => props.theme['gray-600']};
  }

  &[data-state='checked'] {
    color: ${(props) => props.theme.white};
    background: ${(props) =>
      props.variant === 'income'
        ? props.theme['green-500']
        : props.theme['red-500']};

    svg {
      color: ${(props) => props.theme.white};
    }
  }
`
