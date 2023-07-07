import React, { createContext, useState } from 'react'
import { nanoid } from 'nanoid'
import { useLocalStorage } from 'usehooks-ts'

export interface Todo {
  id: string
  text: string
  status: 'undone' | 'completed'
}

export const TodoContext = createContext<undefined>(undefined)

export const TodoProvider = (props: { children: React.ReactNode }) => {
  return (
    <TodoContext.Provider value={undefined}>
      {props.children}
    </TodoContext.Provider>
  )
}
