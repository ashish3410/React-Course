import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [counter, setCounter] = useState(10)
  const AddCounter=()=>{
    
    if(counter<20){
    counter=counter +1
    setCounter(counter)
    }else{
      setCounter(counter)
    }
  }
  
  const RemoveCounter=()=>{
    if(counter>0){
      setCounter(counter-1)
    }else{
      setCounter(counter)
    }
  }
  return (
    <>
    <h1>hooks in react</h1>
    <h3>counter {counter}</h3>
    <button onClick={AddCounter}>Add Counter</button><br/>

    <button onClick={RemoveCounter}>Remove Counter</button>
    <p>xomthing:{counter}</p>
    <h3>Something:{counter}</h3>
    </>
  )
}

export default App
