import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { updateTodo, removeTodo } from '../features/todo/TodoSlicer'
function TodoItems() {
    const todos = useSelector(state => state.todos)
    const dispatch = useDispatch()
    console.log(todos)
    return (
        <>
            {todos.map((todo) => (
                <div className='w-full flex justify-center align-items-center mt-10'>
                    <div key={todo.id} className='bg-blue-800 w-3/4 p-2 rounded text-left text-xl flex'>
                        {todo.text}
                    </div>
                    <div>
                        <button className='bg-red-500 p-3 rounded ml-2 px-4 hover:bg-red-700'
                            onClick={() => dispatch(removeTodo(todo.id))}>DEL</button>
                    </div>
                </div>
            ))}
        </>
    )
}

export default TodoItems
