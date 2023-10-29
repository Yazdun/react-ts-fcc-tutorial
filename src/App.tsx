import { Toaster } from 'react-hot-toast'
import { AddTodo, TodoList } from './components'

function App() {
  // 設定 todos 來儲存待辦事項

  return (
    <section>
      <Toaster position="bottom-center" />
      {/* Toast 是用於顯示加入提示的套件s */}
      <AddTodo />
      <TodoList />
    </section>
  )
}

export default App
