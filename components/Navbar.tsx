import Link from "next/link";
import { motion } from "framer-motion";

export default function Navbar() {
  return (
    <motion.header 
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="sticky top-0 z-40 backdrop-blur-md bg-white/80 border-b border-gray-200/50"
    >
      <nav className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <motion.div
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          transition={{ duration: 0.2, ease: "easeOut" }}
        >
          <Link href="/" className="font-bold text-xl tracking-tight text-gray-900 hover:text-blue-600 transition-colors duration-300">
            Lem Tippong
          </Link>
        </motion.div>
        <ul className="flex items-center gap-6 text-sm">
          {[
            { href: "/", label: "Home" },
            { href: "/about", label: "About" },
            { href: "/contact", label: "Contact" }
          ].map((item, index) => (
            <motion.li
              key={item.href}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
            >
              <Link 
                className="text-gray-600 hover:text-gray-900 transition-colors duration-300 relative group"
                href={item.href}
              >
                {item.label}
                <motion.span 
                  className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-500"
                  initial={{ width: 0 }}
                  whileHover={{ width: "100%" }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                />
              </Link>
            </motion.li>
          ))}
        </ul>
      </nav>
    </motion.header>
  );
}


