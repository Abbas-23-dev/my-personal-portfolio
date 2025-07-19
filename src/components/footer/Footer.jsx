import { Mail, Github, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-black border-t border-gray-800 py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-gray-400 mb-4 md:mb-0">
            © 2024 Muhammad Abbas. All rights reserved.
          </div>
          <div className="flex space-x-6">
            <a href="#" className="text-gray-400 hover:text-orange-500 transition-colors duration-300">
              <Github className="w-5 h-5" />
            </a>
            <a href="#" className="text-gray-400 hover:text-orange-500 transition-colors duration-300">
              <Linkedin className="w-5 h-5" />
            </a>
            <a href="mailto:your.email@example.com" className="text-gray-400 hover:text-orange-500 transition-colors duration-300">
              <Mail className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;