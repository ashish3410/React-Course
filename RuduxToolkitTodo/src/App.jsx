import './App.css'
import TodoForm from './componets/TodoForm'
import TodoItems from './componets/TodoItems'

function App() {
  return (
    <>
     <h1 className='text-4xl font-bold'>Learn Redux Toolkit</h1>
     <TodoForm/>
     <TodoItems/>
    </>
  )
}

export default App
