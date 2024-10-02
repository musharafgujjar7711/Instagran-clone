import React, { useRef } from 'react';

function Stories() {
  const scrollRef = useRef(null);

  const handleTouchStart = (e) => {
    const touchStartX = e.touches[0].clientX;
    scrollRef.current.setAttribute('data-touch-start', touchStartX);
  };

  const handleTouchMove = (e) => {
    const touchStartX = parseInt(scrollRef.current.getAttribute('data-touch-start'), 10);
    const touchCurrentX = e.touches[0].clientX;
    const touchDiff = touchStartX - touchCurrentX;

    scrollRef.current.scrollLeft += touchDiff;
    scrollRef.current.setAttribute('data-touch-start', touchCurrentX);
  };

  return (
    <div
      ref={scrollRef}
      className='flex overflow-hidden p-2 md:gap-11 '
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      style={{ touchAction: 'pan-y' }} // Prevent vertical scrolling
    >
      {/* Example Story Item */}
      <div className='flex-shrink-0 mr-2'>
        <img
          src="https://img.freepik.com/premium-vector/instagram-vector-logo-icon-social-media-logotype_901408-390.jpg"
          className='rounded-full w-16 h-16'
          alt="Story"
        />
      </div>
      {/* Add more story items as needed */}
      <div className='flex-shrink-0 mr-2'>
        <img
          src="https://img.freepik.com/premium-vector/instagram-vector-logo-icon-social-media-logotype_901408-390.jpg"
          className='rounded-full w-16 h-16'
          alt="Story"
        />
      </div>
      <div className='flex-shrink-0 mr-2'>
        <img
          src="https://img.freepik.com/premium-vector/instagram-vector-logo-icon-social-media-logotype_901408-390.jpg"
          className='rounded-full w-16 h-16'
          alt="Story"
        />
      </div>
      <div className='flex-shrink-0 mr-2'>
        <img
          src="https://img.freepik.com/premium-vector/instagram-vector-logo-icon-social-media-logotype_901408-390.jpg"
          className='rounded-full w-16 h-16'
          alt="Story"
        />
      </div>
      <div className='flex-shrink-0 mr-2'>
        <img
          src="https://img.freepik.com/premium-vector/instagram-vector-logo-icon-social-media-logotype_901408-390.jpg"
          className='rounded-full w-16 h-16'
          alt="Story"
        />
      </div>
      <div className='flex-shrink-0 mr-2'>
        <img
          src="https://img.freepik.com/premium-vector/instagram-vector-logo-icon-social-media-logotype_901408-390.jpg"
          className='rounded-full w-16 h-16'
          alt="Story"
        />
      </div>
      <div className='flex-shrink-0 mr-2'>
        <img
          src="https://img.freepik.com/premium-vector/instagram-vector-logo-icon-social-media-logotype_901408-390.jpg"
          className='rounded-full w-16 h-16'
          alt="Story"
        />
      </div>
      <div className='flex-shrink-0 mr-2'>
        <img
          src="https://img.freepik.com/premium-vector/instagram-vector-logo-icon-social-media-logotype_901408-390.jpg"
          className='rounded-full w-16 h-16'
          alt="Story"
        />
      </div>
      <div className='flex-shrink-0 mr-2'>
        <img
          src="https://img.freepik.com/premium-vector/instagram-vector-logo-icon-social-media-logotype_901408-390.jpg"
          className='rounded-full w-16 h-16'
          alt="Story"
        />
      </div>
      {/* Add more story items as needed */}
    </div>
  );
}

export default Stories;

