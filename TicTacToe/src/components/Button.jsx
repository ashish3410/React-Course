import React, { useState } from 'react'

function Button({value,handleValue}) {
    // const [value,setValue]=useState(null)
    return (
        <button onClick={handleValue} className='h-24 w-24 text-4xl px-8 py-7 m-4 bg-gray-500 shadow-black rounded-sm font-bold'>{value}</button>
    )
}

export default Button
