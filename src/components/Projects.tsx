import React, { useState } from 'react';

const Projects = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const projects = [
    {
      id: 1,
      title: "Portfolio Personnel",
      description: "Site web portfolio développé avec React, TypeScript et Tailwind CSS",
      technologies: ["React", "TypeScript", "Tailwind CSS", "Vite"],
      category: "web",
      image: "https://via.placeholder.com/300x200/4CAF50/white?text=Portfolio"
    },
    {
      id: 2,
      title: "API E-commerce",
      description: "Backend RESTful API pour une plateforme e-commerce",
      technologies: ["Node.js", "Express", "MongoDB", "JWT"],
      category: "backend",
      image: "https://via.placeholder.com/300x200/2196F3/white?text=API+E-commerce"
    },
    {
      id: 3,
      title: "Application Mobile",
      description: "Application mobile de gestion de tâches",
      technologies: ["React Native", "Redux", "Firebase"],
      category: "mobile",
      image: "https://via.placeholder.com/300x200/FF9800/white?text=Mobile+App"
    },
    {
      id: 4,
      title: "Dashboard Analytics",
      description: "Tableau de bord d'analyse de données en temps réel",
      technologies: ["React", "D3.js", "Socket.io", "Node.js"],
      category: "web",
      image: "https://via.placeholder.com/300x200/9C27B0/white?text=Dashboard"
    },
    {
      id: 5,
      title: "Système de Chat",
      description: "Application de chat en temps réel avec authentification",
      technologies: ["Socket.io", "React", "Node.js", "MongoDB"],
      category: "backend",
      image: "https://via.placeholder.com/300x200/F44336/white?text=Chat+App"
    },
    {
      id: 6,
      title: "Bot IA",
      description: "Bot intelligent utilisant l'IA pour l'assistance client",
      technologies: ["Python", "TensorFlow", "NLP", "FastAPI"],
      category: "ai",
      image: "https://via.placeholder.com/300x200/00BCD4/white?text=AI+Bot"
    }
  ];

  const categories = [
    { id: 'all', name: 'Tous' },
    { id: 'web', name: 'Web' },
    { id: 'backend', name: 'Backend' },
    { id: 'mobile', name: 'Mobile' },
    { id: 'ai', name: 'Intelligence Artificielle' }
  ];

  const filteredProjects = selectedCategory === 'all' 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

  return (
    <section id="projects" className="py-16 bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white mb-4">Mes Projets</h2>
          <p className="text-gray-300 text-lg">Découvrez mes réalisations en développement</p>
        </div>

        {/* Filtres par catégorie */}
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          {categories.map(category => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-6 py-2 rounded-full transition-all duration-300 ${
                selectedCategory === category.id
                  ? 'bg-green-500 text-white'
                  : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>

        {/* Grille des projets */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map(project => (
            <div
              key={project.id}
              className="bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:transform hover:scale-105"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-white mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-300 mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map(tech => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-green-600 text-white text-sm rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <button className="w-full bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded transition-colors duration-300">
                  Voir le projet
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;