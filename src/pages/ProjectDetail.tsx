import React, { useEffect, useMemo, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import data from '../data/projects.json';
import { ArrowLeft, ExternalLink, Github, X, ChevronLeft, ChevronRight } from 'lucide-react';

function slugify(text: string) {
  return text
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)+/g, '');
}

const placeholder = 'https://via.placeholder.com/1000x700/0A0F1C/FFFFFF?text=Projet';

const ProjectDetail: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const project = useMemo(() => {
    return (data as any[]).map((p) => ({ ...p, slug: slugify(p.title) })).find((p) => p.slug === slug);
  }, [slug]);

  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

  const images: string[] = useMemo(() => Array.isArray(project?.images) ? project!.images : [], [project]);

  useEffect(() => {
    if (!lightboxOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setLightboxOpen(false);
      if (e.key === 'ArrowRight') setActiveIndex((i) => (i + 1) % images.length);
      if (e.key === 'ArrowLeft') setActiveIndex((i) => (i - 1 + images.length) % images.length);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [lightboxOpen, images.length]);

  if (!project) {
    return (
      <div className="min-h-screen bg-deep-night text-off-white flex items-center justify-center p-6">
        <div className="text-center">
          <h1 className="text-3xl font-bold mb-2">Projet introuvable</h1>
          <p className="text-gray-400 mb-6">Le projet demandé n'existe pas ou a été déplacé.</p>
          <Link to="/" className="px-6 py-3 rounded-lg bg-cyber-green text-deep-night font-semibold">Retour à l’accueil</Link>
        </div>
      </div>
    );
  }

  const canPreview = !project.confidential && images.length > 0;

  const openLightbox = (idx: number) => {
    if (!canPreview) return;
    setActiveIndex(idx);
    setLightboxOpen(true);
  };

  const next = () => setActiveIndex((i) => (i + 1) % images.length);
  const prev = () => setActiveIndex((i) => (i - 1 + images.length) % images.length);

  return (
    <div className="min-h-screen bg-deep-night text-off-white">
      <div className="max-w-5xl mx-auto px-4 pt-24 pb-12">
        <Link to="/" className="inline-flex items-center text-cyber-green hover:underline mb-6"><ArrowLeft size={16} className="mr-2" /> Retour</Link>

        <div className="mb-2">
          <span className="text-xs px-2 py-1 rounded-full bg-cyber-green text-deep-night font-semibold">{project.category}</span>
        </div>
        <h1 className="text-4xl md:text-5xl font-poppins font-bold leading-tight mb-4">{project.title}</h1>

        <div className="grid md:grid-cols-5 gap-6 items-start">
          <div className="md:col-span-3">
            {/* Image principale */}
            <button
              type="button"
              className="w-full rounded-xl overflow-hidden border border-gray-800 bg-gray-900/40 group"
              onClick={() => openLightbox(0)}
              disabled={!canPreview}
            >
              <img
                src={images[0] ? `/projects/${images[0]}` : placeholder}
                alt={project.title}
                loading="lazy"
                onError={(e) => { (e.currentTarget as HTMLImageElement).src = placeholder; }}
                className={`${project.confidential ? 'blur' : 'group-hover:scale-[1.01]'} w-full h-auto object-cover transition-transform duration-300`}
              />
            </button>
            {project.confidential && (
              <div className="mt-3 text-sm text-gray-300">Projet confidentiel — Détails disponibles sur demande.</div>
            )}

            {/* Grille d’images */}
            {images.length > 0 && (
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mt-4">
                {images.map((img, idx) => (
                  <button
                    type="button"
                    key={img + idx}
                    onClick={() => openLightbox(idx)}
                    disabled={!canPreview}
                    className="rounded-lg overflow-hidden border border-gray-800 bg-gray-900/40 group"
                  >
                    <img
                      src={`/projects/${img}`}
                      alt={`mockup ${idx + 1}`}
                      loading="lazy"
                      onError={(e) => { (e.currentTarget as HTMLImageElement).src = placeholder; }}
                      className={`${project.confidential ? 'blur' : 'group-hover:scale-105'} object-cover h-32 w-full transition-transform duration-300`}
                    />
                  </button>
                ))}
              </div>
            )}
          </div>

          <aside className="md:col-span-2">
            <div className="space-y-6">
              <section>
                <h2 className="text-xl font-bold mb-2">Contexte</h2>
                <p className="text-gray-300">{project.context}</p>
              </section>

              <section>
                <h2 className="text-xl font-bold mb-2">Rôle</h2>
                <div className="flex flex-wrap gap-2">
                  {project.role.map((r: string) => (
                    <span key={r} className="px-2 py-1 rounded-full bg-gray-900/40 border border-gray-800 text-sm">{r}</span>
                  ))}
                </div>
              </section>

              <section>
                <h2 className="text-xl font-bold mb-2">Stack technique</h2>
                <div className="flex flex-wrap gap-2">
                  {project.stack.map((s: string) => (
                    <span key={s} className="px-2 py-1 rounded-full bg-cyber-green text-deep-night text-sm font-semibold">{s}</span>
                  ))}
                </div>
              </section>

              <section className="pt-2">
                <div className="flex items-center gap-3">
                  {!project.confidential && (
                    <>
                      {project.demo && (
                        <a href={project.demo} target="_blank" className="inline-flex items-center gap-2 px-4 py-2 rounded-md bg-impact-red text-off-white font-semibold hover:brightness-110 transition"><ExternalLink size={16} /> Démo</a>
                      )}
                      {project.github && (
                        <a href={project.github} target="_blank" className="inline-flex items-center gap-2 px-4 py-2 rounded-md bg-gray-800 border border-gray-700 text-off-white font-semibold hover:bg-gray-700 transition"><Github size={16} /> GitHub</a>
                      )}
                    </>
                  )}
                  {project.confidential && (
                    <a href="#contact" className="inline-flex items-center gap-2 px-4 py-2 rounded-md bg-impact-red text-off-white font-semibold hover:brightness-110 transition">Contacter pour démo</a>
                  )}
                </div>
              </section>
            </div>
          </aside>
        </div>
      </div>

      {/* Lightbox plein écran */}
      {lightboxOpen && (
        <div className="fixed inset-0 z-[100] bg-black/80 backdrop-blur-sm flex items-center justify-center p-4" onClick={() => setLightboxOpen(false)}>
          <button aria-label="Fermer" onClick={(e) => { e.stopPropagation(); setLightboxOpen(false); }} className="absolute top-4 right-4 p-2 rounded-full bg-gray-900/80 text-off-white hover:bg-gray-800">
            <X size={20} />
          </button>

          <button aria-label="Précédent" onClick={(e) => { e.stopPropagation(); prev(); }} className="absolute left-4 md:left-8 p-2 rounded-full bg-gray-900/70 text-off-white hover:bg-gray-800">
            <ChevronLeft size={24} />
          </button>

          <div className="max-w-5xl max-h-[85vh] w-full flex items-center justify-center" onClick={(e) => e.stopPropagation()}>
            <img
              src={images[activeIndex] ? `/projects/${images[activeIndex]}` : placeholder}
              alt="aperçu"
              className="w-auto h-auto max-w-full max-h-[85vh] object-contain shadow-2xl rounded-lg"
            />
          </div>

          <button aria-label="Suivant" onClick={(e) => { e.stopPropagation(); next(); }} className="absolute right-4 md:right-8 p-2 rounded-full bg-gray-900/70 text-off-white hover:bg-gray-800">
            <ChevronRight size={24} />
          </button>
        </div>
      )}
    </div>
  );
};

export default ProjectDetail;