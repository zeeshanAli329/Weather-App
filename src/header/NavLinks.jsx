import React, { useState } from "react";
import { Link } from "react-router-dom";
import { VscThreeBars, VscChromeClose } from "react-icons/vsc";
import ImgLogo from "../images/web-logo.svg";

const NavLinks = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="flex flex-1 items-center relative">
      
      <div className="hidden md:hidden md:block w-[134px] h-[34px]">
        <img src={ImgLogo} alt="Logo" />
      </div>

      <div className="hidden md:flex md:w-[496px] md:h-[22px] items-center justify-between ml-auto"> <Link  to="/" className="font-archivo md:text-[20px] text-[#d1d0d0] hover:[text-shadow:0_0_20px_#FFFFFF]">About</Link>
        <Link
          to="/why-us"
          className="font-archivo md:text-[20px] text-[#d1d0d0] hover:[text-shadow:0_0_20px_#FFFFFF]"
        >
          Why Us
        </Link>
        <Link
          to="/success"
          className="font-archivo md:text-[20px] text-[#d1d0d0] hover:[text-shadow:0_0_20px_#FFFFFF]"
        >
          Services
        </Link>
        <Link
          to="/success"
          className="font-archivo md:text-[20px] text-[#d1d0d0] hover:[text-shadow:0_0_20px_#FFFFFF]"
        >
          Success Stories
        </Link>
        <Link
          to="/faqs"
          className="font-archivo md:text-[20px] text-[#d1d0d0] hover:[text-shadow:0_0_20px_#FFFFFF]"
        >
          FAQs
        </Link>
      </div>

      <button
        type="button"
        className="md:hidden ml-auto flex items-center  w-[110px] justify-end text-white"
        onClick={() => setOpen(true)}
      >
        <VscThreeBars className="text-2xl" />
      </button>

      {open && (
        <div className="fixed top-[-8px] right-[-30px] w-[320px] h-screen bg-[#111] text-[#d1d0d0] transform transition-transform duration-300  z-50 flex flex-col md:hidden">
          <div className="md:hidden flex items-center justify-between p-4 pt-[40px] mr-[24px]">
            <img src={ImgLogo} alt="Logo" className="w-[100px] h-[34px]" />
            <button onClick={() => setOpen(false)} aria-label="Close menu">
              <VscChromeClose className="text-2xl text-white" />
            </button>
          </div>

          <nav className="flex flex-col flex-1  mt-[100px]">
            <Link
              to="/"
              onClick={() => setOpen(false)}
              className="px-4 py-3 border-b border-gray-700 hover:bg-gray-800"
            >
              About
            </Link>
            <Link
              to="/why-us"
              onClick={() => setOpen(false)}
              className="px-4 py-3 border-b border-gray-700 hover:bg-gray-800"
            >
              Why Us
            </Link>
              <Link
              to="/faqs"
              onClick={() => setOpen(false)}
              className="px-4 py-3 border-b border-gray-700 hover:bg-gray-800"
            >
              Services
            </Link>

            <Link
              to="/success"
              onClick={() => setOpen(false)}
              className="px-4 py-3 border-b border-gray-700 hover:bg-gray-800"
            >
              Success Stories
            </Link>
            <Link
              to="/faqs"
              onClick={() => setOpen(false)}
              className="px-4 py-3 border-b border-gray-700 hover:bg-gray-800"
            >
              FAQs
            </Link>
          </nav>

          {/* Contact Button */}
          <div className="p-4">
            <button
              onClick={() => setOpen(false)}
              className="w-full bg-[#58595B] text-white rounded-[16px] text-[20px] py-3 hover:shadow-[0px_4px_50px_0px_#FFFFFF80] transition-all duration-300 hover:bg-white hover:text-[#58595B]"
            >
              Contact Us
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default NavLinks;
