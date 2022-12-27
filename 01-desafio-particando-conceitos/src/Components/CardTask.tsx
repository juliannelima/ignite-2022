import { Trash } from 'phosphor-react';

import styles from './CardTask.module.css';

interface CardTaskProps {
  done?: boolean;
  text: string;
  onDeleteTask: () => void;
}

export function CardTask({ done = false, text, onDeleteTask }:CardTaskProps) {
  return (
    <form className={styles.task}>
      <input type="checkbox" />
      
      <span className={styles.text }>
        {text}
      </span>

      <button type="button" onClick={onDeleteTask}><Trash size={20} /></button>
  </form>
  )
}