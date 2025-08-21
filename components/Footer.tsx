import { motion } from "framer-motion";

export default function Footer() {
  return (
    <motion.footer 
      className="border-t border-gray-200/50 mt-16 bg-gradient-to-r from-gray-50 to-blue-50/30"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true, margin: "-50px" }}
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-12 text-sm text-gray-600 flex flex-col sm:flex-row items-center justify-between gap-6">
        <motion.p 
          className="text-gray-700 font-medium"
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.2, ease: "easeOut" }}
        >
          © {new Date().getFullYear()} Lem Tippong. All rights reserved.
        </motion.p>
        <div className="flex items-center gap-6">
          {[
            { href: "https://github.com", label: "GitHub", icon: "🐙" },
            { href: "https://www.linkedin.com", label: "LinkedIn", icon: "💼" }
          ].map((link, index) => (
            <motion.a 
              key={link.href}
              className="flex items-center gap-2 text-gray-600 hover:text-blue-600 transition-colors duration-300 group"
              href={link.href} 
              target="_blank" 
              rel="noreferrer"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1, ease: "easeOut" }}
              viewport={{ once: true }}
              whileHover={{ 
                scale: 1.05, 
                y: -2,
                transition: { duration: 0.2, ease: "easeOut" }
              }}
            >
              <span className="text-lg group-hover:scale-110 transition-transform duration-300 ease-out">
                {link.icon}
              </span>
              <span className="font-medium">{link.label}</span>
            </motion.a>
          ))}
        </div>
      </div>
    </motion.footer>
  );
}


