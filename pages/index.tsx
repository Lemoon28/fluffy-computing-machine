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
      <section className="bg-gradient-to-br from-gray-50 to-blue-50/30 border-b border-gray-200/50">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-16 sm:py-20 flex flex-col md:flex-row items-center gap-10">
          {/* Left Content */}
          <motion.div 
            className="flex-1 text-left sm:text-center md:text-left"
            variants={fadeInLeft}
            transition={{ delay: 0.3 }}
          >
            <motion.h1 
              className="text-4xl sm:text-5xl font-extrabold tracking-tight leading-tight bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent"
              variants={fadeInUp}
            >
              Creative Digital Experiences
            </motion.h1>
            
            <motion.p 
              className="mt-3 text-gray-600 max-w-prose sm:mx-auto md:mx-0"
              variants={fadeInUp}
            >
              I craft user‑friendly and visually engaging digital solutions that combine aesthetic excellence with functional design principles.
            </motion.p>
            
            <motion.div 
              className="mt-6 flex gap-3 justify-start sm:justify-center md:justify-start"
              variants={fadeInUp}
            >
              <motion.a 
                href="#work" 
                className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/25"
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
                <Link href="/contact" className="px-4 py-2 rounded border border-black/10 hover:bg-gray-100 transition-all duration-300 inline-block">
                  Get In Touch
                </Link>
              </motion.div>
            </motion.div>
          </motion.div>
          
          {/* Right Content - Profile Image */}
          <motion.div 
            className="flex-1 flex md:justify-end"
            variants={fadeInRight}
            transition={{ delay: 0.3 }}
          >
            <motion.div 
              className="relative mx-auto md:ml-auto md:mr-0 size-72 sm:size-84 rounded-full overflow-hidden border border-black/5 shadow-inner"
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

      {/* About Me Section */}
      <section className="bg-gradient-to-br from-gray-50 to-blue-50/30 border-t border-b border-gray-200/50">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-12">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <h2 className="text-2xl sm:text-3xl font-bold mb-2 text-gray-900">About Me</h2>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              I&apos;m a digital designer and front‑end developer focused on UX, motion, and performance. I partner with teams to turn ideas into usable, beautiful products.
            </p>
          </motion.div>
          
          <motion.div
            className="max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-8">
              <div>
                <h3 className="text-lg font-semibold mb-3 text-gray-900">Skills & Expertise</h3>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                    UX/UI Design & Research
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                    Web & Mobile Development
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                    Motion & Interaction Design
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                    Performance Optimization
                  </li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold mb-3 text-gray-900">Tools & Technologies</h3>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                    Figma, Sketch, Adobe Creative Suite
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                    Next.js, React, TypeScript
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                    Tailwind CSS, Framer Motion
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                    Node.js, Git, Vercel
                  </li>
                </ul>
              </div>
            </div>
            
            <motion.div 
              className="text-center"
              whileHover={{ 
                scale: 1.02, 
                y: -2,
                transition: { duration: 0.2, ease: "easeOut" }
              }}
              whileTap={{ scale: 0.98 }}
            >
              <Link href="/about" className="px-6 py-3 rounded border border-black/10 hover:bg-gray-100 transition-all duration-300 inline-block">
                Learn More About Me
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="bg-white">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-12">
          <motion.div
            className="text-center mb-8"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <h2 className="text-2xl sm:text-3xl font-bold mb-2 text-gray-900">Get In Touch</h2>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">Have a project in mind? Let&apos;s discuss how I can help bring your ideas to life.</p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <ContactForm />
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
}
