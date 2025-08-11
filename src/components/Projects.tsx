import React, { useEffect, useMemo, useRef, useState } from 'react';
import ProjectCard, { Project } from './projects/ProjectCard';
import data from '../data/projects.json';

function slugify(text: string) {
  return text
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)+/g, '');
}

const ProjectsSection: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeFilter, setActiveFilter] = useState<'all' | 'TechPole' | 'ESSITECH' | 'Freelance & Perso'>('all');
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.2 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const projects: Project[] = useMemo(() => {
    return (data as any[]).map((p) => ({
      ...p,
      slug: slugify(p.title),
    }));
  }, []);

  const categories = [
    { id: 'all' as const, label: 'Tous' },
    { id: 'TechPole' as const, label: 'TechPole' },
    { id: 'ESSITECH' as const, label: 'ESSITECH' },
    { id: 'Freelance & Perso' as const, label: 'Freelance & Perso' },
  ];

  const filtered = useMemo(() => {
    if (activeFilter === 'all') return projects;
    return projects.filter((p) => p.category === activeFilter);
  }, [projects, activeFilter]);

  return (
    <section id="projects" ref={sectionRef} className="py-20 bg-deep-night text-off-white">
      <div className="container mx-auto px-4">
        <div className={`text-center mb-10 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Projets</h2>
          <p className="text-lg text-gray-300">Sélection de réalisations de Miguel Y. Axison BAYALA au Burkina Faso</p>
          <div className="w-24 h-1 bg-cyber-green mx-auto rounded-full mt-4" />
        </div>

        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {categories.map((c) => (
            <button
              key={c.id}
              onClick={() => setActiveFilter(c.id)}
              className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                activeFilter === c.id ? 'bg-cyber-green text-deep-night' : 'bg-gray-900/40 text-gray-300 hover:bg-gray-900/60 border border-gray-800'
              }`}
            >
              {c.label}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {filtered.map((p, idx) => (
            <div key={p.slug} className={`transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`} style={{ transitionDelay: `${idx * 50}ms` }}>
              <ProjectCard project={p} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;