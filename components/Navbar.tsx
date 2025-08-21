import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";

export default function Navbar() {
  const router = useRouter();
  const isHomePage = router.pathname === "/";
  
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    // Only apply scroll-based background behavior on home page
    if (!isHomePage) {
      setIsScrolled(true);
      return;
    }

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Check if scrolled past hero section for background change
      setIsScrolled(currentScrollY > 100);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [isHomePage]);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  const navItems = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" }
  ];

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ 
        duration: 0.8, 
        ease: "easeOut" 
      }}
      className={`sticky top-0 z-40 backdrop-blur-md transition-all duration-300 ${
        isScrolled
          ? "bg-white/80 border-b border-gray-200/50"
          : "bg-transparent"
      }`}
    >
      <nav className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <motion.div 
          whileHover={{ scale: 1.02 }} 
          whileTap={{ scale: 0.98 }} 
          transition={{ duration: 0.2, ease: "easeOut" }}
        >
          <Link
            href="/"
            className={`font-bold text-xl tracking-tight transition-colors duration-300 ${
              isScrolled ? "text-gray-900 hover:text-custom-blue" : "text-white hover:text-blue-200"
            }`}
          >
            Lem Tippong
          </Link>
        </motion.div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center gap-6 text-sm">
          {navItems.map((item, index) => (
            <motion.li
              key={item.href}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
            >
              <Link
                className={`transition-colors duration-300 relative group ${
                  isScrolled ? "text-gray-600 hover:text-gray-900" : "text-white/90 hover:text-white"
                }`}
                href={item.href}
              >
                {item.label}
                <motion.span
                  className={`absolute -bottom-1 left-0 h-0.5 transition-all duration-300 ${
                    isScrolled ? "bg-custom-blue" : "bg-white"
                  }`}
                  initial={{ width: 0 }}
                  whileHover={{ width: "100%" }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                />
              </Link>
            </motion.li>
          ))}
        </ul>

        {/* Mobile Hamburger Button */}
        <button
          onClick={toggleMobileMenu}
          className={`md:hidden p-2 rounded-lg transition-colors duration-300 ${
            isScrolled 
              ? "text-gray-600 hover:text-gray-900 hover:bg-gray-100" 
              : "text-white hover:text-blue-200 hover:bg-white/10"
          }`}
          aria-label="Toggle mobile menu"
        >
          <div className="w-6 h-6 flex flex-col justify-center items-center">
            <motion.span
              animate={isMobileMenuOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className={`w-6 h-0.5 bg-current transition-all duration-300 ${
                isMobileMenuOpen ? "bg-current" : ""
              }`}
            />
            <motion.span
              animate={isMobileMenuOpen ? { opacity: 0 } : { opacity: 1 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="w-6 h-0.5 bg-current mt-1.5"
            />
            <motion.span
              animate={isMobileMenuOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="w-6 h-0.5 bg-current mt-1.5"
            />
          </div>
        </button>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className={`md:hidden overflow-hidden ${
              isScrolled ? "bg-white/95" : "bg-black/90"
            }`}
          >
            <div className="px-4 py-6 space-y-4">
              {navItems.map((item, index) => (
                <motion.div
                  key={item.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1, ease: "easeOut" }}
                >
                  <Link
                    href={item.href}
                    onClick={closeMobileMenu}
                    className={`block text-lg font-medium transition-colors duration-300 ${
                      isScrolled 
                        ? "text-gray-900 hover:text-custom-blue" 
                        : "text-white hover:text-blue-200"
                    }`}
                  >
                    {item.label}
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}


