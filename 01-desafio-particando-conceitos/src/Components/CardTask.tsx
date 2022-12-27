import { Trash } from 'phosphor-react';

import styles from './CardTask.module.css';

interface CardTaskProps {
  done?: boolean;
  text: string;
  onDeleteTask: () => void;
  onDoneTask: () => void;
}

export function CardTask({ done, text, onDeleteTask, onDoneTask }:CardTaskProps) {
  return (
    <form className={styles.task}>
      <input type="checkbox" onClick={onDoneTask} defaultChecked={done} />
      
      <span className={done ? styles.textDone :styles.text }>
        {text}
      </span>

      <button type="button" onClick={onDeleteTask}><Trash size={20} /></button>
  </form>
  )
}