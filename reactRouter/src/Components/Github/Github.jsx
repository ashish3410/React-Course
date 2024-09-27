import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'

function Github() {
    const data=useLoaderData()
    // const [data,setData]=useState([])
    //     useEffect(()=>{
    //     fetch("https:/api.github.com/users/ashish3410")
    //     .then((result) => (result.json()))
    //     .then((data) =>{
    //         console.log(data.username)
    //         setData(data)
    //     })
    // },[])
    return (
        <div className= " flex justify-center text-center m-4 rounded bg-gray-300 text-white p-4 text-3xl">
            <img src={data.avatar_url} alt="userImage" className="w-80 rounded-full" />
            <div className='m-20 text-left text-orange-700 font-bold'>
            <h3>Username: {data.name.toUpperCase()}</h3>
            <h3>Followers: {data.followers}</h3>
            <h3>Repositories: {data.public_repos}</h3>
            </div>
        </div>
    )
}

export default Github

export const useGithubInfo=async()=>{
    const response=await fetch("https://api.github.com/users/ashish3410")
    return response.json()
}
