import { Trash, ThumbsUp } from 'phosphor-react';

import styles from './Comment.module.css';

export function Comment() {
  return (
    <div className={styles.comment}>
      <img src="https://avatars.githubusercontent.com/u/27890457?v=4" alt="Avatar" />

      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Julianne Lima</strong>

              <time title="22 de Dezembro às 08:15h" dateTime="2022-12-22 08:15:30" >Cerca de 1h</time>
            </div>

            <button title="Deletar comentário">
              <Trash size={24} />
            </button>
          </header>
          
          <p>Muito bom Devon, parabéns!! 👏👏</p>
        </div>

        <footer>
          <button>
            <ThumbsUp />
            Aplaudir <span>20</span>
          </button>
        </footer>
      </div>

    </div>
  )
}