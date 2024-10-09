import React from "react";
import { Link } from "react-router-dom";
import { IoIosArrowForward } from "react-icons/io";

const About = () => {
  return (
    <div className="sm:w-11/12 m-auto">
      {/* Main section */}
      <div className="bg-gray-100 overflow-hidden  ">
        {/* Hero Image Section */}
        <div clasName="mb-4 w-full">
          <h1 className="text-5xl md:text-4xl font-bold text-black bg-gradient-to-r from-green-600 via-teal-600 to-blue-600 bg-clip-text text-corner mb-4  ">
            About Us
          </h1>
        </div>
        <div
          className="mb-4 flex rounded-sm items-center h-52 sm:h-96 md:h-[40rem] justify-center w-full bg-cover bg-center bg-no-repeat "
          style={{
            backgroundImage: `url("/About-img/img1.jpg")`,
          }}
        ></div>

        {/* Content Section */}
        <div id="2" className="lg:px-20 lg:flex my-24 sm:mx-4 overflow-hidden">
          <div className="lg:w-1/2 px-4 mt-6 lg:mt-0">
            <h3 className="text-2xl  md:text-3xl font-bold text-gray-800">
              Welcome To Welfare Organization
              <span> Established Since 2015</span>
            </h3>
            <p className="mt-4 text-md md:text-lg text-black leading-relaxed font-semibold">
              Our mission is to create a world where everyone has access to
              basic human rights, education, healthcare, and opportunities for
              sustainable livelihoods. We envision empowered communities working
              together to overcome poverty, injustice, and environmental
              degradation, fostering a global society built on dignity,
              equality, and compassion.
            </p>
          </div>
          <div className="lg:w-1/2 px-4">
            <img
              className="w-full rounded-lg shadow-lg"
              src="./About-img/img3.jpg"
              alt="About us"
            />
          </div>
        </div>

        {/* Content Section part 2*/}
        <div id="2" className="lg:px-20 lg:flex my-24 sm:mx-4 overflow-hidden">
          <div className="lg:w-1/2 px-4">
            <img
              className="w-full rounded-lg shadow-lg"
              src="./About-img/img2.jpg"
              alt="About us"
            />
          </div>
          <div className="lg:w-1/2 px-4 mt-6 lg:mt-0">
            <h3 className="text-3xl  md:text-4xl font-bold text-black">
              Our Vision
            </h3>
            <p className="mt-4 text-md md:text-lg text-black leading-relaxed font-semibold">
              Our mission is to create a world where everyone has access to
              basic human rights, education, healthcare, and opportunities for
              sustainable livelihoods. We envision empowered communities working
              together to overcome poverty, injustice, and environmental
              degradation, fostering a global society built on dignity,
              equality, and compassion.
            </p>
          </div>
        </div>

        {/* added image with text overlay */}
        <div className="relative mx-3">
          <img
            className="mx-auto rounded-md w-full h-[300px] object-cover"
            src="./About-img/20fe6b303aaaba2c345f3bc1ef88921f.jpeg"
            alt="Responsive Image"
          />

          {/* Black Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent rounded-md"></div>

          {/* Text Content */}
          <div className="absolute inset-0 flex flex-col justify-center text-white px-4 max-w-[90%] sm:max-w-[80%] md:max-w-[60%] lg:max-w-[50%] z-10 overflow-hidden">
            <h1 className="text-base sm:text-lg md:text-2xl font-bold mb-2 leading-snug">
              Join Us
            </h1>
            <p className="text-xs sm:text-sm md:text-base mb-4 leading-relaxed">
              EVERY donation, no matter how modest, has the remarkable power to
              create a ripple effect of change. So, the hesitation to donate,
              even if a small donation, to causes we care about often with the
              feeling that it may not be able to make a meaningful impact is
              incorrect.
            </p>
            <button className="bg-white text-black px-3 py-2 rounded-md text-xs sm:text-sm md:text-base">
              Donate Now
            </button>
          </div>
        </div>

        {/* added image and form section */}

        <div className="flex flex-col md:flex-row m-3">
          {/* Image Section */}
          <div className="w-full md:w-1/2 flex justify-center">
            <img
              className="w-full h-full md:h-auto rounded-md m-3 object-cover"
              src="./About-img/Pixabay-2808899.jpg"
              alt="Image"
            />
          </div>

          {/* Form Section */}
          <div className="w-full md:w-1/2 sm:ml-2 flex flex-col justify-center">
            <div className="text-center pb-2">
              <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-4xl font-bold">
                Any Suggestion for us
              </h1>
            </div>
            <div className="border shadow-md rounded-xl">
              <form className="flex flex-col p-3">
                <label className="mb-2 font-semibold">Name</label>
                <input
                  className="mb-4 p-2 border border-gray-300 rounded-lg"
                  type="text"
                  placeholder="Name..."
                  required
                  onInput={(e) => {
                    e.target.value = e.target.value.replace(/[^a-zA-Z\s]/g, "");
                  }}
                />
                <label className="mb-2 font-semibold">Email</label>
                <input
                  className="mb-4 p-2 border border-gray-300 rounded-lg"
                  required
                  type="email"
                  placeholder="Email..."
                />
                <label className="mb-2 font-semibold">Suggestion</label>
                <input
                  className="mb-4 p-2 border rounded-lg
                   border-gray-300"
                  required
                  placeholder="Your suggestion..."
                />
                <button className="bg-green-700 text-white px-4 py-2 rounded-xl">
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* added reviews Section */}
        <div className="px-3 border-1 border-black rounded-lg pt-3 my-2 mx-3">
          <div
            id="4"
            className="lg:px-20 text-center flex flex-col items-center mx-4 overflow-hidden"
          >
            <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-3xl font-bold text-gray-800 capitalize">
              LATEST DONATIONS
            </h3>
          </div>
          <div
            id="5"
            className="lg:px-20 flex flex-col md:flex-row justify-evenly gap-6 my-10 mx-4 overflow-hidden"
          >
            <div className="flex flex-col items-center bg-green-50 mb-8 shadow-md rounded-lg p-6 ">
              <img
                className="w-16 h-16 rounded-full mr-4 mb-4"
                src="./About-img/ebf77b2941895740c6837470593cc2d4.png"
                alt="Himanshu"
              />
              <div className="flex flex-col items-center text-center justify-center">
                <p className="text-xl font-bold">Jonaki</p>
                <p className="font-semibold">
                  Donated <span className="text-blue-300 ">₹500</span> for food
                  of Childrens
                </p>
                <Link className="text-blue-400 pt-2 flex items-center">
                  Donate Now{" "}
                  <span className="text-sm">
                    <IoIosArrowForward />
                  </span>
                </Link>
              </div>
            </div>

            <div className="flex flex-col items-center bg-green-50 mb-8 shadow-md rounded-lg p-6 ">
              <img
                className="w-16 h-16 rounded-full mr-4 mb-4"
                src="./About-img/1674fcaa833e1b51f0c1d1da781564ff.png"
                alt="Himanshu"
              />
              <div className="flex flex-col items-center text-center justify-center">
                <p className="text-xl font-bold">Jonaki</p>
                <p className="font-semibold">
                  Donated <span className="text-blue-300 ">₹500</span> for food
                  of Childrens
                </p>
                <Link className="text-blue-400 pt-2 flex items-center">
                  Donate Now{" "}
                  <span className="text-sm">
                    <IoIosArrowForward />
                  </span>
                </Link>
              </div>
            </div>

            <div className="flex flex-col items-center bg-green-50 mb-8 shadow-md rounded-lg p-6 ">
              <img
                className="w-16 h-16 rounded-full mr-4 mb-4"
                src="./About-img/915faaa925d39a5e726e94e0fc15a069.png"
                alt="Himanshu"
              />
              <div className="flex flex-col items-center text-center justify-center">
                <p className="text-xl font-bold">Jonaki</p>
                <p className="font-semibold">
                  Donated <span className="text-blue-300 ">₹500</span> for food
                  of Childrens
                </p>
                <Link className="text-blue-400 pt-2 flex items-center">
                  Donate Now{" "}
                  <span className="text-sm">
                    <IoIosArrowForward />
                  </span>
                </Link>
              </div>
            </div>

            <div className="flex flex-col items-center bg-green-50 mb-8 shadow-md rounded-lg p-6 ">
              <img
                className="w-16 h-16 rounded-full mr-4 mb-4"
                src="./About-img/7daf15f4edf74a94bb33984f8d0fd58c.png"
                alt="Himanshu"
              />
              <div className="flex flex-col items-center text-center justify-center">
                <p className="text-xl font-bold">Jonaki</p>
                <p className="font-semibold">
                  Donated <span className="text-blue-300 ">₹500</span> for food
                  of Childrens
                </p>
                <Link className="text-blue-400 flex items-center pt-2">
                  Donate Now{" "}
                  <span className="text-sm">
                    <IoIosArrowForward />
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
