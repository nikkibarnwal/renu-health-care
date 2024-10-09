// import React from 'react';
// import { BarLoader } from 'react-spinners';

// const Loading = () => {
//   return (
//     <div className='flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-blue-300 via-purple-400 to-pink-500 p-6'>
//       <div className='relative mb-8 flex flex-col items-center'>
//         {/* Clean, simple logo display */}
//         <img
//           src='./logo.png'
//           className='h-40 w-40 rounded-full border-4 border-white shadow-lg object-cover'
//           alt='logo'
//         />
// =      </div>

//       {/* Main heading */}
//       <h1 className='text-4xl font-extrabold text-white mb-4 drop-shadow-md'>
//         Renu Sharma Healthcare & Education Foundation
//       </h1>

//       {/* Subtext */}
//       <p className='text-xl text-white mb-6 opacity-90 tracking-wide'>
//         A New Vision for the Nation
//       </p>

//       {/* Bar loader */}
//       <BarLoader
//         color="#ffffff"
//         width={300}
//         height={5}
//         className='mx-auto shadow-md'
//       />
//     </div>
//   );
// };

// export default Loading;

import React from "react";
import { BarLoader, BeatLoader } from "react-spinners";
// import { BeatLoader} from 'react-spinners';

const Loading = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r p-6">
      <div className="relative mb-8 flex flex-col items-center">
        {/* Responsive Logo */}
        <img
          src="./logo.png"
          className="h-28 w-28 sm:h-32 sm:w-32 md:h-40 md:w-40 object-cover"
          alt="logo"
        />
      </div>

      {/* Main heading with responsive text size */}
      <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-black drop-shadow-md text-center">
        Renu Sharma Healthcare & Education Foundation
      </h1>

      {/* Subtext with responsive text size */}
      <p className="text-lg sm:text-xl md:text-2xl text-black mb-6 opacity-90 tracking-wide text-center">
        A New Vision of Nation
      </p>

      {/* Bar loader */}
      <BeatLoader color="#28A745" />
    </div>
  );
};

export default Loading;
