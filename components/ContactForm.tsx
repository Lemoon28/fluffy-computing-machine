import { useState } from "react";
import { motion } from "framer-motion";

export default function ContactForm() {
  const [status, setStatus] = useState<string | null>(null);

  const formVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0
    }
  };

  const inputVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { 
      opacity: 1, 
      x: 0
    }
  };

  return (
    <motion.form
      className="grid grid-cols-1 gap-5 max-w-xl"
      action="https://formspree.io/f/mwkgrzqa"
      method="POST"
      onSubmit={() => setStatus("Sending...")}
      variants={formVariants}
      initial="hidden"
      animate="visible"
      transition={{
        duration: 0.8,
        ease: "easeOut",
        staggerChildren: 0.1
      }}
    >
      <motion.div 
        variants={inputVariants}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <input 
          className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 ease-out bg-white/50 backdrop-blur-sm" 
          type="text" 
          name="name" 
          placeholder="Your Name" 
          required 
        />
      </motion.div>
      
      <motion.div 
        variants={inputVariants}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <input 
          className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 ease-out bg-white/50 backdrop-blur-sm" 
          type="email" 
          name="email" 
          placeholder="Email" 
          required 
        />
      </motion.div>
      
      <motion.div 
        variants={inputVariants}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <input 
          className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 ease-out bg-white/50 backdrop-blur-sm" 
          type="text" 
          name="subject" 
          placeholder="Subject" 
        />
      </motion.div>
      
      <motion.div 
        variants={inputVariants}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <textarea 
          className="w-full border border-gray-300 rounded-lg px-4 py-3 min-h-[140px] focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 ease-out bg-white/50 backdrop-blur-sm resize-none" 
          name="message" 
          placeholder="Tell me about your project..." 
          required 
        />
      </motion.div>
      
      <motion.div 
        variants={inputVariants}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <motion.button 
          className="w-full bg-blue-600 text-white rounded-lg px-6 py-3 font-medium hover:bg-blue-700 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/25" 
          type="submit"
          whileHover={{ 
            scale: 1.02, 
            y: -2,
            transition: { duration: 0.2, ease: "easeOut" }
          }}
          whileTap={{ scale: 0.98 }}
        >
          Send Message
        </motion.button>
      </motion.div>
      
      {status && (
        <motion.p 
          className="text-sm text-gray-600 text-center"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ 
            duration: 0.4, 
            ease: "easeOut"
          }}
        >
          {status}
        </motion.p>
      )}
    </motion.form>
  );
}


