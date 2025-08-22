import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useRouter } from "next/router";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const isHomePage = router.pathname === "/";
  
  // Hero section parallax ref and scroll tracking
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });

  // Parallax transforms for hero elements
  const heroY = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const heroScale = useTransform(scrollYProgress, [0, 1], [1, 0.95]);
  
  // Parallax for background elements
  const bgY = useTransform(scrollYProgress, [0, 1], [0, -200]);
  const bgOpacity = useTransform(scrollYProgress, [0, 0.6], [0.3, 0]);

  return (
    <div className="min-h-screen flex flex-col bg-white text-gray-900">
      {isHomePage && (
        <>
          {/* Background wrapper for navbar and hero only */}
          <div 
            ref={heroRef}
            className="relative bg-cover bg-center bg-no-repeat" 
            style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 1200 800\'%3E%3Cdefs%3E%3CradialGradient id=\'a\' cx=\'75%25\' cy=\'25%25\'%3E%3Cstop offset=\'0%25\' stop-color=\'%232487eb\'/%3E%3Cstop offset=\'50%25\' stop-color=\'%23001F3F\'/%3E%3Cstop offset=\'100%25\' stop-color=\'%23000B1A\'/%3E%3C/radialGradient%3E%3Cfilter id=\'noise\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.9\' numOctaves=\'4\' stitchTiles=\'stitch\'/%3E%3CfeColorMatrix type=\'matrix\' values=\'1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 0.1 0\'/%3E%3C/filter%3E%3C/defs%3E%3Crect width=\'1200\' height=\'800\' fill=\'url(%23a)\'/%3E%3Crect width=\'1200\' height=\'800\' filter=\'url(%23noise)\' opacity=\'0.3\'/%3E%3Ccircle cx=\'200\' cy=\'600\' r=\'1\' fill=\'white\' opacity=\'0.6\'/%3E%3Ccircle cx=\'300\' cy=\'500\' r=\'0.5\' fill=\'white\' opacity=\'0.4\'/%3E%3Ccircle cx=\'400\' cy=\'650\' r=\'0.8\' fill=\'white\' opacity=\'0.5\'/%3E%3Ccircle cx=\'150\' cy=\'400\' r=\'0.6\' fill=\'white\' opacity=\'0.3\'/%3E%3Ccircle cx=\'500\' cy=\'300\' r=\'0.7\' fill=\'white\' opacity=\'0.4\'/%3E%3Ccircle cx=\'600\' cy=\'700\' r=\'0.5\' fill=\'white\' opacity=\'0.3\'/%3E%3Ccircle cx=\'250\' cy=\'350\' r=\'0.9\' fill=\'white\' opacity=\'0.5\'/%3E%3Ccircle cx=\'350\' cy=\'200\' r=\'0.6\' fill=\'white\' opacity=\'0.4\'/%3E%3C/svg%3E")' }}
          >
            {/* Parallax background overlay */}
            <motion.div 
              className="absolute inset-0 bg-black/20"
              style={{ y: bgY, opacity: bgOpacity }}
            />
            
            {/* Animated blue elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
              {/* Debug: Static blue circle to test visibility */}
              <div className="absolute w-32 h-32 bg-blue-500/30 rounded-full" style={{ left: "50%", top: "50%", transform: "translate(-50%, -50%)" }} />
              
              {/* Large floating blue circle - positioned away from center content */}
              <motion.div
                className="absolute w-96 h-96 bg-blue-500/20 rounded-full blur-3xl"
                animate={{
                  x: [0, 80, -40, 0],
                  y: [0, -60, 40, 0],
                  scale: [1, 1.2, 0.8, 1],
                }}
                transition={{
                  duration: 20,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                style={{
                  left: "5%",
                  top: "10%",
                }}
              />
              
              {/* Medium floating blue circle - top right corner */}
              <motion.div
                className="absolute w-64 h-64 bg-blue-500/15 rounded-full blur-2xl"
                animate={{
                  x: [0, -80, 60, 0],
                  y: [0, 60, -40, 0],
                  scale: [1, 0.7, 1.3, 1],
                }}
                transition={{
                  duration: 25,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                style={{
                  right: "8%",
                  top: "15%",
                }}
              />
              
              {/* Small floating blue circle - bottom left */}
              <motion.div
                className="absolute w-32 h-32 bg-blue-500/25 rounded-full blur-xl"
                animate={{
                  x: [0, 40, -30, 0],
                  y: [0, -30, 50, 0],
                  scale: [1, 1.4, 0.6, 1],
                }}
                transition={{
                  duration: 18,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                style={{
                  left: "8%",
                  bottom: "15%",
                }}
              />
              
              {/* Floating blue rectangle - bottom right */}
              <motion.div
                className="absolute w-48 h-24 bg-blue-500/20 rounded-2xl blur-lg"
                animate={{
                  x: [0, -60, 80, 0],
                  y: [0, 40, -25, 0],
                  rotate: [0, 15, -10, 0],
                  scale: [1, 1.1, 0.9, 1],
                }}
                transition={{
                  duration: 22,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                style={{
                  right: "10%",
                  bottom: "20%",
                }}
              />
              
              {/* Floating blue triangle - far left */}
              <motion.div
                className="absolute w-0 h-0 border-l-[40px] border-r-[40px] border-b-[60px] border-l-transparent border-r-transparent border-b-blue-500/20 blur-md"
                animate={{
                  x: [0, 60, -40, 0],
                  y: [0, -50, 40, 0],
                  rotate: [0, 45, -30, 0],
                  scale: [1, 0.8, 1.2, 1],
                }}
                transition={{
                  duration: 28,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                style={{
                  left: "2%",
                  bottom: "30%",
                }}
              />
              
              {/* Floating blue dots - corners only */}
              <motion.div
                className="absolute w-4 h-4 bg-blue-500/30 rounded-full"
                animate={{
                  x: [0, 30, -20, 0],
                  y: [0, -25, 30, 0],
                  scale: [1, 1.5, 0.5, 1],
                }}
                transition={{
                  duration: 15,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                style={{
                  right: "5%",
                  top: "25%",
                }}
              />
              
              <motion.div
                className="absolute w-3 h-3 bg-blue-500/40 rounded-full"
                animate={{
                  x: [0, -40, 25, 0],
                  y: [0, 30, -20, 0],
                  scale: [1, 0.7, 1.3, 1],
                }}
                transition={{
                  duration: 19,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                style={{
                  left: "12%",
                  top: "75%",
                }}
              />
              
              {/* Additional visible animated elements - positioned in corners */}
              <motion.div
                className="absolute w-20 h-20 bg-blue-500/25 rounded-full"
                animate={{
                  x: [0, 60, -35, 0],
                  y: [0, -45, 35, 0],
                  scale: [1, 1.3, 0.7, 1],
                }}
                transition={{
                  duration: 16,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                style={{
                  right: "15%",
                  top: "5%",
                }}
              />
              
              <motion.div
                className="absolute w-16 h-16 bg-blue-500/20 rounded-lg"
                animate={{
                  x: [0, -50, 60, 0],
                  y: [0, 40, -25, 0],
                  rotate: [0, 25, -15, 0],
                  scale: [1, 0.8, 1.2, 1],
                }}
                transition={{
                  duration: 21,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                style={{
                  left: "5%",
                  bottom: "8%",
                }}
              />
            </div>
            
            <div className="relative">
              <Navbar />
              {/* Hero section content - Original Size */}
              <motion.section 
                className="relative border-b border-gray-800/50 z-10"
                style={{ y: heroY, opacity: heroOpacity, scale: heroScale }}
              >
                <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 pt-12 pb-16 sm:pt-16 sm:pb-24 md:pt-20 md:pb-32 flex flex-col sm:flex-col md:flex-row items-center gap-8 sm:gap-6 md:gap-10">
                  {/* Left Content */}
                  <motion.div 
                    className="flex-1 text-center md:text-left"
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1, ease: "easeOut" }}
                  >
                    <h1 className="text-5xl sm:text-6xl font-extrabold tracking-tight leading-tight text-white">
                      <span className="font-inter">Creative Digital</span>
                      <br />
                      <span className="font-tiny5">Experiences</span>
                    </h1>
                    
                    <p className="mt-3 text-gray-200 max-w-prose mx-auto md:mx-0 text-base sm:text-lg">
                      I craft user‑friendly and visually engaging digital solutions that combine aesthetic excellence with functional design principles for modern businesses.
                    </p>
                    
                    <div className="mt-6 flex gap-3 justify-center md:justify-start">
                      <motion.a 
                        href="#work" 
                        className="bg-custom-blue text-white px-4 py-2 rounded-lg hover:bg-custom-blue-700 transition-all duration-300 hover:shadow-lg hover:shadow-custom-blue-500/25"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        View Projects
                      </motion.a>
                      
                      <motion.div
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                      <Link 
                        href="/contact" 
                        className="px-4 py-2 rounded-lg border border-white/20 text-white hover:bg-white/10 transition-all duration-300 inline-block"
                      >
                        Get In Touch
                      </Link>
                      </motion.div>
                    </div>
                  </motion.div>
                  
                  {/* Right Content - Profile Image */}
                  <motion.div 
                    className="flex-1 flex justify-center md:justify-end mt-8 sm:mt-0"
                    initial={{ opacity: 0, x: 30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
                  >
                    <div className="relative mx-auto md:ml-auto md:mr-0 size-72 sm:size-88 md:size-[28rem] rounded-full overflow-hidden border border-black/5 shadow-inner">
                      <img src="/images/profile.jpg" alt="Portrait of Lem Tippong" className="w-full h-full object-cover" />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent opacity-0 hover:opacity-100 transition-opacity duration-500" />
                    </div>
                  </motion.div>
                </div>
                
                {/* Scroll indicator */}
                <motion.div 
                  className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1.5, duration: 1 }}
                >
                  <motion.div
                    animate={{ y: [0, 10, 0] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                    className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center"
                  >
                    <motion.div
                      animate={{ y: [0, 12, 0] }}
                      transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                      className="w-1 h-3 bg-white/60 rounded-full mt-2"
                    />
                  </motion.div>
                </motion.div>
              </motion.section>
            </div>
          </div>
          {/* Rest of the content outside background */}
          <main className="flex-1">
            <Component {...pageProps} />
          </main>
        </>
      )}
      {!isHomePage && (
        <>
          <Navbar />
          <main className="flex-1"> 
            <Component {...pageProps} />
          </main>
        </>
      )}
      <Footer />
    </div>
  );
}
