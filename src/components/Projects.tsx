import React, { useState, useEffect, useRef } from 'react';
import { ExternalLink, Github, Filter, Search, Shield, Palette, FileText, Users, Smartphone, Database, Leaf } from 'lucide-react';

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
      description: "Application web complète pour la gestion des ressources, suivi de projets, et administration avec sécurité renforcée.",
      image: "https://images.pexels.com/photos/1181396/pexels-photo-1181396.jpeg?auto=compress&cs=tinysrgb&w=600",
      technologies: ["Node.js", "React", "MySQL", "Express", "JWT", "Tailwind"],
      category: "gouvernemental",
      github: "#",
      demo: "#",
      featured: true,
      status: "Production",
      year: "2024"
    },
    {
      id: 2,
      title: "Myredlwili - Suivi Cycle Menstruel",
      description: "Plateforme complète de suivi du cycle menstruel avec intelligence artificielle pour conseils santé personnalisés.",
      image: "https://images.pexels.com/photos/4386467/pexels-photo-4386467.jpeg?auto=compress&cs=tinysrgb&w=600",
      technologies: ["React Native", "Node.js", "MongoDB", "TensorFlow", "Express"],
      category: "sante",
      github: "#",
      demo: "#",
      featured: true,
      status: "Production",
      year: "2024"
    },
    {
      id: 3,
      title: "PlantCare AI - Détection Maladies Plantes",
      description: "Solution mobile utilisant l'intelligence artificielle pour détecter les maladies des plantes via photos.",
      image: "https://images.pexels.com/photos/1072824/pexels-photo-1072824.jpeg?auto=compress&cs=tinysrgb&w=600",
      technologies: ["React Native", "Python", "TensorFlow", "Node.js", "PostgreSQL"],
      category: "agriculture",
      github: "#",
      demo: "#",
      featured: true,
      status: "Production",
      year: "2024"
    },
    {
      id: 4,
      title: "POSTEMONEY - La Poste Burkina",
      description: "Application mobile de transfert d'argent et services financiers avec interface optimisée.",
      image: "https://images.pexels.com/photos/4386467/pexels-photo-4386467.jpeg?auto=compress&cs=tinysrgb&w=600",
      technologies: ["React Native", "Node.js", "MySQL", "REST API", "Firebase"],
      category: "fintech",
      github: "#",
      demo: "#",
      featured: false,
      status: "Production",
      year: "2023"
    }
  ];

  const categories = [
    { id: 'all', label: 'Tous les projets' },
    { id: 'gouvernemental', label: 'Gouvernemental' },
    { id: 'sante', label: 'Santé' },
    { id: 'agriculture', label: 'Agriculture' },
    { id: 'fintech', label: 'FinTech' }
  ];

  const filteredProjects = projects.filter(project => {
    const matchesFilter = activeFilter === 'all' || project.category === activeFilter;
    const matchesSearch = project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         project.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  return (
    <section id="projects" ref={sectionRef} className="py-20 bg-gray-900 text-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Mes <span className="bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent">Projets</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Découvrez mes réalisations techniques dans les secteurs gouvernemental, santé, agriculture et fintech.
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-green-400 to-blue-500 mx-auto rounded-full mt-6" />
        </div>

        {/* Test: Simple project count */}
        <div className="text-center mb-8">
          <p className="text-green-400 text-lg">
            {projects.length} projets trouvés
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveFilter(category.id)}
              className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                activeFilter === category.id
                  ? 'bg-gradient-to-r from-green-500 to-blue-500 text-white'
                  : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
              }`}
            >
              {category.label}
            </button>
          ))}
        </div>

        {/* Projects Grid - Simplified */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="bg-gray-800 rounded-xl overflow-hidden hover:bg-gray-700 transition-all duration-300 border border-gray-700"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <span className="px-3 py-1 bg-green-500 text-white text-sm rounded-full">
                    {project.status}
                  </span>
                  <span className="text-gray-400 text-sm">
                    {project.year}
                  </span>
                </div>

                <h3 className="text-xl font-bold mb-3 text-white">
                  {project.title}
                </h3>

                <p className="text-gray-300 mb-4">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.slice(0, 3).map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 bg-gray-700 text-gray-300 text-sm rounded"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex space-x-4">
                  <a
                    href={project.github}
                    className="flex items-center space-x-2 text-gray-400 hover:text-white transition-colors"
                  >
                    <Github size={16} />
                    <span>Code</span>
                  </a>
                  <a
                    href={project.demo}
                    className="flex items-center space-x-2 text-green-400 hover:text-green-300 transition-colors"
                  >
                    <ExternalLink size={16} />
                    <span>Voir</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Debug info */}
        <div className="mt-12 text-center">
          <p className="text-gray-400">
            Projets filtrés: {filteredProjects.length} / {projects.length}
          </p>
          <p className="text-gray-400">
            Filtre actif: {activeFilter}
          </p>
        </div>
      </div>
    </section>
  );
};

export default Projects;