import React from 'react';
import { HiHeart } from 'react-icons/hi';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 dark:bg-black text-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-1" data-aos="fade-right">
            <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-4">
              Anup's Portfolio
            </h3>
            <p className="text-gray-400 leading-relaxed mb-6">
              Passionate full-stack developer creating innovative solutions and exceptional digital experiences. 
              Always ready for the next challenge.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">
                <span className="sr-only">LinkedIn</span>
                <span className="text-xl">💼</span>
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">
                <span className="sr-only">GitHub</span>
                <span className="text-xl">🐙</span>
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">
                <span className="sr-only">Twitter</span>
                <span className="text-xl">🐦</span>
              </a>
              <a href="mailto:anupc1010@gmail.com" className="text-gray-400 hover:text-white transition-colors duration-200">
                <span className="sr-only">Email</span>
                <span className="text-xl">📧</span>
              </a>
            </div>
          </div>

          {/* Quick Links and Services Container */}
          <div className="col-span-1 md:col-span-2 grid grid-cols-2 gap-8">
            {/* Quick Links */}
            <div className="text-left">
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li><a href="#home" className="text-gray-400 hover:text-white transition-colors duration-200" data-aos="fade-down" data-aos-delay="200">Home</a></li>
                <li><a href="#about" className="text-gray-400 hover:text-white transition-colors duration-200" data-aos="fade-down" data-aos-delay="400">About</a></li>
                <li><a href="#skills" className="text-gray-400 hover:text-white transition-colors duration-200" data-aos="fade-down" data-aos-delay="600">Skills</a></li>
                <li><a href="#projects" className="text-gray-400 hover:text-white transition-colors duration-200" data-aos="fade-down" data-aos-delay="800">Projects</a></li>
                <li><a href="#services" className="text-gray-400 hover:text-white transition-colors duration-200" data-aos="fade-down" data-aos-delay="1000">Services</a></li>
                <li><a href="#contact" className="text-gray-400 hover:text-white transition-colors duration-200" data-aos="fade-down" data-aos-delay="1200">Contact</a></li>
              </ul>
            </div>

            {/* Services */}
            <div className="text-left">
              <h4 className="text-lg font-semibold mb-4">Services</h4>
              <ul className="space-y-2">
                <li><span className="text-gray-400" data-aos="fade-down" data-aos-delay="200">Web Development</span></li>
                <li><span className="text-gray-400" data-aos="fade-down" data-aos-delay="400">Mobile Apps</span></li>
                <li><span className="text-gray-400" data-aos="fade-down" data-aos-delay="600">API Development</span></li>
                <li><span className="text-gray-400" data-aos="fade-down" data-aos-delay="800">Cloud Solutions</span></li>
                <li><span className="text-gray-400" data-aos="fade-down" data-aos-delay="1000">Consulting</span></li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center text-gray-400 mb-4 md:mb-0">
              <span>Made with</span>
              <HiHeart className="h-4 w-4 text-red-500 mx-2" />
              <span>using React & Tailwind CSS</span>
            </div>
            <div className="text-gray-400">
              <p>&copy; {currentYear} Anup. All rights reserved.</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;