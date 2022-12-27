import { Trash } from 'phosphor-react';

import styles from './CardTask.module.css';

interface CardTaskProps {
  done?: boolean;
  text: string;
}

export function CardTask({ done = false, text }:CardTaskProps) {
  return (
    <form className={styles.task}>
      <input type="checkbox" />
      
      <span className={styles.text }>
        {text}
      </span>

      <button><Trash size={20} /></button>
  </form>
  )
}