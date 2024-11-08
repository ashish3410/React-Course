import authservice from "./appwrite/auth"
import { useEffect, useState } from 'react'
import { useDispatch } from "react-redux"
import './App.css'
import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'
import { login, logout } from './store/authSlice'
import { Outlet } from "react-router-dom"
function App() {
  const [loading, setLoading] = useState(true)
  const dispatch = useDispatch()
  useEffect(() => {
    authservice.getCurrentUser().then((userData) => {
      if (userData) {
        dispatch(login({userData}))
      } else {
        dispatch(logout())
      }
    }).finally(() => setLoading(false))
  }, [])

  return !loading ? (
  <div className="min-h-screen flex flex-wrap content-between text-center">
    <div className="w-full block">
      <Header />
      <main>
        <Outlet/>
      </main>
      <Footer />
    </div>
  </div>
  ) : null
}

export default App
