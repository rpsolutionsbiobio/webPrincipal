import { Code2, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <nav className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-lg border-b border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center gap-2">
            <Code2 className="h-8 w-8 text-primary" />
            <span className="text-xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              RP Solutions  Biobio
            </span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            <button onClick={() => scrollToSection('inicio')} className="text-foreground/80 hover:text-primary transition-colors">
              Inicio
            </button>
            <button onClick={() => scrollToSection('servicios')} className="text-foreground/80 hover:text-primary transition-colors">
              Servicios
            </button>
            <button onClick={() => scrollToSection('portafolio')} className="text-foreground/80 hover:text-primary transition-colors">
              Portafolio
            </button>
            <button onClick={() => scrollToSection('tecnologias')} className="text-foreground/80 hover:text-primary transition-colors">
              Tecnologías
            </button>
            <button onClick={() => scrollToSection('contacto')} className="text-foreground/80 hover:text-primary transition-colors">
              Contacto
            </button>
            <Button onClick={() => scrollToSection('contacto')} className="bg-gradient-to-r from-primary to-secondary hover:opacity-90">
              Comenzar Proyecto
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-foreground p-2"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 space-y-4 border-t border-border">
            <button onClick={() => scrollToSection('inicio')} className="block w-full text-left px-4 py-2 text-foreground/80 hover:text-primary transition-colors">
              Inicio
            </button>
            <button onClick={() => scrollToSection('servicios')} className="block w-full text-left px-4 py-2 text-foreground/80 hover:text-primary transition-colors">
              Servicios
            </button>
            <button onClick={() => scrollToSection('portafolio')} className="block w-full text-left px-4 py-2 text-foreground/80 hover:text-primary transition-colors">
              Portafolio
            </button>
            <button onClick={() => scrollToSection('tecnologias')} className="block w-full text-left px-4 py-2 text-foreground/80 hover:text-primary transition-colors">
              Tecnologías
            </button>
            <button onClick={() => scrollToSection('contacto')} className="block w-full text-left px-4 py-2 text-foreground/80 hover:text-primary transition-colors">
              Contacto
            </button>
            <div className="px-4">
              <Button onClick={() => scrollToSection('contacto')} className="w-full bg-gradient-to-r from-primary to-secondary hover:opacity-90">
                Comenzar Proyecto
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
