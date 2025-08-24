import { MapPin, GraduationCap, Briefcase, Code, Award } from 'lucide-react';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

// Professional smooth animation variants
const smoothAnimations = {
  // Main container with elegant stagger
  container: {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08, // Gentle stagger for smooth flow
        delayChildren: 0.1,
        duration: 0.6
      }
    }
  },

  // Title animation with subtle movement
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
        duration: 0.9, 
        ease: [0.25, 0.1, 0.25, 1] // Premium cubic-bezier
      }
    }
  },

  // Smooth fade in with gentle slide
  fadeInUp: {
    hidden: { 
      opacity: 0, 
      y: 20, // Reduced for smoothness
      scale: 0.98,
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

  // Left slide animation for text content
  slideInLeft: {
    hidden: { 
      opacity: 0, 
      x: -25, // Subtle movement
      transition: { duration: 0.4, ease: "easeInOut" }
    },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { 
        duration: 0.9,
        ease: [0.25, 0.1, 0.25, 1]
      }
    }
  },

  // Right slide animation for cards
  slideInRight: {
    hidden: { 
      opacity: 0, 
      x: 25,
      transition: { duration: 0.4, ease: "easeInOut" }
    },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { 
        duration: 0.9,
        ease: [0.25, 0.1, 0.25, 1]
      }
    }
  },

  // Card container for staggered info items
  cardContainer: {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1, // Quick but smooth
        delayChildren: 0.3
      }
    }
  },

  // Info item animations (location, education, work)
  infoItem: {
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
        duration: 0.7,
        ease: [0.25, 0.1, 0.25, 1]
      }
    }
  },

  // Special card animation for the right side
  card: {
    hidden: { 
      opacity: 0, 
      y: 20,
      scale: 0.96,
      rotateX: 15, // Subtle 3D effect
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
  }
};

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { 
    once: false, // Allow re-triggering for every scroll
    threshold: 0.1, 
    margin: "-80px 0px -80px 0px" // Buffer zone for smooth triggering
  });

  return (
    <section
      id="about"
      ref={ref}
      className="py-20 bg-gray-900 relative overflow-hidden"
    >
      {/* Subtle background elements for depth */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 2, ease: "easeInOut" }}
        className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900"
      />
      
      <motion.div
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 0.1 } : { opacity: 0 }}
        transition={{ duration: 3, delay: 0.5 }}
        className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=\'40\' height=\'40\' viewBox=\'0 0 40 40\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'%23f97316\' fill-opacity=\'0.1\'%3E%3Ccircle cx=\'20\' cy=\'20\' r=\'1\'/%3E%3C/g%3E%3C/svg%3E')]"
      />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          className="max-w-4xl mx-auto"
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={smoothAnimations.container}
        >
          {/* Smooth Title Animation */}
          <motion.h2 
            className="text-4xl font-bold text-center mb-12"
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
              About Me
            </motion.span>
          </motion.h2>

          <div className="grid md:grid-cols-2 gap-12 items-start">
            {/* Left Column - Text Content */}
            <motion.div 
              variants={smoothAnimations.slideInLeft}
              className="space-y-6"
            >
              {/* Paragraph 1 */}
              <motion.p 
                variants={smoothAnimations.fadeInUp}
                className="text-gray-300 text-lg leading-relaxed"
              >
                I'm Muhammad Abbas, a passionate React.js developer with a strong foundation in modern web development. Currently working at Pixel Square Digital Pvt Ltd, where I'm developing innovative buy-and-sell platforms that connect people and businesses.
              </motion.p>

              {/* Paragraph 2 */}
              <motion.p 
                variants={smoothAnimations.fadeInUp}
                className="text-gray-300 text-lg leading-relaxed"
              >
                My journey in software development began at Post Graduate Jahanzeb College, where I developed a deep appreciation for clean code, user experience, and innovative solutions. I specialize in creating responsive, scalable applications using React.js, Tailwind CSS, and modern development practices. As part of my final year project, I developed{' '}
                <motion.span 
                  initial={{ backgroundPosition: '0% 50%' }}
                  animate={isInView ? { 
                    backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'] 
                  } : {}}
                  transition={{ 
                    duration: 4, 
                    repeat: Infinity, 
                    ease: "easeInOut",
                    delay: 1
                  }}
                  className="bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent font-semibold"
                  style={{ backgroundSize: '200% 200%' }}
                >
                  Easy Home Solutions
                </motion.span>
                {' '}— a home maintenance and repair service app designed to address real-life challenges in remote areas, combining intuitive design with practical functionality.
              </motion.p>

              {/* Info Items with Staggered Animation */}
              <motion.div 
                variants={smoothAnimations.cardContainer}
                className="space-y-4 pt-4"
              >
                {[
                  { Icon: MapPin, text: "Pakistan, KPK Qambar Swat" },
                  { Icon: GraduationCap, text: "Post Graduate Jahanzeb College ( Saidu Sharif Swat )" },
                  { Icon: Briefcase, text: "Pixel Square Digital Pvt Ltd ( Islamabad, Bahria Town )" }
                ].map(({ Icon, text }, index) => (
                  <motion.div 
                    key={index}
                    variants={smoothAnimations.infoItem}
                    whileHover={{ 
                      x: 5, 
                      transition: { duration: 0.2, ease: "easeOut" }
                    }}
                    className="flex items-center space-x-3 group"
                  >
                    <motion.div
                      whileHover={{ 
                        scale: 1.1,
                        rotate: 5,
                        transition: { duration: 0.2 }
                      }}
                    >
                      <Icon className="w-5 h-5 text-orange-500 group-hover:text-orange-400 transition-colors duration-300" />
                    </motion.div>
                    <span className="text-gray-300 group-hover:text-white transition-colors duration-300">
                      {text}
                    </span>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>

            {/* Right Column - Cards */}
            <motion.div 
              variants={smoothAnimations.slideInRight}
              className="space-y-6"
            >
              {[
                {
                  Icon: Code,
                  title: "Technical Focus",
                  description: "Specializing in React.js ecosystem, modern JavaScript, and creating seamless user experiences with responsive design principles.",
                  delay: 0
                },
                {
                  Icon: Award,
                  title: "Mission",
                  description: "To build innovative digital solutions that make a positive impact on businesses and users worldwide.",
                  delay: 0.2
                }
              ].map(({ Icon, title, description, delay }, index) => (
                <motion.div
                  key={index}
                  variants={smoothAnimations.card}
                  whileHover={{ 
                    scale: 1.02,
                    y: -5,
                    boxShadow: "0 20px 40px rgba(249, 115, 22, 0.15)",
                    borderColor: "#f97316",
                    transition: { duration: 0.3, ease: "easeOut" }
                  }}
                  className="bg-black/50 p-6 rounded-lg border border-gray-800 hover:border-orange-500/50 transition-all duration-300 backdrop-blur-sm group"
                >
                  <div className="flex items-center space-x-3 mb-3">
                    <motion.div
                      whileHover={{ 
                        scale: 1.1,
                        rotate: 10,
                        transition: { duration: 0.2 }
                      }}
                      className="p-2 bg-gradient-to-br from-orange-500/20 to-red-500/20 rounded-lg group-hover:from-orange-500/30 group-hover:to-red-500/30 transition-all duration-300"
                    >
                      <Icon className="w-6 h-6 text-orange-500 group-hover:text-orange-400 transition-colors duration-300" />
                    </motion.div>
                    <h3 className="text-xl font-semibold text-white group-hover:text-orange-100 transition-colors duration-300">
                      {title}
                    </h3>
                  </div>
                  <p className="text-gray-300 group-hover:text-gray-200 transition-colors duration-300 leading-relaxed">
                    {description}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;