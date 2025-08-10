import React, { useState, useEffect, useRef } from 'react';
import { ExternalLink, Github, Filter, Search, Shield, Palette, FileText, Users, Smartphone, Database, Brain, Leaf } from 'lucide-react';

const Projects = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeFilter, setActiveFilter] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
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

  const projects = [
    {
      id: 1,
      title: "Application Intendance Palais Présidentiel",
      context: "Système complet de gestion pour l'intendance du Palais présidentiel du Burkina Faso",
      role: "Lead Developer - Conception complète, UI/UX, architecture base de données",
      description: "Application web complète pour la gestion des ressources, suivi de projets, et administration avec sécurité renforcée et documentation technique exhaustive.",
      image: "https://images.pexels.com/photos/1181396/pexels-photo-1181396.jpeg?auto=compress&cs=tinysrgb&w=600",
      technologies: ["Node.js", "React", "MySQL", "Express", "JWT", "Tailwind"],
      category: "gouvernemental",
      features: {
        security: ["Authentification multi-niveaux", "Chiffrement des données sensibles", "Audit trail complet"],
        design: ["Interface intuitive", "Dashboard responsive", "UX optimisée pour workflows"],
        documentation: ["Documentation technique complète", "Guide utilisateur", "Procédures de maintenance"]
      },
      github: "#",
      demo: "#",
      featured: true,
      status: "Production",
      year: "2024"
    },
    {
      id: 2,
      title: "Myredlwili - Suivi Cycle Menstruel",
      context: "Application mobile/web de santé féminine avec IA pour conseils personnalisés",
      role: "Full Stack Developer - UI/UX, sécurité données, design responsive",
      description: "Plateforme complète de suivi du cycle menstruel avec intelligence artificielle pour conseils santé personnalisés et interface ergonomique.",
      image: "https://images.pexels.com/photos/4386467/pexels-photo-4386467.jpeg?auto=compress&cs=tinysrgb&w=600",
      technologies: ["React Native", "Node.js", "MongoDB", "TensorFlow", "Express", "Socket.io"],
      category: "sante",
      features: {
        security: ["Chiffrement end-to-end", "Anonymisation des données", "Conformité RGPD"],
        design: ["Design inclusif", "Interface intuitive", "Accessibilité optimisée"],
        documentation: ["API documentation", "Guide d'utilisation", "Protocoles de confidentialité"]
      },
      github: "#",
      demo: "#",
      featured: true,
      status: "Production",
      year: "2024"
    },
    {
      id: 3,
      title: "PlantCare AI - Détection Maladies Plantes",
      context: "Application mobile d'assistance agricole avec IA pour diagnostic phytosanitaire",
      role: "Lead Developer - IA, UI/UX, base de données maladies/remèdes",
      description: "Solution mobile utilisant l'intelligence artificielle pour détecter les maladies des plantes via photos et proposer des traitements adaptés.",
      image: "https://images.pexels.com/photos/1072824/pexels-photo-1072824.jpeg?auto=compress&cs=tinysrgb&w=600",
      technologies: ["React Native", "Python", "TensorFlow", "Node.js", "PostgreSQL", "AWS"],
      category: "agriculture",
      features: {
        security: ["API sécurisée", "Protection des données agricoles", "Authentification robuste"],
        design: ["Interface farmer-friendly", "Workflow simplifié", "Offline capabilities"],
        documentation: ["Guide technique IA", "Manuel utilisateur agriculteur", "Base de connaissances"]
      },
      github: "#",
      demo: "#",
      featured: true,
      status: "Production",
      year: "2024"
    },
    {
      id: 4,
      title: "POSTEMONEY - La Poste Burkina",
      context: "Application mobile de services financiers pour La Poste Burkina Faso",
      role: "UI/UX Designer & QA Tester - Assistance design, tests et améliorations techniques",
      description: "Application mobile de transfert d'argent et services financiers avec interface optimisée et tests fonctionnels approfondis.",
      image: "https://images.pexels.com/photos/4386467/pexels-photo-4386467.jpeg?auto=compress&cs=tinysrgb&w=600",
      technologies: ["React Native", "Node.js", "MySQL", "REST API", "Firebase"],
      category: "fintech",
      features: {
        security: ["Sécurité bancaire", "Chiffrement transactions", "Authentification biométrique"],
        design: ["UX simplifiée", "Interface accessible", "Design system cohérent"],
        documentation: ["Tests fonctionnels", "Rapports QA", "Recommandations UX"]
      },
      github: "#",
      demo: "#",
      featured: false,
      status: "Production",
      year: "2023"
    },
    {
      id: 5,
      title: "APEC Mobile - Refonte UI",
      context: "Refonte complète de l'interface utilisateur de l'application mobile APEC",
      role: "UI/UX Developer - Refonte interface, tests fonctionnels, documentation",
      description: "Modernisation complète de l'interface utilisateur avec amélioration de l'expérience utilisateur et documentation technique.",
      image: "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=600",
      technologies: ["React Native", "TypeScript", "Redux", "Styled Components"],
      category: "mobile",
      features: {
        security: ["Authentification sécurisée", "Protection des données", "Sessions sécurisées"],
        design: ["Interface moderne", "UX repensée", "Responsive design"],
        documentation: ["Documentation utilisateur", "Guide technique", "Procédures de test"]
      },
      github: "#",
      demo: "#",
      featured: false,
      status: "Production",
      year: "2023"
    },
    {
      id: 6,
      title: "Gestion RH & Stock - Armée Nationale",
      context: "Système de gestion des ressources humaines et stocks pour l'Armée nationale",
      role: "QA Tester & Security Consultant - Tests, documentation, recommandations sécurité",
      description: "Application de gestion intégrée avec focus sur la sécurité, tests approfondis et documentation technique complète.",
      image: "https://images.pexels.com/photos/1181396/pexels-photo-1181396.jpeg?auto=compress&cs=tinysrgb&w=600",
      technologies: ["Java", "Spring Boot", "PostgreSQL", "Angular", "Docker"],
      category: "gouvernemental",
      features: {
        security: ["Sécurité militaire", "Audit de sécurité", "Recommandations ANSSI"],
        design: ["Interface fonctionnelle", "Workflow optimisé", "Ergonomie métier"],
        documentation: ["Documentation sécurité", "Procédures de test", "Recommandations techniques"]
      },
      github: "#",
      demo: "#",
      featured: false,
      status: "Production",
      year: "2023"
    },
    {
      id: 7,
      title: "GCOB - Grande Chancellerie",
      context: "Application de gestion des nominations et décorations pour la Grande Chancellerie",
      role: "QA Tester & Technical Writer - Tests fonctionnels, documentation technique",
      description: "Système de gestion des nominations et décorations avec workflow complexe et documentation exhaustive.",
      image: "https://images.pexels.com/photos/1181396/pexels-photo-1181396.jpeg?auto=compress&cs=tinysrgb&w=600",
      technologies: ["PHP", "Laravel", "MySQL", "Vue.js", "Bootstrap"],
      category: "gouvernemental",
      features: {
        security: ["Authentification gouvernementale", "Traçabilité complète", "Sécurité des données"],
        design: ["Interface institutionnelle", "Workflow métier", "Design accessible"],
        documentation: ["Documentation technique", "Guide utilisateur", "Procédures administratives"]
      },
      github: "#",
      demo: "#",
      featured: false,
      status: "Production",
      year: "2023"
    }
  ];

  const categories = [
    { id: 'all', label: 'Tous les projets', icon: <Database size={16} /> },
    { id: 'gouvernemental', label: 'Gouvernemental', icon: <Shield size={16} /> },
    { id: 'sante', label: 'Santé', icon: <Users size={16} /> },
    { id: 'agriculture', label: 'Agriculture', icon: <Leaf size={16} /> },
    { id: 'fintech', label: 'FinTech', icon: <Smartphone size={16} /> },
    { id: 'mobile', label: 'Mobile', icon: <Smartphone size={16} /> }
  ];

  const filteredProjects = projects.filter(project => {
    const matchesFilter = activeFilter === 'all' || project.category === activeFilter;
    const matchesSearch = project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         project.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         project.context.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         project.technologies.some(tech => tech.toLowerCase().includes(searchTerm.toLowerCase()));
    return matchesFilter && matchesSearch;
  });

  const featuredProjects = projects.filter(project => project.featured);

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Production': return 'bg-cyber-green text-white';
      case 'Development': return 'bg-blue-500 text-white';
      case 'Testing': return 'bg-yellow-500 text-white';
      default: return 'bg-gray-500 text-white';
    }
  };

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'gouvernemental': return <Shield size={20} className="text-blue-400" />;
      case 'sante': return <Users size={20} className="text-red-400" />;
      case 'agriculture': return <Leaf size={20} className="text-green-400" />;
      case 'fintech': return <Smartphone size={20} className="text-yellow-400" />;
      case 'mobile': return <Smartphone size={20} className="text-purple-400" />;
      default: return <Database size={20} className="text-gray-400" />;
    }
  };

  return (
    <section id="projects" ref={sectionRef} className="py-20 bg-gray-800/30">
      <div className="container mx-auto px-4">
        <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Mes <span className="bg-gradient-to-r from-cyber-green to-blue-500 bg-clip-text text-transparent">Projets</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Découvrez mes réalisations techniques dans les secteurs gouvernemental, santé, agriculture et fintech, 
              avec un focus sur la sécurité, le design et la documentation.
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-green-400 to-blue-500 mx-auto rounded-full mt-6" />
          </div>

          {/* Featured Projects */}
          <div className="mb-20">
            <h3 className="text-2xl font-bold mb-8 text-center flex items-center justify-center">
              <span className="text-yellow-400 mr-2">⭐</span> 
              Projets Phares
            </h3>
            <div className="grid lg:grid-cols-3 gap-8">
              {featuredProjects.map((project, index) => (
                <div
                  key={project.id}
                  className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-gray-900/80 to-gray-800/80 hover:from-gray-800/80 hover:to-gray-700/80 transition-all duration-500 transform hover:scale-105 border border-gray-700 hover:border-cyber-green/50 shadow-xl hover:shadow-2xl"
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40 to-transparent" />
                    
                    {/* Status Badge */}
                    <div className="absolute top-4 left-4">
                      <span className={`px-3 py-1 text-xs font-semibold rounded-full ${getStatusColor(project.status)}`}>
                        {project.status}
                      </span>
                    </div>
                    
                    {/* Year Badge */}
                    <div className="absolute top-4 right-4">
                      <span className="px-3 py-1 bg-black/50 text-white text-xs font-semibold rounded-full">
                        {project.year}
                      </span>
                    </div>

                    {/* Category Icon */}
                    <div className="absolute bottom-4 left-4">
                      {getCategoryIcon(project.category)}
                    </div>
                  </div>

                  <div className="p-6">
                    <h4 className="text-xl font-bold mb-3 text-white group-hover:text-green-400 transition-colors line-clamp-2">
                      {project.title}
                    </h4>
                    
                    <div className="mb-4">
                      <p className="text-sm text-gray-400 mb-2 font-inter">
                        <strong className="text-blue-400">Contexte:</strong> {project.context}
                      </p>
                      <p className="text-sm text-gray-400 font-inter">
                        <strong className="text-green-400">Rôle:</strong> {project.role}
                      </p>
                    </div>

                    <p className="text-gray-300 mb-4 line-clamp-3 font-inter">
                      {project.description}
                    </p>

                    {/* Key Features */}
                    <div className="grid grid-cols-3 gap-2 mb-4">
                      <div className="text-center p-2 bg-gray-800/50 rounded-lg">
                        <Shield size={16} className="text-red-400 mx-auto mb-1" />
                        <span className="text-xs text-gray-300">Sécurité</span>
                      </div>
                      <div className="text-center p-2 bg-gray-800/50 rounded-lg">
                        <Palette size={16} className="text-purple-400 mx-auto mb-1" />
                        <span className="text-xs text-gray-300">Design</span>
                      </div>
                      <div className="text-center p-2 bg-gray-800/50 rounded-lg">
                        <FileText size={16} className="text-blue-400 mx-auto mb-1" />
                        <span className="text-xs text-gray-300">Docs</span>
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.slice(0, 4).map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-1 bg-gray-800 text-gray-300 text-xs rounded-full border border-gray-600"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.technologies.length > 4 && (
                        <span className="px-2 py-1 bg-gray-800 text-gray-400 text-xs rounded-full border border-gray-600">
                          +{project.technologies.length - 4}
                        </span>
                      )}
                    </div>

                    <div className="flex space-x-4">
                      <a
                        href={project.github}
                        className="flex items-center space-x-2 text-gray-400 hover:text-white transition-colors"
                      >
                        <Github size={16} />
                        <span className="text-sm">Code</span>
                      </a>
                      <a
                        href={project.demo}
                        className="flex items-center space-x-2 text-green-400 hover:text-green-300 transition-colors"
                      >
                        <ExternalLink size={16} />
                        <span className="text-sm">Détails</span>
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Filters and Search */}
          <div className="mb-12">
            <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
              {/* Search */}
              <div className="relative w-full lg:w-96">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                <input
                  type="text"
                  placeholder="Rechercher un projet..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-12 pr-4 py-3 bg-gray-800/50 border border-gray-700 rounded-xl text-white placeholder-gray-400 focus:border-green-400 focus:outline-none transition-colors"
                />
              </div>

              {/* Filters */}
              <div className="flex flex-wrap gap-2 items-center">
                <Filter className="text-gray-400 mr-2" size={20} />
                {categories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => setActiveFilter(category.id)}
                    className={`flex items-center space-x-2 px-4 py-2 rounded-lg font-inter font-medium transition-all duration-300 ${
                      activeFilter === category.id
                        ? 'bg-gradient-to-r from-green-400 to-blue-500 text-white shadow-lg'
                        : 'bg-gray-800/50 text-gray-300 hover:bg-gray-700/50 border border-gray-700'
                    }`}
                  >
                    {category.icon}
                    <span>{category.label}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {filteredProjects.map((project, index) => (
              <div
                key={project.id}
                className="group relative overflow-hidden rounded-xl bg-gray-900/50 hover:bg-gray-800/50 transition-all duration-300 transform hover:scale-105 border border-gray-700 hover:border-gray-600 shadow-lg hover:shadow-xl"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-transparent to-transparent" />
                  
                  <div className="absolute top-4 left-4 flex space-x-2">
                    <span className={`px-2 py-1 text-xs font-semibold rounded-full ${getStatusColor(project.status)}`}>
                      {project.status}
                    </span>
                    <span className="px-2 py-1 bg-black/50 text-white text-xs font-semibold rounded-full">
                      {project.year}
                    </span>
                  </div>
                  
                  <div className="absolute bottom-4 left-4">
                    {getCategoryIcon(project.category)}
                  </div>
                </div>

                <div className="p-6">
                  <h4 className="text-lg font-bold mb-2 text-white group-hover:text-green-400 transition-colors line-clamp-2">
                    {project.title}
                  </h4>
                  
                  <div className="mb-3">
                    <p className="text-xs text-gray-400 mb-1">
                      <strong className="text-blue-400">Rôle:</strong> {project.role.split(' - ')[0]}
                    </p>
                  </div>

                  <p className="text-gray-300 mb-4 text-sm line-clamp-2">
                    {project.description}
                  </p>

                  {/* Detailed Features */}
                  <div className="mb-4">
                    <div className="grid grid-cols-3 gap-2 text-xs">
                      <div className="bg-red-500/20 border border-red-500/30 rounded-lg p-2 text-center">
                        <Shield size={14} className="text-red-400 mx-auto mb-1" />
                        <div className="text-red-300 font-medium">Sécurité</div>
                        <div className="text-gray-400">{project.features.security.length} points</div>
                      </div>
                      <div className="bg-purple-500/20 border border-purple-500/30 rounded-lg p-2 text-center">
                        <Palette size={14} className="text-purple-400 mx-auto mb-1" />
                        <div className="text-purple-300 font-medium">Design</div>
                        <div className="text-gray-400">{project.features.design.length} aspects</div>
                      </div>
                      <div className="bg-blue-500/20 border border-blue-500/30 rounded-lg p-2 text-center">
                        <FileText size={14} className="text-blue-400 mx-auto mb-1" />
                        <div className="text-blue-300 font-medium">Docs</div>
                        <div className="text-gray-400">{project.features.documentation.length} types</div>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-1 mb-4">
                    {project.technologies.slice(0, 3).map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 bg-gray-800 text-gray-300 text-xs rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 3 && (
                      <span className="px-2 py-1 bg-gray-800 text-gray-400 text-xs rounded-full">
                        +{project.technologies.length - 3}
                      </span>
                    )}
                  </div>

                  <div className="flex space-x-4">
                    <a
                      href={project.github}
                      className="flex items-center space-x-1 text-gray-400 hover:text-white transition-colors text-sm"
                    >
                      <Github size={14} />
                      <span>Code</span>
                    </a>
                    <a
                      href={project.demo}
                      className="flex items-center space-x-1 text-green-400 hover:text-green-300 transition-colors text-sm"
                    >
                      <ExternalLink size={14} />
                      <span>Détails</span>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* No results */}
          {filteredProjects.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-400 text-lg">Aucun projet trouvé pour ces critères.</p>
            </div>
          )}

          {/* Call to Action */}
          <div className="text-center bg-gradient-to-r from-green-500/10 to-blue-500/10 rounded-2xl p-12 border border-green-500/20">
            <h3 className="text-2xl font-bold text-white mb-4">
              Intéressé par mes réalisations ?
            </h3>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Discutons de votre prochain projet ! Je peux vous accompagner dans le développement, 
              la sécurisation et la documentation de vos applications.
            </p>
            <a
              href="#contact"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-green-500 to-blue-500 hover:from-green-600 hover:to-blue-600 rounded-full text-white font-semibold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-xl"
            >
              Démarrer un projet
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;