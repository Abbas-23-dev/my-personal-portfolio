import { Mail, Github, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-black border-t border-gray-800 py-6">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          {/* Copyright */}
          <p className="text-gray-400 text-sm text-center md:text-left">
            © {new Date().getFullYear()} Muhammad Abbas — All Rights Reserved.
          </p>

          {/* Social Icons */}
          <div className="flex space-x-6">
            <a
              href="https://github.com/your-username"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-orange-500 transition-colors duration-300"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href="https://www.linkedin.com/in/abbas-khan-013653351"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-orange-500 transition-colors duration-300"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href="mailto:your.email@example.com"
              className="text-gray-400 hover:text-orange-500 transition-colors duration-300"
            >
              <Mail className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
