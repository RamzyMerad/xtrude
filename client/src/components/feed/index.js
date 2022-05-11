import React, { useEffect, useState } from 'react';
import { getPosts } from '../../api';
import socketIOClient from "socket.io-client";
const ENDPOINT = "http://127.0.0.1:2000";

const Feed = () => {
  const [posts, setPosts] = useState([]);


  useEffect(() => {
    const socket = socketIOClient(ENDPOINT);
    socket.on("post", data => {
      getPosts().then(response =>{
      setPosts(response);
      })
    });
   getPosts().then(response =>{
     setPosts(response);
   })
    
  },[]);

  return (
    <div className='feed'>
       {
         posts.map(post=>(
           <p key={post.id}>{post.content}</p>
         ))
       }
    </div>
  );
}

export default Feed;
