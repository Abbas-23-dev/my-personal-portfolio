import { Github, ExternalLink } from 'lucide-react';
const Projects = () => {
  const projects = [
    {
      title: "Buy-and-Sell Platform",
      description: "A comprehensive e-commerce platform built with React.js and modern web technologies. Features user authentication, product management, and payment integration.",
      tech: ["React.js", "Tailwind CSS", "Supabase", "Node.js"],
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop",
      github: "#",
      demo: "#"
    },
    {
      title: "Portfolio Website",
      description: "A responsive personal portfolio showcasing my skills and projects. Built with React.js, Tailwind CSS, and modern animation techniques.",
      tech: ["React.js", "Tailwind CSS", "Framer Motion"],
      image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=600&h=400&fit=crop",
      github: "#",
      demo: "#"
    },
    {
      title: "Task Management App",
      description: "A productivity application for managing tasks and projects. Features drag-and-drop functionality, real-time updates, and collaborative features.",
      tech: ["React.js", "TypeScript", "Supabase"],
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=600&h=400&fit=crop",
      github: "#",
      demo: "#"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">
          <span className="bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">
            Featured Projects
          </span>
        </h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <div key={index} className="bg-gray-900 rounded-lg overflow-hidden border border-gray-800 hover:border-orange-500 transition-all duration-300 group">
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-3">{project.title}</h3>
                <p className="text-gray-300 mb-4">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, i) => (
                    <span key={i} className="px-3 py-1 bg-orange-500/20 text-orange-500 rounded-full text-sm">
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex space-x-4">
                  <a
                    href={project.github}
                    className="flex items-center space-x-2 text-gray-300 hover:text-orange-500 transition-colors duration-300"
                  >
                    <Github className="w-4 h-4" />
                    <span>Code</span>
                  </a>
                  <a
                    href={project.demo}
                    className="flex items-center space-x-2 text-gray-300 hover:text-orange-500 transition-colors duration-300"
                  >
                    <ExternalLink className="w-4 h-4" />
                    <span>Demo</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;