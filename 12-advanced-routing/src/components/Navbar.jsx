import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='flex py-5 px-8 bg-black-500 font-sans justify-between'>
      <h2 className='font-bold font-mono text-xl'>Sheryians Dresses</h2>
      <div className='flex gap-5'>
        <Link to='/'>Home</Link>
        <Link to='/About'>About</Link>
        <Link to='/Contact'>Contact</Link>
        <Link to='Product'>Product</Link>
      </div>
    </div>
  )
}

export default Navbar
