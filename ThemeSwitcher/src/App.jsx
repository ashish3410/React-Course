import { useEffect, useState } from 'react'
import './App.css'
import { ThemeProvider } from './context/ThemeContext'
import ThemeBtn from './components/ThemeBtn'
import Card from './components/Card'
function App() {
  const [theme, setTheme] = useState('light')
  const lightMode=()=>{
    setTheme("light")
  }
  const darkMode=()=>{
    setTheme("dark")
  }

  useEffect((e)=>{
    const mode=document.querySelector("html")
    mode.classList.remove('light','dark')
    mode.classList.add(theme)
  },[theme])
  return (
    <ThemeProvider value={{theme,lightMode,darkMode}}>
      <div className="flex flex-wrap min-h-screen items-center">
        <div className="w-full">
          <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
          <ThemeBtn/>
          </div>

          <div className="w-full max-w-sm mx-auto">
            <Card/>
          </div>
        </div>
      </div>

    </ThemeProvider>
  )
}

export default App
