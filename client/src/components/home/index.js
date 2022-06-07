import React from 'react'
import Spline from '@splinetool/react-spline';
import "./style.css";
import MyVideo from "./cube animation0001-0060.mov";
export default function Home() {
  return ( 
  <div className='home'>
   
      <div className='titles'> 
        <h1>Xtrude.</h1> 
        <h2>Make your own path</h2> 
      </div>
   
      <div className='background'>
        <Spline scene = "https://prod.spline.design/9sej75N9LHSxJUGo/scene.splinecode" / >
      </div> 
    </div>
    

  )
}