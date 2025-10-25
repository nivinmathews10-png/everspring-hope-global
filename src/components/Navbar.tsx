import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isHomesDropdownOpen, setIsHomesDropdownOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Genesis", path: "/genesis" },
    {
      name: "Homes",
      path: "#",
      dropdown: [
        { name: "Bangalore", path: "/homes/bangalore" },
        { name: "Bhadrachalam", path: "/homes/bhadrachalam" },
        { name: "Raibag", path: "/homes/raibag" },
        { name: "Ambur", path: "/homes/ambur" },
      ],
    },
    { name: "Elder Care", path: "/elder-care" },
    { name: "Special Care", path: "/special-care" },
    { name: "Jordan Community", path: "/jordan-community" },
    { name: "Church Planting", path: "/church-planting" },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-primary/95 backdrop-blur-md shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3">
            <div className="text-2xl font-heading font-bold text-white">
              Everspring International
            </div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link) =>
              link.dropdown ? (
                <div
                  key={link.name}
                  className="relative"
                  onMouseEnter={() => setIsHomesDropdownOpen(true)}
                  onMouseLeave={() => setIsHomesDropdownOpen(false)}
                >
                  <button className="flex items-center space-x-1 text-white hover:text-gold transition-colors font-medium">
                    <span>{link.name}</span>
                    <ChevronDown className="h-4 w-4" />
                  </button>
                  <AnimatePresence>
                    {isHomesDropdownOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        className="absolute top-full left-0 mt-2 w-48 bg-card shadow-elegant rounded-lg overflow-hidden z-50"
                      >
                        {link.dropdown.map((item) => (
                          <Link
                            key={item.name}
                            to={item.path}
                            className="block px-4 py-3 text-foreground hover:bg-secondary transition-colors"
                          >
                            {item.name}
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ) : (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`text-white hover:text-gold transition-colors font-medium ${
                    location.pathname === link.path ? "text-gold" : ""
                  }`}
                >
                  {link.name}
                </Link>
              )
            )}
            <Link to="/donate">
              <Button className="bg-gold hover:bg-gold-dark text-gold-foreground font-semibold px-6 hover-glow">
                Donate
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-white"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden bg-primary/95 backdrop-blur-md pb-6"
            >
              {navLinks.map((link) =>
                link.dropdown ? (
                  <div key={link.name}>
                    <button
                      onClick={() => setIsHomesDropdownOpen(!isHomesDropdownOpen)}
                      className="w-full text-left px-4 py-3 text-white hover:text-gold transition-colors flex items-center justify-between"
                    >
                      <span>{link.name}</span>
                      <ChevronDown
                        className={`h-4 w-4 transition-transform ${
                          isHomesDropdownOpen ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                    {isHomesDropdownOpen && (
                      <div className="bg-primary-dark">
                        {link.dropdown.map((item) => (
                          <Link
                            key={item.name}
                            to={item.path}
                            className="block px-8 py-2 text-white/90 hover:text-gold transition-colors"
                            onClick={() => setIsMobileMenuOpen(false)}
                          >
                            {item.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    key={link.name}
                    to={link.path}
                    className="block px-4 py-3 text-white hover:text-gold transition-colors"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {link.name}
                  </Link>
                )
              )}
              <div className="px-4 pt-3">
                <Link to="/donate" onClick={() => setIsMobileMenuOpen(false)}>
                  <Button className="w-full bg-gold hover:bg-gold-dark text-gold-foreground font-semibold">
                    Donate
                  </Button>
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
};

export default Navbar;
