import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { label: "Funcionalidades", href: "#funcionalidades" },
    { label: "Como Funciona", href: "#como-funciona" },
    { label: "Por Que Escolher", href: "#por-que-escolher" },
    { label: "Depoimentos", href: "#depoimentos" },
    { label: "FAQs", href: "#faqs" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-xl border-b border-border-muted">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <div className="flex items-center">
            <div className="text-xl lg:text-2xl font-bold gradient-text">
              AppFlow
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-muted-foreground hover:text-foreground transition-colors duration-200"
              >
                {item.label}
              </a>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden lg:flex">
            <Button className="bg-primary hover:bg-primary-hover text-primary-foreground font-medium">
              Baixar Agora
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="w-6 h-6 text-foreground" />
            ) : (
              <Menu className="w-6 h-6 text-foreground" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden py-4 border-t border-border-muted">
            <div className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="text-muted-foreground hover:text-foreground transition-colors duration-200 py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </a>
              ))}
              <Button className="bg-primary hover:bg-primary-hover text-primary-foreground font-medium mt-4">
                Baixar Agora
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;