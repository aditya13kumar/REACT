import React from 'react'
import Leftsection from './Leftsection'
import Imagecontainer from './imagecontainer'

const Center = () => {
  return (
    <div className='bg-gray-500 h-[87%] w-full flex gap-10 px-10 py-5'>
      <Leftsection/>
      <Imagecontainer/>
    </div>
  )
}

export default Center
