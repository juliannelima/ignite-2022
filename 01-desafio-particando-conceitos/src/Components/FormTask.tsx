import { ChangeEvent, FormEvent, useState } from 'react';

import { PlusCircle, Clipboard } from 'phosphor-react';

import { CardTask } from './CardTask';

import styles from './FormTask.module.css';

interface Task {
  id: number;
  done: boolean;
  text: string;
}

export function FormTask () {
  const [tasks, setTasks] = useState<Task[]>([]);

  const [task, setTask] = useState('');

  function handleNewTaskChange(event: ChangeEvent<HTMLInputElement>) {
    setTask(event.target.value);
  }

  function handleCreateTask(event: FormEvent) {
    event.preventDefault();

    setTasks([...tasks, {
      id: tasks.length + 1,
      done: false,
      text: task
    }])

    setTask('');
  }

  function handleDeleteTask(id: number) {
    setTasks(tasks.filter(task => task.id !== id));
  }

  return (
    <>
      <form className={styles.form} onSubmit={handleCreateTask}>
        <input 
          type="text" 
          name="task"
          value={task}
          placeholder="Adicione uma nova tarefa"
          onChange={handleNewTaskChange}
          required
        />
        <button type="submit">
          Criar 
          <PlusCircle size={16} weight="bold"/>
        </button>
      </form>

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

        {tasks.map(task => (
          <CardTask key={task.id} text={task.text} onDeleteTask={() => handleDeleteTask(task.id)}/>
        ))}
      </div>
    </>
  )
}