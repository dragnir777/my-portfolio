import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Testimonials from './components/Testimonials';
import Blog from './components/Blog';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [activeSection, setActiveSection] = useState('home');

  const toggleTheme = () => {
    const newMode = !isDarkMode;
    setIsDarkMode(newMode);
    console.log('Theme toggled to:', newMode ? 'dark' : 'light');
    
    if (newMode) {
      document.documentElement.classList.add('dark');
      console.log('Added dark class to document');
    } else {
      document.documentElement.classList.remove('dark');
      console.log('Removed dark class from document');
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'services', 'skills', 'projects', 'testimonials', 'blog', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    // Apply initial theme
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
      console.log('Initial dark mode applied');
    } else {
      document.documentElement.classList.remove('dark');
      console.log('Initial light mode applied');
    }
  }, [isDarkMode]);

  // Debug: Log current theme state
  useEffect(() => {
    console.log('Current theme state:', isDarkMode ? 'dark' : 'light');
    console.log('Document has dark class:', document.documentElement.classList.contains('dark'));
  }, [isDarkMode]);

  return (
    <div className={`min-h-screen ${isDarkMode ? 'dark' : ''}`}>
      {/* Debug Theme Button */}
      <div className="fixed top-20 right-4 z-50 p-4 bg-red-500 text-white rounded-lg">
        <p>Theme: {isDarkMode ? 'Dark' : 'Light'}</p>
        <button 
          onClick={toggleTheme}
          className="mt-2 px-4 py-2 bg-blue-500 rounded hover:bg-blue-600"
        >
          Toggle Theme
        </button>
      </div>
      
      <Header 
        activeSection={activeSection} 
        isDarkMode={isDarkMode} 
        toggleTheme={toggleTheme} 
      />
      
      <main>
        <Hero />
        <About />
        <Services />
        <Skills />
        <Projects />
        <Testimonials />
        <Blog />
        <Contact />
      </main>
      
      <Footer />
    </div>
  );
}

export default App;