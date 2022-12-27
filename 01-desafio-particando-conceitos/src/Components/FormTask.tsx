import { ChangeEvent, FormEvent, useState } from 'react';

import { PlusCircle } from 'phosphor-react';

import { ListTask } from './ListTask';

import styels from './FormTask.module.css';

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

  return (
    <>
      <form className={styels.form} onSubmit={handleCreateTask}>
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

      <ListTask tasks={tasks}/>
    </>
  )
}