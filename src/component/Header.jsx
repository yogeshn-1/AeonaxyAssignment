import React, { useState } from "react";
import logo from "../img/logo.svg";
const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <nav className="w-full bg-white">
      <div className="p-3 flex items-center justify-between mx-auto max-w-7xl relative">
        <img alt="Calendly logo" className="h-8" src={logo} />
        <div className="flex gap-4 md:hidden xs:hidden sm:hidden">
          <a href="#" className="hover:text-blue-400 ">
            Individuals
          </a>
          <a href="#" className="hover:text-blue-400 ">
            Teams
          </a>
          <a href="#" className="hover:text-blue-400 ">
            Enterprises
          </a>
          <a href="#" className="hover:text-blue-400 ">
            Product
          </a>
          <a href="#" className="hover:text-blue-400 ">
            Pricing
          </a>
          <a href="#" className="hover:text-blue-400 ">
            Resource
          </a>
        </div>
        <div className="md:hidden xs:hidden sm:hidden">
          <a href="#" className="hover:text-blue-400">
            Login
          </a>
          <button className="px-2 py-1 mx-2 bg-blue-500 rounded-2xl w-fit">
            Get Started
          </button>
        </div>
        <div className="block lg:hidden xl:hidden 2xl:hidden">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="flex items-center px-3 py-2 border rounded text-black border-white hover:text-black hover:border-white "
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
        <div
          className={`${
            isMenuOpen ? "hidden" : "flex"
          } right-0 top-10 z-10 w-1/3  p-4 h-screen text-sm bg-white/80 rounded xl flex-col absolute lg:hidden xl:hidden 2xl:hidden`}
        >
          <span className="hover:text-blue-400 border-b mb-1">Individuals</span>
          <span className="hover:text-blue-400 border-b mb-1">Teams</span>
          <span className="hover:text-blue-400 border-b mb-1">Enterprises</span>
          <span className="hover:text-blue-400 border-b mb-1">Product</span>
          <span className="hover:text-blue-400 border-b mb-1">Pricing</span>
          <span className="hover:text-blue-400 border-b mb-1">Resource</span>
          <div className="flex gap-2 m-2 xs:flex-col">
            <a href="#" className="hover:text-blue-400">
              Login
            </a>
            <button className="px-2 py-1 bg-blue-500 rounded-2xl w-fit text-nowrap">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
