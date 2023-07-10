import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-white shadow-lg flex items-center justify-between px-4 py-3">
      <div>
        <img src= "/nike-logo.png" alt="Nike logo" style={{height:'70px', width:'auto'}} className="h-8" />
      </div>
      <div className="flex items-center space-x-4">
        <a href="#" className="text-black font-semibold transition-colors duration-300 hover:text-gray-500">
          Men
        </a>
        <a href="#" className="text-black font-semibold transition-colors duration-300 hover:text-gray-500">
          Women
        </a>
        <a href="#" className="text-black font-semibold transition-colors duration-300 hover:text-gray-500">
          Accessories
        </a>
      </div>
      <div>
        <a href="#" className="text-black transition-colors duration-300 hover:text-gray-500">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="h-6 w-6"
          >
            <circle cx="9" cy="21" r="1" />
            <circle cx="20" cy="21" r="1" />
            <path d="M1 1h4l2.26 12.36A2 2 0 0 0 9.15 15H19" />
          </svg>
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
