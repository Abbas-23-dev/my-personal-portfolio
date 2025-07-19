// import { Heart, Download, Github, Linkedin, Mail, ChevronDown } from 'lucide-react';
// import { useState } from 'react';
// import HeartbeatButton from './HeartbeatButton';
// import TypingAnimation from './TypingAnimation';
// // Enhanced Typing Animation Component
// // const TypingAnimation = () => {
// //   const [displayText, setDisplayText] = React.useState('');
// //   const [currentIndex, setCurrentIndex] = React.useState(0);
// //   const [isDeleting, setIsDeleting] = React.useState(false);
  
// //   const texts = [
// //     "I am a React.js Developer",
// //     "I build Modern Web Apps",
// //     "I create User Experiences", 
// //     "I love Clean Code"
// //   ];
  
// //   React.useEffect(() => {
// //     const currentText = texts[currentIndex];
// //     const timeout = setTimeout(() => {
// //       if (!isDeleting) {
// //         // Typing
// //         if (displayText.length < currentText.length) {
// //           setDisplayText(currentText.substring(0, displayText.length + 1));
// //         } else {
// //           // Wait before deleting
// //           setTimeout(() => setIsDeleting(true), 2000);
// //         }
// //       } else {
// //         // Deleting
// //         if (displayText.length > 0) {
// //           setDisplayText(displayText.substring(0, displayText.length - 1));
// //         } else {
// //           setIsDeleting(false);
// //           setCurrentIndex((prevIndex) => (prevIndex + 1) % texts.length);
// //         }
// //       }
// //     }, isDeleting ? 50 : 100);
    
// //     return () => clearTimeout(timeout);
// //   }, [displayText, currentIndex, isDeleting, texts]);
  
// //   return (
// //     <span className="text-orange-400">
// //       {displayText}
// //       <span className="animate-pulse">|</span>
// //     </span>
// //   );
// // };

// // const HeartbeatButton = ({ children, onClick, className = "" }) => (
// //   <button 
// //     onClick={onClick}
// //     className={`px-8 py-4 bg-gradient-to-r from-orange-500 to-red-500 text-white rounded-full hover:scale-105 transition-all duration-300 font-semibold flex items-center justify-center space-x-2 ${className}`}
// //   >
// //     {children}
// //   </button>
// // );

// const Hero = () => {
//   const scrollToContact = () => {
//     document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
//   };

//   return (
//     <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20 lg:pt-0">
//       {/* Animated Background */}
//       <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black">
//         <div
//           className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23ff6b35\' fill-opacity=\'0.1\'%3E%3Ccircle cx=\'30\' cy=\'30\' r=\'1\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] animate-pulse"
//         ></div>
//       </div>

//       <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-8 lg:py-16">
//         <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
//           {/* Text Content */}
//           <div className="text-center lg:text-left order-2 lg:order-1">
//             <div className="mb-6">
//               <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight">
//                 <span className="bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent animate-pulse">
//                   Muhammad Abbas
//                 </span>
//               </h1>
//               <div className="text-lg sm:text-xl md:text-2xl text-gray-300 mb-4">
//                 <TypingAnimation />
//               </div>
//               <p className="text-gray-400 text-base sm:text-lg mb-6 lg:mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
//                 Passionate React.js Developer from Post Graduate Jahanzeb College, currently building innovative solutions at Pixel Square Digital. Specializing in modern web applications and buy-and-sell platforms.
//               </p>
//             </div>

//             <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-6 lg:mb-8">
//               <HeartbeatButton onClick={scrollToContact} className="group w-full sm:w-auto">
//                 <Heart className="w-5 h-5 text-white group-hover:animate-bounce" />
//                 <span className="text-white font-semibold">Let's Connect</span>
//               </HeartbeatButton>

//               <button className="px-6 sm:px-8 py-4 border-2 border-orange-500 text-orange-500 rounded-full hover:bg-orange-500 hover:text-black transition-all duration-300 font-semibold flex items-center justify-center space-x-2 w-full sm:w-auto">
//                 <Download className="w-5 h-5" />
//                 <span>Download CV</span>
//               </button>
//             </div>

//             {/* Social Links */}
//             <div className="flex justify-center lg:justify-start space-x-6">
//               <a href="#" className="text-gray-400 hover:text-orange-500 transition-colors duration-300 hover:scale-110 transform">
//                 <Github className="w-6 h-6" />
//               </a>
//               <a href="#" className="text-gray-400 hover:text-orange-500 transition-colors duration-300 hover:scale-110 transform">
//                 <Linkedin className="w-6 h-6" />
//               </a>
//               <a href="mailto:your.email@example.com" className="text-gray-400 hover:text-orange-500 transition-colors duration-300 hover:scale-110 transform">
//                 <Mail className="w-6 h-6" />
//               </a>
//             </div>
//           </div>

//           {/* Image Section */}
//           <div className="flex justify-center lg:justify-end order-1 lg:order-2 mb-6 lg:mb-0">
//             <div className="relative">
//               <div className="w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 lg:w-88 lg:h-88 bg-gradient-to-br from-orange-500 to-red-500 rounded-full p-1 animate-pulse">
//                 <div className="w-full h-full bg-black rounded-full flex items-center justify-center overflow-hidden">
//                   <img
//                     src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face"
//                     // src='./images/mabbas.jpeg'
//                     alt="Muhammad Abbas"
//                     className="w-full h-full rounded-full object-cover"
//                   />
//                 </div>
//               </div>
              
//               {/* Floating decorative elements */}
//               <div className="absolute -top-2 -right-2 sm:-top-4 sm:-right-4 w-6 h-6 sm:w-8 sm:h-8 bg-gradient-to-r from-orange-500 to-red-500 rounded-full animate-bounce"></div>
//               <div className="absolute -bottom-2 -left-2 sm:-bottom-4 sm:-left-4 w-4 h-4 sm:w-6 sm:h-6 bg-gradient-to-r from-orange-500 to-red-500 rounded-full animate-bounce delay-300"></div>
//               <div className="absolute top-1/4 -left-2 w-3 h-3 sm:w-4 sm:h-4 bg-gradient-to-r from-orange-500 to-red-500 rounded-full animate-ping delay-500"></div>
//               <div className="absolute bottom-1/4 -right-1 w-2 h-2 sm:w-3 sm:h-3 bg-gradient-to-r from-orange-500 to-red-500 rounded-full animate-ping delay-700"></div>
//             </div>
//           </div>
//         </div>

//         {/* Scroll Indicator */}
//         <div className="absolute bottom-4 sm:bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
//           <ChevronDown className="w-6 h-6 sm:w-8 sm:h-8 text-orange-500" />
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Hero;


import React, { useState, useEffect } from 'react';
import { Heart, Download, Github, Linkedin, Mail, ChevronDown } from 'lucide-react';

// Enhanced Typing Animation Component
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

const HeartbeatButton = ({ children, onClick, className = "" }) => (
  <button 
    onClick={onClick}
    className={`px-8 py-4 bg-gradient-to-r from-orange-500 to-red-500 text-white rounded-full hover:scale-105 transition-all duration-300 font-semibold flex items-center justify-center space-x-2 ${className}`}
  >
    {children}
  </button>
);

const Hero = () => {
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20 lg:pt-0">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black">
        <div
          className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23ff6b35\' fill-opacity=\'0.1\'%3E%3Ccircle cx=\'30\' cy=\'30\' r=\'1\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] animate-pulse"
        ></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-8 lg:py-16">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Text Content */}
          <div className="text-center lg:text-left order-2 lg:order-1">
            <div className="mb-6">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight">
                <span className="bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent animate-pulse">
                  Muhammad Abbas
                </span>
              </h1>
              <div className="text-lg sm:text-xl md:text-2xl text-gray-300 mb-4">
                <TypingAnimation />
              </div>
              <p className="text-gray-400 text-base sm:text-lg mb-6 lg:mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                Passionate React.js Developer from Post Graduate Jahanzeb College, currently building innovative solutions at Pixel Square Digital. Specializing in modern web applications and buy-and-sell platforms.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-6 lg:mb-8">
              <HeartbeatButton onClick={scrollToContact} className="group w-full sm:w-auto">
                <Heart className="w-5 h-5 text-white group-hover:animate-bounce" />
                <span className="text-white font-semibold">Let's Connect</span>
              </HeartbeatButton>

              <button className="px-6 sm:px-8 py-4 border-2 border-orange-500 text-orange-500 rounded-full hover:bg-orange-500 hover:text-black transition-all duration-300 font-semibold flex items-center justify-center space-x-2 w-full sm:w-auto">
                <Download className="w-5 h-5" />
                <span>Download CV</span>
              </button>
            </div>

            {/* Social Links */}
            <div className="flex justify-center lg:justify-start space-x-6">
              <a href="#" className="text-gray-400 hover:text-orange-500 transition-colors duration-300 hover:scale-110 transform">
                <Github className="w-6 h-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-orange-500 transition-colors duration-300 hover:scale-110 transform">
                <Linkedin className="w-6 h-6" />
              </a>
              <a href="mailto:your.email@example.com" className="text-gray-400 hover:text-orange-500 transition-colors duration-300 hover:scale-110 transform">
                <Mail className="w-6 h-6" />
              </a>
            </div>
          </div>

          {/* Image Section */}
          <div className="flex justify-center lg:justify-end order-1 lg:order-2 mb-6 lg:mb-0">
            <div className="relative">
              <div className="w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 lg:w-88 lg:h-88 bg-gradient-to-br from-orange-500 to-red-500 rounded-full p-1 animate-pulse">
                <div className="w-full h-full bg-black rounded-full flex items-center justify-center overflow-hidden">
                  <img
                    // src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face"
                    src='./images/mabbas.jpeg'
                    alt="Muhammad Abbas"
                    className="w-full h-full rounded-full object-cover"
                  />
                </div>
              </div>
              
              {/* Floating decorative elements */}
              <div className="absolute -top-2 -right-2 sm:-top-4 sm:-right-4 w-6 h-6 sm:w-8 sm:h-8 bg-gradient-to-r from-orange-500 to-red-500 rounded-full animate-bounce"></div>
              <div className="absolute -bottom-2 -left-2 sm:-bottom-4 sm:-left-4 w-4 h-4 sm:w-6 sm:h-6 bg-gradient-to-r from-orange-500 to-red-500 rounded-full animate-bounce delay-300"></div>
              <div className="absolute top-1/4 -left-2 w-3 h-3 sm:w-4 sm:h-4 bg-gradient-to-r from-orange-500 to-red-500 rounded-full animate-ping delay-500"></div>
              <div className="absolute bottom-1/4 -right-1 w-2 h-2 sm:w-3 sm:h-3 bg-gradient-to-r from-orange-500 to-red-500 rounded-full animate-ping delay-700"></div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-4 sm:bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="w-6 h-6 sm:w-8 sm:h-8 text-orange-500" />
        </div>
      </div>
    </section>
  );
};

export default Hero;