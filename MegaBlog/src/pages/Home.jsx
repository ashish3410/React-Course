import React, { useEffect, useState } from 'react'
import Container from '../components/container/Container'
import PostCard from '../components/PostCard'
import appwriteService from '../appwrite/config'
function Home() {
    const [posts,setPosts]=useState([])
    useEffect(()=>{
        appwriteService.getPosts().then((posts)=>{
            if(posts){
                setPosts(posts.documents)
            }
        })
    },[])
    
    if(posts.length ===0){
        return(
            <div className="w-full py-8 mt-4 text-center flex flex-wrap"> 
            <Container>
                <div className="h-screen flex flex-wrap">
                    <div className="p-2 w-full">
                        <h1 className='text-2xl font-bold hover:text-gray-500'>
                            Login to read posts
                        </h1>
                    </div>
                </div>
            </Container>
            </div>
        )
    }
    return (
        <div className="w-full py-8"> 
            <Container>
                <div className="flex flex-wrap">
                        {posts.map((post)=>(
                            <div className="p-2 w-1/4" key={post.$id}>
                                <PostCard post={post}/>
                            </div>
                        ))}
                </div>
            </Container>
            </div>
    )
}

export default Home
