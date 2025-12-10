 import React from 'react'
import { Link, Outlet } from 'react-router-dom'

 
 const product = () => {
   return (
     <div>
       <div className='flex justify-center gap-20 p-10 font-bold text-3xl'>
         <Link to='/product/men'> Men</Link>
         <Link to='/product/womens'>Women</Link>
        </div>
       

       <Outlet/>
     </div>
   )
 }
 
 export default product
 