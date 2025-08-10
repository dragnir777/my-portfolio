import React, { useState, useEffect, useRef } from 'react';
import { 
  Code2, 
  Database, 
  Globe, 
  Smartphone, 
  Server, 
  GitBranch,
  Layers,
  Zap
} from 'lucide-react';

const Skills = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [animatedBars, setAnimatedBars] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          setTimeout(() => setAnimatedBars(true), 500);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const skillCategories = [
    {
      title: "Backend Development",
      icon: <Server className="text-green-400" size={32} />,
      skills: [
        { name: "Node.js", level: 90, color: "from-green-400 to-green-600" },
        { name: "Express.js", level: 85, color: "from-gray-400 to-gray-600" },
        { name: "API REST", level: 88, color: "from-blue-400 to-blue-600" },
        { name: "MySQL", level: 80, color: "from-orange-400 to-orange-600" }
      ]
    },
    {
      title: "Frontend Development",
      icon: <Globe className="text-blue-400" size={32} />,
      skills: [
        { name: "React.js", level: 85, color: "from-cyan-400 to-cyan-600" },
        { name: "HTML5/CSS3", level: 92, color: "from-red-400 to-red-600" },
        { name: "JavaScript", level: 88, color: "from-yellow-400 to-yellow-600" },
        { name: "Tailwind CSS", level: 85, color: "from-teal-400 to-teal-600" }
      ]
    },
    {
      title: "Tools & Technologies",
      icon: <Zap className="text-purple-400" size={32} />,
      skills: [
        { name: "Git/GitHub", level: 85, color: "from-purple-400 to-purple-600" },
        { name: "Bootstrap", level: 80, color: "from-indigo-400 to-indigo-600" },
        { name: "Linux", level: 75, color: "from-gray-400 to-gray-600" },
        { name: "VS Code", level: 90, color: "from-blue-400 to-blue-600" }
      ]
    }
  ];

  const technologies = [
    { name: "Node.js", icon: <Code2 size={24} />, color: "text-green-400" },
    { name: "React", icon: <Layers size={24} />, color: "text-cyan-400" },
    { name: "MySQL", icon: <Database size={24} />, color: "text-orange-400" },
    { name: "Express", icon: <Server size={24} />, color: "text-gray-400" },
    { name: "JavaScript", icon: <Globe size={24} />, color: "text-yellow-400" },
    { name: "Git", icon: <GitBranch size={24} />, color: "text-purple-400" },
    { name: "HTML/CSS", icon: <Code2 size={24} />, color: "text-red-400" },
    { name: "Bootstrap", icon: <Smartphone size={24} />, color: "text-indigo-400" }
  ];

  return (
    <section id="skills" ref={sectionRef} className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Mes <span className="bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent">Compétences</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Stack technique et expertise développées à travers mes projets et expériences
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-green-400 to-blue-500 mx-auto rounded-full mt-4" />
          </div>

          {/* Technologies Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-6 mb-16">
            {technologies.map((tech, index) => (
              <div
                key={tech.name}
                className="flex flex-col items-center p-6 bg-gray-800/50 rounded-xl hover:bg-gray-800 transition-all duration-300 transform hover:scale-105 hover:shadow-xl border border-gray-700"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className={`${tech.color} mb-3`}>
                  {tech.icon}
                </div>
                <span className="text-sm font-medium text-center text-gray-300">{tech.name}</span>
              </div>
            ))}
          </div>

          {/* Skill Categories */}
          <div className="grid md:grid-cols-3 gap-8">
            {skillCategories.map((category, categoryIndex) => (
              <div
                key={category.title}
                className="bg-gray-800/50 rounded-2xl p-8 border border-gray-700 hover:border-gray-600 transition-all duration-300"
                style={{ animationDelay: `${categoryIndex * 0.2}s` }}
              >
                <div className="flex items-center mb-6">
                  {category.icon}
                  <h3 className="text-xl font-bold ml-3 text-white">{category.title}</h3>
                </div>

                <div className="space-y-6">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skill.name}>
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-gray-300 font-medium">{skill.name}</span>
                        <span className="text-gray-400 text-sm">{skill.level}%</span>
                      </div>
                      <div className="w-full bg-gray-700 rounded-full h-2 overflow-hidden">
                        <div
                          className={`h-full bg-gradient-to-r ${skill.color} transition-all duration-1000 ease-out rounded-full`}
                          style={{
                            width: animatedBars ? `${skill.level}%` : '0%',
                            transitionDelay: `${(categoryIndex * 0.2) + (skillIndex * 0.1)}s`
                          }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Additional Info */}
          <div className="text-center mt-16">
            <p className="text-gray-400 text-lg max-w-3xl mx-auto">
              Toujours en apprentissage et passionné par les nouvelles technologies. 
              Je m'adapte rapidement aux besoins des projets et reste à l'affût des dernières innovations.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;