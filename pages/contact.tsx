import ContactForm from "@/components/ContactForm";
import { motion } from "framer-motion";

export default function Contact() {
  const contactInfo = [
    { icon: "📧", label: "Email", value: "hello@portfolio.com", href: "mailto:hello@portfolio.com" },
    { icon: "📱", label: "Phone", value: "+1 (555) 123-4567", href: "tel:+15551234567" },
    { icon: "📍", label: "Location", value: "San Francisco, CA", href: "#" }
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
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          >
            <motion.h1 
              className="text-4xl lg:text-5xl font-bold tracking-tight mb-4 bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
            >
              Get In Touch
            </motion.h1>
            
            <motion.p 
              className="text-gray-600 text-lg mb-8 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6, ease: "easeOut" }}
            >
              Ready to start your next project? Let&apos;s discuss how I can help bring your vision to life with creative digital solutions.
            </motion.p>
            
            <motion.div 
              className="mt-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8, ease: "easeOut" }}
            >
              <ContactForm />
            </motion.div>
          </motion.div>
          
          <motion.div 
            className="text-sm text-gray-600"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          >
            <motion.h2 
              className="text-2xl font-bold mb-6 text-gray-900"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.0, ease: "easeOut" }}
            >
              Let&apos;s Connect
            </motion.h2>
            
            <motion.ul 
              className="space-y-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 1.2, ease: "easeOut" }}
            >
              {contactInfo.map((item, index) => (
                <motion.li 
                  key={item.label}
                  className="flex items-start gap-4 p-4 rounded-lg bg-white/50 backdrop-blur-sm border border-gray-200/50 hover:shadow-md transition-all duration-300"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: 1.4 + index * 0.1, ease: "easeOut" }}
                  whileHover={{ 
                    scale: 1.02, 
                    x: 4,
                    transition: { duration: 0.2, ease: "easeOut" }
                  }}
                >
                  <span className="text-2xl">{item.icon}</span>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">{item.label}</h3>
                    {item.href !== "#" ? (
                      <a 
                        href={item.href} 
                        className="text-blue-600 hover:text-blue-700 transition-colors duration-300"
                      >
                        {item.value}
                      </a>
                    ) : (
                      <p className="text-gray-600">{item.value}</p>
                    )}
                  </div>
                </motion.li>
              ))}
            </motion.ul>
            
            <motion.div 
              className="mt-8 p-6 rounded-xl bg-gradient-to-br from-blue-50 to-indigo-50 border border-blue-200/50"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.8, ease: "easeOut" }}
            >
              <h3 className="font-semibold text-gray-900 mb-2">Response Time</h3>
              <p className="text-gray-600 text-sm">
                I typically respond to all inquiries within 24 hours. For urgent projects, feel free to reach out directly via phone.
              </p>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}


