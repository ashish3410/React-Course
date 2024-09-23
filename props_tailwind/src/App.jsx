import { useState } from 'react'
import './App.css'
import Card from './componets/Card.jsx' 

function App() {
  const [count, setCount] = useState(0)
  const myobj={
    name:"Ashish",
    language:"Python"
  }
  const arr=[1,2,3,5,4]
  return (
    <>
      <h1 className='bg-green-400 rounded-xl text-black'>TailWind Test</h1>
      {/* <Card someObj={myobj} newArr={arr}/>     */}
      <Card username="Ashish" />
    </>
  )
}

export default App
