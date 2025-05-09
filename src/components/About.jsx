import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import the AOS styles
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaGithub, FaGit } from 'react-icons/fa';

const Rings = () => {
  return (
    <>
      <div className="absolute top-1/2 left-1/2 w-[20rem] aspect-square border-2 border-solid border-gray-500 rounded-full -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute top-1/2 left-1/2 w-[15rem] aspect-square border-2 border-solid border-gray-500 rounded-full -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute top-1/2 left-1/2 w-[10rem] aspect-square border-2 border-solid border-gray-500 rounded-full -translate-x-1/2 -translate-y-1/2" />
    </>
  );
};

const About = () => {
  // Initialize AOS for animations on mount
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration
      once: false, // Set to false to make the animation repeat on scrolling back
      offset: 120, // Start animations after scrolling 120px
    });

    // Refresh AOS every time the component mounts or when scrolling
    AOS.refresh();
  }, []);

  return (
    <section id="about" className="py-20 px-10 bg-stone-900 text-white text-center md:text-left">
      {/* About Header centered */}
      <h2
        className="text-3xl font-bold text-orange-500 mb-6 mx-auto"
        data-aos="fade-up" // Animation on title
      >
        About Me
      </h2>
      
      <div className="md:flex md:justify-between">
        {/* Left Side: Description */}
        <div className="md:w-150 mb-10 md:mb-0" data-aos="fade-right">
          <p className="max-w-2xl mx-auto text-gray-300 text-lg mb-6" data-aos="fade-up">
            Hello! I'm Ruth Zewdu, a passionate web designer and developer based in Addis Ababa, Ethiopia.
            I specialize in crafting modern, responsive websites that blend aesthetics with functionality.
            With a strong foundation in HTML, CSS, JavaScript, and React, I focus on delivering clean code
            and engaging user experiences.
          </p>
          <p className="max-w-2xl mx-auto text-gray-300 text-lg" data-aos="fade-up">
            When I'm not coding, I enjoy exploring new design trends, learning emerging technologies, and working on personal projects that challenge me creatively.
          </p>
        </div>

        {/* Right Side: Skills as Solar System with Orbit Paths */}
        <div className="md:w-1/2 mt-12 md:mt-0 flex flex-col justify-center items-center relative">
          <h2 className="text-3xl font-bold text-orange-500 mb-6" data-aos="fade-left">
            My Skills
          </h2>
          {/* Solar System-like Effect with Rotation */}
          <div className="relative w-96 h-96 animate-spin-slow"> {/* Apply the animation class here */}
            {/* Central Sun (Skill Text) */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-xl text-orange-500 z-10">
              My Skills
            </div>

            {/* Orbit Rings */}
            <Rings />

            <div className="absolute w-full h-full rounded-full border-2 border-solid border-gray-500">
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-10 text-4xl text-orange-500" data-aos="zoom-in">
                <FaHtml5 title="HTML5" className="hover:text-white transition-all" />
              </div>
              <div className="absolute left-1/4 top-3/4 w-10 text-4xl text-orange-500" data-aos="zoom-in" data-aos-delay="100">
                <FaCss3Alt title="CSS3" className="hover:text-white transition-all" />
              </div>
              <div className="absolute bottom-25 left-1/2 transform -translate-x-1/2 w-10 text-4xl text-orange-500" data-aos="zoom-in" data-aos-delay="200">
                <FaJs title="JavaScript" className="hover:text-white transition-all" />
              </div>
              <div className="absolute left-3/4 top-3/4 w-10 text-4xl text-orange-500" data-aos="zoom-in" data-aos-delay="300">
                <FaReact title="React.js" className="hover:text-white transition-all" />
              </div>
              <div className="absolute top-27 left-70 transform -translate-x-1/2 w-10 text-4xl text-orange-500" data-aos="zoom-in" data-aos-delay="400">
                <FaHtml5 title="HTML5" className="hover:text-white transition-all" />
              </div>
              <div className="absolute left-80 top-46 w-10 text-4xl text-orange-500" data-aos="zoom-in" data-aos-delay="500">
                <FaCss3Alt title="CSS3" className="hover:text-white transition-all" />
              </div>
            </div>

            <div className="absolute w-full h-full rounded-full border-2 border-solid border-gray-500">
              <div className="absolute top-30 left-1/4 transform -translate-x-1/2 w-10 text-4xl text-orange-500" data-aos="zoom-in" data-aos-delay="600">
                <FaNodeJs title="Node.js" className="hover:text-white transition-all" />
              </div>
              <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-10 text-4xl text-orange-500" data-aos="zoom-in" data-aos-delay="700">
                <FaGithub title="GitHub" className="hover:text-white transition-all" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
