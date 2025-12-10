import { Link } from 'react-router-dom'
import React from 'react'

const Navbar = () => {
  return (
    <div className='nav' >
       <h2>Sheriyans</h2>
      <div>
         <Link to='/'>Home</Link>
         <Link to='/Contact'>Contact</Link>
         <Link to='/About'>About</Link>
       </div>
      
    </div>
  )
}

export default Navbar
