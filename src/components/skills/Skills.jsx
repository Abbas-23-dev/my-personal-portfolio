import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { 
    once: false, 
    threshold: 0.1, 
    margin: "-100px 0px -100px 0px" 
  });
  
  const skills = [
    { name: 'React.js', level: 90, icon: '⚛️' },
    { name: 'JavaScript', level: 85, icon: '🟨' },
    { name: 'Tailwind CSS', level: 88, icon: '💨' },
    { name: 'framer-motions', level: 75, icon: '🟢' },
    { name: 'Supabase', level: 80, icon: '🔥' },
    { name: 'Git/GitHub', level: 85, icon: '🔧' },
    { name: 'Responsive Design', level: 90, icon: '📱' },
    { name: 'API Integration', level: 82, icon: '🔗' }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const cardVariants = {
    hidden: { 
      opacity: 0, 
      y: 50,
      scale: 0.9 
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    }
  };

  const progressVariants = {
    hidden: { width: "0%" },
    visible: (level) => ({
      width: `${level}%`,
      transition: {
        duration: 1.5,
        delay: 0.5,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    })
  };

  const titleVariants = {
    hidden: { 
      opacity: 0,
      y: -30,
      scale: 0.9 
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    }
  };

  return (
    <section id="skills" className="py-20 bg-black" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.h2 
          className="text-4xl font-bold text-center mb-12"
          variants={titleVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <span className="bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">
            Technical Skills
          </span>
        </motion.h2>
       
        <motion.div 
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {skills.map((skill, index) => (
            <motion.div 
              key={index} 
              className="bg-gray-900 p-6 rounded-lg border border-gray-800 hover:border-orange-500 transition-all duration-300"
              variants={cardVariants}
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 10px 30px rgba(249, 115, 22, 0.3)"
              }}
              whileTap={{ scale: 0.98 }}
            >
              <div className="flex items-center space-x-3 mb-4">
                <motion.span 
                  className="text-2xl"
                  initial={{ scale: 0, rotate: -180 }}
                  animate={isInView ? { 
                    scale: 1, 
                    rotate: 0,
                    transition: { 
                      delay: 0.3 + index * 0.1,
                      duration: 0.5,
                      type: "spring",
                      stiffness: 200
                    }
                  } : {}}
                >
                  {skill.icon}
                </motion.span>
                <h3 className="text-xl font-semibold text-white">{skill.name}</h3>
              </div>
              <div className="relative">
                <div className="w-full bg-gray-700 rounded-full h-2">
                  <motion.div
                    className="bg-gradient-to-r from-orange-500 to-red-500 h-2 rounded-full"
                    variants={progressVariants}
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                    custom={skill.level}
                  />
                </div>
                <motion.span 
                  className="text-sm text-gray-400 mt-2 block"
                  initial={{ opacity: 0 }}
                  animate={isInView ? { 
                    opacity: 1,
                    transition: { 
                      delay: 1.8,
                      duration: 0.5 
                    }
                  } : {}}
                >
                  {skill.level}%
                </motion.span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;