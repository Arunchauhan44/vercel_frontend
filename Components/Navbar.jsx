import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div>
      <nav className="bg-green-700 p-6">
        <div className="container mx-auto flex justify-between items-center">
          <div className="text-white text-lg font-bold">SeedShop</div>
          {/* Hamburger menu button (visible on small screens) */}
          <button
            className="md:hidden text-white focus:outline-none"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {menuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                     />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
          {/* Menu */}
          <ul
            className={`flex-col md:flex-row md:flex space-y-4 md:space-y-0 space-x-0 md:space-x-4 absolute md:static bg-green-700 left-0 w-full md:w-auto top-20 md:top-auto z-10 transition-all duration-300 ease-in-out ${
              menuOpen ? "flex" : "hidden"
            } md:flex`}
          >
            <li>
              <Link to="/" className="text-white hover:text-gray-300" onClick={() => setMenuOpen(false)}>
                Home
              </Link>
            </li>
            <li>
              <Link to="/products" className="text-white hover:text-gray-300" onClick={() => setMenuOpen(false)}>
                Products
              </Link>
            </li>
            <li>
              <Link to="/contact" className="text-white hover:text-gray-300" onClick={() => setMenuOpen(false)}>
                Contact
                 </Link>
            </li>
            <li>
              <Link to="/about" className="text-white hover:text-gray-300" onClick={() => setMenuOpen(false)}>
                About
              </Link>
            </li>
            <li>
              <Link to="/Signup" className="text-white hover:text-gray-300" onClick={() => setMenuOpen(false)}>
                SignIn
              </Link>
            </li>
            <li>
              <Link to="/Login" className="text-white hover:text-gray-300" onClick={() => setMenuOpen(false)}>
                Login
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;