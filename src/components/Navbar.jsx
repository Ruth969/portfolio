import React, { useState } from 'react';
import { Link } from 'react-scroll';
import { motion } from 'framer-motion';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);

  const navItems = ['home', 'about', 'works', 'contact'];

  return (
    <motion.nav
  initial={{ y: -100, opacity: 0 }}
  animate={{ y: 0, opacity: 1 }}
  transition={{ duration: 0.8, ease: 'easeOut' }}
  className="fixed top-0 left-0 w-full bg-stone-900 text-white z-50"
>
  <div className="flex justify-between items-center px-6 md:px-6 h-8">
    {/* Logo */}
    <h2 className="text-2xl mt-10 font-bold bg-gradient-to-r from-orange-600 via-orange-400 to-orange-500 text-transparent bg-clip-text">
      RuthZewdu
    </h2>

    {/* Mobile Menu Toggle */}
    <div className="md:hidden z-50 cursor-pointer" onClick={toggleMenu}>
      {menuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
    </div>
  </div>

  {/* Desktop Nav Centered */}
  <div className="hidden md:flex justify-center items-center space-x-10 pb-4 gap-10">
    {navItems.map((item) => (
      <Link
        key={item}
        to={item}
        smooth={true}
        duration={500}
        offset={-70}
        spy={true}
        activeClass="text-orange-500"
        className="cursor-pointer hover:text-orange-400 transition-colors capitalize"
      >
        {item}
      </Link>
    ))}
  </div>

  {/* "Hire Me" button for Desktop on the Right */}
  <div className="hidden md:flex justify-end items-center px-10 pb-5 mt-0">
    <Link
      to="contact"
      smooth={true}
      duration={500}
      offset={-70}
      className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-full transition-all cursor-pointer"
    >
      Hire Me
    </Link>
  </div>

  {/* Mobile Nav */}
  {menuOpen && (
    <div className="absolute top-16 left-0 w-full bg-stone-900 flex flex-col items-center py-6 space-y-4 md:hidden">
      {navItems.map((item) => (
        <Link
          key={item}
          to={item}
          smooth={true}
          duration={500}
          offset={-70}
          spy={true}
          onClick={closeMenu}
          activeClass="text-orange-500"
          className="cursor-pointer hover:text-orange-400 text-lg capitalize"
        >
          {item}
        </Link>
      ))}
      <Link
        to="contact"
        smooth={true}
        duration={500}
        offset={-70}
        onClick={closeMenu}
        className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-full transition-all cursor-pointer"
      >
        Hire Me
      </Link>
    </div>
  )}
</motion.nav>


  );
};

export default Navbar;
