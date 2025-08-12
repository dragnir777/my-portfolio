import React, { useState, useEffect, useRef } from 'react';
import { 
  Code, 
  Database, 
  Smartphone, 
  Globe, 
  Users, 
  Zap, 
  ArrowRight,
  Check
} from 'lucide-react';

const Services = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeService, setActiveService] = useState<number | null>(null);
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

  const services = [
    {
      id: 1,
      title: "Développement d'API Backend",
      description: "Création d'APIs REST robustes et sécurisées avec Node.js et Express pour vos applications.",
      icon: <Database className="text-green-400" size={48} />,
      features: [
        "API REST complète",
        "Authentification JWT",
        "Base de données MySQL",
        "Documentation Swagger",
        "Tests unitaires",
        "Déploiement cloud"
      ],
      price: "À partir de 500€",
      duration: "2-4 semaines",
      color: "from-green-400 to-green-600"
    },
    {
      id: 2,
      title: "Applications Web React",
      description: "Interfaces utilisateur modernes et réactives avec React.js et les meilleures pratiques UX/UI.",
      icon: <Code className="text-blue-400" size={48} />,
      features: [
        "Interface responsive",
        "Composants réutilisables",
        "État global (Redux/Context)",
        "Intégration API",
        "Optimisation performance",
        "Tests e2e"
      ],
      price: "À partir de 800€",
      duration: "3-6 semaines",
      color: "from-blue-400 to-blue-600"
    },
    {
      id: 3,
      title: "Sites Web Vitrine",
      description: "Sites web professionnels pour présenter votre entreprise ou projet avec impact.",
      icon: <Globe className="text-purple-400" size={48} />,
      features: [
        "Design sur mesure",
        "SEO optimisé",
        "Multi-langues",
        "CMS intégré",
        "Analytics tracking",
        "Maintenance incluse"
      ],
      price: "À partir de 300€",
      duration: "1-2 semaines",
      color: "from-purple-400 to-purple-600"
    },
    {
      id: 4,
      title: "Modernisation Bootstrap → React",
      description: "Migration de vos interfaces Bootstrap existantes vers des applications React modernes.",
      icon: <Smartphone className="text-cyan-400" size={48} />,
      features: [
        "Audit de l'existant",
        "Architecture modulaire",
        "Composants React",
        "State management",
        "Performance améliorée",
        "Formation équipe"
      ],
      price: "À partir de 600€",
      duration: "2-5 semaines",
      color: "from-cyan-400 to-cyan-600"
    },
    {
      id: 5,
      title: "Modélisation Base de Données",
      description: "Conception et optimisation de bases de données relationnelles pour vos projets.",
      icon: <Zap className="text-yellow-400" size={48} />,
      features: [
        "Analyse des besoins",
        "Modèle conceptuel",
        "Optimisation requêtes",
        "Scripts de migration",
        "Backup strategy",
        "Documentation complète"
      ],
      price: "À partir de 400€",
      duration: "1-3 semaines",
      color: "from-yellow-400 to-yellow-600"
    },
    {
      id: 6,
      title: "Projets à Impact Social",
      description: "Solutions techniques dédiées aux ONG, projets éducatifs, sanitaires et communautaires.",
      icon: <Users className="text-red-400" size={48} />,
      features: [
        "Tarifs préférentiels",
        "Conseil stratégique",
        "Formation utilisateurs",
        "Support long terme",
        "Open source options",
        "Impact measurement"
      ],
      price: "Tarifs négociables",
      duration: "Variable",
      color: "from-red-400 to-red-600"
    }
  ];

  const processSteps = [
    {
      step: "01",
      title: "Consultation",
      description: "Analyse de vos besoins et définition du cahier des charges"
    },
    {
      step: "02",
      title: "Proposition",
      description: "Devis détaillé avec timeline et technologies recommandées"
    },
    {
      step: "03",
      title: "Développement",
      description: "Réalisation avec suivi régulier et tests continus"
    },
    {
      step: "04",
      title: "Livraison",
      description: "Formation, documentation et support post-livraison"
    }
  ];

  return (
    <section id="services" ref={sectionRef} className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Mes <span className="bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent">Services</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Des solutions techniques adaptées à vos besoins, du développement web aux projets à impact social
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-green-400 to-blue-500 mx-auto rounded-full mt-4" />
          </div>

          {/* Services Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
            {services.map((service, index) => (
              <div
                key={service.id}
                className={`relative p-8 bg-gray-800/50 rounded-2xl border border-gray-700 hover:border-gray-600 transition-all duration-500 transform hover:scale-105 cursor-pointer ${
                  activeService === service.id ? 'ring-2 ring-green-400' : ''
                }`}
                style={{ animationDelay: `${index * 0.1}s` }}
                onClick={() => setActiveService(activeService === service.id ? null : service.id)}
              >
                {/* Icon */}
                <div className="mb-6">
                  {service.icon}
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold mb-4 text-white">
                  {service.title}
                </h3>
                
                <p className="text-gray-300 mb-6">
                  {service.description}
                </p>

                {/* Price & Duration */}
                <div className="flex justify-between items-center mb-4">
                  <span className="text-green-400 font-semibold">
                    {service.price}
                  </span>
                  <span className="text-gray-400 text-sm">
                    {service.duration}
                  </span>
                </div>

                {/* Expand/Collapse */}
                <button className="flex items-center text-blue-400 hover:text-blue-300 transition-colors">
                  <span className="mr-2">Voir détails</span>
                  <ArrowRight 
                    size={16} 
                    className={`transition-transform duration-300 ${
                      activeService === service.id ? 'rotate-90' : ''
                    }`}
                  />
                </button>

                {/* Expanded Content */}
                <div className={`overflow-hidden transition-all duration-500 ${
                  activeService === service.id ? 'max-h-96 mt-6' : 'max-h-0'
                }`}>
                  <div className="border-t border-gray-700 pt-6">
                    <h4 className="font-semibold text-white mb-4">Inclus dans cette prestation :</h4>
                    <ul className="space-y-2">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center text-gray-300">
                          <Check size={16} className="text-green-400 mr-3 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Process Section */}
          <div className="mb-16">
            <h3 className="text-3xl font-bold text-center mb-12">
              Comment <span className="text-green-400">ça marche ?</span>
            </h3>
            
            <div className="grid md:grid-cols-4 gap-8">
              {processSteps.map((step, index) => (
                <div
                  key={step.step}
                  className="text-center relative"
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  {/* Step Number */}
                  <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-green-500 to-blue-500 rounded-full flex items-center justify-center text-white font-bold text-xl">
                    {step.step}
                  </div>

                  {/* Connector Line */}
                  {index < processSteps.length - 1 && (
                    <div className="hidden md:block absolute top-8 left-1/2 w-full h-0.5 bg-gradient-to-r from-green-400 to-blue-500 transform translate-x-8 z-0" />
                  )}

                  {/* Content */}
                  <h4 className="text-lg font-semibold text-white mb-2 relative z-10">
                    {step.title}
                  </h4>
                  <p className="text-gray-300 text-sm relative z-10">
                    {step.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center bg-gradient-to-r from-green-500/20 to-blue-500/20 rounded-2xl p-12 border border-green-500/20">
            <h3 className="text-2xl font-bold text-white mb-4">
              Prêt à démarrer votre projet ?
            </h3>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Discutons de vos besoins et trouvons ensemble la solution technique idéale pour votre projet.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#contact"
                className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-green-500 to-blue-500 hover:from-green-600 hover:to-blue-600 rounded-full text-white font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-xl"
              >
                Demander un devis
              </a>
              <a
                href="https://wa.me/0022677715148"
                className="inline-flex items-center justify-center px-8 py-4 border border-gray-600 hover:border-green-400 rounded-full text-gray-300 hover:text-green-400 font-semibold transition-all duration-300"
              >
                WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;