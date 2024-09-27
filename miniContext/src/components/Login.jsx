import React, { useState,useContext } from 'react'
import UserContext from '../context/userContext'
function Login() {
    const [username,setUsername]=useState('')
    const [password,setPassword]=useState('')
    const {setUser} = useContext(UserContext)
    const handler=(e)=>{
        e.preventDefault()
        setUser({username,password})
    }
    return (
        <div>
            <h2>Login</h2>
            <label htmlFor="input">Username: </label>
            <input type="text" placeholder='username'
            value={username}
            onChange={(e)=>setUsername(e.target.value)}/>
            {" "}
            <label htmlFor="input type=[text]">Password: </label>
            <input type="text" placeholder='password'
            value={password}
            onChange={(e)=>setPassword(e.target.value)}/>
            <button onClick={handler}>Submit</button>
        </div>
    )
}

export default Login
