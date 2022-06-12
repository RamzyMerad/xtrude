import React, {
  useEffect,
  useState
} from 'react';
import {createPost, getPosts} from '../../api';
import "./style.scss";
import { useCookies } from "react-cookie";
import socketIOClient from "socket.io-client";
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
const ENDPOINT = "http://127.0.0.1:2000";

const Feed = () => {
  const [posts, setPosts] = useState([]);
  const navigate= useNavigate();
  const [token] = useCookies(['token']);
  
  useEffect(() => {
    const socket = socketIOClient(ENDPOINT);
    socket.on("post", data => {
      getPosts().then(response => {
        setPosts(response);
      })
    });
    getPosts().then(response => {
      setPosts(response);
    })

  }, []);
  if(!token.token) {
    return navigate("/login");
  }

  return (
<div className = 'feed'>

    <div className = 'profil' >
      <div className='backgroundPic'>
        
      </div>
      <div  className='profileImage'>
        <img src="./7ba8ec4a42b529dcbbc695ce0dd07a4a.webp" alt='profile'/>
      </div>
      <div className='profilInfo'>
      <div className='bio'>"The creative adult is the child who survived."</div>
      <div className='follow'>
        <h3>Followers</h3>
        <h3>Follows</h3>
      </div>
      <Link to="/profile"><button>My profile</button></Link>
      </div>
      </div> 
    <div className = 'posts'>
    <Postinput/>
    <div className='publications'>
    {
      posts.map(post => ( 
      <div className = 'post' >
      <p key = {
          post.id
        } > {
          post.content
        } </p>
     </div> 
     ))
    }
    </div>
    </div>
    <div className = 'trends' >
      <h2>Trends for you</h2>
      <div className='trendsTags'>
        <p>#3dAwards</p>
        <p>#PixarFestival</p>
        <p>#ArtistRights</p>
      </div>
      </div> 
      
    </div>

  );
}
const Postinput = ()=>{
  const submitPost =(e)=>{
    e.preventDefault();
    console.log(e.target.postid.value);
    const post ={
      id:Math.round(Math.random()*1000),
      content:e.target.postid.value
    };
    createPost(post);
    e.target.postid.value ="";
  }

  return(
    <div className='postInput'> 
        <form onSubmit={(e)=>submitPost(e)}>
        <input name="postid" placeholder="What's happening?"/>
        <button type='submit'>Submit</button>
        </form>
        <button>Add image</button>
      </div>
  );
}
export default Feed;
