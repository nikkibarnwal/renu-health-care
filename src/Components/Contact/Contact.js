import React from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import CallTwoToneIcon from '@mui/icons-material/CallTwoTone';
import RoomTwoToneIcon from '@mui/icons-material/RoomTwoTone';

const ContactUs = () => {
  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "081a2add-f083-4d05-ab18-74d7baa4c29a");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: json,
    }).then((res) => res.json());

    if (res.success) {
      toast.success("Message sent successfully!!");
    } else {
      toast.error("Something went wrong. Please try again.");
    }
    event.target.reset();
  };

  return (
    <>
    <div className=" m-auto bg-[#FAFAFA]">
  <ToastContainer />

  {/* Hero Section */}
  <div className="flex flex-col justify-center items-center w-full px-4 md:px-0">
  <h3 className="text-[32px] md:text-[43px] leading-[40px] md:leading-[63px] text-[#141414] font-poppins font-bold text-center">
    Get in Touch with Us
  </h3>
  <p className="text-[14px] md:text-[16px] leading-[18px] md:leading-[20px] font-poppins text-[#252525] font-[500] text-center mt-2">
    We’re here to help, whether you have questions, want to volunteer, or need more information.
  </p>
</div>


  {/* Input Form and Location */}
  <div className="w-full p-[24px] flex flex-col md:flex-row  ">
    {/* Contact Form */}
    <div className="lg:w-1/2 md:w-full md:px-4 sm:w-full sm:px-4 mb-4">
      <form onSubmit={onSubmit} className="w-full flex flex-col gap-[12px]">

        {/* First Name & Last Name in One Row */}
        <div className="flex flex-row w-full gap-[12px]">
          <div className="w-1/2">
            <label htmlFor="first-name" className="block text-[#252525] font-Inter font-medium mb-2" style={{ lineHeight: '20px', height: '16px' }}>
              First Name
            </label>
            <input
              id="first-name"
              name="first name"
              className="w-full h-[45px] p-[12px] bg-[#fafafa] border-1 border-[#ADADAD] rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300"
              type="text"
              placeholder="First Name"
              required
            />
          </div>
          <div className="w-1/2">
            <label htmlFor="last-name" className="block text-[#252525] font-Inter font-medium mb-2" style={{ lineHeight: '20px', height: '16px' }}>
              Last Name
            </label>
            <input
              id="last-name"
              name="last name"
              className="w-full h-[45px] p-[12px] bg-[#fafafa] border-1 border-[#ADADAD] rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300"
              type="text"
              placeholder="Last Name"
              required
            />
          </div>
        </div>

        {/* Email Input */}
        <div className="w-full">
          <label htmlFor="email" className="block text-[#252525] font-Inter font-medium mb-2" style={{ lineHeight: '20px', height: '16px' }}>
            Email
          </label>
          <input
            id="email"
            name="email"
            className="w-full h-[45px] p-[12px] bg-[#fafafa] border-1 border-[#ADADAD] rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300"
            type="email"
            placeholder="Email"
            required
          />
        </div>
        <div className="w-full">
          <label htmlFor="email" className="block text-[#252525] font-Inter font-medium mb-2" style={{ lineHeight: '20px', height: '16px' }}>
            Phone
          </label>
          <input
            id="email"
            name="email"
            className="w-full h-[45px] p-[12px] bg-[#fafafa] border-1 border-[#ADADAD] rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300"
            type="number"
            placeholder="+91 742934****"
            required
          />
        </div>
              
        {/* Message Textarea */}
        <div className="w-full">
          <label htmlFor="message" className="block text-[#252525] font-Inter font-medium mb-2" style={{ lineHeight: '20px', height: '16px' }}>
            Message
          </label>
          <textarea
            id="message"
            name="message"
            className="mb-2 w-full h-[170px] p-[12px] bg-[#fafafa] border-1 border-[#ADADAD] rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300"
            placeholder="Leave us a Message..."
            required
            rows="4"
          ></textarea>
        </div>

        {/* Submit Button */}
        <div className="flex justify-center">
          <button
            type="submit"
            className="w-full flex justify-center items-center rounded-lg h-[40px] px-4 py-3 font-[400] font-poppins text-xl bg-[#24774F] text-white shadow-m hover:scale-105 transition-transform duration-300"
          >
            Send Message
          </button>
        </div>
      </form>
    </div>

    {/* Location Image */}
    <div className=" lg:w-1/2 md:w-full md:px-4  flex flex-col justify-center  h-full ">
    <div
  className="object-fit-contain mt-0 md:mt-2 sm:mb-2"// w-full for smaller screens, md:w-auto for medium and larger screens
  style={{ objectFit: "contain" }}
>
  <img
    src="/Contact/ContactUs.png"
    className="rounded-lg w-full" 
    alt="contact location"
  />
</div>

        <div className="flex gap-6 flex-col sm:flex-row">
  <div className="flex flex-col  w-full sm:w-1/2 gap-6 ">
  <div>
  <h3  className="block text-[#252525] font-Inter font-medium mb-2" style={{ lineHeight: '20px', height: '16px' }}>Chat with us</h3>
    <p className="text-sm mb-2">Speak to our friendly team via Chat</p>
    
    <p className="flex items-center justify-start gap-2 text-sm mb-2 underline font-medium font-Poppins">
    <MailOutlineIcon sx={{ color: '#24774F', fontSize:"20px" }} />

      Message us on email
    </p>

    <p className="flex items-center justify-start gap-2 text-sm mb-2 underline font-medium font-Poppins">
    <InstagramIcon sx={{ color: '#24774F', fontSize:"20px" }} />

      Live chat on Instagram
    </p>
    <p className="flex items-center justify-start gap-2 text-sm mb-2 underline font-medium font-Poppins">
    <LinkedInIcon sx={{ color: '#24774F', fontSize:"20px" }} />

    Connect with us on LinkedIn
    </p>
  </div>

</div>
  <div className="flex flex-col w-full sm:w-1/2 ">
    <h3  className="block text-[#252525] font-Inter font-medium mb-2" style={{ lineHeight: '20px', height: '16px' }}>Visit us</h3>
    <p className="text-sm mb-2">Chat with us in person in our office</p>
    <p className="flex items-center justify-start gap-2 text-sm mb-2 underline font-medium font-Poppins">
    <RoomTwoToneIcon sx={{ color: '#24774F', fontSize:"20px" }} />
    Gurugram,haryana-122503,India</p>
  </div>
</div>
  <div>
  <h3  className="block text-[#252525] font-Inter font-medium mb-2 mt-6" style={{ lineHeight: '20px', height: '16px' }}>Call Us</h3>
    <p className="text-sm mb-2">Call our team Mon.En from 8am to 5pm.</p>
    
    <p className="flex items-center justify-start gap-2 text-sm mb-2 underline font-poppins font-medium ">
      <CallTwoToneIcon sx={{ color: '#24774F', fontSize:"20px" }} />
      +91-9671457366
    </p>
  </div>
</div>

    </div>
  </div>

  
    </>
  );
};



export default ContactUs;
