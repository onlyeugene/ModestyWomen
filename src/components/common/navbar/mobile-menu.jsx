// Create a new file: src/components/navbar/mobile-menu.jsx (adjust path as needed)
import React, { useState } from "react";
import { Link } from "react-router-dom";

const MobileMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      {/* Hamburger Button - Visible only on mobile */}
      <div className="md:hidden block">
        <button onClick={toggleMenu} className="focus:outline-none">
          {/* Replace with your assets.hamburger if available; otherwise use this SVG */}
          {/* <img src={assets.hamburger} alt="menu" className="w-6 h-6" /> */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 text-gray-800"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
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

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 bg-black/50 bg-opacity-50 z-40 transition-opacity duration-300 ease-in-out ${
          isOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        onClick={toggleMenu} // Close when clicking overlay
      ></div>

      {/* Sliding Menu Panel */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-white z-50 shadow-lg transform transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="p-5">
          {/* Close Button */}
          <button
            onClick={toggleMenu}
            className="absolute top-5 right-5 focus:outline-none"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-gray-800"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>

          {/* Menu Links */}
          <nav className="mt-10">
            <ul className="flex flex-col space-y-6 text-base font-medium">
              <li className="hover:text-green-600 transition-colors">
                <a href="#about" onClick={toggleMenu}>
                  About
                </a>
              </li>
              <li className="hover:text-green-600 transition-colors">
                <a href="#donations" onClick={toggleMenu}>
                  Donations
                </a>
              </li>
              <Link
                to="/blogs"
                className="hover:text-green-600 transition-colors"
              >
                Blogs
              </Link>
              <li className="hover:text-green-600 transition-colors">
                <a href="#campaigns" onClick={toggleMenu}>
                  Campaigns
                </a>
              </li>
              <li className="hover:text-green-600 transition-colors">
                <a href="#contact" onClick={toggleMenu}>
                  Contact us
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </>
  );
};

export default MobileMenu;
