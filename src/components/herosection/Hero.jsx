import React, { useState, useEffect } from 'react';
import { Heart, Download, Github, Linkedin, Mail, ChevronDown } from 'lucide-react';
import { motion } from 'framer-motion';

// Reusable animation variants optimized for both page load and scroll triggers
const animations = {
  // Container animations for coordinated entrance
  container: {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  },

  // Fade in with slide up - responsive friendly
  fadeInUp: {
    hidden: { 
      opacity: 0, 
      y: 30, // Reduced for mobile compatibility
      transition: { duration: 0.6 }
    },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.7, 
        ease: [0.25, 0.46, 0.45, 0.94] // Smooth easing
      }
    }
  },

  // Slide in from left for text content
  slideInLeft: {
    hidden: { 
      opacity: 0, 
      x: -40, // Moderate movement for mobile
      transition: { duration: 0.6 }
    },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { 
        duration: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    }
  },

  // Slide in from right for image content  
  slideInRight: {
    hidden: { 
      opacity: 0, 
      x: 40,
      transition: { duration: 0.6 }
    },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { 
        duration: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    }
  },

  // Scale in for profile images
  scaleIn: {
    hidden: { 
      opacity: 0, 
      scale: 0.85,
      transition: { duration: 0.5 }
    },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: { 
        duration: 0.7,
        ease: "easeOut"
      }
    }
  },

  // Stagger container for buttons and social links
  staggerContainer: {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2
      }
    }
  },

  // Individual stagger items
  staggerItem: {
    hidden: { 
      opacity: 0, 
      y: 20,
      scale: 0.95,
      transition: { duration: 0.5 }
    },
    visible: { 
      opacity: 1, 
      y: 0,
      scale: 1,
      transition: { 
        duration: 0.6,
        ease: "easeOut"
      }
    }
  },

  // Bounce in for decorative elements
  bounceIn: {
    hidden: { 
      opacity: 0, 
      scale: 0,
      transition: { duration: 0.4 }
    },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: { 
        duration: 0.6,
        type: "spring",
        bounce: 0.4
      }
    }
  }
};

// Enhanced Typing Animation Component (preserved exactly as provided)
const TypingAnimation = () => {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  
  const texts = [
    "I am a React.js Developer",
    "I build Modern Web Apps",
    "I create User Experiences", 
    "I love Clean Code"
  ];
  
  useEffect(() => {
    const currentText = texts[currentIndex];
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        // Typing
        if (displayText.length < currentText.length) {
          setDisplayText(currentText.substring(0, displayText.length + 1));
        } else {
          // Wait before deleting
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        // Deleting
        if (displayText.length > 0) {
          setDisplayText(displayText.substring(0, displayText.length - 1));
        } else {
          setIsDeleting(false);
          setCurrentIndex((prevIndex) => (prevIndex + 1) % texts.length);
        }
      }
    }, isDeleting ? 50 : 100);
    
    return () => clearTimeout(timeout);
  }, [displayText, currentIndex, isDeleting, texts]);
  
  return (
    <span className="text-orange-400">
      {displayText}
      <span className="animate-pulse">|</span>
    </span>
  );
};

// Enhanced HeartbeatButton Component (preserved styling, added hover animations)
const HeartbeatButton = ({ children, onClick, className = "" }) => (
  <motion.button 
    onClick={onClick}
    whileHover={{ 
      scale: 1.05,
      transition: { duration: 0.2 }
    }}
    whileTap={{ scale: 0.95 }}
    className={`px-8 py-4 bg-gradient-to-r from-orange-500 to-red-500 text-white rounded-full hover:scale-105 transition-all duration-300 font-semibold flex items-center justify-center space-x-2 ${className}`}
  >
    {children}
  </motion.button>
);

const Hero = () => {
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20 lg:pt-0">
      {/* Animated Background - triggers on both page load and scroll */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 1.5 }}
        className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black"
      >
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 2, delay: 0.5 }}
          className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23ff6b35\' fill-opacity=\'0.1\'%3E%3Ccircle cx=\'30\' cy=\'30\' r=\'1\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] animate-pulse"
        ></motion.div>
      </motion.div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-8 lg:py-16">
        <motion.div
          initial="hidden"
          animate="visible"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }} // Triggers when 30% visible
          variants={animations.container}
          className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center"
        >
          {/* Text Content - Slides in from left on both page load and scroll */}
          <motion.div
            variants={animations.slideInLeft}
            className="text-center lg:text-left order-2 lg:order-1"
          >
            <div className="mb-6">
              {/* Animated Title */}
              <motion.h1
                variants={animations.fadeInUp}
                className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight"
              >
                <motion.span
                  initial={{ backgroundPosition: '0% 50%' }}
                  animate={{ backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'] }}
                  whileInView={{ backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'] }}
                  viewport={{ once: true }}
                  transition={{ 
                    duration: 4, 
                    repeat: Infinity, 
                    ease: "linear"
                  }}
                  className="bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent animate-pulse"
                  style={{ backgroundSize: '200% 200%' }}
                >
                  Muhammad Abbas
                </motion.span>
              </motion.h1>

              {/* Typing Animation Container */}
              <motion.div
                variants={animations.fadeInUp}
                className="text-lg sm:text-xl md:text-2xl text-gray-300 mb-4"
              >
                <TypingAnimation />
              </motion.div>

              {/* Description */}
              <motion.p
                variants={animations.fadeInUp}
                className="text-gray-400 text-base sm:text-lg mb-6 lg:mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed"
              >
                Passionate React.js Developer from Post Graduate Jahanzeb College, currently building innovative solutions at Pixel Square Digital. Specializing in modern web applications and buy-and-sell ( harchizz.com ) platforms.
              </motion.p>
            </div>

            {/* Animated Buttons - Staggered animation */}
            <motion.div
              variants={animations.staggerContainer}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-6 lg:mb-8"
            >
              <motion.div variants={animations.staggerItem}>
                <HeartbeatButton onClick={scrollToContact} className="group w-full sm:w-auto">
                  <Heart className="w-5 h-5 text-white group-hover:animate-bounce" />
                  <span className="text-white font-semibold">Let's Connect</span>
                </HeartbeatButton>
              </motion.div>

              <motion.button
                variants={animations.staggerItem}
                whileHover={{ 
                  scale: 1.05,
                  backgroundColor: '#f97316',
                  color: '#000',
                  transition: { duration: 0.3 }
                }}
                whileTap={{ scale: 0.95 }}
                className="px-6 sm:px-8 py-4 border-2 border-orange-500 text-orange-500 rounded-full hover:bg-orange-500 hover:text-black transition-all duration-300 font-semibold flex items-center justify-center space-x-2 w-full sm:w-auto"
              >
                <Download className="w-5 h-5" />
                <span>Download CV</span>
              </motion.button>
            </motion.div>

            {/* Social Links - Staggered animation */}
            <motion.div
              variants={animations.staggerContainer}
              className="flex justify-center lg:justify-start space-x-6"
            >
              {[
                { Icon: Github, href: "#" },
                { Icon: Linkedin, href: "#" },
                { Icon: Mail, href: "mailto:your.email@example.com" }
              ].map(({ Icon, href }, index) => (
                <motion.a
                  key={index}
                  variants={animations.staggerItem}
                  whileHover={{ 
                    scale: 1.2,
                    y: -3,
                    color: '#f97316',
                    transition: { duration: 0.2 }
                  }}
                  whileTap={{ scale: 0.9 }}
                  href={href}
                  className="text-gray-400 hover:text-orange-500 transition-colors duration-300 hover:scale-110 transform"
                >
                  <Icon className="w-6 h-6" />
                </motion.a>
              ))}
            </motion.div>
          </motion.div>

          {/* Image Section - Slides in from right on both page load and scroll */}
          <motion.div
            variants={animations.slideInRight}
            className="flex justify-center lg:justify-end order-1 lg:order-2 mb-6 lg:mb-0"
          >
            <div className="relative">
              {/* Main Profile Image */}
              <motion.div
                variants={animations.scaleIn}
                whileHover={{ 
                  scale: 1.05,
                  rotate: 2,
                  transition: { duration: 0.3 }
                }}
                className="w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 lg:w-88 lg:h-88 bg-gradient-to-br from-orange-500 to-red-500 rounded-full p-1 animate-pulse"
              >
                <div className="w-full h-full bg-black rounded-full flex items-center justify-center overflow-hidden">
                  <img
                    src='./images/mabbas.jpeg'
                    alt="Muhammad Abbas"
                    className="w-full h-full rounded-full object-cover"
                  />
                </div>
              </motion.div>
              
              {/* Floating Decorative Elements - Each triggers independently */}
              <motion.div
                initial="hidden"
                animate="visible"
                whileInView="visible"
                viewport={{ once: true, amount: 0.8 }}
                variants={animations.bounceIn}
                transition={{ delay: 0.5 }}
                className="absolute -top-2 -right-2 sm:-top-4 sm:-right-4 w-6 h-6 sm:w-8 sm:h-8 bg-gradient-to-r from-orange-500 to-red-500 rounded-full animate-bounce"
              />
              <motion.div
                initial="hidden"
                animate="visible"
                whileInView="visible"
                viewport={{ once: true, amount: 0.8 }}
                variants={animations.bounceIn}
                transition={{ delay: 0.7 }}
                className="absolute -bottom-2 -left-2 sm:-bottom-4 sm:-left-4 w-4 h-4 sm:w-6 sm:h-6 bg-gradient-to-r from-orange-500 to-red-500 rounded-full animate-bounce delay-300"
              />
              <motion.div
                initial="hidden"
                animate="visible"
                whileInView="visible"
                viewport={{ once: true, amount: 0.8 }}
                variants={animations.bounceIn}
                transition={{ delay: 0.9 }}
                className="absolute top-1/4 -left-2 w-3 h-3 sm:w-4 sm:h-4 bg-gradient-to-r from-orange-500 to-red-500 rounded-full animate-ping delay-500"
              />
              <motion.div
                initial="hidden"
                animate="visible"
                whileInView="visible"
                viewport={{ once: true, amount: 0.8 }}
                variants={animations.bounceIn}
                transition={{ delay: 1.1 }}
                className="absolute bottom-1/4 -right-1 w-2 h-2 sm:w-3 sm:h-3 bg-gradient-to-r from-orange-500 to-red-500 rounded-full animate-ping delay-700"
              />
            </div>
          </motion.div>
        </motion.div>

        {/* Scroll Indicator - Animates on both page load and scroll */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6, delay: 1.5 }}
          className="absolute bottom-4 sm:bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce"
        >
          <motion.div
            animate={{ y: [0, -8, 0] }}
            transition={{ 
              duration: 2, 
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            <ChevronDown className="w-6 h-6 sm:w-8 sm:h-8 text-orange-500" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;