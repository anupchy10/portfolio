import React from "react";
import { HiBriefcase, HiCode, HiAcademicCap } from "react-icons/hi";
import useInViewAnimation from "../hooks/useInViewAnimation";

const About = () => {
  // Animation refs for different sections
  const titleRef = useInViewAnimation(
    "animate-fade-in-up duration-1000 ease-out",
  );
  const imageRef = useInViewAnimation(
    "animate-fade-right duration-1000 ease-out delay-200",
  );
  const textRef = useInViewAnimation(
    "animate-fade-left duration-1000 ease-out delay-200",
  );
  const card1Ref = useInViewAnimation(
    "animate-fade-in-up duration-800 ease-out delay-400",
  );
  const card2Ref = useInViewAnimation(
    "animate-fade-in-up duration-800 ease-out delay-100",
  );
  const card3Ref = useInViewAnimation(
    "animate-fade-in-up duration-800 ease-out delay-400",
  );

  return (
    <section
      id="about"
      className="py-20 bg-white dark:bg-gray-900 px-4 sm:px-6 lg:px-8 w-full overflow-x-hidden"
    >
      <div className="max-w-7xl mx-auto">
        <div ref={titleRef} className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            About Me
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400">
            Get to know me better
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Photo placeholder */}
          <div ref={imageRef} className="order-1 lg:order-1">
            <div className="relative">
              <div className="w-full h-96 bg-gradient-to-br from-blue-100 to-purple-100 dark:from-gray-700 dark:to-gray-600 rounded-2xl flex items-center justify-center shadow-2xl">
                <div className="text-center">
                  <div className="w-32 h-32 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <span className="text-4xl font-bold text-white">A</span>
                  </div>
                  <p className="text-gray-600 dark:text-gray-400">
                    Professional Photo
                  </p>
                </div>
              </div>
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-blue-200 dark:bg-blue-800 rounded-full opacity-50"></div>
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-purple-200 dark:bg-purple-800 rounded-full opacity-50"></div>
            </div>
          </div>

          {/* Content */}
          <div className="order-2 lg:order-2 text-center lg:text-left">
            {/* Text Content */}
            <div ref={textRef} className="mb-8">
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">
                Passionate Developer with a Vision
              </h3>

              <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
                I'm a dedicated software engineer with a passion for creating
                innovative solutions that bridge the gap between technology and
                user experience. With expertise in both frontend and backend
                development, I love turning complex problems into simple,
                beautiful, and intuitive solutions.
              </p>

              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                When I'm not coding, you'll find me exploring new technologies,
                contributing to open source projects, and staying up-to-date
                with the latest industry trends. I believe in continuous
                learning and sharing knowledge with the developer community.
              </p>
            </div>

            {/* Stats Cards */}
            <div className="grid grid-cols-3 gap-2 md:gap-4 lg:gap-6">
              <div
                ref={card1Ref}
                className="text-center p-4 md:p-2 rounded-lg bg-gray-50 dark:bg-gray-800"
              >
                <HiBriefcase className="h-8 w-8 mx-auto text-blue-600 mb-2" />
                <h4 className="font-semibold text-gray-900 dark:text-white text-xs md:text-sm lg:text-base">
                  Experience
                </h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  3+ Years
                </p>
              </div>

              <div
                ref={card2Ref}
                className="text-center p-4 rounded-lg bg-gray-50 dark:bg-gray-800"
              >
                <HiCode className="h-8 w-8 mx-auto text-blue-600 mb-2" />
                <h4 className="font-semibold text-gray-900 dark:text-white text-xs md:text-sm lg:text-base">
                  Projects
                </h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  50+ Completed
                </p>
              </div>

              <div
                ref={card3Ref}
                className="text-center p-4 rounded-lg bg-gray-50 dark:bg-gray-800"
              >
                <HiAcademicCap className="h-8 w-8 mx-auto text-blue-600 mb-2" />
                <h4 className="font-semibold text-gray-900 dark:text-white text-xs md:text-sm lg:text-base">
                  Learning
                </h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Never Stops
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
