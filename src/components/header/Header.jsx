import React, { useState, useEffect } from 'react';
import { 
  Github, 
  Linkedin, 
  Mail, 
  Phone, 
  MapPin, 
  ExternalLink, 
  Code, 
  Briefcase, 
  GraduationCap, 
  User, 
  Download,
  Heart,
  ChevronDown,
  Star,
  Calendar,
  Award
} from 'lucide-react';

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

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map(item => item.href.substring(1));
      const scrollPosition = window.scrollY + 100;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i]);
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (href, name) => {
    setActiveSection(name.toLowerCase());
    setIsMenuOpen(false);
    
    // Smooth scroll to section
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 bg-black/90 backdrop-blur-md border-b border-gray-800">
        <nav className="container mx-auto">
          <div className="flex items-center justify-between">
            <div className="text-2xl font-bold">
              {/* <span className="bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">
                MA
              </span> */}
              <img className=' h-20 w-20' src="./images/abbaslogo.png" alt="" />
            </div>
            
            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-8">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(item.href, item.name);
                  }}
                  className={`text-gray-300 hover:text-orange-500 transition-all duration-300 relative group ${
                    activeSection === item.name.toLowerCase() 
                      ? 'text-orange-500 scale-105' 
                      : ''
                  }`}
                >
                  {item.name}
                  <span 
                    className={`absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-orange-500 to-red-500 transition-all duration-300 ${
                      activeSection === item.name.toLowerCase()
                        ? 'w-full'
                        : 'w-0 group-hover:w-full'
                    }`}
                  ></span>
                  

                </a>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-gray-300 hover:text-orange-500 z-60 relative"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <div className="w-6 h-6 flex flex-col justify-center">
                <span className={`block h-0.5 w-6 bg-current transition-all duration-300 ${
                  isMenuOpen ? 'rotate-45 translate-y-1' : ''
                }`}></span>
                <span className={`block h-0.5 w-6 bg-current transition-all duration-300 mt-1 ${
                  isMenuOpen ? 'opacity-0' : ''
                }`}></span>
                <span className={`block h-0.5 w-6 bg-current transition-all duration-300 mt-1 ${
                  isMenuOpen ? '-rotate-45 -translate-y-1' : ''
                }`}></span>
              </div>
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div 
          className="fixed inset-0 z-40 bg-black/50 backdrop-blur-sm md:hidden"
          onClick={() => setIsMenuOpen(false)}
        />
      )}

      {/* Mobile Sliding Menu */}
      <div className={`fixed top-0 left-0 h-full w-80 bg-gradient-to-b from-gray-900 to-black z-50 md:hidden transform transition-transform duration-500 ease-in-out ${
        isMenuOpen ? 'translate-x-0' : '-translate-x-full'
      }`}>
        {/* Menu Header */}
        <div className="p-6 border-b border-gray-800">
          <div className="flex items-center justify-between">
            <div className="text-2xl font-bold">
              <span className="bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">
                MA
              </span>
            </div>
            <button
              className="text-gray-400 hover:text-orange-500 transition-colors duration-300"
              onClick={() => setIsMenuOpen(false)}
            >
              <div className="w-6 h-6 flex flex-col justify-center">
                <span className="block h-0.5 w-6 bg-current rotate-45 translate-y-1"></span>
                <span className="block h-0.5 w-6 bg-current -rotate-45 -translate-y-1"></span>
              </div>
            </button>
          </div>
        </div>

        {/* Menu Items */}
        <div className="py-6">
          {navItems.map((item, index) => (
            <a
              key={item.name}
              href={item.href}
              onClick={(e) => {
                e.preventDefault();
                handleNavClick(item.href, item.name);
              }}
              className={`block px-6 py-4 text-lg transition-all duration-300 relative group ${
                activeSection === item.name.toLowerCase()
                  ? 'text-orange-500 bg-orange-500/10 border-r-2 border-orange-500'
                  : 'text-gray-300 hover:text-orange-500 hover:bg-gray-800/50'
              }`}
              style={{
                animationDelay: `${index * 0.1}s`
              }}
            >
              <div className="flex items-center">
                {item.name}
                
                {/* Hover arrow */}
                <div className={`ml-auto transform transition-transform duration-300 ${
                  activeSection === item.name.toLowerCase() || 'group-hover:translate-x-1'
                } opacity-0 group-hover:opacity-100`}>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
              
              {/* Bottom border animation */}
              <div className={`absolute bottom-0 left-6 right-6 h-0.5 bg-gradient-to-r from-orange-500 to-red-500 transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100 ${
                activeSection === item.name.toLowerCase() ? 'scale-x-100' : ''
              }`}></div>
            </a>
          ))}
        </div>

        {/* Menu Footer */}
        <div className="absolute bottom-0 left-0 right-0 p-6 border-t border-gray-800">
          <div className="text-center text-gray-400 text-sm">
            <p className="mb-2">Made with <Heart className="w-4 h-4 text-red-500 inline" /> by MA</p>
            <div className="flex justify-center space-x-4">
              <Github className="w-5 h-5 hover:text-orange-500 cursor-pointer transition-colors duration-300" />
              <Linkedin className="w-5 h-5 hover:text-orange-500 cursor-pointer transition-colors duration-300" />
              <Mail className="w-5 h-5 hover:text-orange-500 cursor-pointer transition-colors duration-300" />
            </div>
          </div>
        </div>
      </div>


    </>
  );
};

export default Header;