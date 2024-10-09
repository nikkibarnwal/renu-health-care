import React from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import CallTwoToneIcon from '@mui/icons-material/CallTwoTone';
import RoomTwoToneIcon from '@mui/icons-material/RoomTwoTone';
import { useState,useEffect} from "react";



const ContactUs = () => {
  const [phone, setPhone] = useState('');
  const [isValid, setIsValid] = useState(true);
  const [typingTimeout, setTypingTimeout] = useState(null);

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

  const handlePhoneChange = (e) => {
    const value = e.target.value;
    setPhone(value);

    // Immediate validation for the first digit
    if (value.length === 1 && !/^[6-9]$/.test(value)) {
      setIsValid(false);
    } else {
      // Clear timeout on each input to debounce validation
      if (typingTimeout) {
        clearTimeout(typingTimeout);
      }

      // Set a new timeout for debounced validation after 1.5 seconds
      const newTimeout = setTimeout(() => {
        // Full validation for the entire phone number
        const phonePattern = /^[6-9]\d{9}$/;
        setIsValid(phonePattern.test(value));
      }, 1500);

      setTypingTimeout(newTimeout);
    }
  };

  useEffect(() => {
    // Cleanup timeout on unmount to avoid memory leaks
    return () => {
      if (typingTimeout) {
        clearTimeout(typingTimeout);
      }
    };
  }, [typingTimeout]);

  return (
    <>
    <div className=" mb-0 ml-0 mr-0 mt-3 bg-[#FAFAFA]">
  <ToastContainer />

  {/* Hero Section */}
  <div className="flex flex-col justify-center items-center w-full px-4 md:px-0 ">
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
              First Name <span className="text-red-500">*</span>
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
              Last Name <span className="text-red-500">*</span>
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
            Email <span className="text-red-500">*</span>
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
        {/* Phone */}
        <div className="w-full">
      <label htmlFor="phone" className="block text-[#252525] font-Inter font-medium mb-2" style={{ lineHeight: '20px', height: '16px' }}>
        Phone <span className="text-red-500">*</span>
      </label>
      <div className={`flex p-1 border-1 rounded-md ${isValid ? 'border-[#ADADAD]' : 'border-red-500'}`}>
        <select id="country-code" className="px-1 py-1 focus:outline-none">
          <option value="+91">IND</option>
          <option value="+1">USA</option>
          <option value="+44">UK</option>
        </select>
        <input
          id="phone"
          name="phone"
          className={`w-full h-[45px] p-[12px] bg-[#fafafa] focus:outline-none transition duration-300 ${
            isValid ? 'focus:ring-blue-500' : 'focus:ring-red-500'
          }`}
          type="tel"
          placeholder="+91 742934****"
          value={phone}
          onChange={handlePhoneChange}
          maxLength="10"
          required
        />
      </div>
      {!isValid && (
        <p className="text-red-500 text-sm mt-1">Please enter a valid 10-digit phone number starting with 6, 7, 8, or 9</p>
      )}
    </div>
              
        {/* Message Textarea */}
        <div className="w-full">
          <label htmlFor="message" className="block text-[#252525] font-Inter font-medium mb-2" style={{ lineHeight: '20px', height: '16px' }}>
            Message <span className="text-red-500">*</span>
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
    
    <div>
  <p 
    className="flex items-center justify-start gap-2 text-sm mb-2 underline font-medium font-Poppins transition-transform duration-200 hover:scale-105"
    onClick={() => window.open('mailto:example@example.com')}
    style={{ cursor: 'pointer' }}  // Makes it look clickable
  >
    <MailOutlineIcon sx={{ color: '#24774F', fontSize: "20px" }} />
    Message us on email
  </p>

  <p 
    className="flex items-center justify-start gap-2 text-sm mb-2 underline font-medium font-Poppins transition-transform duration-200 hover:scale-105"
    onClick={() => window.open('https://www.instagram.com/yourusername', '_blank')}
    style={{ cursor: 'pointer' }}  // Makes it look clickable
  >
    <InstagramIcon sx={{ color: '#24774F', fontSize: "20px" }} />
    Live chat on Instagram
  </p>

  <p 
    className="flex items-center justify-start gap-2 text-sm mb-2 underline font-medium font-Poppins transition-transform duration-200 hover:scale-105"
    onClick={() => window.open('https://www.linkedin.com/in/yourprofile', '_blank')}
    style={{ cursor: 'pointer' }}  // Makes it look clickable
  >
    <LinkedInIcon sx={{ color: '#24774F', fontSize: "20px" }} />
    Connect with us on LinkedIn
  </p>
</div>

  </div>

</div>
  <div className="flex flex-col w-full sm:w-1/2 ">
    <h3  className="block text-[#252525] font-Inter font-medium mb-2" style={{ lineHeight: '20px', height: '16px' }}>Visit us</h3>
    <p className="text-sm mb-2">Chat with us in person in our office</p>
    <p 
    className="flex items-center justify-start gap-2 text-sm mb-2 underline font-medium font-Poppins transition-transform duration-200 hover:scale-105"
    onClick={() => window.open('https://www.google.com/maps/search/?api=1&query=Gurugram,Haryana,India', '_blank')}
    style={{ cursor: 'pointer' }}
  >
    <RoomTwoToneIcon sx={{ color: '#24774F', fontSize: "20px" }} />
    Gurugram, Haryana-122503, India
  </p>
  </div>
</div>
  <div>
  <h3  className="block text-[#252525] font-Inter font-medium mb-2 mt-6" style={{ lineHeight: '20px', height: '16px' }}>Call Us</h3>
    <p className="text-sm mb-2">Call our team Mon.En from 8am to 5pm.</p>
    
    <p 
    className="flex items-center justify-start gap-2 text-sm mb-2 underline font-medium font-Poppins transition-transform duration-200 hover:scale-105"
    onClick={() => window.open('tel:+919671457366')}
    style={{ cursor: 'pointer' }}
  >
    <CallTwoToneIcon sx={{ color: '#24774F', fontSize: "20px" }} />
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