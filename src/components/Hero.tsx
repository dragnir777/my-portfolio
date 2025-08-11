import React, { useState, useEffect } from 'react';
import { ChevronDown, Github, Linkedin, MessageCircle } from 'lucide-react';

interface HeroProps {
  isDarkMode: boolean;
}

const Hero: React.FC<HeroProps> = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const scrollToProjects = () => {
    const element = document.getElementById('projects');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20 bg-gray-900">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900">
        <div className="absolute inset-0 bg-black/30" />
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-green-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
      </div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className={`text-center transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {/* Profile Image */}
          <div className="relative inline-block mb-8">
            <div className="w-52 h-52 mx-auto rounded-full bg-gradient-to-br from-green-400 to-blue-500 p-1 shadow-2xl">
              <div className="w-full h-full rounded-full bg-gray-800 flex items-center justify-center">
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
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="block text-white">Axison</span>
            <span className="block bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent">
              BAYALA
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-300 mb-4 max-w-3xl mx-auto font-medium">
            Développeur Web Full Stack Burkinabè
          </p>
          
          <p className="text-lg text-gray-400 mb-8 max-w-2xl mx-auto leading-relaxed">
            Spécialisé en <strong className="text-green-400">Node.js</strong>, <strong className="text-blue-400">React</strong> et 
            <strong className="text-purple-400"> MySQL</strong>. 
            Je développe des solutions robustes pour les secteurs gouvernemental, santé et fintech.
          </p>

          {/* Social Links */}
          <div className="flex items-center justify-center space-x-6 mb-12">
            <a href="#" className="p-4 bg-gray-800 hover:bg-gray-700 rounded-full transition-all duration-300 hover:scale-110 transform shadow-lg">
              <Github size={24} className="text-white" />
            </a>
            <a href="#" className="p-4 bg-gray-800 hover:bg-gray-700 rounded-full transition-all duration-300 hover:scale-110 transform shadow-lg">
              <Linkedin size={24} className="text-blue-400" />
            </a>
            <a href="#" className="p-4 bg-gray-800 hover:bg-gray-700 rounded-full transition-all duration-300 hover:scale-110 transform shadow-lg">
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
        <div className="w-6 h-10 border-2 border-gray-400 rounded-full p-1">
          <div className="w-1 h-3 bg-green-400 rounded-full animate-bounce mx-auto" />
        </div>
      </div>
    </section>
  );
};

export default Hero;