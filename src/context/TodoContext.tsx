import React, { createContext } from 'react'
import { nanoid } from 'nanoid'
import { useLocalStorage } from 'usehooks-ts'

interface TodoContextProps {
  todos: Todo[]
  addTodo: (text: string) => void
  deleteTodo: (id: string) => void
  editTodo: (id: string, text: string) => void
  updateTodoStatus: (id: string) => void
}

export interface Todo {
  id: string
  text: string
  date: Date | any
  status: 'undone' | 'completed'
}

export const TodoContext = createContext<TodoContextProps | undefined>(
  undefined,
)

export const TodoProvider = (props: { children: React.ReactNode }) => {
  const [todos, setTodos] = useLocalStorage<Todo[]>('todos', [])

  // ::: ADD NEW TODO :::
  const addTodo = (text: string) => {
    const newTodo: Todo = {
      id: nanoid(),
      text,
      date: new Date().toLocaleTimeString(),
      status: 'undone',
    }

    setTodos([...todos, newTodo])
  }

  // ::: DELETE A TODO :::
  const deleteTodo = (id: string) => {
    setTodos(prevTodos => prevTodos.filter(todo => todo.id !== id))
  }

  // ::: EDIT A TODO :::
  const editTodo = (id: string, text: string) => {
    setTodos(prevTodos => {
      return prevTodos.map(todo => {
        if (todo.id === id) {
          return { ...todo, text, }
        }
        return todo
      })
    })
  }

  // ::: UPDATE TODO STATUS :::
  const updateTodoStatus = (id: string) => {
    setTodos(prevTodos => {
      return prevTodos.map(todo => {
        if (todo.id === id) {
          return {
            ...todo,
            status: todo.status === 'undone' ? 'completed' : 'undone',
          }
        }
        return todo
      })
    })
  }

  const value: TodoContextProps = {
    todos,
    addTodo,
    deleteTodo,
    editTodo,
    updateTodoStatus,
  }

  return (
    <TodoContext.Provider value={value}>{props.children}</TodoContext.Provider>
  )
}
