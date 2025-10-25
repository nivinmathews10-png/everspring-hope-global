import { Link } from "react-router-dom";
import { Facebook, Instagram, Twitter, Mail, Phone, MapPin, ArrowUp } from "lucide-react";
import { motion } from "framer-motion";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-primary text-white relative">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* About */}
          <div>
            <h3 className="text-2xl font-heading font-bold mb-4 text-gold">
              Everspring International
            </h3>
            <p className="text-white/80 mb-4">
              Empowering vulnerable children and communities across India through holistic care,
              education, and spiritual guidance since 2000.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/genesis" className="text-white/80 hover:text-gold transition-colors">
                  Genesis
                </Link>
              </li>
              <li>
                <Link to="/elder-care" className="text-white/80 hover:text-gold transition-colors">
                  Elder Care
                </Link>
              </li>
              <li>
                <Link
                  to="/special-care"
                  className="text-white/80 hover:text-gold transition-colors"
                >
                  Special Care
                </Link>
              </li>
              <li>
                <Link
                  to="/jordan-community"
                  className="text-white/80 hover:text-gold transition-colors"
                >
                  Jordan Community
                </Link>
              </li>
            </ul>
          </div>

          {/* Homes */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Our Homes</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/homes/bangalore"
                  className="text-white/80 hover:text-gold transition-colors"
                >
                  Bangalore
                </Link>
              </li>
              <li>
                <Link
                  to="/homes/bhadrachalam"
                  className="text-white/80 hover:text-gold transition-colors"
                >
                  Bhadrachalam
                </Link>
              </li>
              <li>
                <Link
                  to="/homes/raibag"
                  className="text-white/80 hover:text-gold transition-colors"
                >
                  Raibag
                </Link>
              </li>
              <li>
                <Link
                  to="/homes/ambur"
                  className="text-white/80 hover:text-gold transition-colors"
                >
                  Ambur
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-start space-x-2">
                <MapPin className="h-5 w-5 text-gold mt-1 flex-shrink-0" />
                <span className="text-white/80">Bengaluru, Karnataka, India</span>
              </li>
              <li className="flex items-center space-x-2">
                <Phone className="h-5 w-5 text-gold flex-shrink-0" />
                <span className="text-white/80">+91 XXX XXX XXXX</span>
              </li>
              <li className="flex items-center space-x-2">
                <Mail className="h-5 w-5 text-gold flex-shrink-0" />
                <span className="text-white/80">info@everspring.org</span>
              </li>
            </ul>

            {/* Social Media */}
            <div className="flex space-x-4 mt-6">
              <a
                href="#"
                className="bg-white/10 hover:bg-gold p-2 rounded-full transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="bg-white/10 hover:bg-gold p-2 rounded-full transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="bg-white/10 hover:bg-gold p-2 rounded-full transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/20 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-white/60 text-sm">
            © {new Date().getFullYear()} Everspring International. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link to="/privacy" className="text-white/60 hover:text-gold text-sm transition-colors">
              Privacy Policy
            </Link>
            <Link to="/terms" className="text-white/60 hover:text-gold text-sm transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>

      {/* Scroll to Top Button */}
      <motion.button
        onClick={scrollToTop}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="fixed bottom-8 right-8 bg-gold hover:bg-gold-dark text-gold-foreground p-3 rounded-full shadow-lg hover-glow z-40"
        aria-label="Scroll to top"
      >
        <ArrowUp className="h-6 w-6" />
      </motion.button>
    </footer>
  );
};

export default Footer;
