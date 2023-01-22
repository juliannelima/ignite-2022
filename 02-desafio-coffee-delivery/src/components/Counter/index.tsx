import { Minus, Plus } from 'phosphor-react'

import { CounterContainer } from './styles'

export function Counter() {
  return (
    <CounterContainer>
      <button>
        <Minus size={14} />
      </button>
      <span>1</span>
      <button>
        <Plus size={14} />
      </button>
    </CounterContainer>
  )
}
