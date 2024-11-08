import React, { useEffect, useState } from 'react'
import appwriteService from '../appwrite/config'
import Container from '../components/container/Container'
import PostCard from '../components/PostCard'
function AllPost() {
    const [posts,setPosts]=useState([])
    useEffect(()=>{
        appwriteService.getPosts().then((post)=>{
            if(post){
                setPosts(post.documents)
            }
        })
    },[])
    return (
        <div className="h-4/5 w-full py-8">
            <Container>
                <div>
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

export default AllPost
