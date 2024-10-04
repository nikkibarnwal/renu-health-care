import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { fadeIn } from './Variant';
import { CiMail } from 'react-icons/ci';
import { FiMail } from 'react-icons/fi';
import { IoCallOutline } from 'react-icons/io5';
import { MdOutlineLocationOn } from 'react-icons/md';

const Donate = () => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [isValid, setIsValid] = useState(true);

  const handleChange = event => {
    const { value } = event.target;
    const regex = /^\d{10}$/;
    const isValidPhoneNumber = regex.test(value);
    setPhoneNumber(value);
    setIsValid(isValidPhoneNumber);
  };

  return (
    <>
      <div className="sm:w-11/12 m-auto ">
        {/* Hero Section */}
        <div className="p-2 lg:p-0">
          <h1 className="text-2xl lg:text-4xl font-bold  text-center mt-6 mb-4">
            Donate Some Happiness
          </h1>
          <img
            className="w-full rounded-lg my-2 lg:h-[500px] object-cover"
            src="/Donate/hero donate.jpg"
            alt=""
          />
          <p className="text-sm text-center">
            Join us in making a lasting impact! Your generous donations to
            RenuHealthcare enable us to deliver essential healthcare services,
            social initiatives, and <br /> educational programs to underserved
            communities. Together, we can create a healthier, more
            compassionate world.
          </p>
        </div>

        {/* show your support  */}

        <div>
          <h1 className="text-2xl lg:text-4xl font-bold  text-center mt-10">
            Show Your Support
          </h1>
          <p className="text-[16px] text-center py-3">
            Fill the following details to provide your support for the cause
          </p>
          <div className="flex flex-col lg:flex-row justify-center lg:items-center  gap-3 lg:gap-5 ml-6 lg:ml-0">
            <div className="flex justify-start lg:justify-center items-center gap-6">
              <MdOutlineLocationOn className="text-[#2F855A] text-3xl" />
              <div>
                <p>Address</p>
                <p className="text-[16px] font-bold">
                  Gurugram,Haryana - 122503,India
                </p>
              </div>
            </div>
            <div className="flex justify-start lg:justify-center items-center gap-6">
              <IoCallOutline className="text-[#2F855A] text-3xl" />
              <div>
                <p>Call Us</p>
                <p className="text-[16px] font-bold">+01234567890</p>
              </div>
            </div>
            <div className="flex justify-start lg:justify-center items-center gap-6">
              <FiMail className="text-[#2F855A] text-3xl" />
              <div>
                <p>Email Us</p>
                <p className="text-[16px] font-bold">info@renuhealthcare.com</p>
              </div>
            </div>
          </div>
        </div>

        {/* Donation Form */}
        <motion.div className=" flex items-center justify-center min-h-screen ">
          <motion.div className="relative grid grid-cols-1 lg:grid-cols-5 m-4 space-y-4 bg-white  rounded-2xl md:flex-row md:space-y-0  gap-6">
            <motion.div
              variants={fadeIn('down', 0.3)}
              initial="hidden"
              whileInView={'show'}
              viewport={{ once: false, amount: 0.6 }}
              className="flex flex-col justify-center mt-0 p-2 md:p-0 col-span-2"
            >
              <form className="space-y-6">
                <div className="flex flex-col">
                  <label className="text-md tracking-wider mb-2">Name</label>
                  <input
                    type="text"
                    className="w-full p-3 border border-gray-300 rounded-md"
                    placeholder="Full Name"
                  />
                </div>
                <div className="flex flex-col">
                  <label className="text-md tracking-wider mb-2">Email</label>
                  <input
                    type="email"
                    className="w-full p-3 border border-gray-300 rounded-md"
                    placeholder="Email Address"
                  />
                </div>
                <div className="flex flex-col">
                  <label className="text-md tracking-wider mb-2">Phone</label>
                  <input
                    type="tel"
                    className="w-full p-3 border border-gray-300 rounded-md"
                    placeholder="Mobile Number"
                    value={phoneNumber}
                    onChange={handleChange}
                  />
                  {!isValid && (
                    <p className="text-red-500 mt-2">
                      Please enter a valid 10-digit phone number.
                    </p>
                  )}
                </div>
                <div className="flex flex-col">
                  <label className="text-md tracking-wider mb-2">Amount</label>
                  <input
                    type="number"
                    className="w-full p-3 border border-gray-300 rounded-md"
                    placeholder="Amount"
                  />
                </div>
                <div className="flex justify-start">
                  <button className=" bg-[#24774F] text-white px-4 py-2 rounded-2xl hover:bg-gray-800">
                    Submit
                  </button>
                </div>
              </form>
            </motion.div>
            <motion.div
              variants={fadeIn('right', 0.3)}
              initial="hidden"
              whileInView={'show'}
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
