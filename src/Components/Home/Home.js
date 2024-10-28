import React, { useState, useEffect } from "react";
import {
  CiLocationOn,
  CiMail,
  CiMicrophoneOn,
  CiMobile1,
  CiMobile2,
  CiPhone,
} from "react-icons/ci";
import { IoCall } from "react-icons/io5";

const HomePage = () => {
  const images = [
    "/HomepageImages/Corousel/Home9.jpg",
    "/HomepageImages/Corousel/Home10.jpg",
    "/HomepageImages/Corousel/Home11.jpg",
    "/HomepageImages/Corousel/Home12.jpg",
  ].filter((image) => image);

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [images.length]);

  const slides = [
    {
      img: "./HomePageIMGs/Carousel/Screenshot 2024-10-06 112119.png",
      heading: "Support Our Cause",
      para: "Your contribution can change lives. Donate now to support our healthcare and education initiatives.",
      button: "Donate Now",
    },
    {
      img: "./HomePageIMGs/Carousel/Screenshot 2024-10-06 112433.png",
      heading: "Become an Intern",
      para: "Join our team and make an impact through healthcare or education programs.",
      button: "Apply Now",
    },
    {
      img: "./HomePageIMGs/Carousel/Screenshot 2024-10-06 112353.png",
      heading: "Join as a Volunteer",
      para: "Contribute your time and skills to support our healthcare and education programs. Be a part of positive change today!",
      button: "Be a Volunteer",
    },
  ];
  const [currentSlide, setCurrentSlide] = useState(0);

  // Function to move to the next slide
  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  // Automatic slide transition
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 3000); // Slide every 3 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="home-page">
      {/* Empowering Communities Section */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-6 md:px-16 lg:px-24 grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Left Side: Text Content */}
          <div className="flex flex-col justify-center space-y-6">
            <h1
              className="text-black"
              style={{ fontWeight: 700, fontSize: "36px", lineHeight: "52px" }}
            >
              Empowering Communities <br />
              <span style={{ fontWeight: 700, fontSize: "36px" }}>
                Through Health & Social Care
              </span>
            </h1>
            <p
              className="text-gray-800"
              style={{ fontWeight: 550, fontSize: "16px", lineHeight: "20px" }}
            >
              At RenuHealthcare, we provide accessible healthcare, engage in
              impactful Social work, and offer valuable internship opportunities
              to build a healthier, stronger future for all.
            </p>
            <button
              className="bg-blue-500 text-white text-base md:text-lg hover:bg-blue-600 transition duration-300"
              style={{
                width: "140px",
                height: "58px",
                borderRadius: "10px",
                paddingTop: "15px",
                paddingRight: "32px",
                paddingBottom: "15px",
                paddingLeft: "32px",
              }}
            >
              Sign Up
            </button>
          </div>

          {/* Right Side: Image Carousel */}
          <div className="relative h-[400px] overflow-hidden">
            {/* {images.map((image, index) => ( */}
            <img
              src="/HomepageImages/Corousel/Home12.jpg"
              alt=""
              className={`rounded-lg shadow-lg object-cover w-full h-full transition-opacity duration-1000 ease-in-out `}
              style={{ position: "absolute", top: 0, left: 0 }}
            />
            {/* ))} */}
          </div>
        </div>
      </section>
      <br />

      {/* About Us Section */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-6 md:px-16 lg:px-24 grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Left Column: Image */}
          <div>
            <img
              src="/HomepageImages/Corousel/Home13.jpg"
              alt="Education and Growth"
              className="rounded-lg shadow-lg object-cover w-full h-full"
            />
          </div>

          {/* Right Column: Text Content */}
          <div className="flex flex-col justify-center space-y-4">
            <h2
              className="text-3xl md:text-4xl lg:text-5xl font-bold leading-snug text-black"
              style={{ fontWeight: 700, fontSize: "36px" }}
            >
              About us: Education and Growth
            </h2>
            <p
              className="text-gray-800"
              style={{ fontWeight: 550, fontSize: "16px", lineHeight: "20px" }}
            >
              Our mission is to empower underprivileged communities through
              education and sustainable development. We believe that every
              individual deserves access to quality education, which serves as a
              powerful tool for personal and community transformation. By
              providing resources, training, and support, we aim to cultivate
              skills and knowledge that enable individuals to improve their
              living conditions and achieve their full potential. Through
              sustainable practices, we strive to create lasting change that
              benefits not just individuals, but entire communities.
            </p>
            <br />
            <a
              href="#"
              className="text-blue-400 hover:underline text-base md:text-lg font-medium"
            >
              Learn more &gt;
            </a>
          </div>
        </div>
      </section>

      <div>
        {/* Carousel */}
        <div className="relative w-full max-w-[1240px] h-[320px] overflow-hidden mx-auto flex items-center">
          <div
            className="flex flex-row w-full transition-transform duration-1000 ease-in-out"
            style={{ transform: `translateX(-${currentSlide * 100}%)` }}
          >
            {/* Slides */}
            {slides.map((slide, index) => (
              <div key={index} className="min-w-full h-[320px] relative">
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
        </div>

        {/* 3 Dot Navigation placed below the image */}
        <div className="relative mt-6 flex justify-center space-x-2">
          {slides.map((_, index) => (
            <button
              key={index}
              className={`h-3 w-3 rounded-full ${
                currentSlide === index ? "bg-blue-500" : "bg-gray-500"
              }`}
              onClick={() => setCurrentSlide(index)}
            />
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
              <div className="w-full md:w-1/2 md:pl-12">
                <h1
                  className="font-bold"
                  style={{ fontSize: "36px", lineHeight: "52px" }}
                >
                  Empowering Lives
                </h1>
                <p className="text-gray-800 text-lg mt-4 mb-6">
                  At RenuHealthcare, we are dedicated to uplifting communities
                  through various social work and healthcare initiatives.
                  Through our efforts, we provide resources, support, and
                  opportunities to empower individuals and create lasting change
                  in society. Join us in our mission to make a positive impact
                  in the lives of those who need it most.
                </p>
                <a
                  href="#"
                  className="inline-block px-6 py-3 bg-blue-500 text-white font-semibold rounded-md shadow-lg hover:bg-blue-600 transition duration-300"
                >
                  Join Our Cause
                </a>
              </div>
            </div>
          </div>
        </section>
        <section className="bg-blue-500 py-12">
          <div className="container mx-auto text-center text-white px-6">
            {/* Main Heading */}
            <h2 className="text-center text-3xl md:text-4xl font-bold mb-3 leading-[52px] tracking-[0.005em]">
              We’re Here to Help
            </h2>

            {/* Subheading */}
            <p className="text-lg mb-4">
              Have questions or want to get involved? Reach out to us!
            </p>

            {/* Contact Button */}
            <button className="bg-white text-blue-800 font-semibold py-2 px-6 rounded-lg shadow-lg hover:bg-gray-200 transition duration-300">
              Contact Us
            </button>

            {/* Contact Details */}
            <div className="mt-10 flex flex-col md:flex-row justify-center items-center space-y-6 md:space-y-0 md:space-x-12 -ml-6">
              {/* Address */}
              <div className="flex items-center space-x-2">
                <CiLocationOn className="bg-[#D9D9D9] size-7 rounded-full p-1 text-blue-700" />
                <p>Gurugram, Haryana - 122503, India</p>
              </div>
              {/* Email */}
              <div className="flex items-center space-x-2">
                <CiMail className="bg-[#D9D9D9] size-7 rounded-full p-1 text-blue-600" />
                <p>info@admedusociety.org</p>
              </div>
              {/* Phone */}
              <div className="flex items-center space-x-2">
                <IoCall className="bg-[#D9D9D9] size-7 rounded-full p-1 text-blue-600" />
                <p>+91-9671457366</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default HomePage;
