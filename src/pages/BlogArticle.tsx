import React, { useMemo } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import posts from '../shared/blogPosts.tsx';
import { ArrowLeft, ArrowRight, Calendar } from 'lucide-react';

const BlogArticle: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const index = useMemo(() => posts.findIndex((p) => p.slug === slug), [slug]);
  const post = index >= 0 ? posts[index] : undefined;
  const previous = index > 0 ? posts[index - 1] : undefined;
  const next = index >= 0 && index < posts.length - 1 ? posts[index + 1] : undefined;

  if (!post) {
    return (
      <div className="min-h-screen bg-deep-night text-off-white flex items-center justify-center p-8">
        <div className="text-center">
          <h1 className="text-3xl font-bold mb-2">Article introuvable</h1>
          <p className="text-gray-400 mb-6">Le contenu demandé n'existe pas ou a été déplacé.</p>
          <Link to="/blog" className="px-6 py-3 rounded-lg bg-cyber-green text-deep-night font-semibold">Retour au blog</Link>
        </div>
      </div>
    );
  }

  return (
    <article className="min-h-screen bg-deep-night text-off-white">
      <Helmet>
        <title>{post.seoTitle}</title>
        <meta name="description" content={post.seoDescription} />
        <meta property="og:title" content={post.seoTitle} />
        <meta property="og:description" content={post.seoDescription} />
        <meta property="og:image" content={post.image} />
        <meta property="og:type" content="article" />
      </Helmet>

      <header className="max-w-4xl mx-auto px-4 pt-24">
        <Link to="/blog" className="inline-flex items-center text-cyber-green hover:underline mb-6"><ArrowLeft className="mr-2" size={16} /> Retour au blog</Link>
        <span className="inline-block text-xs px-3 py-1 rounded-full bg-cyber-green text-deep-night font-semibold mb-3">{post.categoryName}</span>
        <h1 className="text-4xl md:text-5xl font-poppins font-bold leading-tight mb-3">{post.title}</h1>
        <div className="text-sm text-gray-400 inline-flex items-center gap-2 mb-8"><Calendar size={14} /> {post.dateFormatted} • {post.readTime}</div>
        <div className="h-72 md:h-96 w-full overflow-hidden rounded-xl border border-gray-800">
          <img src={post.image} alt={post.title} className="w-full h-full object-cover" />
        </div>
      </header>

      <div className="max-w-3xl mx-auto px-4 py-10 prose prose-invert prose-headings:font-poppins prose-a:text-cyber-green">
        {post.rendered}
      </div>

      <nav className="max-w-4xl mx-auto px-4 pb-16 grid md:grid-cols-2 gap-4">
        <div>
          {previous && (
            <Link to={`/blog/${previous.slug}`} className="block group rounded-xl border border-gray-800 hover:border-gray-600 p-4 bg-gray-900/40 hover:bg-gray-900/60 transition-colors">
              <div className="text-sm text-gray-400 mb-1">Article précédent</div>
              <div className="font-semibold group-hover:text-cyber-green inline-flex items-center"><ArrowLeft size={16} className="mr-2" /> {previous.title}</div>
            </Link>
          )}
        </div>
        <div className="md:text-right">
          {next && (
            <Link to={`/blog/${next.slug}`} className="block group rounded-xl border border-gray-800 hover:border-gray-600 p-4 bg-gray-900/40 hover:bg-gray-900/60 transition-colors">
              <div className="text-sm text-gray-400 mb-1">Article suivant</div>
              <div className="font-semibold group-hover:text-cyber-green inline-flex items-center justify-end">{next.title} <ArrowRight size={16} className="ml-2" /></div>
            </Link>
          )}
        </div>
      </nav>
    </article>
  );
};

export default BlogArticle;