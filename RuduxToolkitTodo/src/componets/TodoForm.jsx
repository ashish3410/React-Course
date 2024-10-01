import React, { useState } from 'react'
import { addTodo } from '../features/todo/TodoSlicer'
import {useDispatch} from 'react-redux'
function TodoForm() {
    const [input,setInput]=useState()
    const dispatch=useDispatch()
    const add=(e)=>{
        e.preventDefault()
        dispatch(addTodo(input))
        setInput('')
    }
    return (
        <div>
            <form onSubmit={add}>
                <div className='gap-2 flex justify-center align-items-center w-full'>
                <input className='w-3/4 bg-gray-600 p-2 mt-10 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 leading-8 transition-colors duration-200 ease-in-out' 
                type="text" 
                placeholder='Enter Todo...'
                value={input}
                onChange={(e)=>setInput(e.target.value)}/>
                    <button className='bg-blue-950 p-2 mt-10 rounded text-white px-4 hover:bg-black'>Add</button>
                </div>
            </form>
        </div>
      //   <form onSubmit={add} className="space-x-3 mt-12">
      //   <input
      //     type="text"
      //     className="bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
      //     placeholder="Enter a Todo..."
      //     value={input}
      //     onChange={(e) => setInput(e.target.value)}
      //   />
      //   <button
      //     type="submit"
      //     className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"
      //   >
      //     Add Todo
      //   </button>
      // </form>
    )
}

export default TodoForm
