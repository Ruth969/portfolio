import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

// Replace with your actual image paths
import work1 from '../assets/work1.jpg';
import work2 from '../assets/work2.jpg';

const Works = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const projects = [
    {
      img: work1,
      title: 'E-Commerce Website',
      desc: 'A modern e-commerce platform built with React, Node.js, and MongoDB. Features include product filtering, cart management, and secure checkout.',
    },
    {
      img: work2,
      title: 'Portfolio Website',
      desc: 'A personal portfolio website showcasing my design and development work using HTML, CSS, JavaScript, and animation libraries.',
    },
  ];

  return (
    <section id="works" className="py-20 px-6 md:px-10 bg-stone-900 text-white">
      <h2 className="text-3xl font-bold text-orange-500 mb-16 text-center" data-aos="fade-up">
        My Works
      </h2>

      <div className="space-y-16">
        {projects.map((project, index) => {
          const isEven = index % 2 === 0;
          return (
            <div
              key={index}
              className={`flex flex-col md:flex-row ${
                !isEven ? 'md:flex-row-reverse' : ''
              } items-center gap-10`}
              data-aos={isEven ? 'fade-right' : 'fade-left'}
            >
              {/* Image */}
              <div className="md:w-1/2 w-full">
                <img
                  src={project.img}
                  alt={project.title}
                  className="w-full h-64 object-cover rounded-xl shadow-lg"
                />
              </div>

              {/* Text */}
              <div className="md:w-1/2 text-center md:text-left">
                <h3 className="text-2xl font-bold text-orange-400 mb-3">{project.title}</h3>
                <p className="text-gray-300 text-md">{project.desc}</p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Works;
