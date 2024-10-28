import React, { useState } from "react";
import { motion } from "framer-motion";
import { fadeIn } from "./Variant";
import { FiMail } from "react-icons/fi";
import { IoCallOutline } from "react-icons/io5";
import { MdOutlineLocationOn } from "react-icons/md";

const Donate = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phoneNumber: "",
    amount: "",
  });

  const [errors, setErrors] = useState({
    name: "",
    email: "",
    phoneNumber: "",
  });

  // Validation functions
  const validateName = (name) => {
    if (!name.trim()) {
      return "Name is required";
    } else if (!/^[a-zA-Z ]{3,30}$/.test(name)) {
      return "Name must be 3-30 characters long and contain only letters and spaces";
    }
    return "";
  };

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email.trim()) {
      return "Email is required";
    } else if (!emailRegex.test(email)) {
      return "Please enter a valid email address";
    }
    return "";
  };

  const validatePhoneNumber = (phoneNumber) => {
    const phoneRegex = /^[6-9]\d{9}$/; // Starts with 6-9 and exactly 10 digits
    if (!phoneNumber.trim()) {
      return "Phone number is required";
    } else if (!phoneRegex.test(phoneNumber)) {
      return "Please enter a valid 10-digit Indian phone number starting with 6, 7, 8, or 9";
    }
    return "";
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    // Validate the field as it's being typed
    if (name === "name") {
      setErrors((prev) => ({ ...prev, name: validateName(value) }));
    }
    if (name === "email") {
      setErrors((prev) => ({ ...prev, email: validateEmail(value) }));
    }
    if (name === "phoneNumber") {
      setErrors((prev) => ({
        ...prev,
        phoneNumber: validatePhoneNumber(value),
      }));
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Validate on submit
    const nameError = validateName(formData.name);
    const emailError = validateEmail(formData.email);
    const phoneNumberError = validatePhoneNumber(formData.phoneNumber);

    if (nameError || emailError || phoneNumberError) {
      setErrors({
        name: nameError,
        email: emailError,
        phoneNumber: phoneNumberError,
      });
      return;
    }

    // Submit form data here
    console.log("Form submitted successfully", formData);

    // Optionally, reset the form after successful submission
    setFormData({
      name: "",
      email: "",
      phoneNumber: "",
      amount: "",
    });
    setErrors({
      name: "",
      email: "",
      phoneNumber: "",
    });
  };

  return (
    <>
      <div className="sm:w-11/12 m-auto">
        {/* Hero Section */}
        <div className="p-2 lg:p-0">
          <h1 className="text-2xl lg:text-4xl font-bold text-center mt-6 mb-4">
            Donate Some Happiness
          </h1>
          <img
            className="w-full rounded-lg my-2 lg:h-[500px] object-cover"
            src="/Donate/hero donate.jpg"
            alt="Donate Hero"
          />
          <p className="text-sm text-center">
            Join us in making a lasting impact! Your generous donations to
            RenuHealthcare enable us to deliver essential healthcare services,
            social initiatives, and <br /> educational programs to underserved
            communities. Together, we can create a healthier, more compassionate
            world.
          </p>
        </div>

        {/* Show Your Support */}
        <div>
          <h1 className="text-2xl lg:text-4xl font-bold text-center mt-10">
            Show Your Support
          </h1>
          <p className="text-[16px] text-center py-3">
            Fill the following details to provide your support for the cause
          </p>
          <div className="flex flex-col lg:flex-row justify-center lg:items-center gap-3 lg:gap-5 ml-6 lg:ml-0">
            <div className="flex justify-start lg:justify-center items-center gap-6">
              <MdOutlineLocationOn className="text-[#1D4ED8] text-3xl" />
              <div>
                <p>Address</p>
                <p className="text-[16px] font-bold">
                  Gurugram, Haryana - 122503, India
                </p>
              </div>
            </div>
            <div className="flex justify-start lg:justify-center items-center gap-6">
              <IoCallOutline className="text-[#1D4ED8] text-3xl" />
              <div>
                <p>Call Us</p>
                <p className="text-[16px] font-bold">+91-01234567890</p>
              </div>
            </div>
            <div className="flex justify-start lg:justify-center items-center gap-6">
              <FiMail className="text-[#1D4ED8] text-3xl" />
              <div>
                <p>Email Us</p>
                <p className="text-[16px] font-bold">info@renuhealthcare.com</p>
              </div>
            </div>
          </div>
        </div>

        {/* Donation Form */}
        <motion.div className="flex items-center justify-center min-h-screen">
          <motion.div className="relative grid grid-cols-1 lg:grid-cols-5 m-4 space-y-4 bg-white rounded-2xl md:flex-row md:space-y-0 gap-6">
            <motion.div
              variants={fadeIn("down", 0.3)}
              whileInView={"show"}
              viewport={{ once: false, amount: 0.6 }}
              className="flex flex-col justify-center mt-0 p-2 md:p-0 col-span-2"
            >
              <form className="space-y-6" onSubmit={handleSubmit}>
                {/* Name Field */}
                <div className="flex flex-col">
                  <label className="text-md tracking-wider mb-2" htmlFor="name">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className={`w-full p-3 border ${
                      errors.name ? "border-red-500" : "border-gray-300"
                    } rounded-md focus:outline-none focus:ring-2 focus:ring-blue-700`}
                    placeholder="Full Name"
                    value={formData.name}
                    onChange={handleChange}
                  />
                  {errors.name && (
                    <p className="text-red-500 mt-2">{errors.name}</p>
                  )}
                </div>

                {/* Email Field */}
                <div className="flex flex-col">
                  <label
                    className="text-md tracking-wider mb-2"
                    htmlFor="email"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className={`w-full p-3 border ${
                      errors.email ? "border-red-500" : "border-gray-300"
                    } rounded-md focus:outline-none focus:ring-2 focus:ring-blue-700`}
                    placeholder="Email Address"
                    value={formData.email}
                    onChange={handleChange}
                  />
                  {errors.email && (
                    <p className="text-red-500 mt-2">{errors.email}</p>
                  )}
                </div>

                {/* Phone Number Field */}
                <div className="flex flex-col">
                  <label
                    className="text-md tracking-wider mb-2"
                    htmlFor="phoneNumber"
                  >
                    Phone
                  </label>
                  <input
                    type="tel"
                    id="phoneNumber"
                    name="phoneNumber"
                    className={`w-full p-3 border ${
                      errors.phoneNumber ? "border-red-500" : "border-gray-300"
                    } rounded-md focus:outline-none focus:ring-2 focus:ring-blue-700`}
                    placeholder="9123456789"
                    value={formData.phoneNumber}
                    onChange={handleChange}
                  />
                  {errors.phoneNumber && (
                    <p className="text-red-500 mt-2">{errors.phoneNumber}</p>
                  )}
                </div>

                {/* Amount Field */}
                <div className="flex flex-col">
                  <label
                    className="text-md tracking-wider mb-2"
                    htmlFor="amount"
                  >
                    Amount
                  </label>
                  <input
                    type="number"
                    id="amount"
                    name="amount"
                    className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-700"
                    placeholder="Amount"
                    value={formData.amount}
                    onChange={handleChange}
                  />
                </div>

                {/* Submit Button */}
                <div className="flex justify-start">
                  <button
                    type="submit"
                    className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-2xl transition-colors duration-300"
                  >
                    Submit
                  </button>
                </div>
              </form>
            </motion.div>

            {/* Donation Image */}
            <motion.div
              variants={fadeIn("right", 0.3)}
              whileInView={"show"}
              viewport={{ once: false, amount: 0.6 }}
              className="relative hidden md:block col-span-3"
            >
              <img
                src="/Donate/donate form image.jpg"
                alt="Donation"
                className="w-full h-full object-cover rounded-xl"
              />
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </>
  );
};

export default Donate;
