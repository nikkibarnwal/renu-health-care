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
            <h1 className="text-gray-900" style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 800, fontSize: '42px', lineHeight: '50.4px' }}>
              Empowering Communities <br />
              <span style={{ fontWeight: 800 }}>Through Health & Social Care</span>
            </h1>
            <p className="text-gray-700" style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 400, fontSize: '18px', lineHeight: '28px' }}>
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
      <section className="bg-white py-16">
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
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-snug text-gray-900" style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 800 }}>
              About us: Education and Growth
            </h2>
            <p className="text-gray-700" style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 400, fontSize: '18px', lineHeight: '28px' }}>
              Our mission is to empower underprivileged communities through education and sustainable development. We believe that every individual deserves access to quality education, which serves as a powerful tool for personal and community transformation. By providing resources, training, and support, we aim to cultivate skills and knowledge that enable individuals to improve their living conditions and achieve their full potential. Through sustainable practices, we strive to create lasting change that benefits not just individuals, but entire communities.
            </p>
            <br />
            <a href="#" className="text-green-600 hover:underline text-base md:text-lg font-medium">
              Learn more &gt;
            </a>
          </div>

        </div>
      </section>

{/*Carousel */}
      <div>
      <div className="relative w-full max-w-[1240px] h-[320px]  overflow-hidden mx-auto">
  
      <div
        className="flex transition-transform duration-1000 ease-linear"
        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
      >
        {/* Loop through slides */}
        {slides.map((slide, index) => (
          <div
            key={index}
            className="min-w-full h-[320px] flex-shrink-0 relative mr-[10px]"
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
    </div>



{/* Event Section */}
<section className="bg-white py-6 px-4 md:px-12">
  <div className="max-w-[1440px] h-[592px] md:h-[592px] pt-[40px] md:pt-[40px] pr-4 md:pr-[100px] pb-8 pl-4 md:pl-[100px] gap-[50px] container mx-auto">
    {/* Main Section with Image and Content */}
    <div className="flex flex-col md:flex-row items-center mb-12 gap-8">
      {/* Image on the Left */}
      <div className="w-full  md:w-1/2 mb-6 md:mb-0 flex justify-center">
        <img 
          src=".\HomePageIMGS\cloth-distribution-shuddhi-ngo-india-clidren-women-environment_orig.png" 
          alt="Impactful Programs" 
          className="w-[595px] h-[512px]  min-w-[328px] object-cover rounded-[12px] shadow-lg" 
        />
      </div>
      {/* Content on the Right */}
      <div className="w-[595px] md:w-1/2  h-[512px] spacing-y-1.5 md:pl-8">
        <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold leading-snug text-gray-900" style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 800 }}>
          Our Impactful Programs & Events
        </h2>
        <p className="font-poppins text-base md:text-lg leading-6 md:leading-8 text-black mb-6">
          Join RenuHealthcare in making a difference through healthcare camps, community outreach, and internship opportunities. Be part of the change that uplifts lives and strengthens communities.
        </p>
        {/* Two Sub-Sections */}
        <div className="space-y-2 ">
          {/* First Sub-Section */}
          <div className="flex items-start gap-4">
            <img 
              src=".\HomePageIMGS\d00d765b65.png" 
              alt="Health & Wellness Camps" 
              className="w-[86px] h-[86px] object-cover rounded-lg"
            />
            <div className="flex-1">
              <h4 className="font-poppins text-lg md:text-xl font-bold mb-2">Health & Wellness Camps</h4>
              <p className="font-poppins text-base text-black text-justify">
                These camps are designed to promote preventive care and raise awareness about common health issues.
              </p>
            </div>
          </div>
          {/* Second Sub-Section */}
          <div className="flex items-start gap-4">
            <img 
              src=".\HomePageIMGS\840600-39889-mxxltjjonz-1497420426.png" 
              alt="Community Health Awareness Drives" 
              className="w-[86px] h-[86px] object-cover rounded-lg"
            />
            <div className="flex-1">
              <h4 className="font-poppins text-lg md:text-xl font-bold mb-2">Community Health Awareness Drives</h4>
              <p className="font-poppins text-base text-black text-justify">
                Through our awareness drives, we educate communities on topics such as hygiene, nutrition, mental health, and chronic disease management.
              </p>
            </div>
          </div>
        </div>
        <button className="bg-green-800 text-white px-4 py-2.5 rounded-lg mt-8">Explore More</button>
      </div>
    </div>
  </div>
</section>


{/* FAQ Section */}
<section className="bg-white pt-4 pb-4 px-4 md:px-12">
  <div className="max-w-[1440px] h-auto pt-[20px] md:pt-[40px] md:pr-[100px] pb-[40px] pl-4 md:pl-[100px] gap-[30px] container mx-auto">
    {/* Heading Section */}
    <div className="text-center mb-8">
      <h3 className="font-poppins text-3xl font-bold mb-4">FAQ</h3>
      <p className="font-poppins text-gray-800">
        Your questions answered! Explore how RenuHealthcare is making a difference in healthcare, community service, and internship opportunities.
      </p>
    </div>

    {/* Image and FAQ Content Section */}
    <div className="flex flex-col md:flex-row items-start gap-8">
      {/* Image Section */}
      <div className="w-full md:w-[528px] h-auto">
        <img
          src=".\HomePageIMGS\WhatsApp Image 2024-09-26 at 20.21.23_dc4ff739 1.png"
          alt="FAQ-img"
          className="w-[595px] h-[390px] object-cover rounded-[12px]"
        />
      </div>

      {/* FAQ Content */}
      <div className="w-full md:w-auto max-w-[595px] h-auto space-y-6">
        <div>
          <h4 className="font-poppins text-xl font-semibold mb-2">1. What services does RenuHealthcare provide?</h4>
          <p className="font-poppins text-base text-black text-justify">
            A: RenuHealthcare focuses on offering accessible healthcare services, conducting community health outreach programs, and providing hands-on internship experiences for students and young professionals.
          </p>
        </div>

        <div>
          <h4 className="font-poppins text-xl font-semibold mb-2">2. Does RenuHealthcare offer internship opportunities?</h4>
          <p className="font-poppins text-base text-black text-justify">
            A: Yes! We offer internships in various sectors including healthcare services, project management, and social work. These internships are designed to provide practical experience and personal growth.
          </p>
        </div>

        <div>
          <h4 className="font-poppins text-xl font-semibold mb-2">3. How can I get involved in the social activities conducted by RenuHealthcare?</h4>
          <p className="font-poppins text-base text-black text-justify">
            A: You can participate by volunteering in our healthcare camps, community clean-up drives, and educational programs. Visit our 'Get involved' page to learn more about upcoming activities.
          </p>
        </div>
      </div>
    </div>
  </div>
</section>

    <section className="bg-green-700 py-12">
      <div className="container mx-auto text-center text-white px-6">
        {/* Main Heading */}
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          We’re Here to Help
        </h2>
        {/* Subheading */}
        <p className="text-lg mb-8">
          Have questions or want to get involved? Reach out to us!
        </p>
        {/* Contact Button */}
        <button
          className="bg-white text-green-700 font-semibold py-2 px-6 rounded-full shadow-lg hover:bg-gray-200 transition duration-300"
        >
          Contact Us
        </button>

        {/* Contact Details */}
        <div className="mt-10 flex flex-col md:flex-row justify-center items-center space-y-6 md:space-y-0 md:space-x-12">
          {/* Address */}
          <div className="flex items-center space-x-2">
            <i className="fas fa-map-marker-alt"></i>
            <p>Gurugram, Haryana - 122503, India</p>
          </div>
          {/* Email */}
          <div className="flex items-center space-x-2">
            <i className="fas fa-envelope"></i>
            <p>info@admedusociety.org</p>
          </div>
          {/* Phone */}
          <div className="flex items-center space-x-2">
            <i className="fas fa-phone"></i>
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
