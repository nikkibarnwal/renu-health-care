import React from "react";
import { CiLocationOn } from "react-icons/ci";
import {
  FaFacebook,
  FaInstagram,
  FaLink,
  FaXTwitter,
  FaYoutube,
} from "react-icons/fa6";
import { IoCallOutline } from "react-icons/io5";
import { MdOutlineEmail } from "react-icons/md";

const Footer = () => {
  return (
    <div className=" text-black py-10 px-2 w-full">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
        {/* About Us Section */}
        <div>
          <img className="size-14" src="/logo.png" alt="logo" />
          <h1 className="text-lg font-bold mb-2">
            Renu Sharma Healthcare & Education Foundation
          </h1>
          <p className="text-sm ">
            We ensure access to healthcare and education for all, transforming
            lives through compassion, knowledge, and support.
          </p>
        </div>
        {/* Contact Section */}
        <div className=" ">
          <h1 className="text-[16px] font-bold mb-4"> Contact Us</h1>
          <p className="text-sm flex justify-start items-center gap-2 pb-3">
            <CiLocationOn className="bg-blue-700 size-7 rounded-full p-1 text-white" />{" "}
            Gurugram, Haryana - 122503, India
          </p>
          <p className="text-sm flex justify-start items-center gap-2 pb-3">
            <MdOutlineEmail className="bg-blue-700 size-7 rounded-full p-1 text-white" />{" "}
            info@admedusociety.org
          </p>
          <p className="text-sm flex justify-start items-center gap-2 pb-3">
            <IoCallOutline className="bg-blue-700 size-7 rounded-full p-1 text-white" />{" "}
            +91-9958586721
          </p>
        </div>

        {/* Quick Links Section */}
        <div>
          <h1 className="text-[16px] font-bold mb-4">Resources</h1>
          <ul className="space-y-3">
            <li>
              <a href="/About" className="hover:text-slate-500">
                About Us
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-slate-500">
                Careers
              </a>
            </li>
            <li>
              <a href="/Events" className="hover:text-slate-500">
                Events
              </a>
            </li>
            <li>
              <a href="/Donate" className="hover:text-slate-500">
                Donate
              </a>
            </li>
            <li>
              <a href="/Gallery" className="hover:text-slate-500">
                Gallery
              </a>
            </li>
          </ul>
        </div>

        {/* Newsletter Section */}
        <div>
          <h1 className="text-[16px] font-bold mb-2">Connect with us</h1>
          <div className="flex justify-start items-center gap-4 pb-4">
            <FaXTwitter className="bg-blue-700 size-8 rounded-full p-[6px] text-white" />
            <FaInstagram className="bg-blue-700 size-8 rounded-full p-[6px] text-white" />
            <FaFacebook className="bg-blue-700 size-8 rounded-full p-[6px] text-white" />
            <FaYoutube className="bg-blue-700 size-8 rounded-full p-[6px] text-white" />
            <FaLink className="bg-blue-700 size-8 rounded-full p-[6px] text-white" />
          </div>
          <p className="text-sm  font-bold pb-2">Subscribe to our Newsletter</p>
          <form className="flex ">
            <input
              type="email"
              placeholder="Enter your email"
              className="p-2 border-blue-700 border-1 rounded-l-2xl text-gray-500"
            />
            <button
              type="submit"
              className="bg-blue-700 text-white px-4 py-2 rounded-r-2xl "
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>

      <div className="border-t border-slate-300 mt-10 flex justify-center items-center gap-3">
        <img className="size-6" src="/logo.png" alt="logo" />
        <p className="text-center text-sm py-4 font-normal">
          © 2024 All Rights Reserved : Renu Sharma Healthcare & Education
          Foundation
        </p>
      </div>
    </div>
  );
};

export default Footer;
