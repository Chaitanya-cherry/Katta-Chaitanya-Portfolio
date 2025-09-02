import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);
  const location = useLocation();
  
  const toggleMenu = () => setIsOpen(!isOpen);
  
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);
  
  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Skills", path: "/skills" },
    { name: "Projects", path: "/projects" },
    { name: "Contact", path: "/contact" }
  ];
  
  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrollPosition > 50 ? "backdrop-blur-lg bg-cyber-dark/80" : ""}`}>
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-neon-purple to-neon-blue flex items-center justify-center text-white font-bold text-xl animate-pulse-neon">
              KC
            </div>
            <span className="text-xl font-bold neon-text">K. Chaitanya</span>
          </Link>
          
          <div className="lg:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleMenu}
              className="text-neon-purple hover:bg-transparent"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </Button>
          </div>
          
          <div className="hidden lg:flex items-center gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`py-2 px-3 rounded-md transition-all duration-300 hover:bg-neon-purple/10 ${
                  isActive(link.path)
                    ? "text-neon-purple neon-text"
                    : "text-white hover:text-neon-purple"
                }`}
              >
                {link.name}
              </Link>
            ))}
            <Link
              to="/contact"
              className="ml-4 bg-neon-purple/10 hover:bg-neon-purple/20 text-neon-purple border border-neon-purple rounded-md py-2 px-4 transition-all duration-300 animate-pulse-neon"
            >
              Hire Me
            </Link>
          </div>
        </div>
        
        {isOpen && (
          <div className="lg:hidden mt-4 bg-cyber-black/90 backdrop-blur-lg border border-neon-purple/20 rounded-lg overflow-hidden animate-slideDown">
            <div className="flex flex-col p-4">
              {navLinks.map((link, index) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`py-3 px-4 rounded-md transition-all duration-300 hover:bg-neon-purple/10 ${
                    isActive(link.path)
                      ? "text-neon-purple neon-text"
                      : "text-white hover:text-neon-purple"
                  } ${index !== 0 ? "mt-1" : ""}`}
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
              <Link
                to="/contact"
                className="mt-3 bg-neon-purple/10 hover:bg-neon-purple/20 text-center text-neon-purple border border-neon-purple rounded-md py-2 px-4 transition-all duration-300"
                onClick={() => setIsOpen(false)}
              >
                Hire Me
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Navbar;
