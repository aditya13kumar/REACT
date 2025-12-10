import React from 'react'
import { useNavigate } from "react-router";
const Nav2 = () => {

    const navigate = useNavigate()
  return (
    <div className='bg-cyan-950 flex justify-center gap-20'>
      <button 
      onClick={()=>{navigate('/')}} 
      className='bg-amber-600 px-2 py-1 font-medium m-1 rounded'>Back to Home</button>


      <button 
      onClick={()=>{navigate(-1)}}
      className='bg-red-400 px-2 py-1 font-medium m-1 rounded'>Back</button>


      <button 
      onClick={()=>{navigate(+1)}}
      className='bg-green-400 px-2 py-1 font-medium m-1 rounded'>next</button>
    </div>
  )
}

export default Nav2
