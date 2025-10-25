import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Hero = () => {
  const [showText, setShowText] = useState(true);
  const [showLogo, setShowLogo] = useState(false);

  useEffect(() => {
    const textTimer = setTimeout(() => {
      setShowText(false);
      setTimeout(() => setShowLogo(true), 500);
    }, 3000);

    return () => clearTimeout(textTimer);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-hero">
      {/* Animated Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNnptMCAxMmMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNnoiIGZpbGw9IiNmZmYiLz48L2c+PC9zdmc+')] animate-float"></div>
      </div>

      <div className="container mx-auto px-4 text-center relative z-10">
        <AnimatePresence mode="wait">
          {showText && (
            <motion.div
              key="text"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.2 }}
              transition={{ duration: 0.8 }}
              className="text-white"
            >
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-heading font-bold mb-6 animate-glow">
                25 Years of God's Faithfulness
              </h1>
            </motion.div>
          )}

          {showLogo && (
            <motion.div
              key="logo"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="text-white"
            >
              <h1 className="text-6xl md:text-8xl lg:text-9xl font-heading font-bold mb-8 text-gradient-gold">
                Everspring International
              </h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.6 }}
                className="text-xl md:text-3xl font-light text-white/90 max-w-3xl mx-auto"
              >
                Serving with compassion and faith since 2000
              </motion.p>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.6 }}
                className="mt-12 flex flex-col sm:flex-row gap-4 justify-center"
              >
                <a
                  href="#about"
                  className="bg-gold hover:bg-gold-dark text-gold-foreground px-8 py-4 rounded-lg font-semibold text-lg hover-glow transition-all"
                >
                  Our Story
                </a>
                <a
                  href="/donate"
                  className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-primary px-8 py-4 rounded-lg font-semibold text-lg transition-all"
                >
                  Make a Difference
                </a>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="w-6 h-10 border-2 border-white rounded-full flex items-start justify-center p-2"
        >
          <div className="w-1 h-3 bg-white rounded-full"></div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
