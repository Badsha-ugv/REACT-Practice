import { useState } from 'react'
import TodoForm from './components/todo/TodoForm'
import TodoList from './components/todo/TodoList'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      
      <TodoList />
    </>
  )
}

export default App
