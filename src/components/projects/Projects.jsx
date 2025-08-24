import { Github, ExternalLink } from 'lucide-react';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

// Professional smooth animations for projects
const smoothAnimations = {
  // Main container
  container: {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12, // Smooth stagger between project cards
        delayChildren: 0.2,
        duration: 0.6
      }
    }
  },

  // Title animation
  titleAnimation: {
    hidden: { 
      opacity: 0, 
      y: 25,
      scale: 0.96,
      transition: { duration: 0.4, ease: "easeInOut" }
    },
    visible: { 
      opacity: 1, 
      y: 0,
      scale: 1,
      transition: { 
        duration: 0.8, 
        ease: [0.25, 0.1, 0.25, 1]
      }
    }
  },

  // Project card entrance
  projectCard: {
    hidden: { 
      opacity: 0, 
      y: 30, // Gentle upward movement
      scale: 0.95,
      rotateX: 15, // Subtle 3D perspective
      transition: { duration: 0.4, ease: "easeInOut" }
    },
    visible: { 
      opacity: 1, 
      y: 0,
      scale: 1,
      rotateX: 0,
      transition: { 
        duration: 0.8,
        ease: [0.25, 0.1, 0.25, 1]
      }
    }
  },

  // Image animation
  imageAnimation: {
    hidden: { 
      scale: 1.1,
      opacity: 0,
      transition: { duration: 0.4, ease: "easeInOut" }
    },
    visible: { 
      scale: 1,
      opacity: 1,
      transition: { 
        duration: 0.8,
        ease: [0.25, 0.1, 0.25, 1],
        delay: 0.1
      }
    }
  },

  // Content stagger animation
  contentContainer: {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08, // Smooth content stagger
        delayChildren: 0.3
      }
    }
  },

  // Individual content items
  contentItem: {
    hidden: { 
      opacity: 0, 
      y: 15,
      transition: { duration: 0.3, ease: "easeInOut" }
    },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.6,
        ease: [0.25, 0.1, 0.25, 1]
      }
    }
  },

  // Tech tags stagger
  techContainer: {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.06, // Quick but smooth tech tag appearance
        delayChildren: 0.4
      }
    }
  },

  // Individual tech tag
  techTag: {
    hidden: { 
      opacity: 0, 
      scale: 0.8,
      y: 10,
      transition: { duration: 0.3, ease: "easeInOut" }
    },
    visible: { 
      opacity: 1, 
      scale: 1,
      y: 0,
      transition: { 
        duration: 0.5,
        ease: [0.25, 0.1, 0.25, 1]
      }
    }
  },

  // Links stagger
  linksContainer: {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.5
      }
    }
  },

  // Individual link
  link: {
    hidden: { 
      opacity: 0, 
      x: -10,
      transition: { duration: 0.3, ease: "easeInOut" }
    },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { 
        duration: 0.6,
        ease: [0.25, 0.1, 0.25, 1]
      }
    }
  }
};

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { 
    once: false, // Allow re-triggering every scroll
    threshold: 0.1, 
    margin: "-80px 0px -80px 0px" // Buffer for smooth triggering
  });

  const projects = [
    {
      title: "Harchizz",
      description: "A comprehensive e-commerce platform built with React.js and modern web technologies. Features user authentication, product management, and payment integration.",
      tech: ["React.js", "Tailwind CSS", "Supabase"],
      image: "./images/harchizz.png",
      github: "#",
      demo: "https://harchizz.com"
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
      title: "Easy Home Solution",
      description: "A productivity application for managing tasks and projects. Features drag-and-drop functionality, real-time updates, and collaborative features.",
      tech: ["ReactJS", "TailwindCSS", "Supabase"],
      image: "./images/ehsolution.png",
      github: "#",
      demo: "https://eh-solution.vercel.app"
    }
  ];

  return (
    <section 
      id="projects" 
      ref={ref}
      className="py-20 bg-black relative overflow-hidden"
    >
      {/* Subtle background elements */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 2, ease: "easeInOut" }}
        className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black"
      />
      
      <motion.div
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 0.05 } : { opacity: 0 }}
        transition={{ duration: 3, delay: 0.5 }}
        className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23f97316\' fill-opacity=\'0.1\'%3E%3Cpath d=\'M30 10l8 16h16l-13 10 5 16-16-12-16 12 5-16L6 26h16z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')]"
      />

      <div className="container mx-auto px-4 relative z-10">
        {/* Smooth Title Animation */}
        <motion.h2 
          className="text-4xl font-bold text-center mb-12"
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={smoothAnimations.titleAnimation}
        >
          <motion.span
            initial={{ backgroundPosition: '0% 50%' }}
            animate={isInView ? { 
              backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'] 
            } : { backgroundPosition: '0% 50%' }}
            transition={{ 
              duration: 6, 
              repeat: Infinity, 
              ease: "easeInOut"
            }}
            className="bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent"
            style={{ backgroundSize: '200% 200%' }}
          >
            Featured Projects
          </motion.span>
        </motion.h2>
        
        <motion.div 
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto"
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={smoothAnimations.container}
        >
          {projects.map((project, index) => (
            <motion.div 
              key={index} 
              variants={smoothAnimations.projectCard}
              whileHover={{ 
                scale: 1.02,
                y: -8,
                rotateY: 2,
                boxShadow: "0 25px 50px rgba(249, 115, 22, 0.2)",
                transition: { duration: 0.3, ease: "easeOut" }
              }}
              className="bg-gray-900 rounded-lg overflow-hidden border border-gray-800 hover:border-orange-500/50 transition-all duration-500 group"
            >
              {/* Project Image */}
              <div className="relative overflow-hidden">
                <motion.img
                  variants={smoothAnimations.imageAnimation}
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <motion.div 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"
                />
                
                {/* Overlay on hover */}
                <motion.div 
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                  className="absolute inset-0 bg-orange-500/10 flex items-center justify-center"
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    whileHover={{ scale: 1 }}
                    transition={{ duration: 0.2, delay: 0.1 }}
                    className="bg-white/20 backdrop-blur-sm rounded-full p-3"
                  >
                    <ExternalLink className="w-6 h-6 text-white" />
                  </motion.div>
                </motion.div>
              </div>
              
              {/* Project Content */}
              <motion.div 
                variants={smoothAnimations.contentContainer}
                className="p-6 space-y-4"
              >
                {/* Title */}
                <motion.h3 
                  variants={smoothAnimations.contentItem}
                  className="text-xl font-bold text-white group-hover:text-orange-100 transition-colors duration-300"
                >
                  {project.title}
                </motion.h3>
                
                {/* Description */}
                <motion.p 
                  variants={smoothAnimations.contentItem}
                  className="text-gray-300 group-hover:text-gray-200 transition-colors duration-300 leading-relaxed"
                >
                  {project.description}
                </motion.p>
                
                {/* Tech Stack */}
                <motion.div 
                  variants={smoothAnimations.techContainer}
                  className="flex flex-wrap gap-2"
                >
                  {project.tech.map((tech, i) => (
                    <motion.span 
                      key={i}
                      variants={smoothAnimations.techTag}
                      whileHover={{ 
                        scale: 1.05,
                        backgroundColor: "#f97316",
                        color: "#000",
                        transition: { duration: 0.2 }
                      }}
                      className="px-3 py-1 bg-orange-500/20 text-orange-500 rounded-full text-sm cursor-pointer transition-all duration-300 hover:shadow-lg"
                    >
                      {tech}
                    </motion.span>
                  ))}
                </motion.div>
                
                {/* Project Links */}
                <motion.div 
                  variants={smoothAnimations.linksContainer}
                  className="flex space-x-6 pt-2"
                >
                  <motion.a
                    variants={smoothAnimations.link}
                    href={project.github}
                    whileHover={{ 
                      scale: 1.05,
                      color: '#f97316',
                      transition: { duration: 0.2 }
                    }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center space-x-2 text-gray-300 hover:text-orange-500 transition-colors duration-300 group/link"
                  >
                    <motion.div
                      whileHover={{ rotate: 15 }}
                      transition={{ duration: 0.2 }}
                    >
                      <Github className="w-4 h-4 group-hover/link:drop-shadow-lg" />
                    </motion.div>
                    <span className="font-medium">Code</span>
                  </motion.a>
                  
                  <motion.a
                    variants={smoothAnimations.link}
                    href={project.demo}
                    whileHover={{ 
                      scale: 1.05,
                      color: '#f97316',
                      transition: { duration: 0.2 }
                    }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center space-x-2 text-gray-300 hover:text-orange-500 transition-colors duration-300 group/link"
                  >
                    <motion.div
                      whileHover={{ rotate: 15 }}
                      transition={{ duration: 0.2 }}
                    >
                      <ExternalLink className="w-4 h-4 group-hover/link:drop-shadow-lg" />
                    </motion.div>
                    <span className="font-medium">Demo</span>
                  </motion.a>
                </motion.div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;