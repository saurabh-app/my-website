import React from 'react';
import logo from '../assets/logo.webp'; 
const Header = () => {
  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto flex items-center justify-between p-4">
      <img href="/" src={logo} className="App-logo h-10 w-10" alt="logo" />
        <div className="text-2xl font-bold text-blue-600">
         
        </div>

        {/* Navigation */}
        <nav className="hidden md:flex space-x-6">
          <a href="#home" className="text-gray-600 hover:text-blue-600">
            Home
          </a>
          <a href="#about" className="text-gray-600 hover:text-blue-600">
            About
          </a>
          <a href="#services" className="text-gray-600 hover:text-blue-600">
            Services
          </a>
          <a href="#contact" className="text-gray-600 hover:text-blue-600">
            Contact
          </a>
        </nav>

        {/* Button */}
        <div className="hidden md:block">
          <a
            href="#signup"
            className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
          >
            Sign Up
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden">
          <button
            type="button"
            className="text-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-600"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
