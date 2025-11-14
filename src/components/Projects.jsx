import React from "react";
import { HiEye, HiExternalLink } from "react-icons/hi";
import { FaGithub } from "react-icons/fa";
import useInViewAnimation from "../hooks/useInViewAnimation";
import useStaggeredInView from "../hooks/useStaggeredInView";

const Projects = () => {
  const titleRef = useInViewAnimation(
    "animate-fade-in-up duration-1000 ease-out",
  );
  const projectsGridRef = useStaggeredInView({
    selector: ".project-card",
    rootMargin: "-200px 0px -200px 0px",
    threshold: 0,
    stagger: 100,
    once: false,
  });
  const ctaButtonRef = useInViewAnimation(
    "animate-fade-in-up duration-900 ease-out",
  );

  const projects = [
    {
      title: "Grocery E-Commerce Platform",
      description:
        "Fresh vegetables and groceries online store with product categories, shopping cart, and discount features. Clean design with excellent user experience.",
      image: "https://i.postimg.cc/4N2NMWkx/img-1.png",
      tech: ["React", "Node.js", "MongoDB", "Stripe"],
      liveUrl: "#",
      githubUrl: "https://github.com/anupchy10/grocery-platform",
      featured: true,
    },
    {
      title: "Jivorix Fashion Store",
      description:
        "Elegant fashion e-commerce website with sophisticated design, product catalogs, and seamless shopping experience for clothing and accessories.",
      image: "https://i.postimg.cc/XYZ7094T/img-2.png",
      tech: ["React", "Express", "PostgreSQL", "Payment Gateway"],
      liveUrl: "#",
      githubUrl: "https://github.com/anupchy10/jivorix",
      featured: true,
    },
    {
      title: "Richard Hamrick Portfolio",
      description:
        "Professional dark-themed portfolio website showcasing web development skills, testimonials, and client work with modern UI/UX design.",
      image: "https://i.postimg.cc/BndZZtvS/img-3.png",
      tech: ["React", "Tailwind CSS", "Framer Motion", "TypeScript"],
      liveUrl: "#",
      githubUrl: "https://github.com/anupchy10/richard",
      featured: true,
    },
    {
      title: "Property Real Estate Platform",
      description:
        "Modern real estate website with property listings, search functionality, and engaging design for finding suitable properties.",
      image: "https://i.postimg.cc/B63qDyDB/img-4.png",
      tech: ["React", "Node.js", "MongoDB", "Maps API", "Animations"],
      liveUrl: "#",
      githubUrl: "https://github.com/anupchy10/real-estate",
      featured: false,
    },
    {
      title: "Corporate Business Website",
      description:
        "Professional corporate website with team sections, service offerings, and clean business-oriented design for driving growth.",
      image: "https://i.postimg.cc/hj0K0r1S/img-5.png",
      tech: ["HTML5", "CSS3", "JavaScript", "Bootstrap", "Animations"],
      liveUrl: "#",
      githubUrl: "https://github.com/anupchy10/prixima",
      featured: false,
    },
    {
      title: "Business Consulting Platform",
      description:
        "Modern business consulting website with service sections, expertise showcase, and professional design for better business insights.",
      image: "https://i.postimg.cc/qRGpGLx3/img-6.png",
      tech: ["React", "Tailwind CSS", "Node.js", "MongoDB"],
      liveUrl: "#",
      githubUrl: "https://github.com/anupchy10/business-platform",
      featured: false,
    },
    {
      title: "Creative Portfolio Website",
      description:
        "Colorful and creative portfolio website with gradient backgrounds, skill showcase, and modern design for creative professionals.",
      image: "https://i.postimg.cc/Hnsdvy6k/img-7.png",
      tech: ["React", "CSS3", "Animations", "Responsive Design"],
      liveUrl: "#",
      githubUrl: "https://github.com/anupchy10/ventura-outdoor-store",
      featured: false,
    },
    {
      title: "Ventura Outdoor Store",
      description:
        "Outdoor equipment e-commerce platform with camping gear, product categories, and adventure-focused design for outdoor enthusiasts.",
      image: "https://i.postimg.cc/mgp72Yvm/img-8.png",
      tech: ["React", "Node.js", "MongoDB", "Payment Integration"],
      liveUrl: "#",
      githubUrl: "https://github.com/anupchy10/ventura-outdoor-store",
      featured: false,
    },
    {
      title: "Hamro Bazar Marketplace",
      description:
        "Comprehensive online marketplace platform with multiple categories, user listings, and advanced search functionality for buying and selling.",
      image: "https://i.postimg.cc/zvX82gxV/img-9.png",
      tech: ["PHP", "MySQL", "JavaScript", "Payment Gateway"],
      liveUrl: "#",
      githubUrl: "https://github.com/anupchy10/hamro-bazar",
      featured: false,
    },
  ];

  return (
    <section
      id="projects"
      className="py-20 bg-white dark:bg-gray-900 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-7xl mx-auto">
        <div ref={titleRef} className="text-center mb-16 opacity-0">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Featured Projects
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400">
            Some of my recent work
          </p>
        </div>

        <div
          ref={projectsGridRef}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projects.map((project, index) => (
            <div
              key={project.title}
              className="project-card group bg-gray-50 dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
            >
              {/* Project Image */}
              <div className="h-48 bg-gradient-to-br from-blue-100 to-purple-100 dark:from-gray-700 dark:to-gray-600 flex items-center justify-center overflow-hidden">
                {project.image.startsWith("http") ? (
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover object-top transition-transform duration-300 group-hover:scale-110"
                  />
                ) : (
                  <span className="text-6xl">{project.image}</span>
                )}
              </div>

              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                    {project.title}
                  </h3>
                  {project.featured && (
                    <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800">
                      Featured
                    </span>
                  )}
                </div>

                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 px-3 py-1 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex space-x-4">
                  <a
                    href={project.liveUrl}
                    className="flex items-center text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 transition-colors duration-200"
                  >
                    <HiEye className="h-4 w-4 mr-2" />
                    Live Demo
                  </a>
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-gray-600 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300 transition-colors duration-200"
                  >
                    <FaGithub className="h-4 w-4 mr-2" />
                    Source Code
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div ref={ctaButtonRef} className="text-center mt-12 opacity-0">
          <a
            href="#contact"
            className="inline-flex items-center bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
          >
            Want to see more? Let's talk!
            <HiExternalLink className="h-5 w-5 ml-2" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
