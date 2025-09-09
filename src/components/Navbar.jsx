import React, { useState, useEffect, useRef } from 'react';
import { HiMenu, HiX } from 'react-icons/hi';
import ThemeToggle from './ThemeToggle';

const Navbar = () => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const mobileMenuRef = useRef(null);

  useEffect(() => {
    // Prevent background scrolling when mobile menu is open
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    const updateScrollProgress = () => {
      const scrollPx = document.documentElement.scrollTop;
      const winHeightPx = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrolled = scrollPx / winHeightPx;
      setScrollProgress(scrolled * 100);
    };

    // Scroll spy to detect active section
    const updateActiveSection = () => {
      const sections = ['home', 'about', 'skills', 'projects', 'services', 'hobby', 'contact'];
      let current = 'home';
      
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            current = section;
            break;
          }
        }
      }
      
      setActiveSection(current);
    };

    const handleScroll = () => {
      updateScrollProgress();
      updateActiveSection();
    };

    // Close mobile menu when clicking outside
    const handleClickOutside = (event) => {
      if (isMobileMenuOpen && mobileMenuRef.current && !mobileMenuRef.current.contains(event.target)) {
        setIsMobileMenuOpen(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    document.addEventListener('mousedown', handleClickOutside);
    
    // Initial check for active section
    updateActiveSection();
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.removeEventListener('mousedown', handleClickOutside);
      // Clean up overflow style when component unmounts
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Services', href: '#services' },
    { name: 'Hobby', href: '#hobby' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className="fixed top-0 w-full z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md border-b border-gray-200 dark:border-gray-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0 animate-fade-in-right">
            <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Portfolio
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navItems.map((item, index) => {
                const sectionId = item.href.replace('#', '');
                const isActive = activeSection === sectionId;
                return (
                  <a
                    key={item.name}
                    href={item.href}
                    className={`animate-fade-in-down px-3 py-2 text-sm font-medium transition-all duration-200 ${
                      isActive
                        ? 'text-blue-600 dark:text-blue-400 font-semibold drop-shadow-lg'
                        : 'text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:drop-shadow-md'
                    }`}
                    style={{
                      animationDelay: `${index * 100}ms`,
                      textShadow: isActive 
                        ? '0 2px 4px rgba(59, 130, 246, 0.3)' 
                        : undefined
                    }}
                  >
                    {item.name}
                  </a>
                );
              })}
            </div>
          </div>

          {/* Theme Toggle & Mobile Menu Button */}
          <div className="flex items-center space-x-4">
            <div className="animate-fade-in-left">
              <ThemeToggle variant="circle" start="top-right" />
            </div>
            
            <div className="md:hidden">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="p-2 rounded-md text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white"
              >
                {isMobileMenuOpen ? <HiX className="h-6 w-6" /> : <HiMenu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Progress Bar */}
      <div className="w-full h-1 bg-gray-200 dark:bg-gray-700">
        <div
          className="h-full bg-gradient-to-r from-blue-600 to-purple-600 transition-all duration-500 ease-out"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      {/* Mobile Menu */}
      <div 
        className={`md:hidden absolute top-full left-0 w-full z-40 overflow-hidden transition-all duration-300 ease-in-out ${
          isMobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
        ref={mobileMenuRef}
      >
        <div className={`px-2 pt-2 pb-3 space-y-1 bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700 flex flex-col items-center transform transition-transform duration-300 ease-in-out shadow-lg ${
          isMobileMenuOpen ? 'translate-y-0' : '-translate-y-4'
        }`}>
          {navItems.map((item, index) => {
            const sectionId = item.href.replace('#', '');
            const isActive = activeSection === sectionId;
            return (
              <a
                key={item.name}
                href={item.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`block px-3 py-2 text-base font-medium text-center transition-all duration-200 transform ${
                  isMobileMenuOpen 
                    ? 'translate-x-0 opacity-100' 
                    : 'translate-x-4 opacity-0'
                } ${
                  isActive
                    ? 'text-blue-600 dark:text-blue-400 font-semibold drop-shadow-lg'
                    : 'text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:drop-shadow-md'
                }`}
                style={{
                  transitionDelay: isMobileMenuOpen ? `${index * 50}ms` : '0ms',
                  textShadow: isActive 
                    ? '0 2px 4px rgba(59, 130, 246, 0.3)' 
                    : undefined
                }}
              >
                {item.name}
              </a>
            );
          })}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;