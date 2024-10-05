import React, { useState, useEffect } from 'react';

const HomePage = () => {
  const images = [
    '/HomepageImages/Corousel/Home9.jpg',
    '/HomepageImages/Corousel/Home10.jpg',
    '/HomepageImages/Corousel/Home11.jpg',
    '/HomepageImages/Corousel/Home12.png'
  ].filter(image => image);

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="home-page">
      {/* Empowering Communities Section */}
      <section className="bg-gray-100 py-16">
        <div className="container mx-auto px-6 md:px-16 lg:px-24 grid grid-cols-1 md:grid-cols-2 gap-12">
          
          {/* Left Side: Text Content */}
          <div className="flex flex-col justify-center space-y-6">
            <h1 className="text-gray-900" style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 800, fontSize: '42px', lineHeight: '50.4px' }}>
              Empowering Communities <br />
              <span style={{ fontWeight: 800 }}>Through Health & Social Care</span>
            </h1>
            <p className="text-gray-700" style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 400, fontSize: '18px', lineHeight: '28px', width: '539px', height: '112px' }}>
              At RenuHealthcare, we provide accessible healthcare, engage in impactful Social work, and offer valuable internship opportunities to build a healthier, stronger future for all.
            </p>
            <button
              className="bg-green-600 text-white text-base md:text-lg font-semibold hover:bg-green-700 transition duration-300"
              style={{
                width: '190px',
                height: '58px',
                borderRadius: '10px',
                paddingTop: '15px',
                paddingRight: '32px',
                paddingBottom: '15px',
                paddingLeft: '32px'
              }}
            >
              Sign Up
            </button>
          </div>

          {/* Right Side: Image Carousel */}
          <div className="relative h-[400px] overflow-hidden">
            {images.map((image, index) => (
              <img
                key={index}
                src={image}
                alt=""
                className={`rounded-lg shadow-lg object-cover w-full h-full transition-opacity duration-1000 ease-in-out ${index === currentImageIndex ? 'opacity-100' : 'opacity-0 absolute'}`}
                style={{ position: 'absolute', top: 0, left: 0 }}
              />
            ))}
          </div>
        </div>
      </section>
      <br />
      {/* About Us Section */}
      <section className="bg-gray-100 py-16">
        <div className="container mx-auto px-6 md:px-16 lg:px-24 grid grid-cols-1 md:grid-cols-2 gap-12">

          {/* Left Column: Image */}
          <div>
            <img 
              src="/HomepageImages/Corousel/Home13.png" 
              alt="Education and Growth" 
              className="rounded-lg shadow-lg object-cover w-full h-full" 
            />
          </div>

          {/* Right Column: Text Content */}
          <div className="flex flex-col justify-center space-y-4">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-snug text-gray-900" style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 800, fontSize: '42px', lineHeight: '50.4px' }}>
              About us: Education and Growth
            </h2>
            <p className="text-gray-700" style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 400, fontSize: '18px', lineHeight: '28px', width: '539px', height: '112px' }}>
              Our mission is to empower underprivileged communities through education and sustainable development. We believe that every individual deserves access to quality education, which serves as a powerful tool for personal and community transformation.
            </p>
            <br />
            <a href="#" className="text-green-600 hover:underline text-base md:text-lg font-medium">
              Learn more &gt;
            </a>
          </div>

        </div>
      </section>
    </div>
  );
};

export default HomePage;
