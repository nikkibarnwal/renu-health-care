import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { fadeIn } from './Variant';

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
      <div className="sm:w-11/12 m-auto bg-gray-100">
        {/* Hero Section */}
        <motion.div
          variants={fadeIn('up', 0.2)}
          initial="hidden"
          whileInView={'show'}
          viewport={{ once: false, amount: 0.6 }}
          className="relative h-52 sm:h-96 md:h-[40rem] rounded-sm flex flex-col justify-center sm:px-14 lg:px-32 px-5 text-white bg-no-repeat bg-cover opacity-90"
          style={{
            backgroundImage: `url("/Donate/main3.png")`,
          }}
        >
          <div className="absolute inset-0 bg-black opacity-40"></div>
          <div className="relative w-full lg:w-4/5 content-center space-y-5 text-center">
            <motion.img
              variants={fadeIn('down', 0.8)}
              initial="hidden"
              whileInView={'show'}
              viewport={{ once: false, amount: 0.6 }}
              src="/Donate/logo-give.png"
              alt="Donate Logo"
              className="mx-auto"
            />
            <p className="font-bold text-lg md:text-2xl tracking-widest">
              Your support can make a difference! Help us make the world a
              better place.
            </p>
          </div>
        </motion.div>

        {/* Donation Form */}
        <motion.div className="w-full flex items-center justify-center min-h-screen bg-gray-100">
          <motion.div className="relative flex flex-col m-4 space-y-4 bg-white shadow-2xl rounded-2xl md:flex-row md:space-y-0 p-4 md:p-8">
            <motion.div
              variants={fadeIn('down', 0.3)}
              initial="hidden"
              whileInView={'show'}
              viewport={{ once: false, amount: 0.6 }}
              className="flex flex-col justify-center mt-0 p-4 md:p-8"
            >
              <img src="/logo.png" className="h-20 w-20 mx-auto" alt="logo" />
              <h1 className="text-3xl font-bold text-bPrimary text-center mb-4">
                Support Us Today!
              </h1>
              <p className="text-center mb-6 text-gray-600">
                Fill in your details and make a difference. Your contribution
                matters!
              </p>
              <form className="space-y-4">
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
                  <label className="text-md tracking-wider mb-2">
                    Mobile Number
                  </label>
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
                  <label className="text-md tracking-wider mb-2">
                    Donation Amount
                  </label>
                  <input
                    type="number"
                    className="w-full p-3 border border-gray-300 rounded-md"
                    placeholder="Amount"
                  />
                </div>
                <div className="flex justify-center">
                  <button className="w-full bg-black text-white p-3 rounded-lg hover:bg-gray-800">
                    Donate Now
                  </button>
                </div>
              </form>
            </motion.div>
            <motion.div
              variants={fadeIn('right', 0.3)}
              initial="hidden"
              whileInView={'show'}
              viewport={{ once: false, amount: 0.6 }}
              className="relative hidden md:block"
            >
              <img
                src="/Donate/donate.png"
                alt="Donation"
                className="w-full h-full object-cover rounded-r-2xl"
              />
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </>
  );
};

export default Donate;
