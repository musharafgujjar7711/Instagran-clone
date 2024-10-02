import React from 'react'
import { FaHeart, FaRegComment } from 'react-icons/fa'
import { HiOutlineDotsVertical } from 'react-icons/hi'
import { LuSend } from 'react-icons/lu'
import { RiSaveLine } from 'react-icons/ri'

function Postcomnt() {
    return (
        <div>

            <div className='post mt-3 md:w-[1000px]'>
                <div className=' name flex items-center justify-between p-2 '>
                    <div className=' flex items-center gap-3 p-'>
                        <img src="https://upload.wikimedia.org/wikipedia/en/thumb/0/06/Pakistan_Tehreek-e-Insaf_logo.svg/1200px-Pakistan_Tehreek-e-Insaf_logo.svg.png" className=' rounded-full w-10 h-10' alt="" />
                       <ul className=' flex flex-col'>
                       <h1 className=' capitalize font-bold'>pti official</h1>
                       <p> suggestion for you</p>
                       </ul>
                    </div>
                    <div className=' flex items-center gap-3'>
                        <p className=' bg-gray-300 rounded-md p-2 hover:bg-gray-400 duration-300'>follow</p>
                        <HiOutlineDotsVertical />
                    </div>
                </div>
                <div className=' mt-4'>
                    <img src="https://media.tehrantimes.com/d/t/2022/04/03/4/4108034.jpg" className=' rounded-md' alt="" />

                </div>


               <div className=' flex flex-col p-3 '>
               <div className=' like mt-1 flex items-center justify-between '>
                    <div className=' flex items-center gap-3'>
                        <div className='flex items-center gap-1'>
                            <FaHeart className=' text-rose-600' size={20} />
                            <p>11.6M</p>
                        </div>
                        <div className='flex items-center gap-1'>
                            <FaRegComment className=' text-rose-600' size={20} />
                            <p>11.6K</p>
                        </div>
                        <div className='flex items-center gap-1'>
                            <LuSend className=' text-black' size={0} />

                        </div>
                    </div>
                    <div>
                        <RiSaveLine size={30} />
                    </div>
                </div>
           
           <div>
          <p>آپ ہارتےتب ہیں جب آپ ہار مان جاتے ہیں</p>
          <p>#imrankhan #pti</p>
           </div>
           <div className=' mt-1'>
          <p>2 days ago</p>
         
           </div>

               </div>
                
            </div>

        </div>
    )
}

export default Postcomnt