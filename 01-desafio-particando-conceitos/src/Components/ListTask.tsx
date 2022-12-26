import { Clipboard } from 'phosphor-react';

import styles from './ListTask.module.css';

export function ListTask() {
  return (
    <div className={styles.list}>
      <header>
        <div className={styles.created}>
          <strong>Tarefas criadas</strong>
          <span>0</span>
        </div>

        <div className={styles.done}>
          <strong>Concluídos</strong>
          <span>0</span>
        </div>
      </header>

      <div className={styles.empty}>
        <Clipboard size={56}/>
        
        <strong>Você ainda não tem tarefas cadastradas</strong> 
        
        <span>Crie tarefas e organize seus itens a fazer</span>
      </div>
    </div>
  )
}