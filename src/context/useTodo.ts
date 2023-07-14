import { useContext } from 'react'
import { TodoContext } from './TodoContext'

export const useTodo = () => {
  const context = useContext(TodoContext)//hooks into TodoContext and returns value

  if (!context) {
    throw new Error('useTodo must be used within a TodoProvider')
  }

  return context
}
