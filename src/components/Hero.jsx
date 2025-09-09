import React from "react";
import { HiArrowDown } from "react-icons/hi";
import Typewriter from "./Typewriter";
import useInViewAnimation from "../hooks/useInViewAnimation";

const Hero = () => {
  // Animation refs for different sections
  const textSectionRef = useInViewAnimation(
    "animate-fade-right duration-1000 ease-out",
  );
  const imageSectionRef = useInViewAnimation(
    "animate-fade-left duration-1000 ease-out delay-300",
  );

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800 px-4 sm:px-6 lg:px-8 w-full overflow-x-hidden"
    >
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Image Section - First on mobile, Right on desktop */}
          <div
            ref={imageSectionRef}
            className="order-1 lg:order-2 flex justify-center lg:justify-end opacity-0"
          >
            <div className="relative">
              <div className="w-80 h-80 lg:w-96 lg:h-96 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 p-1 shadow-2xl">
                <div className="w-full h-full rounded-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center overflow-hidden">
                  {/* Placeholder for your image - replace with actual image */}
                  <div className="w-full h-full bg-gradient-to-br from-gray-300 to-gray-400 dark:from-gray-600 dark:to-gray-700 flex items-center justify-center">
                    <span className="text-6xl lg:text-7xl">👨‍💻</span>
                  </div>
                </div>
              </div>
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-blue-500 opacity-20 rounded-full blur-xl animate-pulse"></div>
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-purple-500 opacity-20 rounded-full blur-xl animate-pulse delay-1000"></div>
            </div>
          </div>

          {/* Text Content Section - Second on mobile, Left on desktop */}
          <div
            ref={textSectionRef}
            className="order-2 lg:order-1 text-center lg:text-left opacity-0"
          >
            <div className="mb-8">
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4">
                <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  <Typewriter
                    words={[
                      "Hello, I'm Anup",
                      "Full Stack Developer",
                      "Software Engineer",
                      "Open to Collaborate",
                    ]}
                    typingSpeed={100}
                    deletingSpeed={40}
                    pause={1400}
                    className="inline-block"
                  />
                </span>
              </h1>
              <h2 className="text-xl md:text-2xl lg:text-3xl text-gray-700 dark:text-gray-300 mb-6">
                Full Stack Developer & Software Engineer
              </h2>
              <p className="text-base md:text-lg lg:text-xl text-gray-600 dark:text-gray-400 leading-relaxed">
                I craft exceptional digital experiences through clean code and
                innovative solutions. Passionate about creating scalable
                applications that make a difference.
              </p>
            </div>

            <div className="flex gap-2 sm:gap-4 justify-center lg:justify-start items-center mb-12">
              <a
                href="#contact"
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-3 md:px-4 lg:px-8 py-3 rounded-lg font-semibold text-xs sm:text-sm md:text-base transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                Get In Touch
              </a>
              <a
                href="#projects"
                className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white dark:border-blue-400 dark:text-blue-400 dark:hover:bg-blue-400 dark:hover:text-gray-900 px-3 md:px-4 lg:px-8 py-3 rounded-lg font-semibold text-xs sm:text-sm md:text-base transition-all duration-300 transform hover:scale-105"
              >
                View My Work
              </a>
            </div>
          </div>
        </div>

        {/* Animated scroll indicator - centered for all screens */}
        <div className="flex justify-center mt-12 animate-bounce">
          <HiArrowDown className="h-6 w-6 text-gray-400 dark:text-gray-600" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
