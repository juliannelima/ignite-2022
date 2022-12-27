import { Clipboard } from 'phosphor-react';

import { CardTask } from './CardTask';

import styles from './ListTask.module.css';

interface Task {
  id: number;
  done: boolean;
  text: string;
}

interface ListTaskProps {
  tasks: Task[];
}

export function ListTask({ tasks }: ListTaskProps) { 
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

      {tasks.length === 0 && (
        <div className={styles.empty}>
          <Clipboard size={56}/>
          
          <strong>Você ainda não tem tarefas cadastradas</strong> 
          
          <span>Crie tarefas e organize seus itens a fazer</span>
        </div>
      )}

      {tasks.map(task => <CardTask key={task.id} text={task.text}/>)}
    </div>
  )
}