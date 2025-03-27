
import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6 py-4 ${
        isScrolled
          ? "bg-white/80 backdrop-blur-md shadow-md"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto">
        <div className="flex items-center justify-between">
          <NavLink to="/" className="flex items-center gap-2">
            <span className="font-playfair text-2xl md:text-2xl font-bold tracking-tight bg-gradient-to-r from-cafe-turquoise to-cafe-lightTurquoise bg-clip-text text-transparent">
              Ciel Café
            </span>
          </NavLink>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <NavLink
              to="/"
              className={({ isActive }) =>
                `subtle-underline text-foreground transition-all duration-200 py-2 ${
                  isActive ? "after:scale-x-100" : ""
                }`
              }
            >
              Home
            </NavLink>
            <NavLink
              to="/menu"
              className={({ isActive }) =>
                `subtle-underline text-foreground transition-all duration-200 py-2 ${
                  isActive ? "after:scale-x-100" : ""
                }`
              }
            >
              Menu
            </NavLink>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                `subtle-underline text-foreground transition-all duration-200 py-2 ${
                  isActive ? "after:scale-x-100" : ""
                }`
              }
            >
              About
            </NavLink>
            <NavLink
              to="/images"
              className={({ isActive }) =>
                `subtle-underline text-foreground transition-all duration-200 py-2 ${
                  isActive ? "after:scale-x-100" : ""
                }`
              }
            >
              Images
            </NavLink>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden flex items-center text-foreground"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden absolute left-0 right-0 top-full p-6 bg-white/95 backdrop-blur-md shadow-lg transform transition-all duration-300 ease-in-out ${
            isMenuOpen
              ? "translate-y-0 opacity-100"
              : "-translate-y-10 opacity-0 pointer-events-none"
          }`}
        >
          <div className="flex flex-col space-y-4">
            <NavLink
              to="/"
              className={({ isActive }) =>
                `text-foreground text-lg transition-colors ${
                  isActive ? "text-cafe-turquoise font-semibold" : ""
                }`
              }
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </NavLink>
            <NavLink
              to="/menu"
              className={({ isActive }) =>
                `text-foreground text-lg transition-colors ${
                  isActive ? "text-cafe-turquoise font-semibold" : ""
                }`
              }
              onClick={() => setIsMenuOpen(false)}
            >
              Menu
            </NavLink>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                `text-foreground text-lg transition-colors ${
                  isActive ? "text-cafe-turquoise font-semibold" : ""
                }`
              }
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </NavLink>
            <NavLink
              to="/images"
              className={({ isActive }) =>
                `text-foreground text-lg transition-colors ${
                  isActive ? "text-cafe-turquoise font-semibold" : ""
                }`
              }
              onClick={() => setIsMenuOpen(false)}
            >
              Images
            </NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
