import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Stethoscope } from "lucide-react";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-border/50 shadow-sm">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-gradient-hero flex items-center justify-center">
              <Stethoscope className="w-6 h-6 text-white" />
            </div>
            <div>
              <span className="text-xl font-bold text-foreground">Foster</span>
              <span className="text-xl font-light text-primary">AI</span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection('solutions')}
              className="text-muted-foreground hover:text-primary transition-colors duration-200"
            >
              Solutions
            </button>
            <button 
              onClick={() => scrollToSection('security')}
              className="text-muted-foreground hover:text-primary transition-colors duration-200"
            >
              Security
            </button>
            <button 
              onClick={() => scrollToSection('performance')}
              className="text-muted-foreground hover:text-primary transition-colors duration-200"
            >
              Performance
            </button>
            <button 
              onClick={() => scrollToSection('events')}
              className="text-muted-foreground hover:text-primary transition-colors duration-200"
            >
              Events
            </button>
            <Button 
              onClick={() => scrollToSection('contact')}
              className="bg-gradient-hero hover:shadow-hover transition-all duration-300"
            >
              Get Started
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={toggleMenu}
              className="text-foreground"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-border/50">
            <div className="flex flex-col space-y-4">
              <button 
                onClick={() => scrollToSection('solutions')}
                className="text-left text-muted-foreground hover:text-primary transition-colors duration-200"
              >
                Solutions
              </button>
              <button 
                onClick={() => scrollToSection('security')}
                className="text-left text-muted-foreground hover:text-primary transition-colors duration-200"
              >
                Security
              </button>
              <button 
                onClick={() => scrollToSection('performance')}
                className="text-left text-muted-foreground hover:text-primary transition-colors duration-200"
              >
                Performance
              </button>
              <button 
                onClick={() => scrollToSection('events')}
                className="text-left text-muted-foreground hover:text-primary transition-colors duration-200"
              >
                Events
              </button>
              <Button 
                onClick={() => scrollToSection('contact')}
                className="bg-gradient-hero hover:shadow-hover transition-all duration-300 w-fit"
              >
                Get Started
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;