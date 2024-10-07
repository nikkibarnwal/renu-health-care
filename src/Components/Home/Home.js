import React from "react";
import { useState,useEffect } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React, { useState, useEffect } from 'react';

const Home = () => {

  {/*Carousel Images and Contents */}
  const slides = [
    {
      img: "./HomePageIMGs/Carousel/Screenshot 2024-10-06 112119.png",
      heading: 'Support Our Cause',
      para: 'Your contribution can change lives. Donate now to support our healthcare and education initiatives.', 
      button: 'Donate Now',
    },
    {
      img: "./HomePageIMGs/Carousel/Screenshot 2024-10-06 112433.png",
      heading: 'Become an Intern',
      para: 'Join our team and make an impact through healthcare or education programs.',
      button: 'Apply Now',
    },
    {
      img: "./HomePageIMGs/Carousel/Screenshot 2024-10-06 112353.png",
      heading: 'Join as a Volunteer',
      para: 'Contribute your time and skills to support our healthcare and education programs. Be a part of positive change today!',
      button: 'Be a Volunteer',
    },
  ];
  const [currentSlide, setCurrentSlide] = useState(0);

  // Function to move to the next slide
  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  // Automatic slide transition
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
      nextSlide();
    }, 3000); // Slide every 3 seconds
    return () => clearInterval(interval);
  }, []);
  
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [images.length]);

  return (
  <div>
    {/* Carusel */}
    <div className="relative w-full max-w-[1240px] h-[320px] overflow-visible mx-auto flex justify-center">
      {/* Loop through slides */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            index === currentSlide ? "opacity-100" : "opacity-0"
          }`}
        >
          {/* Background Image */}
          <img
            src={slide.img}
            alt={`Slide ${index + 1}`}
            className="w-full h-full object-cover rounded-lg"
          />
          {/* Overlay with Gradient and Text */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/15 to-transparent flex items-center px-5 py-5 md:px-8 lg:px-12 gap-4 lg:gap-5 rounded-xl">
            <div className="text-left">
              <h1 className="text-white font-semibold mb-2 text-3xl md:text-4xl lg:text-5xl">
                {slide.heading}
              </h1>
              <p className="text-white mb-4 opacity-80 max-w-xs max-w-md">
                {slide.para}
              </p>
              <button className="bg-white text-black px-4 py-2 rounded-xl text-sm md:text-base">
                {slide.button}
              </button>
            </div>
          </div>
        </div>
      ))}
    </div> 

    {/*Event Section */}
    <section className="bg-white py-4 px-12">
      <div className="max-w-[1440px] container mx-auto">
        {/* Main Section with Image and Content */}
        <div className="flex flex-col md:flex-row items-center mb-12 gap-8 ">
          {/* Image on the Left */}
          <div className="w-full md:w-1/2 mb-6 md:mb-0">
            <img 
              src=".\HomePageIMGS\cloth-distribution-shuddhi-ngo-india-clidren-women-environment_orig.png" 
              alt="Impactful Programs" 
              className="w-full h-auto object-cover rounded-lg"
            />
          </div>
          {/* Content on the Right */}
          <div className="w-full md:w-1/2 md:pl-4">
            <h2 className="text-3xl font-bold mb-4">Our Impactful Programs & Events</h2>
            <p className="text-gray-600 mb-6 text-justify">
              Join RenuHealthcare in making a difference through healthcare camps, community outreach, and internship opportunities. Be part of the change that uplifts lives and strengthens communities.
            </p>
            {/* Two Sub-Sections */}
            <div className="space-y-8">
              {/* First Sub-Section */}
              <div className="flex flex-row md:flex-row items-start gap-4">
                <img 
                  src=".\HomePageIMGS\d00d765b65.png" 
                  alt="Health & Wellness Camps" 
                  className="w-[100px] md:w-[150px] h-[120px] object-cover rounded-lg"
                />
                <div className="flex-1">
                  <h3 className="text-xl font-bold mb-2">Health & Wellness Camps</h3>
                  <p className="text-gray-600 text-justify">
                    These camps are designed to promote preventive care and raise awareness about common health issues.
                  </p>
                </div>
              </div>

              {/* Second Sub-Section */}
              <div className="flex flex-row md:flex-row items-start gap-4">
                <img 
                  src=".\HomePageIMGS\840600-39889-mxxltjjonz-1497420426.png" 
                  alt="Community Health Awareness Drives" 
                  className="w-[100px] md:w-[150px] h-[120px] object-cover rounded-lg"
                />
                <div className="flex-1">
                  <h3 className="text-xl font-bold mb-2">Community Health Awareness Drives</h3>
                  <p className="text-gray-600 text-justify">
                    Through our awareness drives, we educate communities on topics such as hygiene, nutrition, mental health, and chronic disease management.
                  </p>
                </div>
              </div>
            </div>
            <button className="bg-green-800 text-white px-4 py-2.5 rounded-lg mt-8">Explore More</button>
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
      </div>
    </section>

    {/*FAQ Section */}
    <section className="bg-white py-4 px-12">
      <div className="max-w-[1440px] container mx-auto">
        <div className="text-center mb-8">
          <h3 className="text-3xl font-bold mb-4">FAQ</h3>
          <p className="text-gray-600">
            Your questions answered! Explore how RenuHealthcare is making a difference in healthcare, community service, and internship opportunities.
          </p>
        </div>

        <div className="flex flex-col md:flex-row items-start md:items-center gap-10">
          {/* Image */}
          <div className="w-full md:w-1/2 mb-6 md:mb-0">
            <img 
              src=".\HomePageIMGS\WhatsApp Image 2024-09-26 at 20.21.23_dc4ff739 1.png" 
              alt="FAQ-img" 
              className="w-full h-auto object-cover rounded-lg"
            />
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

          {/* FAQ Content */}
          <div className="w-full md:w-1/2 space-y-6">
            <div>
              <h4 className="text-xl font-semibold mb-2">1. What services does RenuHealthcare provide?</h4>
              <p className="text-gray-600 text-justify">
                A: RenuHealthcare focuses on offering accessible healthcare services, conducting community health outreach programs, and providing hands-on internship experiences for students and young professionals.
              </p>
            </div>

            <div>
              <h4 className="text-xl font-semibold mb-2">2. Does RenuHealthcare offer internship opportunities?</h4>
              <p className="text-gray-600 text-justify">
                A: Yes! We offer internships in various sectors including healthcare services, project management, and social work. These internships are designed to provide practical experience and personal growth.
              </p>
            </div>

            <div>
              <h4 className="text-xl font-semibold mb-2">3. How can I get involved in the social activities conducted by RenuHealthcare?</h4>
              <p className="text-gray-600 text-justify">
                A: You can participate by volunteering in our healthcare camps, community clean-up drives, and educational programs. Visit our 'Get involved' page to learn more about upcoming activities.
              </p>
            </div>
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
      </div>
    </section>
  </div>
  )
      </section>
    </div>
  );
};

export default HomePage;
