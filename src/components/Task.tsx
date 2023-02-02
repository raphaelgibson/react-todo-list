import { Circle, Trash } from 'phosphor-react'
import checkCircle from '../assets/check-circle.svg'

import styles from './Task.module.css'

interface Props {
  taskId: number
  content: string
  onToggleTask: (id: number) => void
  onDeleteTask: (id: number) => void
  checked?: boolean
}

export function Task ({ taskId, content, onToggleTask, onDeleteTask, checked = false }: Props) {
  function handleToggleTask() {
    onToggleTask(taskId)
  }

  function handleDeleteTask() {
    onDeleteTask(taskId)
  }

  return (
    <div className={styles.task}>
      {
        checked
        ?
          <>
            <div>
              <img src={checkCircle} onClick={handleToggleTask} className={styles.checkCircle} />
            </div>
            <div className={styles.content}>
              <p className={styles.checked}>{content}</p>
            </div>
          </>
        :
          <>
            <div>
              <Circle size={24} onClick={handleToggleTask} className={styles.circle} />
            </div>
            <div className={styles.content}>
              <p className={styles.unchecked}>{content}</p>
            </div>
          </>
      }

      <Trash size={24} onClick={handleDeleteTask} className={styles.trash} />
    </div>
  )
}
