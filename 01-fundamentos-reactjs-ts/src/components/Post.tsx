
import { ChangeEvent, FormEvent, InvalidEvent, useState } from 'react';

import { format, formatDistanceToNow } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR';

import { Avatar } from './Avatar';
import { Comment } from './Comment';

import styles from './Post.module.css';

interface Author {
  name: string;
  role: string;
  avatarUrl: string;
}

interface Content {
  type: string;
  content: string;
}

interface PostProps {
  author: Author;
  publichedAt: Date;
  content: Content[];
}

export function Post({ author, publichedAt, content }: PostProps) {
  const [comments, setComments] = useState([
    'Post muito bacana, hein?1',
  ])
 
  const [newCommentText, setNewCommentText] = useState('')

  const publishedDateFormatted = format(publichedAt, "d 'de' LLLL 'às' HH:mm'h'", {
    locale: ptBR,
  })
  
  const publishedDateRelativeToNow = formatDistanceToNow(publichedAt, {
    locale: ptBR,
    addSuffix: true,
  })

  function handleNewCommentChange(event: ChangeEvent<HTMLTextAreaElement>) {
    event.target.setCustomValidity('');

    setNewCommentText(event.target.value);
  }

  function handleCreateNewComment(event: FormEvent) {
    event.preventDefault();

    setComments([...comments, newCommentText]);

    setNewCommentText('');
  }

  function handleNewCommentInalid(event: InvalidEvent<HTMLTextAreaElement>) {
    event.target.setCustomValidity('Esse campo é obrigatório');
  }

  function deleteComment(comment: string) {
    const commentsWithoutDeleteOne = comments.filter(c => { return c != comment })
   
    setComments(commentsWithoutDeleteOne);
  }

  const isNewCommentEmpty = newCommentText.length === 0;

  return (
    <article className={styles.post}>
      <header >
        <div className={styles.author}>
          <Avatar  src={author.avatarUrl}/>

          <div className={styles.authorInfo}>
            <strong>{author.name}</strong>
            <span>{author.role}</span>
          </div>
        </div>

        <time title={publishedDateFormatted} dateTime={publichedAt.toISOString()} >
          {publishedDateRelativeToNow}
        </time>

      </header>

      <section className={styles.content}>
        {content.map(line => {
          if (line.type === 'paragraph') {
            return <p key={line.content}>{line.content}</p>;
          } else if (line.type === 'link') {
            return <p key={line.content}><a href="#">{line.content}</a></p>;
          }
        })}

      </section>

      <form onSubmit={handleCreateNewComment} className={styles.commentForm} action="POST">
        <strong>Deixe seu feedback</strong>

        <textarea 
          name="comment" 
          placeholder="Deixe um comentário" 
          value={newCommentText}
          onChange={handleNewCommentChange}
          onInvalid={handleNewCommentInalid}
          required
        />

        <footer>
          <button type="submit" disabled={isNewCommentEmpty}>Publicar</button>
        </footer>
      </form>

      <div className={styles.commentList}>
        {comments.map(comment => (
          <Comment 
            key={comment} 
            content={comment} 
            onDeleteComment={() => deleteComment(comment)}
          />
        ))}
      </div>
    </article>
  );
}