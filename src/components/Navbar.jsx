import React from 'react';
import { IoMenuOutline } from 'react-icons/io5';
import { Link } from 'react-scroll';

const Navbar = ({ menuOpen, setMenuOpen }) => (
  <header className="fixed top-0 left-0 w-full z-50 bg-stone-900 text-white py-5 px-8 flex justify-between items-center">
    {/* Logo */}
    <h2 className="text-2xl font-bold bg-gradient-to-r from-orange-600 via-orange-400 to-orange-500 text-transparent bg-clip-text">
      RuthZewdu
    </h2>

    {/* Nav Links */}
    <ul
      className={`md:flex gap-16 ${menuOpen ? 'flex' : 'hidden'} flex-col md:flex-row absolute md:static top-16 left-0 w-full md:w-auto bg-gray-900 md:bg-transparent p-4 md:p-0 items-center justify-center text-center`}
    >
      {['Home', 'About', 'Works', 'Contact'].map((item) => (
        <li key={item}>
          <Link
            to={item.toLowerCase()}
            smooth={true}
            duration={500}
            spy={true}
            offset={-70}
            activeClass="text-orange-500"
            className="cursor-pointer text-lg hover:text-orange-400 transition-colors"
            onClick={() => setMenuOpen(false)} // Close menu on mobile click
          >
            {item}
          </Link>
        </li>
      ))}

      {/* "Hire Me" button inside dropdown on mobile */}
      <li className="md:hidden mt-2">
        <Link
          to="contact"
          smooth={true}
          duration={500}
          offset={-70}
          className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-full transition-all cursor-pointer"
          onClick={() => setMenuOpen(false)}
        >
          Hire Me
        </Link>
      </li>
    </ul>

    {/* "Hire Me" button for desktop */}
    <Link
      to="contact"
      smooth={true}
      duration={500}
      offset={-70}
      className="hidden md:inline-block bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-full transition-all cursor-pointer"
    >
      Hire Me
    </Link>

    {/* Mobile Menu Icon */}
    <div className="text-2xl md:hidden cursor-pointer" onClick={() => setMenuOpen(!menuOpen)}>
      <IoMenuOutline />
    </div>
  </header>
);

export default Navbar;
