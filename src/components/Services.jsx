import React from 'react';
import { HiGlobeAlt, HiDeviceMobile, HiCode, HiCloud, HiCog, HiChat } from 'react-icons/hi';
import useInViewAnimation from '../hooks/useInViewAnimation';
import useServicesAnimation from '../hooks/useServicesAnimation';

const Services = () => {
  const titleRef = useInViewAnimation('animate-fade-in-left duration-1000 ease-out');
  const servicesGridRef = useServicesAnimation({
    selector: '.service-card',
    rootMargin: '-100px 0px -100px 0px',
    threshold: 0.1,
    once: false
  });
  const ctaSectionRef = useInViewAnimation('animate-fade-in-up duration-900 ease-out');
  
  const services = [
    {
      icon: <HiGlobeAlt className="h-12 w-12" />,
      title: 'Web Development',
      description: 'Custom websites and web applications built with modern technologies like React, Vue.js, and Node.js.',
      features: ['Responsive Design', 'SEO Optimization', 'Performance Optimization', 'Cross-browser Compatibility']
    },
    {
      icon: <HiDeviceMobile className="h-12 w-12" />,
      title: 'Mobile App Development',
      description: 'Native and cross-platform mobile applications for iOS and Android with seamless user experience.',
      features: ['React Native', 'Progressive Web Apps', 'App Store Optimization', 'Push Notifications']
    },
    {
      icon: <HiCode className="h-12 w-12" />,
      title: 'Full Stack Development',
      description: 'Complete end-to-end application development from database design to user interface.',
      features: ['API Development', 'Database Design', 'Authentication Systems', 'Real-time Features']
    },
    {
      icon: <HiCloud className="h-12 w-12" />,
      title: 'Cloud Solutions',
      description: 'Cloud infrastructure setup, deployment, and maintenance for scalable applications.',
      features: ['AWS/Azure Setup', 'CI/CD Pipelines', 'Auto Scaling', 'Monitoring & Analytics']
    },
    {
      icon: <HiCog className="h-12 w-12" />,
      title: 'API Integration',
      description: 'Third-party API integrations and custom API development for seamless data exchange.',
      features: ['REST API Development', 'GraphQL Implementation', 'Payment Gateway Integration', 'Social Media APIs']
    },
    {
      icon: <HiChat className="h-12 w-12" />,
      title: 'Technical Consulting',
      description: 'Strategic technical guidance and code review to help your team make informed decisions.',
      features: ['Architecture Planning', 'Code Review', 'Performance Auditing', 'Tech Stack Selection']
    }
  ];

  return (
    <section id="services" className="py-20 bg-gray-50 dark:bg-gray-800 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div ref={titleRef} className="text-center mb-16 opacity-0">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Services I Provide
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400">
            Comprehensive development solutions for your business
          </p>
        </div>

        <div ref={servicesGridRef} className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="service-card bg-white dark:bg-gray-900 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 group"
            >
              <div className="text-blue-600 dark:text-blue-400 mb-6 group-hover:scale-110 transition-transform duration-300">
                {service.icon}
              </div>
              
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                {service.title}
              </h3>
              
              <p className="text-gray-600 dark:text-gray-400 mb-6">
                {service.description}
              </p>

              <ul className="space-y-2">
                {service.features.map((feature, featureIndex) => (
                  <li
                    key={featureIndex}
                    className="flex items-center text-sm text-gray-500 dark:text-gray-400"
                  >
                    <div className="w-2 h-2 bg-blue-600 dark:bg-blue-400 rounded-full mr-3"></div>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div ref={ctaSectionRef} className="text-center mt-16 opacity-0">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">
              Ready to bring your ideas to life?
            </h3>
            <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
              Let's discuss your project and create something amazing together. 
              I'm here to help you every step of the way.
            </p>
            <a
              href="#contact"
              className="inline-block bg-white text-blue-600 hover:bg-gray-100 px-8 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105"
            >
              Start Your Project
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;