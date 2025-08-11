import React, { useMemo } from 'react';
import { useParams, Link } from 'react-router-dom';
import data from '../data/projects.json';
import { ArrowLeft, ExternalLink, Github } from 'lucide-react';

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
            <div className="rounded-xl overflow-hidden border border-gray-800 bg-gray-900/40">
              <img
                src={project.images?.[0] ? `/projects/${project.images[0]}` : placeholder}
                alt={project.title}
                loading="lazy"
                onError={(e) => { (e.currentTarget as HTMLImageElement).src = placeholder; }}
                className={project.confidential ? 'w-full h-auto object-cover blur' : 'w-full h-auto object-cover'}
              />
            </div>
            {project.confidential && (
              <div className="mt-3 text-sm text-gray-300">Projet confidentiel — Détails disponibles sur demande.</div>
            )}

            {Array.isArray(project.images) && project.images.length > 1 && (
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mt-4">
                {project.images.slice(1).map((img: string) => (
                  <img key={img} src={`/projects/${img}`} alt="mockup" loading="lazy" onError={(e) => { (e.currentTarget as HTMLImageElement).src = placeholder; }} className="rounded-lg border border-gray-800 object-cover h-32 w-full" />
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
    </div>
  );
};

export default ProjectDetail;