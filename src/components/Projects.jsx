limport React from "react";
import { HiEye, HiExternalLink } from "react-icons/hi";
import { FaGithub } from "react-icons/fa";
import useInViewAnimation from "../hooks/useInViewAnimation";
import useStaggeredInView from "../hooks/useStaggeredInView";
import { assets } from '../../public/assets/assets';

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
      image: "https://lfxcumwykxjspkzuxnsu.supabase.co/storage/v1/object/sign/Assets/img_1.png?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV8zNGZhZmI2My1hOGRjLTQzMjctYmUwYS1kZGM5YTg5NmQ1ZjQiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJBc3NldHMvaW1nXzEucG5nIiwiaWF0IjoxNzU4Njg3MzA0LCJleHAiOjQ4ODA3NTEzMDR9.qGC2tebpz8hpm4lEEVxiV691pjXI3ne6e1WeY5dxHfI",
      tech: ["React", "Node.js", "MongoDB", "Stripe"],
      liveUrl: "#",
      githubUrl: "https://github.com/anupchy10/grocery-platform",
      featured: true,
    },
    {
      title: "Jivorix Fashion Store",
      description:
        "Elegant fashion e-commerce website with sophisticated design, product catalogs, and seamless shopping experience for clothing and accessories.",
      image: "https://lfxcumwykxjspkzuxnsu.supabase.co/storage/v1/object/sign/Assets/img_2.png?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV8zNGZhZmI2My1hOGRjLTQzMjctYmUwYS1kZGM5YTg5NmQ1ZjQiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJBc3NldHMvaW1nXzIucG5nIiwiaWF0IjoxNzU4Njg3MzQ2LCJleHAiOjQ4ODA3NTEzNDZ9.dwD7PhryBtOUWTiPXK9zpuImWNQBbyqfAWlCJqiQi1I",
      tech: ["React", "Express", "PostgreSQL", "Payment Gateway"],
      liveUrl: "#",
      githubUrl: "https://github.com/anupchy10/jivorix",
      featured: true,
    },
    {
      title: "Richard Hamrick Portfolio",
      description:
        "Professional dark-themed portfolio website showcasing web development skills, testimonials, and client work with modern UI/UX design.",
      image: "https://lfxcumwykxjspkzuxnsu.supabase.co/storage/v1/object/sign/Assets/img_3.png?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV8zNGZhZmI2My1hOGRjLTQzMjctYmUwYS1kZGM5YTg5NmQ1ZjQiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJBc3NldHMvaW1nXzMucG5nIiwiaWF0IjoxNzU4Njg3NDE0LCJleHAiOjQ4ODA3NTE0MTR9.Y6CgRAqUOonOcpRgkoeB_64IuF0ISncQIPcHVJTrM6s",
      tech: ["React", "Tailwind CSS", "Framer Motion", "TypeScript"],
      liveUrl: "#",
      githubUrl: "https://github.com/anupchy10/richard",
      featured: true,
    },
    {
      title: "Property Real Estate Platform",
      description:
        "Modern real estate website with property listings, search functionality, and engaging design for finding suitable properties.",
      image: "https://lfxcumwykxjspkzuxnsu.supabase.co/storage/v1/object/sign/Assets/img_4.png?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV8zNGZhZmI2My1hOGRjLTQzMjctYmUwYS1kZGM5YTg5NmQ1ZjQiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJBc3NldHMvaW1nXzQucG5nIiwiaWF0IjoxNzU4Njg3NDU4LCJleHAiOjQ4ODA3NTE0NTh9.SMhS2u0NqSdSKHOJiZOig1-u_65OyTIzK3oLW0BhDhY",
      tech: ["React", "Node.js", "MongoDB", "Maps API", "Animations"],
      liveUrl: "#",
      githubUrl: "https://github.com/anupchy10/real-estate",
      featured: false,
    },
    {
      title: "Corporate Business Website",
      description:
        "Professional corporate website with team sections, service offerings, and clean business-oriented design for driving growth.",
      image: "https://lfxcumwykxjspkzuxnsu.supabase.co/storage/v1/object/sign/Assets/img_5.png?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV8zNGZhZmI2My1hOGRjLTQzMjctYmUwYS1kZGM5YTg5NmQ1ZjQiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJBc3NldHMvaW1nXzUucG5nIiwiaWF0IjoxNzU4Njg3NTE0LCJleHAiOjQ4ODA3NTE1MTR9.DUFxZFjSpX-SdCtekTSZM_n-6rPrdyeu6CEeRNu3RtI",
      tech: ["HTML5", "CSS3", "JavaScript", "Bootstrap", "Animations"],
      liveUrl: "#",
      githubUrl: "https://github.com/anupchy10/prixima",
      featured: false,
    },
    {
      title: "Business Consulting Platform",
      description:
        "Modern business consulting website with service sections, expertise showcase, and professional design for better business insights.",
      image: "https://lfxcumwykxjspkzuxnsu.supabase.co/storage/v1/object/sign/Assets/img_6.png?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV8zNGZhZmI2My1hOGRjLTQzMjctYmUwYS1kZGM5YTg5NmQ1ZjQiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJBc3NldHMvaW1nXzYucG5nIiwiaWF0IjoxNzU4Njg3NTgwLCJleHAiOjQ4ODA3NTE1ODB9.11OVlhVefc2AZAgOSnyxKjFjmZO6qkrb7-2Kl2UVsrs",
      tech: ["React", "Tailwind CSS", "Node.js", "MongoDB"],
      liveUrl: "#",
      githubUrl: "https://github.com/anupchy10/business-platform",
      featured: false,
    },
    {
      title: "Creative Portfolio Website",
      description:
        "Colorful and creative portfolio website with gradient backgrounds, skill showcase, and modern design for creative professionals.",
      image: assets[8],
      tech: ["React", "CSS3", "Animations", "Responsive Design"],
      liveUrl: "#",
      githubUrl: "https://github.com/anupchy10/ventura-outdoor-store",
      featured: false,
    },
    {
      title: "Ventura Outdoor Store",
      description:
        "Outdoor equipment e-commerce platform with camping gear, product categories, and adventure-focused design for outdoor enthusiasts.",
      image: assets[9],
      tech: ["React", "Node.js", "MongoDB", "Payment Integration"],
      liveUrl: "#",
      githubUrl: "https://github.com/anupchy10/ventura-outdoor-store",
      featured: false,
    },
    {
      title: "Hamro Bazar Marketplace",
      description:
        "Comprehensive online marketplace platform with multiple categories, user listings, and advanced search functionality for buying and selling.",
      image: assets[10],
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
                {project.image.startsWith("/") ? (
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
