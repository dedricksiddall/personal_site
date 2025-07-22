import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navigation() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offsetTop = element.offsetTop - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm border-b border-gray-200 z-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <h1 className="text-xl font-bold text-theme-secondary">Dedrick Siddall</h1>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <button 
                onClick={() => scrollToSection('introduction')}
                className="text-gray-700 hover:text-theme-primary transition-colors duration-200 px-3 py-2 rounded-md text-sm font-medium"
              >
                Introduction
              </button>
              <button 
                onClick={() => scrollToSection('resume')}
                className="text-gray-700 hover:text-theme-primary transition-colors duration-200 px-3 py-2 rounded-md text-sm font-medium"
              >
                Resume
              </button>
              <button 
                onClick={() => scrollToSection('portfolio')}
                className="text-gray-700 hover:text-theme-primary transition-colors duration-200 px-3 py-2 rounded-md text-sm font-medium"
              >
                Portfolio
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="bg-theme-primary text-white hover:bg-blue-700 transition-colors duration-200 px-4 py-2 rounded-md text-sm font-medium"
              >
                Contact
              </button>
            </div>
          </div>
          
          {/* Mobile menu button */}
          <div className="md:hidden">
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-gray-700 hover:text-theme-primary focus:outline-none focus:text-theme-primary"
            >
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile Navigation Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <button 
              onClick={() => scrollToSection('introduction')}
              className="text-gray-700 hover:text-theme-primary hover:bg-gray-50 block px-3 py-2 rounded-md text-base font-medium w-full text-left"
            >
              Introduction
            </button>
            <button 
              onClick={() => scrollToSection('resume')}
              className="text-gray-700 hover:text-theme-primary hover:bg-gray-50 block px-3 py-2 rounded-md text-base font-medium w-full text-left"
            >
              Resume
            </button>
            <button 
              onClick={() => scrollToSection('portfolio')}
              className="text-gray-700 hover:text-theme-primary hover:bg-gray-50 block px-3 py-2 rounded-md text-base font-medium w-full text-left"
            >
              Portfolio
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="text-gray-700 hover:text-theme-primary hover:bg-gray-50 block px-3 py-2 rounded-md text-base font-medium w-full text-left"
            >
              Contact
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
