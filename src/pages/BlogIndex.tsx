import React, { useMemo, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link, useSearchParams } from 'react-router-dom';
import { Calendar, Clock, Tag, ArrowRight, Search } from 'lucide-react';
import posts from '../shared/blogPosts.tsx';

const categories = [
  { id: 'all', label: 'Tous' },
  { id: 'developpement-web', label: 'Développement' },
  { id: 'design-ui-ux', label: 'Design' },
  { id: 'cybersecurite', label: 'Cybersécurité' },
];

function slugify(text: string) {
  return text
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)+/g, '');
}

const PER_PAGE = 6;

const BlogIndex: React.FC = () => {
  const [params, setParams] = useSearchParams();
  const [query, setQuery] = useState(params.get('q') ?? '');
  const [activeCategory, setActiveCategory] = useState(params.get('cat') ?? 'all');
  const pageParam = parseInt(params.get('page') || '1', 10) || 1;

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return posts.filter((p) => {
      const matchesCategory = activeCategory === 'all' || p.categoryId === activeCategory;
      const matchesQuery = !q ||
        p.title.toLowerCase().includes(q) ||
        p.excerpt.toLowerCase().includes(q) ||
        p.content.toLowerCase().includes(q);
      return matchesCategory && matchesQuery;
    });
  }, [query, activeCategory]);

  const totalPages = Math.max(1, Math.ceil(filtered.length / PER_PAGE));
  const page = Math.min(Math.max(1, pageParam), totalPages);
  const start = (page - 1) * PER_PAGE;
  const items = filtered.slice(start, start + PER_PAGE);

  const onCategory = (id: string) => {
    setActiveCategory(id);
    params.set('cat', id);
    params.set('page', '1');
    setParams(params, { replace: true });
  };

  const onSearch = (value: string) => {
    setQuery(value);
    if (value) params.set('q', value); else params.delete('q');
    params.set('page', '1');
    setParams(params, { replace: true });
  };

  const gotoPage = (p: number) => {
    params.set('page', String(p));
    setParams(params, { replace: true });
  };

  return (
    <div className="min-h-screen bg-deep-night text-off-white">
      <Helmet>
        <title>Blog – Développement, Design & Cybersécurité</title>
        <meta name="description" content="Partage de bonnes pratiques, retours d’expérience et conseils techniques." />
        <meta property="og:title" content="Blog – Développement, Design & Cybersécurité" />
        <meta property="og:description" content="Partage de bonnes pratiques, retours d’expérience et conseils techniques." />
        <meta property="og:type" content="website" />
      </Helmet>

      <div className="max-w-7xl mx-auto px-4 py-24">
        <header className="mb-10">
          <h1 className="text-4xl md:text-5xl font-poppins font-bold mb-3">Blog – <span className="text-cyber-green">Développement, Design & Cybersécurité</span></h1>
          <p className="text-lg text-gray-300">Partage de bonnes pratiques, retours d’expérience et conseils techniques</p>
        </header>

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
                  activeCategory === c.id ? 'bg-cyber-green text-deep-night' : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                }`}
              >
                {c.label}
              </button>
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {items.map((p) => (
            <Link to={`/blog/${p.slug}`} key={p.slug} className="group rounded-xl overflow-hidden border border-gray-800 hover:border-gray-600 bg-gray-900/40 hover:bg-gray-900/60 transition-all duration-300">
              <div className="h-44 overflow-hidden">
                <img src={p.image} alt={p.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="p-5">
                <div className="flex items-center justify-between text-xs text-gray-400 mb-2">
                  <span className="inline-flex items-center gap-1"><Calendar size={12} /> {p.dateFormatted}</span>
                  <span className="inline-flex items-center gap-1"><Clock size={12} /> {p.readTime}</span>
                </div>
                <div className="mb-2">
                  <span className="text-xs px-2 py-1 rounded-full bg-cyber-green text-deep-night font-semibold">{p.categoryName}</span>
                </div>
                <h2 className="text-lg font-bold group-hover:text-cyber-green transition-colors line-clamp-2">{p.title}</h2>
                <p className="text-sm text-gray-300 line-clamp-3 mt-2">{p.excerpt}</p>
                <div className="flex flex-wrap gap-2 mt-3">
                  {p.tags.slice(0, 3).map((t) => (
                    <span key={t} className="inline-flex items-center gap-1 text-xs bg-gray-800 px-2 py-1 rounded-full text-gray-300"><Tag size={12} /> {t}</span>
                  ))}
                </div>
                <div className="mt-4 inline-flex items-center text-cyber-green font-medium">
                  Lire plus <ArrowRight size={16} className="ml-2" />
                </div>
              </div>
            </Link>
          ))}
        </div>

        {totalPages > 1 && (
          <div className="flex items-center justify-center gap-2 mt-12">
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((n) => (
              <button
                key={n}
                onClick={() => gotoPage(n)}
                className={`px-3 py-2 rounded-md text-sm font-medium ${
                  n === page ? 'bg-cyber-green text-deep-night' : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                }`}
              >
                {n}
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default BlogIndex;