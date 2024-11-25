import React, { useState } from 'react'
import {useNavigate,Link} from "react-router-dom"
import {login as authlogin} from '../store/authSlice'
import Logo from './Logo'
import authService from '../appwrite/auth'
import {useDispatch} from "react-redux"
import {useForm} from 'react-hook-form'
import Button from './Botton'
import Input from './Input'
function Login() {
    const [Error,setError]=useState()
    const navigate=useNavigate()
    const dispatch=useDispatch()
    const {register,handleSubmit}=useForm()
    const login=async(data)=>{
        setError('')
        try {
            const session= await authService.login(data)
            if(session){
                const userData=await authService.getCurrentUser()
                if (userData){
                    dispatch(authlogin(userData))
                    navigate('/')
                }
            }
        } catch (error) {
            setError(error.message)
        }
    }
    return (
        <div className='flex items-center justify-center w-full'>
            <div className='mx-auto w-full max-w-lg bg-gray-100 rounded-xl p-10 border-black/10'>
                <div className="mb-2 flex justify-center">
                    <span className='inline-block w-full max-w-[100px]'>
                        <Logo/>
                    </span>
                </div>
                <h2 className='text-center text-2xl font-bold leading-tight'>Sing in to your account</h2>
                <p className='mt-2 text-center text-base text-black/60'>
                Don&apos;t have any account?&nbsp;
                <Link to='/signup' 
                className='font-meduim text-primary transition-all duration-200 hover:underline'
                >
                Sign Up
                </Link>
                </p>
                {!Error && <p className='text-red-600 mt-8 text-center'>{Error}</p>}
                <form 
                autocomplete="off" 
                onSubmit={handleSubmit(login)}
                className='mt-8'
                >
                    <div className="space-y-5">
                        <Input 
                        label="Email"
                        placeholder="Enter your email..."
                        type="email"
                        {...register("email",{
                            required:true,
                            validate:{
                                matchPatern:(value)=>/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(value) || "Email address must be a valid address"
                            }
                        })}
                        />
                    </div>
                    <div className="space-y-5">
                        <Input 
                        label="Password"
                        placeholder="Enter your Password..."
                        type="password"
                        {...register("password",{
                            required:true,
                            validate:{
                                matchPatern:(value)=>/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/.test(value) || "Password must be valid"}
                        })}
                        />
                    </div>
                    <Button
                    type='submit'
                    classname='w-full mt-8 hover:bg-blue-700'
                    >Sign in</Button>
                </form>
            </div>
        </div>
    )
}

export default Login
