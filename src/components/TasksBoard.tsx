import { ClipboardText } from 'phosphor-react'
import { useState } from 'react'
import { NewTaskForm } from './NewTaskForm'
import { Task } from './Task'

import styles from './TasksBoard.module.css'

interface Task {
  id: number
  content: string
  completed: boolean
}

export function TasksBoard () {
  const [tasks, setTasks] = useState<Task[]>([])

  const createdTasks = tasks.length
  const completedTasks = tasks.filter(task => task.completed === true).length

  function createTask (content: string) {
    let id: number
    const lastTaskCreated = tasks.at(-1)

    if (lastTaskCreated !== undefined) {
      id = lastTaskCreated.id + 1
    } else {
      id = 1
    }

    setTasks([...tasks, {
        id,
        completed: false,
        content
      }
    ])
  }

  function toggleTask (id: number) {
    setTasks(tasks.map(task => {
      if (task.id === id) {
        task.completed = !task.completed
      }

      return task
    }))
  }

  function deleteTask (id: number) {
    setTasks(tasks.filter(task => task.id !== id))
  }

  return (
    <div className={styles.wrapper}>
      <NewTaskForm onCreateNewTask={createTask} />

      <main className={styles.tasksBoard}>
        <header>
          <div className={styles.headerSubtitle}>
            <span className={styles.created}>Tarefas criadas</span>
            <span className={styles.counter}>{createdTasks}</span>
          </div>
          <div className={styles.headerSubtitle}>
            <span className={styles.completed}>Concluídas</span>
            <span className={styles.counter}>{completedTasks} de {createdTasks}</span>
          </div>
        </header>

        <div className={styles.tasksList}>
          {tasks.map(task => {
            return (
              <Task
                key={task.id}
                taskId={task.id}
                content={task.content}
                onToggleTask={toggleTask}
                onDeleteTask={deleteTask}
                checked={task.completed}
              />
            )
          })}

          {tasks.length === 0 && (
            <div className={styles.tasksListEmpty}>
              <ClipboardText size={56} className={styles.clipBoard} />
              <div>
                <p>Você ainda não tem tarefas cadastradas</p>
                <span>Crie tarefas e organize seus itens a fazer</span>
              </div>
            </div>
          )}
        </div>
      </main>
    </div>
  )
}
