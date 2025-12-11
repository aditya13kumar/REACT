

import { useContext } from 'react'
import Nav2 from './Nav2'
import { themeData } from '../context/ThemeContext'




const Navbar = (props) =>{

  const data =useContext(themeData)
 
  return (
    <div className='Nav'>
      <h2>{data}</h2>
      
      <Nav2 theme={props.Theme}/>
    </div>
  )
}

export default Navbar
