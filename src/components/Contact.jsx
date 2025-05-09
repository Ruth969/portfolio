import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Contact = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <section id="contact" className="py-20 px-8 bg-stone-900 text-white">
      <h2 className="text-4xl font-bold text-center text-orange-500 mb-12" data-aos="fade-up">
        Contact Me
      </h2>

      <div className="max-w-3xl mx-auto" data-aos="fade-up">
        <form className="bg-stone-800 p-8 rounded-xl shadow-lg space-y-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
              Name
            </label>
            <input
              type="text"
              id="name"
              className="w-full p-3 rounded-md bg-stone-700 text-white focus:outline-none focus:ring-2 focus:ring-orange-500"
              placeholder="Your Name"
              required
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              className="w-full p-3 rounded-md bg-stone-700 text-white focus:outline-none focus:ring-2 focus:ring-orange-500"
              placeholder="you@example.com"
              required
            />
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
              Message
            </label>
            <textarea
              id="message"
              rows="5"
              className="w-full p-3 rounded-md bg-stone-700 text-white focus:outline-none focus:ring-2 focus:ring-orange-500"
              placeholder="Write your message here..."
              required
            ></textarea>
          </div>

          <button
            type="submit"
            className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-full transition-all"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
