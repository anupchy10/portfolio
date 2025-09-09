import React, { useState } from 'react';
import { HiMail, HiClock, HiLocationMarker, HiPaperAirplane } from 'react-icons/hi';
import useInViewAnimation from '../hooks/useInViewAnimation';

const Contact = () => {
  const titleRef = useInViewAnimation('animate-fade-in-up duration-1000 ease-out');
  const introRef = useInViewAnimation('animate-fade-right duration-900 ease-out');
  const emailRef = useInViewAnimation('animate-fade-right duration-900 ease-out delay-200');
  const responseRef = useInViewAnimation('animate-fade-right duration-900 ease-out delay-400');
  const availabilityRef = useInViewAnimation('animate-fade-right duration-900 ease-out delay-600');
  const socialRef = useInViewAnimation('animate-fade-right duration-900 ease-out delay-800');
  const contactFormRef = useInViewAnimation('animate-fade-left duration-900 ease-out');
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission (placeholder for SMTP integration)
    try {
      // TODO: Implement SMTP integration here
      // For now, we'll simulate a successful submission
      setTimeout(() => {
        setSubmitMessage('Thank you for your message! I\'ll get back to you soon.');
        setFormData({ name: '', email: '', message: '' });
        setIsSubmitting(false);
      }, 2000);
    } catch (error) {
      setSubmitMessage('Sorry, there was an error sending your message. Please try again.');
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 bg-gray-50 dark:bg-gray-800 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div ref={titleRef} className="text-center mb-16 opacity-0">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Get In Touch
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400">
            Let's discuss your next project
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div ref={introRef} className="opacity-0">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                Let's work together!
              </h3>
              <p className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed mb-8">
                I'm always excited to take on new challenges and collaborate on innovative projects. 
                Whether you have a specific project in mind or just want to explore possibilities, 
                I'd love to hear from you.
              </p>
            </div>

            {/* Mobile: 3 columns, Desktop: Stacked layout */}
            <div className="grid grid-cols-3 md:grid-cols-1 gap-2 md:gap-6 md:space-y-6">
              {/* Email */}
              <div ref={emailRef} className="flex flex-col items-center text-center md:flex-row md:items-center md:text-left md:space-x-4 opacity-0">
                <div className="flex-shrink-0 w-8 h-8 md:w-12 md:h-12 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center mb-2 md:mb-0">
                  <HiMail className="h-4 w-4 md:h-6 md:w-6 text-blue-600 dark:text-blue-400" />
                </div>
                <div className="flex-1 min-w-0">
                  <h4 className="font-semibold text-gray-900 dark:text-white text-xs md:text-base mb-1">Email</h4>
                  <p className="text-gray-600 dark:text-gray-400 text-xs md:text-base truncate md:overflow-visible">anupc1010@gmail.com</p>
                </div>
              </div>

              {/* Response Time */}
              <div ref={responseRef} className="flex flex-col items-center text-center md:flex-row md:items-center md:text-left md:space-x-4 opacity-0">
                <div className="flex-shrink-0 w-8 h-8 md:w-12 md:h-12 bg-green-100 dark:bg-green-900 rounded-lg flex items-center justify-center mb-2 md:mb-0">
                  <HiClock className="h-4 w-4 md:h-6 md:w-6 text-green-600 dark:text-green-400" />
                </div>
                <div className="flex-1 min-w-0">
                  <h4 className="font-semibold text-gray-900 dark:text-white text-xs md:text-base mb-1">Response</h4>
                  <p className="text-gray-600 dark:text-gray-400 text-xs md:text-base truncate md:overflow-visible">Within 24h</p>
                </div>
              </div>

              {/* Availability */}
              <div ref={availabilityRef} className="flex flex-col items-center text-center md:flex-row md:items-center md:text-left md:space-x-4 opacity-0">
                <div className="flex-shrink-0 w-8 h-8 md:w-12 md:h-12 bg-purple-100 dark:bg-purple-900 rounded-lg flex items-center justify-center mb-2 md:mb-0">
                  <HiLocationMarker className="h-4 w-4 md:h-6 md:w-6 text-purple-600 dark:text-purple-400" />
                </div>
                <div className="flex-1 min-w-0">
                  <h4 className="font-semibold text-gray-900 dark:text-white text-xs md:text-base mb-1">Available</h4>
                  <p className="text-gray-600 dark:text-gray-400 text-xs md:text-base truncate md:overflow-visible">Remote worldwide</p>
                </div>
              </div>
            </div>

            {/* Social Links Placeholder */}
            <div ref={socialRef} className="pt-8 opacity-0">
              <h4 className="font-semibold text-gray-900 dark:text-white mb-4">Find me on</h4>
              <div className="flex space-x-4">
                <a href="#" className="w-12 h-12 bg-gray-200 dark:bg-gray-700 rounded-lg flex items-center justify-center hover:bg-blue-100 dark:hover:bg-blue-900 transition-colors duration-200">
                  <span className="text-xl">💼</span>
                </a>
                <a href="#" className="w-12 h-12 bg-gray-200 dark:bg-gray-700 rounded-lg flex items-center justify-center hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors duration-200">
                  <span className="text-xl">🐙</span>
                </a>
                <a href="#" className="w-12 h-12 bg-gray-200 dark:bg-gray-700 rounded-lg flex items-center justify-center hover:bg-blue-100 dark:hover:bg-blue-900 transition-colors duration-200">
                  <span className="text-xl">🐦</span>
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div ref={contactFormRef} className="bg-white dark:bg-gray-900 rounded-2xl p-8 shadow-lg opacity-0">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div data-aos="fade-left" data-aos-duration="900">
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Your Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-800 dark:text-white transition-colors duration-200"
                  placeholder="Enter your full name"
                />
              </div>

              <div data-aos="fade-left" data-aos-duration="900" data-aos-delay="200">
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-800 dark:text-white transition-colors duration-200"
                  placeholder="Enter your email address"
                />
              </div>

              <div data-aos="fade-left" data-aos-duration="900" data-aos-delay="400">
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={6}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-800 dark:text-white resize-none transition-colors duration-200"
                  placeholder="Tell me about your project or what you'd like to discuss..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                data-aos="fade-left"
                data-aos-duration="900"
                data-aos-delay="600"
                className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 disabled:from-gray-400 disabled:to-gray-500 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 disabled:transform-none disabled:cursor-not-allowed flex items-center justify-center space-x-2"
              >
                {isSubmitting ? (
                  <>
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                    <span>Sending...</span>
                  </>
                ) : (
                  <>
                    <HiPaperAirplane className="h-5 w-5" />
                    <span>Send Message</span>
                  </>
                )}
              </button>

              {submitMessage && (
                <div className={`text-center p-4 rounded-lg ${
                  submitMessage.includes('error') 
                    ? 'bg-red-100 text-red-700 dark:bg-red-900 dark:text-red-300' 
                    : 'bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-300'
                }`}>
                  {submitMessage}
                </div>
              )}
            </form>

            <div className="mt-6 p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg" data-aos="fade-up" data-aos-duration="900">
              <p className="text-sm text-blue-700 dark:text-blue-300">
                <strong>Note:</strong> This contact form is set up with SMTP integration placeholder. 
                Messages will be sent to anupc1010@gmail.com once the backend is configured.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;