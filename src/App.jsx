import React, { useEffect } from 'react';
import './App.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { ThemeProvider } from './components/ThemeProvider';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Services from './components/Services';
import Hobbies from './components/Hobbies';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  useEffect(() => {
    // Small delay to ensure DOM is ready
    setTimeout(() => {
      AOS.init({
        duration: 1000,
        once: false,
        offset: 120,
        delay: 0,
        easing: 'ease-out'
      });
    }, 100);
  }, []);

  return (
    <ThemeProvider>
      <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300 w-full overflow-x-hidden">
        <Navbar />
        <main>
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Services />
          <Hobbies />
          <Contact />
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
}
