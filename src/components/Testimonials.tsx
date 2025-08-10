import React, { useState, useEffect, useRef } from 'react';
import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react';

const Testimonials = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeTestimonial, setActiveTestimonial] = useState(0);
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

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const testimonials = [
    {
      id: 1,
      name: "Dr. Marie OUEDRAOGO",
      position: "Directrice, Centre Médical Laafi",
      company: "Secteur Santé",
      content: "Axison a développé notre système de gestion hospitalière avec une approche très professionnelle. L'interface est intuitive et a vraiment amélioré notre efficacité. Son engagement pour les projets à impact social est remarquable.",
      rating: 5,
      image: "https://images.pexels.com/photos/5327585/pexels-photo-5327585.jpeg?auto=compress&cs=tinysrgb&w=150",
      project: "Système de Gestion Hospitalière"
    },
    {
      id: 2,
      name: "Ibrahim SAWADOGO",
      position: "Fondateur",
      company: "BF-Commerce",
      content: "Excellente collaboration avec Axison pour notre plateforme e-commerce. Il a su comprendre nos besoins spécifiques au marché burkinabè et livrer une solution robuste avec paiement mobile intégré.",
      rating: 5,
      image: "https://images.pexels.com/photos/3785079/pexels-photo-3785079.jpeg?auto=compress&cs=tinysrgb&w=150",
      project: "E-commerce Local"
    },
    {
      id: 3,
      name: "Sarah KONE",
      position: "Responsable IT",
      company: "ONG Éducation Plus",
      content: "Un développeur passionné qui comprend les enjeux du secteur associatif. La plateforme éducative qu'il a créée nous aide à former plus de 500 élèves. Réactivité et qualité au rendez-vous !",
      rating: 5,
      image: "https://images.pexels.com/photos/1181519/pexels-photo-1181519.jpeg?auto=compress&cs=tinysrgb&w=150",
      project: "Plateforme Éducative"
    },
    {
      id: 4,
      name: "Jean-Baptiste ILBOUDO",
      position: "Entrepreneur Tech",
      company: "StartupBF",
      content: "Axison a migré notre ancienne interface Bootstrap vers React avec brio. Code propre, documentation claire et respect des délais. Je recommande vivement ses services pour vos projets web.",
      rating: 5,
      image: "https://images.pexels.com/photos/3777943/pexels-photo-3777943.jpeg?auto=compress&cs=tinysrgb&w=150",
      project: "Migration Bootstrap vers React"
    },
    {
      id: 5,
      name: "Aminata TRAORE",
      position: "Cheffe de Projet",
      company: "Agence Digitale BF",
      content: "Collaboration enrichissante sur plusieurs APIs. Axison maîtrise parfaitement Node.js et MySQL. Ses solutions sont toujours bien architecturées et évolutives. Un vrai professionnel !",
      rating: 5,
      image: "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=150",
      project: "Développement d'APIs"
    }
  ];

  const nextTestimonial = () => {
    setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setActiveTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section id="testimonials" ref={sectionRef} className="py-20 bg-gray-800/50">
      <div className="container mx-auto px-4">
        <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent">Témoignages</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Ce que disent mes clients et partenaires sur nos collaborations
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-green-400 to-blue-500 mx-auto rounded-full mt-4" />
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
            <div className="text-center">
              <div className="text-3xl font-bold text-green-400 mb-2">50+</div>
              <div className="text-gray-300">Projets livrés</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-400 mb-2">100%</div>
              <div className="text-gray-300">Clients satisfaits</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-yellow-400 mb-2">4.9/5</div>
              <div className="text-gray-300">Note moyenne</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-400 mb-2">24h</div>
              <div className="text-gray-300">Temps de réponse</div>
            </div>
          </div>

          {/* Main Testimonial Carousel */}
          <div className="relative max-w-4xl mx-auto mb-16">
            <div className="bg-gray-900/50 rounded-2xl p-8 md:p-12 border border-gray-700 relative overflow-hidden">
              {/* Quote Icon */}
              <div className="absolute top-6 left-6 opacity-20">
                <Quote size={48} className="text-green-400" />
              </div>

              {/* Navigation Buttons */}
              <button
                onClick={prevTestimonial}
                className="absolute top-1/2 left-4 transform -translate-y-1/2 w-12 h-12 bg-gray-800 hover:bg-gray-700 rounded-full flex items-center justify-center transition-colors z-10"
              >
                <ChevronLeft size={20} className="text-white" />
              </button>

              <button
                onClick={nextTestimonial}
                className="absolute top-1/2 right-4 transform -translate-y-1/2 w-12 h-12 bg-gray-800 hover:bg-gray-700 rounded-full flex items-center justify-center transition-colors z-10"
              >
                <ChevronRight size={20} className="text-white" />
              </button>

              {/* Content */}
              <div className="relative z-10">
                <div className="flex items-center justify-center mb-6">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      size={24}
                      className={`${
                        i < testimonials[activeTestimonial].rating
                          ? 'text-yellow-400 fill-current'
                          : 'text-gray-600'
                      }`}
                    />
                  ))}
                </div>

                <blockquote className="text-xl md:text-2xl text-gray-300 text-center mb-8 leading-relaxed">
                  "{testimonials[activeTestimonial].content}"
                </blockquote>

                <div className="flex items-center justify-center space-x-4">
                  <img
                    src={testimonials[activeTestimonial].image}
                    alt={testimonials[activeTestimonial].name}
                    className="w-16 h-16 rounded-full border-2 border-green-400"
                  />
                  <div className="text-center">
                    <div className="font-bold text-white text-lg">
                      {testimonials[activeTestimonial].name}
                    </div>
                    <div className="text-green-400 font-medium">
                      {testimonials[activeTestimonial].position}
                    </div>
                    <div className="text-gray-400 text-sm">
                      {testimonials[activeTestimonial].company}
                    </div>
                    <div className="text-blue-400 text-xs mt-1">
                      Projet: {testimonials[activeTestimonial].project}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Dots Indicator */}
            <div className="flex justify-center space-x-2 mt-6">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === activeTestimonial
                      ? 'bg-green-400 scale-125'
                      : 'bg-gray-600 hover:bg-gray-500'
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Testimonials Grid */}
          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.slice(0, 3).map((testimonial, index) => (
              <div
                key={testimonial.id}
                className={`p-6 bg-gray-900/30 rounded-xl border border-gray-700 hover:border-gray-600 transition-all duration-300 transform hover:scale-105 ${
                  activeTestimonial === index ? 'ring-2 ring-green-400' : ''
                }`}
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      size={16}
                      className={`${
                        i < testimonial.rating
                          ? 'text-yellow-400 fill-current'
                          : 'text-gray-600'
                      }`}
                    />
                  ))}
                </div>

                <p className="text-gray-300 text-sm mb-4 line-clamp-4">
                  "{testimonial.content}"
                </p>

                <div className="flex items-center space-x-3">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-10 h-10 rounded-full"
                  />
                  <div>
                    <div className="font-semibold text-white text-sm">
                      {testimonial.name}
                    </div>
                    <div className="text-gray-400 text-xs">
                      {testimonial.position}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Call to Action */}
          <div className="text-center mt-16">
            <h3 className="text-2xl font-bold text-white mb-4">
              Rejoignez mes clients satisfaits
            </h3>
            <p className="text-gray-300 mb-6">
              Prêt à démarrer votre projet ? Discutons de vos besoins.
            </p>
            <a
              href="#contact"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-green-500 to-blue-500 hover:from-green-600 hover:to-blue-600 rounded-full text-white font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-xl"
            >
              Commencer maintenant
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;