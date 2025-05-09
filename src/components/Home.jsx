import React from 'react';
import { FaLinkedin, FaGithub, FaTwitter } from 'react-icons/fa';

const Home = () => {
  return (
    <section
      id="home"
      className="pt-24 px-8 bg-stone-900 text-white min-h-screen flex flex-col md:flex-row items-center justify-between"
    >
      {/* Left Side: Text */}
      <div className="md:w-1/2 mb-10 md:mb-0">
        <h1 className="text-2xl md:text-2xl font-thin mb-4 text-gray-300">
          Hi, I'm <br />
          Ruth Zewdu
        </h1>
        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-orange-500">
          Frontend Developer and <br />
          Networking
        </h1>
        <p className="text-lg text-gray-300 mb-6">
          A passionate Computer Science and Engineering student focused on building responsive web apps and solving real-world problems.
        </p>
        {/* Social Media Icons */}
        <div className="flex gap-6 text-2xl text-orange-400 mb-6">
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
            <FaLinkedin className="hover:text-white transition-colors" />
          </a>
          <a href="https://github.com" target="_blank" rel="noopener noreferrer">
            <FaGithub className="hover:text-white transition-colors" />
          </a>
          <a href="https://telegram.com" target="_blank" rel="noopener noreferrer">
            <FaTwitter className="hover:text-white transition-colors" />
          </a>
        </div>
        <a
          href="#contact"
          className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-full transition-all inline-block"
        >
          Hire Me
        </a>
      </div>

      {/* Right Side: Image */}
      <div className="md:w-1/2 flex justify-center">
        <img
          src="https://via.placeholder.com/300" // Replace with your own image URL
          alt="Profile"
          className="rounded-full w-60 h-60 object-cover"
        />
      </div>
    </section>
  );
};

export default Home;
