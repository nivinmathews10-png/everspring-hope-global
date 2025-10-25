import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Hero = () => {
  const [showText, setShowText] = useState(true);
  const [showLogo, setShowLogo] = useState(false);
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    const textTimer = setTimeout(() => {
      setShowText(false);
      setTimeout(() => {
        setShowLogo(true);
        setTimeout(() => setShowContent(true), 800);
      }, 500);
    }, 3000);

    return () => clearTimeout(textTimer);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('https://blog.cph.org/hs-fs/hubfs/_blogs/CPH_blog/Serve/2021/09/young-adults-comunity.jpg?width=1000&height=561&name=young-adults-comunity.jpg')",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-green-900/70 via-green-800/50 to-green-900/70" />
      </div>

      {/* Animated Floating Particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-white/20 rounded-full"
            initial={{
              x: Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1000),
              y: Math.random() * (typeof window !== 'undefined' ? window.innerHeight : 1000),
            }}
            animate={{
              y: [null, Math.random() * -100 - 50],
              x: [null, Math.random() * 100 - 50],
              opacity: [0.2, 0.5, 0],
            }}
            transition={{
              duration: Math.random() * 10 + 10,
              repeat: Infinity,
              delay: Math.random() * 5,
            }}
          />
        ))}
      </div>

      {/* Flying Doves Animation */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={`dove-${i}`}
            className="absolute"
            initial={{
              x: -100,
              y: Math.random() * 300 + 100,
            }}
            animate={{
              x: typeof window !== 'undefined' ? window.innerWidth + 100 : 1200,
              y: [
                null,
                Math.random() * 50 - 25,
                Math.random() * 50 - 25,
                Math.random() * 50 - 25,
              ],
            }}
            transition={{
              duration: 25 + i * 5,
              repeat: Infinity,
              delay: i * 8,
              ease: "linear",
            }}
          >
            <svg
              width="40"
              height="40"
              viewBox="0 0 512 512"
              className="text-white/60 drop-shadow-lg"
              fill="currentColor"
            >
              <motion.path
                d="M160.8 96.5c14 17 31 30.9 49.5 42.2c25.9 15.8 53.7 25.9 77.7 31.6V138.8C265.8 108.5 250 71.5 248.6 28c-.4-11.3-7.5-21.5-18.4-24.4c-7.6-2-15.8-.2-21 5.8c-13.3 15.4-32.7 44.6-48.4 87.2zM320 144v30.6l0 0v1.3l0 0 0 0c0 10.5 1.1 20.5 3.3 30.1c.8 3.5 1.7 6.9 2.7 10.3c0 .1 .1 .2 .1 .3c9.2 29.5 26.5 56.9 49.5 81.6c24.5 26.3 55.5 49.2 92.6 68.1c-10.1-18.5-20.4-38.1-30.3-58.9c-.1-.3-.3-.6-.4-.9c-11.7-24.8-22.9-51.4-33.2-79.5c-12.5-34-23.5-71.8-31.5-111.6c-1.9-9.8-10.7-16.3-20.4-16.3c-9.3 0-17.5 6.2-20.3 15.1c-1.9 6.2-3.6 12.4-5.1 18.7c-4.1 16.8-6.9 34.5-8.5 52.6c-1.5 16.8-2.3 34.3-2.3 52.5v.5zM53.5 402.6c5.4-14.4 10.7-28.2 15.7-41.1c20.8-53.6 36.3-94.8 38.4-107.2c.8-4.5 3.8-8.5 7.9-10.4s8.9-1.8 12.9 .8c16.8 11.1 33.4 24.6 49.4 40.3c14.5 14.2 28.5 30.1 41.9 47.3c2.4 3.1 6.2 4.9 10.2 4.9c3.4 0 6.7-1.4 9.1-3.9c18.9-19.9 40.1-37.5 63.4-52.6c5.1-3.3 8.2-8.9 8.2-15v-16.8c-22.8-10-42.3-22.6-57.9-37.3c-21.2-20-36.1-44.3-44.3-72.3c-9.5 27.5-22.5 53.4-38.3 77.7C142.4 264.5 98.7 303 48.1 339.6c-8.7 6.3-11.5 17.5-6.8 26.4c2.9 5.6 7.1 10.8 12.2 15.6zM464 256c-36.8-18.3-68.1-40.4-93.2-65.5c-25-25-44.9-53.2-59.4-83.8c-5.4 43.4-17.4 84.2-34.5 119.6c-11.4 23.5-24.9 45.6-40.1 66.1c-31.6 42.6-71.6 79.6-117.8 109.6c-9.7 6.3-12.6 19.1-6.5 29.1c1.2 1.9 2.6 3.7 4.2 5.3c27.6 27.6 70.3 45.8 122.4 45.8c28.2 0 55.2-4.7 80.2-13.1c49.7-16.5 93.7-46.3 124-83.9c21.6-26.9 37.3-58.1 44.8-92.4c2.4-11.2-6.8-21.5-18.1-20.8z"
                animate={{
                  d: [
                    "M160.8 96.5c14 17 31 30.9 49.5 42.2c25.9 15.8 53.7 25.9 77.7 31.6V138.8C265.8 108.5 250 71.5 248.6 28c-.4-11.3-7.5-21.5-18.4-24.4c-7.6-2-15.8-.2-21 5.8c-13.3 15.4-32.7 44.6-48.4 87.2zM320 144v30.6l0 0v1.3l0 0 0 0c0 10.5 1.1 20.5 3.3 30.1c.8 3.5 1.7 6.9 2.7 10.3c0 .1 .1 .2 .1 .3c9.2 29.5 26.5 56.9 49.5 81.6c24.5 26.3 55.5 49.2 92.6 68.1c-10.1-18.5-20.4-38.1-30.3-58.9c-.1-.3-.3-.6-.4-.9c-11.7-24.8-22.9-51.4-33.2-79.5c-12.5-34-23.5-71.8-31.5-111.6c-1.9-9.8-10.7-16.3-20.4-16.3c-9.3 0-17.5 6.2-20.3 15.1c-1.9 6.2-3.6 12.4-5.1 18.7c-4.1 16.8-6.9 34.5-8.5 52.6c-1.5 16.8-2.3 34.3-2.3 52.5v.5zM53.5 402.6c5.4-14.4 10.7-28.2 15.7-41.1c20.8-53.6 36.3-94.8 38.4-107.2c.8-4.5 3.8-8.5 7.9-10.4s8.9-1.8 12.9 .8c16.8 11.1 33.4 24.6 49.4 40.3c14.5 14.2 28.5 30.1 41.9 47.3c2.4 3.1 6.2 4.9 10.2 4.9c3.4 0 6.7-1.4 9.1-3.9c18.9-19.9 40.1-37.5 63.4-52.6c5.1-3.3 8.2-8.9 8.2-15v-16.8c-22.8-10-42.3-22.6-57.9-37.3c-21.2-20-36.1-44.3-44.3-72.3c-9.5 27.5-22.5 53.4-38.3 77.7C142.4 264.5 98.7 303 48.1 339.6c-8.7 6.3-11.5 17.5-6.8 26.4c2.9 5.6 7.1 10.8 12.2 15.6zM464 256c-36.8-18.3-68.1-40.4-93.2-65.5c-25-25-44.9-53.2-59.4-83.8c-5.4 43.4-17.4 84.2-34.5 119.6c-11.4 23.5-24.9 45.6-40.1 66.1c-31.6 42.6-71.6 79.6-117.8 109.6c-9.7 6.3-12.6 19.1-6.5 29.1c1.2 1.9 2.6 3.7 4.2 5.3c27.6 27.6 70.3 45.8 122.4 45.8c28.2 0 55.2-4.7 80.2-13.1c49.7-16.5 93.7-46.3 124-83.9c21.6-26.9 37.3-58.1 44.8-92.4c2.4-11.2-6.8-21.5-18.1-20.8z",
                    "M160.8 96.5c14 17 31 30.9 49.5 42.2c25.9 15.8 53.7 25.9 77.7 31.6V138.8C265.8 108.5 250 71.5 248.6 28c-.4-11.3-7.5-21.5-18.4-24.4c-7.6-2-15.8-.2-21 5.8c-13.3 15.4-32.7 44.6-48.4 87.2zM330 154v30.6l0 0v1.3l0 0 0 0c0 10.5 1.1 20.5 3.3 30.1c.8 3.5 1.7 6.9 2.7 10.3c0 .1 .1 .2 .1 .3c9.2 29.5 26.5 56.9 49.5 81.6c24.5 26.3 55.5 49.2 92.6 68.1c-10.1-18.5-20.4-38.1-30.3-58.9c-.1-.3-.3-.6-.4-.9c-11.7-24.8-22.9-51.4-33.2-79.5c-12.5-34-23.5-71.8-31.5-111.6c-1.9-9.8-10.7-16.3-20.4-16.3c-9.3 0-17.5 6.2-20.3 15.1c-1.9 6.2-3.6 12.4-5.1 18.7c-4.1 16.8-6.9 34.5-8.5 52.6c-1.5 16.8-2.3 34.3-2.3 52.5v.5zM53.5 402.6c5.4-14.4 10.7-28.2 15.7-41.1c20.8-53.6 36.3-94.8 38.4-107.2c.8-4.5 3.8-8.5 7.9-10.4s8.9-1.8 12.9 .8c16.8 11.1 33.4 24.6 49.4 40.3c14.5 14.2 28.5 30.1 41.9 47.3c2.4 3.1 6.2 4.9 10.2 4.9c3.4 0 6.7-1.4 9.1-3.9c18.9-19.9 40.1-37.5 63.4-52.6c5.1-3.3 8.2-8.9 8.2-15v-16.8c-22.8-10-42.3-22.6-57.9-37.3c-21.2-20-36.1-44.3-44.3-72.3c-9.5 27.5-22.5 53.4-38.3 77.7C142.4 264.5 98.7 303 48.1 339.6c-8.7 6.3-11.5 17.5-6.8 26.4c2.9 5.6 7.1 10.8 12.2 15.6zM464 256c-36.8-18.3-68.1-40.4-93.2-65.5c-25-25-44.9-53.2-59.4-83.8c-5.4 43.4-17.4 84.2-34.5 119.6c-11.4 23.5-24.9 45.6-40.1 66.1c-31.6 42.6-71.6 79.6-117.8 109.6c-9.7 6.3-12.6 19.1-6.5 29.1c1.2 1.9 2.6 3.7 4.2 5.3c27.6 27.6 70.3 45.8 122.4 45.8c28.2 0 55.2-4.7 80.2-13.1c49.7-16.5 93.7-46.3 124-83.9c21.6-26.9 37.3-58.1 44.8-92.4c2.4-11.2-6.8-21.5-18.1-20.8z",
                  ],
                }}
                transition={{
                  duration: 0.5,
                  repeat: Infinity,
                  repeatType: "reverse",
                }}
              />
            </svg>
          </motion.div>
        ))}
      </div>

      {/* Floating Cross Symbols */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={`cross-${i}`}
            className="absolute text-white/10 text-4xl"
            initial={{
              x: Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1000),
              y: typeof window !== 'undefined' ? window.innerHeight + 50 : 1000,
              rotate: Math.random() * 360,
            }}
            animate={{
              y: -100,
              rotate: Math.random() * 360 + 360,
            }}
            transition={{
              duration: 20 + i * 3,
              repeat: Infinity,
              delay: i * 4,
              ease: "linear",
            }}
          >
            ✟
          </motion.div>
        ))}
      </div>

      <div className="container mx-auto px-4 text-center relative z-10">
        <AnimatePresence mode="wait">
          {showText && (
            <motion.div
              key="text"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 3 }}
              transition={{ 
                animate: { duration: 0.8 },
                exit: { duration: 1 }
              }}
              className="text-white"
            >
              <motion.h1 
                className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6"
                animate={{
                  textShadow: [
                    "0 0 20px rgba(255,215,0,0.5)",
                    "0 0 40px rgba(255,215,0,0.8)",
                    "0 0 20px rgba(255,215,0,0.5)",
                  ],
                }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                25 Years of God's Faithfulness
              </motion.h1>
            </motion.div>
          )}

          {showLogo && (
            <motion.div
              key="logo"
              className="text-white"
            >
              {/* Logo Image */}
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ 
                  duration: 1,
                  ease: "easeOut",
                  type: "spring",
                  stiffness: 80,
                  damping: 15
                }}
                className="mb-8 flex justify-center"
              >
                <motion.img
                  src="/images/logo.png"
                  alt="Everspring International Logo"
                  className="w-48 h-48 md:w-64 md:h-64 lg:w-80 lg:h-80 object-contain"
                  style={{
                    filter: "drop-shadow(0 0 20px rgba(255,215,0,0.6))"
                  }}
                  animate={{
                    filter: [
                      "drop-shadow(0 0 20px rgba(255,215,0,0.6))",
                      "drop-shadow(0 0 40px rgba(255,215,0,0.9))",
                      "drop-shadow(0 0 20px rgba(255,215,0,0.6))",
                    ],
                  }}
                  transition={{ duration: 3, repeat: Infinity }}
                />
              </motion.div>

              {showContent && (
                <>
                  <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4 bg-gradient-to-r from-yellow-400 via-yellow-200 to-yellow-400 bg-clip-text text-transparent"
                  >
                    Everspring International
                  </motion.h1>
                  
                  <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3, duration: 0.6 }}
                    className="text-xl md:text-3xl font-light text-white/90 max-w-3xl mx-auto mb-12"
                  >
                    Serving with compassion and faith since 2000
                  </motion.p>
                  
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6, duration: 0.6 }}
                    className="flex flex-col sm:flex-row gap-4 justify-center"
                  >
                    <motion.a
                      href="#about"
                      className="bg-yellow-500 hover:bg-yellow-600 text-gray-900 px-8 py-4 rounded-lg font-semibold text-lg transition-all relative overflow-hidden group"
                      whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(255,215,0,0.6)" }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <span className="relative z-10">Our Story</span>
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                        initial={{ x: "-100%" }}
                        whileHover={{ x: "100%" }}
                        transition={{ duration: 0.6 }}
                      />
                    </motion.a>
                    <motion.a
                      href="/donate"
                      className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-green-900 px-8 py-4 rounded-lg font-semibold text-lg transition-all"
                      whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(255,255,255,0.4)" }}
                      whileTap={{ scale: 0.95 }}
                    >
                      Make a Difference
                    </motion.a>
                  </motion.div>
                </>
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Scroll Indicator */}
      {showContent && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="w-6 h-10 border-2 border-white rounded-full flex items-start justify-center p-2 cursor-pointer hover:border-yellow-400 transition-colors"
            onClick={() => {
              const aboutSection = document.getElementById('about');
              if (aboutSection) {
                aboutSection.scrollIntoView({ behavior: 'smooth' });
              }
            }}
          >
            <motion.div
              className="w-1 h-3 bg-white rounded-full"
              animate={{ opacity: [1, 0.3, 1] }}
              transition={{ repeat: Infinity, duration: 2 }}
            />
          </motion.div>
        </motion.div>
      )}
    </section>
  );
};

export default Hero;