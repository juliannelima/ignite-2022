import { Trash } from 'phosphor-react';

import styles from './CardTask.module.css';

interface CardTaskProps {
  done?: boolean;
}

export function CardTask({ done = false }:CardTaskProps) {
  return (
    <form className={styles.task}>
    <input type="checkbox" />
    
    <span className={done ? styles.textDone : styles.text}>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
      Id blanditiis qui optio voluptatum, aperiam commodi consectetur
      officia assumenda delectus impedit soluta nesciunt.
    </span>

    <button><Trash size={24} /></button>
  </form>
  )
}