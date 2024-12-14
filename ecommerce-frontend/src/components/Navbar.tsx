import React from 'react';
import { Link } from 'react-router-dom';

const Navbar: React.FC = () => {
  return (
    <div>
      {/* Top Bar */}
      <div id="top-bar" className="bg-gray-100 fixed top-0 right-0 left-0 py-2 shadow-md z-10">
        <p className="text-center font-semibold text-gray-700">
          Welcome to our store!
        </p>
      </div>
  
      {/* Navigation Bar */}
      <nav className="p-4 bg-gray-800 text-white flex justify-center space-x-6 mt-12">
        <Link to="/" className="hover:text-gray-400">
          Home
        </Link>
        <Link to="/cart" className="hover:text-gray-400">
          Cart
        </Link>
      </nav>
    </div>
  );
  
};

export default Navbar;
