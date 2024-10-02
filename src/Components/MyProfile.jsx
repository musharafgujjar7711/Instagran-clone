import React from 'react';
import { Link } from 'react-router-dom';

function MyProfile() {
  return (
    <div className='h-[calc(110vh-6.66rem)] overflow-y-auto overflow-x-hidden w-full flex flex-col'>
      
      <div className='flex items-center p-4 border-b'>
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyfcQjOe2FX13CzKPmIKdOkzSsFuzU6G5mWA&s"
          alt="Profile"
          className='rounded-full w-32 h-32'
        />
        <div className='flex flex-col ml-4'>
          <h1 className='text-2xl font-bold'>Imran khan</h1>
          <div className='flex space-x-4 mt-2'>
            <span className='font-semibold'>15.3k post</span>
            <span className='font-semibold'>9.7M Followers</span>
            <span className='font-semibold'>1 Following</span>
          </div>
          <Link to="/edit-profile">
            <button className='mt-2 bg-blue-500 text-white py-1 px-4 rounded'>
              Edit Profile
            </button>
          </Link>
        </div>
      </div>

     
      <div className='p-4'>
        <p className='text-gray-700'>Chairman pakistan Tehrekk insaf (@PTIOfficial) &Formar primemister of pakistan</p>
      </div>

      
      <div className='mt-4'>
        <nav className='flex space-x-4'>
          <Link to="/my-posts" className='flex-1 py-2 text-center border-b-2 border-blue-500 font-semibold'>Posts</Link>
          <Link to="/igtv" className='flex-1 py-2 text-center hover:border-b-2 hover:border-gray-300'>IGTV</Link>
          <Link to="/saved" className='flex-1 py-2 text-center hover:border-b-2 hover:border-gray-300'>Saved</Link>
        </nav>
      </div>

      
      <div className='grid grid-cols-2 md:grid-cols-3 gap-4 p-4'>
        {Array.from({ length: 9 }).map((_, index) => (
          <div key={index} className='relative overflow-hidden rounded-lg'>
            <img
              src={`https://via.placeholder.com/300?text=Post+${index + 1}`}
              alt={`Post ${index + 1}`}
              className='w-full h-full object-cover'
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default MyProfile;
