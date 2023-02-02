import { PlusCircle } from 'phosphor-react'
import { FormEvent, useState } from 'react'

import styles from './NewTaskForm.module.css'

interface Props {
  onCreateNewTask: (content: string) => void
}

export function NewTaskForm ({ onCreateNewTask }: Props) {
  const [newTaskContent, setNewTaskContent] = useState('')

  function handleNewTask (event: FormEvent) {
    event.preventDefault()

    onCreateNewTask(newTaskContent)
    setNewTaskContent('')
  }

  return (
    <form onSubmit={handleNewTask} className={styles.newTaskForm}>
      <input
        type="text"
        placeholder="Adicione uma nova tarefa"
        value={newTaskContent}
        onChange={event => setNewTaskContent(event.target.value)}
      />
      <button type="submit">
        Criar
        <PlusCircle size={16} />
      </button>
    </form>
  )
}
