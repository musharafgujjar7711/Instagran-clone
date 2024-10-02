import React from 'react';

// Sample data for shorts
const shortsData = [
  { id: 1, title: 'Short Video 1', src: 'https://via.placeholder.com/150' },  
  { id: 2, title: 'Short Video 2', src: 'https://via.placeholder.com/150' },
  { id: 3, title: 'Short Video 3', src: 'https://via.placeholder.com/150' },
  // Add more items as needed
];

function Shorts() {
  return (
    <div className='h-[calc(110vh-6.66rem)] overflow-y-auto overflow-x-hidden w-full p-4'>
      <h1 className='text-2xl font-bold mb-4'>Shorts</h1>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
        {shortsData.map(short => (
          <div key={short.id} className='relative w-full h-0 pb-[100%] overflow-hidden rounded-lg bg-gray-200'>
            <iframe
              title={short.title}
              src={short.src}
              className='absolute top-0 left-0 w-full h-full rounded-lg'
              frameBorder='0'
              allowFullScreen
              style={{ pointerEvents: 'none' }} // Disable interaction for better UX
            ></iframe>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Shorts;

