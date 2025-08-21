import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function About() {
  const skills = [
    { category: "Skills", items: ["UX/UI", "Web", "Mobile", "Branding"] },
    { category: "Tools", items: ["Figma", "Next.js", "Tailwind CSS"] },
    { category: "Motion", items: ["Framer Motion", "CSS Animations"] },
    { category: "Data Viz", items: ["D3", "Python", "Charts"] }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50/30">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-20">
        <motion.div 
          className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.div 
            className="relative aspect-square w-full max-w-lg mx-auto lg:mx-0 rounded-2xl overflow-hidden border border-gray-200/50 shadow-2xl"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            whileHover={{ 
              scale: 1.02, 
              rotate: 1,
              transition: { duration: 0.3, ease: "easeOut" }
            }}
          >
            <Image src="/images/profile.jpg" alt="Portrait of Lem Tippong" fill className="object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 hover:opacity-100 transition-opacity duration-500" />
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          >
            <motion.h1 
              className="text-4xl lg:text-5xl font-bold tracking-tight mb-6 bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6, ease: "easeOut" }}
            >
              About Me
            </motion.h1>
            
            <motion.p 
              className="text-gray-600 leading-relaxed text-lg mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8, ease: "easeOut" }}
            >
              I am a passionate digital designer and front‑end developer with over 5 years of experience crafting user‑centered solutions. I blend creative direction with systems‑thinking to deliver designs that feel effortless and perform beautifully.
            </motion.p>
            
            <motion.div 
              className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.0, ease: "easeOut" }}
            >
              {skills.map((skillGroup, groupIndex) => (
                <motion.div 
                  key={skillGroup.category}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: 1.2 + groupIndex * 0.1, ease: "easeOut" }}
                >
                  <h3 className="font-semibold text-gray-900 mb-2">{skillGroup.category}:</h3>
                  <div className="flex flex-wrap gap-2">
                    {skillGroup.items.map((item, index) => (
                      <motion.span 
                        key={item}
                        className="text-sm bg-blue-50 text-blue-700 rounded-full px-3 py-1.5 border border-blue-200/50"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ 
                          duration: 0.3, 
                          delay: 1.4 + groupIndex * 0.1 + index * 0.05,
                          ease: "easeOut"
                        }}
                        whileHover={{ 
                          scale: 1.1, 
                          backgroundColor: "#dbeafe",
                          transition: { duration: 0.2, ease: "easeOut" }
                        }}
                      >
                        {item}
                      </motion.span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </motion.div>
            
            <motion.div 
              className="flex flex-col sm:flex-row gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.4, ease: "easeOut" }}
            >
              <motion.div 
                whileHover={{ 
                  scale: 1.02, 
                  y: -2,
                  transition: { duration: 0.2, ease: "easeOut" }
                }}
                whileTap={{ scale: 0.98 }}
              >
                <Link 
                  className="px-6 py-3 rounded-lg bg-blue-600 text-white font-medium hover:bg-blue-700 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/25 inline-block" 
                  href="/contact"
                >
                  Let's Work Together
                </Link>
              </motion.div>
              <motion.div 
                whileHover={{ 
                  scale: 1.02, 
                  y: -2,
                  transition: { duration: 0.2, ease: "easeOut" }
                }}
                whileTap={{ scale: 0.98 }}
              >
                <a 
                  className="px-6 py-3 rounded-lg border border-gray-300 hover:bg-gray-50 transition-all duration-300 inline-block" 
                  href="https://www.linkedin.com" 
                  target="_blank" 
                  rel="noreferrer"
                >
                  LinkedIn
                </a>
              </motion.div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}


