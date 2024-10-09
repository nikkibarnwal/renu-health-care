import React from 'react';
import { BarLoader, BeatLoader } from 'react-spinners';
// import { BeatLoader} from 'react-spinners';


const Loading = () => {
  return (
    <div className='flex flex-col items-center justify-center min-h-screen bg-gradient-to-r p-6'>
    <div className='relative mb-8 flex flex-col items-center'>
      {/* Responsive Logo */}
      <img
        src='./logo.png'
        className='h-28 w-28 sm:h-32 sm:w-32 md:h-40 md:w-40 object-cover'
        alt='logo'
      />
    </div>
  
    {/* Main heading with responsive text size */}
    <h1 className='text-2xl sm:text-3xl md:text-4xl font-bold text-black drop-shadow-md text-center'>
      Renu Sharma Healthcare & Education Foundation
    </h1>
  
    {/* Subtext with responsive text size */}
    <p className='text-lg sm:text-xl md:text-2xl text-black mb-6 opacity-90 tracking-wide text-center'>
      A New Vision of Nation
    </p>
  
    {/* Bar loader */}
    <BeatLoader color='#28A745' />
  </div>
  
  );
};



export default Loading;
