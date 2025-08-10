import React from 'react';
import Projects from './components/Projects';

function App() {
  console.log('App component rendering - PORTFOLIO COMPLET');

  return (
    <div className="min-h-screen bg-gray-900">
      {/* Header */}
      <header className="bg-gray-800 shadow-lg">
        <div className="container mx-auto px-4 py-6">
          <nav className="flex items-center justify-between">
            <h1 className="text-3xl font-bold text-green-400">Mon Portfolio</h1>
            <div className="hidden md:flex space-x-8">
              <a href="#about" className="text-gray-300 hover:text-green-400 transition-colors">À propos</a>
              <a href="#skills" className="text-gray-300 hover:text-green-400 transition-colors">Compétences</a>
              <a href="#projects" className="text-gray-300 hover:text-green-400 transition-colors">Projets</a>
              <a href="#contact" className="text-gray-300 hover:text-green-400 transition-colors">Contact</a>
            </div>
          </nav>
        </div>
      </header>

      {/* Section Hero */}
      <section className="py-20 bg-gradient-to-br from-gray-900 to-gray-800">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-5xl font-bold text-white mb-6">
            Développeur Full Stack
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Passionné par la création d'applications web modernes et performantes. 
            Spécialisé en React, Node.js et technologies cloud.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-green-500 hover:bg-green-600 text-white font-semibold py-3 px-8 rounded-lg transition-colors duration-300">
              Voir mes projets
            </button>
            <button className="border border-green-500 text-green-400 hover:bg-green-500 hover:text-white font-semibold py-3 px-8 rounded-lg transition-colors duration-300">
              Télécharger CV
            </button>
          </div>
        </div>
      </section>

      {/* Section À propos */}
      <section id="about" className="py-16 bg-gray-800">
        <div className="container mx-auto px-4">
          <h3 className="text-3xl font-bold text-white text-center mb-12">À propos de moi</h3>
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-gray-300 text-lg leading-relaxed mb-6">
              Développeur passionné avec 3+ années d'expérience dans la création d'applications web et mobiles. 
              J'aime résoudre des problèmes complexes et créer des expériences utilisateur exceptionnelles.
            </p>
            <p className="text-gray-300 text-lg leading-relaxed">
              Mon expertise couvre le développement frontend avec React, le développement backend avec Node.js, 
              et la gestion de bases de données. Je suis constamment en train d'apprendre de nouvelles technologies.
            </p>
          </div>
        </div>
      </section>

      {/* Section Compétences */}
      <section id="skills" className="py-16 bg-gray-900">
        <div className="container mx-auto px-4">
          <h3 className="text-3xl font-bold text-white text-center mb-12">Mes Compétences</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="bg-gray-800 p-6 rounded-lg text-center">
              <h4 className="text-xl font-semibold text-green-400 mb-4">Frontend</h4>
              <div className="space-y-2">
                <div className="text-gray-300">React / React Native</div>
                <div className="text-gray-300">TypeScript</div>
                <div className="text-gray-300">Tailwind CSS</div>
                <div className="text-gray-300">HTML5 / CSS3</div>
              </div>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg text-center">
              <h4 className="text-xl font-semibold text-green-400 mb-4">Backend</h4>
              <div className="space-y-2">
                <div className="text-gray-300">Node.js / Express</div>
                <div className="text-gray-300">Python / FastAPI</div>
                <div className="text-gray-300">MongoDB / SQL</div>
                <div className="text-gray-300">REST APIs</div>
              </div>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg text-center">
              <h4 className="text-xl font-semibold text-green-400 mb-4">Outils</h4>
              <div className="space-y-2">
                <div className="text-gray-300">Git / GitHub</div>
                <div className="text-gray-300">Docker</div>
                <div className="text-gray-300">AWS / Vercel</div>
                <div className="text-gray-300">Figma</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section Projets */}
      <Projects />

      {/* Section Contact */}
      <section id="contact" className="py-16 bg-gray-800">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-3xl font-bold text-white mb-12">Contactez-moi</h3>
          <div className="max-w-2xl mx-auto">
            <p className="text-gray-300 text-lg mb-8">
              Intéressé par une collaboration ? N'hésitez pas à me contacter !
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-green-500 hover:bg-green-600 text-white font-semibold py-3 px-8 rounded-lg transition-colors duration-300">
                Envoyer un message
              </button>
              <button className="border border-green-500 text-green-400 hover:bg-green-500 hover:text-white font-semibold py-3 px-8 rounded-lg transition-colors duration-300">
                LinkedIn
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 py-8">
        <div className="container mx-auto px-4 text-center">
          <p className="text-gray-400">
            © 2024 Mon Portfolio. Développé avec ❤️ et React.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;