import { Dispatch, SetStateAction, useState } from 'react'
import { FiTrash } from 'react-icons/fi'

interface TaskObject {
  id: number
  title: string
  isComplete: boolean
}

interface TaskProps {
  id: number
  title: string
  isComplete: boolean
  setTasks: Dispatch<SetStateAction<TaskObject[]>>
  tasks: TaskObject[]
}

const Task = ({ id, title, isComplete, setTasks, tasks }: TaskProps) => {
  const [checked, setChecked] = useState(isComplete)
  const handleToggleTaskCompletion = (id: number) => {
    setChecked((checked) => !checked)
  }

  const handleRemoveTask = (id: number) => {
    setTasks(
      tasks.filter((task) => {
        if (task.id !== id) return task
        return null
      })
    )
  }

  return (
    <li key={id}>
      <div className={isComplete ? 'completed' : ''} data-testid="task">
        <label className="checkbox-container">
          <input
            type="checkbox"
            readOnly
            checked={checked}
            onClick={() => handleToggleTaskCompletion(id)}
          />
          <span className="checkmark"></span>
        </label>
        <p>{title}</p>
      </div>

      <button type="button" data-testid="remove-task-button" onClick={() => handleRemoveTask(id)}>
        <FiTrash size={16} />
      </button>
    </li>
  )
}

export default Task
