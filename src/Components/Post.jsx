import React from 'react'
import { BiHeart } from 'react-icons/bi'
import { IoMailOpenOutline } from 'react-icons/io5'
import Stories from '../Post/Stories'
import { HiOutlineDotsVertical } from 'react-icons/hi'
import { FaHeart, FaRegComment } from 'react-icons/fa'
import { LuSend } from 'react-icons/lu'
import { RiSaveLine } from 'react-icons/ri'
import Postcomnt from '../Post/Postcomnt'

function Post() {
  return (
    <div>
       <div className=' md:hidden flex items-center  justify-between p-2 capitalize border font-bold text-2xl'>
    instagram
    <div className=' md:hidden flex items-center gap-4'>
    <BiHeart className='text-rose-500' size={30}/>
   <IoMailOpenOutline size={30}/>
    </div>
    </div>
   
    <div className='  h-[calc(100vh-6.66rem)] overflow-y-auto overflow-x-hidden md:w-[1200px] flex flex-col md:ml-10  p-4'>
   
    <div className=' flex items-center  '>
      <Stories/>
    </div>
       <div>
        <Postcomnt/>
        <Postcomnt/>
        <Postcomnt/>
       </div>
  </div>
   
  </div>
  
  )
}

export default Post