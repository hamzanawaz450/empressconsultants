import { useState } from "react";
import { Link } from "react-router-dom";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="shadow-md top-0 z-50 bg-white">
      {/* Top: Large logo row */}
      <div className="container-custom py-4">
        <div className="flex flex-col items-center justify-center relative">
          <Link to="/" className="flex flex-col items-center group">
            <img
              src="/main logo.jpeg"
              alt="Empress Consultants Logo"
              className="w-28 h-28 md:w-36 md:h-36 object-contain"
            />
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-center" >
             The Empress Consultants
            </h1>
          </Link>

          {/* Mobile Menu Button stays on the right for small screens */}
          <div className="absolute right-0 md:hidden">
            <button
              className="p-2 relative z-50 focus:outline-none"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
              aria-expanded={isMenuOpen}
            >
              <div className="w-6 h-6 flex flex-col justify-center items-center">
                <span
                  className={`bg-gray-700 block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${
                    isMenuOpen
                      ? "rotate-45 translate-y-1.5"
                      : "-translate-y-0.5"
                  }`}
                ></span>
                <span
                  className={`bg-gray-700 block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm my-0.5 ${
                    isMenuOpen ? "opacity-0" : "opacity-100"
                  }`}
                ></span>
                <span
                  className={`bg-gray-700 block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${
                    isMenuOpen
                      ? "-rotate-45 -translate-y-1.5"
                      : "translate-y-0.5"
                  }`}
                ></span>
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* Bottom: Navigation bar (desktop and mobile collapsed) */}
      <nav className="border-t border-gray-200">
        <div className="container-custom">
          <div
            className="hidden md:flex items-center justify-evenly
 h-12 px-2"
          >
            <Link
              to="/home"
              className="px-6 py-3 text-gray-700 hover:text-primary-600 transition-colors duration-200"
            >
              Home
            </Link>
            <Link
              to="/about"
              className="px-6 py-3 text-gray-700 hover:text-primary-600 transition-colors duration-200"
            >
              About
            </Link>
            <div className="relative group">
              <Link
                to="/services"
                className="px-6 py-3 text-gray-700 hover:text-primary-600 transition-colors duration-200 flex items-center gap-1"
              >
                Services
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </Link>
              <div className="absolute left-0 mt-2 w-64 bg-white rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                <Link
                  to="/services/aba-therapy"
                  className="block px-4 py-3 text-gray-700 hover:bg-primary-50 hover:text-primary-600 transition-colors duration-200"
                >
                  ABA Therapy
                </Link>
                <Link
                  to="/services/supervision"
                  className="block px-4 py-3 text-gray-700 hover:bg-primary-50 hover:text-primary-600 transition-colors duration-200"
                >
                  Supervision (BCBA/LBA)
                </Link>
                <Link
                  to="/services/parent-training"
                  className="block px-4 py-3 text-gray-700 hover:bg-primary-50 hover:text-primary-600 transition-colors duration-200"
                >
                  Parent Training
                </Link>
                <Link
                  to="/services/impartial-hearing"
                  className="block px-4 py-3 text-gray-700 hover:bg-primary-50 hover:text-primary-600 transition-colors duration-200"
                >
                  Impartial Hearing Support
                </Link>
                <Link
                  to="/services/related-services"
                  className="block px-4 py-3 text-gray-700 hover:bg-primary-50 hover:text-primary-600 transition-colors duration-200"
                >
                  Related Service Coordination
                </Link>
              </div>
            </div>
            <Link to="/contact" className="ml-4 btn-primary">
              Contact
            </Link>
          </div>

          {/* Mobile Navigation with Slide Animation (same as before) */}
          <div
            className={`md:hidden border-t border-gray-200 overflow-hidden transition-all duration-300 ease-in-out ${
              isMenuOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
            }`}
          >
            <div className="px-4 py-4 space-y-1">
              <Link
                to="/home"
                className="block py-3 px-4 text-gray-700 hover:text-primary-600 hover:bg-primary-50 rounded-lg transition-all duration-200 transform hover:translate-x-1"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                to="/about"
                className="block py-3 px-4 text-gray-700 hover:text-primary-600 hover:bg-primary-50 rounded-lg transition-all duration-200 transform hover:translate-x-1"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </Link>
              <div className="py-2 px-4 text-sm font-semibold text-gray-500">
                Services
              </div>
              <Link
                to="/services/aba-therapy"
                className="block py-2 px-6 text-gray-700 hover:text-primary-600 hover:bg-primary-50 rounded-lg transition-all duration-200"
                onClick={() => setIsMenuOpen(false)}
              >
                ABA Therapy
              </Link>
              <Link
                to="/services/supervision"
                className="block py-2 px-6 text-gray-700 hover:text-primary-600 hover:bg-primary-50 rounded-lg transition-all duration-200"
                onClick={() => setIsMenuOpen(false)}
              >
                Supervision (BCBA/LBA)
              </Link>
              <Link
                to="/services/parent-training"
                className="block py-2 px-6 text-gray-700 hover:text-primary-600 hover:bg-primary-50 rounded-lg transition-all duration-200"
                onClick={() => setIsMenuOpen(false)}
              >
                Parent Training
              </Link>
              <Link
                to="/services/impartial-hearing"
                className="block py-2 px-6 text-gray-700 hover:text-primary-600 hover:bg-primary-50 rounded-lg transition-colors duration-200"
                onClick={() => setIsMenuOpen(false)}
              >
                Impartial Hearing Support
              </Link>
              <Link
                to="/services/related-services"
                className="block py-2 px-6 text-gray-700 hover:text-primary-600 hover:bg-primary-50 rounded-lg transition-colors duration-200"
                onClick={() => setIsMenuOpen(false)}
              >
                Related Service Coordination
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
        </div>
      </nav>
    </header>
  );
}
