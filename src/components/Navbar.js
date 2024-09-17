import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-gray-800 text-white sticky top-0 z-50 shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <h1 className="text-2xl font-bold text-teal-400">SmartScrap</h1>
          </div>
          <div className="hidden md:flex">
            <div className="ml-10 flex items-center space-x-6">
              <Link to="/" className="text-white hover:text-teal-300 px-3 py-2 rounded-md text-base font-medium transition duration-300 ease-in-out">
                Home
              </Link>
              <Link to="/features" className="text-white hover:text-teal-300 px-3 py-2 rounded-md text-base font-medium transition duration-300 ease-in-out">
                Features
              </Link>
              <Link to="/contact" className="text-white hover:text-teal-300 px-3 py-2 rounded-md text-base font-medium transition duration-300 ease-in-out">
                Contact
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
