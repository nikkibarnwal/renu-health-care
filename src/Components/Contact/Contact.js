import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import CallTwoToneIcon from "@mui/icons-material/CallTwoTone";
import RoomTwoToneIcon from "@mui/icons-material/RoomTwoTone";

const ContactUs = () => {
  // State to manage form data
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  });

  // State to manage errors
  const [errors, setErrors] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  });

  // Validation functions
  const validateFirstName = (name) => {
    if (!name.trim()) {
      return "First name is required";
    } else if (!/^[a-zA-Z\s]{2,30}$/.test(name)) {
      return "First name must be 2-30 characters and contain only letters and spaces";
    }
    return "";
  };

  const validateLastName = (name) => {
    if (!name.trim()) {
      return "Last name is required";
    } else if (!/^[a-zA-Z\s]{2,30}$/.test(name)) {
      return "Last name must be 2-30 characters and contain only letters and spaces";
    }
    return "";
  };

  const validateEmail = (email) => {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!email.trim()) {
      return "Email is required";
    } else if (!emailRegex.test(email)) {
      return "Please enter a valid email address";
    }
    return "";
  };

  const validatePhone = (phone) => {
    const phoneRegex = /^[6-9]\d{9}$/; // Starts with 6-9 and exactly 10 digits
    if (!phone.trim()) {
      return "Phone number is required";
    } else if (!phoneRegex.test(phone)) {
      return "Please enter a valid 10-digit Indian phone number starting with 6, 7, 8, or 9";
    }
    return "";
  };

  const validateMessage = (message) => {
    if (!message.trim()) {
      return "Message is required";
    } else if (message.trim().length < 10) {
      return "Message must be at least 10 characters long";
    }
    return "";
  };

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;

    // Update form data
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    // Validate the field
    let error = "";
    switch (name) {
      case "firstName":
        error = validateFirstName(value);
        break;
      case "lastName":
        error = validateLastName(value);
        break;
      case "email":
        error = validateEmail(value);
        break;
      case "phone":
        error = validatePhone(value);
        break;
      case "message":
        error = validateMessage(value);
        break;
      default:
        break;
    }

    // Update errors
    setErrors((prev) => ({
      ...prev,
      [name]: error,
    }));
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate all fields before submission
    const firstNameError = validateFirstName(formData.firstName);
    const lastNameError = validateLastName(formData.lastName);
    const emailError = validateEmail(formData.email);
    const phoneError = validatePhone(formData.phone);
    const messageError = validateMessage(formData.message);

    // Update all errors
    setErrors({
      firstName: firstNameError,
      lastName: lastNameError,
      email: emailError,
      phone: phoneError,
      message: messageError,
    });

    // Check if any errors exist
    if (
      firstNameError ||
      lastNameError ||
      emailError ||
      phoneError ||
      messageError
    ) {
      toast.error("Please fix the errors in the form before submitting.");
      return;
    }

    // Prepare form data for submission
    const submissionData = {
      first_name: formData.firstName,
      last_name: formData.lastName,
      email: formData.email,
      phone: formData.phone,
      message: formData.message,
      access_key: "081a2add-f083-4d05-ab18-74d7baa4c29a",
    };

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(submissionData),
      });

      const result = await response.json();

      if (result.success) {
        toast.success("Message sent successfully!");
        // Reset form
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          phone: "",
          message: "",
        });
        setErrors({
          firstName: "",
          lastName: "",
          email: "",
          phone: "",
          message: "",
        });
      } else {
        toast.error("Something went wrong. Please try again.");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      toast.error("An unexpected error occurred. Please try again.");
    }
  };

  return (
    <>
      <div className="m-auto bg-[#FAFAFA]">
        <ToastContainer />

        {/* Hero Section */}
        <div className="flex flex-col justify-center items-center w-full px-4 md:px-0">
          <h3 className="text-[32px] md:text-[43px] leading-[40px] md:leading-[63px] text-[#141414] font-poppins font-bold text-center">
            Get in Touch with Us
          </h3>
          <p className="text-[14px] md:text-[16px] leading-[18px] md:leading-[20px] font-poppins text-[#252525] font-[500] text-center mt-2">
            We’re here to help, whether you have questions, want to volunteer,
            or need more information.
          </p>
        </div>

        {/* Input Form and Location */}
        <div className="w-full p-[24px] flex flex-col md:flex-row">
          {/* Contact Form */}
          <div className="lg:w-1/2 md:w-full md:px-4 sm:w-full sm:px-4 mb-4">
            <form
              onSubmit={handleSubmit}
              className="w-full flex flex-col gap-[12px]"
            >
              {/* First Name & Last Name in One Row */}
              <div className="flex flex-row w-full gap-[12px]">
                <div className="w-1/2">
                  <label
                    htmlFor="firstName"
                    className="block text-[#252525] font-Inter font-medium mb-2"
                  >
                    First Name
                  </label>
                  <input
                    id="firstName"
                    name="firstName"
                    className={`w-full h-[45px] p-[12px] bg-[#fafafa] border ${
                      errors.firstName ? "border-red-500" : "border-[#ADADAD]"
                    } rounded-md focus:outline-none focus:ring-2 focus:ring-blue-700 transition duration-300`}
                    type="text"
                    placeholder="First Name"
                    value={formData.firstName}
                    onChange={handleChange}
                  />
                  {errors.firstName && (
                    <p className="text-red-500 mt-1 text-sm">
                      {errors.firstName}
                    </p>
                  )}
                </div>
                <div className="w-1/2">
                  <label
                    htmlFor="lastName"
                    className="block text-[#252525] font-Inter font-medium mb-2"
                  >
                    Last Name
                  </label>
                  <input
                    id="lastName"
                    name="lastName"
                    className={`w-full h-[45px] p-[12px] bg-[#fafafa] border ${
                      errors.lastName ? "border-red-500" : "border-[#ADADAD]"
                    } rounded-md focus:outline-none focus:ring-2 focus:ring-blue-700 transition duration-300`}
                    type="text"
                    placeholder="Last Name"
                    value={formData.lastName}
                    onChange={handleChange}
                  />
                  {errors.lastName && (
                    <p className="text-red-500 mt-1 text-sm">
                      {errors.lastName}
                    </p>
                  )}
                </div>
              </div>

              {/* Email Input */}
              <div className="w-full">
                <label
                  htmlFor="email"
                  className="block text-[#252525] font-Inter font-medium mb-2"
                >
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  className={`w-full h-[45px] p-[12px] bg-[#fafafa] border ${
                    errors.email ? "border-red-500" : "border-[#ADADAD]"
                  } rounded-md focus:outline-none focus:ring-2 focus:ring-blue-700 transition duration-300`}
                  type="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={handleChange}
                />
                {errors.email && (
                  <p className="text-red-500 mt-1 text-sm">{errors.email}</p>
                )}
              </div>

              {/* Phone Input */}
              <div className="w-full">
                <label
                  htmlFor="phone"
                  className="block text-[#252525] font-Inter font-medium mb-2"
                >
                  Phone
                </label>
                <input
                  id="phone"
                  name="phone"
                  className={`w-full h-[45px] p-[12px] bg-[#fafafa] border ${
                    errors.phone ? "border-red-500" : "border-[#ADADAD]"
                  } rounded-md focus:outline-none focus:ring-2 focus:ring-blue-700 transition duration-300`}
                  type="tel"
                  placeholder="9123456789"
                  value={formData.phone}
                  onChange={handleChange}
                />
                {errors.phone && (
                  <p className="text-red-500 mt-1 text-sm">{errors.phone}</p>
                )}
              </div>

              {/* Message Textarea */}
              <div className="w-full">
                <label
                  htmlFor="message"
                  className="block text-[#252525] font-Inter font-medium mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  className={`mb-2 w-full h-[170px] p-[12px] bg-[#fafafa] border ${
                    errors.message ? "border-red-500" : "border-[#ADADAD]"
                  } rounded-md focus:outline-none focus:ring-2 focus:ring-blue-700 transition duration-300`}
                  placeholder="Leave us a Message..."
                  required
                  rows="4"
                  value={formData.message}
                  onChange={handleChange}
                ></textarea>
                {errors.message && (
                  <p className="text-red-500 mt-1 text-sm">{errors.message}</p>
                )}
              </div>

              {/* Submit Button */}
              <div className="flex justify-center">
                <button
                  type="submit"
                  className="w-full flex justify-center items-center rounded-lg h-[40px] px-4 py-3 font-[400] font-poppins text-xl bg-blue-700 text-white shadow-md hover:scale-105 transition-transform duration-300"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>

          {/* Location Image and Contact Details */}
          <div className="lg:w-1/2 md:w-full md:px-4 flex flex-col justify-center h-full">
            {/* Location Image */}
            <div
              className="object-fit-contain mt-0 md:mt-2 sm:mb-2"
              style={{ objectFit: "contain" }}
            >
              <img
                src="/Contact/ContactUs.png"
                className="rounded-lg w-full"
                alt="Contact Location"
              />
            </div>

            {/* Chat and Visit Details */}
            <div className="flex gap-6 flex-col sm:flex-row">
              {/* Chat with Us */}
              <div className="flex flex-col w-full sm:w-1/2 gap-6">
                <div>
                  <h3 className="block text-[#252525] font-Inter font-medium mb-2">
                    Chat with us
                  </h3>
                  <p className="text-sm mb-2">
                    Speak to our friendly team via Chat
                  </p>

                  <p className="flex items-center justify-start gap-2 text-sm mb-2 underline font-medium font-Poppins">
                    <MailOutlineIcon
                      sx={{ color: "#1D4ED8", fontSize: "20px" }}
                    />
                    Message us on email
                  </p>

                  <p className="flex items-center justify-start gap-2 text-sm mb-2 underline font-medium font-Poppins">
                    <InstagramIcon
                      sx={{ color: "#1D4ED8", fontSize: "20px" }}
                    />
                    Live chat on Instagram
                  </p>
                  <p className="flex items-center justify-start gap-2 text-sm mb-2 underline font-medium font-Poppins">
                    <LinkedInIcon sx={{ color: "#1D4ED8", fontSize: "20px" }} />
                    Connect with us on LinkedIn
                  </p>
                </div>
              </div>

              {/* Visit Us */}
              <div className="flex flex-col w-full sm:w-1/2">
                <h3 className="block text-[#252525] font-Inter font-medium mb-2">
                  Visit us
                </h3>
                <p className="text-sm mb-2">
                  Chat with us in person in our office
                </p>
                <p className="flex items-center justify-start gap-2 text-sm mb-2 underline font-medium font-Poppins">
                  <RoomTwoToneIcon
                    sx={{ color: "#1D4ED8", fontSize: "20px" }}
                  />
                  Gurugram, Haryana - 122503, India
                </p>
              </div>
            </div>

            {/* Call Us */}
            <div>
              <h3 className="block text-[#252525] font-Inter font-medium mb-2 mt-6">
                Call Us
              </h3>
              <p className="text-sm mb-2">
                Call our team Mon-Fri from 8am to 5pm.
              </p>

              <p className="flex items-center justify-start gap-2 text-sm mb-2 underline font-poppins font-medium">
                <CallTwoToneIcon sx={{ color: "#1D4ED8", fontSize: "20px" }} />
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
