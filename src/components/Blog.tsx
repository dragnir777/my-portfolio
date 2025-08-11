import React, { useState, useEffect, useRef, useMemo } from 'react';
import { Calendar, Clock, Tag, ArrowRight, Eye, MessageCircle, Search } from 'lucide-react';
import { Link } from 'react-router-dom';
import posts from '../shared/blogPosts.tsx';

const PER_PAGE = 6;

const Blog = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [query, setQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState<'all' | 'developpement-web' | 'design-ui-ux' | 'cybersecurite'>('all');
  const [page, setPage] = useState(1);
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

  const categories = [
    { id: 'all' as const, label: 'Tous les articles' },
    { id: 'developpement-web' as const, label: 'Développement' },
    { id: 'design-ui-ux' as const, label: 'Design' },
    { id: 'cybersecurite' as const, label: 'Cybersécurité' },
  ];

  const filteredPosts = useMemo(() => {
    const q = query.trim().toLowerCase();
    const list = posts.filter((p) => {
      const matchesCategory = activeCategory === 'all' || p.categoryId === activeCategory;
      const matchesQuery = !q || p.title.toLowerCase().includes(q) || p.excerpt.toLowerCase().includes(q) || p.content.toLowerCase().includes(q);
      return matchesCategory && matchesQuery;
    });
    return list;
  }, [query, activeCategory]);

  const totalPages = Math.max(1, Math.ceil(filteredPosts.length / PER_PAGE));
  const currentPage = Math.min(Math.max(1, page), totalPages);
  const start = (currentPage - 1) * PER_PAGE;
  const items = filteredPosts.slice(start, start + PER_PAGE);

  const featuredArticles = posts.slice(0, Math.min(2, posts.length));

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('fr-FR', { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
  };

  const onCategory = (id: 'all' | 'developpement-web' | 'design-ui-ux' | 'cybersecurite') => {
    setActiveCategory(id);
    setPage(1);
  };

  const onSearch = (value: string) => {
    setQuery(value);
    setPage(1);
  };

  return (
    <section id="blog" ref={sectionRef} className="py-20 bg-deep-night text-off-white">
      <div className="container mx-auto px-4">
        <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {/* Section Header */}
          <div className="text-center mb-10">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Blog – <span className="text-cyber-green">Développement, Design & Cybersécurité</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Partage de bonnes pratiques, retours d’expérience et conseils techniques
            </p>
            <div className="w-24 h-1 bg-cyber-green mx-auto rounded-full mt-4" />
          </div>

          {/* Featured Articles */}
          {featuredArticles.length > 0 && (
            <div className="mb-12">
              <h3 className="text-2xl font-bold mb-8 text-center">
                <span className="text-yellow-400">⭐</span> Articles à la Une
              </h3>
              <div className="grid md:grid-cols-2 gap-8">
                {featuredArticles.map((article, index) => (
                  <Link
                    to={`/blog/${article.slug}`}
                    key={article.slug}
                    className="group relative overflow-hidden rounded-2xl bg-gray-900/40 hover:bg-gray-900/60 transition-all duration-500 transform hover:scale-105 border border-gray-800 hover:border-cyber-green"
                    style={{ animationDelay: `${index * 0.2}s` }}
                  >
                    <div className="relative h-64 overflow-hidden">
                      <img
                        src={article.image}
                        alt={article.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-deep-night via-deep-night/20 to-transparent" />
                      <div className="absolute top-4 left-4">
                        <span className="px-3 py-1 bg-cyber-green text-deep-night text-xs font-semibold rounded-full">
                          À la une
                        </span>
                      </div>
                      <div className="absolute bottom-4 right-4 flex space-x-4 text-white/80 text-sm">
                        <span className="flex items-center">
                          <Eye size={14} className="mr-1" />
                          {/* Optionnel: vues */}
                        </span>
                        <span className="flex items-center">
                          <MessageCircle size={14} className="mr-1" />
                          {/* Optionnel: commentaires */}
                        </span>
                      </div>
                    </div>

                    <div className="p-6">
                      <div className="flex items-center space-x-4 mb-3 text-sm text-gray-400">
                        <span className="flex items-center">
                          <Calendar size={14} className="mr-2" />
                          {article.dateFormatted}
                        </span>
                        <span className="flex items-center">
                          <Clock size={14} className="mr-2" />
                          {article.readTime}
                        </span>
                      </div>

                      <h3 className="text-xl font-bold mb-3 text-off-white group-hover:text-cyber-green transition-colors">
                        {article.title}
                      </h3>

                      <p className="text-gray-300 mb-4 line-clamp-3">
                        {article.excerpt}
                      </p>

                      <div className="flex flex-wrap gap-2 mb-4">
                        {article.tags.slice(0, 3).map((tag) => (
                          <span
                            key={tag}
                            className="flex items-center px-2 py-1 bg-gray-800 text-gray-300 text-xs rounded-full"
                          >
                            <Tag size={10} className="mr-1" />
                            {tag}
                          </span>
                        ))}
                      </div>

                      <span className="flex items-center text-cyber-green group-hover:text-green-300 transition-colors font-medium">
                        Lire l'article
                        <ArrowRight size={16} className="ml-2" />
                      </span>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          )}

          {/* Search and Category Filters */}
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between mb-8">
            <div className="flex items-center gap-2 bg-gray-800 rounded-lg px-3 py-2 border border-gray-700 w-full md:max-w-md">
              <Search className="text-gray-400" size={18} />
              <input
                value={query}
                onChange={(e) => onSearch(e.target.value)}
                placeholder="Rechercher des articles..."
                className="bg-transparent outline-none text-off-white placeholder-gray-400 flex-1"
              />
            </div>

            <div className="flex flex-wrap gap-2">
              {categories.map((c) => (
                <button
                  key={c.id}
                  onClick={() => onCategory(c.id)}
                  className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                    activeCategory === c.id ? 'bg-cyber-green text-deep-night' : 'bg-gray-900/40 text-gray-300 hover:bg-gray-900/60 border border-gray-800'
                  }`}
                >
                  {c.label}
                </button>
              ))}
            </div>
          </div>

          {/* Articles Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {items.map((article, index) => (
              <Link
                to={`/blog/${article.slug}`}
                key={article.slug}
                className="group overflow-hidden rounded-xl bg-gray-900/40 hover:bg-gray-900/60 transition-all duration-300 transform hover:scale-105 border border-gray-800 hover:border-gray-700"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-deep-night/60 to-transparent" />
                </div>

                <div className="p-5">
                  <div className="flex items-center justify-between mb-3 text-xs text-gray-400">
                    <span className="flex items-center">
                      <Calendar size={12} className="mr-1" />
                      {article.dateFormatted}
                    </span>
                    <span className="flex items-center">
                      <Clock size={12} className="mr-1" />
                      {article.readTime}
                    </span>
                  </div>

                  <div className="mb-2">
                    <span className="text-xs px-2 py-1 rounded-full bg-cyber-green text-deep-night font-semibold">{article.categoryName}</span>
                  </div>

                  <h3 className="text-lg font-bold mb-2 text-off-white group-hover:text-cyber-green transition-colors line-clamp-2">
                    {article.title}
                  </h3>

                  <p className="text-gray-300 text-sm mb-3 line-clamp-3">
                    {article.excerpt}
                  </p>

                  <div className="flex flex-wrap gap-1 mb-3">
                    {article.tags.slice(0, 2).map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-1 bg-gray-800 text-gray-300 text-xs rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <span className="flex items-center text-cyber-green group-hover:text-green-300 transition-colors text-sm font-medium">
                    Lire plus
                    <ArrowRight size={14} className="ml-1" />
                  </span>
                </div>
              </Link>
            ))}
          </div>

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="flex items-center justify-center gap-2 mt-2 mb-16">
              {Array.from({ length: totalPages }, (_, i) => i + 1).map((n) => (
                <button
                  key={n}
                  onClick={() => setPage(n)}
                  className={`px-3 py-2 rounded-md text-sm font-medium ${
                    n === currentPage ? 'bg-cyber-green text-deep-night' : 'bg-gray-900/40 text-gray-300 hover:bg-gray-900/60 border border-gray-800'
                  }`}
                >
                  {n}
                </button>
              ))}
            </div>
          )}

          {/* Newsletter Section */}
          <div className="text-center bg-gray-900/40 rounded-2xl p-12 border border-gray-800">
            <h3 className="text-2xl font-bold text-off-white mb-4">
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
                className="flex-1 px-4 py-3 bg-gray-900 border border-gray-800 rounded-lg text-off-white placeholder-gray-400 focus:border-cyber-green focus:outline-none"
              />
              <button className="px-6 py-3 bg-impact-red hover:brightness-110 rounded-lg text-off-white font-semibold transition-all duration-300 transform hover:scale-105">
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
              className="inline-flex items-center px-8 py-4 bg-impact-red hover:brightness-110 rounded-full text-off-white font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-xl"
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