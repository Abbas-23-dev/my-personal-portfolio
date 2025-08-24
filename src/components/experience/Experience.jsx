import { Briefcase, Calendar, Star } from 'lucide-react';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

// Professional smooth animations for timeline
const smoothAnimations = {
  // Main container
  container: {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15, // Gentle stagger between timeline items
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

  // Timeline item entrance
  timelineItem: {
    hidden: { 
      opacity: 0, 
      x: -30, // Subtle slide from left
      scale: 0.98,
      transition: { duration: 0.4, ease: "easeInOut" }
    },
    visible: { 
      opacity: 1, 
      x: 0,
      scale: 1,
      transition: { 
        duration: 0.8,
        ease: [0.25, 0.1, 0.25, 1]
      }
    }
  },

  // Icon circle animation
  iconCircle: {
    hidden: { 
      scale: 0,
      opacity: 0,
      rotate: -180,
      transition: { duration: 0.3, ease: "easeInOut" }
    },
    visible: { 
      scale: 1,
      opacity: 1,
      rotate: 0,
      transition: { 
        duration: 0.6,
        ease: "easeOut",
        type: "spring",
        stiffness: 200,
        damping: 20
      }
    }
  },

  // Card content animation
  cardContent: {
    hidden: { 
      opacity: 0, 
      y: 20,
      transition: { duration: 0.4, ease: "easeInOut" }
    },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.7,
        ease: [0.25, 0.1, 0.25, 1],
        delay: 0.1
      }
    }
  },

  // Achievement items stagger
  achievementContainer: {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08, // Very smooth stagger
        delayChildren: 0.3
      }
    }
  },

  // Individual achievement animation
  achievement: {
    hidden: { 
      opacity: 0, 
      x: -15,
      scale: 0.95,
      transition: { duration: 0.3, ease: "easeInOut" }
    },
    visible: { 
      opacity: 1, 
      x: 0,
      scale: 1,
      transition: { 
        duration: 0.6,
        ease: [0.25, 0.1, 0.25, 1]
      }
    }
  },

  // Timeline line animation
  timelineLine: {
    hidden: { 
      scaleY: 0,
      opacity: 0,
      transition: { duration: 0.3, ease: "easeInOut" }
    },
    visible: { 
      scaleY: 1,
      opacity: 1,
      transition: { 
        duration: 1.2,
        ease: [0.25, 0.1, 0.25, 1],
        delay: 0.4
      }
    }
  }
};

const Experience = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { 
    once: false, // Allow re-triggering every scroll
    threshold: 0.1, 
    margin: "-100px 0px -100px 0px" // Buffer for smooth triggering
  });

  const experiences = [
    {
      title: "React.js Developer",
      company: "Pixel Square Digital Pvt Ltd",
      period: "2025 - Present",
      description: "Developing buy-and-sell platforms with modern React.js architecture. Responsible for creating responsive user interfaces, implementing state management, and optimizing application performance.",
      achievements: [
        "Built scalable e-commerce solutions",
        "Implemented responsive design systems",
        "Optimized application performance by 40%"
      ]
    },
    {
      title: "Student Developer",
      company: "Post Graduate Jahanzeb College",
      period: "2021 - 2025",
      description: "Focused on learning modern web development technologies and building personal projects. Developed Easy Home Solutions, a smart home repair app using React and Supabase",
      achievements: [
        "Completed advanced React.js coursework",
        "Built multiple portfolio projects",
        "Created Easy Home Solutions using Supabase"
      ]
    },
    {
      title: "Frontend Developer Intern",
      company: "Ford9 Solutions",
      period: "Aug 2024 - Mar 2025",
      description: "Completed a 6-month internship focusing on frontend development. Gained hands-on experience in React.js, Tailwind CSS, and modern UI/UX best practices by working on real-world client projects.",
      achievements: [
        "Developed and optimized responsive user interfaces using React.js & Supabase",
        "Implemented clean, reusable components with Tailwind CSS",
        "Collaborated with senior developers in Agile team environments"
      ]
    }
  ];

  return (
    <section 
      id="experience" 
      ref={ref}
      className="py-20 bg-gray-900 relative overflow-hidden"
    >
      {/* Subtle background elements */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 2, ease: "easeInOut" }}
        className="absolute inset-0 bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900"
      />
      
      <motion.div
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 0.05 } : { opacity: 0 }}
        transition={{ duration: 3, delay: 0.5 }}
        className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=\'50\' height=\'50\' viewBox=\'0 0 50 50\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'%23f97316\' fill-opacity=\'0.1\'%3E%3Cpath d=\'M25 15l5 10h10l-8 6 3 9-10-7-10 7 3-9-8-6h10z\'/%3E%3C/g%3E%3C/svg%3E')]"
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
            Experience
          </motion.span>
        </motion.h2>
        
        <motion.div 
          className="max-w-4xl mx-auto"
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={smoothAnimations.container}
        >
          {experiences.map((exp, index) => (
            <motion.div 
              key={index} 
              variants={smoothAnimations.timelineItem}
              className="relative mb-12 last:mb-0"
            >
              <div className="flex items-start space-x-4">
                {/* Animated Icon Circle */}
                <motion.div 
                  variants={smoothAnimations.iconCircle}
                  whileHover={{ 
                    scale: 1.1,
                    rotate: 10,
                    boxShadow: "0 10px 30px rgba(249, 115, 22, 0.4)",
                    transition: { duration: 0.3, ease: "easeOut" }
                  }}
                  className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center relative z-10"
                >
                  <Briefcase className="w-6 h-6 text-white" />
                </motion.div>
                
                {/* Animated Card Content */}
                <motion.div 
                  variants={smoothAnimations.cardContent}
                  whileHover={{ 
                    scale: 1.01,
                    y: -2,
                    boxShadow: "0 15px 35px rgba(0, 0, 0, 0.3)",
                    borderColor: "#f97316",
                    transition: { duration: 0.3, ease: "easeOut" }
                  }}
                  className="flex-1 bg-black/50 p-6 rounded-lg border border-gray-800 hover:border-orange-500/50 transition-all duration-300 backdrop-blur-sm group"
                >
                  {/* Header */}
                  <motion.div 
                    className="flex flex-col md:flex-row md:items-center md:justify-between mb-4"
                    variants={smoothAnimations.cardContent}
                  >
                    <h3 className="text-2xl font-bold text-white group-hover:text-orange-100 transition-colors duration-300">
                      {exp.title}
                    </h3>
                    <motion.span 
                      className="text-orange-500 font-semibold flex items-center mt-2 md:mt-0"
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.2 }}
                    >
                      <motion.div
                        whileHover={{ rotate: 15 }}
                        transition={{ duration: 0.2 }}
                      >
                        <Calendar className="w-4 h-4 mr-2" />
                      </motion.div>
                      {exp.period}
                    </motion.span>
                  </motion.div>
                  
                  <motion.h4 
                    variants={smoothAnimations.cardContent}
                    className="text-xl text-orange-400 mb-4 group-hover:text-orange-300 transition-colors duration-300"
                  >
                    {exp.company}
                  </motion.h4>
                  
                  <motion.p 
                    variants={smoothAnimations.cardContent}
                    className="text-gray-300 mb-4 leading-relaxed group-hover:text-gray-200 transition-colors duration-300"
                  >
                    {exp.description}
                  </motion.p>
                  
                  {/* Achievements with staggered animation */}
                  <motion.div 
                    variants={smoothAnimations.achievementContainer}
                    className="space-y-2"
                  >
                    {exp.achievements.map((achievement, i) => (
                      <motion.div 
                        key={i} 
                        variants={smoothAnimations.achievement}
                        whileHover={{ 
                          x: 5,
                          transition: { duration: 0.2, ease: "easeOut" }
                        }}
                        className="flex items-center space-x-2 group/achievement"
                      >
                        <motion.div
                          whileHover={{ 
                            scale: 1.2,
                            rotate: 72, // One point of the star
                            transition: { duration: 0.2 }
                          }}
                        >
                          <Star className="w-4 h-4 text-orange-500 group-hover/achievement:text-orange-400 transition-colors duration-300" />
                        </motion.div>
                        <span className="text-gray-300 group-hover/achievement:text-white transition-colors duration-300">
                          {achievement}
                        </span>
                      </motion.div>
                    ))}
                  </motion.div>
                </motion.div>
              </div>
              
              {/* Animated Timeline Line */}
              {index < experiences.length - 1 && (
                <motion.div 
                  variants={smoothAnimations.timelineLine}
                  style={{ originY: 0 }}
                  className="absolute left-6 top-12 bottom-0 w-0.5 bg-gradient-to-b from-orange-500 to-red-500 z-0"
                />
              )}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;