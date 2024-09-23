import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [color, setColor] = useState("white")
 
 function BgChanger(color) {
    document.querySelector("body").style.backgroundColor=`${color}`
  }
  return (
    <>
      <div className="footer bg-gray-400 rounded-2xl">
        <button onClick={()=>{BgChanger("red")}} className='rounded-full m-1 bg-red-500'>Red</button>
        <button onClick={()=>{BgChanger("green")}} className='rounded-full m-1 bg-green-500'>Green</button>
        <button onClick={()=>{BgChanger("orange")}} className='rounded-full m-1 bg-orange-500'>Orange</button>
        <button onClick={()=>{BgChanger("purple")}} className='rounded-full m-1 bg-purple-500'>Purple</button>
        <button onClick={()=>{BgChanger("yellow")}} className='rounded-full m-1 bg-yellow-500'>Yellow</button>
        <button onClick={()=>{BgChanger("white")}} className='rounded-full m-1 text-black bg-white'>White</button>
        <button onClick={()=>{BgChanger("black")}} className='rounded-full m-1 bg-black'>Black</button>
      </div>
    </>
  )
}

export default App
