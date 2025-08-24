// import React, { useState, useEffect, useRef } from 'react';
// import {
//   Github,
//   Linkedin,
//   Mail,
//   Phone,
//   MapPin,
//   ExternalLink,
//   Code,
//   Briefcase,
//   GraduationCap,
//   User,
//   Download,
//   Heart,
//   ChevronDown,
//   Star,
//   Calendar,
//   Award
// } from 'lucide-react';
// import { motion, AnimatePresence, useInView } from 'framer-motion';

// // Custom hook for optimized scroll-triggered animations
// const useScrollAnimation = (threshold = 0.1, triggerOnce = true) => {
//   const ref = useRef(null);
//   const isInView = useInView(ref, { 
//     threshold, 
//     once: triggerOnce,
//     margin: "0px 0px -50px 0px" // Trigger slightly before element comes into view
//   });
  
//   return [ref, isInView];
// };

// // Reusable animation variants for consistent animations
// const animations = {
//   // Fade in with subtle slide up - perfect for headers
//   fadeInUp: {
//     hidden: { 
//       opacity: 0, 
//       y: 20, // Reduced from 30 for mobile friendliness
//       transition: { duration: 0.5 }
//     },
//     visible: { 
//       opacity: 1, 
//       y: 0,
//       transition: { 
//         duration: 0.6, 
//         ease: [0.25, 0.46, 0.45, 0.94] // Custom easing for smooth feel
//       }
//     }
//   },

//   // Scale in for logos and important elements
//   scaleIn: {
//     hidden: { 
//       opacity: 0, 
//       scale: 0.9, // Subtle scale to prevent layout shifts
//       transition: { duration: 0.4 }
//     },
//     visible: { 
//       opacity: 1, 
//       scale: 1,
//       transition: { 
//         duration: 0.5,
//         ease: "easeOut"
//       }
//     }
//   },

//   // Staggered container for sequential animations
//   staggerContainer: {
//     hidden: { opacity: 0 },
//     visible: {
//       opacity: 1,
//       transition: {
//         staggerChildren: 0.08, // Quick succession for responsive feel
//         delayChildren: 0.1
//       }
//     }
//   },

//   // Individual stagger items
//   staggerItem: {
//     hidden: { 
//       opacity: 0, 
//       y: 15, // Smaller movement for mobile
//       transition: { duration: 0.4 }
//     },
//     visible: { 
//       opacity: 1, 
//       y: 0,
//       transition: { 
//         duration: 0.5,
//         ease: "easeOut"
//       }
//     }
//   },

//   // Slide in from left for mobile menu
//   slideInLeft: {
//     hidden: { 
//       opacity: 0, 
//       x: -30, // Reduced for smoother mobile experience
//       transition: { duration: 0.4 }
//     },
//     visible: { 
//       opacity: 1, 
//       x: 0,
//       transition: { 
//         duration: 0.6,
//         ease: [0.25, 0.46, 0.45, 0.94]
//       }
//     }
//   }
// };

// const Header = () => {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const [activeSection, setActiveSection] = useState('home');

//   // Animation refs for different sections
//   const [headerRef, headerInView] = useScrollAnimation(0.05, false); // Always animate header
//   const [logoRef, logoInView] = useScrollAnimation(0.1);
//   const [navRef, navInView] = useScrollAnimation(0.1);

//   const navItems = [
//     { name: 'Home', href: '#home' },
//     { name: 'About', href: '#about' },
//     { name: 'Skills', href: '#skills' },
//     { name: 'Experience', href: '#experience' },
//     { name: 'Projects', href: '#projects' },
//     { name: 'Contact', href: '#contact' }
//   ];

//   useEffect(() => {
//     const handleScroll = () => {
//       const sections = navItems.map(item => item.href.substring(1));
//       const scrollPosition = window.scrollY + 100;

//       for (let i = sections.length - 1; i >= 0; i--) {
//         const section = document.getElementById(sections[i]);
//         if (section && section.offsetTop <= scrollPosition) {
//           setActiveSection(sections[i]);
//           break;
//         }
//       }
//     };

//     window.addEventListener('scroll', handleScroll);
//     handleScroll();

//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   const handleNavClick = (href, name) => {
//     setActiveSection(name.toLowerCase());
//     setIsMenuOpen(false);

//     const element = document.querySelector(href);
//     if (element) {
//       element.scrollIntoView({ behavior: 'smooth' });
//     }
//   };

//   return (
//     <>
//       {/* Animated Header - preserves all original styling */}
//       <motion.header
//         ref={headerRef}
//         initial="hidden"
//         animate={headerInView ? "visible" : "hidden"}
//         variants={animations.fadeInUp}
//         className="fixed top-0 left-0 right-0 z-50 bg-black/90 backdrop-blur-md border-b border-gray-800"
//       >
//         <nav className="container mx-auto">
//           <div className="flex items-center justify-between">
//             {/* Logo with subtle scale animation */}
//             <motion.div
//               ref={logoRef}
//               initial="hidden"
//               animate={logoInView ? "visible" : "hidden"}
//               variants={animations.scaleIn}
//               className="text-2xl font-bold"
//             >
//               <motion.img
//                 whileHover={{ 
//                   scale: 1.03, // Subtle hover for responsive design
//                   transition: { duration: 0.3 }
//                 }}
//                 whileTap={{ scale: 0.97 }}
//                 className='h-20 w-20'
//                 src="/images/abbaslogo.png"
//                 alt=""
//               />
//             </motion.div>

//             {/* Desktop navigation with staggered animation */}
//             <motion.div
//               ref={navRef}
//               initial="hidden"
//               animate={navInView ? "visible" : "hidden"}
//               variants={animations.staggerContainer}
//               className="hidden md:flex space-x-8"
//             >
//               {navItems.map((item) => (
//                 <motion.a
//                   key={item.name}
//                   variants={animations.staggerItem}
//                   whileHover={{ 
//                     y: -1, // Minimal movement to prevent layout shift
//                     transition: { duration: 0.2 }
//                   }}
//                   whileTap={{ scale: 0.98 }}
//                   href={item.href}
//                   onClick={(e) => {
//                     e.preventDefault();
//                     handleNavClick(item.href, item.name);
//                   }}
//                   className={`text-gray-300 hover:text-orange-500 transition-all duration-300 relative group ${activeSection === item.name.toLowerCase() ? 'text-orange-500 scale-105' : ''}`}
//                 >
//                   {item.name}
//                   {/* Animated underline */}
//                   <motion.span
//                     initial={{ width: 0 }}
//                     animate={{
//                       width: activeSection === item.name.toLowerCase() ? "100%" : 0
//                     }}
//                     whileHover={{ width: "100%" }}
//                     transition={{ duration: 0.3 }}
//                     className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-orange-500 to-red-500"
//                   />
//                 </motion.a>
//               ))}
//             </motion.div>

//             {/* Mobile Menu Button with enhanced animation */}
//             <motion.button
//               initial="hidden"
//               animate={headerInView ? "visible" : "hidden"}
//               variants={animations.slideInLeft}
//               whileTap={{ 
//                 scale: 0.92,
//                 rotate: 10, // Reduced rotation for smoother feel
//                 transition: { duration: 0.15 }
//               }}
//               whileHover={{
//                 scale: 1.05,
//                 transition: { duration: 0.2 }
//               }}
//               className="md:hidden text-gray-300 hover:text-orange-500 z-60 relative"
//               onClick={() => setIsMenuOpen(!isMenuOpen)}
//             >
//               <motion.div
//                 initial={false}
//                 animate={isMenuOpen ? 'open' : 'closed'}
//                 className="w-6 h-6 flex flex-col justify-center"
//               >
//                 <motion.span
//                   variants={{
//                     open: { rotate: 45, y: 5 },
//                     closed: { rotate: 0, y: 0 },
//                   }}
//                   className="block h-0.5 w-6 bg-current"
//                   transition={{ duration: 0.3, ease: "easeInOut" }}
//                 />
//                 <motion.span
//                   variants={{
//                     open: { opacity: 0 },
//                     closed: { opacity: 1 },
//                   }}
//                   className="block h-0.5 w-6 bg-current mt-1"
//                   transition={{ duration: 0.2 }}
//                 />
//                 <motion.span
//                   variants={{
//                     open: { rotate: -45, y: -5 },
//                     closed: { rotate: 0, y: 0 },
//                   }}
//                   className="block h-0.5 w-6 bg-current mt-1"
//                   transition={{ duration: 0.3, ease: "easeInOut" }}
//                 />
//               </motion.div>
//             </motion.button>
//           </div>
//         </nav>
//       </motion.header>

//       {/* Mobile Menu Overlay - enhanced with backdrop animation */}
//       <AnimatePresence>
//         {isMenuOpen && (
//           <motion.div
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             exit={{ opacity: 0 }}
//             transition={{ duration: 0.3 }}
//             className="fixed inset-0 z-40 bg-black/50 backdrop-blur-sm md:hidden"
//             onClick={() => setIsMenuOpen(false)}
//           />
//         )}
//       </AnimatePresence>

//       {/* Mobile Sliding Menu - optimized for all screen sizes */}
//       <AnimatePresence>
//         {isMenuOpen && (
//           <motion.div
//             initial={{ x: '-100%' }}
//             animate={{ x: 0 }}
//             exit={{ x: '-100%' }}
//             transition={{ 
//               type: 'spring', 
//               stiffness: 300, 
//               damping: 30,
//               mass: 0.8 // Lighter feel for mobile
//             }}
//             className="fixed top-0 h-full w-80 bg-gradient-to-b from-gray-900 to-black z-50 md:hidden"
//           >
//             {/* Menu header with fade animation */}
//             <motion.div
//               initial={{ opacity: 0, y: -10 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ delay: 0.15, duration: 0.4 }}
//               className="p-6 border-b border-gray-800"
//             >
//               <div className="flex items-center justify-between">
//                 <div className="text-2xl font-bold">
//                   <span className="bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">
//                     MA
//                   </span>
//                 </div>
//                 <motion.button
//                   whileHover={{ scale: 1.1 }}
//                   whileTap={{ scale: 0.9 }}
//                   className="text-gray-400 hover:text-orange-500 transition-colors duration-300"
//                   onClick={() => setIsMenuOpen(false)}
//                 >
//                   <div className="w-6 h-6 flex flex-col justify-center">
//                     <span className="block h-0.5 w-6 bg-current rotate-45 translate-y-1"></span>
//                     <span className="block h-0.5 w-6 bg-current -rotate-45 -translate-y-1"></span>
//                   </div>
//                 </motion.button>
//               </div>
//             </motion.div>

//             {/* Navigation items with staggered animation */}
//             <motion.div
//               initial="hidden"
//               animate="visible"
//               variants={animations.staggerContainer}
//               className="py-6"
//             >
//               {navItems.map((item, index) => (
//                 <motion.a
//                   key={item.name}
//                   variants={animations.staggerItem}
//                   whileHover={{ 
//                     x: 4, // Subtle movement to prevent layout issues
//                     transition: { duration: 0.2 }
//                   }}
//                   whileTap={{ scale: 0.98 }}
//                   href={item.href}
//                   onClick={(e) => {
//                     e.preventDefault();
//                     handleNavClick(item.href, item.name);
//                   }}
//                   className={`block px-6 py-4 text-lg transition-all duration-300 relative group ${
//                     activeSection === item.name.toLowerCase()
//                       ? 'text-orange-500 bg-orange-500/10 border-r-2 border-orange-500'
//                       : 'text-gray-300 hover:text-orange-500 hover:bg-gray-800/50'
//                   }`}
//                 >
//                   <div className="flex items-center">
//                     {item.name}
//                     <motion.div 
//                       initial={{ opacity: 0, x: -5 }}
//                       whileHover={{ opacity: 1, x: 0 }}
//                       className={`ml-auto transform transition-transform duration-300 ${
//                         activeSection === item.name.toLowerCase() ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'
//                       }`}
//                     >
//                       <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
//                       </svg>
//                     </motion.div>
//                   </div>
//                   {/* Animated underline for mobile menu */}
//                   <motion.div
//                     initial={{ scaleX: 0 }}
//                     animate={{
//                       scaleX: activeSection === item.name.toLowerCase() ? 1 : 0
//                     }}
//                     whileHover={{ scaleX: 1 }}
//                     transition={{ duration: 0.3 }}
//                     className="absolute bottom-0 left-6 right-6 h-0.5 bg-gradient-to-r from-orange-500 to-red-500 origin-left"
//                   />
//                 </motion.a>
//               ))}
//             </motion.div>

//             {/* Footer with animated social icons */}
//             <motion.div
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ delay: 0.6, duration: 0.5 }}
//               className="absolute bottom-0 left-0 right-0 p-6 border-t border-gray-800"
//             >
//               <div className="text-center text-gray-400 text-sm">
//                 <p className="mb-2">Made with <Heart className="w-4 h-4 text-red-500 inline" /> by MA</p>
//                 <motion.div
//                   initial="hidden"
//                   animate="visible"
//                   variants={animations.staggerContainer}
//                   className="flex justify-center space-x-4"
//                 >
//                   {[Github, Linkedin, Mail].map((Icon, index) => (
//                     <motion.div
//                       key={index}
//                       variants={animations.staggerItem}
//                       whileHover={{ 
//                         scale: 1.15,
//                         y: -2,
//                         transition: { duration: 0.2 }
//                       }}
//                       whileTap={{ scale: 0.9 }}
//                     >
//                       <Icon className="w-5 h-5 hover:text-orange-500 cursor-pointer transition-colors duration-300" />
//                     </motion.div>
//                   ))}
//                 </motion.div>
//               </div>
//             </motion.div>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </>
//   );
// };

// export default Header;


import React, { useState, useEffect } from 'react';
import {
  Github,
  Linkedin,
  Mail,
  Heart,
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

// Reusable animation variants
const animations = {
  fadeIn: {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  },
  scaleIn: {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5, ease: "easeOut" } }
  },
  stagger: {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
  },
  staggerItem: {
    hidden: { opacity: 0, y: 15 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
  }
};

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' }
  ];

  // Track active section on scroll
  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map(item => item.href.substring(1));
      const scrollPosition = window.scrollY + 120;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i]);
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Smooth scroll handler
  const handleNavClick = (href, name) => {
    setActiveSection(name.toLowerCase());
    setIsMenuOpen(false);
    const element = document.querySelector(href);
    if (element) element.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      {/* Fixed Responsive Header */}
      <motion.header
        initial="hidden"
        animate="visible"
        variants={animations.fadeIn}
        className="fixed top-0 left-0 right-0 z-50 bg-black/90 backdrop-blur-md border-b border-gray-800"
      >
        <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <motion.div
              initial="hidden"
              animate="visible"
              variants={animations.scaleIn}
              className="text-xl font-bold flex-shrink-0"
            >
              <motion.img
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="h-12 w-12 sm:h-14 sm:w-14"
                src="/images/abbaslogo.png"
                alt="Logo"
              />
            </motion.div>

            {/* Desktop Navigation */}
            <motion.div
              initial="hidden"
              animate="visible"
              variants={animations.stagger}
              className="hidden lg:flex space-x-8"
            >
              {navItems.map((item) => (
                <motion.a
                  key={item.name}
                  variants={animations.staggerItem}
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.97 }}
                  href={item.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(item.href, item.name);
                  }}
                  className={`relative text-base transition-all duration-300 ${
                    activeSection === item.name.toLowerCase()
                      ? "text-orange-500 font-semibold"
                      : "text-gray-300 hover:text-orange-500"
                  }`}
                >
                  {item.name}
                  <motion.span
                    initial={{ width: 0 }}
                    animate={{
                      width: activeSection === item.name.toLowerCase() ? "100%" : 0
                    }}
                    whileHover={{ width: "100%" }}
                    transition={{ duration: 0.3 }}
                    className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-orange-500 to-red-500"
                  />
                </motion.a>
              ))}
            </motion.div>

            {/* Mobile Menu Button */}
            <motion.button
              whileTap={{ scale: 0.9 }}
              className="lg:hidden text-gray-300 hover:text-orange-500"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <div className="w-6 h-6 flex flex-col justify-center">
                <span className={`block h-0.5 w-6 bg-current transform transition duration-300 ${isMenuOpen ? "rotate-45 translate-y-2" : ""}`} />
                <span className={`block h-0.5 w-6 bg-current my-1 transition duration-300 ${isMenuOpen ? "opacity-0" : ""}`} />
                <span className={`block h-0.5 w-6 bg-current transform transition duration-300 ${isMenuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
              </div>
            </motion.button>
          </div>
        </nav>
      </motion.header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 lg:hidden"
            onClick={() => setIsMenuOpen(false)}
          />
        )}
      </AnimatePresence>

      {/* Mobile Sliding Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ x: "-100%" }}
            animate={{ x: 0 }}
            exit={{ x: "-100%" }}
            transition={{ type: "spring", stiffness: 280, damping: 30 }}
            className="fixed top-0 left-0 h-full w-72 sm:w-80 bg-gradient-to-b from-gray-900 to-black z-50 lg:hidden shadow-lg"
          >
            <div className="p-6 border-b border-gray-800 flex justify-between items-center">
              <span className="text-xl font-bold bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">MA</span>
              <button onClick={() => setIsMenuOpen(false)} className="text-gray-400 hover:text-orange-500">
                ✕
              </button>
            </div>

            <motion.div
              initial="hidden"
              animate="visible"
              variants={animations.stagger}
              className="py-6"
            >
              {navItems.map((item) => (
                <motion.a
                  key={item.name}
                  variants={animations.staggerItem}
                  whileHover={{ x: 4 }}
                  whileTap={{ scale: 0.97 }}
                  href={item.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(item.href, item.name);
                  }}
                  className={`block px-6 py-4 text-lg transition-all duration-300 ${
                    activeSection === item.name.toLowerCase()
                      ? "text-orange-500 bg-orange-500/10 border-r-2 border-orange-500"
                      : "text-gray-300 hover:text-orange-500 hover:bg-gray-800/50"
                  }`}
                >
                  {item.name}
                </motion.a>
              ))}
            </motion.div>

            {/* Mobile footer */}
            <div className="absolute bottom-0 w-full p-6 border-t border-gray-800">
              <p className="text-sm text-gray-400 text-center mb-3">
                Made with <Heart className="w-4 h-4 text-red-500 inline" /> by MA
              </p>
              <div className="flex justify-center space-x-6">
                {[Github, Linkedin, Mail].map((Icon, i) => (
                  <motion.a
                    key={i}
                    href="#"
                    whileHover={{ scale: 1.15, y: -2 }}
                    whileTap={{ scale: 0.9 }}
                    className="text-gray-400 hover:text-orange-500"
                  >
                    <Icon className="w-6 h-6" />
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;
