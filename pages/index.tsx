import CaseStudyCard from "@/components/CaseStudyCard";
import data from "@/data/case-studies.json";
import Link from "next/link";
import Image from "next/image";
import ContactForm from "@/components/ContactForm";
import { motion } from "framer-motion";

type CaseStudy = {
  title: string;
  slug: string;
  excerpt: string;
  images: string[];
  tags?: string[];
  thumb?: string;
};

// Unified animation system with consistent timing
const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, ease: "easeOut" }
};

const fadeInLeft = {
  initial: { opacity: 0, x: -30 },
  animate: { opacity: 1, x: 0 },
  transition: { duration: 0.8, ease: "easeOut" }
};

const fadeInRight = {
  initial: { opacity: 0, x: 30 },
  animate: { opacity: 1, x: 0 },
  transition: { duration: 0.8, ease: "easeOut" }
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1
    }
  }
};

const staggerItem = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: "easeOut" }
};

export default function Home() {
  const items = (data as CaseStudy[]).map((d) => ({
    ...d,
    cover: d.thumb ?? d.images?.[0] ?? "/images/case-01.jpg",
  }));

  return (
    <motion.div
      initial="initial"
      animate="animate"
      className="overflow-hidden"
    >
      {/* Hero Section */}
      <section className="relative bg-cover bg-center bg-no-repeat border-b border-gray-800/50" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 1200 800\'%3E%3Cdefs%3E%3CradialGradient id=\'a\' cx=\'75%25\' cy=\'25%25\'%3E%3Cstop offset=\'0%25\' stop-color=\'%232487eb\'/%3E%3Cstop offset=\'50%25\' stop-color=\'%23001F3F\'/%3E%3Cstop offset=\'100%25\' stop-color=\'%23000B1A\'/%3E%3C/radialGradient%3E%3Cfilter id=\'noise\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.9\' numOctaves=\'4\' stitchTiles=\'stitch\'/%3E%3CfeColorMatrix type=\'matrix\' values=\'1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 0.1 0\'/%3E%3C/filter%3E%3C/defs%3E%3Crect width=\'1200\' height=\'800\' fill=\'url(%23a)\'/%3E%3Crect width=\'1200\' height=\'800\' filter=\'url(%23noise)\' opacity=\'0.3\'/%3E%3Ccircle cx=\'200\' cy=\'600\' r=\'1\' fill=\'white\' opacity=\'0.6\'/%3E%3Ccircle cx=\'300\' cy=\'500\' r=\'0.5\' fill=\'white\' opacity=\'0.4\'/%3E%3Ccircle cx=\'400\' cy=\'650\' r=\'0.8\' fill=\'white\' opacity=\'0.5\'/%3E%3Ccircle cx=\'150\' cy=\'400\' r=\'0.6\' fill=\'white\' opacity=\'0.3\'/%3E%3Ccircle cx=\'500\' cy=\'300\' r=\'0.7\' fill=\'white\' opacity=\'0.4\'/%3E%3Ccircle cx=\'600\' cy=\'700\' r=\'0.5\' fill=\'white\' opacity=\'0.3\'/%3E%3Ccircle cx=\'250\' cy=\'350\' r=\'0.9\' fill=\'white\' opacity=\'0.5\'/%3E%3Ccircle cx=\'350\' cy=\'200\' r=\'0.6\' fill=\'white\' opacity=\'0.4\'/%3E%3C/svg%3E")' }}>
        <div className="absolute inset-0 bg-black/20"></div>
                 <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-16 sm:py-24 md:py-32 flex flex-col sm:flex-col md:flex-row items-center gap-6 sm:gap-10">
          {/* Left Content */}
          <motion.div 
            className="flex-1 text-center md:text-left"
            variants={fadeInLeft}
            transition={{ delay: 0.3 }}
          >
            <motion.h1 
              className="text-5xl sm:text-6xl font-extrabold tracking-tight leading-tight text-white"
              variants={fadeInUp}
            >
              Creative Digital Experiences
            </motion.h1>
            
            <motion.p 
              className="mt-3 text-gray-200 max-w-prose mx-auto md:mx-0 text-lg"
              variants={fadeInUp}
            >
              I craft user‑friendly and visually engaging digital solutions that combine aesthetic excellence with functional design principles.
            </motion.p>
            
            <motion.div 
              className="mt-6 flex gap-3 justify-center md:justify-start"
              variants={fadeInUp}
            >
              <motion.a 
                href="#work" 
                className="bg-custom-blue text-white px-4 py-2 rounded-lg hover:bg-custom-blue-700 transition-all duration-300 hover:shadow-lg hover:shadow-custom-blue-500/25"
                whileHover={{ 
                  scale: 1.02, 
                  y: -2,
                  transition: { duration: 0.2, ease: "easeOut" }
                }}
                whileTap={{ scale: 0.98 }}
              >
                View Projects
              </motion.a>
              
              <motion.div 
                whileHover={{ 
                  scale: 1.02, 
                  y: -2,
                  transition: { duration: 0.2, ease: "easeOut" }
                }}
                whileTap={{ scale: 0.98 }}
              >
                <Link href="/contact" className="px-4 py-2 rounded-lg border border-white/20 text-white hover:bg-white/10 transition-all duration-300 inline-block">
                  Get In Touch
                </Link>
              </motion.div>
            </motion.div>
          </motion.div>
          
          {/* Right Content - Profile Image */}
          <motion.div 
            className="flex-1 flex justify-center md:justify-end"
            variants={fadeInRight}
            transition={{ delay: 0.3 }}
          >
            <motion.div 
              className="relative mx-auto md:ml-auto md:mr-0 size-64 sm:size-80 md:size-96 rounded-full overflow-hidden border border-black/5 shadow-inner"
              whileHover={{ 
                scale: 1.02, 
                rotate: 1,
                transition: { duration: 0.3, ease: "easeOut" }
              }}
            >
              <Image src="/images/profile.jpg" alt="Portrait of Lem Tippong" fill className="object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent opacity-0 hover:opacity-100 transition-opacity duration-500" />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Work Section */}
      <section id="work" className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-12">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <h2 className="text-2xl sm:text-3xl font-bold mb-2 text-gray-900">Featured Projects</h2>
          <p className="text-gray-600 mb-6">Explore my latest work in web design, mobile apps, and digital experiences.</p>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center"
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: "-100px" }}
        >
          {items.map((item) => (
            <motion.div key={item.slug} variants={staggerItem} className="w-full max-w-sm">
              <CaseStudyCard 
                title={item.title} 
                slug={item.slug} 
                excerpt={item.excerpt} 
                cover={item.cover} 
                tags={item.tags} 
              />
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* About & Contact Section */}
      <section className="bg-gradient-to-br from-gray-50 to-blue-50/30 border-t border-b border-gray-200/50">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-12 grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
          {/* About */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <h2 className="text-2xl sm:text-3xl font-bold mb-2 text-gray-900">About Me</h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              I&apos;m a digital designer and front‑end developer focused on UX, motion, and performance. I partner with teams to turn ideas into usable, beautiful products.
            </p>
            <ul className="mb-6 text-sm text-gray-600 grid grid-cols-2 gap-3">
                          <li className="flex items-center gap-2">
              <span className="w-2 h-2 bg-custom-blue rounded-full"></span>
              <strong>Skills:</strong> UX/UI, Web, Mobile
            </li>
                          <li className="flex items-center gap-2">
              <span className="w-2 h-2 bg-custom-blue rounded-full"></span>
              <strong>Tools:</strong> Figma, Next.js, Tailwind
            </li>
            </ul>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                className="px-4 py-2 rounded border border-black/10 hover:bg-gray-100 transition-all duration-300 inline-block"
                href="/about"
              >
                More about me
              </Link>
            </motion.div>
          </motion.div>
          
          {/* Contact */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <h2 className="text-2xl sm:text-3xl font-bold mb-2 text-gray-900">Get In Touch</h2>
            <p className="text-gray-600 mb-4">Have a project in mind? Let&apos;s discuss how I can help.</p>
            <ContactForm />
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
}
