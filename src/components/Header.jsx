import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="shadow-md sticky top-0 z-50">
      <nav className="container-custom">
        <div className="flex items-center justify-between h-16 px-4 sm:px-6">
          <Link to="/" className="flex items-center space-x-2 group">
            <img 
              src="/e39aef7b-089f-4323-baa9-6c90a0398d75.jpg" 
              alt="Empress Consultants Logo" 
              className="w-10 h-10 sm:w-12 sm:h-12 object-contain transition-transform duration-300 group-hover:scale-105"
            />
            <span className="text-base sm:text-xl font-bold text-gray-900">Empress Consultants</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            <Link to="/" className="text-gray-700 hover:text-primary-600 transition-colors duration-200">Home</Link>
            <Link to="/services" className="text-gray-700 hover:text-primary-600 transition-colors duration-200">Services</Link>
            <Link to="/schools" className="text-gray-700 hover:text-primary-600 transition-colors duration-200">For Schools</Link>
            <Link to="/legal" className="text-gray-700 hover:text-primary-600 transition-colors duration-200">Legal & Advocacy</Link>
            <Link to="/about" className="text-gray-700 hover:text-primary-600 transition-colors duration-200">About</Link>
            <Link to="/careers" className="text-gray-700 hover:text-primary-600 transition-colors duration-200">Careers</Link>
            <Link to="/resources" className="text-gray-700 hover:text-primary-600 transition-colors duration-200">Resources</Link>
            <Link to="/contact" className="btn-primary">Contact</Link>
          </div>

          {/* Mobile Menu Button with Animation */}
          <button
            className="md:hidden p-2 relative z-50 focus:outline-none"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
            aria-expanded={isMenuOpen}
          >
            <div className="w-6 h-6 flex flex-col justify-center items-center">
              <span 
                className={`bg-gray-700 block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${
                  isMenuOpen ? 'rotate-45 translate-y-1.5' : '-translate-y-0.5'
                }`}
              ></span>
              <span 
                className={`bg-gray-700 block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm my-0.5 ${
                  isMenuOpen ? 'opacity-0' : 'opacity-100'
                }`}
              ></span>
              <span 
                className={`bg-gray-700 block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${
                  isMenuOpen ? '-rotate-45 -translate-y-1.5' : 'translate-y-0.5'
                }`}
              ></span>
            </div>
          </button>
        </div>

        {/* Mobile Navigation with Slide Animation */}
        <div 
          className={`md:hidden border-t border-gray-200 overflow-hidden transition-all duration-300 ease-in-out ${
            isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <div className="px-4 py-4 space-y-1">
            <Link 
              to="/" 
              className="block py-3 px-4 text-gray-700 hover:text-primary-600 hover:bg-primary-50 rounded-lg transition-all duration-200 transform hover:translate-x-1" 
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link 
              to="/services" 
              className="block py-3 px-4 text-gray-700 hover:text-primary-600 hover:bg-primary-50 rounded-lg transition-all duration-200 transform hover:translate-x-1" 
              onClick={() => setIsMenuOpen(false)}
            >
              Services
            </Link>
            <Link 
              to="/schools" 
              className="block py-3 px-4 text-gray-700 hover:text-primary-600 hover:bg-primary-50 rounded-lg transition-all duration-200 transform hover:translate-x-1" 
              onClick={() => setIsMenuOpen(false)}
            >
              For Schools
            </Link>
            <Link 
              to="/legal" 
              className="block py-3 px-4 text-gray-700 hover:text-primary-600 hover:bg-primary-50 rounded-lg transition-all duration-200 transform hover:translate-x-1" 
              onClick={() => setIsMenuOpen(false)}
            >
              Legal & Advocacy
            </Link>
            <Link 
              to="/about" 
              className="block py-3 px-4 text-gray-700 hover:text-primary-600 hover:bg-primary-50 rounded-lg transition-all duration-200 transform hover:translate-x-1" 
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </Link>
            <Link 
              to="/careers" 
              className="block py-3 px-4 text-gray-700 hover:text-primary-600 hover:bg-primary-50 rounded-lg transition-all duration-200 transform hover:translate-x-1" 
              onClick={() => setIsMenuOpen(false)}
            >
              Careers
            </Link>
            <Link 
              to="/resources" 
              className="block py-3 px-4 text-gray-700 hover:text-primary-600 hover:bg-primary-50 rounded-lg transition-all duration-200 transform hover:translate-x-1" 
              onClick={() => setIsMenuOpen(false)}
            >
              Resources
            </Link>
            <Link 
              to="/contact" 
              className="btn-primary block text-center py-3 mt-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
}

