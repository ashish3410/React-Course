import { useCallback, useEffect, useRef, useState } from 'react'
import './App.css'

function App() {
  let copy = "Copy"
  const [length, setLength] = useState(8)
  const [numbersAllowed, setNumberAllowed] = useState(false)
  const [charAllowed, setCharAllowed] = useState(false)
  let [password, setPassword] = useState("")
  const passwordRef = useRef(null)
  const passwordGenerator = useCallback(() => {
    let pass = ""
    let str = "WERTYUIOPASDFGHJKLZXCVBNMqwertyuiopasdfghjklzxcvbnm"
    const num = '0123456789'
    const char = '!@#$%^&*'
    if (numbersAllowed) str += num
    if (charAllowed) str += char
    for (let i = 1; i <= length; i++) {
      let ind = Math.floor(Math.random() * str.length + 1)
      pass += str.charAt(ind)
    }
    setPassword(pass)
  }, [length, numbersAllowed, charAllowed])
  const copyToClipboard = useCallback(() => {
    passwordRef.current?.select()
    window.navigator.clipboard.writeText(password)
  }, [password])
  useEffect(() => {
    passwordGenerator()
  }, [length, numbersAllowed, charAllowed])
  return (
    <>
      <div className='bg-gray-700 w-full max-w-md rounded-xl m-2 p-2'>
        <h2 className='text-xl mt-4'>Password Generator</h2>
        <div className='w-full flex'>
          <input className=' w-full mt-4 p-2 rounded text-orange-500 bg-white'
           type="text" 
           value={password} 
           ref={passwordRef}
           placeholder='Password' />
          <button onClick={copyToClipboard} 
          className='bg-blue-600 px-3 py-0.5 shrink-0 mt-4 rounded 
          hover:bg-blue-800'>{copy}</button>
        </div>
        <div className='text-orange-400 m-4 p-2 flex justify-center gap-2'>
          <input type="range" 
              min={8} 
              max={25} 
              value={length} 
              className='cursor-pointer bg-blue-600'
              onChange={(e) => { setLength(e.target.value) }} />
          <label >Length:{length}</label>
          <input className='gap-2' 
              type="checkbox"
              defaultChecked={numbersAllowed} 
              onChange={() => { setNumberAllowed((prev) => !prev) }} />
          <label htmlFor="">Numbers</label>
          <input type="checkbox" 
              defaultChecked={numbersAllowed} 
              onChange={() => { setCharAllowed((prev) => !prev) }} />
          <label htmlFor="">Character</label>
        </div>
      </div>
    </>
  )
}

export default App
