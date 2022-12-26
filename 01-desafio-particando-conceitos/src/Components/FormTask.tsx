import { PlusCircle } from 'phosphor-react';

import styels from './FormTask.module.css';

export function FormTask () {
  return (
    <form className={styels.form}>
      <input type="text" placeholder="Adicione uma nova tarefa"/>
      <button type="submit">
        Criar 
        <PlusCircle size={16} weight="bold"/>
      </button>
    </form>
  )
}