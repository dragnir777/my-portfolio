import React, { useState, useEffect } from 'react';
import { ChevronDown, Github, Linkedin, MessageCircle } from 'lucide-react';

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(true);

  useEffect(() => {
    setIsVisible(true);
    // Check if dark mode is active
    setIsDarkMode(document.documentElement.classList.contains('dark') || !document.documentElement.classList.contains('light'));
  }, []);

  const scrollToProjects = () => {
    const element = document.getElementById('projects');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
      {/* Animated Background */}
      <div className={`absolute inset-0 ${isDarkMode ? 'bg-gradient-to-br from-deep-night via-blue-900 to-deep-night' : 'bg-gradient-to-br from-off-white via-blue-50 to-off-white'}`}>
        <div className={`absolute inset-0 ${isDarkMode ? 'bg-black/30' : 'bg-white/30'}`} />
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyber-green/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
        
        {/* African geometric patterns */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 left-20 w-32 h-32 border-2 border-african-sand rotate-45 animate-spin-slow" />
          <div className="absolute bottom-20 right-20 w-24 h-24 border-2 border-cyber-green rotate-12 animate-pulse-soft" />
        </div>
      </div>

      <div className="max-w-content mx-auto px-6 relative z-10">
        <div className={`text-center transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {/* Profile Image */}
          <div className="relative inline-block mb-8">
            <div className="w-52 h-52 mx-auto rounded-full bg-gradient-to-br from-green-400 to-blue-500 p-1 shadow-2xl">
              <div className={`w-full h-full rounded-full ${isDarkMode ? 'bg-gray-800' : 'bg-white'} flex items-center justify-center`}>
                <img
                  src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400"
                  alt="Axison BAYALA"
                  className="w-48 h-48 rounded-full object-cover"
                />
              </div>
            </div>
            <div className="absolute -bottom-2 -right-2 w-14 h-14 bg-green-400 rounded-full flex items-center justify-center animate-bounce shadow-lg">
              <span className="text-2xl">👋</span>
            </div>
          </div>

          {/* Main Content */}
          <h1 className="text-5xl md:text-7xl font-poppins font-bold mb-6">
            <span className={`block ${isDarkMode ? 'text-off-white' : 'text-deep-night'}`}>Axison</span>
            <span className="block bg-gradient-to-r from-cyber-green to-blue-500 bg-clip-text text-transparent">
              BAYALA
            </span>
          </h1>

          <p className={`text-xl md:text-2xl ${isDarkMode ? 'text-gray-300' : 'text-gray-600'} mb-4 max-w-3xl mx-auto font-inter font-medium`}>
            Développeur Web Full Stack Burkinabè
          </p>
          
          <p className={`text-lg ${isDarkMode ? 'text-gray-400' : 'text-gray-500'} mb-8 max-w-2xl mx-auto font-inter leading-relaxed`}>
            Spécialisé en <strong className="text-green-400">sécurité</strong>, <strong className="text-blue-400">design UI/UX</strong> et 
            <strong className="text-purple-400"> documentation technique</strong>. 
            Je développe des solutions robustes pour les secteurs gouvernemental, santé et fintech.
          </p>

          {/* Social Links */}
          <div className="flex items-center justify-center space-x-6 mb-12">
            <a href="#" className={`p-4 ${isDarkMode ? 'bg-gray-800 hover:bg-gray-700' : 'bg-gray-200 hover:bg-gray-300'} rounded-full transition-all duration-300 hover:scale-110 transform shadow-lg`}>
              <Github size={24} className={isDarkMode ? 'text-white' : 'text-gray-700'} />
            </a>
            <a href="#" className={`p-4 ${isDarkMode ? 'bg-gray-800 hover:bg-gray-700' : 'bg-gray-200 hover:bg-gray-300'} rounded-full transition-all duration-300 hover:scale-110 transform shadow-lg`}>
              <Linkedin size={24} className="text-blue-400" />
            </a>
            <a href="#" className={`p-4 ${isDarkMode ? 'bg-gray-800 hover:bg-gray-700' : 'bg-gray-200 hover:bg-gray-300'} rounded-full transition-all duration-300 hover:scale-110 transform shadow-lg`}>
              <MessageCircle size={24} className="text-green-400" />
            </a>
          </div>

          {/* CTA Button */}
          <button
            onClick={scrollToProjects}
            className="inline-flex items-center px-10 py-5 bg-gradient-to-r from-green-400 to-blue-500 hover:from-green-600 hover:to-blue-600 rounded-full text-white font-semibold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl shadow-lg"
          >
            Voir mes projets
            <ChevronDown size={20} className="ml-2 animate-bounce" />
          </button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className={`w-6 h-10 border-2 ${isDarkMode ? 'border-gray-400' : 'border-gray-600'} rounded-full p-1`}>
          <div className="w-1 h-3 bg-green-400 rounded-full animate-bounce mx-auto" />
        </div>
      </div>
    </section>
  );
};

export default Hero;