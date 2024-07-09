import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { CreateTodo } from './components/CreateTodo'
import { Todos } from './components/Todo'

function App() {
  //putting in backend
  const [todos,setTodos]=useState([]);
  

  return (
    <>
      <CreateTodo />
      <Todos todos={[{
        title:"who is my love",
        description:"myself",
        completed:false
      }]}/>
    </>
  )
}

export default App
