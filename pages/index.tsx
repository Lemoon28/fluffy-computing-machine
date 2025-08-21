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
