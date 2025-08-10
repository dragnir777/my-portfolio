import React, { useState, useEffect, useRef } from 'react';
import { MapPin, Heart, Code, Users } from 'lucide-react';

const About = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" ref={sectionRef} className="py-20 bg-gray-800/50">
      <div className="container mx-auto px-4">
        <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              À propos de <span className="bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent">moi</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-green-400 to-blue-500 mx-auto rounded-full" />
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left Column - Image and Stats */}
            <div className="space-y-8">
              <div className="relative">
                <div className="w-full max-w-md mx-auto">
                  <img
                    src="https://images.pexels.com/photos/3184306/pexels-photo-3184306.jpeg?auto=compress&cs=tinysrgb&w=500"
                    alt="Axison au travail"
                    className="w-full h-96 object-cover rounded-2xl shadow-2xl"
                  />
                  <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-gradient-to-br from-green-400 to-blue-500 rounded-2xl flex items-center justify-center text-white font-bold text-xl">
                    <Code size={32} />
                  </div>
                </div>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center p-6 bg-gray-900/50 rounded-xl border border-gray-700">
                  <div className="text-3xl font-bold text-green-400 mb-2">3+</div>
                  <div className="text-gray-300">Années d'expérience</div>
                </div>
                <div className="text-center p-6 bg-gray-900/50 rounded-xl border border-gray-700">
                  <div className="text-3xl font-bold text-blue-400 mb-2">50+</div>
                  <div className="text-gray-300">Projets réalisés</div>
                </div>
              </div>
            </div>

            {/* Right Column - Content */}
            <div className="space-y-6">
              <div className="flex items-center space-x-2 text-green-400">
                <MapPin size={20} />
                <span className="font-semibold">Ouagadougou, Burkina Faso</span>
              </div>

              <h3 className="text-2xl font-bold text-white">
                Développeur Full Stack passionné par l'impact social
              </h3>

              <p className="text-gray-300 text-lg leading-relaxed">
                Je suis Axison BAYALA, un développeur web full stack basé à Ouagadougou. 
                Ma passion pour la technologie s'est développée avec la conviction que 
                le code peut transformer des vies et résoudre des problèmes concrets 
                dans notre société.
              </p>

              <p className="text-gray-300 text-lg leading-relaxed">
                Spécialisé dans le développement backend avec <strong className="text-green-400">Node.js</strong> et 
                <strong className="text-blue-400"> Express</strong>, j'excelle également dans la création 
                d'interfaces utilisateur modernes avec <strong className="text-cyan-400">React.js</strong>. 
                Mon expertise en <strong className="text-orange-400">MySQL</strong> me permet de concevoir 
                des bases de données robustes et optimisées.
              </p>

              {/* Highlights */}
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <Heart className="text-red-400 mt-1 flex-shrink-0" size={20} />
                  <div>
                    <div className="font-semibold text-white">Projets à impact social</div>
                    <div className="text-gray-400">Solutions pour l'éducation, la santé et le développement communautaire</div>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <Code className="text-green-400 mt-1 flex-shrink-0" size={20} />
                  <div>
                    <div className="font-semibold text-white">Expertise technique</div>
                    <div className="text-gray-400">Stack MERN, API REST, bases de données relationnelles</div>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <Users className="text-blue-400 mt-1 flex-shrink-0" size={20} />
                  <div>
                    <div className="font-semibold text-white">Collaboration</div>
                    <div className="text-gray-400">Travail en équipe, mentoring et partage de connaissances</div>
                  </div>
                </div>
              </div>

              {/* Call to Action */}
              <div className="pt-4">
                <a
                  href="#contact"
                  className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-green-500 to-blue-500 hover:from-green-600 hover:to-blue-600 rounded-lg text-white font-semibold transition-all duration-300 transform hover:scale-105"
                >
                  Travaillons ensemble
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;