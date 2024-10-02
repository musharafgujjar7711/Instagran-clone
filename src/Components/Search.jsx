import React from 'react'
import { FaArrowLeft } from 'react-icons/fa'
import { LuSend } from 'react-icons/lu'

function Search() {
  return (
    <div className='  h-[calc(110vh-6.66rem)] overflow-y-auto overflow-x-hidden w-full '>
       <div className=' flex flex-col'>
        <div className='md:hidden flex items-center justify-between p-2 '>
        <FaArrowLeft size={30}/>
        <input type="text" className='p-2 rounded-full w-[200px] border outline-none ' placeholder='search for someone' />
        <LuSend size={30} className='text-blue-500'/>
        </div>
        </div>
       </div>
   
  )
}

export default Search