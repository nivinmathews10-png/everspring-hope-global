import { useState, useEffect } from "react";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import { Heart, Star, Sparkles, Zap } from "lucide-react";

const Hero = () => {
  const [showText, setShowText] = useState(true);
  const [showLogo, setShowLogo] = useState(false);
  const [showContent, setShowContent] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.3], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.3], [1, 0.8]);

  useEffect(() => {
    const textTimer = setTimeout(() => {
      setShowText(false);
      setTimeout(() => {
        setShowLogo(true);
        setTimeout(() => setShowContent(true), 800);
      }, 500);
    }, 3000);

    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ 
        x: (e.clientX / window.innerWidth - 0.5) * 20, 
        y: (e.clientY / window.innerHeight - 0.5) * 20 
      });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      clearTimeout(textTimer);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <motion.section 
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{ opacity, scale }}
    >
      {/* Animated Background Image with Parallax */}
      <div className="absolute inset-0">
        <motion.div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('https://blog.cph.org/hs-fs/hubfs/_blogs/CPH_blog/Serve/2021/09/young-adults-comunity.jpg?width=1000&height=561&name=young-adults-comunity.jpg')",
            x: mousePosition.x,
            y: mousePosition.y,
          }}
          animate={{ scale: [1, 1.05, 1] }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div 
          className="absolute inset-0 bg-gradient-to-b from-[#5D866C]/80 via-[#678E76]/60 to-[#5D866C]/80"
          animate={{
            background: [
              "linear-gradient(to bottom, rgba(93, 134, 108, 0.8), rgba(103, 142, 118, 0.6), rgba(93, 134, 108, 0.8))",
              "linear-gradient(to bottom, rgba(93, 134, 108, 0.7), rgba(103, 142, 118, 0.7), rgba(93, 134, 108, 0.7))",
              "linear-gradient(to bottom, rgba(93, 134, 108, 0.8), rgba(103, 142, 118, 0.6), rgba(93, 134, 108, 0.8))",
            ],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      {/* Animated Gradient Orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute w-96 h-96 rounded-full blur-3xl"
          style={{
            background: "radial-gradient(circle, rgba(194, 166, 140, 0.4) 0%, transparent 70%)",
          }}
          animate={{
            x: ["-20%", "120%"],
            y: ["80%", "20%"],
            scale: [1, 1.5, 1],
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        />
        <motion.div
          className="absolute w-96 h-96 rounded-full blur-3xl"
          style={{
            background: "radial-gradient(circle, rgba(230, 216, 195, 0.3) 0%, transparent 70%)",
          }}
          animate={{
            x: ["120%", "-20%"],
            y: ["20%", "80%"],
            scale: [1.5, 1, 1.5],
          }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
        />
        <motion.div
          className="absolute w-64 h-64 rounded-full blur-2xl"
          style={{
            background: "radial-gradient(circle, rgba(245, 245, 240, 0.2) 0%, transparent 70%)",
          }}
          animate={{
            x: ["50%", "50%"],
            y: ["10%", "90%"],
            scale: [1, 1.3, 1],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      {/* Enhanced Floating Particles with Icons */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(30)].map((_, i) => {
          const icons = [Heart, Star, Sparkles, Zap];
          const Icon = icons[i % icons.length];
          const isShape = i % 3 === 0;
          
          return (
            <motion.div
              key={i}
              className="absolute"
              initial={{
                x: Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1000),
                y: Math.random() * (typeof window !== 'undefined' ? window.innerHeight : 1000),
              }}
              animate={{
                y: [null, Math.random() * -200 - 100],
                x: [null, Math.random() * 150 - 75],
                rotate: [0, 360],
                opacity: [0, 0.6, 0],
                scale: [0.5, 1.2, 0.5],
              }}
              transition={{
                duration: Math.random() * 15 + 15,
                repeat: Infinity,
                delay: Math.random() * 8,
                ease: "easeInOut",
              }}
            >
              {isShape ? (
                <div 
                  className="w-3 h-3 rounded-full bg-gradient-to-br from-[#C2A68C] to-[#E6D8C3]"
                  style={{
                    boxShadow: "0 0 20px rgba(194, 166, 140, 0.6)",
                  }}
                />
              ) : (
                <Icon className="w-6 h-6 text-[#E6D8C3]" strokeWidth={1.5} />
              )}
            </motion.div>
          );
        })}
      </div>

      {/* Light Rays Animation */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={`ray-${i}`}
            className="absolute w-1 h-full origin-bottom"
            style={{
              left: `${(i * 12.5) + 6.25}%`,
              background: "linear-gradient(to top, transparent, rgba(230, 216, 195, 0.15), transparent)",
              transformOrigin: "bottom center",
            }}
            animate={{
              scaleY: [0, 1, 0],
              opacity: [0, 0.5, 0],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              delay: i * 0.5,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      {/* Flying Doves Animation - Enhanced */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={`dove-${i}`}
            className="absolute"
            initial={{
              x: -150,
              y: Math.random() * 400 + 100,
            }}
            animate={{
              x: typeof window !== 'undefined' ? window.innerWidth + 150 : 1200,
              y: [
                null,
                Math.random() * 60 - 30,
                Math.random() * 60 - 30,
                Math.random() * 60 - 30,
                Math.random() * 60 - 30,
              ],
              scale: [0.8, 1.2, 1, 1.3, 0.9],
            }}
            transition={{
              duration: 20 + i * 4,
              repeat: Infinity,
              delay: i * 6,
              ease: "linear",
            }}
          >
            <motion.svg
              width="50"
              height="50"
              viewBox="0 0 512 512"
              className="text-white/70 drop-shadow-2xl"
              fill="currentColor"
              animate={{
                filter: [
                  "drop-shadow(0 0 10px rgba(255,255,255,0.3))",
                  "drop-shadow(0 0 20px rgba(230,216,195,0.5))",
                  "drop-shadow(0 0 10px rgba(255,255,255,0.3))",
                ],
              }}
              transition={{ duration: 2, repeat: Infinity }}
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
                  duration: 0.4,
                  repeat: Infinity,
                  repeatType: "reverse",
                }}
              />
            </motion.svg>
          </motion.div>
        ))}
      </div>

      {/* Floating Cross Symbols - Enhanced */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={`cross-${i}`}
            className="absolute text-4xl md:text-5xl font-bold"
            style={{
              color: "rgba(230, 216, 195, 0.15)",
              textShadow: "0 0 20px rgba(230, 216, 195, 0.3)",
            }}
            initial={{
              x: Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1000),
              y: typeof window !== 'undefined' ? window.innerHeight + 50 : 1000,
              rotate: Math.random() * 360,
              scale: 0.5,
            }}
            animate={{
              y: -150,
              rotate: [null, Math.random() * 360 + 360],
              scale: [0.5, 1.2, 0.8],
              opacity: [0, 0.6, 0],
            }}
            transition={{
              duration: 18 + i * 2,
              repeat: Infinity,
              delay: i * 3,
              ease: "easeInOut",
            }}
          >
            ✟
          </motion.div>
        ))}
      </div>

      {/* Geometric Shapes Animation */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(12)].map((_, i) => {
          const shapes = ['circle', 'square', 'triangle'];
          const shape = shapes[i % 3];
          
          return (
            <motion.div
              key={`shape-${i}`}
              className="absolute"
              initial={{
                x: Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1000),
                y: typeof window !== 'undefined' ? window.innerHeight + 100 : 1000,
                rotate: 0,
              }}
              animate={{
                y: -100,
                x: [null, Math.random() * 100 - 50],
                rotate: 360,
                opacity: [0, 0.3, 0],
              }}
              transition={{
                duration: 25 + i * 2,
                repeat: Infinity,
                delay: i * 2,
                ease: "linear",
              }}
            >
              {shape === 'circle' && (
                <div className="w-8 h-8 rounded-full border-2 border-[#E6D8C3]/30" />
              )}
              {shape === 'square' && (
                <div className="w-8 h-8 border-2 border-[#C2A68C]/30 rotate-45" />
              )}
              {shape === 'triangle' && (
                <div className="w-0 h-0 border-l-[16px] border-l-transparent border-r-[16px] border-r-transparent border-b-[28px] border-b-[#F5F5F0]/30" />
              )}
            </motion.div>
          );
        })}
      </div>

      <div className="container mx-auto px-4 text-center relative z-10">
        <AnimatePresence mode="wait">
          {showText && (
            <motion.div
              key="text"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 3, transition: { duration: 1 } }}
              transition={{ duration: 0.8 }}
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
                className="mb-8 flex justify-center relative"
              >
                {/* Rotating Ring around Logo */}
                <motion.div
                  className="absolute inset-0 w-56 h-56 md:w-72 md:h-72 lg:w-96 lg:h-96 mx-auto"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                >
                  <div className="absolute inset-0 rounded-full border-2 border-dashed border-[#E6D8C3]/30" />
                  {[...Array(8)].map((_, i) => (
                    <motion.div
                      key={i}
                      className="absolute w-3 h-3 bg-[#C2A68C] rounded-full"
                      style={{
                        left: '50%',
                        top: '50%',
                        transform: `rotate(${i * 45}deg) translateY(-${28 + (i % 2) * 8}px) translateX(-6px)`,
                      }}
                      animate={{
                        scale: [1, 1.5, 1],
                        opacity: [0.5, 1, 0.5],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        delay: i * 0.2,
                      }}
                    />
                  ))}
                </motion.div>

                <motion.img
                  src="/images/logo.png"
                  alt="Everspring International Logo"
                  className="w-48 h-48 md:w-64 md:h-64 lg:w-80 lg:h-80 object-contain relative z-10"
                  style={{
                    filter: "drop-shadow(0 0 20px rgba(194, 166, 140, 0.8))"
                  }}
                  animate={{
                    y: [0, -10, 0],
                    filter: [
                      "drop-shadow(0 0 20px rgba(194, 166, 140, 0.8))",
                      "drop-shadow(0 0 40px rgba(230, 216, 195, 1))",
                      "drop-shadow(0 0 20px rgba(194, 166, 140, 0.8))",
                    ],
                  }}
                  transition={{ 
                    y: { duration: 4, repeat: Infinity, ease: "easeInOut" },
                    filter: { duration: 3, repeat: Infinity }
                  }}
                />
              </motion.div>

              {showContent && (
                <>
                  <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="text-responsive-3xl md:text-6xl lg:text-7xl font-bold mb-4 px-4"
                  >
                    <motion.span
                      className="inline-block bg-gradient-to-r from-[#E6D8C3] via-[#F5F5F0] to-[#C2A68C] bg-clip-text text-transparent"
                      animate={{
                        backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                      }}
                      transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
                      style={{ backgroundSize: "200% 200%" }}
                    >
                      Everspring International
                    </motion.span>
                  </motion.h1>
                  
                  <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3, duration: 0.6 }}
                    className="text-responsive-lg md:text-3xl font-light text-white/90 max-w-3xl mx-auto mb-12 px-4"
                  >
                    <motion.span
                      animate={{
                        opacity: [0.9, 1, 0.9],
                      }}
                      transition={{ duration: 3, repeat: Infinity }}
                    >
                      Serving with compassion and faith since 2000
                    </motion.span>
                  </motion.p>
                  
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6, duration: 0.6 }}
                    className="flex flex-col sm:flex-row gap-4 justify-center px-4"
                  >
                    <motion.a
                      href="#about"
                      className="relative bg-gradient-to-r from-[#C2A68C] to-[#E6D8C3] text-[#3F5D4F] px-8 py-4 rounded-xl font-bold text-lg transition-all overflow-hidden group"
                      whileHover={{ 
                        scale: 1.08, 
                        boxShadow: "0 0 40px rgba(194, 166, 140, 0.8)",
                        y: -3,
                      }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-r from-[#E6D8C3] to-[#C2A68C]"
                        initial={{ x: "-100%" }}
                        whileHover={{ x: "100%" }}
                        transition={{ duration: 0.5 }}
                      />
                      <span className="relative z-10 flex items-center gap-2 justify-center">
                        <Heart className="w-5 h-5" />
                        Our Story
                      </span>
                    </motion.a>
                    <motion.a
                      href="/donate"
                      className="relative bg-transparent border-2 border-[#F5F5F0] text-white hover:bg-[#F5F5F0] hover:text-[#5D866C] px-8 py-4 rounded-xl font-bold text-lg transition-all overflow-hidden group"
                      whileHover={{ 
                        scale: 1.08, 
                        boxShadow: "0 0 40px rgba(245, 245, 240, 0.5)",
                        y: -3,
                      }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <motion.div
                        className="absolute inset-0"
                        animate={{
                          background: [
                            "linear-gradient(90deg, transparent, rgba(245, 245, 240, 0.1), transparent)",
                            "linear-gradient(90deg, transparent, rgba(245, 245, 240, 0.1), transparent)",
                          ],
                          x: ["-100%", "100%"],
                        }}
                        transition={{ duration: 2, repeat: Infinity }}
                      />
                      <span className="relative z-10 flex items-center gap-2 justify-center">
                        <Sparkles className="w-5 h-5" />
                        Make a Difference
                      </span>
                    </motion.a>
                  </motion.div>
                </>
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Enhanced Scroll Indicator */}
      {showContent && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20"
        >
          <motion.div
            className="relative cursor-pointer group"
            onClick={() => {
              const aboutSection = document.getElementById('about');
              if (aboutSection) {
                aboutSection.scrollIntoView({ behavior: 'smooth' });
              }
            }}
          >
            {/* Pulse rings */}
            <motion.div
              className="absolute inset-0 w-12 h-16 border-2 border-[#E6D8C3]/40 rounded-full -translate-x-3 -translate-y-3"
              animate={{
                scale: [1, 1.3, 1],
                opacity: [0.5, 0, 0.5],
              }}
              transition={{ repeat: Infinity, duration: 2 }}
            />
            
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ repeat: Infinity, duration: 2 }}
              className="w-6 h-10 border-2 border-[#F5F5F0] rounded-full flex items-start justify-center p-2 hover:border-[#C2A68C] transition-colors backdrop-blur-sm bg-white/5"
            >
              <motion.div
                className="w-1 h-3 bg-gradient-to-b from-[#F5F5F0] to-[#C2A68C] rounded-full"
                animate={{ 
                  opacity: [1, 0.3, 1],
                  scaleY: [1, 0.5, 1],
                }}
                transition={{ repeat: Infinity, duration: 2 }}
              />
            </motion.div>

            <motion.p
              className="text-[#F5F5F0] text-xs mt-2 text-center font-semibold tracking-wider"
              animate={{ opacity: [0.7, 1, 0.7] }}
              transition={{ repeat: Infinity, duration: 2 }}
            >
              SCROLL
            </motion.p>
          </motion.div>
        </motion.div>
      )}
    </motion.section>
  );
};

export default Hero;