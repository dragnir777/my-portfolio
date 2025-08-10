import React, { useState, useEffect, useRef } from 'react';
import { Calendar, Clock, Tag, ArrowRight, Eye, MessageCircle } from 'lucide-react';

const Blog = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeFilter, setActiveFilter] = useState('all');
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

  const articles = [
    {
      id: 1,
      title: "Node.js vs Python : Quel choix pour votre backend en 2024 ?",
      excerpt: "Analyse comparative des deux technologies backend les plus populaires, avec focus sur l'écosystème africain et les projets à impact social.",
      content: "Dans le paysage technologique africain, choisir la bonne stack backend est crucial...",
      category: "tech",
      tags: ["Node.js", "Python", "Backend", "Comparaison"],
      date: "2024-01-15",
      readTime: "8 min",
      views: 1250,
      comments: 23,
      image: "https://images.pexels.com/photos/11035540/pexels-photo-11035540.jpeg?auto=compress&cs=tinysrgb&w=500",
      featured: true
    },
    {
      id: 2,
      title: "Digitaliser la santé au Burkina Faso : Défis et opportunités",
      excerpt: "Retour d'expérience sur le développement de solutions numériques pour le secteur sanitaire burkinabè et les leçons apprises.",
      content: "Le secteur de la santé au Burkina Faso fait face à des défis majeurs...",
      category: "social",
      tags: ["E-santé", "Burkina Faso", "Impact Social", "Témoignage"],
      date: "2024-01-10",
      readTime: "12 min",
      views: 890,
      comments: 31,
      image: "https://images.pexels.com/photos/48604/pexels-photo-48604.jpeg?auto=compress&cs=tinysrgb&w=500",
      featured: true
    },
    {
      id: 3,
      title: "Guide complet : Créer une API REST avec Express.js",
      excerpt: "Tutorial pas-à-pas pour construire une API robuste et sécurisée avec Node.js et Express, incluant authentification JWT et validation.",
      content: "Express.js est l'un des frameworks les plus populaires pour Node.js...",
      category: "tutorial",
      tags: ["Express.js", "API", "Tutorial", "JWT"],
      date: "2024-01-05",
      readTime: "15 min",
      views: 2100,
      comments: 45,
      image: "https://images.pexels.com/photos/270348/pexels-photo-270348.jpeg?auto=compress&cs=tinysrgb&w=500",
      featured: false
    },
    {
      id: 4,
      title: "L'importance du mentorat dans l'écosystème tech africain",
      excerpt: "Réflexions sur le rôle crucial du partage de connaissances et du mentorat pour développer les talents technologiques en Afrique.",
      content: "L'écosystème technologique africain est en pleine expansion...",
      category: "carriere",
      tags: ["Mentorat", "Afrique", "Carrière", "Communauté"],
      date: "2024-01-02",
      readTime: "6 min",
      views: 756,
      comments: 18,
      image: "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=500",
      featured: false
    },
    {
      id: 5,
      title: "React Hooks : Optimiser les performances de vos apps",
      excerpt: "Techniques avancées pour améliorer les performances de vos applications React avec les hooks personnalisés et l'optimisation de rendu.",
      content: "Les hooks React ont révolutionné la façon dont nous écrivons nos composants...",
      category: "tech",
      tags: ["React", "Hooks", "Performance", "Optimisation"],
      date: "2023-12-28",
      readTime: "10 min",
      views: 1456,
      comments: 27,
      image: "https://images.pexels.com/photos/11035471/pexels-photo-11035471.jpeg?auto=compress&cs=tinysrgb&w=500",
      featured: false
    },
    {
      id: 6,
      title: "E-commerce local : Adapter les solutions aux réalités africaines",
      excerpt: "Comment développer des plateformes e-commerce qui répondent aux spécificités du marché africain : paiement mobile, logistique, confiance.",
      content: "Le e-commerce en Afrique présente des défis et opportunités uniques...",
      category: "business",
      tags: ["E-commerce", "Afrique", "Paiement Mobile", "UX"],
      date: "2023-12-20",
      readTime: "9 min",
      views: 1123,
      comments: 34,
      image: "https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=500",
      featured: false
    }
  ];

  const categories = [
    { id: 'all', label: 'Tous les articles' },
    { id: 'tech', label: 'Technologies' },
    { id: 'social', label: 'Impact Social' },
    { id: 'tutorial', label: 'Tutoriels' },
    { id: 'carriere', label: 'Carrière' },
    { id: 'business', label: 'Business' }
  ];

  const filteredArticles = articles.filter(article => 
    activeFilter === 'all' || article.category === activeFilter
  );

  const featuredArticles = articles.filter(article => article.featured);

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('fr-FR', { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
  };

  return (
    <section id="blog" ref={sectionRef} className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Mon <span className="bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent">Blog</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Réflexions sur la tech, tutoriels et partage d'expériences sur l'impact social du numérique
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-green-400 to-blue-500 mx-auto rounded-full mt-4" />
          </div>

          {/* Featured Articles */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold mb-8 text-center">
              <span className="text-yellow-400">⭐</span> Articles à la Une
            </h3>
            <div className="grid md:grid-cols-2 gap-8">
              {featuredArticles.map((article, index) => (
                <article
                  key={article.id}
                  className="group relative overflow-hidden rounded-2xl bg-gray-800/50 hover:bg-gray-800 transition-all duration-500 transform hover:scale-105 border border-gray-700 hover:border-green-400/50"
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  <div className="relative h-64 overflow-hidden">
                    <img
                      src={article.image}
                      alt={article.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/20 to-transparent" />
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 bg-green-500 text-white text-xs font-semibold rounded-full">
                        À la une
                      </span>
                    </div>
                    <div className="absolute bottom-4 right-4 flex space-x-4 text-white/80 text-sm">
                      <span className="flex items-center">
                        <Eye size={14} className="mr-1" />
                        {article.views}
                      </span>
                      <span className="flex items-center">
                        <MessageCircle size={14} className="mr-1" />
                        {article.comments}
                      </span>
                    </div>
                  </div>

                  <div className="p-6">
                    <div className="flex items-center space-x-4 mb-3 text-sm text-gray-400">
                      <span className="flex items-center">
                        <Calendar size={14} className="mr-2" />
                        {formatDate(article.date)}
                      </span>
                      <span className="flex items-center">
                        <Clock size={14} className="mr-2" />
                        {article.readTime}
                      </span>
                    </div>

                    <h3 className="text-xl font-bold mb-3 text-white group-hover:text-green-400 transition-colors">
                      {article.title}
                    </h3>

                    <p className="text-gray-300 mb-4 line-clamp-3">
                      {article.excerpt}
                    </p>

                    <div className="flex flex-wrap gap-2 mb-4">
                      {article.tags.slice(0, 3).map((tag) => (
                        <span
                          key={tag}
                          className="flex items-center px-2 py-1 bg-gray-700 text-gray-300 text-xs rounded-full"
                        >
                          <Tag size={10} className="mr-1" />
                          {tag}
                        </span>
                      ))}
                    </div>

                    <button className="flex items-center text-green-400 hover:text-green-300 transition-colors font-medium">
                      Lire l'article
                      <ArrowRight size={16} className="ml-2" />
                    </button>
                  </div>
                </article>
              ))}
            </div>
          </div>

          {/* Category Filters */}
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveFilter(category.id)}
                className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                  activeFilter === category.id
                    ? 'bg-gradient-to-r from-green-500 to-blue-500 text-white'
                    : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                }`}
              >
                {category.label}
              </button>
            ))}
          </div>

          {/* Articles Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {filteredArticles.slice(0, 6).map((article, index) => (
              <article
                key={article.id}
                className="group overflow-hidden rounded-xl bg-gray-800/30 hover:bg-gray-800/50 transition-all duration-300 transform hover:scale-105 border border-gray-700 hover:border-gray-600"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 to-transparent" />
                  <div className="absolute bottom-3 right-3 flex space-x-3 text-white/80 text-xs">
                    <span className="flex items-center">
                      <Eye size={12} className="mr-1" />
                      {article.views}
                    </span>
                    <span className="flex items-center">
                      <MessageCircle size={12} className="mr-1" />
                      {article.comments}
                    </span>
                  </div>
                </div>

                <div className="p-5">
                  <div className="flex items-center justify-between mb-3 text-xs text-gray-400">
                    <span className="flex items-center">
                      <Calendar size={12} className="mr-1" />
                      {formatDate(article.date)}
                    </span>
                    <span className="flex items-center">
                      <Clock size={12} className="mr-1" />
                      {article.readTime}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold mb-2 text-white group-hover:text-green-400 transition-colors line-clamp-2">
                    {article.title}
                  </h3>

                  <p className="text-gray-300 text-sm mb-3 line-clamp-2">
                    {article.excerpt}
                  </p>

                  <div className="flex flex-wrap gap-1 mb-3">
                    {article.tags.slice(0, 2).map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-1 bg-gray-700 text-gray-300 text-xs rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <button className="flex items-center text-green-400 hover:text-green-300 transition-colors text-sm font-medium">
                    Lire plus
                    <ArrowRight size={14} className="ml-1" />
                  </button>
                </div>
              </article>
            ))}
          </div>

          {/* Newsletter Section */}
          <div className="text-center bg-gradient-to-r from-green-500/20 to-blue-500/20 rounded-2xl p-12 border border-green-500/20">
            <h3 className="text-2xl font-bold text-white mb-4">
              Restez informé des derniers articles
            </h3>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Recevez les nouveaux articles directement dans votre boîte mail. 
              Pas de spam, juste du contenu de qualité sur la tech et l'impact social.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <input
                type="email"
                placeholder="Votre adresse email"
                className="flex-1 px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:border-green-400 focus:outline-none"
              />
              <button className="px-6 py-3 bg-gradient-to-r from-green-500 to-blue-500 hover:from-green-600 hover:to-blue-600 rounded-lg text-white font-semibold transition-all duration-300 transform hover:scale-105">
                S'abonner
              </button>
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center mt-16">
            <p className="text-gray-400 mb-6">
              Une question sur un article ? Envie de collaborer ?
            </p>
            <a
              href="#contact"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-green-500 to-blue-500 hover:from-green-600 hover:to-blue-600 rounded-full text-white font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-xl"
            >
              Contactez-moi
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blog;