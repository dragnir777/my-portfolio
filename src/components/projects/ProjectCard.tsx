import React from 'react';
import { Link } from 'react-router-dom';

export type Project = {
  title: string;
  category: 'TechPole' | 'ESSITECH' | 'Freelance & Perso';
  context: string;
  role: string[];
  stack: string[];
  status: string;
  images: string[];
  coverImage: string | null;
  summary: string;
  confidential: boolean;
  slug: string;
  github?: string;
  demo?: string;
};

function cn(...classes: Array<string | false | undefined>) {
  return classes.filter(Boolean).join(' ');
}

const placeholder = 'https://via.placeholder.com/800x600/0A0F1C/FFFFFF?text=Projet';

const getImagePath = (project: Project, imageName: string | null) => {
  if (!imageName) return placeholder;
  
  // Déterminer le dossier basé sur le titre du projet
  let folder = '';
  if (project.title.includes('GSPD')) folder = 'gspd';
  else if (project.title.includes('APEC')) folder = 'apec';
  else if (project.title.includes('Postemoney')) folder = 'postemoney';
  else if (project.title.includes('RH')) folder = 'rh';
  else if (project.title.includes('PlantCare')) folder = 'plantcare';
  else if (project.title.includes('Crypgo')) folder = 'crypgo';
  
  if (folder) {
    // Utiliser l'import dynamique pour les assets
    try {
      return new URL(`../../assets/${folder}/${imageName}`, import.meta.url).href;
    } catch {
      return placeholder;
    }
  }
  
  return placeholder;
};

const ProjectCard: React.FC<{ project: Project }> = ({ project }) => {
  const imageSrc = getImagePath(project, project.coverImage);

  return (
    <div className="group relative rounded-xl overflow-hidden border border-gray-800 bg-gray-900/40 hover:bg-gray-900/60 hover:border-gray-700 transition-all">
      <div className="relative h-48 overflow-hidden">
        <img
          src={imageSrc}
          alt={project.title}
          loading="lazy"
          onError={(e) => { 
            console.log(`Erreur de chargement pour ${project.title}:`, imageSrc);
            (e.currentTarget as HTMLImageElement).src = placeholder; 
          }}
          className={cn(
            'w-full h-full object-cover transition-transform duration-500',
            'group-hover:scale-105',
            project.confidential && 'blur-sm select-none'
          )}
        />
        {project.confidential && (
          <div className="absolute inset-0 bg-black/50 flex items-center justify-center text-center p-4">
            <div>
              <div className="text-sm font-semibold text-off-white">Confidentiel</div>
              <div className="text-xs text-gray-300">Détails disponibles sur demande</div>
            </div>
          </div>
        )}
      </div>

      <div className="p-5">
        <div className="mb-2">
          <span className="text-xs px-2 py-1 rounded-full bg-cyber-green text-deep-night font-semibold">{project.category}</span>
        </div>
        <h3 className="text-lg font-bold text-off-white mb-2 group-hover:text-cyber-green transition-colors">{project.title}</h3>
        <p className="text-sm text-gray-300 line-clamp-3">{project.summary}</p>

        <div className="mt-4">
          {project.confidential ? (
            <a href="#contact" className="inline-flex items-center px-4 py-2 rounded-md bg-impact-red text-off-white font-semibold hover:brightness-110 transition">Contacter</a>
          ) : (
            <Link to={`/projects/${project.slug}`} className="inline-flex items-center px-4 py-2 rounded-md bg-impact-red text-off-white font-semibold hover:brightness-110 transition">Voir plus</Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;