import { useEffect, useState } from 'react'

import '../styles/tasklist.scss'

import { FiTrash, FiCheckSquare } from 'react-icons/fi'
import Task from './Task'

interface Task {
  id: number
  title: string
  isComplete: boolean
}

export function TaskList() {
  const [tasks, setTasks] = useState<Task[]>([])
  const [newTaskTitle, setNewTaskTitle] = useState('')

  const handleCreateNewTask = () => {
    if (newTaskTitle !== '') {
      setTasks([
        ...tasks,
        {
          id: Math.random(),
          title: newTaskTitle,
          isComplete: false
        }
      ])
      setNewTaskTitle('')
    } else alert('Adicione um novo todo')
  }

  useEffect(() => {
    console.log(tasks)
  }, [tasks])

  return (
    <section className="task-list container">
      <header>
        <h2>Minhas tasks</h2>

        <div className="input-group">
          <input
            type="text"
            placeholder="Adicionar novo todo"
            onChange={(e) => setNewTaskTitle(e.target.value)}
            value={newTaskTitle}
          />
          <button type="submit" data-testid="add-task-button" onClick={handleCreateNewTask}>
            <FiCheckSquare size={16} color="#fff" />
          </button>
        </div>
      </header>

      <main>
        <ul>
          {tasks.map((task) => (
            <Task
              key={task.id}
              id={task.id}
              title={task.title}
              isComplete={task.isComplete}
              setTasks={setTasks}
              tasks={tasks}
            />
          ))}
        </ul>
      </main>
    </section>
  )
}
