import React from "react";
import { Link } from "react-router-dom"
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
            backgroundImage: `url("/About-img/Component 4.jpg")`,
          }}
        >
          
        </div>
        

        {/* Content Section */}
        <div id="2" className="lg:px-20 lg:flex my-24 sm:mx-4 overflow-hidden">
        <div className="lg:w-1/2 px-4 mt-6 lg:mt-0">
            <h3 className="text-2xl  md:text-3xl font-bold text-gray-800">
              Welcome To Welfare Organization 
              <span > Established Since 2015</span>
            </h3>
            <p className="mt-4 text-md md:text-lg text-gray-600 leading-relaxed font-semibold">
              Our mission is to create a world where everyone has access to basic human rights, education, healthcare, and opportunities for sustainable livelihoods. We envision empowered communities working together to overcome poverty, injustice, and environmental degradation, fostering a global society built on dignity, equality, and compassion.
            </p>
          </div>
          <div className="lg:w-1/2 px-4">
            <img
              className="w-full rounded-lg shadow-lg"
              src="./About-img/Welcome_Pic.jpg"
              alt="About us"
            />
          </div>

          
        </div>

        {/* Content Section part 2*/}
        <div id="2" className="lg:px-20 lg:flex my-24 sm:mx-4 overflow-hidden">
        
          <div className="lg:w-1/2 px-4">
            <img
              className="w-full rounded-lg shadow-lg"
              src="./About-img/our_vision_pic.jpg"
              alt="About us"
            />
          </div>
          <div className="lg:w-1/2 px-4 mt-6 lg:mt-0">
            <h3 className="text-2xl  md:text-3xl font-bold text-gray-800">
              Our Vision
            </h3>
            <p className="mt-4 text-md md:text-lg text-gray-600 leading-relaxed font-semibold">
              Our mission is to create a world where everyone has access to basic human rights, education, healthcare, and opportunities for sustainable livelihoods. We envision empowered communities working together to overcome poverty, injustice, and environmental degradation, fostering a global society built on dignity, equality, and compassion.
            </p>
          </div>

          
        </div>

        
        {/* added image with text overlay */}
        <div className="relative mx-3">
          <img
            className="mx-auto rounded-md w-full max-w-[1240px] object-cover min-h-[150px] max-h-[300px]"
            src="https://s3-alpha-sig.figma.com/img/2ce7/eb51/20fe6b303aaaba2c345f3bc1ef88921f?Expires=1728864000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=g~6gCjEqSgjMGiGBWx321ASkwIC9wlCvHJ4KFrYiYiZ8lrocyYeCAZDZOalxub91aWuy~oRynUANk0hcLGwmBKvd7ZweX97d3Kw6Tt9CiFpNm9OqHbxljluuSFFmvezxAA~~Q-2OEhexUyBiJFCblbrLrlPZXtv40cpQlfb505hQWdQ~7OoEmdJxk8sPlBDy7jyQEjmp4PlxuKjsxnSSgdi~FbqZ4aVwCd8ryvlozTlby2KQr3QHW3CyCXyy2I4EYFmftrMQH9Xcjx03gzD~TqsQaEdANJsQQQtLSXXxJPWyx3HrTcDKumVgD8TXe2up7IxHI7nYjkD~qM0bTQPuxw__"
            alt="Responsive Image"
          />

          {/* Black Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent rounded-md"></div>

          {/* Text Content */}
          <div className="absolute inset-0 flex flex-col justify-center text-white px-4 max-w-[100%] sm:max-w-[80%] md:max-w-[60%] lg:max-w-[50%] z-10 overflow-hidden">
            <h1 className="text-lg md:text-2xl font-bold mb-2">Join Us</h1>
            <p className="text-sm md:text-base mb-4 line-clamp-4">
              EVERY donation, no matter how modest, has the remarkable power to create a ripple effect of change. So, the hesitation to donate, even if a small donation, to causes we care about often with the feeling that it may not be able to make a meaningful impact is incorrect.
            </p>
            <button className="bg-white text-black px-3 py-2 rounded-md text-sm md:text-base">Donate Now</button>
          </div>
        </div>
        {/* added image and form section */}
        <div className="flex flex-col md:flex-row">
          <div className="w-full md:w-1/2 flex justify-center">
            <img
              className="w-full h-[400px] rounded-md m-3 object-cover"
              src="https://s3-alpha-sig.figma.com/img/0650/3ffd/31b07025be6ee9bd538f833b3d537736?Expires=1728864000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=I6DLvz4bjv13jTm0gDObQCt565YU13MqYL9HRgRPGyeqsiJsCOpaFADXrenKyfJ8ASzHxiDJaVk0C~v4zpzE25FDoCpXWQXvQFqTpcY~9lWUCHLVM5ZfJqQBRi4ArC0TiIzP9WLqEL6rYd6mXfn45mlZp5sHM5oNGcn-49qoLVIl6f~qCYILqVx269D5txB6fAlHOGNrVTiYl9jzNWzsAhBu3x9ee1jJ8pvS4zGWKPOdzYCyx5MIarLoFn1NFYzB53zmCFXQgZLPyyM8U3SC16diY1hbPyuIVCwxSTDAmlg-H~KDk4CsqwzFT~eKNnwzBCIYFoLYO4zMfKdHZ4Jdnw__"
              alt="Image"
            />
          </div>

          <div className="w-full md:w-1/2 ml-2">
            <form className="flex flex-col h-[300px] p-4">
              <label className="mb-2">Name</label>
              <input className="mb-4 p-2 border border-gray-300 rounded" placeholder="value" />
              <label className="mb-2">Email</label>
              <input className="mb-4 p-2 border border-gray-300 rounded" placeholder="value" />
              <label className="mb-2">Suggestion</label>
              <input className="mb-4 p-2 border border-gray-300 rounded" placeholder="value" />
              <button className="bg-blue-500 text-white px-4 py-2 rounded">Submit</button>
            </form>
          </div>
        </div>
        {/* added reviews Section */}
        <div id="4" className="lg:px-20 flex flex-col items-center my-20 mx-4 overflow-hidden">
          <h3 className="text-3xl md:text-4xl font-semibold text-gray-800">Latest Donations</h3>
        </div>
        <div id="5" className="lg:px-20 flex flex-col md:flex-row gap-6 my-10 mx-4 overflow-hidden">

          <div className="flex flex-col items-center bg-green-50 mb-8 shadow-lg rounded-lg p-6 ">
            <img
              className="w-16 h-16 rounded-full mr-4 mb-4"
              src="https://s3-alpha-sig.figma.com/img/a159/2511/ebf77b2941895740c6837470593cc2d4?Expires=1728864000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=IDbnwB9KadNzmqYRmKFKZ8pgtzhV1siwJ83AD9kkmb3qzTWguo5qN93t1DbHfDlUugI1ARL0erkRhU7AiehmwDD~Dv0FduWuChkcc7xo5OpRUG7TmBSQSeuOoJuswyxLyFH46gwGmIzwJu-4aRsmwHF8ky8jQdmF19GS3BOKMPySjlEwdoqelXfWbIW0Aqf9mf2RxHsqCwjLvtD07Cqgi2E67RFp3NLf51RyVk-UCvU7a7Hp~VV~Zsr9~QGUgU0wBH2sFkGhDE3I77noeDSRanBEcydtlAdHTQATBO~p5zSJHlGMSBOi5piojt~TVKo9HdA53PY~AuFqhS3j~L75kg__"
              alt="Himanshu"
            />
            <div className="flex flex-col items-center text-center justify-center">
              <p className="text-xl font-bold">Jonaki</p>
              <p>Donated <span className="text-blue-300 ">₹500</span> for food of Childrens</p>
              <Link className="text-blue-400 flex items-center">Donate Now <span className="text-sm"><IoIosArrowForward /></span></Link>
            </div>
          </div>

          <div className="flex flex-col items-center bg-green-50 mb-8 shadow-lg rounded-lg p-6 ">
            <img
              className="w-16 h-16 rounded-full mr-4 mb-4"
              src="https://s3-alpha-sig.figma.com/img/d7f7/597b/1674fcaa833e1b51f0c1d1da781564ff?Expires=1728864000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=LXwKvHGNpgtH77FcOj07l6yXfz1w5fVkosX-G-6cVaB25r3~iAQdJgoFuXgT3md6SUmzpuhqfUWeXtBOBifEFcwWZKZjWwewh6z4MQx7ll8tTbvbYlw8p1~~dcQuFLmmefoVDEIKMI31x-Buwh~idLHx6UU3VEZWY4S~hE3E7-VhzSdxNZwxVGL4ascXj6l2K4GX3OluF7zgGn8yfCIYoEgb3iErykigs0nz2IPdVb5NAbjHAaSmulAIKklx2VM4CsaeDvpeDwgZith6F9NWQRz1fCsOAvvidni912qx0Z2OI7aM~kvbQQnLm-7VQi-dWhzb6xRfpKPdJo-qpCHoCw__"
              alt="Himanshu"
            />
             <div className="flex flex-col items-center text-center justify-center">
              <p className="text-xl font-bold">Jonaki</p>
              <p>Donated <span className="text-blue-300 ">₹500</span> for food of Childrens</p>
              <Link className="text-blue-400 flex items-center">Donate Now <span className="text-sm"><IoIosArrowForward /></span></Link>
            </div>
          </div>

          <div className="flex flex-col items-center bg-green-50 mb-8 shadow-lg rounded-lg p-6 ">
            <img
              className="w-16 h-16 rounded-full mr-4 mb-4"
              src="https://s3-alpha-sig.figma.com/img/d709/1e09/7daf15f4edf74a94bb33984f8d0fd58c?Expires=1728864000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=g-lHy25o06bKzwzeDbrCLStKOGcOuIfXnYEpb5URo6o4lROrJklxo-FrfTRxGpLYxLq9t5fVWirN8yA4jTxc~yUk9swAGZ-q2EjNawxJN6jj9-g6STbfVYUMKRchMm-IxGC4XtHKvOia4I8sRiOiKd9jqiNpJYxVUwIIuqNWPJF~S8O5RtwubXYt2~debsda4A4Lj2OdtpnIaM0RN1VH7igErt-v7cdnlBf8UU4pkDTpU1hwgpoyRmqN1SLGCUfc1HQMvXPJAGylFJyGjDCTShMqTls~nyMMSaNjhwL6ry1spRFKwULulugc~0KmDwJcHWZltXrd6gDel5ppBnhufA__"
              alt="Himanshu"
            />
             <div className="flex flex-col items-center text-center justify-center">
              <p className="text-xl font-bold">Jonaki</p>
              <p>Donated <span className="text-blue-300 ">₹500</span> for food of Childrens</p>
              <Link className="text-blue-400 flex items-center">Donate Now <span className="text-sm"><IoIosArrowForward /></span></Link>
            </div>
          </div>

          <div className="flex flex-col items-center bg-green-50 mb-8 shadow-lg rounded-lg p-6 ">
            <img
              className="w-16 h-16 rounded-full mr-4 mb-4"
              src="https://s3-alpha-sig.figma.com/img/4ef4/69b5/915faaa925d39a5e726e94e0fc15a069?Expires=1728864000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=WgsgN2cB-67i8h0~qUmUXr8D~LCEksVVSiOUrFXMP3Z0~z-e5LzoaAaToY9vRkp-0WmBKy1g0m21Eu9fnBMRlWUyfS8tybT3MzegezC0HknAXNOBRkglNsj226p0DmOPL7zjlRD~ifw4UuTOHxuDCf2I~1bAiOv~Uw6-a7jXRLdyXyce5KIFHDnyCDoe0fOHl6Gp5Dpnw4NGsTFA-RIKBuAkVqMeS3DyS2L584wNXW2lzoddBs1p-tojtd9fJvdSfn8R6iZQcyc-DZYXBhCEJ1~28kEuvsYBs~PpnFP88yjYikm0j1JJdr-5MflAWkC-0RAuh8NOmKTNvNiTlPaV6w__"
              alt="Himanshu"
            />
             <div className="flex flex-col items-center text-center justify-center">
              <p className="text-xl font-bold">Jonaki</p>
              <p>Donated <span className="text-blue-300 ">₹500</span> for food of Childrens</p>
              <Link className="text-blue-400 flex items-center">Donate Now <span className="text-sm"><IoIosArrowForward /></span></Link>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default About;
