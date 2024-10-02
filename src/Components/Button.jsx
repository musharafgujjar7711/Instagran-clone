import React from 'react';
import { BiHome, BiSearch, BiVideo } from 'react-icons/bi';
import { CgProfile } from 'react-icons/cg';
import { ImProfile } from 'react-icons/im';
import { SiYoutubeshorts } from 'react-icons/si';
import { Link } from 'react-router-dom';


function Button() {
  return (
    <div className=' md:flex md:items-center  md:justify-between p-3 border'>
        <h1 className=' hidden md:block text-black font-bold text-2xl'>
          instagram
        </h1>
      <div className=' hidden md:block'>
       <input type="text" placeholder='search for you' className=' mr-36 p-2  w-[370px] outline-none border rounded-full'/>
      </div>
      <div>
        <ul className='flex items-center justify-between text-black md:gap-7 md:p-4 '>
        <li>
          <Link to='/'>
            <BiHome size={30} />
          </Link>
        </li>
        <li>
          <Link to='/video/search'>
            <BiSearch size={30} />
          </Link>
        </li>
        <li>
          <Link to='/video/shorts/'>
          <SiYoutubeshorts size={30} />
          </Link>
        </li>
        <li>
          <Link to='/video/profile/'>
          <CgProfile size={30} />
          </Link>
        </li>
        
      </ul>
      </div>
    </div>
  );
}

export default Button;

