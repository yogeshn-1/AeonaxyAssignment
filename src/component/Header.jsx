import React, { useState } from "react";
import logo from "../img/logo.svg";
const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <nav className="w-full sticky top-0 z-50  bg-white shadow-xl">
      <div className="px-6 py-4 flex items-center justify-between ">
        <img alt="Calendly logo" className="h-8 " src={logo} />
        <div className="flex gap-4 md:hidden xs:hidden sm:hidden">
          <span className="hover:text-blue-400 cursor-pointer ">
            Individuals
          </span>
          <span className="hover:text-blue-400 cursor-pointer">Teams</span>
          <span className="hover:text-blue-400 cursor-pointer">
            Enterprises
          </span>
          <span className="group relative">
            <span className="hover:text-blue-400 cursor-pointer">
              Products &raquo;
            </span>
            <ul className="group-hover:flex flex-col gap-2 hidden p-4 absolute z-20 bg-[#fafafa] w-[200px] rounded-lg shadow-lg ">
              <li className="hover:text-blue-400 cursor-pointer">Marketing</li>
              <li className="hover:text-blue-400 cursor-pointer">Sales</li>
              <li className="hover:text-blue-400 cursor-pointer">
                Information Technology
              </li>
              <li className="hover:text-blue-400 cursor-pointer">Education</li>
              <li className="hover:text-blue-400 cursor-pointer">Recruiting</li>
            </ul>
          </span>
          <span className="hover:text-blue-400 cursor-pointer ">Pricing</span>
          <span className="group relative">
            <span className="hover:text-blue-400 cursor-pointer ">
              Resources &raquo;
            </span>
            <ul className="group-hover:flex flex-col gap-2 hidden p-4 absolute z-20 bg-[#fafafa] w-[200px] rounded-lg shadow-lg ">
              <li className="hover:text-blue-400 cursor-pointer">E-Books</li>
              <li className="hover:text-blue-400 cursor-pointer">Webinar</li>
              <li className="hover:text-blue-400 cursor-pointer">Blog</li>
              <li className="hover:text-blue-400 cursor-pointer">
                Video Tutorials
              </li>
            </ul>
          </span>
        </div>
        <div className="md:hidden xs:hidden sm:hidden">
          <a href="" className="hover:text-blue-400">
            Login
          </a>
          <button className="py-2 px-5 mx-2 bg-blue-500 hover:bg-blue-700 text-white rounded-full w-fit duration-200">
            Get Started
          </button>
        </div>
        <div className="block lg:hidden xl:hidden ">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="flex items-center px-3 py-2 border rounded text-black border-gray-700  hover:border-black absolute top-5 right-5 z-30"
          >
            <svg
              className="fill-current h-3 w-3"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
            </svg>
          </button>
        </div>
      </div>
      <div
        className={`${
          isMenuOpen ? "flex" : "hidden"
        } w-full p-4 min-h-fit text-sm bg-white rounded-xl flex-col shadow-xl absolute right-0 top-0 z-10 lg:hidden xl:hidden `}
      >
        <img alt="Calendly logo" className="h-8 self-start" src={logo} />
        <span className="hover:text-blue-400 mb-2 w-full text-center">
          Individuals
        </span>
        <span className="hover:text-blue-400 mb-2 w-full text-center">
          Teams
        </span>
        <span className="hover:text-blue-400 mb-2 w-full text-center">
          Enterprises
        </span>
        <span className="hover:text-blue-400 mb-2 w-full text-center">
          Product
        </span>
        <span className="hover:text-blue-400 mb-2 w-full text-center">
          Pricing
        </span>
        <span className="hover:text-blue-400 mb-2 w-full text-center">
          Resource
        </span>
        <div className="flex gap-2 m-2 xs:flex-col xs:items-center w-full justify-center">
          <a href="#" className="hover:text-blue-400">
            Login
          </a>
          <button className="px-2 py-1 bg-blue-500 rounded-2xl text-white w-fit text-nowrap">
            Get Started
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Header;
